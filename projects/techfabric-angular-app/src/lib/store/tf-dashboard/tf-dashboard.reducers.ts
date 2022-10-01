import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import * as TfDashboardActions from './tf-dashboard.actions';
import { TfDashboardState, TfDashboardType } from "./tf-dashboard.models";

export const initialState = <TfDashboardState>{
    type: TfDashboardType.OpenAndPreview
}

export const dashboardFeatureKey = 'tfDashboard';

export const tfDashboardReducer = createReducer(
    initialState,
    on(TfDashboardActions.toggleSidebarDisplay, (state) => ({
        ...state,
        isSidebarOpen: !state.isSidebarOpen
    })),
    on(TfDashboardActions.setDashboardType, (state, {payload}) => ({
        ...state,
        type: payload
    })),
    on(TfDashboardActions.setDashboardState, (state, {payload}) => ({
        ...state,
        ...payload
    }))
)