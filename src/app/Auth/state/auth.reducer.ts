import { createReducer, on } from "@ngrx/store";
import { onSignInFailAction, onSignInStartAction, onSignInSuccessAction } from "./auth.action";
import { AuthState, authStateInit } from "./auth.state";

export const _authReducer =createReducer<AuthState>(authStateInit,
    on(onSignInFailAction,(state,action)=>{
        console.log('error triggered');
        return{
            ...state
        };
    }),
    on(onSignInSuccessAction,(state,action)=>{
        return{
            ...state,
            email:action.email,
            password:action.password
        };
    }),
    )