import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  //private counter = new Subject<number>();
  private counter = new BehaviorSubject<number>(10000);
  counterValue = this.counter.asObservable();

  private user = new Subject<any>();
  userObservable = this.user.asObservable()
  constructor() { }

  setCounter(count:number){
    //realtime this value comes from db
    this.counter.next(count)
  }

  
  setUser(userDtls: any){
    //realtime this value comes from db
    this.user.next(userDtls)
  }
}

//service layer --> interacts with DB and get the values
//component --> receive the data from service layer and display the info in html with 
              //@input and @output
