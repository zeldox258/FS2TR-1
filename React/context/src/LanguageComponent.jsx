import React from "react";
import { useMyContext } from "./LanguageContext";


const LanguageComponent = ()=>{
    const {languageValue,setlanguageValue} = useMyContext();
    setlanguageValue("French");

    return(
    <div>
        {languageValue}
    </div>
    )
}

export default LanguageComponent;