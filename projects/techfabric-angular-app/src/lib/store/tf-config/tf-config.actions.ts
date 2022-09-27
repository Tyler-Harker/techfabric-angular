import { createAction, props } from '@ngrx/store';
import { TfConfigState } from './tf-config.models';

const ACTION_PREFIX = 'tfConfig';

export const setConfig = createAction(
    `${ACTION_PREFIX} Set Config`,
    props<TfConfigState>()
);