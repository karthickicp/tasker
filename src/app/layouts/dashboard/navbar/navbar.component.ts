import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from '@app/core/services/cookie.service';
import { ListStore } from '@app/core/store/list.store';
import { environment } from 'src/environment/environment';
import { AddOrEditListComponent } from '../../../feature/list/addoreditlist.component';

@Component({
  selector: 'navbar',
  imports: [CommonModule, AddOrEditListComponent],
  templateUrl: './navbar.component.html',
  providers: [ListStore],
})
export class NavbarComponent implements OnInit {
  private cookieService = inject(CookieService);
  private router = inject(Router);
  listStore = inject(ListStore);

  isModalOpen = signal<boolean>(false);

  onModalClose(): void {
    this.isModalOpen.set(false);
  }

  setModalOpen(): void {
    this.isModalOpen.set(true);
  }

  ngOnInit(): void {
    this.listStore.fetchLists();
  }

  logout(): void {
    this.cookieService.delete(environment.cookieName);
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
