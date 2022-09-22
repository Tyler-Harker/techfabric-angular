import { createAction, props } from '@ngrx/store';

export const signInLegacy = createAction(
    '[SignIn Page] SignIn',
    props<{ username: string, password: string}>()
);

export const signInWithAd = createAction(
    '[SignIn Page] SignInWithMicrosoft'
)