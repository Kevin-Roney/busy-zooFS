import Animal from './Animal';
import React from 'react';
import CustomButton from '../CustomButton';

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
        <CustomButton onClick={handleAddRat}>Oh hecc more Rats!</CustomButton>
        <CustomButton onClick={handleAddRaccoon}>The majestic trash panda</CustomButton>
        <CustomButton onClick={handleAddBat}>Oops all Bats!</CustomButton>
        <CustomButton onClick={handleAddSkunk}>P U moar Skunks!</CustomButton>
      </div>
    </div>
  );
}
