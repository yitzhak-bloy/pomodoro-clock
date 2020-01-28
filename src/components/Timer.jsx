import React from 'react';
// import './Session.css';

function Timer({minutes, seconds, handleClickStart, handleClickReset, timerLabel}) {
  return (
    <div className="timer">
      <div id="timer-label" >{timerLabel}</div>
      <div id="time-left">{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}</div>
      <button id="start_stop" onClick={handleClickStart} >start_stop</button>
      <button id="reset" onClick={handleClickReset}>reset</button>
    </div>
  );
}

export default Timer;
