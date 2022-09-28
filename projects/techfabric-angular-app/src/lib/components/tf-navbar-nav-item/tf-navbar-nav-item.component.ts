import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TfNavigationItem } from '../../store/tf-navigation/tf-navigation.models';

@Component({
  selector: 'tf-navbar-navItem',
  templateUrl: './tf-navbar-nav-item.component.html',
  styleUrls: ['./tf-navbar-nav-item.component.scss']
})
export class TfNavbarNavItemComponent implements OnInit {
  @Input() model: TfNavigationItem | null = null;

  isOpen: boolean = false;

  offsetHeight: number = 0;
  offsetWidth: number = 0;
  constructor() { }

  @ViewChild('wrapper') navItemWrapperElem: any;


  ngOnInit() {
  }

  onClickMenu(){
    console.log(this.navItemWrapperElem)
    this.offsetHeight = this.navItemWrapperElem.offsetTop + this.navItemWrapperElem.nativeElement.offsetHeight;
    this.offsetWidth = this.navItemWrapperElem.offsetLeft + this.navItemWrapperElem.nativeElement.offsetWidth;
    this.isOpen = true;
  }

  mouseLeave(){
    console.log('left')
    this.isOpen = false;

  }

}
