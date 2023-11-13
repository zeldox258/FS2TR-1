import { useState } from 'react'
import './App.css'
import { MyProvider } from './LanguageContext'
import LanguageComponent from './LanguageComponent';

function App() {

  return (
    <MyProvider>
      <LanguageComponent/>
    </MyProvider>
  )
}

export default App
