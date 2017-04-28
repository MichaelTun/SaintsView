import { Routes, RouterModule }  from '@angular/router';
import { EnquiryFrameComponent } from './enquiryFrame.component';

const routes: Routes = [
  {
    path: '',
    component: EnquiryFrameComponent
  }
];

export const routing = RouterModule.forChild(routes);