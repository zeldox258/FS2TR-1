import { useState } from "react";
import "./App.css";

function Kazim() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");

  const addCar = (e) => {
    e.preventDefault();
    const car = {
      brand,
      model,
      year,
      color
    };

    const carsData = JSON.parse(localStorage.getItem("cars")) || [];
    carsData.push(car);
    localStorage.setItem("cars", JSON.stringify(carsData));

    setBrand("");
    setModel("");
    setYear("");
    setColor("");
  }

  const displayAll = () => {
    console.log(JSON.parse(localStorage.getItem("cars")));
  }

  return (
    <>
      <form>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            onChange={(e) => setModel(e.target.value)}
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            name="year"
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            name="Color"
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <button onClick={addCar}> Add Car </button>
        
      </form>
      <button onClick={displayAll}> Display All </button>
    </>
  );
}

export default Kazim;
