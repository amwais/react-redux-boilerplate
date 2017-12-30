import React from 'react';
import { setTitle, resetTitle } from '../../actions/title';

const Title = (props) => (
  <div>
    <h1>{props.title}</h1>
    <form onSubmit={(e) => {
      e.preventDefault();
      const title = e.target.elements.input.value;
      title && props.dispatch(setTitle({ title }));
      e.target.elements.input.value = '';
    }}>
      <input type="text" name="input"></input>
      <button>Change Title</button>
      <button onClick={() => props.dispatch(resetTitle())}>Reset Title</button>
    </form>
  </div>
);

export default Title;
