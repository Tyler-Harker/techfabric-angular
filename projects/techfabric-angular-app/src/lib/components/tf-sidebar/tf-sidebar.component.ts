import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TfSidebarDisplay, TfSidebarState, TfSidebarType } from '../../store/tf-sidebar/tf-sidebar.models';
import { selectSidebarState } from '../../store/tf-sidebar/tf-sidebar.selectors';

@Component({
  selector: 'tf-sidebar',
  templateUrl: './tf-sidebar.component.html',
  styleUrls: ['./tf-sidebar.component.scss']
})
export class TfSidebarComponent implements OnInit {

  constructor(private store: Store) { }

  model: TfSidebarState | null = null;
  classNames: string = '';

  ngOnInit() {
    this.store.select(selectSidebarState).subscribe(state => {
      this.model = state;
      console.log('mode', this.model)
      console.log('state', state);
    });
  }

  get displayClassName(): string {
    switch(this.model?.display){
      case TfSidebarDisplay.None: return 'displayNone';
      case TfSidebarDisplay.Open: return 'displayOpen';
      case TfSidebarDisplay.Preview: return 'displayPreview';
      default: return '';
    }
  }

  get typeClassName(): string {
    switch(this.model?.type){
      case TfSidebarType.ContentAware: return 'typeContentAware';
      case TfSidebarType.Fixed: return 'typeFixed';
      default: return '';
    }
  }
}
