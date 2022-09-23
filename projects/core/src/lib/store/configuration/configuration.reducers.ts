import { createReducer, on } from '@ngrx/store';
import { IConfiguration } from './configuration.models';
import * as ConfigurationActions from './configuration.actions';

export const configurationFeatureKey = 'tfConfiguration';

export const initialState: IConfiguration = {
    logoUrl: 'https://assets-global.website-files.com/5e4d87b2291197807847f220/5e4fd127dca002ab4d52b079_Techfabric%20dark.svg'
}

export const configurationReducer = createReducer(
    initialState,
    on(ConfigurationActions.setConfiguration, (state, config) => ({
        ...state,
        ...config
    }))
);