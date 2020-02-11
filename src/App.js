import React, { useEffect, useState } from 'react';

import './App.css';
import Card from './components/Card';
import Filter from './components/Filter';
import Loader from './components/Loader';
import GenerateBooster from './calls/booster.js';

function App() {

  const standard = ["grn", "rna", "war", "m20", "eld"]; //, "thb"];
  const [loading, setLoading] = useState(true);
  const [booster, setBooster] = useState([]);
  let quantityOf = { 
    mythic: 0,
    rare: 1,
    uncommon: 3,
    common: 10,
    basic: 1 
  };

  useEffect(() => {
    GenerateBooster("eld", quantityOf, setBooster, setLoading);
  }, []);

  return (
    <div className="App">
      <header>
        <h2>Booster Pack Simulator</h2>
      </header>
      <Filter standard={standard}/>
      {loading ? <Loader/> : booster.map(card => (
        <Card 
          key={card.number} 
          name={card.name} 
          image={card.imageUrl}
          number={card.number}
        />
      ))}
      <footer>By Ethan Fiddes</footer>
    </div>
  );
}

export default App;
