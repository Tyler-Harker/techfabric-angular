import { AccountInfo, AuthenticationResult } from "@azure/msal-browser";
import { AdConfig } from "msal";

export interface MsalState {
    config: AdConfig | null;
    authResult: AuthenticationResult | null;
    error: string | null;
    loading: boolean;
    loaded: boolean;
}