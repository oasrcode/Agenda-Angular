import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit{

  @Output() closeEvent = new EventEmitter<void>();

  form!:FormGroup;

  constructor(private readonly fb:FormBuilder){
   
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      title:["",[Validators.required,Validators.minLength(3)]],
      date:["",Validators.required],
      summ:["",[Validators.required,Validators.maxLength(50)]]
    })
    console.log("me inicio")
  }
  
 
  onSubmit():void {
   
    console.log(this.form.value);
    
    this.close();
  }

  

  close():void{
   this.closeEvent.emit()
  }

}
