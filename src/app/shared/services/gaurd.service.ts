// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';
// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AngularFire, FirebaseAuthState } from 'angularfire2';

// @Injectable()
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { FireAuthService } from './fireauth.service';

@Injectable()
export class UserAuthGuardService {
  constructor(private _data: FireAuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this._data.isAuthenticated();
  }
}