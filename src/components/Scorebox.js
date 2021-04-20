import scoreboxStyles from '../styles/scoreboxStyles.css';

function Scorebox(props) {
  const { currentScore, highScore } = props;
  return (
    <div className="scorebox">
      <div className="scorebox__scores">
        <h1 className="score-current">Current Score: {currentScore}</h1>
        <h1 className="score-high">High Score: {highScore}</h1>
      </div>
    </div>
  );
}

export default Scorebox;
