import { Component, ViewEncapsulation } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { NgModule } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Property } from '../../shared/property';
import { Availability } from '../../shared/availability';
import { Enquiry } from '../../shared/enquiry';

@Component({
  selector: 'enquiry',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./enquiry.scss')],
  template: require('./enquiry.component.html'),
})
export class EnquiryComponent {

  properties: Property[];
  enquiries: Enquiry[];
  availability: Availability[];
  selectedProperty: any;
  weeksArray: JSON; // populates grid
  appState: string;
  activeKey: string;

  constructor(private firebaseService: FirebaseService, private http: Http) {

  }

  ngOnInit() {
    // Retrieve posts from the API
    this.firebaseService.getProperties()
      .subscribe(properties => { this.properties = properties; });

      this.firebaseService.getEnquiries()
      .subscribe(enquiries => { this.enquiries = enquiries; });
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
    //   $("#summaryTable td#availButton:contains('Sold')").addClass('btn btn-primary');
    // }, 2000);
  }


  changeState(state, key) {
    console.log('changing state to ' + state);
    if (key) {
      this.activeKey = key;
    }
    this.appState = state;
  }

  addWeek() {
    let selectedweeks = ['Weeks'];
    $('input[type=checkbox]').each(function () {
      if (this.checked) {
        let weekvalue: string = $(this).val().toString();
        selectedweeks.push(weekvalue);
      }
    });
    $('#selectedweeks').val(selectedweeks.toString());
  }

  updateRepayment(amount, interest, period) {
    if (amount) {
      let repaymentAmount = (amount / period);
      let interestAmount = ((amount / 100) * interest) / period;
      repaymentAmount = repaymentAmount + interestAmount;
      console.log(interestAmount, repaymentAmount);
      $('#repayAmount').val(repaymentAmount.toPrecision(4));
    }
  }

  // Mail
  public sendMail(name: string, surname: string, email: string, selectedweeks: string,
                  week: string, phonenumber: number, message: string) {
    let selectedProperty = document.getElementById('selectedPropertyName');
    console.log(selectedProperty.innerText);
    if (email && week) {
      let newEnquiry = {
        to: 'saintsview@just.property',
        from: email,
        subject: name + ' ' + surname + '. Property: ' + selectedProperty.innerText,
        body: 'Selected Weeks: ' + selectedweeks + ', ' + week + '.' + ' Phone Number: ' + phonenumber + '.' +
        'Message: ' + message
      };
      this.firebaseService.addEnquiry(newEnquiry);
    }
  }
}
