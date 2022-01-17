import { createAction, props } from "@ngrx/store";
import { AuthState } from "./auth.state";

const signInStartActionType ='[SignInPage] Start';
const signInSuccessActionType ='[SignInPage] Success';
const signInFailActionType ='[SignInPage] Fail';

export const onSignInStartAction =createAction(signInStartActionType,props<{signIn:AuthState}>());
export const onSignInSuccessAction =createAction(signInSuccessActionType);
export const onSignInFailAction =createAction(signInFailActionType);