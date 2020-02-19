import React, { useState, useContext } from 'react';

import { BoosterContext } from '../contexts/BoosterContext';
import { LoadingContext } from '../contexts/LoadingContext';
import './filter.css';

const Filter = () => {
    const { standard, booster, updateRequested, createBooster } = useContext(BoosterContext);
    const { isLoading } = useContext(LoadingContext);
    const [boosterSet, setBoosterSet] = useState(standard[standard.length -1]);

    function HandleSubmit(event) {
        event.preventDefault();
        createBooster(boosterSet);
    }
    
    return (
        <div className="filters">
            <form onSubmit={HandleSubmit}>
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
                    {booster.map( (item) => (
                        <li key={item.rarity}>
                            <input type="checkbox"
                                name={item.rarity}
                                onChange={(e) => updateRequested(e.target.name)}
                                checked={item.isRequested} 
                            />
                            <label htmlFor={item.rarity}>
                                {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
                            </label>
                            <input type="text"
                                name={item.rarity + "-quant"} 
                                value={item.pageSize} 
                                disabled={true}
                            />
                        </li>
                    ))}
                </ul>

                <button disabled={isLoading} type="submit">New Booster</button> 
            </form>
        </div>
    )
}

export default Filter;
