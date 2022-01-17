import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { onSignInStartAction } from '../state/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm:FormGroup;
  constructor(private store:Store<AppState>) { 
    this.logInForm =new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  getEmailErrors() {
   let control = this.logInForm.get('email');
   if(control?.touched && control.getError('required')){
      return 'email is required';
   }
   if(control?.touched && control.getError('email')){
    return 'email format is not correct';
 }
   return null;
  }

  getPasswordErrors() {
    let control = this.logInForm.get('password');
    if(control?.touched && control.getError('required')){
       return 'password is required';
    }
    return null;
   }

  onLogin() {
    this.store.dispatch(onSignInStartAction({signIn:{email:this.logInForm.value.email,password:this.logInForm.value.password}}))
  }

}
