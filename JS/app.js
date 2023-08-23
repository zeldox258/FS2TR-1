class Person {
    constructor(name, age){
        console.log("I have called");
        this.age = age;
        this.name = name;
    }

    printMyInfo(){
        console.log(`I am ${this.name} and I am ${this.age} years old `);
    }

    increaseAge(num){
        this.age +=num;
    }

}


let muhammed = new Person("Muhammed",24);
console.log(muhammed);
muhammed.printMyInfo();
muhammed.increaseAge(5);
muhammed.printMyInfo();

//Worker workerID

class Worker extends Person {

    static workerNum = 0;

    constructor(name, age, workerID){
        super(name, age);
        this._ID=workerID;
        Worker.workerNum++;
    }


    static getTotalWorker(){
        return Worker.workerNum;
    }

    /*
    setID(id){
        this.ID = id;
    }

    getID(){
        return this.ID;
    }
    */

    set ID(id){
        console.log("set method called");
        this._ID = id;
    }

    get ID(){
        console.log("get method called");
        return this._ID;
    }




}


let workerOne = new Worker("Kazım", 29, 1);
let workerOne1 = new Worker("Kazım", 29, 1);
let workerOne2 = new Worker("Kazım", 29, 1);
let workerOne3 = new Worker("Kazım", 29, 1);

console.log(workerOne);
workerOne.printMyInfo();
workerOne.increaseAge(5);
workerOne.printMyInfo();



console.log(workerOne instanceof Person);
console.log(workerOne instanceof Worker);



console.log(muhammed instanceof Person);
console.log(muhammed instanceof Worker);

console.log(Worker.getTotalWorker());

console.log(workerOne.ID);
console.log(workerOne._ID);

workerOne.ID = 5;


/*write a class for Car it should have 3 variable in constructor and class should have 3 function */
class Car {
    constructor(brand, year, color){
        this.brand = brand;
        this.year = year;
        this.color = color;
    }

    go(){
        console.log("Go!");
    }

    turn(){
        console.log("Turn!");
    }

    stop(){
        console.log("Stop!");
    }

}


/**Write Ferrari class put extra 2 function and 2 variable in constructor. extend Car */
/* write getter and setter for the gear and doors and create 2 ferrari object */
class Ferrari extends Car{
    constructor(brand, year,color,gear,doors){
       super(brand, year,color);
       this._gear = gear
       this._doors= doors
    }
    
    Fiat(){
        console.log("gear");
     
    }
    Alfo(){
        console.log("gear");
     
    }
    set gear(gear){
        console.log("set method called");
        this._gear = gear;
    }

    get gear(){
        console.log("get method called");
        return this._gear;
    }
    set doors(doors){
        console.log("set method called");
        this._doors = doors;
    }

    get doors(){
        console.log("get method called");
        return this._doors;
    }
    
}

let Ferrari1 = new Ferrari("Ferrari", 2002, "Red", 6, 2);
let Ferrari2 = new Ferrari("Ferrari", 2006, "Red-White", 8, 2);

console.log(Ferrari1);
console.log(Ferrari2);


/*Muhammed */

console.log(Ferrari1.gear);
console.log(Ferrari1.doors);
Ferrari1.gear = 5;
Ferrari1.doors = 4;

/*Kazim */
Ferrari1.go();
Ferrari1.turn();
Ferrari1.stop();

/*Abdullah */
Ferrari1.Fiat();
Ferrari1.Alfo();
