import { Component, Input, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() logoUrl: string = '';
  @Input() displayName: string = '';
  hamburgerIcon: any = faBars;
  constructor() { }

  ngOnInit() {
  }

}
