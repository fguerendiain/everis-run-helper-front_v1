import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-creadas-vs-resueltas',
  templateUrl: './creadas-vs-resueltas.component.html',
  styleUrls: ['./creadas-vs-resueltas.component.css']
})
export class CreadasVsResueltasComponent implements OnInit {

  @Input() backlogData;
  @Input() barColors;

  public dataArrayCreadas: Array<any> = [];
  public dataArrayResueltas: Array<any> = [];
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
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            lineWidth: 0,
            zeroLineWidth: 1,
            zeroLineColor: 'grey'
          },
          ticks: {
            beginAtZero: true,
            stepSize: 5
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
        display: (context) => {
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
    for (let i = (this.backlogData.datosUltimosDiasArray).length - 1 ; i > 0; i--) {
      fechaAux = this.formatDate(this.backlogData.datosUltimosDiasArray[i].fecha);
      creadasAux = this.backlogData.datosUltimosDiasArray[i].creadas;
      resueltasAux = this.backlogData.datosUltimosDiasArray[i].resueltas;

      if (creadasAux !== '0' && resueltasAux !== '0') {

        this.dataLabels.push(fechaAux);
        this.dataArrayCreadas.push(creadasAux);
        this.dataArrayResueltas.push(resueltasAux);
      }

      if ((this.dataLabels.length) > 6) {
        this.dataLabels.shift();
        this.dataArrayCreadas.shift();
        this.dataArrayResueltas.shift();
      }
    }

    this.barChartData = [
      {
        data: this.dataArrayCreadas,
        label: 'Creadas',
        backgroundColor: this.barColors.redBackgroundColor,
        borderColor: this.barColors.redBorderColor,
        hoverBackgroundColor: this.barColors.redHoverBackgroundColor,
        hoverBorderColor: this.barColors.redHoverBorderColor,
        barPercentage: 0.4,
        categoryPercentage: 0.7
      },
      {
        data: this.dataArrayResueltas,
        label: 'Resueltas',
        backgroundColor: this.barColors.greenBackgroundColor,
        borderColor: this.barColors.greenBorderColor,
        hoverBackgroundColor: this.barColors.greenHoverBackgroundColor,
        hoverBorderColor: this.barColors.greenHoverBorderColor,
        barPercentage: 0.4,
        categoryPercentage: 0.7
      }
    ];
    this.barChartLabels = this.dataLabels;

  }

  formatDate(date: string): string {
    const dia: string = date.substr(6, 2);
    const mes: string = date.substr(4, 2);
    return dia + '/' + mes;
  }

}
