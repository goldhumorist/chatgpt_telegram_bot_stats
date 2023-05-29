import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchRoutingEnum } from './enums';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: SearchRoutingEnum.FullText,
    component: SearchComponent, // TODO change component
  },
  {
    path: SearchRoutingEnum.ByUsers,
    component: SearchComponent, // TODO change component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRouting {}
