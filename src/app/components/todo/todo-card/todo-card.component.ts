import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent {
  @Input() todo!: Todo;
  @Output() checkEmitter = new EventEmitter<string>();
  @Output() uncheckEmitter = new EventEmitter<string>();
  @Output() deleteEmitter = new EventEmitter<string>();

  constructor() { }

  checkedTodo(id: string, active: boolean) {
    if(active) {
      this.uncheckEmitter.emit(id);
    } else {
      this.checkEmitter.emit(id);
    }
  }

  deleteTodo(id: string) {
    this.deleteEmitter.emit(id);
  }
}
