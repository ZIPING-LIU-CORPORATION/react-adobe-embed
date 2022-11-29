"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdobeReactView = exports.DefaultConfigs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const lodash_1 = __importDefault(require("lodash"));
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
    checkForViewJsLoaded() {
        return (window["adobe_dc_view_sdk"] != undefined &&
            typeof window["adobe_dc_view_sdk"] === "function");
    }
    checkForDeprecatedMainJsLoaded() {
        return (window["AdobeDC"] != undefined &&
            window["AdobeDC"] === "function");
    }
    constructor(props) {
        var _a, _b, _c, _d, _e, _f;
        super(props);
        this.previewFile = (divId, viewerConfig, url) => {
            const config = {
                clientId: this.state.config.clientId,
                divId,
            };
            const dcView = new window.AdobeDC.View(config);
            this.setState({
                adobeDCView: dcView,
            });
            if (this.state.adobeDCView) {
                const previewFilePromise = this.state.adobeDCView.previewFile({
                    content: {
                        location: {
                            url: url,
                        },
                    },
                    metaData: this.state.config.fileMeta || exports.DefaultConfigs.demoMetaData,
                }, viewerConfig);
                return previewFilePromise;
            }
            else {
                return null;
            }
        };
        this.onLoaded = () => {
            this.previewFile(this.state.config.divId, this.state.previewConfig, this.state.config.url);
        };
        this.state = {
            adobeMainReady: props.adobeMainReady || false,
            previewConfig: props.previewConfig || exports.DefaultConfigs.staticDefaultConfig,
            isReady: props.isReady || false,
            adobeDCView: null,
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
        this.checkForViewJsLoaded = this.checkForViewJsLoaded.bind(this);
        this.checkForDeprecatedMainJsLoaded = this.checkForDeprecatedMainJsLoaded.bind(this);
        this.render = this.render.bind(this);
    }
    onLoad() {
        if (document.getElementById(this.state.config.divId || exports.DefaultConfigs.staticDivId)) {
            if (this.state.isReady === false) {
                let oldState = lodash_1.default.cloneDeep(this.state);
                const newState = Object.assign(oldState);
                newState["isReady"] = true;
                this.setState(newState);
            }
        }
        if (this.checkForDeprecatedMainJsLoaded() === true ||
            this.checkForViewJsLoaded() === true) {
            if (this.state.adobeMainReady === false) {
                let oldState = lodash_1.default.cloneDeep(this.state);
                const newState = Object.assign(oldState);
                newState["adobeMainReady"] = true;
                this.setState(newState);
                console.log("new state", JSON.stringify(this.state, null, 2));
            }
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
        if (document.getElementById(this.state.config.divId || exports.DefaultConfigs.staticDivId) &&
            this.state.isReady &&
            this.state.adobeMainReady) {
            this.onLoaded();
        }
        return ((0, jsx_runtime_1.jsx)("div", { onLoad: this.onLoad, id: this.state.config.divId || exports.DefaultConfigs.staticDivId, className: this.props.className ||
                "adobe-viewer-of-amazon-corporate-retaliations", style: {
                width: ((_a = this.props.style) === null || _a === void 0 ? void 0 : _a.width) || undefined,
                height: ((_b = this.props.style) === null || _b === void 0 ? void 0 : _b.height) || undefined,
                position: ((_c = this.props.style) === null || _c === void 0 ? void 0 : _c.position) || "static",
                top: ((_d = this.props.style) === null || _d === void 0 ? void 0 : _d.top) || undefined,
                left: ((_e = this.props.style) === null || _e === void 0 ? void 0 : _e.left) || undefined,
                right: ((_f = this.props.style) === null || _f === void 0 ? void 0 : _f.right) || undefined,
                bottom: ((_g = this.props.style) === null || _g === void 0 ? void 0 : _g.bottom) || undefined,
                zIndex: ((_h = this.props.style) === null || _h === void 0 ? void 0 : _h.zIndex) || "initial",
                backgroundColor: ((_j = this.props.style) === null || _j === void 0 ? void 0 : _j.backgroundColor) || "inherit",
                color: ((_k = this.props.style) === null || _k === void 0 ? void 0 : _k.color) || "inherit",
                fontSize: ((_l = this.props.style) === null || _l === void 0 ? void 0 : _l.fontSize) || "inherit",
                fontFamily: ((_m = this.props.style) === null || _m === void 0 ? void 0 : _m.fontFamily) || "inherit",
                fontWeight: ((_o = this.props.style) === null || _o === void 0 ? void 0 : _o.fontWeight) || "inherit",
                fontStyle: ((_p = this.props.style) === null || _p === void 0 ? void 0 : _p.fontStyle) || "inherit",
                lineHeight: ((_q = this.props.style) === null || _q === void 0 ? void 0 : _q.lineHeight) || "inherit",
                margin: ((_r = this.props.style) === null || _r === void 0 ? void 0 : _r.margin) || "inherit",
                padding: ((_s = this.props.style) === null || _s === void 0 ? void 0 : _s.padding) || "inherit",
                marginTop: ((_t = this.props.style) === null || _t === void 0 ? void 0 : _t.marginTop) || "inherit",
                marginBottom: ((_u = this.props.style) === null || _u === void 0 ? void 0 : _u.marginBottom) || "inherit",
                marginLeft: ((_v = this.props.style) === null || _v === void 0 ? void 0 : _v.marginLeft) || "inherit",
                marginRight: ((_w = this.props.style) === null || _w === void 0 ? void 0 : _w.marginRight) || "inherit",
                paddingTop: ((_x = this.props.style) === null || _x === void 0 ? void 0 : _x.paddingTop) || "inherit",
                paddingBottom: ((_y = this.props.style) === null || _y === void 0 ? void 0 : _y.paddingBottom) || "inherit",
                paddingLeft: ((_z = this.props.style) === null || _z === void 0 ? void 0 : _z.paddingLeft) || "inherit",
                paddingRight: ((_0 = this.props.style) === null || _0 === void 0 ? void 0 : _0.paddingRight) || "inherit",
                alignSelf: ((_1 = this.props.style) === null || _1 === void 0 ? void 0 : _1.alignSelf) || "inherit",
                alignItems: ((_2 = this.props.style) === null || _2 === void 0 ? void 0 : _2.alignItems) || "inherit",
                alignContent: ((_3 = this.props.style) === null || _3 === void 0 ? void 0 : _3.alignContent) || "inherit",
                maxWidth: ((_4 = this.props.style) === null || _4 === void 0 ? void 0 : _4.maxWidth) || "inherit",
                minWidth: ((_5 = this.props.style) === null || _5 === void 0 ? void 0 : _5.minWidth) || "200px",
                maxHeight: ((_6 = this.props.style) === null || _6 === void 0 ? void 0 : _6.maxHeight) || "100%",
                minHeight: ((_7 = this.props.style) === null || _7 === void 0 ? void 0 : _7.minHeight) || "328px",
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
            "react-adobe-state-government-ensuring-rule-of-law-against-amazon-retaliator-or-a-child-component-framed-by-state-regulations-such-as-adobe-react-embed-core-div"
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
                "react-adobe-state-government-ensuring-rule-of-law-against-amazon-retaliator-or-a-child-component-framed-by-state-regulations-such-as-adobe-react-embed-core-div"
        });
    }, [props.previewConfig, props.config, isReady, adobeMainReady, props.style, props.className, props.title]);
    (0, react_1.useEffect)(() => {
        if (document.getElementById(divID)) {
            setIsReady(true);
        }
        if (StoreRef.current.checkForDeprecatedMainJsLoaded() === true ||
            StoreRef.current.checkForViewJsLoaded() === true) {
            setAdobeMainReady(true);
        }
    }, [isReady, adobeMainReady, divID]);
    const ReactView = StoreRef.current;
    return StoreRef.current.render();
};
exports.default = ReactViewAdobe;
