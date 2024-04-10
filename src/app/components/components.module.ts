import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TableComponent } from './table/table.component';
import { SortDirectionPipe } from '../pipes/sort-direction.pipe';
import { FilterTextPipe } from '../pipes/filter-text.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchBoxComponent,
    TableComponent,
    SortDirectionPipe,
    FilterTextPipe,
  ],
  exports: [SearchBoxComponent, TableComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ComponentsModule {}
