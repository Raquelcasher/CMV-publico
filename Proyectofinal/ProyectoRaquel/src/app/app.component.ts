import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   now:Date=new Date();;
  constructor(){}
  ngOnInit(){
 
    setInterval(() => {
 
      this.now = new Date();
 
    }, 1000);
  /*FONDO*/


  }
      /*switchButton.addEventListener('click', () => {
        //toggle the HTML body the class 'dark'
        $("*, p").toggleClass("noche");
        //$("nav").toggleClass("paranav");
        switchButton.classList.toggle('active')//toggle the HTML button with the id='switch' with the class 'active'
      });*/
  
      

}
