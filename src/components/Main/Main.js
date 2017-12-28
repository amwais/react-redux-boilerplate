import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    headerTitle: "Multi-purpose app"
  };


  componentDidMount() {
    // this.props.fetchData();
  };

  render() {
    console.log('Hello');

    // const { fetchSatellitesError, isFetchingSatellites, satelliteStatus } = this.props;
    
    return (
      <div>
        <h1>{this.state.headerTitle}</h1>
      </div>
    );
  }
}