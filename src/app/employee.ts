export class Employee{  // blueprint contains properties and methods
     id:number;
     fName: string;
     salary: number;
    companyName: string ='Infosys'
       // id=10 : default value
    constructor(id = 10, fname :string, empSalary=10000){  // usage is assgining values to the propertiees
        //console.log("body of the constructor")
        this.id = id;
        this.fName = fname;
        this.salary = empSalary;
    }
    //constructor(id:number);
    // constructor(id:number){
    //     this.id= id;
    // }

    //declaration w/o body
    //definition
    //public -> access modifier 
    //shorthand property creation
    fullName(): string{
        return this.fName.toUpperCase()
    }

    //Rest parameter

     fnRest(a:number, b:number,...args:number[]) {
  
        console.log("a", a);
        console.log("b", b);
        console.log("args", args);
        console.log("args[0]", args[0]);
        console.log("args", args[1]);
      }

      printNames(...names: string[]): void {
        console.log("Count " + names.length)
        // for (let name of names) {
        //     console.log(name);
        // }
        names.map( (e) => {console.log(e)})
    }
}

//employee 1 -> 10, Nirmal  Infosys: fullName // memory management
//employee 2-> 20, SukhvirInfosys : fullName // 
//employee 1 -> 10, NirmalInfosys: fullName // memory management
//employee 2-> 20, SukhvirInfosys : fullName // 
//employee 1 -> 10, Nirmal Infosys: fullName // memory management
//employee 2-> 20, Sukhvir Infosys: fullName // 