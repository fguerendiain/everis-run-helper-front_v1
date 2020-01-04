import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reabiertos',
  templateUrl: './reabiertos.component.html',
  styleUrls: ['./reabiertos.component.css']
})
export class ReabiertosComponent implements OnInit {

  @Input() backlogData;

  constructor() { }

  ngOnInit() {
  }

}
