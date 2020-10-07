import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IPelicula } from '../models/ipelicula';
import { map } from 'rxjs/operators';
import { peliculas } from '../peliculas/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  
  private peliculasColeccion: AngularFirestoreCollection<IPelicula>;
  // private peliculas: Observable<IPelicula[]>;
  // private peliculaDoc: AngularFirestoreDocument<IPelicula>;
  // private pelicula: Observable<IPelicula>;

  constructor(private afs: AngularFirestore){
      this.peliculasColeccion = this.afs.collection<IPelicula>('peliculas');
  }

  getAllPeliculas(){
    return this.peliculasColeccion.valueChanges();
  }

  getOnePelicula(idPelicula:string){
    return this.afs.collection('peliculas', ref => ref.where('id', '==', idPelicula)).snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as IPelicula;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
    // return this.afs.collection('peliculas', ref => ref.where('id', '==', idPelicula)).get().subscribe(x =>{
    //   x.forEach(doc =>{
    //     console.log(doc.data());
    //   })
    // });;
  }


  setPelicula(pelicula:IPelicula){
    // return this.peliculasColeccion.add(pelicula);
    return this.peliculasColeccion.doc(pelicula.id).set(pelicula, {merge:true});
  }
}
