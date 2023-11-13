import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Abdullah from './Abdullah';
import Kazim from './FS2TR1Kazim';
import FS2TR1KazimSingle from './FS2TR1KazimSingle';
import AbdullahWebsite from './FS2TR1Abdullah';
import Muhammed from './FS2TR1Muhammed';
import DollarConverter from './DollarConverter';
function App() {
  const [count, setCount] = useState(-10);
  const [counts, setCounts] = useState(-10);


  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <DollarConverter/>
      <Abdullah />
      <Kazim />
      <FS2TR1KazimSingle/>
      <Muhammed />
      <AbdullahWebsite/>

      <h1>{ count % 2 == 0 ? "Vite is best" : "Vite is not best"} + { counts % 4 == 0 ? "React is best" : "React is not best"}</h1>
      <div className="card">
        <button onClick={() => { 

          let newValue = count+1;

          setCount(newValue)
          console.log(newValue);
          
        }}>
          count is {count}
        </button>
        
        <button onClick={() => { 

          let newValue = counts+3;

          setCounts(newValue)
          console.log(newValue);

        }}>
          count is {counts}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
