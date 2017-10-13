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
  selectedPropertyN: string;
  totalSoldSelected: string; totalDealPendingSelected: string; totalAvailableSelected: string;
  totalSold: number; totalDealPending: string; totalAvailable: string;
  propertiesData: JSON;

  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit() {
    // Retrieve posts from the API
    this.firebaseService.getProperties()
      .subscribe(properties => { this.properties = properties; });

      console.log(this.properties);
      // let propertiesData = JSON.parse(this.properties.toString());
      // console.log(propertiesData);
      // propertiesData.forEach(element => {
      //   let soldPerProperty = element.filter(e => e.availability === 'Sold');
      // });

      // for (let i = 0; i < this.properties.length; i++) {
      //   let unitsSold = property.weeks.filter(e => e.availability === 'Sold');
      // }
      //let unitsSold = property.weeks.filter(e => e.availability === 'Sold');

  }

  selectProperty(property) {
    this.changeState('selected', property.id);
    this.selectedPropertyN = property.property_name;

    this.weeksArray = property.weeks;
    console.log(property.weeks);
    let unitsSold = property.weeks.filter(e => e.availability === 'Sold');
    let unitsDealPending = property.weeks.filter(e => e.availability === 'Deal Pending');
    let unitsAvailable = property.weeks.filter(e => e.availability === 'Available');
    console.log(unitsSold);
    this.totalSoldSelected = unitsSold.length;
    this.totalDealPendingSelected = unitsDealPending.length;
    this.totalAvailableSelected = unitsAvailable.length;

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
    const postfix = day + "-" + month + "-" + year + filename;

    //window.open('data:application/vnd.ms-excel,' + $('#summaryTable').html());

    let data_type = 'data:application/vnd.ms-excel';
    let table_div = document.getElementById('table_wrapper');
    let table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = postfix + '.xls';
    a.click();
    // const uri = 'data:application/vnd.ms-excel;base64';
    // const template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    // const format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }); };
    // const base64 = function (s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))); }
    // // creating a temporary HTML link element (they support setting file names)
    // let tableData = document.getElementById(table);
    // console.log(tableData);
    // let ctx = { worksheet: name || 'Worksheet', table: tableData.innerHTML };
    // let a = document.createElement('a');
    // a.href = uri + base64(format(template, ctx));
    // a.download = postfix + '.xls';
    // a.click();

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
