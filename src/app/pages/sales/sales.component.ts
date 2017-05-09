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
    document.getElementById('selectedPropertyName').innerHTML = selectedPropertyN;
  }, 1700);
  document.getElementById('repayAmount').scrollIntoView();

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

updateRepayment(price, depositPercentage, depositValue, interest, period) {
    if (depositPercentage < 20){
      depositPercentage = 20;
      $('#depositPercentage').val(depositPercentage);
    }
    let deposit = (price / 100) * depositPercentage;
    if (depositValue !== '') {
      deposit = depositValue;
    }
    let amount = price - deposit;

    $('#loanAmount').val(amount.toFixed(2));
    if (amount) {
      let repaymentAmount: any;
      interest = interest / 1200;
      repaymentAmount = interest * -amount * Math.pow((1 + interest), period) / (1 - Math.pow((1 + interest), period));

      $('#repayAmount').val(repaymentAmount.toFixed(2));
    }
  }
}
