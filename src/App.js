import React, { useState } from 'react';
import baseStyles from './styles/baseStyles.css';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import mapObjects from './loadMaps';

function App() {
  const [maps, setMaps] = useState(mapObjects);

  return (
    <React.Fragment>
      <Navbar />
      <GameGrid maps={maps} />
    </React.Fragment>
  );
}

export default App;
