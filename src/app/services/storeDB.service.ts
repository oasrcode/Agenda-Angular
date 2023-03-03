import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { from, map, Observable, Subject } from 'rxjs';
import { Todo } from '../interfaces/ITodo';
@Injectable({
  providedIn: 'root',
})
export class StorageDBService {
  private db: Dexie = new Dexie('todoDB');
  private dbChangeSubject = new Subject<void>();
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
        this.dbChangeSubject.next();
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
        this.dbChangeSubject.next();
        return id as number;
      })
    );
  }

  public deleteTodo(id:number):Observable<void>{
    return from(this.db.table('todos').delete(id)).pipe(
      map(()=>{
        this.dbChangeSubject.next();
      })
    )
  }

  public putTodo(todo:Todo):Observable<number>{
    return from(this.db.table('todos').put(todo)).pipe(
      map((id)=>{
        this.dbChangeSubject.next()
        return id as number;
      })
    )
  }
}
