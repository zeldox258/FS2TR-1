import { useState, useEffect, useMemo } from 'react'
import axios from 'axios';
function DollarConverter({name,age,color,dollarDefault,defaultRate}){
    const [tl,setTL] = useState(0);
    const [eur,setEur] = useState(0);
    const [euroos,setEuroos] = useState(0);

    const [dollar,setDollar] = useState(dollarDefault);
    const DOLLAR_RATE = 27.25;

    //console.log("Props : ",props);
    console.log(name,age,color);
    

     useEffect(() => {
        // let rate = Math.random()+27
        setTL(dollar*defaultRate);
        //return 28;
        axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/try.json')
          .then(response => {
            setEur(response.data.try);
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    }, [dollar,eur])


    let tlValue = useMemo(() => {
        // let rate = Math.random()+27
        return <h1> Tl Value Memo: {defaultRate*dollar}</h1>;
        
    }, [dollar])

    
    return(
        <div>
            <div>
                <h1>tl</h1>
                <p>{tl}</p>
           </div>
           <div>
                {tlValue}
           </div>
           <div>
                <h1>dollar</h1>
                <p>{dollar}</p>
                <button onClick={() => { 
            setDollar(dollar+1);
            //setTL((dollar+1)*DOLLAR_RATE);
  
        }}>Dollar+1 </button>
               <button onClick={() => { 
            setDollar(dollar-1);
            //setTL((dollar-1)*DOLLAR_RATE);
        }}> Dollar-1</button>
           </div>
           <div>
                <h1>Euro</h1>
                <p>{euroos}</p>
                <p>{euroos*eur}</p>
                <button onClick={() => { 
            setEuroos(euroos+1); 
        }}>Euro+1 </button>
               <button onClick={() => { 
            setEuroos(euroos-1);
        }}> Euro-1</button>
           </div>
        </div>
         
        
    )
}

export default DollarConverter;