import React, { useEffect, useState } from 'react';
import baseStyles from './styles/baseStyles.css';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import Scorebox from './components/Scorebox';
import mapObjects from './getMaps';
import getRandomMaps from './randomMaps';
import showMessage from './showMessage';
import showLoader from './showLoader';
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

  const handleMapClick = async (map) => {
    if (clickedMaps.includes(map)) {
      resetScore();
      resetClickedMaps();
      showMessage(false, `You already clicked ${map.name}, game over!`);
    } else {
      incrementScore();
      addClickedMap(map);
      showMessage(true, `You got a point for ${map.name}, good job!`);
    }

    randomizeMaps();
  };

  //Show instructions message after component is mounted
  useEffect(() => {
    showMessage(
      true,
      'If you click the same map twice your score will be reset to zero!'
    );
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Scorebox currentScore={currentScore} highScore={highScore} />
      <GameGrid maps={visibleMaps} onMapClick={handleMapClick} />
    </React.Fragment>
  );
}

export default App;
