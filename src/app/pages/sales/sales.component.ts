import { Component, ViewEncapsulation } from '@angular/core';
import { NgModule } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

import { Property } from '../../shared/property';
import { Availability } from '../../shared/availability';

@Component({
  selector: 'sales',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./sales.scss')],
  template: require('./sales.component.html'),
})
export class SalesComponent {

  properties: Property[];
  availability: Availability[];
  selectedProperty: any;
  weeksArray: JSON; // populates grid
  appState: string;
  activeKey: string;

  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit() {
    // Retrieve posts from the API
    this.firebaseService.getProperties()
      .subscribe(properties => { this.properties = properties; });

  }


  selectProperty(property) {
    this.changeState('selected', property.id);
    let selectedPropertyN: string = property.property_name;
    this.firebaseService.getProperty(property.$key)
      .subscribe(selectedProperty => { this.selectedProperty = selectedProperty; });
    setTimeout(() => {
      this.weeksArray = this.selectedProperty.weeks;
      $('#selectedPropertyName').html(selectedPropertyN);
    }, 1700);

    // setTimeout(() => {
    //   $("#summaryTable td.availCss:contains('Sold')").addClass('btn btn-success');
    // }, 2000);
  }


  changeState(state, key) {
    console.log('changing state to ' + state);
    if (key) {
      this.activeKey = key;
    }
    this.appState = state;
  }



}
