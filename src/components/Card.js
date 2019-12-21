import React from 'react';
import style from './card.module.css';

const Card = ({name, image}) => {
    return (
        <div className={style.card}>
            <img className={style.image} src={image} alt={name}/>
        </div>
    );
}

export default Card;
