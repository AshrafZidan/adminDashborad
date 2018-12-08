import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'Users', loadChildren: './Users/Users.module#UsersModule' },
            { path: 'Company', loadChildren: './company/Company.module#CompanyModule' },
            { path: 'advirtesment', loadChildren: './Addvertsment/Addvertsment.module#AddvertsmentModule' },
            { path: 'Service', loadChildren: './Services/Services.module#ServiceModule' },
            { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
