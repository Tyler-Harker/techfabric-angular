import { Component, Input, OnInit } from '@angular/core';

import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'tf-signInForm',
  templateUrl: './signInForm.component.html',
  styleUrls: ['./signInForm.component.scss']
})
export class SignInFormComponent implements OnInit {
  @Input() logoUrl: string = '';
  @Input() showUsernameAndPassword: boolean = true;
  @Input() showMicrosoftLogin: boolean = false;
  @Input() showBackButton: boolean = true;

  microsoftIcon: any = faMicrosoft;
  constructor() { }

  ngOnInit() {
  }

}
