import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'techfabric-angular';
  constructor(private authService: MsalService){}

  signIn(){
    this.authService.loginRedirect();
  }
}
