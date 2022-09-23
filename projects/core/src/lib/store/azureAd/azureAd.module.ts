import { NgModule, InjectionToken, APP_INITIALIZER } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { azureAdFeatureKey, azureAdReducer } from "./azureAd.reducers";
import { MsalModule, MSAL_INSTANCE, MSAL_BROADCAST_CONFIG, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG, MsalService } from "@azure/msal-angular";
import { AzureAdConfigurationService } from "./azureAdConfigurationService";
import { Configuration, InteractionType, PublicClientApplication } from "@azure/msal-browser";
import { AzureAdEffects, MsalServiceCustom } from "./azureAd.effects";
import { EffectsModule } from "@ngrx/effects";
import { MsalNgrxModule } from "projects/msal/src/lib/msal.module";



const IDENTITY_SERVICE_URL = new InjectionToken<string>('IDENTITY_SERVICE_URL');


export function msalConfigFactory(azureAdConfigService: AzureAdConfigurationService) : any{

}

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
    providers: [
        MsalServiceCustom,
    ],
    imports: [  
        StoreModule.forFeature(azureAdFeatureKey, azureAdReducer),
        EffectsModule.forFeature([AzureAdEffects]),
        MsalNgrxModule
    ]
})
export class AzureAdModule {
    static forRoot(identityServiceUrl: string){
        return {
            ngModule: AzureAdModule,
            providers: [
                AzureAdConfigurationService,
                { provide: IDENTITY_SERVICE_URL, useValue: identityServiceUrl},
                { provide: APP_INITIALIZER, useFactory: (azureAdConfigService: AzureAdConfigurationService) => azureAdConfigService.init(identityServiceUrl), deps: [AzureAdConfigurationService, IDENTITY_SERVICE_URL]},
                {
                    provide: MSAL_INSTANCE,
                    useValue: new PublicClientApplication({
                        auth: {
                          clientId: 'fdc8b9bc-0bd2-4fae-b7b3-7d05b7596de0',
                          authority: 'https://login.microsoftonline.com/a4aa9f35-9917-4518-b764-5fbbb893a6cd',
                          redirectUri: 'http://localhost:4200'
                        },
                        cache: {
                          cacheLocation: 'localStorage',
                          storeAuthStateInCookie: isIE
                        }
                      })
                },
                {
                    provide: MSAL_GUARD_CONFIG,
                    useValue: {
                        interactionType: InteractionType.Redirect, 
                        authRequest: {
                          scopes: ['user.read']
                        }
                      }
                },
                {
                    provide: MSAL_INTERCEPTOR_CONFIG,
                    useValue: {
                        interactionType: InteractionType.Redirect,
                        protectedResourceMap: new Map([
                          ['Enter_the_graph_endpoint_Here/v1.0/me', ['user.read']]
                        ])
                      }
                },
                MsalService
            ],
        }
    }
}