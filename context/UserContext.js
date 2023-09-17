import React,{createContext,useState} from 'react'

export const UserContext= createContext(null);

export const UserContextProvider=({children})=>{
    const [theme,setTheme]= useState('light');
    const values={
        theme,
        setTheme
    }
    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    )
}