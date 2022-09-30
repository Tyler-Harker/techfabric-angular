import { Component, Input, OnInit, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { setNavigationItems } from '../../store/tf-navigation/tf-navigation.actions';
import { TfNavigationItem } from '../../store/tf-navigation/tf-navigation.models';
import { getSidebarNavigationItems } from '../../store/tf-navigation/tf-navigation.selectors';
import { setSidebarDisplay, setSidebarType } from '../../store/tf-sidebar/tf-sidebar.actions';
import { TfSidebarDisplay, TfSidebarState, TfSidebarType } from '../../store/tf-sidebar/tf-sidebar.models';
import { selectSidebarState } from '../../store/tf-sidebar/tf-sidebar.selectors';
import { StorybookUtilityService } from '../../utilities/storybook-utility.service';

@Component({
  selector: 'tf-sidebar',
  templateUrl: './tf-sidebar.component.html',
  styleUrls: ['./tf-sidebar.component.scss']
})
export class TfSidebarComponent implements OnInit {

  constructor(@Optional() private store: Store | null = null, @Optional() private storybookService: StorybookUtilityService) { }
  @Input() type: TfSidebarType = TfSidebarType.ContentAware;
  @Input() display: TfSidebarDisplay = TfSidebarDisplay.Open;
  @Input() navigationItems: TfNavigationItem[] = [];
  classNames: string = '';

  ngOnInit() {
    if(this.storybookService != null){
      this.storyBookInit();
    }
    this.store?.select(getSidebarNavigationItems).subscribe(navItems => {
      this.navigationItems = navItems;
    })
    this.store?.select(selectSidebarState).subscribe(state => {
      this.type = state.type;
      this.display = state.display;
    });
  }

  storyBookInit(){
    this.store?.dispatch(setSidebarDisplay({payload: this.display}));
    this.store?.dispatch(setSidebarType({payload: this.type}));
    this.store?.dispatch(setNavigationItems({navigationItems: this.navigationItems}))
  }

  get displayClassName(): string {
    switch(this.display){
      case TfSidebarDisplay.None: return 'displayNone';
      case TfSidebarDisplay.Open: return 'displayOpen';
      case TfSidebarDisplay.Preview: return 'displayPreview';
      default: return '';
    }
  }

  get typeClassName(): string {
    switch(this.type){
      case TfSidebarType.ContentAware: return 'typeContentAware';
      case TfSidebarType.Fixed: return 'typeFixed';
      default: return '';
    }
  }

  preview(): void {
    if(this.store !== null){
      this.store?.dispatch(setSidebarDisplay({payload: TfSidebarDisplay.Preview}));
    }
    else{
      this.display = TfSidebarDisplay.Preview;
    }
    
  }

  close(): void {
    if(this.store !== null){
      this.store?.dispatch(setSidebarDisplay({payload: TfSidebarDisplay.None}));
    }
    else{
      this.display = TfSidebarDisplay.None;
    }
  }

  open(): void {
    if(this.store !== null){
      this.store?.dispatch(setSidebarDisplay({payload: TfSidebarDisplay.Open}));
    }
    else {
      this.display = TfSidebarDisplay.Open;
    }
  }
}
