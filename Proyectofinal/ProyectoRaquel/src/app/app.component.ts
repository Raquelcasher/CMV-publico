import { Component, HostListener, ElementRef} from '@angular/core';
import { ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now:Date=new Date();
  flag:boolean=true;
  switchButton= document.getElementById('switch');
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event:any){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(){
 
    setInterval(() => {
 
      this.now = new Date();
 
    }, 1000);
  }
  cambiarFlag(){ 
    this.flag=!this.flag;
  }

}
