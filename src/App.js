import React, { Component } from 'react';
import CardList from './CardList'
import InputBox from './InputBox'

class App extends Component {
	constructor () {
		super()
		this.state = {
			robots: [],
			inputbox: 10,
		}
		this.i = 0;
		this.prevCard=null;
		this.catsleft = 10;
	}

	componentDidMount () {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users=> this.setState({robots:users}));
	}

	onInputChange = (event) => {
		this.setState({inputbox:event.target.value});
		this.catsleft = Number(event.target.value);
		// console.log('catsleft',this.catsleft);
	}

	onButtonRestart = () => {
		// this.setState({inputbox:this.state.inputbox});
		window.location.reload();
	}

	onButtonFlip = (id,id2) => {
		if (this.i !== 2) {
			// console.log(id,id2, this.prevCard);
			if (!document.getElementById(id).getAttribute('class').includes('hover')) {
				document.getElementById(id).setAttribute('class','flip-container hover dib br3 ma2 grow bw2 shadow-5 tc');
				this.i++;
			}
			if (this.i === 2) {
				const check2Cards = async function (prevCard) {
					// console.log('start await');
					await new Promise(r => setTimeout(r, 2000));
					// console.log('doing');
					if (prevCard.getAttribute('id2') == id2) {
						// console.log('match')
						document.getElementById(id2).setAttribute('class','flip-container hide hover dib br3 ma2 grow bw2 shadow-5 tc');
						document.getElementById(id2+'_clone').setAttribute('class','flip-container hide hover dib br3 ma2 grow bw2 shadow-5 tc');
						return [0,-1];
					} else {
						// console.log('notmatch')
						prevCard.setAttribute('class','flip-container dib br3 ma2 grow bw2 shadow-5 tc');
						document.getElementById(id).setAttribute('class','flip-container dib br3 ma2 grow bw2 shadow-5 tc');
						return [0,0];
					}
					
				}
				check2Cards(this.prevCard)
					.then((res) => {
						this.i = res[0];
						this.catsleft += res[1];
						// console.log('i=', this.i,'new catsleft', this.catsleft);
						if (this.catsleft == 0) {
							window.alert('you won!!!')
							window.location.reload();
						}						
					});
			}
			// console.log(this.i);
			this.prevCard = document.getElementById(id);
		}

	}


	render() {
		function shuffleArray(array) {
	    for (let i = array.length - 1; i > 0; i--) {
	      const j = Math.floor(Math.random() * (i + 1));
	      [array[i], array[j]] = [array[j], array[i]];
	    }
	   	return array;
		}

		const filteredCats = shuffleArray(shuffleArray(this.state.robots).reduce((res,x) => {
			if (res.length < (this.state.inputbox*2)) {
				x['id2']=x['id']
				res.push(x);
				let y = {...x}
				y['id']=y['id']+'_clone'
				res.push(y);
			}
			return res;
		},[]));

		if (!this.state.robots.length) {
			return <h1 className = 'f1 tc'>Loading...</h1>
		} else {
			return (
				<div className = 'tc'>
					<h1>Kittens Game</h1>
					<InputBox 
						InputChange = {this.onInputChange}
						onButtonRestart = {this.onButtonRestart}
					/>
					<CardList 
						robots = {filteredCats}
						onButtonFlip = {this.onButtonFlip}
					/>
				</div>
			);
		}
	}
}

export default App;




