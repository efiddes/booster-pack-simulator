import React, { createContext, useState } from 'react';

export const BoosterContext = createContext();

const standard = ["grn", "rna", "war", "m20", "eld"]; //, "thb"];

const BoosterContextProvider = (props) => {
    const [booster, setBooster] = useState([
        {rarity: 'rare', pageSize: 1, isRequested: true},
        {rarity: 'uncommon', pageSize: 3, isRequested: true},
        {rarity: 'common', pageSize: 10, isRequested: true},
        {rarity: 'basic', pageSize: 1, isRequested: true}
    ]);
    const [boosterPack, setBoosterPack ] = useState({set: standard[standard.length -1], booster});
    
    const updateRequested = (rarity) => {
        let newBooster = booster.map(obj => {
            return obj.rarity === rarity ? Object.assign(obj, { isRequested: !obj.isRequested}) : obj
        });
        setBooster(newBooster);
    }
    
    const createBooster = (set) => {
        setBoosterPack({ set, booster});
    }

    return (
        <BoosterContext.Provider value={{standard, booster, updateRequested, boosterPack, createBooster}}>
        { props.children }
    </BoosterContext.Provider>
    )
}

export default BoosterContextProvider;