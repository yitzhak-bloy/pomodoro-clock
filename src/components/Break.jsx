import React from 'react';
// import './Session.css';

function Breack({ breakLength, handleClickDecrement, handleClickIncrement }) {
  return (
    <div className="breack">
        <div id="break-label">Break Length</div>
        <button onClick={handleClickDecrement} id="break-decrement">break-decrement</button>
        <button onClick={handleClickIncrement} id="break-increment">break-increment</button>
        <div id="Break Length">{breakLength}</div>
    </div>
  );
}

export default Breack;
