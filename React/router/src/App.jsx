import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Emre from './Emre';
import Suleyman from './Suleyman';
import Kazim from './Kazim';
import Kazimform from './Form/Kazimform';
import Abdullah from './Abdullah';
import Muhammed from './Muhammed';
import MuhammedForm from './Form/MuhammedForm';
import Omer from './Omer';
import AbdullahForm from './Form/AbdullahForm'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/emre' element={<Emre/>}/>
          <Route path='/suleyman' element={<Suleyman/>}/>
          <Route path='/kazim/:num' element={<Kazim/>}/>
          <Route path='/abdullah/:id' element={<Abdullah/>}/>
          <Route path='/muhammed/:id' element={<Muhammed/>}/>
          <Route path='/omer/:id' element={<Omer/>}/>
          <Route path='/kazimform' element={<Kazimform/>}/>
          <Route path='/Muhammedform/' element={<MuhammedForm/>}/>
          <Route path='/AbdullahForm/' element={<AbdullahForm />}/>


        </Routes>
      </Router>
      
    </div>
  )
}

export default App
