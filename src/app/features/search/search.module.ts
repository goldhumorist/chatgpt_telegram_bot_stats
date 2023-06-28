import { ByUserSearchFormModule } from './by-user-search-form';
import { FullTextSearchFormModule } from './full-text-search-form';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [FullTextSearchFormModule, ByUserSearchFormModule],
})
export class SearchModule {}
