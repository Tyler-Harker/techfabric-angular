import { createReducer, on } from "@ngrx/store";
import * as TfNavigationActions from './tf-navigation.actions';
import { TfNavigationState } from "./tf-navigation.models";

export const navigationFeatureKey = 'tfNavigation';

export const initialState: TfNavigationState = {
    navigationItems: []
}

export const tfNavigationReducer = createReducer(
    initialState,
    on(TfNavigationActions.addNavigationItem, (state, item) => ({
        ...state,
        navigationItems: [...state.navigationItems, item]
    })),
    on(TfNavigationActions.removeNavigationItemByDisplayName, (state, props) => ({
        ...state,
        navigationItems: state.navigationItems.filter(i => i.displayText !== props.displayText)
    })),
    on(TfNavigationActions.setNavigationItems, (state, props) => ({
        ...state,
        navigationItems: props.navigationItems
    }))
)