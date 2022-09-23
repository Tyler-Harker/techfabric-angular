import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import { signInSuccess, SIGN_IN } from './azureAd.actions';

@Injectable({
    providedIn: 'root'
})
export class MsalServiceCustom {
    constructor(private http: HttpClient, private authService: MsalService){

    }
    signIn() {
        console.log('triggered')
        this.authService.loginRedirect();
        return this.http.get('');
    }
}

@Injectable()
export class AzureAdEffects {
    http: HttpClient;

    constructor(
        private actions$: Actions,
        private readonly httpHandler: HttpBackend,
        private authService: MsalService,
        private msalService: MsalServiceCustom
    ){
        this.http = new HttpClient(httpHandler);
    }
    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(SIGN_IN),
        mergeMap(() => this.msalService.signIn()
          .pipe(
            map(movies => signInSuccess({})),
            catchError(() => EMPTY)
          ))
        )
      );

}