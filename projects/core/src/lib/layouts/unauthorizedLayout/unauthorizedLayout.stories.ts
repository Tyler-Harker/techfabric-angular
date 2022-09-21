// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {UnauthorizedLayoutComponent} from './unauthorizedLayout.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { SignInFormComponent } from '../../components/signInForm/signInForm.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';


let declarations: any[] = [InputComponent, SignInFormComponent, NavbarComponent, ButtonComponent, FooterComponent];

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Layouts/UnauthorizedLayout',
  component: UnauthorizedLayoutComponent,
  
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations,
      imports: [FontAwesomeModule, FormsModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<UnauthorizedLayoutComponent> = (args: UnauthorizedLayoutComponent) => ({
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
                <tf-unauthorizedLayout [logoUrl]="logoUrl">
                </tf-unauthorizedLayout>`,
})
Default.parameters = {
    layout: 'fullscreen'
}