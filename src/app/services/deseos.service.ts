import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    const lista1 = new Lista('Recolectar Gemas del Infinito');
    const lista2 = new Lista('Heroes Desaparecen');

    this.listas.push(lista1, lista2);
  }

  crearLista( titulo: string ) {

    const nuevaLista = new Lista(titulo);
    this.listas.push( nuevaLista);
  }
}
