import { Component, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-process-response',
  templateUrl: './process-response.component.html',
  styleUrls: ['./process-response.component.css']
})
export class ProcessResponseComponent implements OnInit {
  @Input() asiJiraResponse
  @Input() asiJiraInputData

  asiJiraProcess;
  asiJiraProcessHeaders = {
    jiraID:'Jira ID',
    asiJiraID:'Asi Jira ID',
    create:'Creado',
    modifStatus:'Estado Modificado',
    modifComment:'Comentarios Agregados',
    modifComponent:'Componente Modificado'
  }


  constructor() { }

  ngOnInit() {
    if(!isNullOrUndefined(this.asiJiraResponse)){

      let createData = 'X';
      let modifStatusData = 'X';
      let modifCommentData = 'X';
      let modifComponentData = 'X';
    
      if(this.isCreated(this.asiJiraResponse)){createData = 'SI';}
      if(this.isModified(this.asiJiraResponse,'modifStatus')){modifStatusData = (<string>this.asiJiraResponse.modifStatus).substr(19);}
      if(this.isModified(this.asiJiraResponse,'modifComment')){modifCommentData = 'SI'}
      if(this.isModified(this.asiJiraResponse,'modifComponent')){modifComponentData = (<string>this.asiJiraResponse.modifComponent).substr(23);}

      this.asiJiraProcess = {
        jiraID: this.asiJiraResponse.jiraID,
        asiJiraID:this.asiJiraResponse.asiJiraID,
        create:createData,
        modifStatus:modifStatusData,
        modifComment:modifCommentData,
        modifComponent:modifComponentData
      }
    }


  }


  isCreated(process):boolean{
    return process.hasOwnProperty('create');
  }

  isModified(process, type):boolean {
    return process.hasOwnProperty(type);
  }

/*
  //se crea
  [
    {
      "jiraID": "BISADE-72732",
      "asiJiraID":"APPSADE-2011",
      "create":"Se crea Jira BISADE-72732 a partir de APPSADE-2011"}
    ]

  // --ya existe y se modifica
  [
    {"jiraID":"BISADE-72732",
    "asiJiraID":"APPSADE-2011",
    "modifStatus":"Cambio de estado a Cerrada",
    "modifComment":"Se actualizaron comentarios",
    "modifComponent":"Cambio de componente a TAD"
  }]

  // --ya existe y no se modifica 
  []

  // --no existe
  []
*/




}
