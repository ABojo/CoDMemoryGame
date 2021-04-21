import rust from './images/rust.jpg';
import miami from './images/miami.jpg';
import nuketown from './images/nuketown.jpg';
import raid from './images/raid.jpg';
import slums from './images/slums.jpg';
import standoff from './images/standoff.png';
import hacienda from './images/hacienda.jpg';
import shoothouse from './images/shoothouse.jpg';
import summit from './images/summit.jpg';
import skidrow from './images/skidrow.png';
import invasion from './images/invasion.png';
import garrison from './images/garrison.jpg';
import checkmate from './images/checkmate.png';
import crossroads from './images/crossroads.jpg';
import village from './images/village.png';
import fallen from './images/fallen.png';
import crash from './images/crash.jpg';
import shipment from './images/shipment.jpg';
import highrise from './images/highrise.png';
import infection from './images/infection.png';
import stronghold from './images/stronghold.png';
import combine from './images/combine.png';
import redwood from './images/redwood.jpg';

import uniqid from 'uniqid';

const images = [
  rust,
  miami,
  nuketown,
  raid,
  slums,
  standoff,
  hacienda,
  shoothouse,
  summit,
  skidrow,
  invasion,
  garrison,
  checkmate,
  crossroads,
  village,
  fallen,
  crash,
  shipment,
  highrise,
  infection,
  stronghold,
  combine,
  redwood,
];

const mapObjects = images.map((path) => {
  const mapName = path.slice(path.indexOf('media/') + 6, path.indexOf('.'));

  return {
    path: path,
    name: `${mapName.charAt(0).toUpperCase()}${mapName.slice(1)}`,
    id: uniqid(),
  };
});

export default mapObjects;
