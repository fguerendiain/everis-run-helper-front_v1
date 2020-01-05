import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-priorizacion',
  templateUrl: './priorizacion.component.html',
  styleUrls: ['./priorizacion.component.css']
})
export class PriorizacionComponent implements OnInit {

  @Input() backlogData;
  @Input() barColors; 

  public dataArrayBaja: Array<any> = [];
  public dataArrayAlta: Array<any> = [];
  public dataArrayUrgente: Array<any> = [];
  public dataLabels: Array<any> = [];

  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
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
            stepSize: 20,
            max: 100
          }
        }
      ] 
    },
    legend: {
      position: 'bottom',
      labels: {
        fontSize: 10,
        usePointStyle: true
      }
    },    
    plugins: {
      datalabels: {
        formatter: function(value, context) {
          return '%' + value;
        },        
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
    let bajaAux: number;
    let altaAux: number;
    let urgenteAux: number;
    let creadasAux: string;
    let resueltasAux: string;
    let fechaAux: string;
    let total: number;
    let maxValue: number;

    for(let i = (this.backlogData.datosUltimos6DiasArray).length - 1 ; i > 0; i--){
      fechaAux = this.formatDate(this.backlogData.datosUltimos6DiasArray[i].fecha);
      creadasAux = this.backlogData.datosUltimos6DiasArray[i].creadas; 
      resueltasAux = this.backlogData.datosUltimos6DiasArray[i].resueltas;

      bajaAux = Math.trunc(this.backlogData.datosUltimos6DiasArray[i].bajaPriorizadoPorcentaje*100);
      altaAux = Math.trunc(this.backlogData.datosUltimos6DiasArray[i].altaPriorizadoPorcentaje*100);
      urgenteAux = Math.trunc(this.backlogData.datosUltimos6DiasArray[i].urgentePriorizadoPorcentaje*100);

      if(creadasAux != '0' && resueltasAux != '0'){
        total = bajaAux+altaAux+urgenteAux;
        if(total != 100){
          maxValue = Math.max(bajaAux,altaAux,urgenteAux);
          if(maxValue == bajaAux){
            bajaAux = bajaAux - 1;
          }
          if(maxValue == altaAux){
            altaAux = altaAux - 1;
          }
          if(maxValue == urgenteAux){
            urgenteAux = urgenteAux - 1;
          }
        }

        this.dataLabels.push(fechaAux);
        this.dataArrayBaja.push(bajaAux);
        this.dataArrayAlta.push(altaAux);
        this.dataArrayUrgente.push(urgenteAux);
      }
      if((this.dataLabels.length) == 6){break;};
    }

    this.barChartData = [ 
      { 
        data:this.dataArrayBaja,
        label:'baja',
        backgroundColor: this.barColors.greenBackgroundColor,
        borderColor: this.barColors.greenBorderColor,
        hoverBackgroundColor: this.barColors.greenHoverBackgroundColor,
        hoverBorderColor: this.barColors.greenHoverBorderColor,
        stack: 'a',
        barPercentage: 0.4,
        categoryPercentage: 0.9
      },
      { 
        data:this.dataArrayAlta,
        label:'alta',
        backgroundColor: this.barColors.yellowBackgroundColor,
        borderColor: this.barColors.yellowBorderColor,
        hoverBackgroundColor: this.barColors.yellowHoverBackgroundColor,
        hoverBorderColor: this.barColors.yellowHoverBorderColor,
        stack: 'a',
        barPercentage: 0.4,
        categoryPercentage: 0.9
      },
      { 
        data:this.dataArrayUrgente,
        label:'urgente',
        backgroundColor: this.barColors.redBackgroundColor,
        borderColor: this.barColors.redBorderColor,
        hoverBackgroundColor: this.barColors.redHoverBackgroundColor,
        hoverBorderColor: this.barColors.redHoverBorderColor,
        stack: 'a',
        barPercentage: 0.4,
        categoryPercentage: 0.9
      },

    ];
    this.barChartLabels = this.dataLabels;
  }

  formatDate(date:string):string{
    let dia: string = date.substr(6,2);
    let mes: string = date.substr(4,2);
    return dia+'/'+mes;
  }
}
