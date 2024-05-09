import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) childComponent: ChildComponent | undefined ;
  count = 10;
  childCount= 0;
  firstName ='Nirmal';
  lastName ='Nirmal';
  title = 'Parent interacts with child via local variable';
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.count++
  }
  decrement(){
    this.count--
  }

  countChangedFromChild(event: number){
    console.log(event);
   this.childCount++
  }

  //   increment(){
  //   this.childComponent?.increment();
  // }
  // decrement(){
  //   this.childComponent?.decrement();
  // }

}
