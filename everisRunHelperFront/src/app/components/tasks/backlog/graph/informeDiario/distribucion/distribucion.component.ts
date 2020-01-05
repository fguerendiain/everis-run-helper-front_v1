import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.component.html',
  styleUrls: ['./distribucion.component.css']
})
export class DistribucionComponent implements OnInit {

  @Input() backlogData;
  @Input() barColors; 

  public dataArrayPrd: Array<any> = [];
  public dataArrayHml: Array<any> = [];
  public dataArrayCapa: Array<any> = [];
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
            stepSize: 2
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
    let moduleAux: string;
    let prodAux: number;
    let hmlAux: number;
    let capaAux: number;

    
    for(let i = 0 ; i < (this.backlogData.distribucionModulo).length ; i++){
      moduleAux = this.formatModule(this.backlogData.distribucionModulo[i].module);
      prodAux = this.backlogData.distribucionModulo[i].prd; 
      hmlAux = this.backlogData.distribucionModulo[i].hml;
      capaAux = this.backlogData.distribucionModulo[i].capa;

      this.dataLabels.push(moduleAux);
      this.dataArrayPrd.push(prodAux);
      this.dataArrayHml.push(hmlAux);
      this.dataArrayCapa.push(capaAux);
    }

    let sumaDeTicketsI = 0;
    let sumaDeTicketsJ = 0;

    for(let j = 0 ; j < this.dataLabels.length ; j++)
    {
        for(let i = j+1 ; i < this.dataLabels.length ; i++)
        {
          sumaDeTicketsI = this.dataArrayPrd[i] + this.dataArrayHml[i] + this.dataArrayCapa[i];
          sumaDeTicketsJ = this.dataArrayPrd[j] + this.dataArrayHml[j] + this.dataArrayCapa[j];

          if(sumaDeTicketsI > sumaDeTicketsJ)
            {
                let tempAuxPrd = this.dataArrayPrd[i];
                this.dataArrayPrd[i] = this.dataArrayPrd[j];
                this.dataArrayPrd[j] = tempAuxPrd;

                let tempAuxHml = this.dataArrayHml[i];
                this.dataArrayHml[i] = this.dataArrayHml[j];
                this.dataArrayHml[j] = tempAuxHml;

                let tempAuxCapa = this.dataArrayCapa[i];
                this.dataArrayCapa[i] = this.dataArrayCapa[j];
                this.dataArrayCapa[j] = tempAuxCapa;

                let tempAuxLabel = this.dataLabels[i];
                this.dataLabels[i] = this.dataLabels[j];
                this.dataLabels[j] = tempAuxLabel;
            }
        }
    }

    this.barChartData = [ 
      { 
        data:this.dataArrayCapa,
        label:'capa',
        backgroundColor: this.barColors.greenBackgroundColor,
        borderColor: this.barColors.greenBorderColor,
        hoverBackgroundColor: this.barColors.greenHoverBackgroundColor,
        hoverBorderColor: this.barColors.greenHoverBorderColor,
        stack: 'a',
        barPercentage: 0.4,
        categoryPercentage: 0.9
      },
      { 
        data:this.dataArrayHml,
        label:'hml',
        backgroundColor: this.barColors.yellowBackgroundColor,
        borderColor: this.barColors.yellowBorderColor,
        hoverBackgroundColor: this.barColors.yellowHoverBackgroundColor,
        hoverBorderColor: this.barColors.yellowHoverBorderColor,
        stack: 'a',
        barPercentage: 0.4,
        categoryPercentage: 0.9
      },
      { 
        data:this.dataArrayPrd,
        label:'prd',
        backgroundColor: this.barColors.blueBackgroundColor,
        borderColor: this.barColors.blueBorderColor,
        hoverBackgroundColor: this.barColors.blueHoverBackgroundColor,
        hoverBorderColor: this.barColors.blueHoverBorderColor,
        stack: 'a',
        barPercentage: 0.4,
        categoryPercentage: 0.9
      },

    ];
    this.barChartLabels = this.dataLabels;
  }

  formatModule(date:string):string{
    let modulo: string = date.substr(5);

    if (modulo == 'SISTEMAS EXTERNOS'){
      modulo = 'S.EXTERNOS';
    }
    if (modulo == 'WORKFLOW CERRADO'){
      modulo = 'WORKFLOW';
    }

    return modulo;
  }
}
