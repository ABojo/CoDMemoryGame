import rust from './images/rust.jpg';
import miami from './images/miami.jpg';
import nuketown from './images/nuketown.jpg';
import raid from './images/raid.jpg';
import uniqid from 'uniqid';

const images = [rust, miami, nuketown, raid];

const mapObjects = images.map((path) => {
  const mapName = path.slice(path.indexOf('media/') + 6, path.indexOf('.'));

  return {
    path: path,
    name: `${mapName.charAt(0).toUpperCase()}${mapName.slice(1)}`,
    id: uniqid(),
  };
});

export default mapObjects;
