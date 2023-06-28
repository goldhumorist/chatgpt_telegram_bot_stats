import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullTextSearchFormComponent } from './full-text-search-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FullTextSearchFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [FullTextSearchFormComponent],
})
export class FullTextSearchFormModule {}
