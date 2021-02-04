import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {

  newTask: string = '';

  tasks: TodoItem[] = [
    { description: 'Arrumar a Cama', done: false },
    { description: 'Fazer o Trabalho pratico do bootcamp', done: false },
  ]; 

  addTask() {
    this.tasks.push({
      description: this.newTask,
      done: false
    })
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
}
