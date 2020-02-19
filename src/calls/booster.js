import {useState, useEffect } from 'react';

export const useGenerateCards = (set, booster, dependencies) => {

    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);
    
    let urls = [];

    // Remove isRequest false objects
    booster.filter(quantity => quantity.isRequested || quantity.pageSize === 0).forEach(obj => {
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
    }, dependencies);

    return [isLoading, fetchedData];
};