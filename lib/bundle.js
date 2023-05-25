(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactAdobeEmbed = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  function previewFile({ divId, viewerConfig, url, clientID, _fileMeta, _dcView, }) {
      const config = {
          clientId: clientID,
          divId,
      };
      const dcView = _dcView || new window.AdobeDC.View(config);
      console.log('dcView', (dcView));
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
      const [adobePDFProgrammeInstalled, setAdobePDFProgrammeInstalled] = React__default["default"].useState(false);
      const [adobeDCView, setAdobeDCView] = React__default["default"].useState(null);
      const appendAdobeScriptLoader = React__default["default"].useCallback(() => {
          const scriptExists = document.getElementById("adobe-pdf-viewer-script");
          if (scriptExists) {
              scriptExists.remove();
          }
          const script = document.createElement("script");
          script.src = "https://documentservices.adobe.com/view-sdk/viewer.js";
          script.async = true;
          script.id = "adobe-pdf-viewer-script";
          document.body.appendChild(script);
          console.info("Adobe PDF Viewer Script Appended");
          setAdobePDFProgrammeInstalled(true);
      }, [
          setAdobePDFProgrammeInstalled
      ]);
      React__default["default"].useEffect(() => {
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
                  console.info("Adobe PDF Viewer SDK Ready Event");
                  const divId = props.id || DefaultConfigs.staticDivId;
                  const divElm = document.getElementById(divId);
                  if (divElm && props.previewConfig?.embedMode !== 'LIGHT_BOX') {
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
      return (React__default["default"].createElement("div", { id: props.id || DefaultConfigs.staticDivId, className: props.className ||
              "adobe-viewer-of-amazon-corporate-retaliations", style: props.style, title: props.title ||
              "entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots" }));
  };
  function AdobeViewerGlobalExists(window) {
      console.info(window["adobe_dc_view_sdk"]);
      return window["adobe_dc_view_sdk"] !== undefined;
  }

  exports.AdobeViewerGlobalExists = AdobeViewerGlobalExists;
  exports.ReactViewAdobe = ReactViewAdobe;
  exports.previewFile = previewFile;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
