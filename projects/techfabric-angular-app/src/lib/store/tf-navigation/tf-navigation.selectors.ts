import { createSelector, createFeatureSelector } from "@ngrx/store";
import { TfNavigationItem, TfNavigationItemType, TfNavigationState } from "./tf-navigation.models";
import { navigationFeatureKey } from "./tf-navigation.reducers";

export const getTfNavigationState = createFeatureSelector<TfNavigationState>(navigationFeatureKey);

export const getTfNavigationItems = createSelector(
    getTfNavigationState, 
    (state: TfNavigationState) => state.navigationItems
);

export const getNavbarNavigationItems = createSelector(
    getTfNavigationState,
    (state: TfNavigationState) => state.navigationItems.filter(n => n.navigationItemType === TfNavigationItemType.Navbar || n.navigationItemType === TfNavigationItemType.NavbarAndSidebar)
);

export const getSidebarNavigationItems = createSelector(
    getTfNavigationState,
    (state: TfNavigationState) => state.navigationItems.filter(n => n.navigationItemType === TfNavigationItemType.Sidebar || n.navigationItemType === TfNavigationItemType.NavbarAndSidebar)
)