import { createReducer, on } from "@ngrx/store";
import * as TfConfigActions from './tf-config.actions';
import { TfConfigState } from "./tf-config.models";

export const configurationFeatureKey = 'tfConfig';

export const initialState: TfConfigState = {
    logoUrl: 'https://assets-global.website-files.com/5e4d87b2291197807847f220/5e4fd127dca002ab4d52b079_Techfabric%20dark.svg'
}

export const tfConfigReducer = createReducer(
    initialState,
    on(TfConfigActions.setConfig, (state, props) => {
        console.log('state', state)
        return {
            ...state,
            ...props
        };
        
    })
)