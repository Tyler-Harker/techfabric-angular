import { Inject, Injectable } from '@angular/core';
import { MSAL_CONFIG_TOKEN } from './msal.config';
import { AuthenticationResult, PublicClientApplication } from '@azure/msal-browser';
import { from } from 'rxjs';
import { MsalNgrxModule } from './msal.module';
import { loginSuccessful } from '../public-api';
import { Store } from '@ngrx/store';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@Injectable({
  providedIn: 'root'
})
export class MsalAuthService {
  private userAgentApplication: PublicClientApplication;

  constructor(
    @Inject(MSAL_CONFIG_TOKEN) private msalConfig: any, private store: Store
  ) {
    this.userAgentApplication = new PublicClientApplication({
      auth: {
        clientId: this.msalConfig.clientId,
        authority: `https://login.microsoftonline.com/${this.msalConfig.tenantId}`,
        redirectUri: this.msalConfig.redirectUri
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE
      }
    })
    this.userAgentApplication.handleRedirectPromise().then( (authResult) => {
      let result = <AuthenticationResult>authResult;
      this.store.dispatch(loginSuccessful({authResult: result}));
    })

    console.log(this.userAgentApplication)
  }


  logoutRedirect() {
    this.userAgentApplication.logoutRedirect()
  }

  logoutPopup(){
    this.userAgentApplication.logoutPopup();
  }

  loginPopup(){
    return from (
      this.userAgentApplication.loginPopup()
    );
  }

  loginRedirect(){
    return from(
      this.userAgentApplication.loginRedirect()
    );
  }

  acquireTokenSilent() {
    return from(
      this.userAgentApplication.acquireTokenSilent(
        this.msalConfig.consentScopes
      )
    );
  }

  acquireTokenPopup(){
    return from(
      this.userAgentApplication.acquireTokenPopup(this.msalConfig.consentScopes)
    );
  }

  get user(){
    return this.userAgentApplication.getActiveAccount();
  }


}
