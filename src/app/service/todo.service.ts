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
  mockData :Todo[]=  [ {
    id:1,
    value:'task 1'
  },
  {
    id:2,
    value:'task 2'
  },
  {
    id:3,
    value:'task 3'
  }]
  constructor() { }

  
  loadAll() {
    //console.log("load All called")
   this._todo.next(this.mockData)
  }
}
