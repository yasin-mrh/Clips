import { Component, signal } from '@angular/core';
import { email, form, required, FormField } from '@angular/forms/signals';

interface ILoginData {
  email: string,
  password: string
}

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  private loginModel = signal<ILoginData>({
    email: '',
    password: ''
  })

  loginForm = form(this.loginModel, (schemaPath) => {
    // Apply validators on 'Email' field
    required(schemaPath.email),
    email(schemaPath.email),

    // Apply validators on 'Password' field
    required(schemaPath.password)
  });

  login(e: Event) {
    console.log("Login opeartion completed!");
    e.preventDefault();
  }
}
