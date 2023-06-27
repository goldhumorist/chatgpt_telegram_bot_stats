import { ChartOptions, ChartType } from 'chart.js';

export interface IUsersActivityReqData {
  dateFrom?: string;
  dateTo?: string;
}

export enum TimeInterval {
  day = 'day',
  week = 'week',
  month = 'month',
}

export interface IStatisticReqData {
  interval: TimeInterval;
  dateFrom: string;
  dateTo: string;
}

export interface IUsageActivityReqData {
  interval: TimeInterval;
  dateFrom: string;
  dateTo: string;
}

export interface IUserActivityChartData {
  labels: string[];
  datasets: Array<{ label: string; data: number[] }>;
}

export interface IUsageActivityChartData {
  labels: string[];
  datasets: Array<{ label: string; data: number[] }>;
}

export interface IChartData {
  options: ChartOptions;
  type: ChartType;
  legend: boolean;
  isWide?: boolean;
}

export interface IChartCheckBoxOption {
  id: string;
  label: string;
  type: string;
  isVisibleByDefaut: boolean;
}
