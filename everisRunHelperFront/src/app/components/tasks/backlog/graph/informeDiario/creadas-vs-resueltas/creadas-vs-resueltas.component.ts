import { Component, OnInit, Input } from '@angular/core';
import { ChartColor, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { stringify } from 'querystring';

@Component({
  selector: 'app-creadas-vs-resueltas',
  templateUrl: './creadas-vs-resueltas.component.html',
  styleUrls: ['./creadas-vs-resueltas.component.css']
})
export class CreadasVsResueltasComponent implements OnInit {

  @Input() backlogData;

//  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

//  public chartColors: ChartColor[] = [];
  public dataArray: Array<any> = [];
  public barChartData: ChartDataSets[] = [];

  public barChartOptions = {
    dataset:{
      categoryPercentage: 0.5,
      barPercentage: 1
    },
    scales:{
      xAxes: [{}],
      yAxes: [{}]},
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };




  constructor() { 
  }

  
  ngOnInit() {
    let fechaAux: string;
    let creadasAux: string;
    let resueltasAux: string;
    for(let i = 0; i < (this.backlogData.datosUltimos6DiasArray).length; i++){
      fechaAux = this.formatDate(this.backlogData.datosUltimos6DiasArray[i].fecha);
      creadasAux = this.backlogData.datosUltimos6DiasArray[i].creadas; 
      resueltasAux = this.backlogData.datosUltimos6DiasArray[i].resueltas;

      if(creadasAux != '0' && resueltasAux != '0'){
        this.dataArray.push(
          {
            label: [fechaAux],
            data: [creadasAux],
            backgroundColor: ['red'],
            borderColor:['red'],
            hoverBackgroundColor:['red'],
            hoverBorderColor:['red']
          },
          {
            label: [fechaAux],
            data: [resueltasAux],
            backgroundColor: ['green'],
            borderColor:['green'],
            hoverBackgroundColor:['green'],
            hoverBorderColor:['green']
          });
//          this.barChartLabels.push(fechaAux);
        }
    }
    this.barChartData = this.dataArray;

    console.log(this.barChartLabels);
    console.log(this.barChartData);

  }

  formatDate(date:string):string{
    let dia: string = date.substr(6,2);
    let mes: string = date.substr(4,2);
    return dia+'/'+mes;
  }

}
