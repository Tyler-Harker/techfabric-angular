import { InjectionToken } from "@angular/core";

export interface AdConfig {
    azureAd: {
        redirectUrl: string,
        clientId: string,
        tenantId: string
    }
}


export const MSAL_CONFIG_TOKEN = new InjectionToken<Object>('tf-msal-config');

// export const MSAL_CONFIG = {
//     redirectUrl: env.azureAd.redirectUrl,
//     clientId: env.azureAd.clientId,
//     tenantId: env.azureAd.tenantId
// }

// export const MsalConfigProvider = [
//     {
//         provide: MSAL_CONFIG_TOKEN,
//         useValue: MSAL_CONFIG
//     }
// ];