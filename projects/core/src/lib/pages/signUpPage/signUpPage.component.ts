import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tf-signUpPage',
  templateUrl: './signUpPage.component.html',
  styleUrls: ['./signUpPage.component.scss']
})
export class SignUpPageComponent implements OnInit {
  @Input() logoUrl: string = '';
  @Input() showLegacyLogin: boolean = true;
  @Input() showMicrosoftLogin: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
