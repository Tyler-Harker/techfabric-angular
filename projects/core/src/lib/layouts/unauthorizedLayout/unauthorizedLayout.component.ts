import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tf-unauthorizedLayout',
  templateUrl: './unauthorizedLayout.component.html',
  styleUrls: ['./unauthorizedLayout.component.scss']
})
export class UnauthorizedLayoutComponent implements OnInit {
  @Input() logoUrl: string = '';
  constructor() { }

  ngOnInit() {
  }

}
