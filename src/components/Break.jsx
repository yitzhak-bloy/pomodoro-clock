import React from 'react';
// import './Session.css';

function Breack({ breakLength, handleClickDecrement, handleClickIncrement }) {
  return (
    <div className="breack&#8657;">
        <div id="break-label">Break Length</div>
        <button id="break-decrement" className='buttonLength' onClick={handleClickDecrement}>&#8657;</button>
        <button id="break-increment" className='buttonLength' onClick={handleClickIncrement}>&#8659;</button>
        <div id="break-length">{breakLength}</div>
    </div>
  );
}

export default Breack;
