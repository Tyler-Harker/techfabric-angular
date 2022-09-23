import { AccountInfo } from "@azure/msal-browser";

export interface MsalState {
    user: AccountInfo | null;
    error: string | null;
    loading: boolean;
    loaded: boolean;
}

export interface MsalUser { 

}