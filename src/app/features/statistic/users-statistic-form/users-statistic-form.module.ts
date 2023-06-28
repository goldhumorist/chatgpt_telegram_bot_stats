import { SharedModule } from '../../../shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersStatisticFormComponent } from './users-statistic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersStatisticFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [UsersStatisticFormComponent],
})
export class UsersStatisticFormModule {}
