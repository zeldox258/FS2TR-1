import { useState } from 'react'

 function MuhammedForm() {
    const [carData, setCarData] = useState({
        brand: '',
        model: '',
        year: '',
        color: ''
      });
    
      function addCar() {
        let storageCar = JSON.parse(localStorage.getItem("storageCar")) || []
        storageCar.push(carData);
        localStorage.setItem('storageCar', JSON.stringify(storageCar));
      }
      function displayAllCars() {
        const storageCar = JSON.parse(localStorage.getItem('storageCar')) || [];
        console.log(storageCar)
      }
    
      function handleInputChange(e) {
        setCarData({
          ...carData,
          [e.target.name]: e.target.value
        });
      }
      return (
        <>
          <input type="text" placeholder='Brand' name='brand' value={carData.brand} onChange={handleInputChange}/>
          <input type="text" placeholder='Model' name='model' value={carData.model} onChange={handleInputChange}/>
          <input type="text" placeholder='Year' name='year' value={carData.year} onChange={handleInputChange}/>
          <input type="text" placeholder='Color' name='color' value={carData.color} onChange={handleInputChange}/>
          <button onClick={addCar}>Add Car</button>
          <button onClick={displayAllCars}>Display All</button>
        </>
      )
}
export default MuhammedForm