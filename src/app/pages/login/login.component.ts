import { NotificationComponent } from './../ui/components/notification/notification.component';

import { GlobalService } from './../../shared/services/global.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentcationServices } from '../../Auth.service';
import { sessionData } from '../../session-data';
import { RootComponent } from '../../shared/roots/root.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends RootComponent implements OnInit {
  isVisable = false;
  
  loginForm:FormGroup;
  constructor(public AuthService:AuthentcationServices , public router:Router , public _globalService: GlobalService , private fb: FormBuilder , public notfy:NotificationComponent) {
    super(_globalService);


    this.loginForm = this.fb.group({
      'userName':['', Validators.required],
      'password':['', Validators.required],

    })
     }

  ngOnInit() {
  }


  
  login(){
    
    this.isVisable = true
    // 0122028938
    this.AuthService.userLogin(this.loginForm.get('userName').value,this.loginForm.get('password').value).subscribe(data=> {
      

      sessionData.saveDataInLocalStorage(data);
      

       this.router.navigate(['./pages/Service/charter_accounting']);
       this.isVisable = false;
       
    } , err =>{

      this.notfy.alert2Error(JSON.parse(err._body).message);
      // this.alertMessage(
      //   {
      //     type: 'danger',
      //     title: 'Error !',
      //     value: JSON.parse(err._body).message
      //   }
      // );

      this.isVisable = false;
      
    }
  )

  } 

  notification(type) {

    
    this.alertMessage(
      {
        type: type,
        title: 'Look here!',
        value: 'This alert needs your attention.'
      }
    );
  }
}