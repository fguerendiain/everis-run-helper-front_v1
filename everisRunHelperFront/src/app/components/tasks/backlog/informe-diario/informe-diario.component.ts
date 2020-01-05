import { Component, OnInit } from '@angular/core';
import { ErhaRestServices } from 'src/app/services/everis-run-helper-api-rest.service';
import { ItaskStatus } from 'src/app/entities/ITaskStatus';

@Component({
  selector: 'app-informe-diario',
  templateUrl: './informe-diario.component.html',
  styleUrls: ['./informe-diario.component.css']
})
export class InformeDiarioComponent implements OnInit {

  constructor(private erhaApi: ErhaRestServices) { }

  taskId:string;
  taskIdMessage: string = 'Id de tarea: '; 
  loadingMessage: string = 'Generando Informe';
  showLoadingBar: boolean = true;


  backlogData;
  title: string = 'Informe Backlog Diario'
  response:string = 'Pendiente';
  priorizadosSubtitle = {
    part1 : 'NOCs - ',
    part2 : 'PRIORIZADOS ',
    part3 : 'por modulo'
  };


  barColors = {
    redBackgroundColor: 'rgba(255, 53, 83, 1)',
    redBborderColor: 'rgba(255, 53, 83, 1)',
    redHoverBackgroundColor: 'rgba(255, 53, 83, 1)',
    redHoverBorderColor: 'rgba(255, 53, 83, 1)',

    greenBackgroundColor: 'rgba(106, 255, 0, 1)',
    greenBorderColor: 'rgba(106, 255, 0, 1)',
    greenHoverBackgroundColor: 'rgba(106, 255, 0, 1)',
    greenHoverBorderColor: 'rgba(106, 255, 0, 1)',

    yellowBackgroundColor: 'rgba(249, 225, 0, 1)',
    yellowBorderColor: 'rgba(249, 225, 0, 1)',
    yellowHoverBackgroundColor: 'rgba(249, 225, 0, 1)',
    yellowHoverBorderColor: 'rgba(249, 225, 0, 1)',

    blueBackgroundColor: 'rgba(0, 148, 255, 1)',
    blueBorderColorv: 'rgba(0, 148, 255, 1)',
    blueHoverBackgroundColor: 'rgba(0, 148, 255, 1)',
    blueHoverBorderColor: 'rgba(0, 148, 255, 1)',

    orangeBackgroundColor: 'rgba(255, 137, 0, 1)',
    orangeBorderColor: 'rgba(255, 137, 0, 1)',
    orangeHoverBackgroundColor: 'rgba(255, 137, 0, 1)',
    orangeHoverBorderColor: 'rgba(255, 137, 0, 1)'
  };

  ngOnInit() {
    this.getBacklog();
  }


  getBacklog(): void{
    this.erhaApi.getInformeBacklogDiario().subscribe(data => {
      this.taskId = data.id;
      this.updateTaskProcees(60,5)
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
        this.backlogData = data.response;
        this.showLoadingBar = false;
      };
    });
    },seconds*1000);
  }

}