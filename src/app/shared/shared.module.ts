import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationLinkModule,
  LoadingSpinerModule,
  PageTittleModule,
  CardLinkChooserModule,
  PaginationModule,
} from './components';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    PageTittleModule,
    NavigationLinkModule,
    CardLinkChooserModule,
    LoadingSpinerModule,
    PaginationModule,
  ],
})
export class SharedModule {}
