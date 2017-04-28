import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: require('./pages.component.html')
})
export class Pages {
  notEnquiryFramePage: boolean = false;
  constructor() {
    let location = window.location.href;

    if (!location.includes('enquiryframe')) {
      this.notEnquiryFramePage = true;
    }
  }
  ngOnInit() {
  }
}
