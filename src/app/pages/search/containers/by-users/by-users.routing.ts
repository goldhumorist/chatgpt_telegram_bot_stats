import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByUsersComponent } from './by-users.component';

const routes: Routes = [
  {
    path: '',
    component: ByUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByUsersRouting {}
