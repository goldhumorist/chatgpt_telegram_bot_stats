import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinerComponent } from './loading-spiner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LoadingSpinerComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoadingSpinerComponent],
})
export class LoadingSpinerModule {}
