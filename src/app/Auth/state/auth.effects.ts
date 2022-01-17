import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthService } from "src/app/Service/AuthService";
import { onSignInFailAction, onSignInStartAction } from "./auth.action";

@Injectable()
export class AuthEffects{
    constructor(private actions$:Actions,
                private authServe:AuthService){

    }

    logIn$ =createEffect(()=>
    this.actions$.pipe(ofType(onSignInStartAction),
    exhaustMap(action =>{
       return this.authServe.logIn(action.signIn).pipe(
            map(data=>onSiginSuccessAction()),
            catchError(error => of(onSignInFailAction()))
        )
    })
    )

    );
}

function onSiginSuccess(): any {
    throw new Error("Function not implemented.");
}
function onSiginSuccessAction(): any {
    throw new Error("Function not implemented.");
}

