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
  selectedPropertyN

  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit() {
    // Retrieve posts from the API
    this.firebaseService.getProperties()
      .subscribe(properties => { this.properties = properties; });

  }


  selectProperty(property) {
    this.changeState('selected', property.id);
    this.selectedPropertyN = property.property_name;

    this.weeksArray = property.weeks;
    setTimeout(() => {
      document.getElementById('selectedPropertyName').innerHTML = this.selectedPropertyN;
    }, 1700);
    document.getElementById('repayAmount').scrollIntoView();

    // setTimeout(() => {
    //   $("#summaryTable td.availCss:contains('Sold')").addClass('btn btn-success');
    // }, 2000);
  }

  tableToExcel(table) {
    const dt = new Date();
    const day = dt.getDate();
    const month = dt.getMonth() + 1;
    const year = dt.getFullYear();
    const filename = this.selectedPropertyN;
    const postfix = day + "." + month + "." + year + filename;

    const uri = 'data:application/vnd.ms-excel;base64';
    const template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    const format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }); };
    const base64 = function (s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))); }
    // creating a temporary HTML link element (they support setting file names)
    let tableData = document.getElementById(table);
    let ctx = { worksheet: name || 'Worksheet', table: tableData.innerHTML };
    const testHtml = uri + base64(format(template, ctx));

    let a = document.createElement('a');
    // getting data from our div that contains the HTML table
    let data_type = 'data:application/vnd.ms-excel';
    a.href = data_type + ', ' + testHtml;
    // setting the file name
    a.download = postfix + '.xls';
    // triggering the function
    a.click();
  }


  changeState(state, key) {
    console.log('changing state to ' + state);
    if (key) {
      this.activeKey = key;
    }
    this.appState = state;
  }

  updateRepayment(price, depositPercentage, depositValue, interest, period) {
    if (depositPercentage < 20) {
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
