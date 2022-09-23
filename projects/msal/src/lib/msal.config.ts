import { InjectionToken } from "@angular/core";

export interface AdConfigWrapper {
    azureAd: AdConfig
}
export interface AdConfig {
    redirectUrl: string,
    clientId: string,
    tenantId: string
}


export const MSAL_CONFIG_TOKEN = new InjectionToken<AdConfig>('TF_MSAL_CONFIG');

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