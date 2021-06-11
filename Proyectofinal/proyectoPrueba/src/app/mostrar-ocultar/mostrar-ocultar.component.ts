import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-ocultar',
  templateUrl: './mostrar-ocultar.component.html',
  styleUrls: ['./mostrar-ocultar.component.css']
})
export class MostrarOcultarComponent{

  mostrar:boolean=false;
  mensaje:String="Hola mundo";
  mensaje_enlace:String="Mostrar";
  mostrarOcultar() {
    if(this.mostrar){
      this.mostrar=false;
      this.mensaje_enlace="Mostrar";
    }else{
      this.mostrar=true;
      this.mensaje_enlace="Ocultar";
    }

  }

}
