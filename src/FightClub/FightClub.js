import React, { useState } from 'react';

export default function FightClub() {
  const [sharkStrength, setSharkStrength] = useState(5);
  const [octopusStrength, setOctopusStrength] = useState(5);
  const ATTACK_MODIFIER = .1;

  function handleSharkShrink() {
    setSharkStrength(sharkStrength - ATTACK_MODIFIER);
  }
  function handleSharkGrow() {
    setSharkStrength(sharkStrength + ATTACK_MODIFIER);
  }
  function handleOctopusShrink() {
    setOctopusStrength(octopusStrength - ATTACK_MODIFIER);
  }
  function handleOctopusGrow() {
    setOctopusStrength(octopusStrength + ATTACK_MODIFIER);
  }
  return (
    <div className='fight-club'>
      <div className='animal'>
        <div className='fighter' style={{ fontSize: `${sharkStrength}rem` }}>
          🦈
        </div>
        <button onClick={handleSharkGrow}>The Shark is charging up!</button>
        <button onClick={handleOctopusShrink}>The Shark uses Sharknado!</button>
      </div>
      <div className='animal'>
        <div className='fighter' style={{ fontSize: `${octopusStrength}rem` }}>
          🐙
        </div>
        <button onClick={handleOctopusGrow}>The Octopus is charging up!</button>
        <button onClick={handleSharkShrink}>The Octopus uses Constrict!</button>
      </div>
    </div>
  );
}
