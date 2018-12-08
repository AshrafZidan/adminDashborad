import { Component } from '@angular/core';
import { sessionData } from './session-data';
import { AuthentcationServices } from './Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  '<router-outlet *ngIf="!isVisible"> 
  </router-outlet>
  <div class="loading-wrap" *ngIf="isVisible">
  <div class="loading-box"></div>
  </div>
  `
})
export class AppComponent {
  title = 'app';
  isVisible = true;

  constructor(public AuthService:AuthentcationServices ,public router:Router){

      
   let userTkn = localStorage.getItem("userTkn");

    if (userTkn) {
      this.AuthService.validateSession().subscribe(data =>{
      
        
        sessionData.saveDataInLocalStorage(data);
        this.isVisible = false;

        
        
      }, 
      err => {

 
        this.router.navigate(['./login']);
        this.isVisible = false;
      }
      )

    }
    else{

      this.isVisible = false;
 
      
      this.router.navigate(['./login']);
    }


  
  }

}


