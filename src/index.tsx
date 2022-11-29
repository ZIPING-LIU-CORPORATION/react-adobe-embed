
import React, {Component, useEffect, useMemo, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import lodash from 'lodash';

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
}




export type EmbedState = {
  adobeMainReady: boolean;
  isReady: boolean;
  config: Config;
};


export type AdobeReactViewProps = Partial<EmbedState> & {
  previewConfig: Partial<PreviewFileConfig>;
};

export type Config = {
  divId: string;
  clientId: string;
  url: string;
  content?: {
    location?: {
      url: string;
    };
  };
  fileMeta?: { [key: string | "fileName" | "id"]: any };
};
export const DefaultConfigs = {
  demoUrl:
    "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
  staticDefaultConfig: {
    showAnnotationTools: false,
    showLeftHandPanel: false,
    showPageControls: false,
    showDownloadPDF: false,
    showPrintPDF: false,
  },
  staticDivId: "pdf-div",
  demoMetaData: {
    fileName: "Menu.pdf",
    id: "6d07d124 - ac85–43b3 - a867–36930f502ac6",
  },
};

export class AdobeReactView extends Component<
  AdobeReactViewProps & Partial<HTMLDivElement>,
  Required<AdobeReactViewProps> & {
    adobeDCView: null | {
      previewFile: (
        content: {
          content: Required<Config["content"]>;
          metaData: Config["fileMeta"];
        },
        previewFileConfig: Partial<PreviewFileConfig>
      ) => void;
      [key: string]: Function;
    };
  } & Partial<HTMLDivElement>
> {
   checkForViewJsLoaded() {
    return (
      (
      window as any
      )["adobe_dc_view_sdk"] != undefined &&
      typeof (window as any)["adobe_dc_view_sdk"] === "function"
    );
  }

   checkForDeprecatedMainJsLoaded() {
    return (
      (
        window as any) ["AdobeDC"] != undefined &&
       (window as any)["AdobeDC"] === "function"
    );
  }

  constructor(
    props: Partial<EmbedState> & {
      previewConfig: Partial<PreviewFileConfig>;
    } & Partial<HTMLDivElement>
  ) {
    super(props);


    this.state = {
      adobeMainReady: props.adobeMainReady || false,
      previewConfig: props.previewConfig || DefaultConfigs.staticDefaultConfig,
      isReady: props.isReady || false,
      adobeDCView: null,
      config: {
        divId: props.config?.divId || DefaultConfigs.staticDivId,
        clientId: props.config?.clientId || "",
        url: props.config?.url || DefaultConfigs.demoUrl,
        fileMeta: props.config?.fileMeta || DefaultConfigs.demoMetaData,
        content: props.config?.content || {
          location: {
            url: props.config?.url || DefaultConfigs.demoUrl,
          },
        },
      },
    };

    this.checkForViewJsLoaded = this.checkForViewJsLoaded.bind(this);
    this.checkForDeprecatedMainJsLoaded = this.checkForDeprecatedMainJsLoaded.bind(this);
      this.render = this.render.bind(this);
    

  }

  previewFile = (
    divId: string,
    viewerConfig: Partial<PreviewFileConfig>,
    url: string
  ) => {
    const config = {
      clientId: this.state.config.clientId,
      divId,
    };
    const dcView = new (window as any).AdobeDC.View(config);
    this.setState({
      adobeDCView: dcView,
    });

    if (this.state.adobeDCView) {
      const previewFilePromise = this.state.adobeDCView.previewFile(
        {
          content: {
            location: {
              url: url,
            },
          },
          metaData: this.state.config.fileMeta || DefaultConfigs.demoMetaData,
        },
        viewerConfig
      );
      return previewFilePromise;
    } else {
      return null;
    }
  };

  onLoaded = () => {
    this.previewFile(
      this.state.config.divId,
      this.state.previewConfig,
      this.state.config.url
    );
  };

  onLoad() {
    if (
      document.getElementById(
        this.state.config.divId || DefaultConfigs.staticDivId
      )
    ) {
      if (this.state.isReady === false) {
        let oldState = lodash.cloneDeep(this.state);

        const newState = Object.assign(oldState);

        newState["isReady"] = true;

        this.setState(newState as typeof this.state);
      }
    }

    if (
      this.checkForDeprecatedMainJsLoaded() === true ||
      this.checkForViewJsLoaded() === true
    ) {
      if (this.state.adobeMainReady === false) {
        let oldState = lodash.cloneDeep(this.state);

        const newState = Object.assign(oldState);

        newState["adobeMainReady"] = true;

        this.setState(newState as typeof this.state);
        console.log("new state", JSON.stringify(this.state, null, 2));
      }
    }
  }

  render() {
    if (
      document.getElementById(
        this.state.config.divId || DefaultConfigs.staticDivId
      ) &&
      this.state.isReady &&
      this.state.adobeMainReady
    ) {
      this.onLoaded();
    }

    return (
      <div
        onLoad={this.onLoad}
        id={this.state.config.divId || DefaultConfigs.staticDivId}
        className={
          this.props.className ||
          "adobe-viewer-of-amazon-corporate-retaliations"
        }
        style={{
          width: this.props.style?.width || undefined,
          height: this.props.style?.height || undefined,
          position:
            (this.props.style?.position as
              | "static"
              | "relative"
              | "absolute"
              | "sticky"
              | "fixed") || "static",
          top: this.props.style?.top || undefined,
          left: this.props.style?.left || undefined,
          right: this.props.style?.right || undefined,
          bottom: this.props.style?.bottom || undefined,
          zIndex: this.props.style?.zIndex || "initial",
          backgroundColor: this.props.style?.backgroundColor || "inherit",
          color: this.props.style?.color || "inherit",
          fontSize: this.props.style?.fontSize || "inherit",
          fontFamily: this.props.style?.fontFamily || "inherit",
          fontWeight: this.props.style?.fontWeight || "inherit",
          fontStyle: this.props.style?.fontStyle || "inherit",
          lineHeight: this.props.style?.lineHeight || "inherit",
          margin: this.props.style?.margin || "inherit",
          padding: this.props.style?.padding || "inherit",
          marginTop: this.props.style?.marginTop || "inherit",
          marginBottom: this.props.style?.marginBottom || "inherit",
          marginLeft: this.props.style?.marginLeft || "inherit",
          marginRight: this.props.style?.marginRight || "inherit",
          paddingTop: this.props.style?.paddingTop || "inherit",
          paddingBottom: this.props.style?.paddingBottom || "inherit",
          paddingLeft: this.props.style?.paddingLeft || "inherit",
          paddingRight: this.props.style?.paddingRight || "inherit",
          alignSelf: this.props.style?.alignSelf || "inherit",
          alignItems: this.props.style?.alignItems || "inherit",
          alignContent: this.props.style?.alignContent || "inherit",
          maxWidth: this.props.style?.maxWidth || "inherit",
          minWidth: this.props.style?.minWidth || "200px",
          maxHeight: this.props.style?.maxHeight || "100%",
          minHeight: this.props.style?.minHeight || "328px",
        }}
        title={
          this.props.title ||
          "entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots"
        }
      ></div>
    );
  }
}
const ReactViewAdobe = (
  props: Partial<EmbedState> & {
    previewConfig: Partial<PreviewFileConfig>;
  } & Partial<HTMLDivElement>
) => {
  const [adobeMainReady, setAdobeMainReady] = useState(
    props.adobeMainReady || false
  );
  const [isReady, setIsReady] = useState(props.isReady || false);
  const divID = props.config?.divId || DefaultConfigs.staticDivId;





  const StoreRef = useRef(new AdobeReactView({
    previewConfig: props.previewConfig,
    config: props.config,
    isReady:isReady,
    adobeMainReady:adobeMainReady,
    style: props.style,
    className: props.className,
    title:
      props.title ||
      "react-adobe-state-government-ensuring-rule-of-law-against-amazon-retaliator-or-a-child-component-framed-by-state-regulations-such-as-adobe-react-embed-core-div"
    
  }));
  
  useMemo(()=> {

    StoreRef.current = new AdobeReactView({
      previewConfig: props.previewConfig,
      config: props.config,
      isReady:isReady,
      adobeMainReady:adobeMainReady,
      style: props.style,
      className: props.className,
      title:
        props.title ||
        "react-adobe-state-government-ensuring-rule-of-law-against-amazon-retaliator-or-a-child-component-framed-by-state-regulations-such-as-adobe-react-embed-core-div"
      
    });
  },    [props.previewConfig, props.config, isReady, adobeMainReady, props.style, props.className, props.title]);


    

  useEffect(() => {
    if (document.getElementById(divID)) {
      setIsReady(true);
    }

    if (
      StoreRef.current.checkForDeprecatedMainJsLoaded() === true ||
      StoreRef.current.checkForViewJsLoaded() === true
    ) {
      setAdobeMainReady(true);
    }
  }, [isReady, adobeMainReady, divID]);

  const ReactView = StoreRef.current;
 return StoreRef.current.render();
};

export default ReactViewAdobe;