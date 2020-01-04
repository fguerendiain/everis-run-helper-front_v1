import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-backlog-priorizado',
  templateUrl: './backlog-priorizado.component.html',
  styleUrls: ['./backlog-priorizado.component.css']
})
export class BacklogPriorizadoComponent implements OnInit {

  @Input() backlogData;
  
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

  public chartColors: Array<any> = [
    {backgroundColor:['red','yellow','green']}];


  public barChartLabels: Label[] = ['Urgente', 'Alta', 'Baja'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

  public barChartData: ChartDataSets[];

  constructor() { 
  }

  
  ngOnInit() {
    this.barChartData = [
      { data: [this.backlogData.backlog.priorizacionDiaUrgente, 
          this.backlogData.backlog.priorizacionDiaAlta, 
          this.backlogData.backlog.priorizacionDiaBaja],},
      ];
      
      this.barChartData[0].data[0]
  }

}
