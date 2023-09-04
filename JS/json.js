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