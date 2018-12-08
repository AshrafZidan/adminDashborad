import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './Services.component';
import { charter_accountingComponent } from './components/Charter_accounting/charter_accounting.component';
import { establish_CompniesComponent } from './components/establish_Compnies/establish_Compnies.component';
import { feasability_StudyComponent } from './components/feasability_Study/feasability_Study.component';
import { custom_ClearanceComponent } from './components/custom_Clearance/custom_Clearance.component';
import { office_ServiceComponent } from './components/office_Service/office_Service.component';
import { trading_AgenciesComponent } from './components/trading_Agencies/trading_Agencies.component';
import { certified_TranslationsComponent } from './components/certified_Translations/certified_Translations.component';
import { shippingComponent } from './components/shipping/shipping.component';
import { hiringLaborsComponent } from './components/hiringLabors/hiringLabors';
import { employmentComponent } from './components/employment/employment';

const childRoutes: Routes = [
    {
        path: '',
        component: ServiceComponent,
        children: [
            { path: '', redirectTo: 'charter_accounting', pathMatch: 'full' },
            { path: 'charter_accounting', component: charter_accountingComponent },
            { path: 'establish_companies', component: establish_CompniesComponent },
            { path: 'feasability_Study', component: feasability_StudyComponent },
            { path: 'custom_clearance', component: custom_ClearanceComponent },
            { path: 'office_services', component: office_ServiceComponent },
            { path: 'trading_Agencies', component: trading_AgenciesComponent },
            { path: 'certified_Translations', component: certified_TranslationsComponent },
            { path: 'shipping', component: shippingComponent },
            { path: 'hiringLabors', component: hiringLaborsComponent },
            { path: 'employment', component: employmentComponent },

            


            
            
            




        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
