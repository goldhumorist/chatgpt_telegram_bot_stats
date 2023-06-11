import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersActivityComponent } from './users-activity.component';

const routes: Routes = [
  {
    path: '',
    component: UsersActivityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersActivityRouting {}
