import React, { Component } from 'react';
import './PomodoroClock.css';

// import { accurateInterval } from 'accurate-interval'

import Session from './components/Session';
import Break from './components/Break';
import Timer from './components/Timer';
const accurateInterval = require('accurate-interval');


let interval;

class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      minutes: 0,
      seconds: 0,
      start_stop: true,
      timerLabel: 'session'
    };
  }

  audioRef = React.createRef();

  componentDidMount() {
    this.setState({
      minutes: this.state.sessionLength
    })
  }

  handleClickSessionDecrement = () => {
    this.state.sessionLength < 60 ?
    this.setState ({
      sessionLength: this.state.sessionLength + 1,
      minutes: this.state.minutes + 1
    })
    :
    console.log('not be able to set a session or break length to > 60')
  }

  handleClickSessionIncrement = () => {
    this.state.sessionLength > 1 ?
    this.setState ({
      sessionLength: this.state.sessionLength - 1,
      minutes: this.state.minutes - 1
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

  handleBreakLength = () => {
    this.setState({
      minutes: this.state.breakLength
    })
  }

  myTimer = () => {
    if (this.state.seconds === 0 && this.state.minutes === 0 && this.state.timerLabel === 'session') {
      this.setState ({
        minutes: this.state.breakLength,
        seconds: 0,
        timerLabel: 'break'
      })
        this.audioRef.current.play();
    } else if (this.state.seconds === 0 && this.state.minutes === 0 && this.state.timerLabel === 'break') {
        this.setState ({
          minutes: this.state.sessionLength,
          seconds: 0,
          timerLabel: 'session'
        })
        this.audioRef.current.play();
    } else if (this.state.seconds) {
        this.setState ({
          seconds: this.state.seconds - 1
        })
    } else if (!this.state.seconds) {
        this.setState ({
          minutes: this.state.minutes - 1,
          seconds: 59
        })
    }
  }

  handleMyTimer = () => {
    if (this.state.start_stop) {
      interval = accurateInterval(this.myTimer, 1000);
    } else {
      interval.clear();
    }
  }

  handleClickStartStop = () => {
    this.handleMyTimer()
    this.setState ({
      start_stop: !this.state.start_stop
    })
  }

  handleClickReset = () => {
    if (interval) {
      interval.clear();
      this.audioRef.current.pause()
      this.audioRef.current.currentTime = 0
    } else {
      console.log('sfds')
    }
      this.setState ({
        sessionLength: 25,
        breakLength: 5,
        minutes: 25,
        seconds: 0,
        start_stop: true,
        timerLabel: 'session'
      })
  }

  render() {
    return (
      <div className="PomodoroClock">
        <div className='aaa'>
          <div className='determineLength'>
            <Session 
              handleClickDecrement={this.handleClickSessionDecrement} 
              handleClickIncrement={this.handleClickSessionIncrement} 
              sessionLength={this.state.sessionLength}
            />
          </div>
          <div className='determineLength'>
            <Break 
              handleClickDecrement={this.handleClickbreakDecrement} 
              handleClickIncrement={this.handleClickbreakIncrement} 
              breakLength={this.state.breakLength}
            />
          </div>
        </div>
        <Timer
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          handleClickStart={this.handleClickStartStop}
          handleClickReset={this.handleClickReset}
          timerLabel={this.state.timerLabel}
        />
        <audio 
          id="beep" 
          ref={this.audioRef}
          src={'https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg'} />
      </div>
    );
  }
}

export default PomodoroClock;