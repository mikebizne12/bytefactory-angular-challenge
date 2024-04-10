import { Pipe, PipeTransform } from '@angular/core';
import { IUserData } from '../interfaces/UserData';

@Pipe({
  name: 'filterText',
})
export class FilterTextPipe implements PipeTransform {
  transform(items: IUserData[], searchText: string): IUserData[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((it: IUserData) => {
      return (
        it.firstname.toLowerCase().includes(searchText) ||
        it.surname.toLowerCase().includes(searchText) ||
        it.username.toLowerCase().includes(searchText) ||
        it.email.toLowerCase().includes(searchText)
      );
    });
  }
}
