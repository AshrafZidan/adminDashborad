import { Component, OnInit } from '@angular/core';
 import { GlobalService } from '../../shared/services/global.service';
import { RootComponent } from '../../shared/roots/root.component';
 import { NotificationComponent } from '../ui/components/notification/notification.component';
import swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { UsersServices } from '../../shared/providers/Users.service.1';
 


@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.scss']
})
export class UsersComponent  extends RootComponent implements OnInit {

  tableData: Array<any>;
  searchCeritria = '';
  dataListSize = 0;
  loading = true ;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  ImgSrc: string = 'assets/images/picture.png';
  imageToShow: any;



  constructor(private service: UsersServices , public _globalService: GlobalService , public notft:NotificationComponent , private sanitizer: DomSanitizer) { 

    super(_globalService);

  }

  ngOnInit() {
    this.loadData(this.pageSize , this.pageNumber ,this.searchCeritria );
  }

  loadData(pageSize  , pageNumber , searchCeritria) {
    this.loading = true;

      this.service.GetUsers(pageSize  , pageNumber , searchCeritria).subscribe(res => {

         
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
