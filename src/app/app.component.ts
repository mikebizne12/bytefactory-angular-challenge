import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { IUserData } from './interfaces/UserData';
import { finalize, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading: boolean = false;
  userList: IUserData[] = [];
  filterText: string = '';
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.fetchUserList();
  }

  fetchUserList(): void {
    this.usersService
      .list()
      .pipe(
        tap(() => (this.isLoading = true)),
        finalize(() => (this.isLoading = false)),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map((resp: any) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return resp.map((user: any) => {
            return {
              id: user.id,
              firstname: user.name.split(' ')[0],
              surname: user.name.split(' ')[1],
              username: user.username,
              email: user.email,
              address: user.address,
              phone: user.phone,
              website: user.website,
              company: user.company,
            };
          });
        }),
      )
      .subscribe({
        next: (resp: IUserData[]) => {
          this.userList = resp;
        },
        error: () => {
          console.log(
            'Hubo un error al intentar realizar el proceso. Inténtelo más tarde.',
          );
        },
      });
  }

  handleFilter(value: string): void {
    if (value.length > 2) {
      this.filterText = value;
    } else {
      this.filterText = '';
    }
  }
}
