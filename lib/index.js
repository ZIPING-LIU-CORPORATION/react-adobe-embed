import React from "react";
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
const AdobeDiv = (props) => {
    const ref = React.useRef(document.getElementById(props.id || DefaultConfigs.staticDivId));
    return (React.createElement("div", { ref: ref, id: props.id || DefaultConfigs.staticDivId, className: props.className || "adobe-viewer-of-amazon-corporate-retaliations", style: props.style, title: props.title ||
            "entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots" }));
};
/**
 * @description - ReactViewAdobe component which is a wrapper around Adobe PDF Viewer SDK that allows for
 * rendering PDFs via Adobe's PDF Engine. Ensures that Adobe Embed API Services are
 * compartmentalized and fully encapsulated and configured within a rendered page. Not sure why Adobe
 * Embed API does not inherently do this. See ReactViewAdobeProps for more details.
 */
export default function ReactViewAdobe(props) {
    const [adobePDFProgrammeInstalled, setAdobePDFProgrammeInstalled] = React.useState(false);
    const [scriptViewerLoaded, setScriptViewerLoaded] = React.useState(false);
    const adobeDCViewRef = React.useRef();
    const useHooksForAdobeConfig = React[props?.useReactHookForAdobeAPIConfigs || "useEffect"];
    useHooksForAdobeConfig(() => {
        const config = {
            clientId: props.clientId,
            divId: props.id || DefaultConfigs.staticDivId,
        };
        if (adobePDFProgrammeInstalled && scriptViewerLoaded) {
            adobeDCViewRef.current = new (window.AdobeDC.View)(config);
        }
    }, [adobePDFProgrammeInstalled, scriptViewerLoaded, props.clientId, props.id]);
    const useHooksForLoading = React[props?.useReactHookWhenLoadingAdobeAPI || "useEffect"];
    (useHooksForLoading)(() => {
        if (scriptViewerLoaded === false) {
            const scriptExistsALready = document.querySelector(".react-adobe-embed-handholding-adobe-api-loading-idiocy");
            if (scriptExistsALready) {
                if (adobePDFProgrammeInstalled === false) {
                    document.addEventListener("adobe_dc_view_sdk.ready", () => {
                        setAdobePDFProgrammeInstalled(true);
                    });
                }
                setScriptViewerLoaded(true);
            }
            else {
                const script = document.createElement("script");
                script.setAttribute("data-adobe-pdf-id", props.id || DefaultConfigs.staticDivId);
                script.setAttribute("class", "react-adobe-embed-handholding-adobe-api-loading-idiocy");
                script.src = "https://documentcloud.adobe.com/view-sdk/viewer.js";
                script.async = true;
                script.onload = () => {
                    setScriptViewerLoaded(true);
                };
                document.body.appendChild(script);
            }
        }
    }, [props.id, scriptViewerLoaded, adobePDFProgrammeInstalled]);
    const useHooksForCall = React[props?.useReactHookWhenCallingAdobeAPI || "useEffect"];
    useHooksForCall(() => {
        if (adobePDFProgrammeInstalled === false && scriptViewerLoaded === true) {
            document.addEventListener("adobe_dc_view_sdk.ready", () => {
                setAdobePDFProgrammeInstalled(true);
            });
        }
        const callAdobeApi = (props) => {
            const previewFile = ({ viewerConfig, url, _headers, _fileMeta, _dcView, }) => {
                const dcView = _dcView || adobeDCViewRef.current;
                const previewFilePromise = dcView.previewFile({
                    content: {
                        location: {
                            url: url,
                        },
                    },
                    metaData: _fileMeta || DefaultConfigs.demoMetaData,
                }, viewerConfig);
                return previewFilePromise;
            };
            if (props.debug)
                console.info("Adobe PDF Viewer SDK Ready Event", adobeDCViewRef, window["adobe_dc_view_sdk"]);
            const divId = props.id || DefaultConfigs.staticDivId;
            const divElm = document.getElementById(divId);
            if (divElm && props.previewConfig?.embedMode !== "LIGHT_BOX") {
                if (props.debug)
                    console.info("Adobe PDF Viewer SDK Ready Rendering");
                previewFile({
                    viewerConfig: props.previewConfig || DefaultConfigs.staticDefaultConfig,
                    url: props.url || DefaultConfigs.demoUrl,
                    _headers: props.headers,
                    _fileMeta: props.fileMeta,
                });
            }
            else if (props.previewConfig?.embedMode === "LIGHT_BOX") {
                if (props?.triggerAdobeDCViewRender) {
                    previewFile({
                        viewerConfig: props.previewConfig || DefaultConfigs.staticDefaultConfig,
                        url: props.url || DefaultConfigs.demoUrl,
                        _fileMeta: props.fileMeta,
                        _headers: props.headers
                    });
                }
            }
        };
        if (scriptViewerLoaded === true && adobePDFProgrammeInstalled === true) {
            callAdobeApi(props);
        }
    }, [adobePDFProgrammeInstalled, scriptViewerLoaded, props, adobeDCViewRef]);
    return React.createElement(AdobeDiv, { ...props });
}
;
