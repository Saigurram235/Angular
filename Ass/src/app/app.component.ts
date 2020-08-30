import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ass';  


  constructor(private router:Router){}

  Bootstrap_introduction(){
      this.router.navigate(['./Bootstrap/Bootstrap-introduction'])
  }
  Bootstrap_basic(){
    this.router.navigate(['./Bootstrap/Bootstrap-basic'])
  }
  Javascript(){
    this.router.navigate(['./Javascript'])
  }
  
}
