import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
    selector: 'digidocs',
  styles: [require('./digidocs.scss')],
  template: require('./digidocs.component.html'),
})

export class DigidocsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}