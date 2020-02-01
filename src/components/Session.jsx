import React from 'react';
// import './Session.css';


const Session = ({ sessionLength, handleClickDecrement, handleClickIncrement }) => {
  return (
    <div className="session">
      <div id="session-label">Session Length</div>
      <button onClick={handleClickDecrement} id="session-decrement" className='buttonLength'>&#8657;</button>
      <button onClick={handleClickIncrement} id="session-increment" className='buttonLength'>&#8659;</button>
      <div id="session-length">{sessionLength}</div>
    </div>
  );
}

export default Session;
