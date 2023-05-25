import React from "react";
import ReactDOM from "react-dom/client";
const DefaultConfigs = {
    demoUrl: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
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
export function previewFile({ divId, viewerConfig, url, clientID, _fileMeta, _dcView, }) {
    const config = {
        clientId: clientID,
        divId,
    };
    const dcView = _dcView || new window.AdobeDC.View(config);
    { }
    const previewFilePromise = dcView.previewFile({
        content: {
            location: {
                url: url,
            },
        },
        metaData: _fileMeta || DefaultConfigs.demoMetaData,
    }, viewerConfig);
    return previewFilePromise;
}
export const ReactViewAdobe = (props) => {
    const [adobePDFProgrammeInstalled, setAdobePDFProgrammeInstalled] = React.useState(false);
    const [adobeDCView, setAdobeDCView] = React.useState(null);
    const appendAdobeScriptLoader = React.useCallback(() => {
        const scriptExists = document.getElementById("adobe-pdf-viewer-script-" + props.id);
        if (scriptExists) {
            const rootEleme = scriptExists.parentElement;
            ReactDOM.hydrateRoot(rootEleme, React.createElement("script", { id: "adobe-pdf-viewer-script-" + props.id, async: true, defer: true, src: "https://documentservices.adobe.com/view-sdk/viewer.js" }));
        }
        else {
            const script = document.createElement("script");
            script.src = "https://documentservices.adobe.com/view-sdk/viewer.js";
            script.async = true;
            script.defer = true;
            script.id = "adobe-pdf-viewer-script-" + props.id;
            const p = document.createElement("script");
            ReactDOM.createRoot(p).render(React.createElement("script", { src: "https://documentservices.adobe.com/view-sdk/viewer.js" }));
            const pdfdiv = document.getElementById(props.id || DefaultConfigs.staticDivId);
            pdfdiv.appendChild(script);
            if (props.debug)
                console.info("Adobe PDF Viewer Script Appended");
            setAdobePDFProgrammeInstalled(true);
        }
    }, [
        setAdobePDFProgrammeInstalled
    ]);
    React.useEffect(() => {
        if (adobePDFProgrammeInstalled === false) {
            if (AdobeViewerGlobalExists(window) === false) {
                appendAdobeScriptLoader();
            }
            else {
                setAdobePDFProgrammeInstalled(true);
            }
        }
        if (adobePDFProgrammeInstalled) {
            document.addEventListener("adobe_dc_view_sdk.ready", () => {
                if (props.debug)
                    console.info("Adobe PDF Viewer SDK Ready Event");
                const divId = props.id || DefaultConfigs.staticDivId;
                const divElm = document.getElementById(divId);
                if (divElm && props.previewConfig?.embedMode !== 'LIGHT_BOX') {
                    if (props.debug)
                        console.info("Adobe PDF Viewer SDK Ready Rendering");
                    previewFile({
                        divId,
                        viewerConfig: props.previewConfig || DefaultConfigs.staticDefaultConfig,
                        url: props.url || DefaultConfigs.demoUrl,
                        clientID: props.clientId,
                        _fileMeta: props.fileMeta,
                    });
                }
                else if (props.previewConfig?.embedMode === 'LIGHT_BOX') {
                    props.setDcViewer && props.setDcViewer(adobeDCView);
                }
            });
        }
    }, [adobePDFProgrammeInstalled]);
    return (React.createElement("div", { id: props.id || DefaultConfigs.staticDivId, className: props.className ||
            "adobe-viewer-of-amazon-corporate-retaliations", style: props.style, title: props.title ||
            "entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots" }));
};
export function AdobeViewerGlobalExists(window) {
    return window["adobe_dc_view_sdk"] !== undefined;
}
