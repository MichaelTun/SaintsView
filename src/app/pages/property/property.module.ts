import { NgModule } from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './property.routing';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PropertyComponent }   from './property.component';
import { WeekValuesAddComponent } from './components/weekValuesAdd/weekValuesAdd.component';
// import { WeekValuesEditComponent } from './components/weekValuesEdit/weekValuesEdit.component';

import { FirebaseService } from '../../services/firebase.service';

@NgModule({
    imports: [
        routing, NgaModule, CommonModule,
        FormsModule, ReactiveFormsModule
        ],
    exports: [],
    declarations: [PropertyComponent, WeekValuesAddComponent],
    providers: [ FirebaseService]
})
export default class PropertyModule {

}
