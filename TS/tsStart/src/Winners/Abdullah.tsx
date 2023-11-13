export default function Abdullah ():JSX.Element{
  type adk1={
    model:string,
    year:number
} 
type adk2={
    gear:number,
    color:string
} 
class Cars {
    constructor(public name: string,protected age: number) {
      this.name = name;
      this.age = age;
    }
  }
class Cars2 extends Cars{
    constructor(name:string,age:number ,private gear:number){
        super(name,age);
        this.gear= gear;
    }
}
const supers = new Cars2("ford",45,4);
const adk:adk1 & adk2={model:"mustang",year:1967,gear:4,color:"black"}
return(<>{console.log(adk,supers)}</>);
}