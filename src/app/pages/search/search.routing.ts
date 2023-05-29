import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchRoutingEnum } from './enums';
import { FullTextComponent } from './containers/full-text/full-text.component';
import { ByUsersComponent } from './containers/by-users/by-users.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,

    children: [
      {
        path: '',
        loadChildren: () =>
          import('./containers/index-search').then((m) => m.IndexSearchModule),
      },
      {
        path: SearchRoutingEnum.FullText,
        loadChildren: () =>
          import('./containers/full-text').then((m) => m.FullTextModule),
      },
      {
        path: SearchRoutingEnum.ByUsers,
        loadChildren: () =>
          import('./containers/by-users').then((m) => m.ByUsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRouting {}
