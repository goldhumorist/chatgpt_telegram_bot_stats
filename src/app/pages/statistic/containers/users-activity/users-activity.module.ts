import { UsersActivityRouting } from './users-activity.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersActivityComponent } from './users-activity.component';

@NgModule({
  declarations: [UsersActivityComponent],
  imports: [CommonModule, UsersActivityRouting],
})
export class UsersActivityModule {}
