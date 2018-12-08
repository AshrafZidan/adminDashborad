import { settings } from './settings';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers, ResponseContentType } from '@angular/http';
import 'rxjs/Rx';

import { Observable } from "rxjs/Observable";
 



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// General Classes /////////////////////////////////////////////
 


/*
  Generated class for the AuthentcationServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthentcationServices {


  constructor(public http: Http) {
  }


  userLogin(userName: string, password: string): Observable<any> {
    let data = {
        "countryPhoneCode": "+2",
        "userName":userName,
        "password":password,
        "deviceType": "desktop",
        "browserType": "chrome",
        "osType": "windows",
        "timeZone": "GMT+0200",
        "language": "Arabic",
        "location":"Egypt",
        "isMobileApp": false,
        "appName" : "xx",
        "notificationId":"cccc"
    };
    return this.http.post(settings.DOMAIN_URL + 'userservices/signin', data, { headers: settings.getHeaderJson() }).map( (res:Response) => {
      return  res.json()
    } )  
    
  }
  /////////////////////////////////////////////////////////////////////////////////////////
 
  /////////////////////////////////////////////////////////////////////////////

//   forgetPassword(email: string): Observable<any> {
//     let body = new FormData();
//     body.append('email', email);
//     return this.http.post(settings.DOMAIN_URL + 'forget-password', body,
//       { headers: settings.getHeaderJsonFormData() })
//       .map(res => {
//         return res.json();
//       }).timeout(40000);
//   }


  changePassword(currentPass: string, newPass: string): Observable<any> {
    let body = new FormData();
    body.append('old_password', currentPass);
    body.append('new_password', newPass);
    return this.http.post(settings.DOMAIN_URL + 'change-password', body,
      { headers: settings.getHeaderJsonGetMethod() })
      .map(res => {
        return res.json();
      }).timeout(40000);
  }


  userVerifyCode(verifyCode: string, userName: string, password: string, userId: number, browserType: string, osType: string, language: string): Observable<any> {
    let data = {
      "userName": userName,
      "password": password,
      "deviceType": "mobile",
      "browserType": browserType,
      "osType": osType,
      "timeZone": "GMT+0200",
      "language": language,
      "location": "Egypt",
      "notificationId": "none",
      "isMobileApp": true
    };
    return this.http.put(settings.DOMAIN_URL + '/userservices/mobilevalidate?userid=' + userId + '&verifycode=' + verifyCode, data, { headers: settings.getHeaderJson() })
      .map(res => {
        return res.json();
      }).timeout(40000);
  }
  ResendCode(userId: number): Observable<any> {
    return this.http.get(settings.DOMAIN_URL + '/userservices/resendcode?userid=' + userId)
      .map(res => {
        return res.json();
      }).timeout(40000);
  }
  requestForgetPassword(userPhone: string): Observable<any> {
    return this.http.get(settings.DOMAIN_URL + '/userservices/requestresetpassword?username=' + userPhone)
      .map(res => {
        return res.json();
      }).timeout(40000);
  }

  /////////////////////////////////////////////////////////////////////////////////////////
  // forgetPassword(userPhone: string, password: string, verifyCode: string): Observable<any> {
  //   let data = new URLSearchParams();
  //   data.set('newpassword', password);
  //   let body = data.toString()
  //   return this.http.post(settings.DOMAIN_URL + '/userservices/resetpassword?verifycode=' + verifyCode + '&username=' + userPhone, body, { headers: settings.getHeaderXWFORM() })
  //     .map(res => {
  //       return res.json();
  //     }).timeout(40000);
  // }
  /////////////////////////////////////////////////////////////////////////////////////////
  logOut(): Observable<any> {
    let options = new RequestOptions({ headers: settings.getHeaderJsonGetMethod() });

    return this.http.post(settings.DOMAIN_URL + 'userservices/logout', null, options)
      .map(res => {
        return res.json();
      }).timeout(40000);
  }

  /////////////////////////////////////////////////////////////////////////////////////////
  validateSession(): Observable<any> {



    return this.http.post(settings.DOMAIN_URL + 'usersessionservices/validatesession',null , {headers:settings.getHeaderJsonGetValidate()}).map( (res:Response) => {
        return res.json();
      }
    )
  }


  /////////////////////////////////////////////////////////////////////////////////////////
  deactivateAccount(): Observable<any> {
    return this.http.post(settings.DOMAIN_URL + '/userservices/deactivateuser', null, { headers: settings.getHeaderJsonWithTKN() })
      .map(res => {
        return res.json();
      }).timeout(40000);
  }

  getVersionMobile(version: string): Observable<any> {
    return this.http.get(settings.DOMAIN_URL + '/userservices/mobileversion?ver=' + version)
      .map(res => {
        return res.json();
      }).timeout(40000);
  }

  updateLanguage(language): Observable<any> {

    return this.http.post(settings.DOMAIN_URL + '/usersessionservices/updateusersession?lan=' + language, null, { headers: settings.getHeaderJsonWithTKN() })
      .map(res => {
        return res.json();
      }).timeout(40000);
  }
  

  changePass(oldPass , newPass): Observable<any> {

     
     
    return this.http.put(settings.DOMAIN_URL + 'userservices/changepassword', null, {headers : settings.getHeaderJsonFormData(oldPass,newPass)} )
      .map(res => {
        return res.json();
      }).timeout(40000);
  }

  public handelError(error: Response){
    
    console.log(error);
    
    return Observable.throw(error)
    
  
  }


  UploadProfileImage(imageBlob){

    return this.http.post(settings.DOMAIN_URL + 'userservices/uploadprofileimage', imageBlob, {headers : settings.getHeaderJsonWithTKN()} )
    .map(res => {
      return res.json();
    }).timeout(40000);
  }

  getProfileImage(imageUrl: string) {
    return this.http.get(settings.DOMAIN_URL + 'userservices/getprofileimage?imgetkn='+imageUrl, { responseType: ResponseContentType.Blob })
    .map((res: Response) => res.blob());
    
  
  }

}
