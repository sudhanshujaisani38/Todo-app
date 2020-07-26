import { Component, OnInit } from '@angular/core';
import {TodoService} from "./../../services/todo-service.service"
import {v4 as uuidv4} from "uuid"
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  todoTitle:string

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  handleAdd(){
    this.todoService.addTodo({
      id:uuidv4(),
      title:this.todoTitle,
      date:new Date(),
      isCompleted:false
    });
    this.todoTitle=""
  }

}
