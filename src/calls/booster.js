import {useState, useEffect, useContext } from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

export const useGenerateCards = (boosterPack, dependencies) => {

    const [fetchedData, setFetchedData] = useState([]);
    const { setIsLoading } = useContext(LoadingContext);
    
    let set = boosterPack.set;
    let urls = [];

    // Remove isRequest false objects
    (boosterPack.booster).filter(quantity => quantity.isRequested || quantity.pageSize === 0).forEach(obj => {
        let names = Object.getOwnPropertyNames(obj);
        let values = Object.values(obj);
        let url = `https://api.magicthegathering.io/v1/cards?set=${set}`;
  
        for (let i = 0; i < names.length; i++) {
            if ( values[i] === "rare" ) {
                url +=`&${names[i]}=`;
                // 12.5% chance booster rare will be mythic rare
                url += Math.random() > 0.125 ? 'rare' : 'mythic';
            } 
            else if ( values[i] === "basic" ) {
                url +=`&type=${values[i]}`;
            } 
            else if (names[i] === "isRequested") {
                break;
            } 
            else {
                url +=`&${names[i]}=${values[i]}`;
            } 
        }

        url += "&random=true&contains=imageUrl";
        urls.push(url);
    });

    // fetch('https://api.magicthegathering.io/v1/cards?set=eld&rarity=$rare&pageSize=1&random=true&contains=imageUrl');
    useEffect(() => {
        setIsLoading(true);
        if (Array.isArray(urls) && urls.length) {
            (async function getCards() {
                Promise.all(urls.map(url =>
                    fetch(url)
                    .then(response => {
                        if (!response.ok) {
                        throw new Error('Failed to fetch.');
                        }
                        return response.json();
                    })
                ))
                .then(data => {
                    setFetchedData(data);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false);
                })
            })()
        }
    }, dependencies);

    return fetchedData;
};