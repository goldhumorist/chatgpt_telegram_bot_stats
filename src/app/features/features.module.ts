import { NgModule } from '@angular/core';
import { SearchModule } from './search/search.module';
import { UserLogModule } from './user-log/user-log.module';

@NgModule({
  exports: [SearchModule, UserLogModule],
})
export class FeaturesModule {}
