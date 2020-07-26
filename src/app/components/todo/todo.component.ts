import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../services/todo-service.service"
import { Todo } from '../../model/Todo';
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  trashIcon=faTrashAlt;

  todos:Todo[]=[]
  constructor(private todoService:TodoService) { }


  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todoList)=>{
      this.todos=todoList;
    });
  }
  toggleStatus(todo:Todo){
    this.todoService.toggleCompletionStatus(todo);
  }
  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo);
  }

}
