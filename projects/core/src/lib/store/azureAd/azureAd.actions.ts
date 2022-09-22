import { createAction, props } from '@ngrx/store';
import { IAzureAdConfiguration } from './azureAd.models';

export const setConfig = createAction('[AzureAd] setConfig',
    props<IAzureAdConfiguration>()
)