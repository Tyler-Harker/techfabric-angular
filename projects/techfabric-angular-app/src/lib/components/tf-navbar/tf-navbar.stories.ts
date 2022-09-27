// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { provideMockStore } from '@ngrx/store/testing';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { TfNavbarComponent } from './tf-navbar.component';

import { configurationFeatureKey, initialState as configInitialState } from '../../store/tf-config/tf-config.reducers'
import { navigationFeatureKey, initialState as navigationInitialState } from '../../store/tf-navigation/tf-navigation.reducers';
import { TfNavigationItem, TfNavigationItemType } from '../../store/tf-navigation/tf-navigation.models';


let declarations: any[] = [];

const initialState: any = {
};
initialState[configurationFeatureKey] = configInitialState;
initialState[navigationFeatureKey] = navigationInitialState;
initialState[navigationFeatureKey].navigationItems = [
    <TfNavigationItem>{ displayText: 'Home', navigationItemType: TfNavigationItemType.Navbar }
]

console.log(initialState)

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'App/Components/Navbar',
  component: TfNavbarComponent,
  
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations,
      providers: [
        provideMockStore({ initialState })
      ],
      imports: [FontAwesomeModule, FormsModule, StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production
      })],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TfNavbarComponent> = (args: TfNavbarComponent) => ({
  props: args,
});


export const Default = () => ({
    moduleMetadata: {
        declarations,
    },
    props: {
    },
    template: ` 
                <tf-navbar>
                </tf-navbar>`,
})
Default.parameters = {
    layout: 'fullscreen'
}