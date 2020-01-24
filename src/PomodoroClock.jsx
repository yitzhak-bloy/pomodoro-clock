import React, { Component } from 'react';

import Session from './components/Session';
import Break from './components/Break';
import Timer from './components/Timer';
// import './PomodoroClock.css';

class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5
    };
  }

  handleClickSessionDecrement = () => {
    this.setState ({
      sessionLength: this.state.sessionLength + 1
    })
  }

  handleClickSessionIncrement = () => {
    this.setState ({
      sessionLength: this.state.sessionLength - 1
    })
  }

  handleClickbreakDecrement = () => {
    this.setState ({
      breakLength: this.state.breakLength + 1
    })
  }

  handleClickbreakIncrement = () => {
    this.setState ({
      breakLength: this.state.breakLength - 1
    })
  }

  render() {
    return (
      <div className="PomodoroClock">
        <h1>Session שלום אפליקציה</h1>
        <Session 
          handleClickDecrement={this.handleClickSessionDecrement} 
          handleClickIncrement={this.handleClickSessionIncrement} 
          sessionLength={this.state.sessionLength}
        />
        <h1>Break שלום אפליקציה</h1>
        <Break 
          handleClickDecrement={this.handleClickbreakDecrement} 
          handleClickIncrement={this.handleClickbreakIncrement} 
          breakLength={this.state.breakLength}
        />
        <h1>Timer שלום אפליקציה</h1>
        <Timer />
      </div>
    );
  }
}

export default PomodoroClock;