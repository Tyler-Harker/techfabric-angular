import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TfConfigState } from '../../store/tf-config/tf-config.models';
import { selectLogoUrl, selectTfConfig } from '../../store/tf-config/tf-config.selectors';
import { TfNavigationItem } from '../../store/tf-navigation/tf-navigation.models';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { getNavbarNavigationItems } from '../../store/tf-navigation/tf-navigation.selectors';

@Component({
  selector: 'tf-navbar',
  templateUrl: './tf-navbar.component.html',
  styleUrls: ['./tf-navbar.component.scss']
})
export class TfNavbarComponent implements OnInit {
  constructor(private store: Store) { }

  barsIcon: any = faBars;
  logoUrl: string = '';
  navItems: TfNavigationItem[] = [];

  ngOnInit() {
    this.store.select(selectLogoUrl).subscribe( (logoUrl: string) => {
      this.logoUrl = logoUrl;
    });
    this.store.select(getNavbarNavigationItems).subscribe((navigationItems: TfNavigationItem[]) => {
      this.navItems = navigationItems;
      console.log(this.navItems)
    });
  }

}
