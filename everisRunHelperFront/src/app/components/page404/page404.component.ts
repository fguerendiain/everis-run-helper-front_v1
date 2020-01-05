import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  message: string = 'La pagina solicitada no existe';
  img404NotFound:string = 'assets/images/travolta404.gif';
  imgEverisFondoDir:string = 'assets/images/everisFondo.jpg';

  constructor() { }

  ngOnInit() {
  }

}
