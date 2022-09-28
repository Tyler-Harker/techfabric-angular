import { createAction, props } from "@ngrx/store";
import { TfSidebarDisplay, TfSidebarType } from "./tf-sidebar.models";

const ACTION_PREFIX = '[TF-Sidebar]';


export const setSidebarType = createAction(
    `${ACTION_PREFIX} Set Type`,
    props<{payload: TfSidebarType}>()
);
export const setSidebarDisplay = createAction(
    `${ACTION_PREFIX} Set Display`,
    props<{payload: TfSidebarDisplay}>()
);