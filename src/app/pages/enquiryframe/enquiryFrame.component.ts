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
  showFirstUnit: Boolean;
  img1: string; img2: string; img3: string; img4: string; img5: string; img6: string;
  img7: string; img8: string; img9: string; img10: string; img11: string; img12: string;
  propertyInfo : string;


  constructor(private firebaseService: FirebaseService, private http: Http) {

  }

  ngOnInit() {
    // Retrieve posts from the API
    this.firebaseService.getProperties()
      .subscribe(properties => { this.properties = properties; });

      this.firebaseService.getEnquiries()
      .subscribe(enquiries => { this.enquiries = enquiries; });

      // $('.carousel').carousel({
      //   interval: 2500
      // });
  }


  selectProperty(property) {
    this.changeState('selected', property.$key);
    let selectedPropertyN: string = property.property_name;
    let propertyInfo: string = property.extra_info;

    this.img1 = property.images.postImg1;
    this.img2 = property.images.postImg2;
    console.log("imag2");
    console.log(this.img2);
    this.img3 = property.images.postImg3;
    this.img4 = property.images.postImg4;
    this.img5 = property.images.postImg5;
    this.img6 = property.images.postImg6;
    this.img7 = property.images.postImg7;
    this.img8 = property.images.postImg8;
    this.img9 = property.images.postImg9;
    this.img10 = property.images.postImg10;
    this.img11 = property.images.postImg11;
    this.img12 = property.images.postImg12;

    this.firebaseService.getProperty(property.$key)
      .subscribe(selectedProperty => { this.selectedProperty = selectedProperty; });

    let propertyKey = property.$key;

    setTimeout(() => {
      this.weeksArray = this.selectedProperty.weeks;
      document.getElementById('selectedPropertyName').innerHTML = selectedPropertyN;
      document.getElementById('extraInfo').innerHTML = propertyInfo;
    }, 1700);
    // document.getElementById('repayAmount').scrollIntoView();
    // setTimeout(() => {
    //   $("#summaryTable td#availButton:contains('Sold')").addClass('btn btn-primary');
    // }, 2000);
  }

  changeState(state, key) {
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
    if (email) {
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
