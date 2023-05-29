import { StatisticComponent } from './statistic.component';
import { StatisticRoutingEnum } from './enums';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StatisticComponent,
  },
  {
    path: StatisticRoutingEnum.UsageActivity,
    component: StatisticComponent, // TODO change component
  },
  {
    path: StatisticRoutingEnum.UsersActivity,
    component: StatisticComponent, // TODO change component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticRouting {}
