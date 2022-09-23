import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MSAL_CONFIG_TOKEN } from './msal.config';
import { MsalAuthService } from './msalAuth.service';
import { MsalEffects } from './store/msal.effects';
import { msalConfigurationFeatureKey, msalReducer } from './store/msal.reducers';



@NgModule({
  declarations: [
  ],
  imports: [
    StoreModule.forFeature(msalConfigurationFeatureKey, msalReducer),
    EffectsModule.forFeature([MsalEffects])
  ],
  providers: [
  ],
  exports: [
  ]
})
export class MsalNgrxModule { }
