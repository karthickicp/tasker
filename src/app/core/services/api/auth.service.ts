import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ILoginFields, ISignupFields } from '@app/shared/models';
import { environment } from 'src/environment/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/auth';

  signUp(data: ISignupFields): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  signin(data: ILoginFields): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, data);
  }
}
