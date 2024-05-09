import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log("HomeComponent constructor called")
  }
  ngOnDestroy(): void {
    console.log("HomeComponent ngOnDestroy called")
  }

  ngOnInit(): void {
    console.log("HomeComponent ngOnInit called")
  }

}
