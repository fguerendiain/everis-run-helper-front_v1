import { Component, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-listado-priorizados',
  templateUrl: './listado-priorizados.component.html',
  styleUrls: ['./listado-priorizados.component.css']
})
export class ListadoPriorizadosComponent implements OnInit {

  @Input() backlogData;

  tbl_priorizadosHeaders = {
    noc : 'NOCs',
    resumen : 'RESUMEN',
    modulo : 'MODULO',
    entorno : 'ENTORNO',
    estado : 'ESTADO',
    fecha : 'FECHA'
  }

  displayedColumns: string[] = ['noc','resumen','modulo','entorno','estado','fecha'];

  constructor() { }

  ngOnInit() {
  }

  formatPriorizadosUpdateDate(element:string): string{
    if(!isNullOrUndefined(element)){
      let anio: string = element.substr(0,4);
      let mes: string = element.substr(4,2);;
      let dia: string= element.substr(6,2);;
      return dia+'/'+mes+'/'+anio;
    }
  }
}
