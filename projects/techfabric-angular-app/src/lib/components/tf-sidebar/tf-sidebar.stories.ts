// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { TfSidebarComponent } from './tf-sidebar.component';

import { TfNavigationItem, TfNavigationItemType } from '../../store/tf-navigation/tf-navigation.models';
import { TfSidebarDisplay, TfSidebarState, TfSidebarType } from '../../store/tf-sidebar/tf-sidebar.models';
import { TechfabricAngularControlsModule } from 'projects/techfabric-angular-controls/src/public-api';
import { TfSidebarNavItemComponent } from '../tf-sidebar-nav-item/tf-sidebar-nav-item.component';
import { faHome, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


let declarations: any[] = [ TfSidebarNavItemComponent];


let navigationItems1 = <TfNavigationItem[]>[
    { 
        displayText: 'Unauthorized',
        childNavigationItems: <TfNavigationItem[]>[
            {
                displayText: 'Home',
                displayIcon: faHome,
                path: '/'
            },
            {
                displayText: 'Sign In',
                displayIcon: faKey,
                path: '/signIn'
            }
        ]
    }
]


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'App/Components/Sidebar',
  component: TfSidebarComponent,
  
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
        declarations,
        imports: [
            TechfabricAngularControlsModule,
            FontAwesomeModule
        ]
    })
  ],
  parameters: {
    layout: 'fullscreen'
  }
  
} as Meta;

const Template: Story = (args) => ({
    props: args,
})


export const Default = Template.bind({});
Default.args = {
    type: TfSidebarType.ContentAware,
    display: TfSidebarDisplay.Open,
    navigationItems: navigationItems1
};

