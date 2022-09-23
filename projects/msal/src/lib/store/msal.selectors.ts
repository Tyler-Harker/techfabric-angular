import { createFeatureSelector, createSelector } from "@ngrx/store";
import { msalConfigurationFeatureKey } from "./msal.reducers";
import { MsalState } from "./msal.state";

export const selectMsalState = createFeatureSelector<MsalState>(msalConfigurationFeatureKey);
export const getUser = createSelector(
    selectMsalState,
    (state: MsalState) => state.user
)
export const getError = createSelector(
    selectMsalState,
    (state: MsalState) => state.error
)