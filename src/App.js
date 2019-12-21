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
      <h2>Booster Pack</h2>
      {booster.map(card => (
        <Card 
          key={card.number} 
          name={card.name} 
          image={card.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
