import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FirebaseService } from '../../services/firebase.service';

import { WeekValuesEditComponent } from './weekValuesEdit.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [WeekValuesEditComponent],
    providers: [FirebaseService],
})
export class WeekValuesEditModule { }
