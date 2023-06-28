import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationLinkModule,
  LoadingSpinerModule,
  PageTittleModule,
  CardLinkChooserModule,
  PaginationModule,
  BaseFormModule,
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
    BaseFormModule,
  ],
})
export class SharedModule {}
