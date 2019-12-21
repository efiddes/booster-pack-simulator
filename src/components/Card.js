import React from 'react';

import style from './card.module.css';
import back from '../images/mtg-back.jpg';

const Card = ({name, image, number}) => {
    return (
        <div className={style.card}>
            <img className={style.image} src={image ? image : back} alt={name} number={number}/>
        </div>
    );
}

export default Card;
