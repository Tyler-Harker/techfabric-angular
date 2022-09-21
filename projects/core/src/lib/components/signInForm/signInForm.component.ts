import { Component, OnInit } from '@angular/core';

import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'tf-signInForm',
  templateUrl: './signInForm.component.html',
  styleUrls: ['./signInForm.component.scss']
})
export class SignInFormComponent implements OnInit {
  microsoftIcon: any = faMicrosoft;
  constructor() { }

  ngOnInit() {
  }

}
