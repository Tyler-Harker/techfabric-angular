import { Inject, Injectable } from '@angular/core';
import { MSAL_CONFIG_TOKEN } from './msal.config';
import { AuthenticationResult, BrowserAuthOptions, CacheOptions, PublicClientApplication } from '@azure/msal-browser';
import { from } from 'rxjs';
import { MsalNgrxModule } from './msal.module';
import { loginSuccessful } from '../public-api';
import { Store } from '@ngrx/store';
import { AdConfig } from './msal.config';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@Injectable({
  providedIn: 'root'
})
export class MsalAuthService {
  private userAgentApplication: PublicClientApplication;

  public cache: CacheOptions = {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: isIE
  }

  constructor(
    @Inject(MSAL_CONFIG_TOKEN) private msalConfig: any, private store: Store
  ) {
    this.userAgentApplication = new PublicClientApplication({
      auth: {
        clientId: this.msalConfig.clientId,
        authority: `https://login.microsoftonline.com/${this.msalConfig.tenantId}`,
        redirectUri: this.msalConfig.redirectUri
      },
      cache: this.cache 
    })
    this.userAgentApplication.handleRedirectPromise().then( (authResult) => {
      let result = <AuthenticationResult>authResult;
      this.store.dispatch(loginSuccessful({authResult: result}));
    })
  }


  async init(auth: AdConfig, cache: CacheOptions) {
    return this.userAgentApplication = new PublicClientApplication({
      auth: {
        clientId: auth.clientId,
        authority: `https://login.microsoftonline.com/${auth.tenantId}`,
        redirectUri: auth.redirectUrl
      },
      cache
    });
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
