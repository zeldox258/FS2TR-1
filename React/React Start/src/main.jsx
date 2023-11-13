import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DollarConverter from './DollarConverter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <DollarConverter  age={25} name="Okkes" color="Red" dollarDefault={30} defaultRate={27}/>
  </React.StrictMode>,
)


/** <App /> */