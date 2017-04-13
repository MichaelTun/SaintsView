import { Routes, RouterModule }  from '@angular/router';
import { DigidocsComponent } from './digidocs.component';

const routes: Routes = [
  {
    path: '',
    component: DigidocsComponent
  }
];

export const routing = RouterModule.forChild(routes);