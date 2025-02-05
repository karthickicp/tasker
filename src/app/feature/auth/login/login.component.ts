import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/api/auth.service';
import { CookieService } from '@app/core/services/cookie.service';
import { ILoginFields } from '@app/core/models';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'tsker-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: '../auth.component.css',
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private cookieService = inject(CookieService);
  private router = inject(Router);

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(13)],
    ],
  });

  onSubmit() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.signin(this.loginForm.value as ILoginFields).subscribe({
        next: (response) => {
          if (response?.data?.token) {
            this.cookieService.set(
              environment.cookieName,
              response.data.token,
              30
            );
            this.router.navigate(['/']);
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }
}
