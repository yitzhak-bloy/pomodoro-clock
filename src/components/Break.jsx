import React from 'react';
// import './Session.css';

function Breack({ breakLength, handleClickDecrement, handleClickIncrement }) {
  return (
    <div className="breack">
        <div id="break-label">Break Length</div>
        <button id="break-decrement" onClick={handleClickDecrement}>break-decrement</button>
        <button id="break-increment" onClick={handleClickIncrement}>break-increment</button>
        <div id="break-length">{breakLength}</div>
    </div>
  );
}

export default Breack;
