import { Routes, RouterModule }  from '@angular/router';
import { PropertyComponent } from './property.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyComponent
  }
];

export const routing = RouterModule.forChild(routes);
