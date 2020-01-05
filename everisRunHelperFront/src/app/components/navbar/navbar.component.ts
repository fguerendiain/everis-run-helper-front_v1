import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  taskSelected: String = null;
  lbl_agregarJirafromAsiJira: String = "Crear Jira desde Asi Jira";
  lbl_taskStatus: String = "Estado de Tarea";
  lbl_menuBacklog = {
    menu: 'Backlog',
    informeDiario:'Informe Diario',
    informeMensual:'Informe Mensual'
  };

  constructor(private router: Router) { }

  ngOnInit() {

  }


  onClickCrarJiraFromAsiJira(): void {
    this.router.navigate(['crateJiraFromAsiJira']);
  }

  onClickEstadoTask(): void {
    this.router.navigate(['taskStatus']);
  }

  onClickBacklogInformeDiario(): void {
    this.router.navigate(['backlogInformeDiario'])
  }
}
