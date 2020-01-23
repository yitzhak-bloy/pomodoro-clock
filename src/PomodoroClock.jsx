import React, { Component } from 'react';

import Session from './components/Session';
import Break from './components/Break';
import Timer from './components/Timer';
// import './PomodoroClock.css';

class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="PomodoroClock">
        <h1>Session שלום אפליקציה</h1>
        <Session />
        <h1>Break שלום אפליקציה</h1>
        <Break />
        <h1>Timer שלום אפליקציה</h1>
        <Timer />
      </div>
    );
  }
}

export default PomodoroClock;