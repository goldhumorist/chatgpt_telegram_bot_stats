import { FullTextRouting } from './full-text.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullTextComponent } from './full-text.component';

@NgModule({
  declarations: [FullTextComponent],
  imports: [CommonModule, FullTextRouting],
})
export class FullTextModule {}
