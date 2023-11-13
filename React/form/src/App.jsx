import { useState } from 'react'

import './App.css'
import Kazim from './Kazim'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
       Welcome
       <Kazim/>
      </div>
   
  )
}

export default App
