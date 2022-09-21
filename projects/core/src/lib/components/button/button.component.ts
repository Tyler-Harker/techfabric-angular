import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from './button.models'; 

@Component({
  selector: 'tf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
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
