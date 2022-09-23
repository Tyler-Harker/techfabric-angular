import { createAction, props } from '@ngrx/store';
import { IConfiguration } from './configuration.models';

export const setConfiguration = createAction('[Configuration] setConfiguration',
    props<IConfiguration>()
)