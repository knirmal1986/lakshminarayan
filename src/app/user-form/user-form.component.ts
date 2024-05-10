import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface User {
  firstName: string,
  lastName:string
}
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  contact :User = {} as any ; 
  constructor() { }

  ngOnInit(): void {
    this.contact = {
      firstName: 'Nirmal',
      lastName:'Kumar'
    }
  }

  submitForm(contactForm:NgForm){
    console.log(contactForm)
  }

  resetForm(contactForm:NgForm){
    contactForm.reset();
  }
  updateData(){
    this.contact.firstName ="Girish"
  }
}
