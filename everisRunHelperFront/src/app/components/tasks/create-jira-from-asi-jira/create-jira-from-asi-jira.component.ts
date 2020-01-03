import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ErhaRestServices } from 'src/app/services/everis-run-helper-api-rest.service';

@Component({
  selector: 'app-create-jira-from-asi-jira',
  templateUrl: './create-jira-from-asi-jira.component.html',
  styleUrls: ['./create-jira-from-asi-jira.component.css']
})
export class CreateJiraFromAsiJiraComponent implements OnInit {

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
    this.erhaApi.createJiraFromAsiJira(project+'-'+ticket)
      .subscribe(data => {this.response = this.formatResponse(data)});
  }

  formatResponse(data): string {
    return JSON.stringify(data);
  }

}
