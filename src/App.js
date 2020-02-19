import React from 'react';

import './App.css';

import Filter from './components/Filter';
import Booster from './components/Booster';
import BoosterContextProvider from './contexts/BoosterContext';

function App() {
  
  return (
    <div className="App">
      <header>
        <h2>Booster Pack Simulator</h2>
      </header>
      <BoosterContextProvider>
        <Filter/>
        <Booster />
      </BoosterContextProvider>
      <footer>By Ethan Fiddes</footer>
    </div>
  );
}

export default App;
