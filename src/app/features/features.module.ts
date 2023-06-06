import { NgModule } from '@angular/core';
import { SearchModule } from './search';
import { UserLogModule } from './user-log';

@NgModule({
  exports: [SearchModule, UserLogModule],
})
export class FeaturesModule {}
