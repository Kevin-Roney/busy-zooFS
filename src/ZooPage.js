import FightClub from './FightClub/FightClub';
import OpenClose from './OpenClose/OpenClose';
import AnimalParade from './AnimalParade/AnimalParade';
import { useState } from 'react';
import './App.css';

function App() {
  //FightClub State
  const [sharkStrength, setSharkStrength] = useState(5);
  const [octopusStrength, setOctopusStrength] = useState(5);
  const ATTACK_MODIFIER = .1;
  //OpenClose State
  const [isOpen, setIsOpen] = useState('open', 'close', 'dio');
  //AnimalParade State
  const [animals, setAnimals] = useState(['rat', 'rat', 'skunk']);

  return (
    <div className="App">
      <h1 className='Title'>Welcome to the Sketchy Roadside Zoo!</h1>
      <FightClub 
        sharkStrength={sharkStrength} 
        setSharkStrength={setSharkStrength} 
        octopusStrength={octopusStrength} 
        setOctopusStrength={setOctopusStrength} 
        ATTACK_MODIFIER={ATTACK_MODIFIER}
      />
      <OpenClose 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <AnimalParade
        animals={animals}
        setAnimals={setAnimals}
      />
    </div>
  );
}

export default App;
