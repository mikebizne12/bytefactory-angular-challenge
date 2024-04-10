import { Component, Input, OnChanges } from '@angular/core';

export interface ITableData extends Pick<any, 'id' | 'username' | 'email'> {
  firstname: string;
  surname: string;
}

type columns = 'firstname' | 'surname' | 'username' | 'email';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() sortColumn: columns = 'firstname';
  @Input() sortDirection: 'asc' | 'desc' = 'asc';

  data: ITableData[] = [];

  ngOnChanges(): void {
    this.sortData();
  }

  private sortData(): void {
    // @TODO
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
