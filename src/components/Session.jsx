import React from 'react';
// import './Session.css';

function Session() {
  return (
    <div className="session">
      <div id="session-label">Session Length</div>
      <button id="session-decrement">session-decrement</button>
      <button id="session-increment">session-increment</button>
      <div id="Session Length">25</div>
    </div>
  );
}

export default Session;
