import { Component, OnInit, ViewChild } from '@angular/core';
 
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
 
// para este import, necesitamos instalar con npm:
// npm i chartjs-plugin-datalabels
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
 
// =================================================================
 
@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
})
export class BarrasComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
 
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];
 
  public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#E8644A'  },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#575BEB' },
      { data: [48, 33, 52, 17, 58, 43, 80], label: 'Series C' },
    ],
  };
 
  ngOnInit(): void {}
 
  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
 
  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
 
  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      // se generan números randómicos para reemplazar la primera columna de datos
      // se reemplazan los datos: 1, 4 y 6
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];
    this.barChartData.datasets[1].data = [
      // se generan números randómicos para reemplazar la primera columna de datos
      // se reemplazan los datos: 1, 4 y 6
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];
 
    this.chart?.update();
  }
}