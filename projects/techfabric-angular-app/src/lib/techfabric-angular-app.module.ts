import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TechfabricAngularControlsModule } from 'techfabricAngularControls';
import { TfFooterComponent, TfNavbarNavItemComponent, TfSidebarNavItemComponent } from './components';
import { TfDashboardLayoutComponent } from './components/tf-dashboard-layout/tf-dashboard-layout.component';
import { TfNavbarComponent } from './components/tf-navbar/tf-navbar.component';
import { TfSidebarComponent } from './components/tf-sidebar/tf-sidebar.component';
import { configurationFeatureKey, tfConfigReducer } from './store/tf-config/tf-config.reducers';
import { TfDasbhoardEffects } from './store/tf-dashboard/tf-dashboard.effects';
import { dashboardFeatureKey, tfDashboardReducer } from './store/tf-dashboard/tf-dashboard.reducers';
import { navigationFeatureKey, tfNavigationReducer } from './store/tf-navigation/tf-navigation.reducers';
import { sidebarFeatureKey, tfSidebarReducer } from './store/tf-sidebar/tf-sidebar.reducers';

export const Components = [TfNavbarComponent, TfSidebarComponent, TfNavbarNavItemComponent, TfSidebarNavItemComponent, TfDashboardLayoutComponent, TfFooterComponent]


@NgModule({
  declarations: [
    ...Components
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TechfabricAngularControlsModule,
    StoreModule.forFeature(navigationFeatureKey, tfNavigationReducer),
    StoreModule.forFeature(configurationFeatureKey, tfConfigReducer),
    StoreModule.forFeature(sidebarFeatureKey, tfSidebarReducer),
    StoreModule.forFeature(dashboardFeatureKey, tfDashboardReducer),
    EffectsModule.forFeature([TfDasbhoardEffects])
  ],
  exports: [
    ...Components,
    CommonModule,
    TechfabricAngularControlsModule
  ]
})
export class TechfabricAngularAppModule { }
