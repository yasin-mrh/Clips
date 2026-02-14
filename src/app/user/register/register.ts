import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Input } from '../../shared/input/input';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, Input],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),

    email: new FormControl('', [Validators.required, Validators.email]),

    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(11),
      Validators.maxLength(11)]),

    password: new FormControl('', [Validators.required,
      Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')]),

    confirmPassword: new FormControl('', [Validators.required]),
  });

  readonly passwordRules = `
        Password must contain:
        • At least 8 characters
        • At least one uppercase letter
        • At least one lowercase letter
        • At least one number`;

  submitForm() {
    console.log("Form is submitted!!!");
  };
}