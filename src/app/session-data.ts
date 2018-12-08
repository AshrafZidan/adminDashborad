export class sessionData {

  
  public static userSessionData = {
    tkn: "",
    language: "",
    userDetails: {
      userId: 0,
      phone: "",
      picture_url: null,
      type: "",
      userName: "",
      blocked: false,
      resetPasswordNeeded: false,
      validMobile: false,
      gender: null,
      numOfVerification: 0,
      notificationId: null,
      numOfNotifications: null,
      status: null,
      language: null,
      cityCountryService: false,
      notificationService: false
    },
    is_log: false
  };

  public static signinData = {
    userName: "",
    password: "",
    countryPhoneCode: "",
    nationalId: ""
  };

  public static getDate;

  static saveDataInLocalStorage(data) {
    sessionData.userSessionData = data;
    sessionData.userSessionData.is_log = true;
    localStorage.setItem(
      "userTkn",
     sessionData.userSessionData.tkn
    );

    localStorage.setItem(
      "userName",
     sessionData.userSessionData.userDetails.userName
    );

    localStorage.setItem(
      "imageToken",
     sessionData.userSessionData.userDetails.picture_url
    );
    
  }

  static getDataFromLocalstorage() {
    this.getDate = JSON.parse(localStorage.getItem("userSessionData"));
    if (this.getDate != null) {
      sessionData.userSessionData.tkn = this.getDate.tkn;
      sessionData.userSessionData.language = this.getDate.language;
      sessionData.userSessionData.userDetails.userName = this.getDate.userDetails.userName;
      sessionData.userSessionData.userDetails.phone = this.getDate.userDetails.phone;
      sessionData.userSessionData.userDetails.picture_url = this.getDate.userDetails.picture_url;
      sessionData.userSessionData.userDetails.type = this.getDate.userDetails.type;
      sessionData.userSessionData.userDetails.userId = Number(
        this.getDate.userDetails.userId
      );
      sessionData.userSessionData.userDetails.blocked = Boolean(
        this.getDate.userDetails.blocked
      );
      sessionData.userSessionData.userDetails.resetPasswordNeeded = Boolean(
        this.getDate.userDetails.resetPasswordNeeded
      );
      sessionData.userSessionData.userDetails.validMobile = Boolean(
        this.getDate.userDetails.validMobile
      );
      sessionData.userSessionData.userDetails.gender = this.getDate.userDetails.gender;
      sessionData.userSessionData.userDetails.numOfNotifications = Number(
        this.getDate.userDetails.numOfNotifications
      );
      sessionData.userSessionData.userDetails.numOfVerification = this.getDate.userDetails.numOfVerification;
      sessionData.userSessionData.userDetails.cityCountryService = Boolean(
        this.getDate.userDetails.cityCountryService
      );
      sessionData.userSessionData.userDetails.notificationService = Boolean(
        this.getDate.userDetails.notificationService
      );
      sessionData.userSessionData.is_log = Boolean(this.getDate.is_log);
    }
  }

  static clearDateFromLocalStorage() {
    localStorage.removeItem("userSessionData");
  }

  static singinSaveData(userName, pass, countryPhoneCode) {
    this.signinData.userName = userName;
    this.signinData.password = pass;
    this.signinData.countryPhoneCode = countryPhoneCode;
    // this.signinData.nationalId = nationalId;
    // localStorage.setItem("nationalId", this.signinData.nationalId);
  }
  static resetData() {
    sessionData.userSessionData = {
      tkn: "",
      language: "",
      userDetails: {
        userId: 0,
        phone: "",
        picture_url: null,
        type: "",
        userName: "",
        blocked: false,
        resetPasswordNeeded: false,
        validMobile: false,
        gender: null,
        numOfVerification: 0,
        notificationId: null,
        numOfNotifications: null,
        status: null,
        language: null,
        cityCountryService: false,
        notificationService: false
      },
      is_log: false
    };
  }
}
