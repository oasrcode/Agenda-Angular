import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { from, map, Observable } from 'rxjs';
import { Todo } from '../interfaces/ITodo';
@Injectable({
  providedIn: 'root',
})
export class StorageDBService {
  private db: Dexie = new Dexie('todoDB');

  constructor() {
    this.initDB();
  }

  private initDB() {
    this.db.version(1).stores({
      todos: '++id,title,date,summ',
    });

    if (!this.db.isOpen) {
      this.db.open();
    }
  }

  public getTodo(id: number): Observable<Todo> {
    return from(this.db.table('todos').get(id)).pipe(
      map((todo: Todo) => {
        return todo;
      })
    );
  }

  public getAllTodos(): Observable<Todo[]> {
    return from(this.db.table('todos').toArray()).pipe(
      map((todo: Todo[]) => {
        return todo;
      })
    );
  }

  public postTodo(todo: Todo): Observable<number> {
    return from(this.db.table('todos').add(todo)).pipe(
      map((id) => {
        return id as number;
      })
    );
  }

  public deleteTodo(id: number): Observable<void> {
    return from(this.db.table('todos').delete(id));
  }

  public putTodo(todo: Todo): Observable<number> {
    return from(this.db.table('todos').put(todo)).pipe(
      map((id) => {
        return id as number;
      })
    );
  }
}
