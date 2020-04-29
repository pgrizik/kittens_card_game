import React from 'react';
import Card from './Card';


const CardList = ({ robots, onButtonFlip }) => {
	return (
		<div>
			{robots.map((record, i) => {
				return (
					<Card 
					key={i} 
					id={robots[i].id} 
					id2={robots[i].id2}
					name={robots[i].username}
					onButtonFlip={onButtonFlip}
					/>
				);
			})}
		</div>
		);
}

export default CardList