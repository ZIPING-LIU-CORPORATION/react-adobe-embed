import React, { Dispatch } from "react";
export type PreviewFileConfig = {
    showZoomControl: boolean;
    showAnnotationTools: boolean;
    showFullScreen: boolean;
    /**
       * This variable takes a string value of "FIT_WIDTH", "FIT_PAGE", "TWO_COLUMN" or "TWO_COLUMN_FIT_PAGE".
          1. FIT_WIDTH: Expands the page horizontally to the full width of the document pane.
          2. FIT_PAGE: Displays the entire page in the current view pane.
          3. TWO_COLUMN: Displays two pages of the PDF side by side in the current view pane.
          4. TWO_COLUMN_FIT_PAGE: Displays two pages of the PDF side by side where the entire two pages are displayed in
          the current view pane. Note that end users can also toggle the view mode via the Fit Width, Fit Page
          or Two-Column button on the right-hand panel.
  
          In addition to these, there are two other view modes which are supported only in mobile browsers:
          1. CONTINUOUS: This mode displays all the document pages one after the other and users can easily navigate through the pages by scrolling up or down.
          2. SINGLE_PAGE: This mode displays only a single document page at a time and doesn’t show any adjoining page.
          Users can use the swipe gesture to navigate to other pages which will be displayed one at a time.
       */
    defaultViewMode: "FIT_WIDTH" | "FIT_PAGE" | "TWO_COLUMN" | "TWO_COLUMN_FIT_PAGE" | "CONTINUOUS" | "SINGLE_PAGE";
    enableFormFilling: boolean;
    showDownloadPDF: boolean;
    showPrintPDF: boolean;
    showLeftHandPanel: boolean;
    showPageControls: boolean;
    /**
     * The top bar in lightbox embed mode contains the close button by default to
     * close the PDF preview which can be configured to Back button by setting exitPDFViewerType to "RETURN".
     */
    exitPDFViewerType: "CLOSE" | "BACK";
    showThumbnails: boolean;
    showBookmarks: boolean;
    /**
     * Set this to true to enable PDF linearization. For more details, see the section PDF linearization.
     */
    enableLinearization: boolean;
    /**
     * Set this to true to add, update and delete PDF annotations programmatically in full window embed mode.
     * For more details, see the section Annotations API overview.
     * https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/howtos_comments/#annotations-api-overview
     */
    enableAnnotationAPIs: boolean;
    /** Leave blank for default as FULL WINDOW MODE
     * https://documentservices.adobe.com/view-sdk-demo/index.html#/view/FULL_WINDOW/Bodea%20Brochure.pdf
     */
    embedMode: "LIGHT_BOX" | "SIZED_CONTAINER" | "IN_LINE" | string;
    enableSearchAPIs: boolean;
    showDisabledSaveButton: boolean;
    /**
     * With this configuration, website developers have the flexibility to control if the
     * PDF should take focus when it is rendered. For more details, see the section Focus on PDF rendering.
     */
    focusOnRendering: any;
};
export declare function previewFile({ divId, viewerConfig, url, clientID, _fileMeta, _dcView, }: {
    divId: string;
    viewerConfig: Partial<PreviewFileConfig>;
    url: string;
    clientID: string;
    _dcView?: any;
    _fileMeta?: {
        [key: string | "fileName" | "id"]: any;
    };
}): any;
export declare const ReactViewAdobe: (props: {
    id?: string | undefined;
    setDcViewer?: React.Dispatch<any> | undefined;
    className?: string | undefined;
    title?: string | undefined;
    style?: React.CSSProperties | undefined;
    previewConfig?: Partial<PreviewFileConfig> | undefined;
    url: string;
    clientId: string;
    fileMeta?: {
        [key: string]: any;
    } | undefined;
}) => JSX.Element;
export declare function AdobeViewerGlobalExists(window: Window): boolean;
