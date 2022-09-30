import { Component, Input, OnInit, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { TfConfigState } from '../../store/tf-config/tf-config.models';
import { selectTfConfig } from '../../store/tf-config/tf-config.selectors';
import { TfNavigationState } from '../../store/tf-navigation/tf-navigation.models';
import { getTfNavigationItems, getTfNavigationState } from '../../store/tf-navigation/tf-navigation.selectors';
import { StorybookUtilityService } from '../../utilities/storybook-utility.service';

@Component({
  selector: 'tf-dashboard-layout',
  templateUrl: './tf-dashboard-layout.component.html',
  styleUrls: ['./tf-dashboard-layout.component.scss']
})
export class TfDashboardLayoutComponent implements OnInit {

  constructor(@Optional() private store: Store | null = null, @Optional() private storyBookService: StorybookUtilityService) { }

  @Input() tfConfig: TfConfigState | null = null;
  @Input() tfNavigation: TfNavigationState | null = null;

  ngOnInit() {
    this.store?.select(selectTfConfig).subscribe(config => this.tfConfig = config);
    this.store?.select(getTfNavigationState).subscribe(navigationState => this.tfNavigation = navigationState);
  }

}
