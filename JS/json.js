let newObj = {a:15,b:25};

let stringObj = JSON.stringify(newObj);

console.log(stringObj,newObj);

let obj2 = JSON.parse(stringObj)
console.log(obj2);
console.log(JSON.parse("{\"a\":885,\"b\":25}"))

console.log(JSON.stringify([1,2,3,4,5,6,7,"asddsa"]))


//Abdullah

let abObj ={age:25,name:"Apo"}
//convert to json string then parse it again and change age and print both new object and old object 

let abObj2;
abObj2=JSON.parse(JSON.stringify(abObj));
abObj2.age = 26;
console.log(abObj,abObj2);


console.log("//////////////////////////////");
console.clear();
//LOCALSTORAGE

localStorage.setItem('abdullah',23);

let apoAge = localStorage.getItem('abdullah');

console.log(typeof apoAge,apoAge);


localStorage.setItem('obje',JSON.stringify({age:23}));

let obje = localStorage.getItem('obje');

console.log(typeof obje,obje);
console.log(JSON.parse(obje));

//Abdullah

/*
create person object.
store it in localStorage with key 'specPerson'
get this 'specPerson' from localStorage
change age
print previous person and new person
*/

const person = {
    age:25,name:"Apo"
}
localStorage.setItem('specPerson',JSON.stringify(person));
let Age = localStorage.getItem('specPerson');
let newPerson = JSON.parse(Age);
newPerson.age = 15;

console.log(newPerson);
console.log(person);

//Muhammed


/*

storage rates in localstorage with 'rates' key
get 'rates' from localstorage
change TRY to 0.05
print all the rates

*/




const url = 'https://open.er-api.com/v6/latest/USD';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data.rates);
    localStorage.setItem('rates', JSON.stringify(data.rates));
    let rates = JSON.parse(localStorage.getItem('rates'));
    rates.TRY = 0.05;
    console.log(rates);
    
    // Now you can work with the JSON data returned from the API
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });



  // Make a GET request using Axios
  axios.get('https://open.er-api.com/v6/latest/USD')
  .then(function (response) {
      // Handle successful response here
      console.log('Response data:', response.data);
  })
  .catch(function (error) {
      // Handle error here
      console.error('Error:', error);
  });



