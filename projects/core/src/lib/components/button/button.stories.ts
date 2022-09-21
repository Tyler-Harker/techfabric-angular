// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {ButtonComponent} from './button.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ButtonType } from './button.models';

let declarations: any[] = [];

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Controls/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [],
      imports: [FontAwesomeModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});



export const DefaultBasic = () => ({
  moduleMetadata: {
      declarations
  },
  props: {
  },
  template: ` <tf-button>
                Button
              </tf-button>`
});
export const DefaultPrimary = () => ({
  moduleMetadata: {
      declarations
  },
  props: {
    type: ButtonType.Primary
  },
  template: ` <tf-button [type]="type">
                Button
              </tf-button>`
});
export const DefaultGhost = () => ({
  moduleMetadata: {
      declarations
  },
  props: {
    type: ButtonType.Ghost
  },
  template: ` <tf-button [type]="type">
                Button
              </tf-button>`
});
export const DisabledBasic = () => ({
  moduleMetadata: {
      declarations
  },
  props: {
    disabled: true
  },
  template: ` <tf-button [disabled]="disabled">
                Button
              </tf-button>`
});
export const DisabledPrimary = () => ({
  moduleMetadata: {
      declarations
  },
  props: {
    type: ButtonType.Basic,
    disabled: true
  },
  template: ` <tf-button [type]="type" [disabled]="disabled">
                Button
              </tf-button>`
});
export const DisabledGhost = () => ({
  moduleMetadata: {
      declarations
  },
  props: {
    type: ButtonType.Ghost,
    disabled: true
  },
  template: ` <tf-button [type]="type" [disabled]="disabled">
                Button
              </tf-button>`
});