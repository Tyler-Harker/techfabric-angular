// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {SignUpPageComponent} from './signUpPage.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UnauthorizedLayoutComponent } from '../../layouts/unauthorizedLayout/unauthorizedLayout.component';
import { SignUpFormComponent } from '../../components/signUpForm/signUpForm.component';


let declarations: any[] = [InputComponent, SignUpFormComponent, NavbarComponent, ButtonComponent, FooterComponent, UnauthorizedLayoutComponent];

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Pages/SignUpPage',
  component: SignUpPageComponent,
  
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations,
      imports: [FontAwesomeModule, FormsModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SignUpPageComponent> = (args: SignUpPageComponent) => ({
  props: args,
});


export const Default = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        displayName: 'Tyler H.',
        logoUrl: 'https://assets-global.website-files.com/5e4d87b2291197807847f220/5e4fd127dca002ab4d52b079_Techfabric%20dark.svg'
    },
    template: ` 
                <tf-signUpPage [logoUrl]="logoUrl">
                </tf-signUpPage>`,
})
Default.parameters = {
    layout: 'fullscreen'
}

export const MicrosoftSignInOnly = () => ({
  moduleMetadata: {
      declarations
  },
  props: {
      logoUrl: 'https://assets-global.website-files.com/5e4d87b2291197807847f220/5e4fd127dca002ab4d52b079_Techfabric%20dark.svg',
      showLegacyLogin: false,
      showMicrosoftLogin: true,
  },
  template: ` 
              <tf-signUpPage [logoUrl]="logoUrl" [showMicrosoftLogin]="showMicrosoftLogin" [showLegacyLogin]="showLegacyLogin">
              </tf-signUpPage>`,
})
MicrosoftSignInOnly.parameters = {
  layout: 'fullscreen'
}

export const LegacyAndMicrosoftLogin = () => ({
  moduleMetadata: {
      declarations
  },
  props: {
      logoUrl: 'https://assets-global.website-files.com/5e4d87b2291197807847f220/5e4fd127dca002ab4d52b079_Techfabric%20dark.svg',
      showLegacyLogin: true,
      showMicrosoftLogin: true,
  },
  template: ` 
              <tf-signUpPage [logoUrl]="logoUrl" [showLegacyLogin]="showLegacyLogin" [showMicrosoftLogin]="showMicrosoftLogin">
              </tf-signUpPage>`,
})
LegacyAndMicrosoftLogin.parameters = {
  layout: 'fullscreen'
}