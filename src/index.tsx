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
  _fileMeta?: { [key: string | "fileName" | "id"]: any };
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
  id?: string;
  children?: React.ReactNode;
  useReactHookWhenLoadingAdobeAPI?: ReactHooks;
  useReactHookWhenCallingAdobeAPI?: ReactHooks;
  useReactHookForAdobeAPIConfigs?: ReactHooks;
  useReactHookForComponentDidUpdate?: ReactHooks;
  triggerAdobeDCViewRender?: boolean;
  className?: string;
  title?: string;
  style?: React.CSSProperties;
  previewConfig?: Partial<PreviewFileConfig>;
  url: string;
  clientId: string;
  fileMeta?: { [key: string | "fileName" | "id"]: any };
  debug?: boolean;
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
  defaultViewMode:
    | "FIT_WIDTH"
    | "FIT_PAGE"
    | "TWO_COLUMN"
    | "TWO_COLUMN_FIT_PAGE"
    | "CONTINUOUS"
    | "SINGLE_PAGE";
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

  /**
   * This allows you to specify the URL for the initial loading script of the Adobe Embed API SDK Mega Spaghetti Code Api, but is optional and
   * uses the default URL specified from Adobe's documentation. (https://acrobatservices.adobe.com/view-sdk/viewer.js - which now has been changed twice, for odd  unknowable reasons)
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
