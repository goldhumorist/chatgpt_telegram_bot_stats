import { StatisticComponent } from './statistic.component';
import { StatisticRoutingEnum } from './enums';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StatisticComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./containers/').then(m => m.IndexStatisticModule),
      },
      {
        path: StatisticRoutingEnum.UsersActivity,
        loadChildren: () =>
          import('./containers/').then(m => m.UsersActivityModule),
      },
      {
        path: StatisticRoutingEnum.UsageActivity,
        loadChildren: () =>
          import('./containers/').then(m => m.UsageActivityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticRouting {}
