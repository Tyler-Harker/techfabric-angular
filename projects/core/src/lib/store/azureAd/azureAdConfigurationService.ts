import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAzureAdConfiguration } from "./azureAd.models";
import { map } from "rxjs";

@Injectable({ providedIn: 'root'})
export class AzureAdConfigurationService {
    azureAdConfig: IAzureAdConfiguration | null = null;
    private http: HttpClient | null = null;

    constructor(private readonly httpHandler: HttpBackend){
        this.http = new HttpClient(httpHandler);
    }

    init(endpoint: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.http?.get(endpoint).pipe(map(res => res))
            .subscribe(value => {
                this.azureAdConfig = <IAzureAdConfiguration>value;
                resolve(true);
            },
            (error) => {
                reject(error);
            })
        });
    }



}