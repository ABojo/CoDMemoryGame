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

  const removeMaps = () => {
    setVisibleMaps([]);
  };

  const randomizeMaps = () => {
    setVisibleMaps(getRandomMaps(mapObjects));
  };

  const resetScore = () => {
    setCurrentScore(0);
  };

  const resetClickedMaps = () => {
    setClickedMaps([]);
  };

  const incrementScore = () => {
    setCurrentScore(currentScore + 1);
    if (currentScore + 1 > highScore) setHighScore(currentScore + 1);
  };

  const addClickedMap = (map) => {
    setClickedMaps([...clickedMaps, map]);
  };

  const resetGame = () => {
    randomizeMaps();
    resetScore();
    resetClickedMaps();
  };

  const continueGame = (map) => {
    incrementScore();
    addClickedMap(map);
    randomizeMaps();
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
