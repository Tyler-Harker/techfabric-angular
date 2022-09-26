import { createFeatureSelector, createSelector } from "@ngrx/store";
import { msalConfigurationFeatureKey } from "./msal.reducers";
import { MsalState } from "./msal.state";

export const selectMsalState = createFeatureSelector<MsalState>(msalConfigurationFeatureKey);
export const getAuthResult = createSelector(
    selectMsalState,
    (state: MsalState) => state.authResult
)
export const getError = createSelector(
    selectMsalState,
    (state: MsalState) => state.error
)