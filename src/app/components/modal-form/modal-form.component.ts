import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageDBService } from 'src/app/services/storeDB.service';
import { Todo } from 'src/app/interfaces/ITodo';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<void>();
  @Output() onTodoAdded = new EventEmitter<Todo>();

  form!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private storageDBService: StorageDBService
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', Validators.required],
      summ: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  onSubmit(e: Event): void {
    e.preventDefault();

    const todo: Todo = {
      title: this.form.value.title,
      date: this.form.value.date,
      summ: this.form.value.summ,
    };

    this.storageDBService.postTodo(todo).subscribe((id) => {
      this.onTodoAdded.emit();
      this.close();
    });
  }

  close(): void {
    this.closeEvent.emit();
  }
}
