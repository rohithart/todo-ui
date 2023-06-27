import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/service/todo.service';
import { TextModalComponent } from 'src/app/shared/components/text-modal/text-modal.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  showLoading = true;
  houseId = '';
  todoList: Todo[] = [];
  todoListInactive: Todo[] = [];

  constructor(
    public dialog: MatDialog,
    private readonly todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.showLoading = true;
    this.getAllToDos();
  }

  openAddNewTodo() {
    const dialogRef = this.dialog.open(TextModalComponent, {
      width: '40rem',
      data: {
        title: 'Add new Todo',
        placeholder: 'New Todo',
        value: ''
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && result.length > 0) {
        this.addNewTodo(result);
      }
    });
  }

  markAsActive(todo: Todo) {
    todo.is_active = true;
    this.todoService.update(todo).subscribe(() => {
      this.refresh();
    })
  }

  markAsInActive(todo: Todo) {
    todo.is_active = false;
    this.todoService.update(todo).subscribe(() => {
      this.refresh();
    })
  }

  deleteTodo(id: string) {
    this.todoService.delete(id).subscribe(() => {
      this.refresh();
    })
  }

  private addNewTodo(description: any) {
    const newTodo = {
      description,
    } as unknown as Todo;

    this.todoService.addNewTodo(newTodo).subscribe((data) => {
      this.todoList.push(data as Todo);
    })
  }

  private getAllToDos() {
    this.todoService.getAllToDos().subscribe((data: Todo[]) => {
      this.todoList = data.filter((todo: Todo) => todo.is_active === true);
      this.todoListInactive = data.filter((todo: Todo) => todo.is_active !== true);
      this.showLoading = false;
    });
  }
}
