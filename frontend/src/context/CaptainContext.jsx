import { createContext, useContext, useState } from 'react';

export const  CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captains, setCaptains] = useState(null);
    const [isloading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const updateCaptain = (CaptainData) =>{
        setCaptains(CaptainData);
    }

    const value = {
        captains,
        setCaptains,
        isloading,
        setIsLoading,
        error, 
        setError,
        updateCaptain 
    };
    
    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
    };
