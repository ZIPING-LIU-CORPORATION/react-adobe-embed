import React from "react";
export function previewFile({ divId, viewerConfig, url, clientID, _fileMeta, _dcView, }) {
    const config = {
        clientId: clientID,
        divId,
    };
    const dcView = _dcView || new window.AdobeDC.View(config);
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
/**
 * @description - An atypical Nested React Component of ReactViewAdobe,
 * specifically for managing API calls and configurations of the Adobe Embed API SDK
 * This component, in turn, employs the use of React Hooks
 * to render what the Adobe Embed API SDK perceives as static
 * and vanilla JavaScript code, transposed into the Document Object Model (DOM).
 */
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
    const [componentNeedsRendering, setComponentNeedsRendering] = React.useState(false);
    const [scriptViewerLoaded, setScriptViewerLoaded] = React.useState(false);
    const useHooksForConfig = React[props?.useReactHookForAdobeAPIConfigs || "useMemo"];
    const adobeDCView = useHooksForConfig(() => {
        if (adobePDFProgrammeInstalled === true) {
            const adobedcview = window["AdobeDC"]?.["View"];
            return adobedcview;
        }
    }, [adobePDFProgrammeInstalled]);
    const useHooksForLoading = React[props?.useReactHookWhenLoadingAdobeAPI || "useEffect"];
    useHooksForLoading(() => {
        if (scriptViewerLoaded === false) {
            const scriptExistsALready = document.querySelector(".react-adobe-embed-handholding-adobe-api-loading-idiocy");
            if (scriptExistsALready) {
                setComponentNeedsRendering(true);
                scriptExistsALready.setAttribute("data-testid", "react-adobe-embed-handholding-adobe-api-loading-idiocy-reused");
            }
            else {
                const script = document.createElement("script");
                script.setAttribute("data-testid", "react-adobe-embed-handholding-adobe-api-loading-idiocy-initial");
                script.setAttribute("data-adobe-pdf-id", props.id || DefaultConfigs.staticDivId);
                script.setAttribute("class", "react-adobe-embed-handholding-adobe-api-loading-idiocy");
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
    const useHooksForCall = React[props?.useReactHookWhenCallingAdobeAPI || "useEffect"];
    useHooksForCall(() => {
        if (adobePDFProgrammeInstalled === false && scriptViewerLoaded === true) {
            document.addEventListener("adobe_dc_view_sdk.ready", () => {
                setAdobePDFProgrammeInstalled(true);
            });
        }
        const callAdobeApi = (props) => {
            if (props.debug)
                console.info("Adobe PDF Viewer SDK Ready Event", adobeDCView, window["adobe_dc_view_sdk"]);
            const divId = props.id || DefaultConfigs.staticDivId;
            const divElm = document.getElementById(divId);
            if (divElm && props.previewConfig?.embedMode !== "LIGHT_BOX") {
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
            else if (props.previewConfig?.embedMode === "LIGHT_BOX") {
                if (props?.triggerAdobeDCViewRender) {
                    previewFile({
                        divId: props.id || DefaultConfigs.staticDivId,
                        viewerConfig: props.previewConfig || DefaultConfigs.staticDefaultConfig,
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
    const useReactHookForComponentDidUpdate = React[props?.useReactHookForComponentDidUpdate || "useEffect"];
    useReactHookForComponentDidUpdate(() => {
        if (componentNeedsRendering === true) {
            const divId = props.id || DefaultConfigs.staticDivId;
            const divElm = document.getElementById(divId);
            if (divElm) {
                previewFile({
                    divId,
                    viewerConfig: props.previewConfig || DefaultConfigs.staticDefaultConfig,
                    url: props.url || DefaultConfigs.demoUrl,
                    clientID: props.clientId,
                    _fileMeta: props.fileMeta,
                });
            }
            setComponentNeedsRendering(false);
        }
    }, [componentNeedsRendering, props]);
    return React.createElement(AdobeDiv, { ...props });
}
export const DefaultConfigs = {
    demoUrl: "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf",
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
