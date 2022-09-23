import { createFeatureSelector } from '@ngrx/store';
import { signInPageFeatureKey } from "./signInPage.reducers";
import { SignInPageState } from './signInPage.state';

export const selectSignInPageConfiguration = createFeatureSelector<SignInPageState>(signInPageFeatureKey);