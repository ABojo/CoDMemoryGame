function randomMaps(maps) {
  const randomMaps = [];

  while (randomMaps.length < 3) {
    const randomMap = maps[Math.floor(Math.random() * maps.length)];
    if (!randomMaps.includes(randomMap)) {
      randomMaps.push(randomMap);
    }
  }

  return randomMaps;
}

export default randomMaps;
