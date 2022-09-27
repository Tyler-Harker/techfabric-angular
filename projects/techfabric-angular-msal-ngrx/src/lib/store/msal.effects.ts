import { Injectable } from "@angular/core";
import { MsalService } from "@azure/msal-angular";
import { AccountInfo, AuthenticationResult } from "@azure/msal-browser";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { TechfabricAngularMsalNgrxService } from "../techfabric-angular-msal-ngrx.service";

import * as MsalActions from './msal.actions';

@Injectable()
export class MsalEffects {
    
    constructor(
        private actions$: Actions,
        private msalAuthService: TechfabricAngularMsalNgrxService){
    }

    msalLoginPopup$ = createEffect(() => this.actions$.pipe(
        ofType(MsalActions.loginPopup.type),
        switchMap(() => 
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