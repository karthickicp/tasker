import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environment/environment';
import { loadingService } from '../loading.service';

@Injectable({ providedIn: 'root' })
export class ListService {
  private http = inject(HttpClient);
  private loading = inject(loadingService);
  private apiUrl = environment.apiAuthUrl + '/lists';

  getLists(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getListDetail(listId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${listId}`);
  }
}
