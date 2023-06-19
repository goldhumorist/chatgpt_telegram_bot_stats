import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticFormComponent } from './statistic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StatisticFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [StatisticFormComponent],
})
export class StatisticFormModule {}
