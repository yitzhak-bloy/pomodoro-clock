import React from 'react';
// import './Session.css';

function Timer() {
  return (
    <div className="timer">
      <div id="timer-label" >Session</div>
      <div id="time-left">25:00</div>
      <button id="start_stop">start_stop</button>
      <button id="reset">reset</button>
    </div>
  );
}

export default Timer;
