import React, { useState } from 'react';
import baseStyles from './styles/baseStyles.css';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import mapObjects from './loadMaps';

function App() {
  const [maps, setMaps] = useState(mapObjects);
  const [activeMaps, setActiveMaps] = useState(mapObjects);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  console.log(activeMaps);
  return (
    <React.Fragment>
      <Navbar />
      <GameGrid maps={activeMaps} />
    </React.Fragment>
  );
}

export default App;
