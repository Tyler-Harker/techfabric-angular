import { AccountInfo, AuthenticationResult, BrowserAuthOptions } from "@azure/msal-browser";
import { createAction, props } from "@ngrx/store";

export const ACTION_PREFIX = '[TF-MSAL]';

export const loginPopup = createAction(`${ACTION_PREFIX} Login Popup`);
export const loginRedirect = createAction(`${ACTION_PREFIX} Login Redirect`);
export const loginSuccessful = createAction(`${ACTION_PREFIX} Login Successful`,
    props<{ authResult: AuthenticationResult}>()
);
export const loginFail = createAction(`${ACTION_PREFIX} Login Fail`,
    props<{ error: string}>()
);
export const acquireTokenSilent = createAction(`${ACTION_PREFIX} Acquire Token Silent`);
export const acquireTokenPopup = createAction(`${ACTION_PREFIX} Acquire Token Popup`);
export const logout = createAction(`${ACTION_PREFIX} Logout`);


export const msalAuthUpdate = createAction(`${ACTION_PREFIX} Auth Update`,
    props<BrowserAuthOptions>()
);