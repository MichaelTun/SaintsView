import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing } from './digidocs.routing';
import { NgaModule } from '../../theme/nga.module';

import { DigidocsComponent } from './digidocs.component';

@NgModule({
    imports: [CommonModule, NgaModule, routing],
    exports: [],
    declarations: [DigidocsComponent],
    providers: [],
})
export default class DigidocsModule { }
