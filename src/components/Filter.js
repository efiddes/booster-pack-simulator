import React, { useState } from 'react';

import './filter.css';


const Filter = () => {

    return (
        <div className="filters">
            <h3>Filter Options:</h3>
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