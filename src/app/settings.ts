import { Headers } from "@angular/http";
import { sessionData } from "./session-data";

export class settings {
  public static DOMAIN_URL = "http://localhost:8080/Dolphin_Services/";
  // public static DOMAIN_URL = "http://rafalgroups.com/Dolphin_Services/";
  public static imageUrl =
    "http://localhost:8080/Dolphin_Services/userservices/getprofileimage?imgetkn=";
  // "http://rafalgroups.com/Dolphin_Services/userservices/getprofileimage?imgetkn=";

  // url imag for ads
  public static imageUrlAds =
    "http://localhost:8080/Dolphin_Services/advertisementservices/getaddimage?imgetkn=";
  // "http://rafalgroups.com/Dolphin_Services/advertisementservices/getaddimage?imgetkn=";
  static getHeaderJson(): Headers {
    let contentHeaders = new Headers();
    contentHeaders.append("Content-Type", "application/json");
     
    return contentHeaders;
  }

  static getHeaderJsonFormData(oldpass, newpass): Headers {
    let contentHeaders = new Headers();
    contentHeaders.append("oldpassword", oldpass);
    contentHeaders.append("newpassword", newpass);
    contentHeaders.append("tkn", sessionData.userSessionData.tkn);

    return contentHeaders;
  }

  static getHeaderJsonGetMethod(): Headers {
    let contentHeaders = new Headers();
    contentHeaders.append("Content-Type", "application/json");
    contentHeaders.append("tkn", sessionData.userSessionData.tkn);

     

    return contentHeaders;
  }

  static getHeaderJsonGetMethod2(): Headers {
    let contentHeaders = new Headers();
    // contentHeaders.append('Content-Type', 'application/json');
    // contentHeaders.append('Authorization', setting.AuthoriztionTKN);
    // contentHeaders.append('UserAuth', 'Bearer '+sessionData.userToken);

    return contentHeaders;
  }

  static getHeaderJsonWithTKN(): Headers {
    let contentHeaders = new Headers();
    
 
    contentHeaders.append("tkn", sessionData.userSessionData.tkn);

    return contentHeaders;
  }

  static getHeaderJsonWithTKN2(): Headers {
    let contentHeaders = new Headers();
    // contentHeaders.append('Accept', 'application/json');
    // contentHeaders.append('Content-Type', 'application/json');
    // console.log(sessionData.userSessionData.tkn);

    contentHeaders.append("tkn", sessionData.userSessionData.tkn);

    return contentHeaders;
  }

  static getHeaderJsonWithTKN3(): Headers {
    let contentHeaders = new Headers();
    // console.log(sessionData.userSessionData.tkn);

    contentHeaders.append("tkn", sessionData.userSessionData.tkn);
    contentHeaders.append("Accept", "application/json");

    return contentHeaders;
  }

  static getHeaderXWFORM(): Headers {
    let contentHeaders = new Headers();
    contentHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    return contentHeaders;
  }

  static getHeaderJsonWithTKNImgeUpload(): Headers {
    let contentHeaders = new Headers();
    contentHeaders.append("Accept", "application/json");
    return contentHeaders;
  }


  static getHeaderJsonGetValidate(): Headers {
    let contentHeaders = new Headers();
 
    
    let tkn = localStorage.getItem('userTkn') ;

    console.log(tkn,'from header');
    
     contentHeaders.append("tkn", tkn);
    
 


    
     
    
    return contentHeaders;
  
}

}