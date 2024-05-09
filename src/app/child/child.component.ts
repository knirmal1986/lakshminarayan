import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() countValue: number = 0;
  @Input() fName: string = "";
  @Input() lName: string = "";

  @Output() countChanged: EventEmitter<number> = new EventEmitter();
  constructor() { 
    console.log('ChildComponent construnctor');
  }

  ngOnInit(): void {
    console.log('ngOnInit ChildComponent');
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

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges in ChildComponent');
    console.log(JSON.stringify(changes));
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck in ChildComponent');
  }
}
