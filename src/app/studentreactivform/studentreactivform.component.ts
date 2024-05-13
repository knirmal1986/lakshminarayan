import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentreactivform',
  templateUrl: './studentreactivform.component.html',
  styleUrls: ['./studentreactivform.component.css']
})
export class StudentreactivformComponent implements OnInit {

  fName = "Nirmal"
  lName="Kumar"
  email="nirmal.kasa@gmail.com"
  studentForm = new FormGroup({
    firstName: new FormControl(this.fName,[Validators.required, Validators.minLength(5)]),
    lastName: new FormControl(this.lName,[Validators.required, Validators.minLength(5)]),
    email: new FormControl(this.email,[Validators.required]),

  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.studentForm)
  }

  get firstname() {
    return this.studentForm.get('firstName');
  } 
  get lastname() {
    return this.studentForm.get('lastName');
  } 
}
