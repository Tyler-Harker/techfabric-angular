import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TfNavbarComponent } from './components/tf-navbar/tf-navbar.component';
import { configurationFeatureKey, tfConfigReducer } from './store/tf-config/tf-config.reducers';
import { navigationFeatureKey, tfNavigationReducer } from './store/tf-navigation/tf-navigation.reducers';

let components = [TfNavbarComponent]


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    FontAwesomeModule,
    // EffectsModule.forFeature([]),
    StoreModule.forFeature(navigationFeatureKey, tfNavigationReducer),
    StoreModule.forFeature(configurationFeatureKey, tfConfigReducer)
  ],
  exports: [
    ...components
  ]
})
export class TechfabricAngularAppModule { }
