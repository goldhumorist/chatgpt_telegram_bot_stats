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
}
