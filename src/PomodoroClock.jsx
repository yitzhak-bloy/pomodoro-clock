import React, { Component } from 'react';
import './PomodoroClock.css';

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
    if (this.state.sessionLength < 60) {
      this.setState ({
        sessionLength: this.state.sessionLength + 1,
        minutes: this.state.minutes + 1
      })
    }
  }

  handleClickSessionIncrement = () => {
    if (this.state.sessionLength > 1) {
      this.setState ({
        sessionLength: this.state.sessionLength - 1,
        minutes: this.state.minutes - 1
      })
    }
  }

  handleClickbreakDecrement = () => {
    if (this.state.breakLength < 60 ) {
      this.setState ({
        breakLength: this.state.breakLength + 1
      })
    }
  }

  handleClickbreakIncrement = () => {
    if (this.state.breakLength > 1) {
      this.setState ({
        breakLength: this.state.breakLength - 1
      })
    }
  }

  timer = () => {
    if (!this.state.seconds && !this.state.minutes && this.state.timerLabel === 'session') {
      this.setState ({
        minutes: this.state.breakLength,
        seconds: 0,
        timerLabel: 'break'
      })
      this.audioRef.current.play();
    } else if (!this.state.seconds && !this.state.minutes && this.state.timerLabel === 'break') {
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

  handleTimer = () => {
    if (this.state.start_stop) {
      interval = accurateInterval(this.timer, 1000);
    } else {
      interval.clear();
      this.audioRef.current.pause()
      this.audioRef.current.currentTime = 0
    }
  }

  handleClickStartStop = () => {
    this.handleTimer()
    this.setState ({
      start_stop: !this.state.start_stop
    })
  }

  handleClickReset = () => {
    if (interval) {
      interval.clear();
      this.audioRef.current.pause()
      this.audioRef.current.currentTime = 0
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
        <div className='sessionAndBreak'>
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