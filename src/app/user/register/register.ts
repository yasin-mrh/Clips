import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Input } from '../../shared/input/input';
import { Alert } from '../../shared/alert/alert';
import { AuthService } from '../../services/auth/auth-service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, Input, Alert],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  PASSWORD_ERROR_MESSAGE = `Password must contain:
  • At least 8 characters
  • At least one uppercase letter
  • At least one lowercase letter
  • At least one number`;

  fb = inject(NonNullableFormBuilder);
  auth = inject(AuthService);

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    age: [18, [Validators.required, Validators.min(15), Validators.max(150)]],
    phoneNumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    password: ['', [Validators.required, Validators.pattern(this.PASSWORD_REGEX)]],
    confirmPassword: ['', [Validators.required]],
  })

  alertVisible = signal(false);
  alertMessage = signal('');
  alertColor = signal('blue');

  inSubmission = signal(false);
  
  async register() {
    this.alertVisible.set(true);
    this.alertMessage.set('Please wait... Your Account is being created.');
    this.alertColor.set('blue');
    
    this.inSubmission.set(true);

    try {
      await this.auth.createUser(this.registerForm.getRawValue())
    } catch(error) {
        this.alertMessage.set('Unexpecetd error happened!');
        this.alertColor.set('red');

        this.inSubmission.set(false);

        return;
      }
      this.alertColor.set('green');
      this.alertMessage.set('Your account is created successfully!');
  };
}