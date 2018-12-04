import React, { Component } from 'react';

import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      odometerValue: 0
    };
  }

  async componentDidMount() {
    this.setState({ odometerValue: 8.6 });
  }

  render() {
    const { odometerValue } = this.state;

    return (
      // jsx
      <Odometer format='(.ddd),dd' duration={1000} value={odometerValue} />
    );
  }
}

export default App;
