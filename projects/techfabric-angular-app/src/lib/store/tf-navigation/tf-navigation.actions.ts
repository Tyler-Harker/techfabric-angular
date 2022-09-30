import { createAction, props } from "@ngrx/store";
import { TfNavigationItem } from "./tf-navigation.models";

const ACTION_PREFIX = '[TF-Navigation]';

export const setNavigationItems = createAction(`${ACTION_PREFIX} Set Navigation Items`,
    props<{ navigationItems: TfNavigationItem[]}>()
)

export const addNavigationItem = createAction(`${ACTION_PREFIX} Add Navigation Item`,
    props<TfNavigationItem>()
);

export const removeNavigationItemByDisplayName = createAction(`${ACTION_PREFIX} Remove Navigation Item By Name`,
    props<{ displayText: string }>()
);