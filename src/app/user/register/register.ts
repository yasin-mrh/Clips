import { Component, inject, input, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Input } from '../../shared/input/input';
import { InputConfigs } from '../../shared/input/InputConfig';
import { Alert } from '../../shared/alert/alert';

@Component({
    selector: 'app-register',
    imports: [ReactiveFormsModule, Input, Alert, NgClass],
    templateUrl: './register.html',
    styleUrl: './register.css',
})
export class Register {
    fb = inject(FormBuilder);

    form = this.fb.nonNullable.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        age: [18, [Validators.required, Validators.min(10), Validators.max(150)]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],
        confirmPassword: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11),]]
    })

    inputConfig = new InputConfigs();

    alertVisibility = signal(false);
    alertMessage = signal('');
    alertColor = signal("blue");

    submitForm() {
        this.alertVisibility.set(true);
        this.alertMessage.set("Please Wait! The form is being submited...");
        this.alertColor.set("blue")
    }
}