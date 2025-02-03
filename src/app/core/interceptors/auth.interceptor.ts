import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CookieService } from '../services/cookie.service';
import { environment } from 'src/environment/environment';
import { Router } from '@angular/router';

export const AuthInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const cookieService = inject(CookieService);
  const routerService = inject(Router);
  const authToken = cookieService.get(environment.cookieName);
  const isProtectedApi = req.url.includes('/api');

  if (authToken && isProtectedApi) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return next(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Handle authentication error (e.g., redirect to login)
          console.error('Unauthorized Access');
          cookieService.delete(environment.cookieName);
          routerService.navigate(['/login'], { replaceUrl: true });
        }
        return throwError(() => error);
      })
    );
  }
  return next(req);
};
