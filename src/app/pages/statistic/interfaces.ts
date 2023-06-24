import { ChartOptions, ChartType } from 'chart.js';

export interface IUsersActivityReqData {
  dateFrom?: Date;
  dateTo?: Date;
}

export interface IUserActivityDataForBarChart {
  chartLabels: string[];
  chartDatasets: Array<{ label: string; data: number[] }>;
}

export interface IChartData {
  chartOptions: ChartOptions;
  chartType: ChartType;
  chartLegend: boolean;
  isWideChart?: boolean;
}

export interface IChartCheckBoxOption {
  id: string;
  label: string;
  chartType: string;
  isVisibleByDefaut: boolean;
}
