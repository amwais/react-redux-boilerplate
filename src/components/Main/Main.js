import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    value: "TITLE",
    count: 0
  };

  componentDidMount() {
    // this.props.fetchData();
  };

  onIncrease = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  onDecrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  onReset = () => {
    this.setState({
      count: 0
    });
  };

  handleChagneTitle = (e) => {
    e.preventDefault();
    this.setState({
      value: e.target.elements.input.value
    });

    e.target.elements.input.value = '';
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
        <button onClick={this.onIncrease}>Increase</button>
        <button onClick={this.onDecrease}>Decrease</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}