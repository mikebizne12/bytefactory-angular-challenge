import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, shareReplay } from 'rxjs';
import { IUserData } from '../interfaces/UserData';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(public apiService: ApiService) {}

  list(): Observable<IUserData[]> {
    return this.apiService.get<IUserData[]>('users').pipe(shareReplay(1));
  }
}
