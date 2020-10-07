import { Component, OnInit } from '@angular/core';
import { peliculas } from '../../peliculas/peliculas';
import { PeliculasService } from '../../servicios/peliculas.service';
import { IPelicula } from '../../models/ipelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  public peliculas:IPelicula[];
  public peliculaSeleccionada:IPelicula;

  constructor(private peService:PeliculasService) {
    // peliculas.forEach(pelicula => {
    //   this.peService.setPelicula(pelicula).then(x =>{
    //     console.log('OK');
    //   })
    //   .catch(e =>{
    //     console.log('ERROR ->', e);
    //   });
    // });

   }

  ngOnInit(): void {
    this.peService.getAllPeliculas().subscribe(x => {
      this.peliculas = x as IPelicula[];
      // console.log(this.peliculas);
    });
    
  }

  peliculaSelec(e){
    this.peliculaSeleccionada = e;
    console.log(e);
  }

}
