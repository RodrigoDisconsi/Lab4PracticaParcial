import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { TablaPeliculasComponent } from './componentes/tabla-peliculas/tabla-peliculas.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './componentes/peliculas-listado/peliculas-listado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    BusquedaComponent,
    TablaPeliculasComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculasListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
