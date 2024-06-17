import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() counter = 0
@Output() counterIncrement = new EventEmitter<number>();

  constructor() { 
    console.log('ChildComponent construnctor');
  }
  ngOnInit(): void {
   
  }

  increment(){
    this.counterIncrement.emit(++this.counter);
  }

  decrement(){
    this.counterIncrement.emit(--this.counter);
  }
}
