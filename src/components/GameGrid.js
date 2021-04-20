import delay from '../delay';
import styles from '../styles/gridStyles.css';

function GameGrid(props) {
  const { maps, onMapClick } = props;

  const showMessage = async (gameIsActive, map) => {
    const instructions = document.createElement('div');
    instructions.className = 'instructions';

    if (gameIsActive) {
      instructions.textContent = `You got a point for ${map.name}, good job!`;
    } else {
      instructions.classList.add('lose');
      instructions.textContent = `You already clicked ${map.name}, game over!`;
    }
    document.body.append(instructions);
    await delay(5000);
    instructions.remove();
  };

  return (
    <div className="game-grid">
      {maps.map((map) => (
        <div
          className="game-grid__item"
          key={map.id}
          onClick={async () => {
            const gameIsActive = onMapClick(map);
            showMessage(gameIsActive, map);
          }}
        >
          <div className="game-grid__overlay"></div>
          <h1 className="game-grid__name">{map.name}</h1>
          <img src={map.path} alt={map.name} className="game-grid__image"></img>
        </div>
      ))}
    </div>
  );
}

export default GameGrid;
