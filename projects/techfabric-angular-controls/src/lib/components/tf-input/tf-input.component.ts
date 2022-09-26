import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tf-input',
  templateUrl: './tf-input.component.html',
  styleUrls: ['./tf-input.component.scss']
})
export class TfInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: string | number | null = null;
  @Output() valueChange: EventEmitter<string | number | null> = new EventEmitter<string | number | null>();
  constructor() { }

  ngOnInit() {
  }

}
