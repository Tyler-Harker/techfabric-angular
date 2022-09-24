import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAzureAdConfiguration } from "./azureAd.models";
import { filter, map } from "rxjs";
import { MsalBroadcastService } from "@azure/msal-angular";
import { EventMessage } from "@azure/msal-browser";

@Injectable({ providedIn: 'root'})
export class MsalTransformService {
    azureAdConfig: IAzureAdConfiguration | null = null;
    private http: HttpClient | null = null;

    constructor(private backgroundService: MsalBroadcastService){
        console.log('called transform service')
    }

    init(){
        console.log('called transform service')
    }



}