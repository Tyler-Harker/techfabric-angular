import { createReducer, on} from '@ngrx/store'
import { SignInPageState } from './signInPage.state'
import * as SignInPageActions from './signInPage.actions'

export const signInPageFeatureKey = 'signInPage';

export const initialState: SignInPageState = {
    showLegacySignIn: true,
    showMicrosoftSignIn: true,
    username: '',
    password: ''
}

export const signInPageReducer = createReducer(
    initialState,
)