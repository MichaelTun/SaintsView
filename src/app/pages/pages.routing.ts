import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { Login } from './login/login.component';
import { UserAuthGuardService } from '../shared/services/gaurd.service';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/register.module')
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'property', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module'), canActivate:[UserAuthGuardService] },
      { path: 'property', loadChildren: () => System.import('./property/property.module'), canActivate:[UserAuthGuardService] },
      { path: 'sales', loadChildren: () => System.import('./sales/sales.module'), canActivate:[UserAuthGuardService] }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
