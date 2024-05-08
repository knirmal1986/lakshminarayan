import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() countValue: number = 0;
  @Input() fName: string = "";
  @Input() lName: string = "";

  @Output() countChanged: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  ChildIncrement(){
    this.countValue++;
    this.countChanged.emit(this.countValue)
  }

  increment(){
    this.countValue++
  }
  decrement(){
    this.countValue--
  }

}
