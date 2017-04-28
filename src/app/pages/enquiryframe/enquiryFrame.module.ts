// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './enquiryFrame.routing';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// Components
import { EnquiryFrameComponent } from './enquiryFrame.component';
// Services
import { PropertyService } from '../../services/property.service';
import { FirebaseService } from '../../services/firebase.service';


@NgModule({
  imports: [
    CommonModule,
    routing,
    Ng2SmartTableModule,
    NgaModule
  ],
  declarations: [
    EnquiryFrameComponent
  ],
  providers: [
    PropertyService, FirebaseService
  ],
})
export default class EnquiryFrameModule {

}
