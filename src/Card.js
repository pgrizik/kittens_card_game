import React from 'react';
import './Card.css';

const Card = ({id, id2, name, onButtonFlip}) => {
	return (
		<div className="flip-container dib br3 ma2 grow bw2 shadow-5 tc"
			onClick = {() => onButtonFlip(id, id2)}
			id={id}
			id2={id2}
		>
			<div className="flipper">
				<div className="front">
					<div>
						<div className = 'shirt ba bw4 br3 b--white-80 tc'>
						</div> 
					</div>		
				</div>
				<div className="back">
					<div className = 'ph0 pv3 tc'>
						<img alt = 'Cat' src={`https://robohash.org/${id2}?set=set4&size=150x150`} /> 
					</div>				
				</div>
			</div>
		</div>
	);
}

export default Card;