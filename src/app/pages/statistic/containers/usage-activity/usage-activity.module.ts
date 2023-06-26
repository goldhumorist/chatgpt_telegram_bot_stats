import { StatisticFormModule } from './../../../../features/statistic/statistic-form/statistic-form.module';
import { SharedModule } from './../../../../shared/shared.module';
import { UsageActivityRouting } from './usage-activity.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageActivityComponent } from './usage-activity.component';

@NgModule({
  declarations: [UsageActivityComponent],
  imports: [
    CommonModule,
    UsageActivityRouting,
    SharedModule,
    StatisticFormModule,
  ],
})
export class UsageActivityModule {}
