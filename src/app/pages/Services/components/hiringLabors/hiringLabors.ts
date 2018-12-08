import { SafeUrlPipe } from './../../../../shared/providers/safe-url.pipe';
import { ServiceServices } from './../../../../shared/providers/Services.service';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../shared/services/global.service';
import { RootComponent } from '../../../../shared/roots/root.component';
// SafeUrlPipe
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-hiringLabors',
  templateUrl: './hiringLabors.html',
  styleUrls: ['./hiringLabors.scss'],
 })
export class hiringLaborsComponent extends RootComponent implements OnInit {
  tableData: Array<any>;
  JobTitle: Array<any>;
  jobTitleCode = '';
  dataListSize = 0;
  loading = true ;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;


  ImgSrc: string = 'assets/images/picture.png';


  constructor(private service: ServiceServices , public _globalService: GlobalService , private sanitizer:DomSanitizer) { 

      super(_globalService);

  }

  ngOnInit() {
    this.getPickList()
    this.loadData(this.pageSize , this.pageNumber ,this.jobTitleCode );
  }


  getPickList(){
    this.service.getJobTitlePickList().subscribe(data =>{
      this.JobTitle = data;
      
    })

  }
  loadData(pageSize  , pageNumber , jobTitleCode) {
    this.loading = true;

      this.service.GetHiringLabors( pageSize , pageNumber ,jobTitleCode  ).subscribe(res => {

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
    this.loadData(this.pageSize , this.pageNumber ,this.jobTitleCode );
  }

  searchData(){
    this.loadData(this.pageSize , this.pageNumber ,this.jobTitleCode );
    // this.searchCeritria ='';

  }

  
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
  
openUrl(url){

  var URL = url;

  window.open(URL,'_blank');

}
}
