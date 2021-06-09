import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// PARA PODER realizar las Rutas:
//import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  imports: [
    BrowserModule
    // AQUÍ TAMBIÉN
 //   RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
