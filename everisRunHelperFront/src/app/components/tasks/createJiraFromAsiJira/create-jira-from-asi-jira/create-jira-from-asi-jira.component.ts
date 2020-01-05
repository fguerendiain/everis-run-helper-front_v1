import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ErhaRestServices } from 'src/app/services/everis-run-helper-api-rest.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-create-jira-from-asi-jira',
  templateUrl: './create-jira-from-asi-jira.component.html',
  styleUrls: ['./create-jira-from-asi-jira.component.css']
})
export class CreateJiraFromAsiJiraComponent implements OnInit {

  loadingMessage: string = "Creando Jira a partir de Asi Jira";
  showLoadingBar:boolean = false;
  taskId:string;
  taskIdMessage: string = 'Id de tarea: ';

  noDataMessage:string;
  showResponse:boolean = false;
  showResponseOk:boolean = true;

  asiJiraResponse;
  asiJiraInputData:string;
  formProjectsCmbBox = new FormControl();
  title: string = 'Crear Jira desde AsiJira'
  abailableProjects: string[] = [
    'APSSADETSJ',
    'APPSADE',
    'APPWORKFL2',
    'APPLOYSUX',
    'APPSADELEG',
    'APPTAD2'
  ];
  cmb_placeholder: string = 'Proyecto';
  inp_placeholder: string = 'Ticket';
  btn_label: string = 'Crear';
  
  response: string;

  constructor(private erhaApi: ErhaRestServices) { }

  ngOnInit() {

  }
 
 
  onCreateJiraFromAsiJira(project: string, ticket:string) {
    this.showResponse = false;
    this.showLoadingBar = true;
    this.showResponseOk = true;
    this.noDataMessage = 'No hay tareas a realizar para '+ project+'-'+ticket;
    this.erhaApi.createJiraFromAsiJira(project+'-'+ticket).subscribe(data => {
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
        this.asiJiraResponse = data.response[0];
        this.showLoadingBar = false;
        if(isNullOrUndefined(this.asiJiraResponse)){
          this.showResponseOk = false;
        }
        this.showResponse = true;
      };
    });
    },seconds*1000);
  }
 
  formatResponse(data): string {
    return JSON.stringify(data);
  }

}
