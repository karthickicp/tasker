import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'tskr-signup',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: '../auth.component.css',
})
export class SignupComponent {
  private formBuilder = inject(FormBuilder);
  signupForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(13)],
    ],
    confirmPassword: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(13)],
    ],
    terms: [false, [Validators.requiredTrue]],
  });

  onSubmit() {
    console.log(this.signupForm.value, 'form value');
  }
}
