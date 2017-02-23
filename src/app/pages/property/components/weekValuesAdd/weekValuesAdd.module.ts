import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FirebaseService } from '../../services/firebase.service';

import { WeekValuesAddComponent } from './weekValuesAdd.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [WeekValuesAddComponent],
    providers: [FirebaseService],
})
export class WeekValuesAddModule { }
