import { FeaturesModule } from './../../../../features/features.module';
import { SharedModule } from './../../../../shared/shared.module';
import { ByUsersRouting } from './by-users.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByUsersComponent } from './by-users.component';

@NgModule({
  declarations: [ByUsersComponent],
  imports: [CommonModule, ByUsersRouting, SharedModule, FeaturesModule],
})
export class ByUsersModule {}
