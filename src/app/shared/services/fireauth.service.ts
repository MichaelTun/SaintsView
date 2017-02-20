import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class FireAuthService {

    constructor(public af: AngularFire) { }

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
}