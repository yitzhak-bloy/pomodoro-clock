import React from 'react';
import './Breack.css';

function Breack({ breakLength, handleClickDecrement, handleClickIncrement }) {
  return (
    <div className="breack">
      <div id="break-label">Break Length</div>
      <button id="break-decrement" className='buttonLength' onClick={handleClickDecrement}>&#8657;</button>
      <div id="break-length">{breakLength}</div>
      <button id="break-increment" className='buttonLength' onClick={handleClickIncrement}>&#8659;</button>
    </div>
  );
}

export default Breack;
