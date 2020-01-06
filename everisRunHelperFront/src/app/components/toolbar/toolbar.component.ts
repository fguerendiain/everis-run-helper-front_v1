import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  title: string = 'Everis Run Helper App';
  imgEverisLogoDir:string = 'assets/images/everisLogo.png';

  constructor() { }

  ngOnInit() {
  }

}
