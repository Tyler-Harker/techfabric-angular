import { createAction, props } from '@ngrx/store';
import { IAzureAdConfiguration } from './azureAd.models';

export const setConfig = createAction('[AzureAd] setConfig',
    props<IAzureAdConfiguration>()
);

export const signInSuccess = createAction('[AzureAd] signInSuccess',
    props<any>()
)

export const SIGN_IN: string = '[AzureAd] signIn';