const GenerateBooster = async (set, quantityOf, setBooster, setLoading) => {

    const url = "https://api.magicthegathering.io/v1/";
    let result, booster = [];

    // 12.5% chance to get a rare instead of a mythic
    if (quantityOf["rare"] > 0 ) {
        for ( let i = 0, length = quantityOf["rare"]; i < length; i++) {
            if (Math.random() < 0.125) {
                quantityOf["rare"]--;
                quantityOf["mythic"]++;
            }
        }
    }
    
    for (let rarity in quantityOf) {
        if (quantityOf[rarity] === 0) {
            continue;
        }
         else if (rarity === "basic") {
            result = await fetch(`${url}cards?set=${set}&type=${rarity}&pageSize=${quantityOf[rarity]}&random=true&contains=imageUrl`);
        } else {
            result = await fetch(`${url}cards?set=${set}&rarity=${rarity}&pageSize=${quantityOf[rarity]}&random=true&contains=imageUrl`);
        }
        booster = [...booster, ...(await result.json()).cards];
    }

    setBooster(booster);
    setLoading(false);
}

export default GenerateBooster;
