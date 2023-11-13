export default KazimComponent =  (): JSX.Element => {
  type type1Kazim1 = {
    id: number;
  };
  type type2Kazim1 = {
    name: string;
  };

  const Kazim: type1Kazim1 & type2Kazim1 = { id: 1, name: "Kazim" };

  class PersonClass {
    public name: string;
    protected age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  class Employee extends PersonClass {
    private employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
      super(name, age);
      this.employeeId = employeeId;
    }
  }

  const employee = new Employee("John Doe", 30, 1234);
  return(
    <>
      {console.log(Kazim)}
      {console.log(employee)}
    </> 
  )
  
};


