 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './Company.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

/* components */
import { CompanyComponent } from './Company.component';
import { established_Company } from './components/established_Company/established_Company.component';
import { CompanyServices } from '../../shared/providers/Company.service';
import { new_InvestorComponent } from './components/new_Investor/new_Investor.component';
import { InternationalComponent } from './components/International/International.component';



@NgModule({
    imports: [
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        CompanyComponent,
        
        established_Company,
        new_InvestorComponent  ,
        InternationalComponent   ] ,
    providers:[CompanyServices]
})
export class CompanyModule { }
