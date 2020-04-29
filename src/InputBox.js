import React from 'react';

const InputBox = ({InputChange, onButtonRestart}) => {
	return (
		<div className = 'pa2'>
			<input 
				className = 'pa3 ba bw1 shadow-5 br3 b--blue bg-lightest-blue'
				type='filter' 
				placeholder='quantity of cats' 
				onChange={InputChange}
			/>
			<div className = 'pa1'></div>
			<button 
				className = 'pa1 grow ba bw1 shadow-5 br3 b--blue bg-lightest-blue'
				onClick = {onButtonRestart}
			>Restart</button>
		</div>
	);
}

export default InputBox;