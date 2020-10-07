import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPelicula } from '../../models/ipelicula';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.scss']
})
export class TablaPeliculasComponent implements OnInit {

  @Input() listaPeliculas:IPelicula[];
  @Output() peliculaSeleccionada = new EventEmitter<IPelicula>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.listaPeliculas);
  }

}
