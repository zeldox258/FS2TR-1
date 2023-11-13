import React from 'react'

const Muhammed = (): JSX.Element => {

  type muhammed = {
    brand: string,
    year: number
  }
  
  type muhammed2 = {
    name: string,
    age: number
  }

  const Muhammeddd : muhammed & muhammed2 = {brand:"Ford", year:2020, name: "Muhammed", age:24}
  
  class Car {
    protected brand: string;
    private year:number;
  
    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }
    public myCar() {
        console.log(`Hello, my car is ${this.brand}!`);
    }
  }
  class Ford extends Car {
    public gear: number;
    constructor(brand: string, year: number, gear: number) {
      super(brand, year);
      this.gear = gear;
    }
    public introduce() {
      console.log(`Hi, I am ${this.brand} and I have ${this.gear} gear`)
    }
  }
  const ford : Ford = new Ford("Ford", 2015, 6)
  
  return (
    
    console.log(Muhammeddd, ford)
  )
}

export default Muhammed
