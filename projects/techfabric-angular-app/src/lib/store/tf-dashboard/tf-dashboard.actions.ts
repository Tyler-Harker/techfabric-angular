import { createAction, props } from '@ngrx/store';
import { TfDashboardType } from './tf-dashboard.models';
import { TfDashboardState } from './tf-dashboard.models';
const ACTION_PREFIX = '[Tf-Dashboard]';

export const setDashboardState = createAction(
    `${ACTION_PREFIX} Set Dashboard State`,
    props<{payload: TfDashboardState }>()
)
export const toggleSidebarDisplay = createAction(`${ACTION_PREFIX} Toggle Sidebar Display`);
export const setDashboardType = createAction(`${ACTION_PREFIX} Set Dashboard Type`,
    props<{payload: TfDashboardType}>()
)