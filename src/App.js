import React, { useState } from 'react';
import baseStyles from './styles/baseStyles.css';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import Scorebox from './components/Scorebox';
import mapObjects from './getMaps';
import getRandomMaps from './randomMaps';

function App() {
  const [visibleMaps, setVisibleMaps] = useState(getRandomMaps(mapObjects));
  const [clickedMaps, setClickedMaps] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const resetGame = () => {
    console.log('Game over you ended with a score of ' + currentScore);
    setVisibleMaps(getRandomMaps(mapObjects));
    setCurrentScore(0);
    setClickedMaps([]);
  };

  const continueGame = (map) => {
    const newScore = currentScore + 1;
    console.log(`+1 point! Your score is now ${newScore}`);
    setClickedMaps([...clickedMaps, map]);
    setCurrentScore(newScore);
    setVisibleMaps(getRandomMaps(mapObjects));

    if (newScore > highScore) setHighScore(newScore);
  };

  const handleMapClick = (map) => {
    if (clickedMaps.includes(map)) {
      resetGame();
    } else {
      continueGame(map);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <Scorebox currentScore={currentScore} highScore={highScore} />
      <GameGrid maps={visibleMaps} onMapClick={handleMapClick} />
    </React.Fragment>
  );
}

export default App;
