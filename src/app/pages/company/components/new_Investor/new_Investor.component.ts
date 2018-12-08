import { ServiceServices } from './../../../../shared/providers/Services.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../shared/services/global.service';
import { RootComponent } from '../../../../shared/roots/root.component';
import { CompanyServices } from '../../../../shared/providers/Company.service';

@Component({
  selector: 'app-new_Investor',
  templateUrl: './new_Investor.component.html',
  styleUrls: ['./new_Investor.component.scss'],
 })
export class new_InvestorComponent extends RootComponent implements OnInit {
  tableData: Array<any>;
  searchCeritria = '';
  dataListSize = 0;
  loading = true ;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;
  companyType = 'Inverst'

  ImgSrc: string = 'assets/images/picture.png';


  constructor(private service: CompanyServices , public _globalService: GlobalService) { 

      super(_globalService);

  }

  ngOnInit() {
    this.loadData(this.pageSize , this.pageNumber ,this.searchCeritria );
  }

  loadData(pageSize  , pageNumber , searchCeritria) {
    this.loading = true;

      this.service.GetCompany( pageSize , pageNumber ,searchCeritria ,this.companyType ).subscribe(res => {

        this.tableData =res.data;
        this.dataListSize = res.size;
        this.loading = false;
       
        
      },err => {

        this.alertMessage(
          {
            type: 'danger',
            title: 'Server Error!',
            value: 'error Loading Data.'
          }
        );
        this.loading = false;
      })


      
  }

  pageChanged(pN: number): void {

    
    this.pageNumber = pN;
    this.loadData(this.pageSize , this.pageNumber ,this.searchCeritria );
  }

  searchData(){
    this.loadData(this.pageSize , this.pageNumber ,this.searchCeritria );
    // this.searchCeritria ='';

  }

  
  
}
