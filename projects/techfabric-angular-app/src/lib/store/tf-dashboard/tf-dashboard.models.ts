export interface TfDashboardState {
    type: TfDashboardType;
    isSidebarOpen: boolean;
}

export enum TfDashboardType {
    OpenAndClose = 'OpenAndClose',
    OpenAndPreview = 'OpenAndPreview'
}