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
      options: {
        responsive: true,
      },
      type: 'bar',
      legend: true,
      isWide: true,
    },
    {
      options: {
        responsive: true,
      },
      type: 'doughnut',
      legend: true,
      isWide: false,
    },
    {
      options: {
        responsive: true,
      },
      type: 'radar',
      legend: true,
      isWide: false,
    },
    {
      options: {
        responsive: true,
      },
      type: 'line',
      legend: true,
      isWide: true,
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
      type: 'bar',
      id: 'bar',
      label: 'Bar-chart',
      isVisibleByDefaut: true,
    },
    {
      type: 'doughnut',
      id: 'doughnut',
      label: 'Doughnut-chart',
      isVisibleByDefaut: false,
    },
    {
      type: 'radar',
      id: 'radar',
      label: 'Radar-chart',
      isVisibleByDefaut: false,
    },
    {
      type: 'line',
      id: 'line',
      label: 'Line-chart',
      isVisibleByDefaut: false,
    },
  ];

  updateChartVisibility(type: string, isChecked: boolean) {
    this.chartVisibility[type] = isChecked;
  }

  getAvailableCharts() {
    return this.availableCharts.filter(
      chart => this.chartVisibility[chart.type]
    );
  }

  getChartCheckBoxOptions() {
    return this.chartCheckBoxOptions;
  }
}
