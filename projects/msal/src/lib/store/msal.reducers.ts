import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import * as MsalActions from './msal.actions';
import { MsalState } from './msal.state';

export const msalConfigurationFeatureKey = 'tfMsal';

export const initialState: MsalState = {
    user: null,
    error: null,
    loading: false,
    loaded: false
}

export const msalReducer = createReducer(
    initialState,
    on(MsalActions.loginRedirect, (state) => ({
        ...state,
        loading: true,
        loaded: false
    })),
    on(MsalActions.loginPopup, (state) => ({
        ...state,
        loading: true,
        loaded: false
    })),
    on(MsalActions.loginSuccessful, (state, payload) => ({
        ...state,
        user: payload.user
    })),
    on(MsalActions.loginFail, (state) => ({
        ...state,
        loading: false,
        loaded: true,
        user: null
    })),
    on(MsalActions.logout, (state) => ({
        ...state,
        ...initialState
    }))
)