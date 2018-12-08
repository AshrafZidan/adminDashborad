import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
 
  
];

export const routing = RouterModule.forRoot(appRoutes);
