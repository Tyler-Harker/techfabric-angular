import { AccountInfo } from "@azure/msal-browser";
import { createAction, props } from "@ngrx/store";
import { MsalUser } from "./msal.state";

export const ACTION_PREFIX = '[TF-MSAL]';

export const loginPopup = createAction(`${ACTION_PREFIX} Login Popup`);
export const loginRedirect = createAction(`${ACTION_PREFIX} Login Redirect`);
export const loginSuccessful = createAction(`${ACTION_PREFIX} Login Successful`,
    props<{ user: AccountInfo}>()
);
export const loginFail = createAction(`${ACTION_PREFIX} Login Fail`,
    props<{ error: string}>()
);
export const acquireTokenSilent = createAction(`${ACTION_PREFIX} Acquire Token Silent`);
export const acquireTokenPopup = createAction(`${ACTION_PREFIX} Acquire Token Popup`);
export const logout = createAction(`${ACTION_PREFIX} Logout`);