const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];



  /* write function that takes an array as a parameter,  and print their names acording to ages
  
  Paul is not older than 20
  George is not older than 20
  Lucas is older than 20
  .
  .
  
  */


  /* Abdullah */
  function filterAges(people){
     for(let i=0 ; i<people.length;i++){
        if(people[i].age >20){
          console.log(`${people[i].name} is older than 20`);
        }
        else{
          console.log(`${people[i].name} is not older than 20`)
        }
     }

  }
  
filterAges(persons);

console.log("////////////////////////////////////////");

/* make it with for each */

/* Muhammed */

function filterAgesForEach(people){

    people.forEach((value)=>{
      if(value.age >20){
        console.log(`${value.name} is older than 20`);
      }
      else{
        console.log(`${value.name} is not older than 20`)
      }
      
    })


 }
 
 filterAgesForEach(persons);



/* make it with array.map */

/* Kazim */

function filterAgesMap(people){
    console.log(people.map(person => person.age > 20 ?  `${person.name} is older than 20` : `${person.name} is not older than 20`));
}
filterAgesMap(persons);

/*

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 40 }
];

const names = people.map(person => person.name);

console.log(names); // Output: ["Alice", "Bob", "Charlie"]


*/



let twoSum = (num1,num2) =>{//arrow function
    return num1+num2;
}

function twoSum2(num1,num2){
    return num1 + num2;
}
  /* Abdullah */
let arrowFilterAges = (people) =>{
    for(let i=0 ; i<people.length;i++){
       if(people[i].age >20){
         console.log(`${people[i].name} is older than 20`);
       }
       else{
         console.log(`${people[i].name} is not older than 20`)
       }
    }

 }
 
 arrowFilterAges(persons);


function printMyName(){

    function inner(name){
        console.log(name);
    }

    return inner;

}



printMyName("selami")("selamiasffsa");




/* Abdulah */

function clock(){
    let sec = 0;
    let min = 0;
    function inner(){
        //interval
        setInterval(()=>{
            sec++;
            if(sec == 60){
                sec = 0;
                min++;
            }

            console.log("Minutes:",min,"Seconds:",sec);

        },1000);

    }

    inner();

}


//clock();

/*
minutes : 0 second: 0 
minutes : 0 second: 1
minutes : 0 second: 2 
.
.
.
minutes : 1 second: 0 

*/


/* Kazim */
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  

let person1Copy = {};
Object.assign(person1Copy,person1);
person1Copy.age = 55;
console.log(person1);
console.log(person1Copy);


/*
const person1Copy={};
person1Copy.age = 55;
console.log(person1);
console.log(person1Copy);*/
console.log("///////////////");



/* Abdullah */
const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  const person2copy = Object.assign({},person2);
  person2copy.age = 16 ;
  console.log(person2copy);
  console.log(person2);
  console.log("///////////////");


  
/* Muhammed */
const person3 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };

const person3Copy = Object.assign({},person3);
person3Copy.age = 55;
console.log(person3);
console.log(person3Copy);


const singlePerson = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };

  console.log(Object.keys(singlePerson));
  console.log(Object.values(singlePerson));

  console.log(singlePerson[Object.keys(singlePerson)[2]])

  const order = {};

  if (order && order.customer && order.customer.address && !order.customer.address.city) {
    console.log('City is required');
  }


if(!order?.customer?.address?.city){
    console.log('City is required');
}
