import Animal from './Animal';
import React from 'react';

export default function AnimalParade({ animals, setAnimals }) {
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
      <h1>Petting Zoo Admission $25</h1>
      <p>**NO REFUNDS**</p>
      <div>
        {
          animals.map((animal, index) => <Animal key={animal + index} animal={animal}/>)
        }
      </div>
      <div>
        <button onClick={handleAddRat}>Oh hecc more Rats!</button>
        <button onClick={handleAddRaccoon}>The majestic trash panda</button>
        <button onClick={handleAddBat}>Oops all Bats!</button>
        <button onClick={handleAddSkunk}>P U moar Skunks!</button>
      </div>
    </div>
  );
}
