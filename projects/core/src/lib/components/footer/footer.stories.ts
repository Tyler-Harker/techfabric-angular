// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {FooterComponent} from './footer.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';


let declarations: any[] = [];

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Controls/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations,
      imports: [FontAwesomeModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
});

export const Default = () => ({
    moduleMetadata: {
        declarations
    },
    props: {

    },
    template: ` <tf-footer>
                </tf-footer>`
})