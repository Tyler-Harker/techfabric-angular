import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TfSidebarState } from "./tf-sidebar.models";
import { sidebarFeatureKey } from "./tf-sidebar.reducers";


export const selectSidebarState = createFeatureSelector<TfSidebarState>(sidebarFeatureKey);