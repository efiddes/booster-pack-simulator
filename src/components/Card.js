import React, { useState } from 'react';

import './card.css';
import back from '../images/mtg-back.jpg';

const Card = ({name, image, number}) => {

    const [flipped, setFlipped] = useState(false);

    const flipOver = () => setFlipped(true);

    return (
        <div className={flipped ? "card flipped" : "card"} onClick={flipOver}>
            <div className="cardBack">
                <img className={flipped ? "image" : "image hover"} src={back} alt={name} number={number} />
            </div>
            <div className="cardFront">
                <img className="image" src={image ? image : back} alt={name} number={number} />
            </div>
        </div>
    );
}

export default Card;
