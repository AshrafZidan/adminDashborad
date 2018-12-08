import { Component, OnInit } from '@angular/core';
import { ServiceServices } from '../../shared/providers/Services.service';
import { GlobalService } from '../../shared/services/global.service';
import { RootComponent } from '../../shared/roots/root.component';
import { AdvirtesmentServices } from '../../shared/providers/Advirtesment.service.';
import { NotificationComponent } from '../ui/components/notification/notification.component';
import swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { settings } from '../../settings';


@Component({
  selector: 'app-Addvertsment',
  templateUrl: './Addvertsment.component.html',
  styleUrls: ['./Addvertsment.component.scss']
})
export class AddvertsmentComponent  extends RootComponent implements OnInit {

  tableData: Array<any>;
  searchCeritria = '';
  dataListSize = 0;
  loading = true ;
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  ImgSrc: string = 'assets/images/picture.png';
  imageToShow: any;



  constructor(private service: AdvirtesmentServices , public _globalService: GlobalService , public notft:NotificationComponent , private sanitizer: DomSanitizer) { 

    super(_globalService);

  }

  ngOnInit() {
    this.loadData(this.pageSize , this.pageNumber ,this.searchCeritria );
  }

  loadData(pageSize  , pageNumber , searchCeritria) {
    this.loading = true;

      this.service.GetAdds(pageSize  , pageNumber , searchCeritria).subscribe(res => {

         
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

 toggleActive(id,status){
   let text = '';

  if (status == true) {
    text = 'Activate'
  }
  else {
    text = ' DeActivate'

  }
  swal({
    title: 'Are you sure?',
    text: 'You will ' +text+ ' this !',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: text
  }).then((result) => {
    if (result.value) {

    this.service.toggleAds(id,status).subscribe(data => {
      swal(
        text,
        'Your Advs has been ' +  text,
        'success'
      );
      this.loadData(this.pageSize, this.pageNumber,this.searchCeritria);

   
  } , err => {

    swal(
      'Error!',
      'Error when ' + text,
      'warning'
    );


  })
      
    }
  });


 }

  DeleteAds(id){

      swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete!'
    }).then((result) => {
      if (result.value) {

      this.service.DeleteAds(id).subscribe(data => {
        swal(
          'Deleted!',
          'Your Advs has been deleted.',
          'success'
        );
        this.loadData(this.pageSize, this.pageNumber,this.searchCeritria);

     
    } , err => {

      swal(
        'Error!',
        'Error when Delted.',
        'warning'
      );


    })
        
      }
    });
 
  }
  
 
  

//   createImageFromBlob(image: Blob) {
//    let reader = new FileReader();
//    reader.addEventListener("load", () => {
//       this.imageToShow = reader.result;

//    }, false);

//    if (image) {
//     // window.open(image.src, '_blank');

//       reader.readAsDataURL(image);
//       // document.getElementById("previewImage").style.display="block";

//    }
// }
}
