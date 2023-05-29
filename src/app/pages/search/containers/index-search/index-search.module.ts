import { FeaturesModule } from './../../../../features/features.module';
import { IndexSearchComponent } from './index-search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexSearchRouting } from './index-search.routing';

@NgModule({
  declarations: [IndexSearchComponent],
  imports: [CommonModule, IndexSearchRouting, FeaturesModule],
})
export class IndexSearchModule {}
