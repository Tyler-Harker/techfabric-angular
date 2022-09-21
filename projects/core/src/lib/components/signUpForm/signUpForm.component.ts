import { Component, Input, OnInit } from '@angular/core';

import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'tf-signUpForm',
  templateUrl: './signUpForm.component.html',
  styleUrls: ['./signUpForm.component.scss']
})
export class SignUpFormComponent implements OnInit {
  @Input() logoUrl: string = '';
  @Input() showLegacyLogin: boolean = true;
  @Input() showMicrosoftLogin: boolean = false;
  @Input() showBackButton: boolean = true;

  microsoftIcon: any = faMicrosoft;
  constructor() { }

  ngOnInit() {
  }

}
