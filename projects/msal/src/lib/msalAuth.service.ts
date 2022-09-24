import { Inject, Injectable } from '@angular/core';
import { MSAL_CONFIG_TOKEN } from './msal.config';
import { PublicClientApplication } from '@azure/msal-browser';
import { from } from 'rxjs';
import { MsalNgrxModule } from './msal.module';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@Injectable({
  providedIn: 'root'
})
export class MsalAuthService {
  private userAgentApplication: PublicClientApplication;

  constructor(
    @Inject(MSAL_CONFIG_TOKEN) private msalConfig: any
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
    console.log(this.userAgentApplication.getAllAccounts())
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
