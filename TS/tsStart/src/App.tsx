import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Muhammed from './Winners/Muhammed'
import Abdullah from './Winners/Abdullah'
import KazimComponent from './Winners/Kazim';

function App() {
  const [count, setCount] = useState(0)

  let isOkay:boolean = true;
  let myNum: number = 5;
  let myString: string = "selam";
  let nullValue:null= null;
  let undefValue : undefined = undefined;
  let suybol: symbol = Symbol("Kazim <Muhammed> Abdullah");
  let bigIngValue : bigint = 100n;
  let numberArray : number[] = [1,2,3,4,5];

  console.log(suybol);

  //add num1 num2 num1+num2
  function Add(num1:number,num2:number):number{
    return num1+num2
  }
  /*
  
  */
  let smthng : any = 5885;
  let smthng2:number = smthng as number;

  type abdullah = number;

  let someNum : abdullah = 25;

  console.log(someNum, typeof someNum);

  type person = {
    name:string,
    age:number,
    location?:string
  }
  type worker = {
    ssn:number
  }
 

  let myPerson:person = {name:"Kazim",age:23}
  let myPerson2:person & worker = {name:"Kazim",age:23,ssn:258}


  console.log(myPerson, typeof myPerson);

  interface Person{
    name:string;
    age:number;
    location?:string;
  }

  interface Worker extends Person{
    ssn:number
  }


  interface Person{
    fatherName:string
  }

let Muhammedddddd : Worker = {name:"Muhammed", age:24,ssn:253, fatherName:"Ali"};


// create 2 type, create 3 interface. 1 interface should extend one of the others. create one object from types and interfaces

/*
Kazim
*/
type type1Kazim ={
  id:number,
}
type type2Kazim ={
  name:string,
}

interface interface1Kazim{
  id:number;
  name:string;
}

interface interface2Kazim extends interface1Kazim{
  age:number;
} 

interface interface3Kazim extends interface2Kazim{
  isMale:boolean;
}

let Kazim: type1Kazim & type2Kazim = {id:1,name:"Kazim"};
let Kazim2 : interface3Kazim = {id:1,name:"Kazim",age:29,isMale:true};


/*
Abdullah
*/
type adk= number

type adk2=boolean

interface adkInterface{
  number1:adk;
  id1:adk;
  check1:adk2;
}
interface adkInterface2  extends adkInterface{
  number:adk;
  id:adk;
  check:adk2;
}
interface adkInterface3 extends adkInterface2{
  numbers:adk;
  ids:adk;
  checks:adk2;
}
let show: adkInterface3 ={number:5,number1:2,numbers:7,id:8,ids:8,checks:true,check1:true,}
/*
Muhammed
*/



type muhammed = {
  brand: string,
  year: number
}

type muhammed2 = {
  name: string,
  age: number
}

interface Muhammed1 {
  number: number;
  city: string;
}

interface Muhammed2 extends Muhammed1 {
  zipCode: number;
}

interface Muhammed3 {
  job: string;
}

let Muhammedd : Muhammed2 & Muhammed3 = {number:334, city:"Van", zipCode: 65000, job:"Frontend Developer I hope"}
let Muhammeddd : muhammed & muhammed2 = {brand:"Ford", year:2020, name: "Muhammed", age:24}


let myDict: dynamic = {
  "one": 1,
  "two": 2,
  "three":3
  // ...
};

interface MathOperations {
  add: (x: number, y: number) => number;
  subtract: (x: number, y: number) => number;
}

const calculator: MathOperations = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y
};

console.log(calculator.add(25,15));

class PersonClass {
  public name: string;
  protected age: number;
  private address:string;

  constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
  }
  public sayHello() {
      console.log(`Hello, my name is ${this.name}!`);
  }

}
let john2 : PersonClass = new PersonClass("John Doe", 30, "4499 Burke st.");
console.log(john2.name); // Accessible
john2.sayHello(); // Accessible
//console.log(john2.address);
//console.log(john2.age);


class Employee extends PersonClass {
  private employeeId: number;

  constructor(name: string, age: number, address: string, employeeId: number) {
      super(name, age, address);
      this.employeeId = employeeId;
  }

  public introduce() {
      console.log(`Hello, I am ${this.name}, and my employee ID is ${this.employeeId}. my address is ${this.age}`);
      this.sayHello(); // Accessible because 'sayHello' is protected in the base class
  }
}

let john = new Employee("John Doe", 30,"4499 Burke st", 1234);
console.log(john.name); // Error: Property 'name' is protected and only accessible within class 'Person' and its subclasses.
john.introduce(); // Accessible


function identity<T>(arg:T):T{
  console.log(typeof arg);
  return arg;
}

console.log(identity<number>(5));

interface Pair<K, V> {
  key: K;
  value: V;
}

const keyValue: Pair<string, number> = { key: "age", value: 30 };

const tuple: [string, number, boolean, number?] = ["hello", 42, true,25];


enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4
}

let Direction2:any = {
  Up : 1,
  Down : 2,
  Left : 3,
  Right : 4
}

type MyMappedType = {
  [Property in 'prop1' | 'prop2' | 'prop3' ]: number;
};

let myObject: MyMappedType = {
  prop1: 42,
  prop2: 155,
  prop3: 25
};



type MyMappedType2<T> = {
  [K in keyof T]: number;
};



interface MyObject {
  prop1: string;
  prop2: boolean;
}

type TransformedObject = MyMappedType2<MyObject>;


console.log(tuple);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Abdullah/>
      <Muhammed />
      <KazimComponent/>
    </>
  )
}

export default App
