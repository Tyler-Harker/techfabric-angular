// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {NavbarComponent} from './navbar.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';


let declarations: any[] = [];

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Controls/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations,
      imports: [FontAwesomeModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
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
    template: ` <tf-navbar [logoUrl]="logoUrl" [displayName]="displayName">
                </tf-navbar>`
})