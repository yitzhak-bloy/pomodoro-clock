import React from 'react';
import './Timer.css';

function Timer({minutes, seconds, handleClickStart, handleClickReset, timerLabel}) {
  return (  
    <div className="timer">
      <div id="timer-label" >{timerLabel}</div>
      <div id="time-left">{minutes < 10 ? 0 : ''}{minutes}:{seconds < 10 ? 0 : ''}{seconds}</div>
      <button className='buttenTimer' id="start_stop" onClick={handleClickStart} >start / stop</button>
      <button className='buttenTimer' id="reset" onClick={handleClickReset}>reset</button>
    </div>
  );
}

export default Timer;
