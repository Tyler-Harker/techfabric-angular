// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {SignInPageComponent} from './signInPage.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { SignInFormComponent } from '../../components/signInForm/signInForm.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UnauthorizedLayoutComponent } from '../../layouts/unauthorizedLayout/unauthorizedLayout.component';
import { ConfigurationModule } from '../../store/configuration/configuration.module';
import { initialState as configurationInitialState } from '../../store/configuration/configuration.reducers';

import { provideMockStore } from '@ngrx/store/testing';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { configurationFeatureKey } from '../../store/configuration/configuration.reducers';
import { signInPageFeatureKey } from '../../store/signIn/signInPage.reducers';
import { initialState as signInPageInitialState } from '../../store/signIn/signInPage.reducers';
import { SignInPageState } from '../../store/signIn/signInPage.state';
import { AzureAdModule } from '../../store/azureAd/azureAd.module';
import { MsalModule, MsalService } from '@azure/msal-angular';


let declarations: any[] = [InputComponent, SignInFormComponent, NavbarComponent, ButtonComponent, FooterComponent, UnauthorizedLayoutComponent];

const initialState: any = {};
initialState[configurationFeatureKey] = configurationInitialState;
initialState[signInPageFeatureKey] = signInPageInitialState;



// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Pages/SignInPage',
  component: SignInPageComponent,
  
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations,
      providers: [
        provideMockStore({ initialState })
      ],
      imports: [FontAwesomeModule, FormsModule, StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production
      })],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SignInPageComponent> = (args: SignInPageComponent) => ({
  props: args,
});


export const Default = () => ({
    moduleMetadata: {
        declarations,
    },
    props: {
        displayName: 'Tyler H.',
        logoUrl: 'https://assets-global.website-files.com/5e4d87b2291197807847f220/5e4fd127dca002ab4d52b079_Techfabric%20dark.svg'
    },
    template: ` 
                <tf-signInPage >
                </tf-signInPage>`,
})
Default.parameters = {
    layout: 'fullscreen'
}

const microsoftOnlyState = JSON.parse(JSON.stringify(initialState));
microsoftOnlyState.signInPage = <SignInPageState>{
  showLegacySignIn: false,
  showMicrosoftSignIn: true
}


export const MicrosoftSignInOnly = () => ({
  moduleMetadata: {
      declarations,
      providers: [
        provideMockStore({initialState: microsoftOnlyState})
      ]
  },
  props: {
      logoUrl: 'https://assets-global.website-files.com/5e4d87b2291197807847f220/5e4fd127dca002ab4d52b079_Techfabric%20dark.svg',
      showLegacyLogin: false,
      showMicrosoftLogin: true,
  },
  template: ` 
              <tf-signInPage>
              </tf-signInPage>`,
})
MicrosoftSignInOnly.parameters = {
  layout: 'fullscreen'
}


const LegacyAndMicrosoftLoginState = JSON.parse(JSON.stringify(initialState));
LegacyAndMicrosoftLoginState.signInPage = <SignInPageState>{
  showLegacySignIn: true,
  showMicrosoftSignIn: true
}

export const LegacyAndMicrosoftLogin = () => ({
  moduleMetadata: {
      declarations,
      providers: [
        provideMockStore({initialState: LegacyAndMicrosoftLoginState})
      ]
  },
  props: {
      logoUrl: 'https://assets-global.website-files.com/5e4d87b2291197807847f220/5e4fd127dca002ab4d52b079_Techfabric%20dark.svg',
      showLegacyLogin: true,
      showMicrosoftLogin: true,
  },
  template: ` 
              <tf-signInPage>
              </tf-signInPage>`,
})
LegacyAndMicrosoftLogin.parameters = {
  layout: 'fullscreen'
}