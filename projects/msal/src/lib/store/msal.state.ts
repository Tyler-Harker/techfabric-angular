import { AccountInfo, AuthenticationResult } from "@azure/msal-browser";

export interface MsalState {
    authResult: AuthenticationResult | null;
    error: string | null;
    loading: boolean;
    loaded: boolean;
}