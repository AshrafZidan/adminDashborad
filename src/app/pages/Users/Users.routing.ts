import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './Users.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UsersComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
