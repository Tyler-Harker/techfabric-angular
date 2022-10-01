import { Injectable, InjectionToken } from "@angular/core";
import { Store } from "@ngrx/store";


@Injectable()
export class StorybookUtilityService {
    private isInitiated: boolean = false;

    constructor(private store: Store){
        
    }
    initWrapper(action: Function){
        if(!this.isInitiated){
            this.isInitiated = true;
            action();
        }
    }
}