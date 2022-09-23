import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { configurationFeatureKey, configurationReducer } from "./configuration.reducers";

@NgModule({
    providers: [],
    imports: [
        StoreModule.forFeature(configurationFeatureKey, configurationReducer)
    ]
})
export class ConfigurationModule {
    static forRoot(){
        return {
            ngModule: ConfigurationModule,
            providers: [
            ]
        }
    }
    
}