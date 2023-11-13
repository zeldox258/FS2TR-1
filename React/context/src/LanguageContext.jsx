import React,{createContext,useContext, useState} from "react";

const MyContext = createContext();

const MyProvider = ({children})=>{
    const [languageValue,setlanguageValue] = useState("Tr");

    return <MyContext.Provider value={{languageValue,setlanguageValue}}>{children}</MyContext.Provider>
}


const useMyContext = ()=>{
    return useContext(MyContext);
}

export { useMyContext, MyProvider};