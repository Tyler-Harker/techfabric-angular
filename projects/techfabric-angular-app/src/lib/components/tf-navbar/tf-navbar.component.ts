import { Component, Inject, Input, OnInit, Optional, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { TfConfigState } from '../../store/tf-config/tf-config.models';
import { selectLogoUrl, selectTfConfig } from '../../store/tf-config/tf-config.selectors';
import { TfNavigationItem } from '../../store/tf-navigation/tf-navigation.models';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { getNavbarNavigationItems } from '../../store/tf-navigation/tf-navigation.selectors';
import { StorybookUtilityService } from '../../utilities/storybook-utility.service';
import { setConfig } from '../../store/tf-config/tf-config.actions';
import { setNavigationItems } from '../../store/tf-navigation/tf-navigation.actions';

@Component({
  selector: 'tf-navbar',
  templateUrl: './tf-navbar.component.html',
  styleUrls: ['./tf-navbar.component.scss']
})
export class TfNavbarComponent implements OnInit {
  constructor(@Optional() private store: Store | null = null, @Optional() private storyBookInit: StorybookUtilityService | null = null) { }

  barsIcon: any = faBars;
  @Input() logoUrl: string | null = null;
  @Input() navItems: TfNavigationItem[] = [];


  ngOnInit() {
    if(this.storyBookInit != null) {
      this.initStoryBook();
    }
    this.store?.select(selectLogoUrl).subscribe( (logoUrl: string | null) => {
      this.logoUrl = logoUrl;
    });
    this.store?.select(getNavbarNavigationItems).subscribe((navigationItems: TfNavigationItem[]) => {
      this.navItems = navigationItems;
    });

    
  }

  initStoryBook() {
    this.store?.dispatch(setConfig({
      logoUrl: this.logoUrl
    }));
    this.store?.dispatch(setNavigationItems({
      navigationItems: this.navItems
    }))
  }

}
