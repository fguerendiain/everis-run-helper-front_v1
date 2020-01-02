import { ItaskStatus } from './../../../entities/ITaskStatus';
import { Component, OnInit, Input } from '@angular/core';
import { ErhaRestServices } from './../../../services/everis-run-helper-api-rest.service';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.css']
})
export class TaskStatusComponent implements OnInit {
  title: string = 'Consultar estado de tarea por ID';
  btn_placeholder: string = 'ID de tarea';
  btn_label: string = 'Buscar';

  constructor(private erhaApi: ErhaRestServices) { }

  response: string = '';

  ngOnInit() {
  }

  onGetTaskStatus(id: string): void {
    this.erhaApi.getTaskStatus(id).subscribe(data => {
      this.response = this.formatResponse(data);
    });
  }

  formatResponse(data: ItaskStatus): string {
    return JSON.stringify(data);
  }


}
