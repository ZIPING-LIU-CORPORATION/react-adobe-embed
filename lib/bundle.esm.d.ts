import React from 'react';

/**
 * @description - props for ReactViewAdobe component which is a wrapper around Adobe PDF Viewer SDK
 * @param useReactHookWhenLoadingAdobeAPI - provides customizability in specifying a certain type of React Hook to use when loading the Adobe Embed API SDK into the DOM
 * @param useReactHookWhenCallingAdobeAPI - provides customizability in specifying a certain type of React Hook to use when calling the Adobe Embed API Services
 * @param useReactHookForAdobeAPIConfigs - provides customizability in specifying a certain type of React Hook to use for creating parameters or inputs required by Adobe Embed API Services
 * @param useReactHookForComponentDidUpdate - provides customizability in specifying a certain type of React Hook to use for listening to component updates, to allow for complex nested rerender trigger/chaining
 * @param triggerAdobeDCViewRender - when true, a call to Adobe Embed API Services is made that also ensures that a React Render is triggered in tandem. This is particularly useful when using Adobe Embed API Services in a Lightbox mode, in which
 * expects that by default, the PDF is only rendered after a form of trigger or user interaction. E.g., for instance, if there is a button that is clicked which then toggles a React
 * state variable, passing this variable here will allow for the button to hence trigger rendering of the Lightbox mode PDF.
 */
type ReactViewAdobeProps = {
    /**
     * The URL string of a PDF to be rendered.
     * @example
     * const url = "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf";
     */
    url: string;
    /**
     * Required Access Token for using Adobe's Embed SDK and API Services. Obtaining clientId's are done [here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-embed-api)
     *  - By default you a allowed to create up to 20 clientId's for free. A clientId is tied to a specific domain that you specify when creating the clientId.
     *  - Domains can be for example, `www.example.com` as well as `localhost` for development purposes.
     *  - Failing to provide a clientId will result in the PDF briefily rendering at first but then disappearing after Adobe detects that the clientId is invalid.
     *  - You may use this clientID `324caa2a91b84f688935436cd2d25217` which is configured for the domain `localhost`. Note that this means the domain only works on `localhost` as port 80 or 443, e.g. http://localhost:3000 will not work but http://localhost:80 will work.
     *
     * Visit [Adobe's credential creation page](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-embed-api) to create a clientId, as seen below.
     * ![](https://ziping.org/wp-content/uploads/2024/06/Screenshot-2024-06-06-at-4.07.57%E2%80%AFAM.png)
     */
    clientId: string;
    /**
     * Configuration options for the Adobe Embed API SDK Viewer.
     * - See the type definition for `PreviewFileConfig` for more details and descriptions of each configuration option.
     */
    previewConfig?: Partial<PreviewFileConfig>;
    fileMeta?: Partial<FileMetaData>;
    id?: string;
    children?: React.ReactNode;
    className?: string;
    title?: string;
    style?: React.CSSProperties;
    debug?: boolean;
    /**
     * Experimental usages only, and not needed or recommended to be used.
     */
    useReactHookWhenLoadingAdobeAPI?: ReactHooks;
    /**
     * Experimental usages only, and not needed or recommended to be used. Allows you to specify a certain type of React Hook to use when calling the Adobe Embed API Services.
     */
    useReactHookWhenCallingAdobeAPI?: ReactHooks;
    /**
     * Experimental usages only, and not needed or recommended to be used. Allows you to specify a certain type of React Hook to use for creating parameters or inputs required by Adobe Embed API Services.
     */
    useReactHookForAdobeAPIConfigs?: ReactHooks;
    /**
     * Experimental usages only, and not needed or recommended to be used. Allows you to specify a certain type of React Hook to use for listening to component updates, to allow for complex nested rerender trigger/chaining.
     */
    useReactHookForComponentDidUpdate?: ReactHooks;
    triggerAdobeDCViewRender?: boolean;
};
/**
 * The parameters for the `PreviewFile` function.
  * @property {boolean} showZoomControl - Configures whether to display zoom controls.
  * @property {boolean} showAnnotationTools - Indicates whether to display annotation tools.
  * @property {boolean} showFullScreen - Configures whether to show the full screen toggle.
  * @property {DefaultViewMode} defaultViewMode - Specifies the default view mode for displaying the PDF.
  * @property {boolean} enableFormFilling - Indicates whether form filling is enabled.
  * @property {boolean} showDownloadPDF - Configures whether to show the download option.
  * @property {boolean} showPrintPDF - Configures whether to show the print option.
  * @property {boolean} showLeftHandPanel - Configures whether to show the left-hand panel.
  * @property {"CLOSE" | "BACK"} exitPDFViewerType - Specifies the behavior of the close button.
  * @property {boolean} showThumbnails - Configures whether to show thumbnails.
  * @property {boolean} showBookmarks - Configures whether to show the bookmarks panel.
  * @property {boolean} enableLinearization - Indicates whether PDF linearization is enabled.
  * @property {boolean} enableAnnotationAPIs - Indicates whether PDF annotation APIs are enabled.
  * @property {boolean} includePDFAnnotations - Indicates whether existing PDF annotations are included.
  * @property {boolean} enableSearchAPIs - Indicates whether PDF search APIs are enabled.
  * @property {"LIGHT_BOX" | "SIZED_CONTAINER" | "IN_LINE" | "FULL_WINDOW"} embedMode - Specifies the embedding mode.
  * @property {boolean} showDisabledSaveButton - Configures whether to show the save button in a disabled state.
  * @property {boolean} focusOnRendering - Configures the focus behavior when rendering the PDF.
  * @property {boolean} showFullScreenViewButton - Configures whether to show the full-screen option.
  * @property {string} viewSdkViewerScript - Specifies the URL for the Adobe Embed API SDK viewer script.
  */
type PreviewFileConfig = {
    /**
     * Set this to `false` to hide the zoom-in and zoom-out options available in the right-hand panel. This configuration will work for full window and lightbox embed modes.
     * - Defaults as `true`
     */
    showZoomControl: boolean;
    /**
     * If true, tools such as add text, sticky note, highlight, and so on appear in the quick tools menu on the left-hand side in full window embed mode.
     *  - For more details, see [Comments and Markup](https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/howtos_comments/).
     */
    showAnnotationTools: boolean;
    /**
     * By default, the full screen toggle appears in the bottom toolbar in sized container embed mode. Set this to false to hide the full screen toggle.
     */
    showFullScreen: boolean;
    /**
     * This variable accepts one of the following string values: `"FIT_WIDTH"`, `"FIT_PAGE"`, `"TWO_COLUMN"`, or `"TWO_COLUMN_FIT_PAGE"`.
     * - `FIT_WIDTH`: Expands the page horizontally to the full width of the document pane.
     * - `FIT_PAGE`: Displays the entire page within the current view pane.
     * - `TWO_COLUMN`: Displays two pages of the PDF side by side in the current view pane.
     * - `TWO_COLUMN_FIT_PAGE`: Displays two pages of the PDF side by side, fitting both pages entirely within the current view pane. Users can also toggle the view mode using the Fit Width, Fit Page, or Two-Column buttons on the right-hand panel.
     *
     * **Additionaly**, two other view modes are supported exclusively in mobile browsers:
     * - `CONTINUOUS`: Displays all document pages sequentially, allowing users to navigate by scrolling up or down.
     * - `SINGLE_PAGE`: Displays one document page at a time without showing adjoining pages. Users can swipe to navigate to other pages, which will be displayed one at a time.
     */
    defaultViewMode: DefaultViewMode;
    /** @property {boolean} enableFormFilling - description
     * If true, form filling is enabled and users can edit fields in full window embed mode.
     */
    enableFormFilling: boolean;
    /**
     * If true, PDF can be downloaded in all embed modes. Set this to false to disable PDF download.
     *  - Defaults as `true`
     */
    showDownloadPDF: boolean;
    /**
     * If true, PDF can be printed in all embed modes. Set this to false to disable PDF printing.
     *  - Defaults as `true`
     * - Example:
     *  ![](https://ziping.org/wp-content/uploads/2024/06/Screenshot-2024-06-06-at-3.34.44%E2%80%AFAM.png)
     */
    showPrintPDF: boolean;
    /**
     * The top bar in lightbox embed mode contains the close button by default to
     * close the PDF preview which can be configured to Back button by setting exitPDFViewerType to "RETURN".
     */
    exitPDFViewerType: "CLOSE" | "BACK";
    /**
     * Whether to display thumbnails of the PDF's pages in the left-hand panel.
     *  - Defaults as `true`
     *
     * ![](https://ziping.org/wp-content/uploads/2024/06/Screenshot-2024-06-06-at-3.42.51%E2%80%AFAM.png)
     */
    showThumbnails: boolean;
    /**
     * PDF bookmarks are shown by default in `FULL_WINDOW` and `LIGHT_BOX` embed modes.
     *  - Set this to `false` if you want to hide the bookmarks from the right-hand panel.
     *
     * ![](https://ziping.org/wp-content/uploads/2024/06/Screenshot-2024-06-06-at-3.44.55%E2%80%AFAM.png)
     */
    showBookmarks: boolean;
    /**
     * Set this to true to enable PDF linearization. For more details, see the section [PDF linearization](https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/howtos/#pdf-linearization).
     */
    enableLinearization: boolean;
    /**
     * Set this to true to add, update and delete PDF annotations programmatically in full window embed mode.
     * For more details, see the section [Annotations API overview](https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/howtos_comments/#annotations-api-overview).
     */
    enableAnnotationAPIs: boolean;
    /**
     * This configuration is used with `enableAnnotationAPIs` to access existing PDF annotations. For more details, see the section [Annotations API overview](https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/howtos_comments/#annotations-api-overview).
     */
    includePDFAnnotations: boolean;
    /**
     * Set this to true to perform search operation in the PDF programmatically. For more details, see the section [Search APIs](https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/howtos_ui/#search-apis).
     */
    enableSearchAPIs: boolean;
    /**
     * Defaults to `FULL_WINDOW` embed mode.
     *  - See the section on [Embed modes](https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/howtos/#embed-modes) for more details.
     */
    embedMode: "LIGHT_BOX" | "SIZED_CONTAINER" | "IN_LINE" | "FULL_WINDOW";
    /**
     * Set this to true to show the save button in disabled state even when there are no changes to be saved to the PDF.
     */
    showDisabledSaveButton: boolean;
    /**
     * With this configuration, website developers have the flexibility to control if the PDF should take focus when it is rendered.
     * | EMBED Mode      | Default Value for focusOnRendering | Default Behavior                                                    |
     * | --------------- | ---------------------------------- | ------------------------------------------------------------------- |
     * | `FULL_WINDOW`     | `true`                               | Acquires focus when PDF is rendered.                                |
     * | `LIGHT_BOX`       | `false`                              | Doesn’t acquire focus when PDF is rendered.                         |
     * | `SIZED_CONTAINER` | `false`                              | Doesn’t acquire focus when PDF is rendered.                         |
     * | `IN_LINE`         | `false`                              | Always, and required to acquire focus when PDF is rendered.         |
     *  - For more details, see the section [Focus on PDF rendering](https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/howtos/#focus-on-pdf-rendering).
     *
     */
    focusOnRendering: boolean;
    /**
     * Set this to false to hide the full-screen option available in the right-hand panel. This configuration will work for full window and lightbox embed modes.
     */
    showFullScreenViewButton: boolean;
    /**
     * This allows you to specify the URL for the initial loading script of the Adobe Embed API SDK Mega Spaghetti Code Api, but is optional and
     * uses the default [URL](https://acrobatservices.adobe.com/view-sdk/viewer.js) specified from Adobe's documentation, *which has been changed twice, for odd unknowable reasons*.
     */
    viewSdkViewerScript: string;
    showPageControls: boolean;
    showLeftHandPanel: boolean;
};
declare const DefaultConfigs: {
    demoUrl: string;
    staticDefaultConfig: {
        [key: string]: any;
    };
    staticDivId: string;
    demoMetaData: Partial<FileMetaData>;
};
type FileMetaData = {
    /**
     * The name of the PDF to be rendered. An example of fileName is "Bodea Brochure.pdf". Note that fileName is considered a required field but not enforced,
     *  - The file name displays on the top bar of the rendered PDF viewer. If left empty, a noticeable empty space is shown instead.
     */
    fileName: string;
    /**
     * Pass the PDF ID when annotation APIs are enabled to uniquely identify the PDF. For more details, see [Annotations API overview](https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/howtos_comments/#annotations-api-overview).
     *  - Caution: Failing to provide an id while enabling annotation options will cause the pdf to fail in rendering.
     */
    id: string;
    /**
     * Set this flag to true if you want to render the PDF in read-only mode. Commenting is not allowed and existing PDF comments are displayed as read only.
     */
    hasReadOnlyAccess: boolean;
};
type DefaultViewMode = "FIT_WIDTH" | "FIT_PAGE" | "TWO_COLUMN" | "TWO_COLUMN_FIT_PAGE" | "CONTINUOUS" | "SINGLE_PAGE";
type ReactHooks = {
    [key in Extract<keyof typeof React, `use${string}`>]: [] extends Parameters<(typeof React)[key]> ? never : key extends "useReducer" ? never : key extends "useDeferredValue" ? never : (typeof React)[key] extends (factory: React.EffectCallback, deps?: React.DependencyList | undefined) => void ? key : (typeof React)[key] extends (factory: () => any, deps: React.DependencyList | undefined) => void ? key : never;
}[Extract<keyof typeof React, `use${string}`>];

/**
 * Renders the embedded Adobe PDF viewer using the Adobe Embed API.
 *
 * This function is particularly useful when using the `LIGHT_BOX` embed mode, where the PDF viewer
 * is intended to be triggered by a user interaction, such as clicking a button or link. In `LIGHT_BOX`
 * mode, the viewer typically occupies the entire screen and does not render by default on page load.
 *
 * ### Usage:
 * ```tsx
 * previewFile({
 *   divId: "pdf-viewer",
 *   viewerConfig: { embedMode: "LIGHT_BOX", showAnnotationTools: true },
 *   url: "https://example.com/sample.pdf",
 *   clientID: "your-client-id",
 *   _fileMeta: { fileName: "Sample.pdf", id: "unique-id" },
 * });
 * ```
 *
 * @param {Object} params - Parameters for rendering the PDF.
 * @param {string} params.divId - The ID of the container div where the PDF viewer will be embedded.
 * @param {Partial<PreviewFileConfig>} params.viewerConfig - Configuration options for the PDF viewer.
 * @param {string} params.url - The URL of the PDF file to be rendered.
 * @param {string} params.clientID - The client ID for accessing the Adobe Embed API.
 * @param {Partial<FileMetaData>} [params._fileMeta] - Optional metadata for the PDF, such as file name and ID.
 * @param {any} [params._dcView] - Optional pre-existing AdobeDC.View instance to reuse. If not provided, a new instance will be created.
 *
 * @returns A promise that resolves when the PDF is successfully rendered.
 */
declare function previewFile({ divId, viewerConfig, url, clientID, _fileMeta, _dcView, }: {
    divId: string;
    viewerConfig: Partial<PreviewFileConfig>;
    url: string;
    clientID: string;
    _dcView?: any;
    _fileMeta?: Partial<FileMetaData>;
}): Promise<any>;
declare function log({ message, prefix, type, }: {
    message: string;
    prefix: string;
    type: 'info' | 'warn' | 'error';
}): void;
/**
 * ReactViewAdobe
 *
 * A React component that acts as a wrapper around the Adobe PDF Viewer SDK, enabling seamless rendering of PDFs using Adobe's Embed API services.
 * This component is designed to encapsulate and compartmentalize the Adobe Embed API's logic within the React lifecycle, providing robust
 * configurability and dynamic behavior through customizable React hooks and props.
 *
 * ### Features:
 * - Supports multiple embed modes (`LIGHT_BOX`, `FULL_WINDOW`, `SIZED_CONTAINER`, `IN_LINE`).
 * - Dynamically loads the Adobe Embed SDK script into the DOM if not already present.
 * - Enables advanced configurations for rendering, such as annotations, zoom controls, and fullscreen toggles.
 * - Offers hooks-based extensibility to customize behavior when loading, rendering, or updating the component.
 * - Provides detailed debug logging for development.
 *
 * @param {ReactViewAdobeProps} props - The properties for the ReactViewAdobe component.
 * @property {string} url - The URL of the PDF to render. (Required)
 * @property {string} clientId - The Adobe Embed API client ID. (Required)
 * @property {Partial<PreviewFileConfig>} [previewConfig] - Configuration options for the Adobe Viewer (e.g., zoom controls, annotations).
 * @property {Partial<FileMetaData>} [fileMeta] - Metadata for the PDF (e.g., file name, ID).
 * @property {string} [id] - The ID for the PDF container element in the DOM.
 * @property {React.ReactNode} [children] - Any child components to render inside the wrapper.
 * @property {string} [className] - CSS class for styling the container.
 * @property {string} [title] - Title for the container, typically used for accessibility.
 * @property {React.CSSProperties} [style] - Inline styles for the container.
 * @property {boolean} [debug] - Enables detailed logging for debugging purposes.
 * @property {ReactHooks} [useReactHookWhenLoadingAdobeAPI] - Hook for managing the lifecycle of script loading (default: `useEffect`). Do not use unless necessary and you understand the implications.
 * @property {ReactHooks} [useReactHookWhenCallingAdobeAPI] - Hook for managing API calls to Adobe services (default: `useEffect`). Do not use unless necessary and you understand the implications.
 * @property {ReactHooks} [useReactHookForComponentDidUpdate] - Hook for managing component updates and re-renders (default: `useEffect`). Do not use unless necessary and you understand the implications.
 * @property {boolean} [triggerAdobeDCViewRender] - Flag to trigger the rendering of the PDF, especially for `LIGHT_BOX` mode.
 *
 * @example
 * ```tsx
 * import { ReactViewAdobe } from './ReactViewAdobe';
 *
 * export default function App() {
 *   return (
 *     <ReactViewAdobe
 *       url="https://example.com/sample.pdf"
 *       clientId="your-client-id"
 *       previewConfig={{ embedMode: "FULL_WINDOW", showZoomControl: true }}
 *       debug
 *     />
 *   );
 * }
 * ```
 *
 * @summary
 * - Ensure that the provided `clientId` is correctly configured for your domain, as Adobe verifies domain-clientID mappings.
 * - This component dynamically injects the Adobe Embed SDK script into the DOM if not already loaded.
 * - Use the `debug` flag to log lifecycle events and troubleshooting details during development.
 *
 * @returns {JSX.Element} A React component that renders the Adobe PDF Viewer.
 */
declare function ReactViewAdobe(props: ReactViewAdobeProps): React.JSX.Element;

export { DefaultConfigs, type FileMetaData, type PreviewFileConfig, ReactViewAdobe, type ReactViewAdobeProps, ReactViewAdobe as default, log, previewFile };
