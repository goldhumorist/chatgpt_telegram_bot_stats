import { StatisticRouting } from './statistic-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic.component';

@NgModule({
  declarations: [StatisticComponent],
  imports: [CommonModule, StatisticRouting],
})
export class StatisticModule {}
