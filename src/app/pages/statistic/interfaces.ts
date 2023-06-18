export interface IUsersActivityReqData {
  dateFrom?: Date;
  dateTo?: Date;
}

export interface IUserActivityDataForBarChart {
  chartLabels: string[];
  chartDatasets: Array<{ label: string; data: number[] }>;
}
