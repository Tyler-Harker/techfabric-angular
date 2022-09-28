export interface TfSidebarState {
    type: TfSidebarType,
    display: TfSidebarDisplay
}

export enum TfSidebarType {
    ContentAware = "ContentAware",
    Fixed = "Fixed"
}

export enum TfSidebarDisplay {
    None = "None",
    Preview = "Preview",
    Open = "Open"
}