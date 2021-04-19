import React, { useState } from 'react';
import baseStyles from './styles/baseStyles.css';
import Navbar from './components/Navbar';
import mapObjects from './loadMaps';

function App() {
  const [maps, setMaps] = useState(mapObjects);

  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
}

export default App;
