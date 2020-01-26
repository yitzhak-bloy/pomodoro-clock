import React, { Component } from 'react';
// import { accurateInterval } from 'accurate-interval'



import Session from './components/Session';
import Break from './components/Break';
import Timer from './components/Timer';
const accurateInterval = require('accurate-interval');

// import './PomodoroClock.css';

class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 12,
      breakLength: 5,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.setState({
      minutes: this.state.sessionLength
    })
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

  myTimerMinutes = () => {
    this.state.minutes ?
    this.setState ({
      minutes: this.state.minutes - 1
    })
    :
    this.setState ({
      minutes: this.state.sessionLength
    })
  }

  myTimerSeconds = () => {
    this.state.seconds ?
    this.setState ({
      seconds: this.state.seconds - 1
    })
    :
    this.setState ({
      seconds: 59
    })
  }

  mySetTimeout = () => {
    this.state.minutes ?
    this.setState ({
      minutes: this.state.minutes - 1
    })
    :
    this.setState ({
      minutes: this.state.sessionLength
    })
  }


  handleClickStart = () => {
    setTimeout(this.mySetTimeout, 1000)
    accurateInterval(this.myTimerMinutes, 60 * 1000);
    accurateInterval(this.myTimerSeconds, 1000);
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
        <Timer
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          handleClickStart={this.handleClickStart}
        />
      </div>
    );
  }
}

export default PomodoroClock;