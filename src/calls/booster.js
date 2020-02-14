import {useState, useEffect } from 'react';

export const useGenerateCards = (urls, dependencies) => {

    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);
    
    // fetch('https://api.magicthegathering.io/v1/cards?set=eld&rarity=$rare&pageSize=1&random=true&contains=imageUrl";
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