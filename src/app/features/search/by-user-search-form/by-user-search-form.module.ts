import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByUserSearchFormComponent } from './by-user-search-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ByUserSearchFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [ByUserSearchFormComponent],
})
export class ByUserSearchFormModule {}
