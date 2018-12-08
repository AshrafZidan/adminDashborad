import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Company',
  template: `<router-outlet></router-outlet>`
})
export class CompanyComponent implements OnInit {

  constructor() { 

    console.log("app routing");
    
  }

  ngOnInit() {
  }

}
