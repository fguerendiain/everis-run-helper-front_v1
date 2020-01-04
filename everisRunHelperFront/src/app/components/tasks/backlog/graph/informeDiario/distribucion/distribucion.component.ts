import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.component.html',
  styleUrls: ['./distribucion.component.css']
})
export class DistribucionComponent implements OnInit {

  @Input() backlogData;

  constructor() { }

  ngOnInit() {
  }

}
