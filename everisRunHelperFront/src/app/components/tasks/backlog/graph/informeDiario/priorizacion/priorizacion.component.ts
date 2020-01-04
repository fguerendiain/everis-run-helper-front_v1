import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-priorizacion',
  templateUrl: './priorizacion.component.html',
  styleUrls: ['./priorizacion.component.css']
})
export class PriorizacionComponent implements OnInit {

  @Input() backlogData;

  constructor() { }

  ngOnInit() {
  }

}
