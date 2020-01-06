import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-backlog-priorizado',
  templateUrl: './backlog-priorizado.component.html',
  styleUrls: ['./backlog-priorizado.component.css']
})
export class BacklogPriorizadoComponent implements OnInit {

  @Input() backlogData;
  @Input() barColors;

  public dataArrayBacklog: Array<any> = [];
  public dataLabels: Array<any> = [];

  public chartColorsBackgroundColor: Array<any> = [];
  public chartColorsBorderColor: Array<any> = [];
  public chartColorsHoverBackgroundColor: Array<any> = [];
  public chartColorsHoverBorderColor: Array<any> = [];

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
            zeroLineWidth: 1,
            zeroLineColor: 'grey',
          },
          ticks: {
            beginAtZero: true,
            stepSize: 5
          }
        }
      ]
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


  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartData: ChartDataSets[];

  constructor() {}


  ngOnInit() {
    this.dataArrayBacklog = [this.backlogData.backlog.priorizacionDiaUrgente,
          this.backlogData.backlog.priorizacionDiaAlta,
          this.backlogData.backlog.priorizacionDiaBaja];

    this.dataLabels = ['Urgente', 'Alta', 'Baja'];

    this.chartColorsBackgroundColor = [
      this.barColors.redBackgroundColor,
      this.barColors.yellowBackgroundColor,
      this.barColors.greenBackgroundColor];

    this.chartColorsBorderColor = [
      this.barColors.redBorderColor,
      this.barColors.yellowBorderColor,
      this.barColors.greenBorderColor];

    this.chartColorsHoverBackgroundColor = [
      this.barColors.redHoverBackgroundColor,
      this.barColors.yellowHoverBackgroundColor,
      this.barColors.greenHoverBackgroundColor];

    this.chartColorsHoverBorderColor = [
      this.barColors.redHoverBorderColor,
      this.barColors.yellowHoverBorderColor,
      this.barColors.greenHoverBorderColor];

    this.barChartData = [
      {
        data: this.dataArrayBacklog,
        backgroundColor: this.chartColorsBackgroundColor,
        borderColor: this.chartColorsBorderColor,
        hoverBackgroundColor: this.chartColorsHoverBackgroundColor,
        hoverBorderColor: this.chartColorsHoverBorderColor,
        barPercentage: 0.4,
        categoryPercentage: 0.9
      }
    ];
    this.barChartLabels = this.dataLabels;

  }

}
