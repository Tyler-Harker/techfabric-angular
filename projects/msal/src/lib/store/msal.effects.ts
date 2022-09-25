import { Injectable } from "@angular/core";
import { MsalService } from "@azure/msal-angular";
import { AccountInfo, AuthenticationResult, BrowserAuthOptions } from "@azure/msal-browser";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { MsalAuthService } from "../msalAuth.service";

import * as MsalActions from './msal.actions';

@Injectable()
export class MsalEffects {
    
    constructor(
        private actions$: Actions,
        private msalAuthService: MsalAuthService){
    }

    msalAuthUpdate = createEffect(() => this.actions$.pipe(
        ofType(MsalActions.msalAuthUpdate.type),
        mergeMap((action: any) => 
            this.msalAuthService.init(action, this.msalAuthService.cache)
        )
    ), { dispatch: false})

    msalLoginPopup$ = createEffect(() => this.actions$.pipe(
        ofType(MsalActions.loginPopup.type),
        switchMap((paqyload) => 
            this.msalAuthService.loginPopup().pipe(
                map(
                    (authResult) => {
                        return MsalActions.loginSuccessful({ authResult })
                    }
                ),
                catchError(error => {
                    return of(MsalActions.loginFail({ error }))
                })
            )
        )
    ));

    msalLoginRedirect$ = createEffect(() => this.actions$.pipe(
        ofType(MsalActions.loginRedirect),
        switchMap(() => this.msalAuthService.loginRedirect())
        )
    , {dispatch: false});
}