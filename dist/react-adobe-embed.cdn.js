(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(require("react")):"function"==typeof define&&define.amd?define(["react"],b):(a="undefined"==typeof globalThis?a||self:globalThis,b(a.React))})(this,function(a){"use strict";function b(a){return a&&"object"==typeof a&&"default"in a?a:{default:a}}function c({divId:a,viewerConfig:b,url:c,clientID:d,_fileMeta:e,_dcView:g}){const h=g||new window.AdobeDC.View({clientId:d,divId:a}),i=h.previewFile({content:{location:{url:c}},metaData:e||f.demoMetaData},b);return i}function d(a){const[b,d]=e["default"].useState(!1),[h,i]=e["default"].useState(!1),[j,k]=e["default"].useState(!1),l=e["default"][a?.useReactHookForAdobeAPIConfigs||"useMemo"],m=l(()=>{if(!0===b){const a=window.AdobeDC?.["View"];return a}},[b]),n=e["default"][a?.useReactHookWhenLoadingAdobeAPI||"useEffect"];n(()=>{if(!1===j){const b=document.querySelector(".react-adobe-embed-handholding-adobe-api-loading-idiocy");if(b)i(!0);else{const b=document.createElement("script");b.setAttribute("data-adobe-pdf-id",a.id||f.staticDivId),b.setAttribute("class","react-adobe-embed-handholding-adobe-api-loading-idiocy"),b.src="https://acrobatservices.adobe.com/view-sdk/viewer.js",b.async=!0,b.onload=()=>{k(!0)},document.body.appendChild(b)}}},[a.id,j,b]);const o=e["default"][a?.useReactHookWhenCallingAdobeAPI||"useEffect"];return o(()=>{!1===b&&!0===j&&document.addEventListener("adobe_dc_view_sdk.ready",()=>{d(!0)});!0===j&&!0===b&&(a=>{a.debug&&console.info("Adobe PDF Viewer SDK Ready Event",m,window.adobe_dc_view_sdk);const b=a.id||f.staticDivId,d=document.getElementById(b);d&&"LIGHT_BOX"!==a.previewConfig?.embedMode?(a.debug&&console.info("Adobe PDF Viewer SDK Ready Rendering"),c({divId:b,viewerConfig:a.previewConfig||f.staticDefaultConfig,url:a.url||f.demoUrl,clientID:a.clientId,_fileMeta:a.fileMeta})):"LIGHT_BOX"===a.previewConfig?.embedMode&&a?.triggerAdobeDCViewRender&&c({divId:a.id||f.staticDivId,viewerConfig:a.previewConfig||f.staticDefaultConfig,url:a.url||f.demoUrl,clientID:a.clientId})})(a)},[b,j,a,m]),e["default"].useEffect(()=>{if(!0===h){const b=a.id||f.staticDivId,d=document.getElementById(b);d&&c({divId:b,viewerConfig:a.previewConfig||f.staticDefaultConfig,url:a.url||f.demoUrl,clientID:a.clientId,_fileMeta:a.fileMeta}),i(!1)}},[h,a]),e["default"].createElement(g,{...a})}var e=b(a);const f={demoUrl:"https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",staticDefaultConfig:{showAnnotationTools:!1,showLeftHandPanel:!1,showPageControls:!1,showDownloadPDF:!1,showPrintPDF:!1},staticDivId:"pdf-div",demoMetaData:{fileName:"Menu.pdf",id:"6d07d124 - ac85\u201343b3 - a867\u201336930f502ac6"}},g=a=>{const b=e["default"].useRef(document.getElementById(a.id||f.staticDivId));return e["default"].createElement("div",{ref:b,id:a.id||f.staticDivId,className:a.className||"adobe-viewer-of-amazon-corporate-retaliations",style:a.style,title:a.title||"entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots"})};(function(){window&&window.ReactViewAdobe||(window.ReactViewAdobe=d)})()});
