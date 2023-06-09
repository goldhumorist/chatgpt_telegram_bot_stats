import { PaginationComponent } from './pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule],
  exports: [PaginationComponent],
})
export class PaginationModule {}
