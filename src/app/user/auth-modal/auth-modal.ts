import { Component, inject, OnInit} from '@angular/core';
import { Modal } from '../../shared/modal/modal';
import { Register } from '../register/register';
import { Login } from '../login/login';
import { TabsContainer } from '../../shared/tabs-container/tabs-container';
import { Tab } from '../../shared/tab/tab';
import { ModalService } from '../../services/modal-service';

@Component({
  selector: 'app-auth-modal',
  imports: [Modal, TabsContainer, Tab, Register, Login],
  templateUrl: './auth-modal.html',
  styleUrl: './auth-modal.css',
})
export class AuthModal {}