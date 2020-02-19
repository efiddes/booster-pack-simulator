import React, { useContext } from 'react';

import Card from './Card';
import Loader from './Loader';
import { BoosterContext } from '../contexts/BoosterContext';
import { LoadingContext } from '../contexts/LoadingContext';
import { useGenerateCards } from '../calls/booster.js';


const Booster = () => {

    const { boosterPack } = useContext(BoosterContext);
    const { isLoading } = useContext(LoadingContext);
    const fetchedData = useGenerateCards(boosterPack, [boosterPack]);

    return (
        isLoading ? <Loader/> : fetchedData.map(object => (object.cards).map(card => 
            <Card 
                key={card.number} 
                name={card.name} 
                image={card.imageUrl}
                number={card.number}
            />
        ))
    );
}

export default Booster;
