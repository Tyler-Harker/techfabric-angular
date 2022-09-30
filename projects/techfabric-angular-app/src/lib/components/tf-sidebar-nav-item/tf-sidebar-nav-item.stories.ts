// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { provideMockStore } from '@ngrx/store/testing';

import { INITIAL_STATE, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { TfSidebarNavItemComponent } from './tf-sidebar-nav-item.component';

import { TfNavigationItem, TfNavigationItemType } from '../../store/tf-navigation/tf-navigation.models';
import { TfNavbarNavItemComponent } from '../tf-navbar-nav-item/tf-navbar-nav-item.component';
import { TechfabricAngularControlsModule } from 'projects/techfabric-angular-controls/src/public-api';
import { faHome } from '@fortawesome/free-solid-svg-icons';


let declarations: any[] = [ TfSidebarNavItemComponent ];

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'App/Components/Sidebar/NavItem',
  component: TfSidebarNavItemComponent,
  
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
    model:  <TfNavigationItem>{
        displayText: 'Unauthorized', 
        childNavigationItems: <TfNavigationItem[]>[
            {
                displayText: 'Home',
                path: '/',
                displayIcon: faHome
            },
            {
                displayText: 'option 2'
            }
        ]
    }
};

