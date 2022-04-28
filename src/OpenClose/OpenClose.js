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
      <div>
        {
          isOpen
            ? 'Welcome to the Oregon Zoon!' 
            : 'Sorry we are closed, see you next time!'
        }
      </div>
      <button onClick={handleOpenZoo}>☀️</button>
      <button onClick={handleCloseZoo}>🌙</button>
    </div>
  );
}
