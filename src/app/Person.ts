export type Person =  {
    firstName : string;
    lastName: string;
    age: number;
    phno?:string;   //optional value 
    fullName: ()=> {}
}

export interface Employee  {
    firstName : string;
    lastName: string;
    age: number;
    phno?:string;
    fullName: ()=> {}
}