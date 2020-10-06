import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  

  constructor(
    private afs: AngularFirestore
    )  { }

  public get(entidad:string){
    return this.afs.collection(entidad).get();
  }

  public insertData(entidad:string, obj:any){
    return this.afs.collection(entidad).add(obj);
  }

}
