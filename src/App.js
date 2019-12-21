import React, { useEffect, useState } from 'react';
import './App.css';

import Card from './components/Card';

function App() {

  const [booster, setBooster] = useState([]);

  useEffect(() => {
    getBooster();
    console.log('Effect has been run');
  }, []);

  const getBooster = async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/sets/war/booster');
    const data = await response.json();
    console.log(data.cards);
    setBooster(data.cards);
  }

  return (
    <div className="App">
      <header>
        <h2>Booster Pack</h2>
      </header>
      <div className="filters">
        Filter Options:
      </div>
      {booster.map(card => (
        <Card 
          key={card.number} 
          name={card.name} 
          image={card.imageUrl}
        />
      ))}
      <footer>By Ethan Fiddes</footer>
    </div>
  );
}

export default App;
