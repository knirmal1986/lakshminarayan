import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../service/todo.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  task : string = "";
  updateTask : Todo = {} as any
  taskList :Todo[] = []
  // taskList: Todo[] = [ 
  //   {id:0, value:'Go to gym' },
  //   {id:1, value:'Go to Groceries' },
  //   {id:2, value:'Go to movies' },
  // ]

  //sub = new Subject<number>();  //moved to service


  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadAllTasks()
  }

  loadAllTasks(){
    this.taskList=  this.todoService.loadAll();
  }
  addTask(){
    // const newTask = {
    //   id: this.taskList.length,
    //   value:this.task
    // }
    // this.taskList.push(newTask);
    this.todoService.addTaskListItem(this.task)
    this.task =""
  }

  remove(index: number){
   // this.taskList.splice(index,1);
    this.todoService.removeTaskListItem(index);
  }

  update(id: number){
    this.updateTask =  this.taskList.find( (item) => item.id== id) as any;
    console.log(this.updateTask);
    this.task = this.updateTask?.value as any
  }

  updateTaskListItem(){
    const newRevisedTask = { ...this.updateTask, value:this.task}
    console.log(newRevisedTask);
    // let index = this.taskList.findIndex( item =>  item.id == newRevisedTask.id );
    // this.taskList[index]= newRevisedTask
    this.updateTask = {} as any
    this.task = ""

    this.todoService.updateTaskListItem(newRevisedTask)
  }
}
