import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


import { FormsModule } from '@angular/forms';
@Component({
  selector: 'tf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: string | number | null = null;
  @Output() valueChange: EventEmitter<string | number | null> = new EventEmitter<string | number | null>();
  constructor() { }

  ngOnInit() {
  }

}
