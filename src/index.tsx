import React from "react";

export function previewFile({
  divId,
  viewerConfig,
  url,
  clientID,
  _fileMeta,
  _dcView,
}: {
  divId: string;
  viewerConfig: Partial<PreviewFileConfig>;
  url: string;
  clientID: string;
  _dcView?: any;
  _fileMeta?: Partial<FileMetaData>;
}) {
  const config = {
    clientId: clientID,
    divId,
  };

  const dcView = _dcView || new (window as any).AdobeDC.View(config);

  const previewFilePromise = dcView.previewFile(
    {
      content: {
        location: {
          url: url,
        },
      },
      metaData: _fileMeta || DefaultConfigs.demoMetaData,
    },
    viewerConfig,
  );
  return previewFilePromise;
}



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
export type ReactViewAdobeProps = {
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
  useReactHookWhenCallingAdobeAPI?: ReactHooks;
  useReactHookForAdobeAPIConfigs?: ReactHooks;
  useReactHookForComponentDidUpdate?: ReactHooks;
  triggerAdobeDCViewRender?: boolean;

};

/**
 * @description - An atypical Nested React Component of ReactViewAdobe,
 * specifically for managing API calls and configurations of the Adobe Embed API SDK
 * This component, in turn, employs the use of React Hooks 
 * to render what the Adobe Embed API SDK perceives as static 
 * and vanilla JavaScript code, transposed into the Document Object Model (DOM).
 */
const AdobeDiv = (props: {
  scriptViewerLoaded?: boolean;
  id?: string;
  className?: string;
  title?: string;

  style?: React.CSSProperties;
}) => {
  const ref = React.useRef<HTMLDivElement>(
    document.getElementById(
      props.id || DefaultConfigs.staticDivId,
    ) as HTMLDivElement,
  );
  return (
    <div
      ref={ref}
      id={props.id || DefaultConfigs.staticDivId}
      className={
        props.className || "adobe-viewer-of-amazon-corporate-retaliations"
      }
      style={props.style}
      title={
        props.title ||
        "entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots"
      }
    ></div>
  );
};

/**
 * @description - ReactViewAdobe component which is a wrapper around Adobe PDF Viewer SDK that allows for
 * rendering PDFs via Adobe's PDF Engine. Ensures that Adobe Embed API Services are
 * compartmentalized and fully encapsulated and configured within a rendered page. Not sure why Adobe
 * Embed API does not inherently do this. See ReactViewAdobeProps for more details.
 */
export default function ReactViewAdobe(props: ReactViewAdobeProps) {
  const [adobePDFProgrammeInstalled, setAdobePDFProgrammeInstalled] =
    React.useState(false);

  const [componentNeedsRendering, setComponentNeedsRendering] =
    React.useState(false);
  const [scriptViewerLoaded, setScriptViewerLoaded] = React.useState(false);
  const useHooksForConfig =
    React[props?.useReactHookForAdobeAPIConfigs || "useMemo"];
  const adobeDCView = useHooksForConfig(() => {
    if (adobePDFProgrammeInstalled === true) {
      const adobedcview = (window as any)["AdobeDC"]?.["View"];
      return adobedcview;
    }
  }, [adobePDFProgrammeInstalled]);

  const useHooksForLoading =
    React[props?.useReactHookWhenLoadingAdobeAPI || "useEffect"];

  useHooksForLoading(() => {
    if (scriptViewerLoaded === false) {
      const scriptExistsALready = document.querySelector(
        `script.react-adobe-embed-handholding-adobe-api-loading-idiocy[data-adobe-pdf-id="${props.id || DefaultConfigs.staticDivId}"]`,
      );
      if (scriptExistsALready) {
        if (props.debug)
          console.info(`\x1b[1mAdobe SDK Check\x1b[0m`, 'Reloading and Rerendering Adobe SDK');

        // Lightbox mode renders from ui event triggered by user, so no need to render
        if(props.previewConfig?.embedMode !== "LIGHT_BOX"){
            setComponentNeedsRendering(true);
        }
        
        scriptExistsALready.setAttribute(
          "data-testid",
          "react-adobe-embed-handholding-adobe-api-loading-idiocy-reused",
        );
      } else {
        if (props.debug)
         console.info(`\x1b[1mAdobe SDK Check\x1b[0m`, 'Initial Adobe SDK Load');
        const script = document.createElement("script");
        script.setAttribute(
          "data-testid",
          "react-adobe-embed-handholding-adobe-api-loading-idiocy-initial",
        );

        script.setAttribute(
          "data-adobe-pdf-id",
          props.id || DefaultConfigs.staticDivId,
        );
        script.setAttribute(
          "class",
          "react-adobe-embed-handholding-adobe-api-loading-idiocy",
        );
        script.src =
          props.previewConfig?.viewSdkViewerScript ||
          DefaultConfigs.staticDefaultConfig.viewSdkViewerScript;
        script.async = true;
        script.onload = () => {
          setScriptViewerLoaded(true);
        };
        document.body.appendChild(script);
      }
    }
  }, [props.id, scriptViewerLoaded, adobePDFProgrammeInstalled]);

  const useHooksForCall =
    React[props?.useReactHookWhenCallingAdobeAPI || "useEffect"];

  useHooksForCall(() => {
    if (adobePDFProgrammeInstalled === false && scriptViewerLoaded === true) {
      document.addEventListener("adobe_dc_view_sdk.ready", () => {
        setAdobePDFProgrammeInstalled(true);
      });
    }
    const callAdobeApi = (props: {
      id?: string;
      className?: string;
      title?: string;
      style?: React.CSSProperties;

      debug?: boolean;
      triggerAdobeDCViewRender?: boolean;
      previewConfig?: Partial<PreviewFileConfig>;
      url: string;
      clientId: string;

      fileMeta?: { [key: string | "fileName" | "id"]: any };
    }) => {
      if (props.debug)
        console.info(
          "Adobe PDF Viewer SDK Ready Event",
          adobeDCView,
          (window as any)["adobe_dc_view_sdk"],
        );
      const divId = props.id || DefaultConfigs.staticDivId;
      const divElm = document.getElementById(divId);

      if (divElm && props.previewConfig?.embedMode !== "LIGHT_BOX") {
        if (props.debug) console.info("Adobe PDF Viewer SDK Ready Rendering");
        previewFile({
          divId,
          viewerConfig:
            props.previewConfig || DefaultConfigs.staticDefaultConfig,
          url: props.url || DefaultConfigs.demoUrl,
          clientID: props.clientId,
          _fileMeta: props.fileMeta,
        });
      } else if (props.previewConfig?.embedMode === "LIGHT_BOX") {
        if (props?.triggerAdobeDCViewRender) {
          previewFile({
            divId: props.id || DefaultConfigs.staticDivId,
            viewerConfig:
              props.previewConfig || DefaultConfigs.staticDefaultConfig,
            url: props.url || DefaultConfigs.demoUrl,
            clientID: props.clientId,
          });
        }
      }
    };
    if (scriptViewerLoaded === true && adobePDFProgrammeInstalled === true) {
      callAdobeApi(props);
    }
  }, [adobePDFProgrammeInstalled, scriptViewerLoaded, props, adobeDCView]);

  //Listen if component needs rerendering due to page view change
  const useReactHookForComponentDidUpdate =
    React[props?.useReactHookForComponentDidUpdate || "useEffect"];

  useReactHookForComponentDidUpdate(() => {
    if (componentNeedsRendering === true) {
      const divId = props.id || DefaultConfigs.staticDivId;
      const divElm = document.getElementById(divId);
      if (divElm) {
        previewFile({
          divId,
          viewerConfig:
            props.previewConfig || DefaultConfigs.staticDefaultConfig,
          url: props.url || DefaultConfigs.demoUrl,
          clientID: props.clientId,
          _fileMeta: props.fileMeta,
        });
      }
      setComponentNeedsRendering(false);
    }
  }, [componentNeedsRendering, props]);

  return <AdobeDiv {...props} />;
}


export const DefaultConfigs = {
  demoUrl:
    "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf",
  staticDefaultConfig: {
    showAnnotationTools: false,
    showLeftHandPanel: false,
    showPageControls: false,
    viewSdkViewerScript: "https://acrobatservices.adobe.com/view-sdk/viewer.js",
    showDownloadPDF: false,
    showPrintPDF: false,
  },
  staticDivId: "pdf-div",
  demoMetaData: {
    fileName: "Odd Distateful Adobe Example Pdf.pdf",
    id: "6d07d124 - ac85–43b3 - a867–36930f502ac6",
  },
};


export type FileMetaData = {
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
}

export type DefaultViewMode = "FIT_WIDTH" | "FIT_PAGE" | "TWO_COLUMN" | "TWO_COLUMN_FIT_PAGE" | "CONTINUOUS" | "SINGLE_PAGE";

/**
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
};

export type ReactHooks = {
  [key in Extract<keyof typeof React, `use${string}`>]: [] extends Parameters<
    (typeof React)[key]
  >
    ? never
    : key extends "useReducer"
    ? never
    : key extends "useDeferredValue"
    ? never
    : (typeof React)[key] extends (
        factory: React.EffectCallback,
        deps?: React.DependencyList | undefined,
      ) => void
    ? key
    : (typeof React)[key] extends (
        factory: () => any,
        deps: React.DependencyList | undefined,
      ) => void
    ? key
    : never;
}[Extract<keyof typeof React, `use${string}`>];


export {ReactViewAdobe};