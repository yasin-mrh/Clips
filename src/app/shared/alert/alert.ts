import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  message = input('');
  color = input('blue');

  get getColor() {
    return `bg-${this.color().toLowerCase()}-700`;
  };
}