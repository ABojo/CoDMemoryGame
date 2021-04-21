import maps from './getMaps';

function randomMaps(n) {
  const randomMaps = [];

  while (randomMaps.length < n) {
    const randomMap = maps[Math.floor(Math.random() * maps.length)];
    if (!randomMaps.includes(randomMap)) {
      randomMaps.push(randomMap);
    }
  }

  return randomMaps;
}

export default randomMaps;
