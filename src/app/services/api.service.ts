import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  #http = inject(HttpClient);

  // @TODO: [GET] https://jsonplaceholder.typicode.com/users
}
