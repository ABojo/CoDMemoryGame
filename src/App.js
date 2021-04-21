import React, { useEffect, useState } from 'react';
import baseStyles from './styles/baseStyles.css';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import Scorebox from './components/Scorebox';
import randomMaps from './randomMaps';
import showMessage from './showMessage';
import delay from './delay';

function App() {
  const [visibleMaps, setVisibleMaps] = useState([]);
  const [clickedMaps, setClickedMaps] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const showRandomMaps = () => {
    setVisibleMaps(randomMaps(3));
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

    showRandomMaps();
    setLoading(true);
  };

  //Show instructions message after component is mounted
  useEffect(() => {
    showMessage(
      true,
      'If you click the same map twice your score will be reset to zero!'
    );

    showRandomMaps();
  }, []);

  //Runs spinner for two seconds after mount or update
  useEffect(() => {
    if (isLoading) {
      delay(1500).then(() => {
        setLoading(false);
      });
    }
  });

  return (
    <React.Fragment>
      <Navbar />
      <Scorebox currentScore={currentScore} highScore={highScore} />
      {isLoading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <GameGrid maps={visibleMaps} onMapClick={handleMapClick} />
      )}
    </React.Fragment>
  );
}

export default App;
