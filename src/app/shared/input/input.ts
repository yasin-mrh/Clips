import { Component, input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-input',
  imports: [NgxMaskDirective, ReactiveFormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
  providers: [provideNgxMask()]
})
export class Input {
  control = input.required<FormControl>();

  name = input("Field");
  type = input("text");
  placeholder = input(`Enter ${this.name()}`);
  fixedLength = input<number>(0);

  patternError = input<string>(`${this.name()} is invalid.`);

  mask = input<string>();

  hideLabel = input(false);
}