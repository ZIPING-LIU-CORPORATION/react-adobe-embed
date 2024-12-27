import React from "react";
import { FileMetaData, PreviewFileConfig, ReactViewAdobeProps } from "./types";
export { DefaultConfigs, FileMetaData, PreviewFileConfig, ReactViewAdobeProps } from "./types";
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
export declare function previewFile({ divId, viewerConfig, url, clientID, _fileMeta, _dcView, }: {
    divId: string;
    viewerConfig: Partial<PreviewFileConfig>;
    url: string;
    clientID: string;
    _dcView?: any;
    _fileMeta?: Partial<FileMetaData>;
}): Promise<any>;
export declare function log({ message, prefix, type, }: {
    message: string;
    prefix: string;
    type: 'info' | 'warn' | 'error';
}): void;
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
export declare function ReactViewAdobe(props: ReactViewAdobeProps): React.JSX.Element;
export default ReactViewAdobe;
