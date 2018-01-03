import React from 'react';

const Counter = (props) => {
	const handleIncrement = () => {
		props.increment();
	};
	const handleDecrement = () => {
		props.decrement();
	};
	const handleReset = () => {
		props.reset();
	};
	return (
		<div>
			<p>{props.count}</p>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
};

export default Counter;