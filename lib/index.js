import React from "react";
import { DefaultConfigs } from "./types";
import AdobeDiv from "./AdobeDiv";
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
export function log({ message, prefix = "ReactViewAdobe", type = "info", }) {
    // format the message  and better colors, prefix in bold
    const formattedMessage = `\x1b[1m${prefix}\x1b[0m: ${message}`;
    // log the message to the console add prefix in bold
    console[type](formattedMessage);
}
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
export function ReactViewAdobe(props) {
    const [adobePDFProgrammeInstalled, setAdobePDFProgrammeInstalled] = React.useState(false);
    const [componentNeedsRendering, setComponentNeedsRendering] = React.useState(false);
    const [scriptViewerLoaded, setScriptViewerLoaded] = React.useState(false);
    const useHooksForConfig = React[props?.useReactHookForAdobeAPIConfigs || "useMemo"];
    const renderAdobePDF = React.useCallback(() => {
        const divId = props.id || DefaultConfigs.staticDivId;
        const viewerConfig = props.previewConfig || DefaultConfigs.staticDefaultConfig;
        const url = props.url || DefaultConfigs.demoUrl;
        // For Lightbox, we only call if "triggerAdobeDCViewRender" is set
        if (viewerConfig?.embedMode === "LIGHT_BOX") {
            if (props.triggerAdobeDCViewRender) {
                previewFile({
                    divId,
                    viewerConfig,
                    url,
                    clientID: props.clientId,
                    _fileMeta: props.fileMeta,
                });
            }
        }
        else {
            // Normal embed mode
            const containerElm = document.getElementById(divId);
            if (containerElm) {
                if (props.debug) {
                    console.info("Adobe PDF Viewer: Attempting to preview the file");
                }
                previewFile({
                    divId,
                    viewerConfig,
                    url,
                    clientID: props.clientId,
                    _fileMeta: props.fileMeta,
                });
            }
        }
    }, [
        props.id,
        props.url,
        props.clientId,
        props.fileMeta,
        props.debug,
        props.triggerAdobeDCViewRender,
        props.previewConfig,
    ]);
    const adobeDCView = useHooksForConfig(() => {
        if (props.debug) {
            log({
                message: `At hooks to check if Adobe DC View is available`,
                prefix: "ReactViewAdobe:adobeDCView",
                type: "info",
            });
        }
        if (adobePDFProgrammeInstalled === true) {
            const adobedcview = window["AdobeDC"]?.["View"];
            if (props.debug) {
                log({
                    message: `Adobe DC View is available`,
                    prefix: "ReactViewAdobe:adobeDCView",
                    type: "info",
                });
            }
            return adobedcview;
        }
    }, [adobePDFProgrammeInstalled]);
    const useHooksForLoading = React[props?.useReactHookWhenLoadingAdobeAPI || "useEffect"];
    useHooksForLoading(() => {
        if (scriptViewerLoaded === false) {
            const scriptExistsALready = document.querySelector(`script.react-adobe-embed-handholding-adobe-api-loading-idiocy[data-adobe-pdf-id="${props.id || DefaultConfigs.staticDivId}"]`);
            if (scriptExistsALready) {
                if (props.debug) {
                    // console.info(`\x1b[1mAdobe SDK Check\x1b[0m`, 'Reloading and Rerendering Adobe SDK');
                    log({
                        message: `Reloading and Rerendering Adobe SDK`,
                        prefix: "ReactViewAdobe:AdobeSDK",
                        type: "info",
                    });
                }
                // Lightbox mode renders from ui event triggered by user, so no need to render
                if (props.previewConfig?.embedMode !== "LIGHT_BOX") {
                    setComponentNeedsRendering(true);
                }
                scriptExistsALready.setAttribute("data-testid", "react-adobe-embed-handholding-adobe-api-loading-idiocy-reused");
            }
            else {
                if (props.debug) {
                    log({
                        message: `Initial Adobe SDK Load`,
                        prefix: "ReactViewAdobe:AdobeSDK",
                        type: "info",
                    });
                }
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
            if (props.debug) {
                /*
                  console.info(
                  "Adobe PDF Viewer SDK Ready Event",
                  adobeDCView,
                  (window as any)["adobe_dc_view_sdk"],
                );*/
                log({
                    message: "At Calling Adobe API to render PDF - window.adobe_dc_view_sdk:" + window["adobe_dc_view_sdk"],
                    prefix: "ReactViewAdobe:callAdobeApi",
                    type: "info",
                });
            }
            renderAdobePDF();
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
                renderAdobePDF();
            }
            setComponentNeedsRendering(false);
        }
    }, [componentNeedsRendering, props]);
    return React.createElement(AdobeDiv, { ...props });
}
export default ReactViewAdobe;
