import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLinkChooserComponent } from './card-link-chooser.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardLinkChooserComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [CardLinkChooserComponent],
})
export class CardLinkChooserModule {}
