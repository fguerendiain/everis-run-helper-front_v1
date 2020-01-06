import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  @Input() backlogData;

  tblDataSet;
  tblTitles;


  constructor() { }

  ngOnInit() {
    this.tblDataSet = {
      reaperturas : this.backlogData.backlog.reaperturas,
      priorizados : (this.backlogData.priorizadosPorRegistro).length,
      repetitivos : this.backlogData.backlog.repetitivos,
      totalBandeja: this.backlogData.backlog.totalPendientes,
      totalPendientes: this.backlogData.backlog.totalPendientes - this.backlogData.backlog.repetitivos
    }

    this.tblTitles = {
      estado : 'Estado',
      cantidad : 'Cantidad',
      reaperturas : 'Reaperturas',
      priorizados : 'Priorizados ' + this.formatPriorizadosUpdateDate(),
      repetitivos : 'Repetitivos',
      totalBandeja : 'Total Bandeja',
      totalPendientes : 'Total Pendientes'
    }
  }

  formatPriorizadosUpdateDate(): string {
    const format = 'MM/dd';
    const myDate = new Date().toLocaleString();
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    return formattedDate;
  }
}
