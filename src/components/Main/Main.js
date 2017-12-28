import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    value: "This title can be changed",
    count: 0
  };

  componentDidMount() {
    // this.props.fetchData();
  };

  onIncrement = () => {
    this.setState(() => {
      return {
        count: this.state.count + 1
      }      
    });
  }

  onDecrement = () => {
    this.setState(() => {
      return {
        count: this.state.count - 1
      }      
    });
  };

  onReset = () => {
    this.setState(() => {
      return {
        count: 0
      }      
    });
  };

  handleChagneTitle = (e) => {
    e.preventDefault();

    if (e.target.elements.input.value) {
      const value = e.target.elements.input.value
      console.log(value);
      this.setState(() => {
        return {
          value
        }        
      });      
      e.target.elements.input.value = '';
    }
  }

  render() {
    // const { fetchSatellitesError, isFetchingSatellites, satelliteStatus } = this.props;
    
    return (
      <div>
        <h1>{this.state.value}</h1>
        <form onSubmit={this.handleChagneTitle}>
          <input type="text" name="input"></input>
          <button>Change Title</button>
        </form>
        <p>{this.state.count}</p>
        <button onClick={this.onIncrement}>Increase</button>
        <button onClick={this.onDecrement}>Decrease</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}