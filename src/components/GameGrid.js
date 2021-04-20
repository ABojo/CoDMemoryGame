import delay from '../delay';
import styles from '../styles/gridStyles.css';

function GameGrid(props) {
  const { maps, onMapClick } = props;

  return (
    <div className="game-grid">
      {maps.map((map) => (
        <div
          className="game-grid__item"
          key={map.id}
          onClick={() => {
            onMapClick(map);
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
