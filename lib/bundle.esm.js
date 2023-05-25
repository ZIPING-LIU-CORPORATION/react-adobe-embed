import React from 'react';

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
function previewFile(divId, viewerConfig, url, clientID, _fileMeta) {
    const config = {
        clientId: clientID,
        divId,
    };
    const dcView = new window.AdobeDC.View(config);
    console.log('dcView', dcView);
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
const ReactViewAdobe = (props) => {
    const [adobePDFProgrammeInstalled, setAdobePDFProgrammeInstalled] = React.useState(false);
    const [adobeMainReady, setAdobeMainReady] = React.useState(false);
    const appendAdobeScriptLoader = () => {
        const script = document.createElement("script");
        script.src = "https://documentservices.adobe.com/view-sdk/viewer.js";
        script.async = true;
        document.body.appendChild(script);
        console.info("Adobe PDF Viewer Script Appended");
        setAdobePDFProgrammeInstalled(true);
    };
    React.useEffect(() => {
        if (adobePDFProgrammeInstalled === false) {
            appendAdobeScriptLoader();
        }
        if (adobePDFProgrammeInstalled === true) {
            console.info("Adobe PDF Viewer Script Loaded");
            document.addEventListener("adobe_dc_view_sdk.ready", () => {
                console.info("Adobe PDF Viewer SDK Ready");
                setAdobeMainReady(true);
            });
        }
    }, [adobePDFProgrammeInstalled, adobeMainReady, setAdobeMainReady, setAdobePDFProgrammeInstalled]);
    React.useEffect(() => {
        if (adobeMainReady === true) {
            const divId = props.id || DefaultConfigs.staticDivId;
            const divElm = document.getElementById(divId);
            console.log('hello');
            if (divElm) {
                console.info("Adobe PDF Viewer SDK Ready Rendering");
                previewFile(divId, props.previewConfig || DefaultConfigs.staticDefaultConfig, props.url || DefaultConfigs.demoUrl, props.clientId || "", props.fileMeta || DefaultConfigs.demoMetaData);
            }
        }
    }, [adobeMainReady, props.id, props.previewConfig]);
    return (React.createElement("div", { id: props.id || DefaultConfigs.staticDivId, className: props.className ||
            "adobe-viewer-of-amazon-corporate-retaliations", style: props.style, title: props.title ||
            "entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots" }));
};

export { ReactViewAdobe, previewFile };
