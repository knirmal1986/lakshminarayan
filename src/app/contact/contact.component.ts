import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor() { 
    console.log("ContactComponent constructor called")
  }
  ngOnDestroy(): void {
    console.log("ContactComponent ngOnDestroy called")
  }

  ngOnInit(): void {
    console.log("ContactComponent ngOnInit called")
  }

}
