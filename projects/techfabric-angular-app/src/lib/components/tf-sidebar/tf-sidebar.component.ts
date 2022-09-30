import { Component, Input, OnInit, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { TfNavigationItem } from '../../store/tf-navigation/tf-navigation.models';
import { getSidebarNavigationItems } from '../../store/tf-navigation/tf-navigation.selectors';
import { setSidebarDisplay } from '../../store/tf-sidebar/tf-sidebar.actions';
import { TfSidebarDisplay, TfSidebarState, TfSidebarType } from '../../store/tf-sidebar/tf-sidebar.models';
import { selectSidebarState } from '../../store/tf-sidebar/tf-sidebar.selectors';

@Component({
  selector: 'tf-sidebar',
  templateUrl: './tf-sidebar.component.html',
  styleUrls: ['./tf-sidebar.component.scss']
})
export class TfSidebarComponent implements OnInit {

  constructor(@Optional() private store: Store | null = null) { }
  @Input() type: TfSidebarType = TfSidebarType.ContentAware;
  @Input() display: TfSidebarDisplay = TfSidebarDisplay.Open;
  @Input() navigationItems: TfNavigationItem[] = [];
  classNames: string = '';

  ngOnInit() {
    this.store?.select(getSidebarNavigationItems).subscribe(navItems => {
      this.navigationItems = navItems;
    })
    this.store?.select(selectSidebarState).subscribe(state => {
      this.type = state.type;
      this.display = state.display;
    });

    setInterval(() => console.log(this.display), 2000)
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
