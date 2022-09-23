import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IConfiguration } from './configuration.models';
import { configurationFeatureKey } from './configuration.reducers';
import { ConfigurationState } from './configuration.state';

export const selectConfigurationState = createFeatureSelector<IConfiguration>(configurationFeatureKey);

export const selectLogoUrl = createSelector(
    selectConfigurationState,
    (state: IConfiguration) => state.logoUrl
);
