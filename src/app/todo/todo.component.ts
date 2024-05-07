import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../service/todo.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskList: Todo[] = []

  sub = new Subject<number>();  //moved to service
  //dependency Injection(DI)
  //

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    //arrow function
    this.sub.subscribe( (data) => {
      console.log(" emitted by subject==" +data)
    });
    this.todoService._todo.subscribe( (data) => {
      console.log(data);
      this.taskList = data;
    })
    this.loadAllTodoItems();
   
  }

  loadAllTodoItems(){
    this.todoService.loadAll();
    //moved to service
    this.sub.next(1);
    this.sub.next(2);
    this.sub.next(3);

  }
}
