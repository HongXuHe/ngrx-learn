import { createReducer, on } from "@ngrx/store";
import { onSignInFailAction, onSignInStartAction } from "./auth.action";
import { AuthState, authStateInit } from "./auth.state";

export const _authReducer =createReducer<AuthState>(authStateInit,
    on(onSignInFailAction,(state,action)=>{
        console.log('error triggered');
        return{
            ...state
        };
    }),
    )