
import React from 'react';

import lodash from 'lodash';
import PreviewFileConfig from "./@types/PreviewFIleConfig";



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

export class AdobeReactView extends React.Component<
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
  static checkForViewJsLoaded() {
    return (
      (
        globalThis as {
          [key: string]: any;
        }
      )["adobe_dc_view_sdk"] != undefined &&
      typeof (globalThis as any)["adobe_dc_view_sdk"] === "function"
    );
  }

  static checkForDeprecatedMainJsLoaded() {
    return (
      (
        globalThis as {
          [key: string]: any;
        }
      )["AdobeDC"] != undefined &&
      typeof (globalThis as any)["AdobeDC"] === "function"
    );
  }

  constructor(
    props: Partial<EmbedState> & {
      previewConfig: Partial<PreviewFileConfig>;
    } & Partial<HTMLDivElement>
  ) {
    super(props);
    const [adobeMainReady, setAdobeMainReady] = React.useState(
      props.adobeMainReady || false
    );

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
    const [isReady, setIsReady] = React.useState(props.isReady || false);
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
      AdobeReactView.checkForDeprecatedMainJsLoaded() === true ||
      AdobeReactView.checkForViewJsLoaded() === true
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
        tabIndex={this.props.tabIndex || undefined}
        data-tagName={
          this.props.tagName ||
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
  const [adobeMainReady, setAdobeMainReady] = React.useState(
    props.adobeMainReady || false
  );
  const [isReady, setIsReady] = React.useState(props.isReady || false);
  const divID = props.config?.divId || DefaultConfigs.staticDivId;

  React.useEffect(() => {
    if (document.getElementById(divID)) {
      setIsReady(true);
    }

    if (
      AdobeReactView.checkForDeprecatedMainJsLoaded() === true ||
      AdobeReactView.checkForViewJsLoaded() === true
    ) {
      setAdobeMainReady(true);
    }
  }, [isReady, adobeMainReady, divID]);

  return (
    <AdobeReactView
      isReady={isReady}
      adobeMainReady={adobeMainReady}
      previewConfig={props.previewConfig}
      config={props.config}
      style={props.style}
      className={props.className}
      tabIndex={props.tabIndex}
      tagName={
        props.tagName ||
        "react-adobe-state-government-ensuring-rule-of-law-against-amazon-retaliator-or-a-child-component-framed-by-state-regulations-such-as-adobe-react-embed-core-div"
      }
    />
  );
};

export default ReactViewAdobe;