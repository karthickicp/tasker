import { Router } from '@angular/router';

import { computed, inject, Injectable, signal } from '@angular/core';
import { ListService } from '../services/api/list.service';
import { CookieService } from '../services/cookie.service';
import { environment } from 'src/environment/environment';
import { ILists } from '../models';

@Injectable({ providedIn: 'root' })
export class ListStore {
  listService = inject(ListService);
  cookieService = inject(CookieService);
  router = inject(Router);

  private listState = signal<{
    loading: boolean;
    lists: ILists[];
    error: string | null;
  }>({
    loading: false,
    lists: [],
    error: null,
  });

  loading = computed(() => this.listState().loading);
  lists = computed(() => this.listState().lists);
  error = computed(() => this.listState().error);

  async fetchLists() {
    this.listState.set({ loading: true, lists: [], error: null });
    await this.listService.getLists().subscribe({
      next: (response) => {
        if (response.data?.list) {
          this.listState.set({
            ...this.listState(),
            loading: false,
            lists: response.data.list || [],
          });
        }
        console.log(this.lists(), 'lists');
      },
      error: (err) => {
        if (err.status === 401) {
          console.log(err, 'error');
          this.listState.set({
            ...this.listState(),
            loading: false,
            error: err,
          });
          this.cookieService.delete(environment.cookieName);
          this.router.navigate(['/login'], { replaceUrl: true });
        }
        console.log(err, 'error');
      },
    });
  }
}
