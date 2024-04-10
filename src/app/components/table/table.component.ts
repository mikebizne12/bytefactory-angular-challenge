import { Component, Input, OnChanges } from '@angular/core';
import { IUserData } from 'src/app/interfaces/UserData';

type columns = 'firstname' | 'surname' | 'username' | 'email';

export const compare = (v1: string, v2: string) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() sortColumn: columns = 'firstname';
  @Input() sortDirection: 'asc' | 'desc' = 'asc';
  @Input() data: IUserData[] = [];
  @Input() isLoading: boolean = false;
  @Input() filterText: string = '';

  ngOnChanges(): void {
    this.sortData();
  }

  private sortData(): void {
    this.data = [...this.data].sort((a, b) => {
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
}
