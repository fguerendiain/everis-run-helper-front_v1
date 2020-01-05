import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-grid-layout',
  templateUrl: './graph-grid-layout.component.html',
  styleUrls: ['./graph-grid-layout.component.css']
})
export class GraphGridLayoutComponent implements OnInit {

  @Input() backlogData;
  @Input() barColors

  lbl_BacklogPriorizado:string = 'BACKLOG PRIORIZADO';
  lbl_CreadasVsResueltas:string = 'CREADAS VS RESUELTAS';
  lbl_Priorizacion:string = 'PRIORIZACION';
  lbl_Reabiertos:string = 'REABIERTOS';
  lbl_Distribucion:string = 'DISTRIBUCION';
  lbl_Resumen:string = 'RESUMEN';

  
  constructor() { }

  ngOnInit() {
    
  }

}
