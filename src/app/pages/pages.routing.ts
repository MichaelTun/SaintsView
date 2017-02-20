import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { Login } from './login/login.component';
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
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'property', loadChildren: () => System.import('./property/property.module') },
      { path: 'sales', loadChildren: () => System.import('./sales/sales.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
