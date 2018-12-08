import { Routes, RouterModule } from '@angular/router';
 
import { CompanyComponent } from './Company.component';
import { established_Company } from './components/established_Company/established_Company.component';
import { new_InvestorComponent } from './components/new_Investor/new_Investor.component';
import { InternationalComponent } from './components/International/International.component';

const childRoutes: Routes = [
    {
        path: '',
        component: CompanyComponent,
        children: [
            { path: '', redirectTo: 'established_Company', pathMatch: 'full' },
            { path: 'established_Company', component: established_Company },
            { path: 'new_Investor', component: new_InvestorComponent },
            { path: 'International', component: InternationalComponent },


             
            
            

        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
