// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {ButtonComponent} from './button.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ButtonType } from './button.models';

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
export const DefaultBasic = Template.bind({});
DefaultBasic.args = {
}
export const DefaultPrimary = Template.bind({});
DefaultPrimary.args = {
  type: ButtonType.Primary
}
export const DefaultGhost = Template.bind({});
DefaultGhost.args = {
  type: ButtonType.Ghost
}
export const DisabledBasic = Template.bind({});
DisabledBasic.args = {
  disabled: true
}
export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
  type: ButtonType.Primary,
  disabled: true
}
export const DisabledGhost = Template.bind({});
DisabledGhost.args = {
  type: ButtonType.Ghost,
  disabled: true
}

