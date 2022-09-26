import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from './tf-button.models';

@Component({
  selector: 'tf-button',
  templateUrl: './tf-button.component.html',
  styleUrls: ['./tf-button.component.scss']
})
export class TfButtonComponent implements OnInit {
  @Input() type: ButtonType = ButtonType.Basic;
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  get buttonClassName(): string {
    switch(this.type){
      case ButtonType.Basic: return 'basic';
      case ButtonType.Ghost: return 'ghost';
      case ButtonType.Primary: return 'primary';
      default: return 'basic';
    }
  }

}
