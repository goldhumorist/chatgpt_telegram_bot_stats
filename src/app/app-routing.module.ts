import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteEnum } from './core/enums/app-routes';

const routes: Routes = [
  {
    path: AppRouteEnum.Home,
    loadChildren: () => import('./pages/home').then((m) => m.HomeModule),
  },
  {
    path: AppRouteEnum.Search,
    loadChildren: () => import('./pages/search').then((m) => m.SearchModule),
  },
  {
    path: AppRouteEnum.Statistic,
    loadChildren: () =>
      import('./pages/statistic').then((m) => m.StatisticModule),
  },
  {
    path: '**',
    redirectTo: AppRouteEnum.Home,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
