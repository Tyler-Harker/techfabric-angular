import { AuthenticationResult, BrowserAuthOptions } from "@azure/msal-browser";

export interface MsalState {
    authResult: AuthenticationResult | null,
    error: string | null,
    loading: boolean,
    loaded: boolean,
    authConfig: MsalAuthConfig
}

export interface MsalAuthConfig {
    tenantId: string,
    clientId: string,
    redirectUri: string
}