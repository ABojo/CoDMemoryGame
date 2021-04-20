import React, { useEffect, useState } from 'react';
import baseStyles from './styles/baseStyles.css';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import Scorebox from './components/Scorebox';
import mapObjects from './getMaps';
import getRandomMaps from './randomMaps';
import delay from './delay';

function App() {
  const [visibleMaps, setVisibleMaps] = useState(getRandomMaps(mapObjects));
  const [clickedMaps, setClickedMaps] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const resetGame = () => {
    setVisibleMaps(getRandomMaps(mapObjects));
    setCurrentScore(0);
    setClickedMaps([]);
  };

  const continueGame = (map) => {
    const newScore = currentScore + 1;
    setClickedMaps([...clickedMaps, map]);
    setCurrentScore(newScore);
    setVisibleMaps(getRandomMaps(mapObjects));

    if (newScore > highScore) setHighScore(newScore);
  };

  const handleMapClick = (map) => {
    if (clickedMaps.includes(map)) {
      resetGame();
      return false;
    } else {
      continueGame(map);
      return true;
    }
  };

  return (
    <React.Fragment>
      <div className="instructions">
        If you click the same map twice your score will be reset to zero!
      </div>
      <Navbar />
      <Scorebox currentScore={currentScore} highScore={highScore} />
      <GameGrid maps={visibleMaps} onMapClick={handleMapClick} />
    </React.Fragment>
  );
}

export default App;
