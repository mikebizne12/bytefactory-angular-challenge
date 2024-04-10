import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TableComponent } from './table/table.component';
import { SortDirectionPipe } from '../pipes/sort-direction.pipe';

@NgModule({
  declarations: [SearchBoxComponent, TableComponent, SortDirectionPipe],
  exports: [SearchBoxComponent, TableComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
