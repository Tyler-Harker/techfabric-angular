import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loginPopup, loginRedirect } from '@techfabric/msal-ngrx';
import { SIGN_IN } from '../../store/azureAd/azureAd.actions';

import { selectLogoUrl } from '../../store/configuration/configuration.selectors';
import { signInWithAd } from '../../store/signIn/signInPage.actions';
import { selectSignInPageConfiguration } from '../../store/signIn/signInPage.selectors';

@Component({
  selector: 'tf-signInPage',
  templateUrl: './signInPage.component.html',
  styleUrls: ['./signInPage.component.scss']
})
export class SignInPageComponent implements OnInit {
  @Input() logoUrl: string = '';
  @Input() showLegacySignIn: boolean = true;
  @Input() showMicrosoftSignIn: boolean = false;
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select(selectLogoUrl).subscribe(o => {
      this.logoUrl = <string>o;
    });
    this.store.select(selectSignInPageConfiguration).subscribe(o => {
      this.showLegacySignIn = o.showLegacySignIn;
      this.showMicrosoftSignIn = o.showMicrosoftSignIn;
    });
  }


  onClickSignInWithMicrosoft(): void {
    console.log('login')
    this.store.dispatch(loginRedirect());
  }

}
