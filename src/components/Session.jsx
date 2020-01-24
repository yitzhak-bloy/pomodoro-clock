import React from 'react';
// import './Session.css';


const Session = ({ sessionLength, handleClickDecrement, handleClickIncrement }) => {
  return (
    <div className="session">
      <div id="session-label">Session Length</div>
      <button onClick={handleClickDecrement} id="session-decrement">session-decrement</button>
      <button onClick={handleClickIncrement} id="session-increment">session-increment</button>
      <div id="Session Length">{sessionLength}</div>
    </div>
  );
}

export default Session;
