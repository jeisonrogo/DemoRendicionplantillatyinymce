import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public image: string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.image = 'https://www.accion.co/sites/all/themes/custom/accion_fiduciaria/logo.png'
  }

}
