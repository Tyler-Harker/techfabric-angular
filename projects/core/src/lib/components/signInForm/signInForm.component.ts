import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'tf-signInForm',
  templateUrl: './signInForm.component.html',
  styleUrls: ['./signInForm.component.scss']
})
export class SignInFormComponent implements OnInit {
  @Input() logoUrl: string = '';
  @Input() showLegacyLogin: boolean = true;
  @Input() showMicrosoftLogin: boolean = false;
  @Input() showBackButton: boolean = true;


  @Output() onClickSignIn: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClickSignInWithMicrosoft: EventEmitter<void> = new EventEmitter<void>();
  

  microsoftIcon: any = faMicrosoft;
  constructor() { }

  ngOnInit() {
  }

}
