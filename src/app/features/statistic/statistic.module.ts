import { NgModule } from '@angular/core';
import { UsersStatisticFormModule } from './users-statistic-form';
import { UsageStatisticFormModule } from './usage-statistic-form';
import { StatisticFormModule } from './statistic-form';

@NgModule({
  exports: [
    StatisticFormModule,
    UsersStatisticFormModule,
    UsageStatisticFormModule,
  ],
})
export class StatisticModule {}
