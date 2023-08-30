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
  
//Kazim
function adultFilter(age){
    return persons.filter((person) => person.age > age  );
}
//Abdullah
function letterFilter(letter){
    return persons.filter((person) => person.name.charAt(0) == letter );
}


console.log(adultFilter(20));

console.log(letterFilter('S'));

//kazim
function nicknameMap(icon){

    return persons.map((person) =>  person.name +" "+ icon +" "+ person.age );

}

//icon = '-'  => ["Paul - 16", "George - 17"...]

console.log(nicknameMap('*'));


//Abdullah
function nicknameMap2(icon){

    return persons.map((person) => icon+ " "+ person.name +" "+ icon +" "+ person.age+" "+ icon );

}

//icon = '-'  => ["- Paul - 16 -", "- George - 17 -"...]

console.log(nicknameMap2('*'));

function ageAverage (){
    const totalAge = persons.reduce((accumulator, person) => accumulator + person.age, 0);
    return totalAge / persons.length;
}

console.log(ageAverage());


/*
Create a function called uncompletedNotes that returns only not completed todos.
*/

const notes = [
    {
      id: 1,
      description: "Workout program",
      todos: [
        {
          id: 1,
          name: "Push ups - 10 x 3",
          done: false,
        },
        {
          id: 2,
          name: "Abdominals - 20 x 3",
          done: true,
        },
        {
          id: 3,
          name: "Tapis Roulant - 15min",
          done: true,
        },
      ],
    },
    {
      id: 2,
      description: "Front-end Roadmap",
      todos: [
        {
          id: 1,
          name: "Learn HTML",
          done: true,
        },
        {
          id: 2,
          name: "Learn CSS",
          done: true,
        },
        {
          id: 3,
          name: "Learn JavaScript",
          done: true,
        },
        {
          id: 4,
          name: "Learn Angular",
          done: false,
        },
      ],
    },
  ];


function uncompletedNotes(){
    const result = notes.map((note) => note.todos.filter((todo) => !todo.done));
    return result;
}

console.log(uncompletedNotes());


/*
Create a function called sortPeopleByAge that returns the people in ascending order by age.


*/

function sortPeopleByAge(){
    return  persons.sort((a,b)=> b.age - a.age )
}

console.log(sortPeopleByAge());

//Abdullah
/*
Write a function called printAsyncName, which takes a callback and a string(which will be name) as parameters. 
The callback function will simply print "Hello". 
The printAsyncName function will have to execute the callback function after an interval of 1 second. 
After an interval of 2 seconds, we must print the name that we take as a parameter.

*/
function printAsyncName (callback,name){
    let id =setInterval(()=>{
        callback();
        setTimeout(()=>{
          console.log(name);
        },2000)
    },1000)
    setTimeout(()=>{ clearInterval(id)},5000);

}
function hello_name(){
    console.log("hello");
}
printAsyncName(hello_name,"abdullah");
//Kazim
/*
Write a function called repeatHello which takes a callback as it's parameter. 
The callback function will simply print "Hello". 
The repeatHello function will have to execute the callback function with an interval of 1 second. 
The callback function must be an arrow function.

*/
const helloCallbackFunction = () => {
    console.log("Hello");
}
function repeatHello(helloCallback = helloCallbackFunction) {
    let id = setInterval(helloCallback, 1000);
    setTimeout(()=>{ clearInterval(id)},5000);
}




repeatHello();


/*
Starting from the previous exercise, we want to add to our function repeatHello, a clearInterval after 5 seconds, could you do that?

The callback function must be an arrow function, can you also explain why? 
*/


