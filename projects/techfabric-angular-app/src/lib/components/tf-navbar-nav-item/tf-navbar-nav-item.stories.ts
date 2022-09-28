// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {TfNavbarNavItemComponent} from './tf-navbar-nav-item.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TfNavigationItem } from '../../store/tf-navigation/tf-navigation.models';

let declarations: any[] = [];

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'App/Components/Navbar/NavItem',
  component: TfNavbarNavItemComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [],
      imports: [FontAwesomeModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TfNavbarNavItemComponent> = (args: TfNavbarNavItemComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
    model: <TfNavigationItem>{
        displayText: 'Home'
    }    
}

export const WithChildren = Template.bind({});
WithChildren.args = {
    model: <TfNavigationItem>{
        displayText: 'Menu',
        childNavigationItems: [
            <TfNavigationItem>{
                displayText: 'Child 1'
            },
            <TfNavigationItem>{
              displayText: 'Child 2'
            }
        ]
    }
}



// export const DefaultBasic = () => ({
//   moduleMetadata: {
//       declarations
//   },
//   props: {
//     model: <TfNavigationItem>{
//         displayText: 'Home'
//     }
//   },
//   template: ` <tf-navItem>
//               </tf-navItem>`
// });