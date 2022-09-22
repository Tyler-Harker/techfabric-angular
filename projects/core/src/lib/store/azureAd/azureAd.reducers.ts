import { createReducer, on } from "@ngrx/store";
import { IAzureAdConfiguration } from "./azureAd.models";
import * as AzureAdActions from './azureAd.actions';

export const azureAdFeatureKey = 'azureAd';

export const initialState: IAzureAdConfiguration = {
    clientId: null,
    instanceId: null,
    tenantId: null,
    redirectUri: null
}

export const azureAdReducer = createReducer(
    initialState,
    on(AzureAdActions.setConfig, (state, config) => ({
        ...state,
        clientId: config.clientId,
        instanceId: config.instanceId,
        tenantId: config.tenantId,
        redirectUri: config.redirectUri
    }))
)