import { NgModule } from '@angular/core';
import { SearchModule } from './search';
import { StatisticModule } from './statistic';
import { UserLogModule } from './user-log';

@NgModule({
  exports: [SearchModule, StatisticModule, UserLogModule],
})
export class FeaturesModule {}
