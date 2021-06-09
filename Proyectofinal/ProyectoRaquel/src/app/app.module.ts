import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//PARA PODER REALIZAR LAS RUTAS:
//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MostrarOcultarComponent } from './mostrar-ocultar/mostrar-ocultar.component';

@NgModule({

  declarations: [
    AppComponent,
    MostrarOcultarComponent,
  ],
  imports: [
    BrowserModule,
    // AQUÍ TAMBIÉN
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
