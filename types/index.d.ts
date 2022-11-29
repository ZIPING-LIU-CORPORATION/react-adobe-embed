import React from 'react';
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
    fileMeta?: {
        [key: string | "fileName" | "id"]: any;
    };
};
export declare const DefaultConfigs: {
    demoUrl: string;
    staticDefaultConfig: {
        showAnnotationTools: boolean;
        showLeftHandPanel: boolean;
        showPageControls: boolean;
        showDownloadPDF: boolean;
        showPrintPDF: boolean;
    };
    staticDivId: string;
    demoMetaData: {
        fileName: string;
        id: string;
    };
};
export declare class AdobeReactView extends React.Component<AdobeReactViewProps & Partial<HTMLDivElement>, Required<AdobeReactViewProps> & {
    adobeDCView: null | {
        previewFile: (content: {
            content: Required<Config["content"]>;
            metaData: Config["fileMeta"];
        }, previewFileConfig: Partial<PreviewFileConfig>) => void;
        [key: string]: Function;
    };
} & Partial<HTMLDivElement>> {
    static checkForViewJsLoaded(): boolean;
    static checkForDeprecatedMainJsLoaded(): boolean;
    constructor(props: Partial<EmbedState> & {
        previewConfig: Partial<PreviewFileConfig>;
    } & Partial<HTMLDivElement>);
    previewFile: (divId: string, viewerConfig: Partial<PreviewFileConfig>, url: string) => void | null;
    onLoaded: () => void;
    onLoad(): void;
    render(): JSX.Element;
}
declare const ReactViewAdobe: (props: Partial<EmbedState> & {
    previewConfig: Partial<PreviewFileConfig>;
} & Partial<HTMLDivElement>) => JSX.Element;
export default ReactViewAdobe;
