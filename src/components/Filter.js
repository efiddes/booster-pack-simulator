import React, { useState } from 'react';

import './filter.css';

const Filter = ({standard}) => {

    const [boosterSet, setBoosterSet] = useState("eld");
    const [quantity, setQuantity] = useState([
        {rarity: "rare", quantity: 1, checked: true},
        {rarity: "uncommon", quantity: 3, checked: true},
        {rarity: "common", quantity: 10, checked: true},
        {rarity: "basic", quantity: 1, checked: true}
    ]);
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitting values", {boosterSet, quantity}); 

        return { boosterSet, quantity }
    }
    
    function handleChange(evt) {
        setQuantity(quantity.map((item, index) => index === parseInt(evt.currentTarget.getAttribute('index')) ? { ...item, checked: !item.checked} : item));
    }
    
    return (
        <div className="filters">
            <form onSubmit={handleSubmit}>
                <h3>Filter Options:</h3>
                <div className="filter-set">
                {standard.map( (set) => (
                    <label key={set} htmlFor={set}>
                        <input type="radio"
                            id={set} 
                            name="sets"
                            value={set}
                            onChange={() => setBoosterSet(set)}
                            defaultChecked={boosterSet === set}
                        />
                        <i className={"ss ss-" + set + " ss-4x"}></i>
                    </label>
                ))}
                </div>

                <ul className="filter-list">
                    {quantity.map( (item, index) => (
                        <li key={item.rarity}>
                            <input type="checkbox"
                                index={index}
                                name={item.rarity}
                                onChange={handleChange}
                                checked={item.checked} 
                            />
                            <label htmlFor={item.rarity}>
                                {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
                            </label>
                            <input type="text"
                                name={item.rarity + "-quant"} 
                                value={item.quantity} 
                                disabled={true}
                            />
                        </li>
                    ))}
                </ul>

                <button /*disabled={loading}*/ type="submit">New Booster</button> 
            </form>
        </div>
    )
}

export default Filter;
