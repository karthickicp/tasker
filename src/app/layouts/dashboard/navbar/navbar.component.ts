import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '@app/core/services/cookie.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'tsker-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  private cookieService = inject(CookieService);
  private router = inject(Router);

  ngOnInit(): void {
    console.log('NavbarComponent initialized');
  }
  logout(): void {
    this.cookieService.delete(environment.cookieName);
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
