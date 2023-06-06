import { FeaturesModule } from './../../../../features/features.module';
import { SharedModule } from './../../../../shared/';
import { ByUsersRouting } from './by-users.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByUsersComponent } from './by-users.component';
import { SearchPagesPaginationModule } from '../../components';

@NgModule({
  declarations: [ByUsersComponent],
  imports: [
    CommonModule,
    ByUsersRouting,
    SharedModule,
    FeaturesModule,
    SearchPagesPaginationModule,
  ],
})
export class ByUsersModule {}
