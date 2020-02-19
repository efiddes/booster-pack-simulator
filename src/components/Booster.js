import React, { useContext } from 'react';

import Card from './Card';
import Loader from './Loader';
import { BoosterContext } from '../contexts/BoosterContext';
import { useGenerateCards } from '../calls/booster.js';

const Booster = () => {

    const { standard, booster } = useContext(BoosterContext);
    const [isLoading, fetchedData] = useGenerateCards(standard[standard.length -1], booster, [booster]);

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
