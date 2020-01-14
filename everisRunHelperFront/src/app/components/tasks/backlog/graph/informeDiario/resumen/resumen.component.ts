import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  @Input() backlogData;

  tblDataSet;
  tblTitles;
  myDate: string;
s

  constructor(private datePipe: DatePipe) {
    this.myDate = this.datePipe.transform(new Date(), 'dd/MM');
   }

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
      priorizados : 'Priorizados ' + this.myDate,
      repetitivos : 'Repetitivos',
      totalBandeja : 'Total Bandeja',
      totalPendientes : 'Total Pendientes'
    }
  }
}
