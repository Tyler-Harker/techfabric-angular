import { createReducer, on } from "@ngrx/store";
import * as TfSidebarActions from './tf-sidebar.actions';
import { TfSidebarDisplay, TfSidebarState, TfSidebarType } from "./tf-sidebar.models";

export const sidebarFeatureKey = 'tfSidebar';

export const initialState: TfSidebarState = {
    type: TfSidebarType.Fixed,
    display: TfSidebarDisplay.None
}

export const tfSidebarReducer = createReducer(
    initialState,
    on(TfSidebarActions.setSidebarType, (state, action) => ({
        ...state,
        type: action.payload
    })),
    on(TfSidebarActions.setSidebarDisplay, (state, action) => ({
        ...state,
        display: action.payload
    }))
);