import React, { useContext } from 'react';

import './booster.css';
import Card from './Card';
import Loader from './Loader';
import { BoosterContext } from '../contexts/BoosterContext';
import { LoadingContext } from '../contexts/LoadingContext';
import { useGenerateCards } from '../calls/booster.js';

const Booster = () => {

    const { boosterPack } = useContext(BoosterContext);
    const { isLoading } = useContext(LoadingContext);
    const finalBooster = useGenerateCards(boosterPack, [boosterPack]);

    return (   
        <div className="cards-container">
        {isLoading ? <Loader/> : finalBooster.map(arr => (arr.cards).map(card => 
            <Card
                key={card.number} 
                name={card.name} 
                image={card.imageUrl}
                number={card.number}
            />
        ))}
        </div>
    );
}

export default Booster;
