import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [SearchFormComponent],
})
export class SearchFormModule {}
