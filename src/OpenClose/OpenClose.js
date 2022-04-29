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
            ? 'We are open, please have your waivers signed and your money ready!'
            : 'We are closed, too bad!'
        }
      </h1>
      <div>
        <button onClick={handleOpenZoo}>☀️</button>
        <button onClick={handleCloseZoo}>🌙</button>
      </div>
    </div>
  );
}
