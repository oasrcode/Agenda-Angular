import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/interfaces/ITodo';
import { StorageDBService } from 'src/app/services/storeDB.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements OnInit {
  form!: FormGroup;
  id!: number;

  constructor(
    private readonly fb: FormBuilder,
    private storageDBService: StorageDBService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', [Validators.required]],
      summ: ['', [Validators.required, Validators.maxLength(50)]],
    });

    this.activatedRoute.params.subscribe((params) => {
      this.id = Number.parseInt(params['id']);
      this.storageDBService
        .getTodo(Number.parseInt(params['id']))
        .subscribe((response) => {
          this.form.patchValue({
            title: response.title,
            date: response.date,
            summ: response.summ,
          });
        });
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const todo: Todo = {
      id: this.id,
      title: this.form.value.title,
      date: this.form.value.date,
      summ: this.form.value.summ,
    };

    this.storageDBService.putTodo(todo).subscribe(() => {});
  }
}
