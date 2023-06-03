import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationLinkComponent } from './navigation-link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationLinkComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [NavigationLinkComponent],
})
export class NavigationLinkModule {}
