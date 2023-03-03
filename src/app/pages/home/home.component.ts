import { Component } from '@angular/core';
import { Todo } from 'src/app/interfaces/ITodo';
import { StorageDBService } from 'src/app/services/storeDB.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  modalIsActive = false;
  private todoList!:Todo[];

  constructor(private storageDBService: StorageDBService ){
    this.getAll()
  }


  getAll(){
    this.storageDBService.getAllTodos().subscribe((todos:Todo[])=>{
      console.log(todos)
      this.todoList =todos
    })
  }


  get getlist(){
    return this.todoList;
  }

  showModal() {
    this.modalIsActive = true;
  }

  closeModal() {
    this.modalIsActive = false;
  }
}
