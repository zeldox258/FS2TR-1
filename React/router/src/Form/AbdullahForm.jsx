import { useState, useEffect } from "react";


export default function AbdullahForm() {
  const [brand, setbrand] = useState("");
  const [model, setmodel] = useState("");
  const [color, setcolor] = useState("");
  const [year, setyear] = useState(0);
  const [id, setId] = useState(0);

  const displayAll = () => {
    console.log(JSON.parse(localStorage.getItem("cars")));
  };
  useEffect(() => {
    let cars = [];
    let car = {
      brand,
      model,
      color,
      year,
    };
    cars = JSON.parse(localStorage.getItem("cars"));
    if (cars) {
      cars.push(car);
      localStorage.setItem("cars", JSON.stringify(cars));
    } else {
      localStorage.setItem("cars", JSON.stringify([car]));
    }
  }, [id]);

  return (
    <>
      <label>
        brand:
        <input value={brand} onChange={(e) => setbrand(e.target.value)} />
      </label>
      <label>
        model:
        <input value={model} onChange={(e) => setmodel(e.target.value)} />
      </label>
      <label>
        year:
        <input
          value={year}
          onChange={(e) => setyear(e.target.value)}
          type="number"
        />
        <label>
          color:
          <input value={color} onChange={(e) => setcolor(e.target.value)} />
        </label>
        <button onClick={() => setId(id + 1)}>Add</button>
        <button
          onClick={displayAll}
        >
          Display All
        </button>
      </label>
    </>
  );
}
