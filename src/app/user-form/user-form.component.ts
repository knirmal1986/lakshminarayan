import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(contactForm:NgForm){
    console.log(contactForm)
  }

  resetForm(contactForm:NgForm){
    contactForm.reset();
  }
}
