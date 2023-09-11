let checkAge = (age) =>{
    return new Promise((resolve,reject)=>{
        if(age > 25){
            resolve("You are older than 25");
        }
        else{
            reject("You are not older than 25");
        }
    });
}


let isEven = (age) =>{
    return new Promise((resolve,reject)=>{
        if(age %2 ==0 ){
            resolve("Your age is even congrats");
        }
        else{
            reject("Your age is not even, try again next year");
        }
    });
}


checkAge(3)
.then((message)=>{
    console.log(message);
})
.catch((e) =>{
    console.log(e);
})
.finally(()=>{
    console.log("Promise block ended");
})


let age = 35;

checkAge(age)
.then((message)=>{//parameters names are not important
    console.log(message);
    return isEven(age);
})
.then((message)=>{
    console.log(message);
})
.catch((e) =>{
    console.log(e);
})
.finally(()=>{
    console.log("Promise block ended");
})


/*

first promise checks if the grade is bigger than 50

second promise checks the grade and gives letter grade
grade > 100 reject
grade > 70 AA
else BB

*/

//Muhammed / Abdullah

let checkPoint = (point) => {
    return new Promise((resolve,reject)=>{ 
        if(point > 100) {
            reject("even you cheat, you cant get that point")
        } else if (point > 70) {
            resolve("AA");
        } else {
            console.log("BB");
        }
    });
}

let checkIsGreaterThanFifty = (point) =>{
    return new Promise((resolve,reject)=>{
        if(point > 50){
            resolve("Your grade higher than 50");
        }
        else{
            reject("You grade lower than 50");
        }
    });
}

let grade = 82;

checkIsGreaterThanFifty(grade)
    .then((point) => {
        console.log(point);
        return checkPoint(grade);
    })
    .then((point) => {
        console.log(point);
    })
    .catch((err) =>   {
        console.log(err);
   
    })
    