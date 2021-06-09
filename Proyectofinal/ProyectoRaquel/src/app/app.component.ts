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
 
  }

}
