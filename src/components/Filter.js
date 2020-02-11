import React, { useState } from 'react';

import './filter.css';

const INITIAL_STATE = {rare: true,
    uncommon: true,
    common: true,
    basic: true}

const Filter = ({standard}) => {

    const [boosterSet, setBoosterSet] = useState("eld");
    const [quantityOf, setQuantityOf] = useState([
        {rarity: "rare", quantity: 1, checked: true},
        {rarity: "uncommon", quantity: 3, checked: true},
        {rarity: "common", quantity: 10, checked: true},
        {rarity: "basic", quantity: 1, checked: true}
    ]);

    const [values, setValues] = useState(INITIAL_STATE);
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log("Off we go!", boosterSet); 
    }
    
    function handleChange(evt) {
        console.log("new value", evt.target.name, values[evt.target.name]); // "rare"

        setValues({
            ...values,
            [evt.target.name]: !values[evt.target.name] 
        });

        console.log(values);
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
                    {quantityOf.map( (item, index) => (
                        <li key={item.rarity}>
                            <input type="checkbox"
                                index={index}
                                name={item.rarity}
                                onChange={handleChange}
                                checked={values[item.rarity]} 
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

                <button type="submit">New Booster</button> 
            </form>
        </div>
    )
}

export default Filter;
