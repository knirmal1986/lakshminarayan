import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

taskList : any
  constructor(private router: Router, private todoService : TodoService) { 
    console.log("ContactComponent constructor called")
  }
  ngOnDestroy(): void {
    
    console.log("ContactComponent ngOnDestroy called")
  }

  ngOnInit(): void {
    this.taskList = this.todoService.loadAll()
    console.log("ContactComponent ngOnInit called")
  }

  navigate(id: number){
    //this.router.navigate( ['contact/viewTaskDtls',id])
    this.router.navigate( ['viewTaskDtls',id])
  }
}
