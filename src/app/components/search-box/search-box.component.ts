import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Output() handleFilter = new EventEmitter<string>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFilter(e: any) {
    this.handleFilter.emit(e.target.value);
  }
}
