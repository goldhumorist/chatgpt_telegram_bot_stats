import { UsageActivityRouting } from './usage-activity.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageActivityComponent } from './usage-activity.component';

@NgModule({
  declarations: [UsageActivityComponent],
  imports: [CommonModule, UsageActivityRouting],
})
export class UsageActivityModule {}
