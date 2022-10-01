// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { provideMockStore } from '@ngrx/store/testing';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { TfFooterComponent } from './tf-footer.component';

import { configurationFeatureKey, initialState as configInitialState } from '../../store/tf-config/tf-config.reducers'
import { navigationFeatureKey, initialState as navigationInitialState } from '../../store/tf-navigation/tf-navigation.reducers';
import { TfNavigationItem, TfNavigationItemType } from '../../store/tf-navigation/tf-navigation.models';
import { TfNavbarNavItemComponent } from '../tf-navbar-nav-item/tf-navbar-nav-item.component';
import { StorybookUtilityService } from '../../utilities/storybook-utility.service';
import { TechfabricAngularAppModule } from '../../techfabric-angular-app.module';


let declarations: any[] = [ ];

const initialState: any = {
};
initialState[configurationFeatureKey] = configInitialState;
initialState[navigationFeatureKey] = navigationInitialState;
initialState[navigationFeatureKey].navigationItems = [
    <TfNavigationItem>{ 
        displayText: 'Menu', 
        navigationItemType: TfNavigationItemType.Navbar, 
        childNavigationItems: [ 
            <TfNavigationItem>{displayText: 'option 1'},
            <TfNavigationItem>{displayText: 'option 2'}
        ] 
    },
    <TfNavigationItem>{ 
        displayText: 'Menu2', 
        navigationItemType: TfNavigationItemType.Navbar, 
        childNavigationItems: [ 
            <TfNavigationItem>{displayText: 'option 1'},
            <TfNavigationItem>{displayText: 'option 2'}
        ] 
    }
]

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'App/Components/Footer',
  component: TfFooterComponent,
  
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations,
      providers: [
        StorybookUtilityService
      ],
      imports: [
        FontAwesomeModule, 
        FormsModule,
        StoreModule.forRoot({}),
        TechfabricAngularAppModule,
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production
        })
      ],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TfFooterComponent> = (args: TfFooterComponent) => ({
  props: args,
});


export const Default = () => ({
    moduleMetadata: {
        declarations,
    },
    props: {
    },
})
Default.parameters = {
    layout: 'fullscreen'
}
