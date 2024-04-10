import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortDirection'
})
export class SortDirectionPipe implements PipeTransform {

  transform(columnName: string, sortColumn: string, sortDirection: "asc" | "desc"): string {
    if (columnName !== sortColumn) return "";

    return sortDirection === "asc" ? "⬆️" : "⬇️";
  }

}
