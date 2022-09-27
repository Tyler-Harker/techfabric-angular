export interface TfNavigationState {
    navigationItems: TfNavigationItem[];
}

export interface TfNavigationItem {
    displayIcon: any | null;
    displayText: string;
    routeToPath: string | null;
    childNavigationItems: TfNavigationItem[];
    navigationItemType: TfNavigationItemType;
}

export enum TfNavigationItemType {
    Navbar,
    Sidebar,
    NavbarAndSidebar
}