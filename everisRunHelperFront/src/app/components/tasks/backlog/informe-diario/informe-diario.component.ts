import { Component, OnInit } from '@angular/core';
import { ErhaRestServices } from 'src/app/services/everis-run-helper-api-rest.service';
import { isNullOrUndefined } from 'util';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-informe-diario',
  templateUrl: './informe-diario.component.html',
  styleUrls: ['./informe-diario.component.css']
})
export class InformeDiarioComponent implements OnInit {

  constructor(private erhaApi: ErhaRestServices) { }

  title: string = 'Informe Backlog Diario'
  response:string = 'Pendiente';
  backlogData;
  taskId:string;
  taskIdMessage: string = 'Id de tarea: '; 
  showLoadingBar: boolean = true;
  loadingMessage: string = 'Generando Informe';
  formatedDate: string;

  tbl_priorizadosHeaders = {
    noc : 'NOCs',
    resumen : 'RESUMEN',
    modulo : 'MODULO',
    entorno : 'ENTORNO',
    estado : 'ESTADO',
    fecha : 'FECHA'
  }

  displayedColumns: string[] = ['noc','resumen','modulo','entorno','estado','fecha'];




  public barChartOptions: ChartOptions = {
    responsive: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(225,0,0,0.9)',
      borderColor: 'rgba(225,0,0,0.9)',
      pointBackgroundColor: 'rgba(225,0,0,0.9)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // first color
      backgroundColor: 'rgba(0,225,225,0.9)',
      borderColor: 'rgba(0,225,225,0.9)',
      pointBackgroundColor: 'rgba(0,225,225,0.9)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // first color
      backgroundColor: 'rgba(0,225,0,0.9)',
      borderColor: 'rgba(0,225,0,0.9)',
      pointBackgroundColor: 'rgba(0,225,0,0.9)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
  ];

  public barChartLabels: Label[] = ['Urgente', 'Alta', 'Baja'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
//  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[];
 






  ngOnInit() {
    this.getBacklog();
  }


  getBacklog(): void{
    this.erhaApi.getInformeBacklogDiario().subscribe(data => {
      this.taskId = data.id;
      this.taskIdMessage += this.taskId;
      this.updateTaskProcees(60,5);
    });
  }

  updateTaskProcees(iterations:number, seconds:number): void {
    setTimeout(()=>{
      this.erhaApi.getTaskStatus(this.taskId).subscribe(data =>{
        this.response = data.response;
        if(this.response == 'Pendiente'){
          if(--iterations) {
            this.updateTaskProcees(iterations,seconds)
          }
      }else{
        this.showLoadingBar = false;
        this.backlogData = data.response;
        this.barChartData = [
          { data: [this.backlogData.backlog.priorizacionDiaUrgente, 
            this.backlogData.backlog.priorizacionDiaAlta, 
            this.backlogData.backlog.priorizacionDiaBaja],},
        ];

      };
    });
    },seconds*1000);
  }

  formatPriorizadosUpdateDate(element:string): string{
    if(!isNullOrUndefined(element)){
      let anio: string = element.substr(0,4);
      let mes: string = element.substr(5,2);;
      let dia: string= element.substr(6,2);;
      return dia+'/'+mes+'/'+anio;
    }
  }













}
