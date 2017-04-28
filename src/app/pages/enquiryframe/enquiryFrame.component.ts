import { Component, ViewEncapsulation } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { NgModule } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Property } from '../../shared/property';
import { Availability } from '../../shared/availability';
import { Enquiry } from '../../shared/enquiry';

@Component({
  selector: 'enquiryFrame',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./enquiryFrame.scss')],
  template: require('./enquiryFrame.component.html'),
})
export class EnquiryFrameComponent {

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
      document.getElementById('selectedPropertyName').innerHTML = selectedPropertyN;
    }, 1700);
    document.getElementById('repayAmount').scrollIntoView();
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

  updateRepayment(price, depositPercentage, interest, period) {
    if (depositPercentage < 20){
      depositPercentage = 20;
      $('#depositPercentage').val(depositPercentage);
    }
    let deposit = (price / 100) * depositPercentage;
    let amount = price - deposit;

    $('#loanAmount').val(amount.toFixed(2));

    console.log(amount);
    if (amount) {
      let repaymentAmount: any;
      interest = interest / 1200;
      repaymentAmount = interest * -amount * Math.pow((1 + interest), period) / (1 - Math.pow((1 + interest), period));

      $('#repayAmount').val(repaymentAmount.toFixed(2));
    }
  }

  // Mail
  public sendMail(name: string, surname: string, email: string, selectedweeks: string,
                  week: string, phonenumber: number, message: string) {
    let selectedProperty = document.getElementById('selectedPropertyName');
    console.log(selectedProperty.innerText);
    if (email && week) {
      let newEnquiry = {
        to: 'info@saintsview.co.za',
        from: email,
        subject: 'Email From: ' + email + '. Name: ' + name + ' ' + surname + '. Property: ' + selectedProperty.innerText,
        body: 'Selected Weeks for Enquiry: ' + selectedweeks + ', ' + week + '.' + ' Phone Number: '
        + phonenumber + '.' + 'Message: ' + message
      };
      this.firebaseService.addEnquiry(newEnquiry);
    }
  }
}
