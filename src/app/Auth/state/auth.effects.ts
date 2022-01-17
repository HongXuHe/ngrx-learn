import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthService } from "src/app/Service/AuthService";
import { onSignInFailAction, onSignInStartAction,onSignInSuccessAction } from "./auth.action";

@Injectable()
export class AuthEffects{
    constructor(private actions$:Actions,
                private authServe:AuthService){

    }

    logIn$ =createEffect(()=>
    this.actions$.pipe(ofType(onSignInStartAction),
    exhaustMap(action =>{
       return this.authServe.logIn(action.signIn).pipe(
            map(data=>onSignInSuccessAction(data)),
            catchError(error => of(onSignInFailAction()))
        )
    })
    )

    );
}


