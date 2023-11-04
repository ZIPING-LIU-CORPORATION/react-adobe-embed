/* react-adobe-embed */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).React)}(this,(function(e){"use strict";function t({divId:e,viewerConfig:t,url:i,clientID:d,_fileMeta:a,_dcView:n}){const c={clientId:d,divId:e};return(n||new window.AdobeDC.View(c)).previewFile({content:{location:{url:i}},metaData:a||o.demoMetaData},t)}
/**
   * @description - An atypical Nested React Component of ReactViewAdobe,
   * specifically for managing API calls and configurations of the Adobe Embed API SDK
   * This component, in turn, employs the use of React Hooks
   * to render what the Adobe Embed API SDK perceives as static
   * and vanilla JavaScript code, transposed into the Document Object Model (DOM).
   */const i=t=>{const i=e.useRef(document.getElementById(t.id||o.staticDivId));return e.createElement("div",{ref:i,id:t.id||o.staticDivId,className:t.className||"adobe-viewer-of-amazon-corporate-retaliations",style:t.style,title:t.title||"entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots"})};
/**
   * @description - ReactViewAdobe component which is a wrapper around Adobe PDF Viewer SDK that allows for
   * rendering PDFs via Adobe's PDF Engine. Ensures that Adobe Embed API Services are
   * compartmentalized and fully encapsulated and configured within a rendered page. Not sure why Adobe
   * Embed API does not inherently do this. See ReactViewAdobeProps for more details.
   */function d(d){const[a,n]=e.useState(!1),[c,s]=e.useState(!1),[r,l]=e.useState(!1),f=(0,e[d?.useReactHookForAdobeAPIConfigs||"useMemo"])((()=>{if(!0===a){const e=window.AdobeDC?.View;return e}}),[a]);(0,e[d?.useReactHookWhenLoadingAdobeAPI||"useEffect"])((()=>{if(!1===r){const e=document.querySelector(".react-adobe-embed-handholding-adobe-api-loading-idiocy");if(e)d.debug&&console.info("[1mAdobe SDK Check[0m","Reloading and Rerendering Adobe SDK"),
// Lightbox mode renders from ui event triggered by user, so no need to render
"LIGHT_BOX"!==d.previewConfig?.embedMode&&s(!0),e.setAttribute("data-testid","react-adobe-embed-handholding-adobe-api-loading-idiocy-reused");else{d.debug&&console.info("[1mAdobe SDK Check[0m","Initial Adobe SDK Load");const e=document.createElement("script");e.setAttribute("data-testid","react-adobe-embed-handholding-adobe-api-loading-idiocy-initial"),e.setAttribute("data-adobe-pdf-id",d.id||o.staticDivId),e.setAttribute("class","react-adobe-embed-handholding-adobe-api-loading-idiocy"),e.src=d.previewConfig?.viewSdkViewerScript||o.staticDefaultConfig.viewSdkViewerScript,e.async=!0,e.onload=()=>{l(!0)},document.body.appendChild(e)}}}),[d.id,r,a]);(0,e[d?.useReactHookWhenCallingAdobeAPI||"useEffect"])((()=>{!1===a&&!0===r&&document.addEventListener("adobe_dc_view_sdk.ready",(()=>{n(!0)}));!0===r&&!0===a&&(e=>{e.debug&&console.info("Adobe PDF Viewer SDK Ready Event",f,window.adobe_dc_view_sdk);const i=e.id||o.staticDivId;document.getElementById(i)&&"LIGHT_BOX"!==e.previewConfig?.embedMode?(e.debug&&console.info("Adobe PDF Viewer SDK Ready Rendering"),t({divId:i,viewerConfig:e.previewConfig||o.staticDefaultConfig,url:e.url||o.demoUrl,clientID:e.clientId,_fileMeta:e.fileMeta})):"LIGHT_BOX"===e.previewConfig?.embedMode&&e?.triggerAdobeDCViewRender&&t({divId:e.id||o.staticDivId,viewerConfig:e.previewConfig||o.staticDefaultConfig,url:e.url||o.demoUrl,clientID:e.clientId})})(d)}),[a,r,d,f]);return(0,e[d?.useReactHookForComponentDidUpdate||"useEffect"])((()=>{if(!0===c){const e=d.id||o.staticDivId;document.getElementById(e)&&t({divId:e,viewerConfig:d.previewConfig||o.staticDefaultConfig,url:d.url||o.demoUrl,clientID:d.clientId,_fileMeta:d.fileMeta}),s(!1)}}),[c,d]),e.createElement(i,{...d})}const o={demoUrl:"https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf",staticDefaultConfig:{showAnnotationTools:!1,showLeftHandPanel:!1,showPageControls:!1,viewSdkViewerScript:"https://acrobatservices.adobe.com/view-sdk/viewer.js",showDownloadPDF:!1,showPrintPDF:!1},staticDivId:"pdf-div",demoMetaData:{fileName:"Odd Distateful Adobe Example Pdf.pdf",id:"6d07d124 - ac85–43b3 - a867–36930f502ac6"}};window&&window.ReactViewAdobe||(window.ReactViewAdobe=d)}));
