import { PageTittleModule } from './components/page-tittle/page-tittle.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationLinkModule } from './components/navigation-link/navigation-link.module';
import { CardLinkChooserModule } from './components/card-link-chooser/card-link-chooser.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [PageTittleModule, NavigationLinkModule, CardLinkChooserModule],
})
export class SharedModule {}
