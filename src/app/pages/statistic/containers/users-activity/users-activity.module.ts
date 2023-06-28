import { FeaturesModule } from './../../../../features/';
import { SharedModule } from './../../../../shared/shared.module';
import { UsersActivityRouting } from './users-activity.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersActivityComponent } from './users-activity.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersActivityComponent],
  imports: [
    CommonModule,
    UsersActivityRouting,
    SharedModule,
    NgChartsModule,
    FeaturesModule,
    FormsModule,
  ],
})
export class UsersActivityModule {}
