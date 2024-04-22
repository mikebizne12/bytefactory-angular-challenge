import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  private searchSubject = new Subject<string>();

  getSearchSubject() {
    return this.searchSubject;
  }

  updateSearchValue(value: string) {
    this.searchSubject.next(value);
  }
}
