import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  modalIsActive = false;

  showModal() {
    this.modalIsActive = true;
  }

  closeModal() {
    this.modalIsActive = false;
  }
}
