import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/ITodo';
import { StorageDBService } from 'src/app/services/storeDB.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent {
  @Input() todo!: Todo;
  @Output() onTodoDelete = new EventEmitter<void>();

  constructor(private storageDBService: StorageDBService, ) {}

  public delete() {
    if (this.todo.id) {
      this.storageDBService.deleteTodo(this.todo.id).subscribe(()=>{
        this.onTodoDelete.emit()
      });
    }
  }
}
