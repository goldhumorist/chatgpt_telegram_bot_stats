import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from './../../../../shared/shared.module';
import { FeaturesModule } from './../../../../features/features.module';
import { FullTextRouting } from './full-text.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullTextComponent } from './full-text.component';
import { SearchPagesPaginationModule } from '../../components/search-pages-pagination/search-pages-pagination.module';

@NgModule({
  declarations: [FullTextComponent],
  imports: [
    CommonModule,
    FullTextRouting,
    FeaturesModule,
    SharedModule,
    MatProgressSpinnerModule,
    SearchPagesPaginationModule,
  ],
})
export class FullTextModule {}
