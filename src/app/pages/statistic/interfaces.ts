import { ChartOptions, ChartType } from 'chart.js';

export interface IUsersActivityReqData {
  dateFrom?: Date;
  dateTo?: Date;
}

export enum TimeInterval {
  day = 'day',
  week = 'week',
  month = 'month',
}

export interface IStatisticReqData {
  interval: TimeInterval;
  dateFrom: Date;
  dateTo: Date;
}

export interface IUsageActivityReqData {
  interval: TimeInterval;
  dateFrom: Date;
  dateTo: Date;
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
