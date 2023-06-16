import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

export interface ILoadingSpinerOptions {
  spinerSize: string;
  spinerMode?: ProgressSpinnerMode;
}

export interface INavigationLinkOptions {
  title: string;
  navigateTo: string;
  isLeftArrow: boolean;
}

export interface IPaginationOptions {
  currentPage: number;
  total: number;
  limit: number;
}
