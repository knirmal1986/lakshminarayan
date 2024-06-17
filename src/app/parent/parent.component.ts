import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DbServiceService } from '../service/db-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // should be get from service 
  count = 0;
  constructor(public dbService:DbServiceService) { }

  ngOnInit(): void {
    console.log("ngOnInit ParentComponent")
    const userObj = {
      fname:'Nirmal',
      lname:'kumar'
    }
    // this.dbService.setCounter(1);
    // this.dbService.setCounter(2);
    // this.dbService.setCounter(3);
    this.dbService.setUser(userObj)
    this.dbService.counterValue.subscribe( (data) => this.count = data)


    //user subscription
    this.dbService.userObservable.subscribe( (user) => console.log(user))
  }

  increment(){
   // this.count++;
    this.dbService.setCounter(++this.count)
  }
  decrement(){
    //this.count--
    this.dbService.setCounter(--this.count)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("destroyed the parent component")
  }
  // result(event: any){
  //   console.log(event)
  // }
}
