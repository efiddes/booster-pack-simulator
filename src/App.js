import React from 'react';

import './App.css';
import reactLogo from './images/logo192.png';

import Filter from './components/Filter';
import Booster from './components/Booster';
import BoosterContextProvider from './contexts/BoosterContext';
import LoadingContextProvider from './contexts/LoadingContext';

function App() {
  
  return (
    <div className="App">
        <header>
            <h2>Booster Pack Simulator</h2>
        </header>
        <BoosterContextProvider>
        <LoadingContextProvider>
            <Filter/>
            <Booster />
        </LoadingContextProvider>
        </BoosterContextProvider>
        <footer>
            <ul className="footer">
                <li>By <b>Ethan Fiddes</b></li>
                <li>
                    Built with
                    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        <img className="react-logo" alt="built with React" src={reactLogo}/>
                        <span className="react">React</span>
                    </a> 
                </li>
                <li>
                    Data provided from <a href="https://docs.magicthegathering.io/" target="_blank" rel="noopener noreferrer">Magic: The Gathering API</a>
                </li>
            </ul>
        </footer>
    </div>
  );
}

export default App;
