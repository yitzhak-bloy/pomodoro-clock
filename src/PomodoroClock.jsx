import React, { Component } from 'react';
// import { accurateInterval } from 'accurate-interval'



import Session from './components/Session';
import Break from './components/Break';
import Timer from './components/Timer';
const accurateInterval = require('accurate-interval');

// import './PomodoroClock.css';

let foo;
let foo1;


class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      minutes: 0,
      seconds: 0,
      start_stop: true
    };
  }

  componentDidMount() {
    this.setState({
      minutes: this.state.sessionLength
    })
  }

  handleClickSessionDecrement = () => {
    this.state.sessionLength < 60 ?
    this.setState ({
      sessionLength: this.state.sessionLength + 1
    })
    :
    console.log('not be able to set a session or break length to > 60')
  }

  handleClickSessionIncrement = () => {
    this.state.sessionLength > 1 ?
    this.setState ({
      sessionLength: this.state.sessionLength - 1
    })
    :
    console.log('not be able to set a session or break length to <= 0')
  }

  handleClickbreakDecrement = () => {
    this.state.breakLength < 60 ?
    this.setState ({
      breakLength: this.state.breakLength + 1
    })
    :
    console.log('not be able to set a session or break length to > 60')
  }

  handleClickbreakIncrement = () => {
    this.state.breakLength > 1 ?
    this.setState ({
      breakLength: this.state.breakLength - 1
    })
    :
    console.log('not be able to set a session or break length to <= 0')
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
    this.setState ({
      minutes: this.state.minutes - 1
    })
  }

  handleBreakLength = () => {
    this.setState({
      minutes: this.state.breakLength
    })
  }

  myTimerMinutes = () => {
    if (this.state.seconds === 0) {
      this.setState ({
        minutes: this.state.minutes - 1
      })
    }
  }

  zxc = () => {
    if (this.state.start_stop) {
      if (this.state.minutes === this.state.sessionLength) {
      setTimeout(this.mySetTimeout, 1000)
      }
      foo1 = accurateInterval(this.myTimerSeconds, 1000);
      foo = accurateInterval(this.myTimerMinutes, 1000);
    } else {
        foo.clear();
        foo1.clear();
    }
  }

  handleClickStartStop = () => {
    this.zxc()
    this.setState ({
      start_stop: !this.state.start_stop
    })
  }

  handleClickReset = () => {
    if (foo1 && foo) {
      foo.clear();
      foo1.clear();
    } else {
      console.log('sfds')
    }

    this.setState ({
      sessionLength: 25,
      breakLength: 5,
      minutes: 25,
      seconds: 0,
      start_stop: true
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
        <Timer
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          handleClickStart={this.handleClickStartStop}
          handleClickReset={this.handleClickReset}
        />
      </div>
    );
  }
}

export default PomodoroClock;