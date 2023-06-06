import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationLinkModule,
  LoadingSpinerModule,
  PageTittleModule,
  CardLinkChooserModule,
} from './components';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    PageTittleModule,
    NavigationLinkModule,
    CardLinkChooserModule,
    LoadingSpinerModule,
  ],
})
export class SharedModule {}
