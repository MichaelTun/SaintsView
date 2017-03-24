import { Component, ViewEncapsulation } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { NgModule } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Property } from '../../shared/property';
import { Availability } from '../../shared/availability';

@Component({
  selector: 'enquiry',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./enquiry.scss')],
  template: require('./enquiry.component.html'),
})
export class EnquiryComponent {

  properties: Property[];
  availability: Availability[];
  selectedProperty: any;
  weeksArray: JSON; // populates grid
  appState: string;
  activeKey: string;

  private mailgunUrl: string = 'sandbox53b7154283734184830169d63178fb5b.mailgun.org';
  private apiKey: string = 'key-936ccc9783abec1579df038efc7fbeeb';

  constructor(private firebaseService: FirebaseService, private http: Http) {

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

    setTimeout(() => {
      $("#summaryTable td#availButton:contains('Sold')").addClass('btn btn-primary');
    }, 2000);
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

  // Mail
  public sendMail(name: string, surname: string, email: string, week: string, phonenumber: number, message: string) {
    console.log(name, surname, email, week, phonenumber, message);
    // if (email && week) {
    event.stopPropagation();
    let authHeaders = new Headers(
      {
        'Authorization': 'Basic ' + btoa('api:' + this.apiKey)
      }
    );

    let body = 'from=' + email + '&to=' + 'michaeltunmer@gmail.com' + '&subject=' + name
      + ' ' + surname + ' - ' + week + '&text=' + message;

    this.http.post('https://api.mailgun.net/v3/' + this.mailgunUrl + '/messages', body, { headers: authHeaders })
      .map(result => result.json())
      .do(result => console.log('RESULT: ', JSON.stringify(result)))
      .subscribe(result => {
        console.log('SENT!');
      }, error => {
        console.log(error);
      });
    // }

    //       let headers = new Headers(
    //       {
    //                   'Content-Type': 'application/x-www-form-urlencoded',
    //                   'Authorization': 'Basic ' +btoa("api:key-936ccc9783abec1579df038efc7fbeeb")
    //       }
    //       );
    //     let url="https://api.mailgun.net/v3/sandbox53b7154283734184830169d63178fb5b.mailgun.org/messages";
    //     let mail = {
    //     from : "mike",
    //     to : "michaeltunmer@gmail.com",
    //     subject : "text",
    //     text : "text"
    //   };
    //  this.http.post(url, mail, {headers:headers});
  }
}
