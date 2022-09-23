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

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    TechfabricModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    RouterModule.forRoot([]),
    EffectsModule.forRoot([]),
    AzureAdModule.forRoot("https://localhost:7073/Configuration/AzureAdConfiguration"),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
