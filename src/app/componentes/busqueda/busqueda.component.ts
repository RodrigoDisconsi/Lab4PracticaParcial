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
    // peliculas.forEach(pelicula => {
    //   this.peService.insertData('prueba', pelicula).then(x =>{
    //     console.log("Ok");
    //   })
    //   .catch(e =>{
    //     console.log("Error");
    //   });
    // });
   }

  ngOnInit(): void {
    
  }

}
