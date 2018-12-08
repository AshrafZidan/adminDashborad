import { Routes, RouterModule } from '@angular/router';
import { AddvertsmentComponent } from './Addvertsment.component';

const childRoutes: Routes = [
    {
        path: '',
        component: AddvertsmentComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
