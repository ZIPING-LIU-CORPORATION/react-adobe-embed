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
class AdobeReactView extends react_1.Component {
    static checkForViewJsLoaded() {
        return window["adobe_dc_view_sdk"] != undefined;
    }
    static checkForDeprecatedMainJsLoaded() {
        return window["AdobeDC"] != undefined;
    }
    constructor(props) {
        var _a, _b, _c, _d, _e, _f;
        super(props);
        this.state = {
            adobeMainReady: false,
            previewConfig: props.previewConfig || exports.DefaultConfigs.staticDefaultConfig,
            isReady: props.isReady || false,
            config: {
                divId: ((_a = props.config) === null || _a === void 0 ? void 0 : _a.divId) || exports.DefaultConfigs.staticDivId,
                clientId: ((_b = props.config) === null || _b === void 0 ? void 0 : _b.clientId) || "",
                url: ((_c = props.config) === null || _c === void 0 ? void 0 : _c.url) || exports.DefaultConfigs.demoUrl,
                fileMeta: ((_d = props.config) === null || _d === void 0 ? void 0 : _d.fileMeta) || exports.DefaultConfigs.demoMetaData,
                content: ((_e = props.config) === null || _e === void 0 ? void 0 : _e.content) || {
                    location: {
                        url: ((_f = props.config) === null || _f === void 0 ? void 0 : _f.url) || exports.DefaultConfigs.demoUrl,
                    },
                },
            },
        };
        this.onLoad = this.onLoad.bind(this);
        this.onLoaded = this.onLoaded.bind(this);
        this.render = this.render.bind(this);
        this.previewFile = this.previewFile.bind(this);
    }
    previewFile(divId, viewerConfig, url) {
        var _a, _b;
        const config = {
            clientId: (_a = this.state.config) === null || _a === void 0 ? void 0 : _a.clientId,
            divId,
        };
        this.dcView = new window.AdobeDC.View(config);
        const previewFilePromise = this.dcView.previewFile({
            content: {
                location: {
                    url: url,
                },
            },
            metaData: ((_b = this.state.config) === null || _b === void 0 ? void 0 : _b.fileMeta) || exports.DefaultConfigs.demoMetaData,
        }, viewerConfig);
        return previewFilePromise;
    }
    onLoaded() {
        var _a, _b;
        this.previewFile(((_a = this.state.config) === null || _a === void 0 ? void 0 : _a.divId) || exports.DefaultConfigs.staticDivId, this.state.previewConfig, ((_b = this.state.config) === null || _b === void 0 ? void 0 : _b.url) || exports.DefaultConfigs.demoUrl);
    }
    onLoad() {
        var _a, _b, _c;
        console.log("load", ((_a = this.state.config) === null || _a === void 0 ? void 0 : _a.divId) || exports.DefaultConfigs.staticDivId);
        document.addEventListener("adobe_dc_view_sdk.ready", () => {
            this.setState({
                adobeMainReady: true,
            });
            console.log("listed");
        });
        if (document.getElementById(((_b = this.state.config) === null || _b === void 0 ? void 0 : _b.divId) || exports.DefaultConfigs.staticDivId)) {
            this.setState({
                isReady: true,
            });
        }
        if (AdobeReactView.checkForViewJsLoaded() === true &&
            document.getElementById(((_c = this.state.config) === null || _c === void 0 ? void 0 : _c.divId) || exports.DefaultConfigs.staticDivId)) {
            this.setState({
                adobeMainReady: true,
            });
        }
    }
    componentDidMount() {
        this.onLoad();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
        if (this.state.adobeMainReady === true && this.state.isReady === true) {
            this.onLoaded();
        }
        return ((0, jsx_runtime_1.jsx)("div", { onLoad: () => {
                this.onLoad();
            }, id: ((_a = this.state.config) === null || _a === void 0 ? void 0 : _a.divId) || exports.DefaultConfigs.staticDivId, className: this.props.className ||
                "adobe-viewer-of-amazon-corporate-retaliations", style: {
                width: ((_b = this.props.style) === null || _b === void 0 ? void 0 : _b.width) || undefined,
                height: ((_c = this.props.style) === null || _c === void 0 ? void 0 : _c.height) || undefined,
                position: ((_d = this.props.style) === null || _d === void 0 ? void 0 : _d.position) || "static",
                top: ((_e = this.props.style) === null || _e === void 0 ? void 0 : _e.top) || undefined,
                left: ((_f = this.props.style) === null || _f === void 0 ? void 0 : _f.left) || undefined,
                right: ((_g = this.props.style) === null || _g === void 0 ? void 0 : _g.right) || undefined,
                bottom: ((_h = this.props.style) === null || _h === void 0 ? void 0 : _h.bottom) || undefined,
                zIndex: ((_j = this.props.style) === null || _j === void 0 ? void 0 : _j.zIndex) || "initial",
                backgroundColor: ((_k = this.props.style) === null || _k === void 0 ? void 0 : _k.backgroundColor) || "inherit",
                color: ((_l = this.props.style) === null || _l === void 0 ? void 0 : _l.color) || "inherit",
                fontSize: ((_m = this.props.style) === null || _m === void 0 ? void 0 : _m.fontSize) || "inherit",
                fontFamily: ((_o = this.props.style) === null || _o === void 0 ? void 0 : _o.fontFamily) || "inherit",
                fontWeight: ((_p = this.props.style) === null || _p === void 0 ? void 0 : _p.fontWeight) || "inherit",
                fontStyle: ((_q = this.props.style) === null || _q === void 0 ? void 0 : _q.fontStyle) || "inherit",
                lineHeight: ((_r = this.props.style) === null || _r === void 0 ? void 0 : _r.lineHeight) || "inherit",
                margin: ((_s = this.props.style) === null || _s === void 0 ? void 0 : _s.margin) || "inherit",
                padding: ((_t = this.props.style) === null || _t === void 0 ? void 0 : _t.padding) || "inherit",
                marginTop: ((_u = this.props.style) === null || _u === void 0 ? void 0 : _u.marginTop) || "inherit",
                marginBottom: ((_v = this.props.style) === null || _v === void 0 ? void 0 : _v.marginBottom) || "inherit",
                marginLeft: ((_w = this.props.style) === null || _w === void 0 ? void 0 : _w.marginLeft) || "inherit",
                marginRight: ((_x = this.props.style) === null || _x === void 0 ? void 0 : _x.marginRight) || "inherit",
                paddingTop: ((_y = this.props.style) === null || _y === void 0 ? void 0 : _y.paddingTop) || "inherit",
                paddingBottom: ((_z = this.props.style) === null || _z === void 0 ? void 0 : _z.paddingBottom) || "inherit",
                paddingLeft: ((_0 = this.props.style) === null || _0 === void 0 ? void 0 : _0.paddingLeft) || "inherit",
                paddingRight: ((_1 = this.props.style) === null || _1 === void 0 ? void 0 : _1.paddingRight) || "inherit",
                alignSelf: ((_2 = this.props.style) === null || _2 === void 0 ? void 0 : _2.alignSelf) || "inherit",
                alignItems: ((_3 = this.props.style) === null || _3 === void 0 ? void 0 : _3.alignItems) || "inherit",
                alignContent: ((_4 = this.props.style) === null || _4 === void 0 ? void 0 : _4.alignContent) || "inherit",
                maxWidth: ((_5 = this.props.style) === null || _5 === void 0 ? void 0 : _5.maxWidth) || "inherit",
                minWidth: ((_6 = this.props.style) === null || _6 === void 0 ? void 0 : _6.minWidth) || "inherit",
                maxHeight: ((_7 = this.props.style) === null || _7 === void 0 ? void 0 : _7.maxHeight) || "inherit",
                minHeight: ((_8 = this.props.style) === null || _8 === void 0 ? void 0 : _8.minHeight) || "200px",
            }, title: this.props.title ||
                "entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots" }));
    }
}
exports.AdobeReactView = AdobeReactView;
const ReactViewAdobe = (props) => {
    var _a;
    const [adobeMainReady, setAdobeMainReady] = (0, react_1.useState)(props.adobeMainReady || false);
    const [isReady, setIsReady] = (0, react_1.useState)(props.isReady || false);
    const divID = ((_a = props.config) === null || _a === void 0 ? void 0 : _a.divId) || exports.DefaultConfigs.staticDivId;
    const StoreRef = (0, react_1.useRef)(new AdobeReactView({
        previewConfig: props.previewConfig,
        config: props.config,
        isReady: isReady,
        adobeMainReady: adobeMainReady,
        style: props.style,
        className: props.className,
        title: props.title ||
            "react-adobe-state-government-ensuring-rule-of-law-against-amazon-retaliator-or-a-child-component-framed-by-state-regulations-such-as-adobe-react-embed-core-div",
    }));
    (0, react_1.useMemo)(() => {
        StoreRef.current = new AdobeReactView({
            previewConfig: props.previewConfig,
            config: props.config,
            isReady: isReady,
            adobeMainReady: adobeMainReady,
            style: props.style,
            className: props.className,
            title: props.title ||
                "react-adobe-state-government-ensuring-rule-of-law-against-amazon-retaliator-or-a-child-component-framed-by-state-regulations-such-as-adobe-react-embed-core-div",
        });
    }, [
        props.previewConfig,
        props.config,
        isReady,
        adobeMainReady,
        props.style,
        props.className,
        props.title,
    ]);
    (0, react_1.useEffect)(() => {
        if (document.getElementById(divID)) {
            setIsReady(true);
        }
    }, [isReady, divID]);
    document.addEventListener("adobe_dc_view_sdk.ready", () => {
        setAdobeMainReady(true);
    });
    return ((0, jsx_runtime_1.jsx)(AdobeReactView, { previewConfig: props.previewConfig, config: props.config, isReady: isReady, adobeMainReady: adobeMainReady, style: props.style, className: props.className, title: props.title ||
            "react-adobe-state-government-ensuring-rule-of-law-against-amazon-retaliator-or-a-child-component-framed-by-state-regulations-such-as-adobe-react-embed-core-div" }));
};
exports.default = ReactViewAdobe;
