import { NgModule } from '@angular/core';
import { CardLinkChooserComponent } from './card-link-chooser/card-link-chooser.component';
import { CardLinkChooserModule } from './card-link-chooser/card-link-chooser.module';

@NgModule({
  exports: [CardLinkChooserModule],
})
export class FeaturesModule {}
