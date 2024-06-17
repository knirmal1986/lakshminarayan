import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  toDate: Date = new Date(); 
  welcomeResponse = ''
  userName : string  = 'Nirmal'

  // obsValue = new Observable((observer) => {
  //   console.log("Observable starts")
  //   setInterval( () => {observer.next(Math.floor(Math.random() * 
  //     (999999 - 100000)) + 100000)}, 1000)
  // })
  
  constructor(private globalService: GlobalService) { 
    console.log("HomeComponent constructor called")
  }
  ngOnDestroy(): void {
    console.log("HomeComponent ngOnDestroy called")
  }

  ngOnInit(): void {
    console.log("HomeComponent ngOnInit called")
    // this.obsValue.subscribe( (value) => {
    //   console.log(value)
    // })

    this.globalService.getWelcomeDtls().subscribe((data) =>{
     // console.log(JSON.parse(JSON.stringify(data)));
      console.log(data);
      //this.welcomeResponse = JSON.parse(JSON.stringify(data))
    },
    (error) => { //callback function
      console.log(error)
    },
    () => {
      console.log("complete function")
    }
    )
  }

}
