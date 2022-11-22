import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  
  
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [] 
  };
  public doughnutChartType: ChartType = 'doughnut';
 
  constructor( private graficasService:GraficasService) {}
 
  ngOnInit(): void {
 
    // this.graficasService.getUsuariosRedesSociales()
    // .subscribe ( datos => {
    //   const labels =  Object.keys(datos);
    //   const values =  Object.values(datos);
 
    //   labels.forEach ( label => {
    //     this.doughnutChartLabels.push (label);
    //   })
 
    //   this.doughnutChartData.datasets.push ( {
    //     data                : values,
    //     backgroundColor     : ['#77D62B','#DEA83C', '#C73F3F', '#5F3CDE', '#39D4C8'],
    //     hoverBackgroundColor: ['#67B324','#B38730', '#BD3C3C' , '#5333BD', '#33BDB6']
    //   });
    // });

    this.graficasService.getUsuariosRRSS()
    .subscribe(({labels, datasets}) =>{
      this.doughnutChartData = { labels, datasets };
    })
  }
}

