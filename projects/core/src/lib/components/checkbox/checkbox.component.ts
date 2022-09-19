import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tf-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() size: number = 16;
  @Input() value: boolean = false;
  @Output() valueChange = new EventEmitter<boolean>();
  @Input() disabled: boolean = false;
  icon = faCheck;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    if(!this.disabled){
      this.value = !this.value;
      this.valueChange.emit(this.value);
    }
  }
}
