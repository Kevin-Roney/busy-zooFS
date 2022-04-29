import FightClub from './FightClub/FightClub';
import OpenClose from './OpenClose/OpenClose';
import AnimalParade from './AnimalParade/AnimalParade';
import { useState } from 'react';
import './App.css';

function App() {
  const [sharkStrength, setSharkStrength] = useState(5);
  const [octopusStrength, setOctopusStrength] = useState(5);
  const ATTACK_MODIFIER = .1;

  const [isOpen, setIsOpen] = useState(false);

  const [animals, setAnimals] = useState(['rat', 'rat', 'skunk']);

  return (
    <div className="App">
      <FightClub 
        sharkStrength={sharkStrength} 
        setSharkStrength={setSharkStrength} 
        octopusStrength={octopusStrength} 
        setOctopusStrength={setOctopusStrength} 
        ATTACK_MODIFIER={ATTACK_MODIFIER}/>
      <hr/>
      <OpenClose
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <hr/>
      <AnimalParade
        animals={animals}
        setAnimals={setAnimals}
      />
    </div>
  );
}

export default App;
