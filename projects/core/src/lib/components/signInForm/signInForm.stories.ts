// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {SignInFormComponent} from './signInForm.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { InputComponent } from '../input/input.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';


let declarations: any[] = [InputComponent, ButtonComponent];

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Forms/SignInForm',
  component: SignInFormComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations,
      imports: [FontAwesomeModule, FormsModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SignInFormComponent> = (args: SignInFormComponent) => ({
  props: args,
});

export const Default = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        logoUrl: 'https://assets-global.website-files.com/5e4d87b2291197807847f220/5e4fd127dca002ab4d52b079_Techfabric%20dark.svg'
    },
    template: ` <tf-signInForm [logoUrl]="logoUrl">
                </tf-signInForm>`
});
export const MicrosoftSignInOnly = () => ({
  moduleMetadata: {
      declarations
  },
  props: {
      showLegacyLogin: false,
      showMicrosoftLogin: true,
      logoUrl: 'https://assets-global.website-files.com/5e4d87b2291197807847f220/5e4fd127dca002ab4d52b079_Techfabric%20dark.svg'
  },
  template: ` <tf-signInForm [logoUrl]="logoUrl" [showLegacyLogin]="showLegacyLogin" [showMicrosoftLogin]="true">
              </tf-signInForm>`
});
export const LegacyAndMicrosoftLogin = () => ({
  moduleMetadata: {
      declarations
  },
  props: {
      showLegacyLogin: true,
      showMicrosoftLogin: true,
      logoUrl: 'https://assets-global.website-files.com/5e4d87b2291197807847f220/5e4fd127dca002ab4d52b079_Techfabric%20dark.svg'
  },
  template: ` <tf-signInForm [logoUrl]="logoUrl" [showLegacyLogin]="showLegacyLogin" [showMicrosoftLogin]="true">
              </tf-signInForm>`
})