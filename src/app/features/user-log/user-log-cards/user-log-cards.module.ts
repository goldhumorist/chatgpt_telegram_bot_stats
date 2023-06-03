import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLogCardsComponent } from './user-log-cards.component';
import { UserLogCardComponent } from './user-log-card/user-log-card.component';

@NgModule({
  declarations: [UserLogCardsComponent, UserLogCardComponent],
  imports: [CommonModule],
  exports: [UserLogCardsComponent],
})
export class UserLogCardsModule {}
