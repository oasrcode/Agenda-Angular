import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { SharedComponentsModule } from '../components/shared-components.module';



@NgModule({
  declarations: [
    HomeComponent,
    TodoDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports:[HomeComponent,TodoDetailComponent]

})
export class PagesModule { }
