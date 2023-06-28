import { SharedModule } from '../../../shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageStatisticFormComponent } from './usage-statistic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsageStatisticFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [UsageStatisticFormComponent],
})
export class UsageStatisticFormModule {}
