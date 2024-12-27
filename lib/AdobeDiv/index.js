import React from "react";
import { DefaultConfigs } from "../types";
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
export default (AdobeDiv);
