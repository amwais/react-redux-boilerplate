import React from 'react';

const Title = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const title = e.target.elements.input.value;
		title && props.onSubmit({ title });
		e.target.elements.input.value = '';
	};
	const handleClick = () => {
		props.onReset();
	};
	return (
		<div>
			<h1>{props.title}</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" name="input"></input>
				<button>Change Title</button>
				<button onClick={handleClick}>Reset Title</button>
			</form>
		</div>
	);
};

export default Title;
