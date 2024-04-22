import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { IUserData } from '../interfaces/UserData';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private userListSubject = new BehaviorSubject<IUserData[]>([]);
  userList$ = this.userListSubject.asObservable();
  constructor(public apiService: ApiService) {}

  list(): void {
    this.apiService.get<IUserData[]>('users').subscribe((data) => {
      this.userListSubject.next(data);
    });
  }
}
