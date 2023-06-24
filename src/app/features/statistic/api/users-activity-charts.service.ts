import {
  IChartData,
  IChartCheckBoxOption,
} from './../../../pages/statistic/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersActivityChartsService {
  private readonly availableCharts: Array<IChartData> = [
    {
      chartOptions: {
        responsive: true,
      },
      chartType: 'bar',
      chartLegend: true,
      isWideChart: true,
    },
    {
      chartOptions: {
        responsive: true,
      },
      chartType: 'doughnut',
      chartLegend: true,
      isWideChart: false,
    },
    {
      chartOptions: {
        responsive: true,
      },
      chartType: 'radar',
      chartLegend: true,
      isWideChart: false,
    },
    {
      chartOptions: {
        responsive: true,
      },
      chartType: 'line',
      chartLegend: true,
      isWideChart: true,
    },
  ];

  private chartVisibility: { [key: string]: boolean } = {
    bar: true,
    doughnut: false,
    radar: false,
    line: false,
  };

  private chartCheckBoxOptions: Array<IChartCheckBoxOption> = [
    {
      chartType: 'bar',
      id: 'bar',
      label: 'Bar-chart',
      isVisibleByDefaut: true,
    },
    {
      chartType: 'doughnut',
      id: 'doughnut',
      label: 'Doughnut-chart',
      isVisibleByDefaut: false,
    },
    {
      chartType: 'radar',
      id: 'radar',
      label: 'Radar-chart',
      isVisibleByDefaut: false,
    },
    {
      chartType: 'line',
      id: 'line',
      label: 'Line-chart',
      isVisibleByDefaut: false,
    },
  ];

  updateChartVisibility(chartType: string, isChecked: boolean) {
    this.chartVisibility[chartType] = isChecked;
  }

  getAvailableCharts() {
    return this.availableCharts.filter(
      chart => this.chartVisibility[chart.chartType]
    );
  }

  getChartCheckBoxOptions() {
    return this.chartCheckBoxOptions;
  }
}
