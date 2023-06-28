import { ByUserSearchFormModule } from './by-user-search-form';
import { FullTextSearchFormModule } from './full-text-search-form';
import { NgModule } from '@angular/core';
import { SearchFormModule } from './search-form';

@NgModule({
  exports: [SearchFormModule, FullTextSearchFormModule, ByUserSearchFormModule],
})
export class SearchModule {}
