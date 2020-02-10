import React, { useState } from 'react';

import './filter.css';

const Filter = ({standard}) => {

    return (
        <div className="filters">
            <h3>Filter Options:</h3>
            <div className="filter-set">
            {standard.map( (set, index, arr) => {
                if (arr.length - 1 === index) {
                    return <label for={set}>
                        <input type="radio" id={set} name="sets" checked></input>
                        <i className={"ss ss-" + set + " ss-4x"}></i>
                    </label>
                } else {
                    return <label for={set}>
                        <input type="radio" id={set} name="sets"></input>
                        <i className={"ss ss-" + set + " ss-4x"}></i>
                    </label>
                }
            })}
            </div>
            <ul className="filter-list">
                <li>
                    <input type="checkbox" name="rares" defaultChecked/>
                    <label for="rares">Mythics &amp; Rares</label>
                    <input type="text" name="rare-quant" value="1" disabled/>
                </li>
                <li>
                    <input type="checkbox" name="rares" defaultChecked/>
                    <label for="rares">Uncommons</label>
                    <input type="text" name="uncommon-quant" value="3" disabled/>
                </li>
                <li>
                    <input type="checkbox" name="rares" defaultChecked/>
                    <label for="rares">Commons</label>
                    <input type="text" name="common-quant" value="10" disabled/>
                </li>
                <li>
                    <input type="checkbox" name="rares" defaultChecked/>
                    <label for="rares">Basic Lands</label>
                    <input type="text" name="basic-quant" value="1" disabled/>
                </li>
            </ul> 
        </div>
    )
}

export default Filter;
