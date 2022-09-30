import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TechfabricAngularControlsModule } from 'techfabricAngularControls';
import { TfNavbarNavItemComponent, TfSidebarNavItemComponent } from './components';
import { TfNavbarComponent } from './components/tf-navbar/tf-navbar.component';
import { TfSidebarComponent } from './components/tf-sidebar/tf-sidebar.component';
import { configurationFeatureKey, tfConfigReducer } from './store/tf-config/tf-config.reducers';
import { navigationFeatureKey, tfNavigationReducer } from './store/tf-navigation/tf-navigation.reducers';
import { sidebarFeatureKey, tfSidebarReducer } from './store/tf-sidebar/tf-sidebar.reducers';

let components = [TfNavbarComponent, TfSidebarComponent, TfNavbarNavItemComponent, TfSidebarNavItemComponent]


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    FontAwesomeModule,
    TechfabricAngularControlsModule,
    // EffectsModule.forFeature([]),
    StoreModule.forFeature(navigationFeatureKey, tfNavigationReducer),
    StoreModule.forFeature(configurationFeatureKey, tfConfigReducer),
    StoreModule.forFeature(sidebarFeatureKey, tfSidebarReducer)
  ],
  exports: [
    ...components,
    TechfabricAngularControlsModule
  ]
})
export class TechfabricAngularAppModule { }
