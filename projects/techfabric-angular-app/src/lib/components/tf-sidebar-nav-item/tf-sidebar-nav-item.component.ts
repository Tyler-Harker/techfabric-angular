import { Component, Input, OnInit } from '@angular/core';
import { TfNavigationItem } from '../../store/tf-navigation/tf-navigation.models';

@Component({
  selector: 'tf-sidebar-nav-item',
  templateUrl: './tf-sidebar-nav-item.component.html',
  styleUrls: ['./tf-sidebar-nav-item.component.scss']
})
export class TfSidebarNavItemComponent implements OnInit {
  @Input() model: TfNavigationItem | null = null;
  constructor() { }

  ngOnInit() {
  }

}
