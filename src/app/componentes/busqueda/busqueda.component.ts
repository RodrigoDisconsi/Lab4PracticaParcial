import { Component, OnInit } from '@angular/core';
import { peliculas } from '../../peliculas/peliculas';
import { PeliculasService } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  constructor(private peService:PeliculasService) {
    peliculas.forEach(pelicula => {
      this.peService.setPelicula(pelicula).then(x =>{
        console.log('OK');
      })
      .catch(e =>{
        console.log('ERROR ->', e);
      });
    });

    // this.peService.getAllPeliculas().subscribe(x =>{
    //   console.log(x);
    // });

    // this.peService.getOnePelicula(peliculas[0].id).subscribe(x =>{
    //   console.log(x);
    // });

    // this.peService.updatePelicula('1').subscribe(x =>{
    //   console.log(x);
    // });

   }

  ngOnInit(): void {
    
  }

}
