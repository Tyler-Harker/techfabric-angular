// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { provideMockStore } from '@ngrx/store/testing';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { TfSidebarComponent } from './tf-sidebar.component';

import { configurationFeatureKey, initialState as configInitialState } from '../../store/tf-config/tf-config.reducers'
import { navigationFeatureKey, initialState as navigationInitialState } from '../../store/tf-navigation/tf-navigation.reducers';
import { TfNavigationItem, TfNavigationItemType } from '../../store/tf-navigation/tf-navigation.models';
import { TfNavbarNavItemComponent } from '../tf-navbar-nav-item/tf-navbar-nav-item.component';
import { sidebarFeatureKey, initialState as sidebarInitialState } from '../../store/tf-sidebar/tf-sidebar.reducers';
import { TfSidebarDisplay, TfSidebarState, TfSidebarType } from '../../store/tf-sidebar/tf-sidebar.models';
import { EffectsModule } from '@ngrx/effects';
import { TechfabricAngularAppModule } from '../../techfabric-angular-app.module';


let declarations: any[] = [ TfNavbarNavItemComponent ];

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
];
initialState[sidebarFeatureKey] = sidebarInitialState;

console.log(initialState)

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'App/Components/Sidebar',
  component: TfSidebarComponent,
  
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
        declarations,
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TfSidebarComponent> = (args: TfSidebarComponent) => ({
  props: args,
});



let defaultSidebarState = <any>{}
defaultSidebarState[sidebarFeatureKey] = sidebarInitialState;
defaultSidebarState[configurationFeatureKey] = configInitialState;
defaultSidebarState[navigationFeatureKey] = navigationInitialState;
defaultSidebarState[navigationFeatureKey].navigationItems = [
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
];

export const Default = () => ({
    moduleMetadata: {
        declarations,
        imports: [
        ],
        providers: [
            provideMockStore({initialState: defaultSidebarState})
        ]
    },
    props: {
    },
    template: ` 
        <div style="height: 100vh">
            <tf-sidebar>
            </tf-sidebar>
        </div>`,
})
Default.parameters = {
    layout: 'fullscreen',
}

let contentAwareDisplayNoneState = <any>{}
contentAwareDisplayNoneState[sidebarFeatureKey] = <TfSidebarState>{
    type: TfSidebarType.ContentAware,
    display: TfSidebarDisplay.None
};
export const ContentAwareDisplayNone = () => ({
    moduleMetadata: {
        declarations,
        providers: [
            provideMockStore({initialState: contentAwareDisplayNoneState})
        ]
    },
    props: {
    },
    template: ` 
        <div style="height: 100vh">
            <tf-sidebar>
            </tf-sidebar>
        </div>`,
})
ContentAwareDisplayNone.parameters = {
    layout: 'fullscreen',
}

let contentAwareDisplayPreviewState = <any>{}
contentAwareDisplayPreviewState[sidebarFeatureKey] = <TfSidebarState>{
    type: TfSidebarType.ContentAware,
    display: TfSidebarDisplay.Preview
};
export const ContentAwareDisplayPreview = () => ({
    moduleMetadata: {
        declarations,
        providers: [
            provideMockStore({initialState: contentAwareDisplayPreviewState})
        ]
    },
    props: {
    },
    template: ` 
        <div style="height: 100vh">
            <tf-sidebar>
            </tf-sidebar>
        </div>`,
})
ContentAwareDisplayPreview.parameters = {
    layout: 'fullscreen',
}


let contentAwareDisplayOpenState = <any>{}
contentAwareDisplayOpenState[sidebarFeatureKey] = <TfSidebarState>{
    type: TfSidebarType.ContentAware,
    display: TfSidebarDisplay.Open
};
export const ContentAwareDisplayOpen = () => ({
    moduleMetadata: {
        declarations,
        providers: [
            provideMockStore({initialState: contentAwareDisplayOpenState})
        ]
    },
    props: {
    },
    template: ` 
        <div style="height: 100vh">
            <tf-sidebar>
            </tf-sidebar>
        </div>`,
})
ContentAwareDisplayOpen.parameters = {
    layout: 'fullscreen',
}