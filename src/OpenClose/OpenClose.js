import React from 'react';

export default function OpenClose({ isOpen, setIsOpen }) {
  function handleOpenZoo() {
    setIsOpen(true);
  }
  function handleCloseZoo() {
    setIsOpen(false);
  }
  return (
    <div>
      <h1>
        {
          isOpen
            ? 'Welcome to the Sketchy Roadside Zoo!'
            : 'We are closed, too bad!'
        }
      </h1>
      <button onClick={handleOpenZoo}>☀️</button>
      <button onClick={handleCloseZoo}>🌙</button>
    </div>
  );
}
