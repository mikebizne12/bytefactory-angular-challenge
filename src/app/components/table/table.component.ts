import { Component, OnChanges, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, finalize, tap } from 'rxjs';
import { IUserData } from 'src/app/interfaces/UserData';
import { SearchServiceService } from 'src/app/services/search-service.service';
import { UsersService } from 'src/app/services/users.service';

type columns = 'firstname' | 'surname' | 'username' | 'email';

export const compare = (v1: string, v2: string) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  sortColumn: columns = 'firstname';
  sortDirection: 'asc' | 'desc' = 'asc';
  userList: IUserData[] = [];
  isLoading: boolean = false;
  filterText: string = '';

  constructor(
    private usersService: UsersService,
    private searchService: SearchServiceService,
  ) {
    this.searchService
      .getSearchSubject()
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        console.log(value);
        this.filterText = value;
      });
  }

  ngOnInit(): void {
    this.fetchUserList();
  }

  private sortData(): void {
    this.userList = [...this.userList].sort((a, b) => {
      const res = compare(a[this.sortColumn], b[this.sortColumn]);
      return this.sortDirection === 'asc' ? res : -res;
    });
  }

  sortTable(sortColumn: columns): void {
    if (this.sortColumn === sortColumn) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = sortColumn;
      this.sortDirection = 'asc';
    }

    this.sortData();
  }

  fetchUserList(): void {
    this.isLoading = true;
    this.usersService.list();

    this.usersService.userList$.subscribe({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next: (resp: any[]) => {
        this.userList = resp.map((user) => ({
          id: user.id,
          firstname: user.name.split(' ')[0],
          surname: user.name.split(' ')[1],
          username: user.username,
          email: user.email,
          address: user.address,
          phone: user.phone,
          website: user.website,
          company: user.company,
        }));
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        console.log(
          'Hubo un error al intentar realizar el proceso. Inténtelo más tarde.',
        );
      },
    });
  }
}
