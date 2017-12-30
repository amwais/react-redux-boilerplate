import React from 'react';
import { increment, decrement, reset } from '../../actions/counter';

const Counter = (props) => (
  <div>
    <p>{props.count}</p>
    <button onClick={() => props.dispatch(increment())}>Increment</button>
    <button onClick={() => props.dispatch(decrement())}>Decrement</button>
    <button onClick={() => props.dispatch(reset())}>Reset</button>
  </div>
);

export default Counter;