import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    TodoDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent,TodoDetailComponent]

})
export class PagesModule { }
