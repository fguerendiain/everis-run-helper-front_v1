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

  title: string = 'Informe Backlog Diario'
  response:string = 'Pendiente';
  backlogData;
  taskId:string;
  taskIdMessage: string = 'Id de tarea: '; 
  showLoadingBar: boolean = true;
  loadingMessage: string = 'Generando Informe';


  ngOnInit() {
    this.getBacklog();
  }


  getBacklog(): void{
    this.erhaApi.getInformeBacklogDiario().subscribe(data => {
      this.taskId = data.id;
      this.taskIdMessage += this.taskId;
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