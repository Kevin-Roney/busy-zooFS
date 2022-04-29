import React from 'react';
import Dio from '../dio.png';
import Noice from '../orchastra-cut2.mp3';

export default function OpenClose({ isOpen, setIsOpen }) {
  const audio = new Audio(Noice);
  function start() {
    audio.play();
  }
  function handleOpenZoo() {
    setIsOpen('open');
  }
  function handleCloseZoo() {
    setIsOpen('closed');
  }
  function handleDio() {
    setIsOpen('dio');
    start();
  }
  return (
    <div className={`open-is-${isOpen} OpenClose`}>
      <div>
        {isOpen === 'open' && <h1>We are open, have your waivers signed and cash in hand!</h1>}
        {isOpen === 'closed' && <h1>We are closed.. Too Bad!</h1>}
        {isOpen === 'dio' && <img className='Dio' src={Dio}/>}
      </div>
      <div>
        <button onClick={handleOpenZoo}>☀️</button>
        <button onClick={handleCloseZoo}>🌙</button>
        <button onClick={handleDio}>❓</button>
      </div>
    </div>
  );
}
