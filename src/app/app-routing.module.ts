import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';

const routes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"todo-detail/:id",component:TodoDetailComponent},
  {path:"",pathMatch:"full",redirectTo:"home"},
  {path:"**",pathMatch:"full",redirectTo:"home"}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
