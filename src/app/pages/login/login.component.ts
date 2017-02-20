import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FireAuthService } from '../../shared/services/fireauth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public error: boolean = false;
  public errorMessage: string = '';

  constructor(fb: FormBuilder, private afService: FireAuthService, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
      event.preventDefault();
    this.afService.loginWithEmail(values.email, values.password).then(() => {
      this.router.navigate(['pages']);
    })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
    }
  }

  // loginWithEmail(event, email, password){
  //   event.preventDefault();
  //   this.afService.loginWithEmail(email, password).then(() => {
  //     this.router.navigate(['']);
  //   })
  //     .catch((error: any) => {
  //       if (error) {
  //         this.error = error;
  //         console.log(this.error);
  //       }
  //     });
  // }
}
