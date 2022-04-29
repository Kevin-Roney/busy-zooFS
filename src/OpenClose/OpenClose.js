import React from 'react';

export default function OpenClose({ isOpen, setIsOpen }) {
  function handleOpenZoo() {
    setIsOpen(true);
    
  }
  function handleCloseZoo() {
    setIsOpen(false);
  }
  return (
    <div className={`open-is-${isOpen} OpenClose`}>
      <h1>
        {
          isOpen
            ? 'We are open, have your waivers signed and cash in hand!'
            : 'We are closed.. Too Bad!'
        }
      </h1>
      <div>
        <button onClick={handleOpenZoo}>☀️</button>
        <button onClick={handleCloseZoo}>🌙</button>
      </div>
    </div>
  );
}
