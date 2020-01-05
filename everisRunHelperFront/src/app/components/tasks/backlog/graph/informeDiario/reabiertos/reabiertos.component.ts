import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-reabiertos',
  templateUrl: './reabiertos.component.html',
  styleUrls: ['./reabiertos.component.css']
})
export class ReabiertosComponent implements OnInit {

  @Input() backlogData;
  @Input() barColors; 

  public dataArrayReabiertas: Array<any> = [];
  public dataLabels: Array<any> = [];

  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartData: ChartDataSets[];



  public barChartOptions: ChartOptions = {
  //  responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ],
      yAxes: [
        {  
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }
      ] 
    },
    plugins: {
      datalabels: {
        color: 'black',
        display: function(context) {
          return context.dataset.data[context.dataIndex] > 0;
        }        
      }
    }
  };

  public barChartPlugins = [pluginDataLabels];

  constructor() {}

  
  ngOnInit() {
    let fechaAux: string;
    let creadasAux: string;
    let resueltasAux: string;
    let reaperturasAux: number;

    for(let i = (this.backlogData.datosUltimos6DiasArray).length - 1 ; i > 0; i--){
      fechaAux = this.formatDate(this.backlogData.datosUltimos6DiasArray[i].fecha);
      reaperturasAux = Math.trunc(this.backlogData.datosUltimos6DiasArray[i].reaperturas); 

      creadasAux = this.backlogData.datosUltimos6DiasArray[i].creadas; 
      resueltasAux = this.backlogData.datosUltimos6DiasArray[i].resueltas;

      if(creadasAux != '0' && resueltasAux != '0'){

        this.dataLabels.push(fechaAux);
        this.dataArrayReabiertas.push(reaperturasAux);
        }
    }

    this.barChartData = [ 
      { 
        data:this.dataArrayReabiertas,
        label:'reabiertos',
        backgroundColor: this.barColors.orangeBackgroundColor,
        borderColor: this.barColors.orangeBorderColor,
        hoverBackgroundColor: this.barColors.orangeHoverBackgroundColor,
        hoverBorderColor: this.barColors.orangeHoverBorderColor,
        barPercentage: 0.4,
        categoryPercentage: 0.9
      }
    ];
    this.barChartLabels = this.dataLabels;
  }


  formatDate(date:string):string{
    let dia: string = date.substr(6,2);
    let mes: string = date.substr(4,2);
    return dia+'/'+mes;
  }
}
