import React, { createContext, useState } from 'react';

export const LoadingContext = createContext();

const LoadingContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <LoadingContext.Provider value={{isLoading, setIsLoading}}>
            { props.children }
        </LoadingContext.Provider>
        )
}

export default LoadingContextProvider;