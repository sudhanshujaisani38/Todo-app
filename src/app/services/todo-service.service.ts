import { Injectable } from '@angular/core';
import { Todo } from './../model/Todo';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[]=[];
  constructor() {
  }
  
  getTodos(){
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }


  toggleCompletionStatus(todo: Todo) {
    const index=this.todos.findIndex(
      todoInstance=>todoInstance.id===todo.id
    );
    console.log(this.todos[index].isCompleted);
    this.todos[index].isCompleted=!this.todos[index].isCompleted;
    console.log(this.todos[index].isCompleted);
  }


  deleteTodo(todo: Todo) {
    const index = this.todos.findIndex(
      todoInstance => todoInstance.id === todo.id
    );
    this.todos.splice(index,1);
  }
}
