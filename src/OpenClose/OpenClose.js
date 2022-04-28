import React, { useState } from 'react';

export default function OpenClose() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenZoo() {
    setIsOpen(true);
  }
  function handleCloseZoo() {
    setIsOpen(false);
  }
  return (
    <div>
      <h3>
        {
          isOpen
            ? 'Welcome to the Sketchy Roadside Zoo!'
            : 'Sorry we are closed, too bad!'
        }
      </h3>
      <button onClick={handleOpenZoo}>☀️</button>
      <button onClick={handleCloseZoo}>🌙</button>
    </div>
  );
}
