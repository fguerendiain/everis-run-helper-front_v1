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
  yesterday: Date;
  myDate: string;


  constructor(private datePipe: DatePipe) {
    this.yesterday = new Date();
    this.yesterday.setDate(this.yesterday.getDate() - 1);
    this.myDate = this.datePipe.transform(this.yesterday, 'dd/MM');
   }

  ngOnInit() {
    this.tblDataSet = {
      reaperturas : (this.backlogData.datosUltimosDiasArray[1]).reaperturas,
      priorizados : (this.backlogData.priorizadosPorRegistro).length,
      repetitivos : this.backlogData.backlog.repetitivos,
      totalBandeja: this.backlogData.backlog.totalPendientes,
      totalPendientes: this.backlogData.backlog.totalPendientes - this.backlogData.backlog.repetitivos,
      totalPendientesN3 :  this.backlogData.backlog.runn3
    };

    this.tblTitles = {
      estado : 'Estado',
      cantidad : 'Cantidad',
      reaperturas : 'Reaperturas',
      priorizados : 'Priorizados ' + this.myDate,
      repetitivos : 'Repetitivos',
      totalBandeja : 'Total Bandeja',
      totalPendientes : 'Total Pendientes',
      totalPendientesN3 : 'Pendiente N3'
    };
  }

  formatDate(date: string): string {
    const dia: string = date.substr(6, 2);
    const mes: string = date.substr(4, 2);
    return dia + '/' + mes;
  }


}
