
import React, { useState, createContext } from "react";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [warning, setWarning] = useState(false);
    
    return (
        <AppContext.Provider value={{warning, setWarning}}>
           {children}
        </AppContext.Provider>
    )
};

export default AppProvider;