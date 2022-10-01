import { createSelector, createFeatureSelector } from "@ngrx/store";
import { TfDashboardState } from "./tf-dashboard.models";
import { dashboardFeatureKey } from "./tf-dashboard.reducers";

export const selectTfDashboardState = createFeatureSelector<TfDashboardState>(dashboardFeatureKey);



