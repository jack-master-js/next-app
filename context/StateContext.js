import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [isLoading, setLoading] = useState(0);

    return (
        <Context.Provider
            value={{
                isLoading,
                setLoading,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
