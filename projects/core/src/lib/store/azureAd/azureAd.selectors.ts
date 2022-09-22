import { createFeatureSelector } from "@ngrx/store";
import { azureAdFeatureKey } from "./azureAd.reducers";
import { AzureAdState } from "./azureAd.state";

export const selectAzureAdConfiguration = createFeatureSelector<AzureAdState>(azureAdFeatureKey);