import { Component } from '@angular/core';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  constructor(private searchService: SearchServiceService) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFilter(e: any) {
    this.searchService.updateSearchValue(e.target.value);
  }
}
