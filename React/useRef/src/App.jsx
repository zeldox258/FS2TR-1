import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'
import useLibrary from './useLibrary'
import useGallery from './CustomHooks/useGallery'
import UsePetShop from './CustomHooks/usePetShop'
import useUser from './CustomHooks/useUser'
function App() {

  /*//Kazim
  const [books, setBooks] = useLibrary(0);
  //Abdullah
   const [bookNum, addBook, removeBook] = useLibrary();*/
  //Muhammed
  const {bookNum, addBook, removeBook} = useLibrary({bookNum:25})
  const {car, addCar, removeCar, warnClick} = useGallery({car:0})
 const {pets,addPet,removePet,delPet} = UsePetShop({pet:5})
 const [user, addUser, removeUser, printUser] = useUser(0)
  useEffect(()=>{  
    
  },[])

  return (
    <>
      <Parent/>
      <button onClick={()=>{
        addBook();
        console.log(bookNum);

      }}>Click me</button>

<button onClick={()=>{
        removeBook();
        console.log(bookNum);

      }}>Click me</button>

<button onClick={()=>{
        addCar();
        console.log(car);

      }}>Add Car</button>

<button onClick={()=>{
        removeCar();
        console.log(car);

      }}>Delete Car</button>
      <button onClick={()=>{
        warnClick();

      }}>Do not Click</button>

<button onClick={()=>{
        addPet();
        console.log(pets);

      }}>Add pet</button>

<button onClick={()=>{
        removePet();
        console.log(pets);

      }}>Delete pet</button>
      <button onClick={()=>{
        delPet();
        console.log(pets);
      }}> reset pet</button>
      
<button onClick={()=>{
        addUser();
        console.log(user);

      }}>Add User</button>
      
<button onClick={()=>{
        removeUser();
        console.log(user);

      }}>Remove user</button>
      
<button onClick={()=>{
        printUser();
        console.log(user);

      }}>Print user</button>
    </>
  )
}

export default App
//Kazim useUser
//Abdullah usePetShop
//Mukammed useGallery

