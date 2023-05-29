import { ByUsersRouting } from './by-users.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByUsersComponent } from './by-users.component';

@NgModule({
  declarations: [ByUsersComponent],
  imports: [CommonModule, ByUsersRouting],
})
export class ByUsersModule {}
