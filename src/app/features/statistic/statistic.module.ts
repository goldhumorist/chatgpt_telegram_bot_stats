import { NgModule } from '@angular/core';
import { UsersStatisticFormModule } from './users-statistic-form';
import { UsageStatisticFormModule } from './usage-statistic-form';

@NgModule({
  exports: [UsersStatisticFormModule, UsageStatisticFormModule],
})
export class StatisticModule {}
