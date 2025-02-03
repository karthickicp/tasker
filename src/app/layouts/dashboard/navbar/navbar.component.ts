import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILists } from '@app/core/models';

import { ListService } from '@app/core/services/api/list.service';
import { CookieService } from '@app/core/services/cookie.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  private cookieService = inject(CookieService);
  private router = inject(Router);
  private listService = inject(ListService);

  lists: ILists[] = [];

  ngOnInit(): void {
    this.listService.getLists().subscribe({
      next: (response) => {
        if (response.data?.list) {
          this.lists = response.data.list;
        }
        console.log(response, 'response');
      },
      error: (err) => {
        if (err.status === 401) {
          this.cookieService.delete(environment.cookieName);
          this.router.navigate(['/login'], { replaceUrl: true });
        }
        console.log(err, 'error');
      },
    });
  }

  logout(): void {
    this.cookieService.delete(environment.cookieName);
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
