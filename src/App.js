import React from 'react';

import './App.css';
import Card from './components/Card';
import Filter from './components/Filter';
import Loader from './components/Loader';
import { useGenerateCards } from './calls/booster.js';

function App() {

  const standard = ["grn", "rna", "war", "m20", "eld"]; //, "thb"];
  let booster = [
    {rarity: Math.random() > 0.125 ? 'rare' : 'mythic', pageSize: 1},
    {rarity: 'uncommon' , pageSize: 3},
    {rarity: 'common' , pageSize: 10},
    {type: 'basic' , pageSize: 1}
  ];

  let urls = [];

  booster.forEach(obj => {
    let names = Object.getOwnPropertyNames(obj);
    let values = Object.values(obj);
    let url = `https://api.magicthegathering.io/v1/cards?set=${standard[standard.length -1]}`;

    for (let i = 0; i < names.length; i++) {
      url +=`&${names[i]}=${values[i]}`;
    }

    url += "&random=true&contains=imageUrl";
    urls.push(url);
  });

  const [isLoading, fetchedData] = useGenerateCards(urls, []);
  
  return (
    <div className="App">
      <header>
        <h2>Booster Pack Simulator</h2>
      </header>
      <Filter standard={standard}/>
      {isLoading ? <Loader/> : fetchedData.map(object => (object.cards).map(card => 
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
