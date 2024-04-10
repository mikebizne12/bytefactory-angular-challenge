import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = '';

  constructor(public http: HttpClient) {
    this.url = `${environment.api_url}`;
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(this.url + endpoint);
  }
}
