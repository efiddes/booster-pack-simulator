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
            else if (names[i] === "pageSize") {
                url +=`&${names[i]}=`;
                /* The mtg api has an issue where it doesn't always return results that include an image
                In order to improve my chances of always receiving enough imageUrls I am therefore inflating 
                the requested numbers which I will then filter down.*/
                values[i] < 10 ? url +=  values[i] * 5 : url += values[i] * 2; 
                break;
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
        if (Array.isArray(urls) && urls.length) {
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
        }
    }, dependencies);

    const withImages = fetchedData.map(object => (object.cards).filter(card => card.hasOwnProperty('imageUrl')));
    const finalBooster = [];
    
    // forEach Array in fetchedData 
    withImages.forEach(arr => {
        switch(arr[0].rarity) {
            // if array  rarity = "rare" or "mythic" then then truncate array to 1
            case 'Rare':
            case 'Mythic':
                finalBooster.push({cards: arr.slice(0,1)});
                break;
            // if array rarity = "uncommon" then truncate the array to 3
            case 'Uncommon':
                finalBooster.push({cards: arr.slice(0,3)});
                break;
            // if array rarity = "common" and when we filter out type Basic Land the array length is 0 then truncate array to 1
            case 'Common':
                if (!arr.filter(card => !card.supertypes.includes("Basic")).length) {
                    finalBooster.push({cards: arr.slice(0,1)});
                    break;
                } 
                // if array rarity = "common" remove basic lands and truncate array to expected size
                else {
                    finalBooster.push({cards: arr.filter(card => !card.supertypes.includes("Basic")).slice(0,10)});
                    break;
                }
            default:
                finalBooster.push({cards: arr});
        }
    });

    return finalBooster;
};