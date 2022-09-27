import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TfConfigState } from './tf-config.models';
import { configurationFeatureKey } from './tf-config.reducers';

export const selectTfConfig = createFeatureSelector<TfConfigState>(configurationFeatureKey);

export const selectLogoUrl = createSelector(
    selectTfConfig,
    (state: TfConfigState) => state.logoUrl
);