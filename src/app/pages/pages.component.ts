import { Component , ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-main clearfix">
        <ul class="al-share clearfix">
          <li><a href="https://www.facebook.com/saintsview/" target="_blank"><i class="socicon socicon-facebook"></i></a></li>
          <li><a href="https://twitter.com/Saints_View" target="_blank"><i class="socicon socicon-twitter"></i></a></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
