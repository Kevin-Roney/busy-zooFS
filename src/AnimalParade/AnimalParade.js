import React, { useState } from 'react';
import Animal from './Animal';

export default function AnimalParade() {
  const [animals, setAnimals] = useState(['rat', 'rat', 'skunk']);

  function handleAddRat() {
    animals.push('rat');
    setAnimals([...animals]);
  }
  function handleAddRaccoon() {
    animals.push('raccoon');
    setAnimals([...animals]);
  }
  function handleAddBat() {
    animals.push('bat');
    setAnimals([...animals]);
  }
  function handleAddSkunk() {
    animals.push('skunk');
    setAnimals([...animals]);
  }

  return (
    <div className='parade'>
      <div>
        {
          animals.map((animal) => <Animal key={animal} animal={animal}/>)
        }
      </div>
      <button onClick={handleAddRat}>Oh hecc more Rats!</button>
      <button onClick={handleAddRaccoon}>Oh hecc more Raccoons!</button>
      <button onClick={handleAddBat}>Oh hecc more Bats!</button>
      <button onClick={handleAddSkunk}>Oh hecc more Skunks!</button>
    </div>
  );
}
