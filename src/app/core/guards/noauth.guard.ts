import { inject, Injectable } from '@angular/core';
import {
  // ActivatedRouteSnapshot,
  CanActivate,
  Router,
  // RouterStateSnapshot,
} from '@angular/router';

import { CookieService } from '../services/cookie.service';
import { environment } from 'src/environment/environment';

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
  private cookieService = inject(CookieService);
  private router = inject(Router);

  canActivate(): // route: ActivatedRouteSnapshot,
  // state: RouterStateSnapshot
  boolean {
    const token = this.cookieService.get(environment.cookieName);
    if (token) {
      this.router.navigate(['/'], { replaceUrl: true });
      return false;
    } else {
      return true;
    }
  }
}
