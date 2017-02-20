import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class FireAuthService {

    constructor(public af: AngularFire) { }

    signIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            //var errorCode = error.code;
            console.log(error);
            let errorMessage = error.message;
            // ...
        });
    }

    /**
   * Logs the user in using their Email/Password combo
   * @param email
   * @param password
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
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

    /**
    * Logs out the current user
    */
    logout() {
        return this.af.auth.logout();
    }
}