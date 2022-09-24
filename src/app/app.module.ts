import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TechfabricModule } from '../../projects/core/src/lib/core.module';
import { StoreModule } from '@ngrx/store';
import { AzureAdModule } from '../../projects/core/src/lib/store/azureAd/azureAd.module';
import { MsalModule } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { MsalNgrxModule } from 'projects/msal/src/lib/msal.module';
// import { MsalAuthService } from 'projects/msal/src/lib/msalAuth.service';
import { AdConfigWrapper, MSAL_CONFIG_TOKEN } from 'projects/msal/src/lib/msal.config';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

let adConfigWrapper = <AdConfigWrapper><unknown>environment;

console.log(adConfigWrapper)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    RouterModule.forRoot([]),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    TechfabricModule,
    // AzureAdModule.forRoot("https://localhost:7073/Configuration/AzureAdConfiguration"),
  ],
  providers: [
    {
      provide: MSAL_CONFIG_TOKEN,
      useValue: {
        clientId: adConfigWrapper.azureAd.clientId,
        tenantId: adConfigWrapper.azureAd.tenantId,
        redirectUri: adConfigWrapper.azureAd.redirectUrl
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
