import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthEffects } from "./state/auth.effects";
import { _authReducer } from "./state/auth.reducer";

const routes:Routes =[
    {
        path:'',
        children:[
            {
                path:'',redirectTo:'login'
            },
            {
                path:'login',component:LoginComponent
            },
            {
                path:'signup',component:SignupComponent
            }
        ]
    }
];

@NgModule({
    declarations:[
    LoginComponent,
    SignupComponent
  ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature('auth',_authReducer),
        EffectsModule.forFeature([AuthEffects]),
        RouterModule.forChild(routes)
],
    exports:[]
})
export class AuthModule{

}