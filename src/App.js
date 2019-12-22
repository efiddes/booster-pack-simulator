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
    let set = 'war';
    let rarity = Math.random() > 0.125 ? 'rare' : 'mythic';

    const rare = await fetch(`https://api.magicthegathering.io/v1/cards?set=${set}&rarity=${rarity}&pageSize=1&random=true&contains=imageUrl`);
    const uncommon = await fetch(`https://api.magicthegathering.io/v1/cards?set=${set}&rarity=uncommon&pageSize=3&random=true&contains=imageUrl`);
    const common = await fetch(`https://api.magicthegathering.io/v1/cards?set=${set}&rarity=common&pageSize=10&random=true&contains=imageUrl`);
    const basic = await fetch(`https://api.magicthegathering.io/v1/cards?set=${set}&type=basic&pageSize=1&random=true&contains=imageUrl`);
    
    const rares = await rare.json();
    const uncommons = await uncommon.json();
    const commons = await common.json();
    const basics = await basic.json();

    console.log(rares.cards);
    console.log(uncommons.cards);
    console.log(commons.cards);
    console.log(basics.cards);

    setBooster([...rares.cards, ...uncommons.cards, ...commons.cards, ...basics.cards]);
  }

  return (
    <div className="App">
      <header>
        <h2>Booster Pack Simulator</h2>
      </header>
      <div className="filters">
        Filter Options:
      </div>
      {booster.map(card => (
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
