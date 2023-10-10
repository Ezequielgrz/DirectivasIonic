import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-directorios',
  templateUrl: './prueba-directorios.page.html',
  styleUrls: ['./prueba-directorios.page.scss'],
})
export class PruebaDirectoriosPage {
  mostrarMensaje: boolean = true;
  listaDeElementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  condicion: string = 'caso1';

  constructor() {}
}