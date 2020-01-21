import React, { Component } from 'react';
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
        <h1>שלום אפליקציה</h1>
        <div id="break-label">Break Length</div>
        <div id="session-label">Session Length</div>
        <button id="break-decrement">break-decrement</button>
        <button id="session-decrement">session-decrement</button>
        <button id="break-increment">break-increment</button>
        <button id="session-increment">session-increment</button>
        <div id="Break Length">5</div>
        <div id="Session Length">25</div>
        <div id="timer-label" >Session</div>
        <div id="time-left">25:00</div>
        <button id="start_stop">start_stop</button>
        <button id="reset">reset</button>
      </div>
    );
  }
}

export default PomodoroClock;