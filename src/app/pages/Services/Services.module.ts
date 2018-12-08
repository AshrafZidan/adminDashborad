import { shippingComponent } from './components/shipping/shipping.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './Services.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

/* components */
import { ServiceComponent } from './Services.component';
import { charter_accountingComponent } from './components/Charter_accounting/charter_accounting.component';
import { ServiceServices } from '../../shared/providers/Services.service';
import { establish_CompniesComponent } from './components/establish_Compnies/establish_Compnies.component';
import { feasability_StudyComponent } from './components/feasability_Study/feasability_Study.component';
import { custom_ClearanceComponent } from './components/custom_Clearance/custom_Clearance.component';
import { office_ServiceComponent } from './components/office_Service/office_Service.component';
import { trading_AgenciesComponent } from './components/trading_Agencies/trading_Agencies.component';
import { certified_TranslationsComponent } from './components/certified_Translations/certified_Translations.component';
import { hiringLaborsComponent } from './components/hiringLabors/hiringLabors';
import { employmentComponent } from './components/employment/employment';



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
        ServiceComponent,
        establish_CompniesComponent,
        charter_accountingComponent , 
        feasability_StudyComponent ,
        custom_ClearanceComponent,
        office_ServiceComponent , 
        trading_AgenciesComponent,
        certified_TranslationsComponent,
        shippingComponent,
        hiringLaborsComponent , 
        employmentComponent
    ] ,
    providers:[ServiceServices]
})
export class ServiceModule { }
