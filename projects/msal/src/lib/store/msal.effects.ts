import { Injectable } from "@angular/core";
import { MsalService } from "@azure/msal-angular";
import { AccountInfo } from "@azure/msal-browser";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { MsalAuthService } from "../msalAuth.service";

import * as MsalActions from './msal.actions';

@Injectable()
export class MsalEffects {
    
    constructor(
        private actions$: Actions,
        private msalAuthService: MsalAuthService){
    }

    msalLoginPopup$ = createEffect(() => this.actions$.pipe(
        ofType(MsalActions.loginPopup.type),
        switchMap(() => 
            this.msalAuthService.loginPopup().pipe(
                map(
                    (access_token) => {
                        alert('success')
                        return MsalActions.loginSuccessful({ user: <AccountInfo>this.msalAuthService.user})
                    }
                ),
                catchError(error => {
                    alert('error')
                    return of(MsalActions.loginFail({ error }))
                })
            )
        )
    ));

    msalLoginRedirect$ = createEffect(() => this.actions$.pipe(
        ofType(MsalActions.loginRedirect),
        switchMap(() => 
            this.msalAuthService.loginRedirect().pipe(
                map(
                    access_token => {
                        return MsalActions.loginSuccessful({ user: <AccountInfo>this.msalAuthService.user})
                    }
                ),
                catchError(error => {
                    alert('error')
                    return of(MsalActions.loginFail({ error }))
                })
            )
        )
    ));
}