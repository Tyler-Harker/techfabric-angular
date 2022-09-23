import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { signInPageFeatureKey, signInPageReducer } from "./signInPage.reducers";

@NgModule({
    providers: [],
    imports: [
        StoreModule.forFeature(signInPageFeatureKey, signInPageReducer)
    ]
})
export class SignInPageModule {
    
}