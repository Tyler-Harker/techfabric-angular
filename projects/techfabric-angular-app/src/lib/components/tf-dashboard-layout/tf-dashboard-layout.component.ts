import { Component, Input, OnInit, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { setConfig } from '../../store/tf-config/tf-config.actions';
import { TfConfigState } from '../../store/tf-config/tf-config.models';
import { selectLogoUrl, selectTfConfig } from '../../store/tf-config/tf-config.selectors';
import { setNavigationItems, setNavigationState } from '../../store/tf-navigation/tf-navigation.actions';
import { TfNavigationState } from '../../store/tf-navigation/tf-navigation.models';
import { getTfNavigationItems, getTfNavigationState } from '../../store/tf-navigation/tf-navigation.selectors';
import { setSidebarState } from '../../store/tf-sidebar/tf-sidebar.actions';
import { StorybookUtilityService } from '../../utilities/storybook-utility.service';
import { TfSidebarState } from '../../store/tf-sidebar/tf-sidebar.models';


import { initialState as tfConfigInitialState } from '../../store/tf-config/tf-config.reducers';
import { initialState as tfSidebarInitialState } from '../../store/tf-sidebar/tf-sidebar.reducers';
import { initialState as tfNavigationInitialState } from '../../store/tf-navigation/tf-navigation.reducers';
import { initialState as tfDashboardInitialState } from '../../store/tf-dashboard/tf-dashboard.reducers';
import { setDashboardState, toggleSidebarDisplay } from '../../store/tf-dashboard/tf-dashboard.actions';
import { TfDashboardState } from '../../store/tf-dashboard/tf-dashboard.models';
import { selectTfDashboardState } from '../../store/tf-dashboard/tf-dashboard.selectors';

@Component({
  selector: 'tf-dashboard-layout',
  templateUrl: './tf-dashboard-layout.component.html',
  styleUrls: ['./tf-dashboard-layout.component.scss']
})
export class TfDashboardLayoutComponent implements OnInit {

  constructor(@Optional() private store: Store | null = null, @Optional() private storyBookService: StorybookUtilityService | null = null) { }
  @Input() tfConfig: TfConfigState = tfConfigInitialState;
  @Input() tfNavigation: TfNavigationState = tfNavigationInitialState;
  @Input() tfSidebar: TfSidebarState = tfSidebarInitialState;
  @Input() tfDashboard: TfDashboardState = tfDashboardInitialState;

  ngOnInit() { 
    this.storyBookService?.initWrapper(() => {
      this.store?.dispatch(setNavigationState(<TfNavigationState>this.tfNavigation));
      this.store?.dispatch(setConfig(this.tfConfig));
      this.store?.dispatch(setSidebarState({state: <TfSidebarState>this.tfSidebar}));
      this.store?.dispatch(setDashboardState({payload: this.tfDashboard}))
    }); 
    this.store?.select(selectTfConfig).subscribe(config => this.tfConfig = config);
    this.store?.select(getTfNavigationState).subscribe(navigationState => this.tfNavigation = navigationState);
    this.store?.select(selectTfDashboardState).subscribe(dashboardState => this.tfDashboard = dashboardState);
  }

  onClickNavBars(){
    this.store?.dispatch(toggleSidebarDisplay())
  }

}
