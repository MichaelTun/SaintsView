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
  showImages_thirteen: Boolean = false; showImages_forteen: Boolean = false;
  showImages_fifteen: Boolean = false; showImages_sixteen: Boolean = false;

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
    this.changeState('selected', property.$key);

    let propertyKey = property.$key;
    this.showPropertyImages(propertyKey);

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

  tableToExcel(table, name){
    let uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
        , base64 = function(s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }
        , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
            if (!table.nodeType) table = document.getElementById(table)
            var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML};
            window.location.href = uri + base64(format(template, ctx));
        }


  changeState(state, key) {
    if (key) {
      this.activeKey = key;
    }
    this.appState = state;
  }

  showPropertyImages(key) {
    switch (key) {
      case '-Kj7VrceATh2Ane1YX6t': this.showImages_thirteen = true;
      this.showImages_forteen = false; this.showImages_fifteen = false;
      this.showImages_sixteen = false;
        break;
      case '-Kj7X_pRkkp0b_cXyg4P': this.showImages_thirteen = true;
      this.showImages_forteen = false; this.showImages_fifteen = false;
      this.showImages_sixteen = false;
        break;

      case '-Kj7VwdX8wtrV0XLIZrb': this.showImages_forteen = true;
      this.showImages_thirteen = false; this.showImages_fifteen = false;
      this.showImages_sixteen = false;
      break;
      case '-Kj7XhAkDDCxYb97Elm1': this.showImages_forteen = true;
      this.showImages_thirteen = false; this.showImages_fifteen = false;
      this.showImages_sixteen = false;
      break;

      case '-Kj7W29HdOMdfqGFItPa': this.showImages_fifteen = true;
      this.showImages_thirteen = false; this.showImages_forteen = false;
      this.showImages_sixteen = false;
      break;
      case '-Kj7Xnv0QO61nTy9Ht1H': this.showImages_fifteen = true;
      this.showImages_thirteen = false; this.showImages_forteen = false;
      this.showImages_sixteen = false;
      break;

      case '-Kj7WFNiPlGan7b-siwO': this.showImages_sixteen = true;
      this.showImages_thirteen = false; this.showImages_forteen = false;
      this.showImages_fifteen = false;
      break;
      case '-Kj7XthetAD8MYOofq0O': this.showImages_sixteen = true;
      this.showImages_thirteen = false; this.showImages_forteen = false;
      this.showImages_fifteen = false;
      break;
        default:
         break;
    }
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
