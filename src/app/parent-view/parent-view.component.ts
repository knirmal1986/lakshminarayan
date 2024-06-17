import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css']
})
export class ParentViewComponent implements OnInit {
@ViewChild('childView') childView : ChildViewComponent | undefined 
  userData : any
  constructor() { }

  ngOnInit(): void {
    this.userData = {
      fname:'Nirmal',
      lname:'kumar'
    }
  }

  updateFname(){
    this.childView?.updateFname()
  }
}
