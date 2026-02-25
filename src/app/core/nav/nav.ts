import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal/modal-service';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  modal = inject(ModalService);

  openModal(e: Event){
    this.modal.toggle('auth');
    e.preventDefault();
  };
}