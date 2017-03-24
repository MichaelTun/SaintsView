import { Routes, RouterModule }  from '@angular/router';
import { EnquiryComponent } from './enquiry.component';

const routes: Routes = [
  {
    path: '',
    component: EnquiryComponent
  }
];

export const routing = RouterModule.forChild(routes);