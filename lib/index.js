"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdobeReactView = exports.DefaultConfigs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.DefaultConfigs = {
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
const AdobeReactView = (props) => {
    var _a, _b;
    let adobeDCView;
    const [adobeMainReady, setAdobeMainReady] = (0, react_1.useState)(props.adobeMainReady || false);
    const [isReady, setIsReady] = (0, react_1.useState)(props.isReady || false);
    const previewFile = (divId, viewerConfig, url) => {
        var _a, _b;
        const config = {
            clientId: (_a = props.config) === null || _a === void 0 ? void 0 : _a.clientId,
            divId,
        };
        adobeDCView = new window.AdobeDC.View(config);
        const previewFilePromise = adobeDCView.previewFile({
            content: {
                location: {
                    url: url,
                },
            },
            metaData: ((_b = props.config) === null || _b === void 0 ? void 0 : _b.fileMeta) || exports.DefaultConfigs.demoMetaData,
        }, viewerConfig);
        return previewFilePromise;
    };
    const onLoaded = () => {
        var _a, _b;
        previewFile(((_a = props.config) === null || _a === void 0 ? void 0 : _a.divId) || exports.DefaultConfigs.staticDivId, props.previewConfig || exports.DefaultConfigs.staticDefaultConfig, ((_b = props.config) === null || _b === void 0 ? void 0 : _b.url) || exports.DefaultConfigs.demoUrl);
    };
    const onLoad = () => {
        var _a;
        if (document.getElementById(((_a = props.config) === null || _a === void 0 ? void 0 : _a.divId) || exports.DefaultConfigs.staticDivId)) {
            if (isReady === false) {
                setIsReady(true);
            }
        }
        if (global.AdobeDC) {
            if (adobeMainReady === false) {
                setAdobeMainReady(true);
            }
        }
    };
    if (document.getElementById(((_a = props.config) === null || _a === void 0 ? void 0 : _a.divId) || exports.DefaultConfigs.staticDivId) ||
        (isReady && adobeMainReady)) {
        onLoaded();
    }
    return ((0, jsx_runtime_1.jsx)("div", { onLoad: () => onLoad(), id: ((_b = props.config) === null || _b === void 0 ? void 0 : _b.divId) || exports.DefaultConfigs.staticDivId, className: "AdobeReactView" }));
};
exports.AdobeReactView = AdobeReactView;
const ReactViewAdobe = (props) => {
    var _a;
    const [adobeMainReady, setAdobeMainReady] = (0, react_1.useState)(props.adobeMainReady || false);
    const [isReady, setIsReady] = (0, react_1.useState)(props.isReady || false);
    const divID = ((_a = props.config) === null || _a === void 0 ? void 0 : _a.divId) || exports.DefaultConfigs.staticDivId;
    (0, react_1.useEffect)(() => {
        if (document.getElementById(divID)) {
            setIsReady(true);
        }
        if (global.AdobeDC) {
            if (adobeMainReady === false) {
                setAdobeMainReady(true);
            }
        }
    }, [isReady, adobeMainReady, divID]);
    return ((0, jsx_runtime_1.jsx)(exports.AdobeReactView, { adobeMainReady: adobeMainReady, isReady: isReady, config: props.config, previewConfig: props.previewConfig }));
};
exports.default = ReactViewAdobe;
