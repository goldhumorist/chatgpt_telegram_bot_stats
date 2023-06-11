import { IndexStatisticRouting } from './index-statistic.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexStatisticComponent } from './index-statistic.component';

@NgModule({
  declarations: [IndexStatisticComponent],
  imports: [CommonModule, IndexStatisticRouting],
})
export class IndexStatisticModule {}
