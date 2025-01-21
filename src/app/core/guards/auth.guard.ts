import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { CookieService } from '../services/cookie.service';
import { environment } from 'src/environment/environment';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private cookieService = inject(CookieService);
  private router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = this.cookieService.get(environment.cookieName);
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login'], { replaceUrl: true });
      return false;
    }
  }
}
