// Modules
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './sales.routing';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// Components
import { SalesComponent } from './sales.component';
import { SmartTables } from './components/smartTables/smartTables.component';
import { AvailabilityModalComponent } from './availabilityModal/availabilityModal.component';
import { OwnerModalComponent } from './ownerModal/ownerModal.component';
// Services
import { SmartTablesService } from './components/smartTables/smartTables.service';
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
    SalesComponent, SmartTables, AvailabilityModalComponent, OwnerModalComponent
  ],
  providers: [
    SmartTablesService, PropertyService, FirebaseService
  ],
})
export default class SalesModule {

}
