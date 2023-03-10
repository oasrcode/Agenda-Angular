import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TodoCardComponent,
    ModalFormComponent
  ],
  imports: [
    CommonModule,
  ReactiveFormsModule,
  RouterModule
  ],
  exports:[TodoCardComponent,ModalFormComponent]
})
export class SharedComponentsModule { }
