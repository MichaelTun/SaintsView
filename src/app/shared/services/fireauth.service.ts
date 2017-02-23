import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
@Injectable()
export class FireAuthService {

    constructor(public af: AngularFire, private router: Router) { }

    loginWithEmail(email, password) {
        return this.af.auth.login({
            email: email,
            password: password,
        },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            });
    }

    logout() {
        return this.af.auth.logout();
    }

    isAuthenticated() {
        return this.af.auth.map((auth) => {
            if (auth == null) {
                return false;
            } else {
                return true;
            }
        });
    }
}
