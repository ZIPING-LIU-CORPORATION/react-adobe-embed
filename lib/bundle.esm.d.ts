import React from 'react';

type PreviewFileConfig = {
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
type ReactHooks = {
    [key in (Extract<keyof typeof React, `use${string}`>)]: [
    ] extends Parameters<typeof React[key]> ? never : key extends 'useReducer' ? never : key extends 'useDeferredValue' ? never : typeof React[key] extends (factory: React.EffectCallback, deps?: React.DependencyList | undefined) => void ? key : typeof React[key] extends (factory: () => any, deps: React.DependencyList | undefined) => void ? key : never;
}[Extract<keyof typeof React, `use${string}`>];
/**
 * @description - props for ReactViewAdobe component which is a wrapper around Adobe PDF Viewer SDK
 * @param useReactHookWhenLoadingAdobeAPI - provides customizability in specifying a certain type of React Hook to use when loading the Adobe Embed API SDK into the DOM
 * @param useReactHookWhenCallingAdobeAPI - provides customizability in specifying a certain type of React Hook to use when calling the Adobe Embed API Services
 * @param useReactHookForAdobeAPIConfigs - provides customizability in specifying a certain type of React Hook to use for creating parameters or inputs required by Adobe Embed API Services
 * @param triggerAdobeDCViewRender - when true, a call to Adobe Embed API Services is made that also ensures that a React Render is triggered in tandem. This is particularly useful when using Adobe Embed API Services in a Lightbox mode, in which
 * expects that by default, the PDF is only rendered after a form of trigger or user interaction. E.g., for instance, if there is a button that is clicked which then toggles a React
 * state variable, passing this variable here will allow for the button to hence trigger rendering of the Lightbox mode PDF.
 */
type ReactViewAdobeProps = {
    id?: string;
    useReactHookWhenLoadingAdobeAPI?: ReactHooks;
    useReactHookWhenCallingAdobeAPI?: ReactHooks;
    useReactHookForAdobeAPIConfigs?: ReactHooks;
    triggerAdobeDCViewRender?: boolean;
    className?: string;
    title?: string;
    style?: React.CSSProperties;
    previewConfig?: Partial<PreviewFileConfig>;
    url: string;
    clientId: string;
    fileMeta?: {
        [key: string | "fileName" | "id"]: any;
    };
    headers?: {
        key: string;
        value: string;
    }[];
    debug?: boolean;
};
/**
 * @description - ReactViewAdobe component which is a wrapper around Adobe PDF Viewer SDK that allows for
 * rendering PDFs via Adobe's PDF Engine. Ensures that Adobe Embed API Services are
 * compartmentalized and fully encapsulated and configured within a rendered page. Not sure why Adobe
 * Embed API does not inherently do this. See ReactViewAdobeProps for more details.
 */
declare function ReactViewAdobe(props: ReactViewAdobeProps): React.JSX.Element;

export { PreviewFileConfig, ReactHooks, ReactViewAdobeProps, ReactViewAdobe as default };
