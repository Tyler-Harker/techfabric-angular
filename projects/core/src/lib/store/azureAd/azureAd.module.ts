import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { azureAdFeatureKey, azureAdReducer } from "./azureAd.reducers";

@NgModule({
    imports: [
        StoreModule.forFeature(azureAdFeatureKey, azureAdReducer)
    ]
})
export class AzureAdModule {}