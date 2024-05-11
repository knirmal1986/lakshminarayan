import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Todo {
  id: any;
  value: string;
}
//singleton
//only 1 instance be crated for the whole application
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  _todo = new BehaviorSubject<Todo[]>([]);
  private todos: Todo[] = [];

  private nextId = 0;
  taskList: Todo[] = [ 
    {id:0, value:'Go to gym' },
    {id:1, value:'Go to Groceries' },
    {id:2, value:'Go to movies' },
  ]
  constructor() { }

  
  loadAll() {
    //console.log("load All called")
   //this._todo.next(this.mockData)
   return this.taskList;
  }

  addTaskListItem(task:string){
    const newTask = {
      id: this.taskList.length,
      value:task
    }
    this.taskList.push(newTask);
  }

  removeTaskListItem(index: number){
    this.taskList.splice(index,1)
  }

  updateTaskListItem(todoItem: Todo){
    let index = this.taskList.findIndex( item =>  item.id == todoItem.id );
    this.taskList[index]= todoItem
  }
}
