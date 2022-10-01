import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, switchMap, tap, withLatestFrom } from "rxjs";
import * as TfDashboardActions from './tf-dashboard.actions';
import * as TfSidebarActions from '../tf-sidebar/tf-sidebar.actions';
import { TfDashboardType } from "./tf-dashboard.models";
import { selectTfDashboardState } from "./tf-dashboard.selectors";
import { TfSidebarDisplay } from "../tf-sidebar/tf-sidebar.models";


@Injectable()
export class TfDasbhoardEffects{
    constructor(
        private actions$: Actions,
        private store: Store
    ){}

    toggleSidebar$ = createEffect(() => this.actions$.pipe(
        ofType(TfDashboardActions.toggleSidebarDisplay.type),
        concatLatestFrom(action => this.store.select(selectTfDashboardState)),
        tap(([action, dashboardState]) => {
            let newSidebarDisplay = TfSidebarDisplay.None;
            switch(dashboardState.type){
                case TfDashboardType.OpenAndClose:
                    newSidebarDisplay = dashboardState.isSidebarOpen ? TfSidebarDisplay.None : TfSidebarDisplay.Open;
                    break;
                case TfDashboardType.OpenAndPreview:
                    newSidebarDisplay = dashboardState.isSidebarOpen ? TfSidebarDisplay.Preview : TfSidebarDisplay.Open;
                    break;
            }
            this.store.dispatch(TfSidebarActions.setSidebarDisplay({payload: newSidebarDisplay}));
        })
    ), {dispatch: false})
}