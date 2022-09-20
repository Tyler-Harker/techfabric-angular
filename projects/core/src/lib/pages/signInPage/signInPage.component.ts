import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tf-signInPage',
  templateUrl: './signInPage.component.html',
  styleUrls: ['./signInPage.component.scss']
})
export class SignInPageComponent implements OnInit {
  @Input() logoUrl: string = '';
  constructor() { }

  ngOnInit() {
  }

}
