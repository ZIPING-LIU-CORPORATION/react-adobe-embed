<<<<<<< HEAD
import e from"react";const t={demoUrl:"https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",staticDefaultConfig:{showAnnotationTools:!1,showLeftHandPanel:!1,showPageControls:!1,showDownloadPDF:!1,showPrintPDF:!1},staticDivId:"pdf-div",demoMetaData:{fileName:"Menu.pdf",id:"6d07d124 - ac85–43b3 - a867–36930f502ac6"}},d=d=>{const o=e.useRef(document.getElementById(d.id||t.staticDivId));return e.createElement("div",{ref:o,id:d.id||t.staticDivId,className:d.className||"adobe-viewer-of-amazon-corporate-retaliations",style:d.style,title:d.title||"entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots"})};function o(o){const[i,a]=e.useState(!1),[n,s]=e.useState(!1),r=e.useRef();(0,e[o?.useReactHookForAdobeAPIConfigs||"useEffect"])((()=>{const e={clientId:o.clientId,divId:o.id||t.staticDivId};i&&n&&(r.current=new window.AdobeDC.View(e))}),[i,n,o.clientId,o.id]);(0,e[o?.useReactHookWhenLoadingAdobeAPI||"useEffect"])((()=>{if(!1===n){if(document.querySelector(".react-adobe-embed-handholding-adobe-api-loading-idiocy"))!1===i&&document.addEventListener("adobe_dc_view_sdk.ready",(()=>{a(!0)})),s(!0);else{const e=document.createElement("script");e.setAttribute("data-adobe-pdf-id",o.id||t.staticDivId),e.setAttribute("class","react-adobe-embed-handholding-adobe-api-loading-idiocy"),e.src="https://documentcloud.adobe.com/view-sdk/viewer.js",e.async=!0,e.onload=()=>{s(!0)},document.body.appendChild(e)}}}),[o.id,n,i]);return(0,e[o?.useReactHookWhenCallingAdobeAPI||"useEffect"])((()=>{!1===i&&!0===n&&document.addEventListener("adobe_dc_view_sdk.ready",(()=>{a(!0)})),!0===n&&!0===i&&(e=>{const d=({viewerConfig:e,url:d,_headers:o,_fileMeta:i,_dcView:a})=>(a||r.current).previewFile({content:{location:{url:d}},metaData:i||t.demoMetaData},e);e.debug&&console.info("Adobe PDF Viewer SDK Ready Event",r,window.adobe_dc_view_sdk);const o=e.id||t.staticDivId;document.getElementById(o)&&"LIGHT_BOX"!==e.previewConfig?.embedMode?(e.debug&&console.info("Adobe PDF Viewer SDK Ready Rendering"),d({viewerConfig:e.previewConfig||t.staticDefaultConfig,url:e.url||t.demoUrl,_headers:e.headers,_fileMeta:e.fileMeta})):"LIGHT_BOX"===e.previewConfig?.embedMode&&e?.triggerAdobeDCViewRender&&d({viewerConfig:e.previewConfig||t.staticDefaultConfig,url:e.url||t.demoUrl,_fileMeta:e.fileMeta,_headers:e.headers})})(o)}),[i,n,o,r]),e.createElement(d,{...o})}export{o as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmVzbS5tanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgRGVmYXVsdENvbmZpZ3MgPSB7XG4gICAgZGVtb1VybDogXCJodHRwczovL2RvY3VtZW50Y2xvdWQuYWRvYmUuY29tL3ZpZXctc2RrLWRlbW8vUERGcy9Cb2RlYSBCcm9jaHVyZS5wZGZcIixcbiAgICBzdGF0aWNEZWZhdWx0Q29uZmlnOiB7XG4gICAgICAgIHNob3dBbm5vdGF0aW9uVG9vbHM6IGZhbHNlLFxuICAgICAgICBzaG93TGVmdEhhbmRQYW5lbDogZmFsc2UsXG4gICAgICAgIHNob3dQYWdlQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICBzaG93RG93bmxvYWRQREY6IGZhbHNlLFxuICAgICAgICBzaG93UHJpbnRQREY6IGZhbHNlLFxuICAgIH0sXG4gICAgc3RhdGljRGl2SWQ6IFwicGRmLWRpdlwiLFxuICAgIGRlbW9NZXRhRGF0YToge1xuICAgICAgICBmaWxlTmFtZTogXCJNZW51LnBkZlwiLFxuICAgICAgICBpZDogXCI2ZDA3ZDEyNCAtIGFjODXigJM0M2IzIC0gYTg2N+KAkzM2OTMwZjUwMmFjNlwiLFxuICAgIH0sXG59O1xuY29uc3QgQWRvYmVEaXYgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcHMuaWQgfHwgRGVmYXVsdENvbmZpZ3Muc3RhdGljRGl2SWQpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHJlZiwgaWQ6IHByb3BzLmlkIHx8IERlZmF1bHRDb25maWdzLnN0YXRpY0RpdklkLCBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB8fCBcImFkb2JlLXZpZXdlci1vZi1hbWF6b24tY29ycG9yYXRlLXJldGFsaWF0aW9uc1wiLCBzdHlsZTogcHJvcHMuc3R5bGUsIHRpdGxlOiBwcm9wcy50aXRsZSB8fFxuICAgICAgICAgICAgXCJlbnRpdHktZXhpc3RlbnQtb24tZnJhbWV3b3Jrcy1vZi1zdGF0ZS1yZWd1bGF0aW9ucy1hcy1kZWZpbmVkLWJ5LXRoZS1zdGF0ZS1hbmQtbWF5LXRyeS10by1kZXN0cm95LXlvdXItbGlmZS1hbmQtY29udHJvbC10aGUtZmJpLW9mLXRoZS1zdGF0ZS1zdWNoLWFzLWFtYXpvbi1sZWdhbC1pZGlvdHNcIiB9KSk7XG59O1xuLyoqXG4gKiBAZGVzY3JpcHRpb24gLSBSZWFjdFZpZXdBZG9iZSBjb21wb25lbnQgd2hpY2ggaXMgYSB3cmFwcGVyIGFyb3VuZCBBZG9iZSBQREYgVmlld2VyIFNESyB0aGF0IGFsbG93cyBmb3JcbiAqIHJlbmRlcmluZyBQREZzIHZpYSBBZG9iZSdzIFBERiBFbmdpbmUuIEVuc3VyZXMgdGhhdCBBZG9iZSBFbWJlZCBBUEkgU2VydmljZXMgYXJlXG4gKiBjb21wYXJ0bWVudGFsaXplZCBhbmQgZnVsbHkgZW5jYXBzdWxhdGVkIGFuZCBjb25maWd1cmVkIHdpdGhpbiBhIHJlbmRlcmVkIHBhZ2UuIE5vdCBzdXJlIHdoeSBBZG9iZVxuICogRW1iZWQgQVBJIGRvZXMgbm90IGluaGVyZW50bHkgZG8gdGhpcy4gU2VlIFJlYWN0Vmlld0Fkb2JlUHJvcHMgZm9yIG1vcmUgZGV0YWlscy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVhY3RWaWV3QWRvYmUocHJvcHMpIHtcbiAgICBjb25zdCBbYWRvYmVQREZQcm9ncmFtbWVJbnN0YWxsZWQsIHNldEFkb2JlUERGUHJvZ3JhbW1lSW5zdGFsbGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2NyaXB0Vmlld2VyTG9hZGVkLCBzZXRTY3JpcHRWaWV3ZXJMb2FkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFkb2JlRENWaWV3UmVmID0gUmVhY3QudXNlUmVmKCk7XG4gICAgY29uc3QgdXNlSG9va3NGb3JBZG9iZUNvbmZpZyA9IFJlYWN0W3Byb3BzPy51c2VSZWFjdEhvb2tGb3JBZG9iZUFQSUNvbmZpZ3MgfHwgXCJ1c2VFZmZlY3RcIl07XG4gICAgdXNlSG9va3NGb3JBZG9iZUNvbmZpZygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9wcy5jbGllbnRJZCxcbiAgICAgICAgICAgIGRpdklkOiBwcm9wcy5pZCB8fCBEZWZhdWx0Q29uZmlncy5zdGF0aWNEaXZJZCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFkb2JlUERGUHJvZ3JhbW1lSW5zdGFsbGVkICYmIHNjcmlwdFZpZXdlckxvYWRlZCkge1xuICAgICAgICAgICAgYWRvYmVEQ1ZpZXdSZWYuY3VycmVudCA9IG5ldyAod2luZG93LkFkb2JlREMuVmlldykoY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH0sIFthZG9iZVBERlByb2dyYW1tZUluc3RhbGxlZCwgc2NyaXB0Vmlld2VyTG9hZGVkLCBwcm9wcy5jbGllbnRJZCwgcHJvcHMuaWRdKTtcbiAgICBjb25zdCB1c2VIb29rc0ZvckxvYWRpbmcgPSBSZWFjdFtwcm9wcz8udXNlUmVhY3RIb29rV2hlbkxvYWRpbmdBZG9iZUFQSSB8fCBcInVzZUVmZmVjdFwiXTtcbiAgICAodXNlSG9va3NGb3JMb2FkaW5nKSgoKSA9PiB7XG4gICAgICAgIGlmIChzY3JpcHRWaWV3ZXJMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JpcHRFeGlzdHNBTHJlYWR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWFjdC1hZG9iZS1lbWJlZC1oYW5kaG9sZGluZy1hZG9iZS1hcGktbG9hZGluZy1pZGlvY3lcIik7XG4gICAgICAgICAgICBpZiAoc2NyaXB0RXhpc3RzQUxyZWFkeSkge1xuICAgICAgICAgICAgICAgIGlmIChhZG9iZVBERlByb2dyYW1tZUluc3RhbGxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFkb2JlX2RjX3ZpZXdfc2RrLnJlYWR5XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFkb2JlUERGUHJvZ3JhbW1lSW5zdGFsbGVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0U2NyaXB0Vmlld2VyTG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS1hZG9iZS1wZGYtaWRcIiwgcHJvcHMuaWQgfHwgRGVmYXVsdENvbmZpZ3Muc3RhdGljRGl2SWQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJlYWN0LWFkb2JlLWVtYmVkLWhhbmRob2xkaW5nLWFkb2JlLWFwaS1sb2FkaW5nLWlkaW9jeVwiKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2RvY3VtZW50Y2xvdWQuYWRvYmUuY29tL3ZpZXctc2RrL3ZpZXdlci5qc1wiO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2NyaXB0Vmlld2VyTG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLmlkLCBzY3JpcHRWaWV3ZXJMb2FkZWQsIGFkb2JlUERGUHJvZ3JhbW1lSW5zdGFsbGVkXSk7XG4gICAgY29uc3QgdXNlSG9va3NGb3JDYWxsID0gUmVhY3RbcHJvcHM/LnVzZVJlYWN0SG9va1doZW5DYWxsaW5nQWRvYmVBUEkgfHwgXCJ1c2VFZmZlY3RcIl07XG4gICAgdXNlSG9va3NGb3JDYWxsKCgpID0+IHtcbiAgICAgICAgaWYgKGFkb2JlUERGUHJvZ3JhbW1lSW5zdGFsbGVkID09PSBmYWxzZSAmJiBzY3JpcHRWaWV3ZXJMb2FkZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhZG9iZV9kY192aWV3X3Nkay5yZWFkeVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QWRvYmVQREZQcm9ncmFtbWVJbnN0YWxsZWQodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYWxsQWRvYmVBcGkgPSAocHJvcHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdGaWxlID0gKHsgdmlld2VyQ29uZmlnLCB1cmwsIF9oZWFkZXJzLCBfZmlsZU1ldGEsIF9kY1ZpZXcsIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkY1ZpZXcgPSBfZGNWaWV3IHx8IGFkb2JlRENWaWV3UmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlld0ZpbGVQcm9taXNlID0gZGNWaWV3LnByZXZpZXdGaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1ldGFEYXRhOiBfZmlsZU1ldGEgfHwgRGVmYXVsdENvbmZpZ3MuZGVtb01ldGFEYXRhLFxuICAgICAgICAgICAgICAgIH0sIHZpZXdlckNvbmZpZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpZXdGaWxlUHJvbWlzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocHJvcHMuZGVidWcpXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiQWRvYmUgUERGIFZpZXdlciBTREsgUmVhZHkgRXZlbnRcIiwgYWRvYmVEQ1ZpZXdSZWYsIHdpbmRvd1tcImFkb2JlX2RjX3ZpZXdfc2RrXCJdKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdklkID0gcHJvcHMuaWQgfHwgRGVmYXVsdENvbmZpZ3Muc3RhdGljRGl2SWQ7XG4gICAgICAgICAgICBjb25zdCBkaXZFbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCk7XG4gICAgICAgICAgICBpZiAoZGl2RWxtICYmIHByb3BzLnByZXZpZXdDb25maWc/LmVtYmVkTW9kZSAhPT0gXCJMSUdIVF9CT1hcIikge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5kZWJ1ZylcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiQWRvYmUgUERGIFZpZXdlciBTREsgUmVhZHkgUmVuZGVyaW5nXCIpO1xuICAgICAgICAgICAgICAgIHByZXZpZXdGaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgdmlld2VyQ29uZmlnOiBwcm9wcy5wcmV2aWV3Q29uZmlnIHx8IERlZmF1bHRDb25maWdzLnN0YXRpY0RlZmF1bHRDb25maWcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogcHJvcHMudXJsIHx8IERlZmF1bHRDb25maWdzLmRlbW9VcmwsXG4gICAgICAgICAgICAgICAgICAgIF9oZWFkZXJzOiBwcm9wcy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICBfZmlsZU1ldGE6IHByb3BzLmZpbGVNZXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcHMucHJldmlld0NvbmZpZz8uZW1iZWRNb2RlID09PSBcIkxJR0hUX0JPWFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzPy50cmlnZ2VyQWRvYmVEQ1ZpZXdSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld0ZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VyQ29uZmlnOiBwcm9wcy5wcmV2aWV3Q29uZmlnIHx8IERlZmF1bHRDb25maWdzLnN0YXRpY0RlZmF1bHRDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHByb3BzLnVybCB8fCBEZWZhdWx0Q29uZmlncy5kZW1vVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2ZpbGVNZXRhOiBwcm9wcy5maWxlTWV0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oZWFkZXJzOiBwcm9wcy5oZWFkZXJzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHNjcmlwdFZpZXdlckxvYWRlZCA9PT0gdHJ1ZSAmJiBhZG9iZVBERlByb2dyYW1tZUluc3RhbGxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2FsbEFkb2JlQXBpKHByb3BzKTtcbiAgICAgICAgfVxuICAgIH0sIFthZG9iZVBERlByb2dyYW1tZUluc3RhbGxlZCwgc2NyaXB0Vmlld2VyTG9hZGVkLCBwcm9wcywgYWRvYmVEQ1ZpZXdSZWZdKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBZG9iZURpdiwgeyAuLi5wcm9wcyB9KTtcbn1cbjtcbiJdLCJuYW1lcyI6WyJkZW1vVXJsIiwic3RhdGljRGVmYXVsdENvbmZpZyIsInNob3dBbm5vdGF0aW9uVG9vbHMiLCJzaG93TGVmdEhhbmRQYW5lbCIsInNob3dQYWdlQ29udHJvbHMiLCJzaG93RG93bmxvYWRQREYiLCJzaG93UHJpbnRQREYiLCJzdGF0aWNEaXZJZCIsImRlbW9NZXRhRGF0YSIsImZpbGVOYW1lIiwiaWQiLCJBZG9iZURpdiIsInByb3BzIiwicmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiRGVmYXVsdENvbmZpZ3MiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0aXRsZSIsImFkb2JlUERGUHJvZ3JhbW1lSW5zdGFsbGVkIiwic2V0QWRvYmVQREZQcm9ncmFtbWVJbnN0YWxsZWQiLCJ1c2VTdGF0ZSIsInNjcmlwdFZpZXdlckxvYWRlZCIsInNldFNjcmlwdFZpZXdlckxvYWRlZCIsImFkb2JlRENWaWV3UmVmIiwidXNlSG9va3NGb3JBZG9iZUNvbmZpZyIsInVzZVJlYWN0SG9va0ZvckFkb2JlQVBJQ29uZmlncyIsImNvbmZpZyIsImNsaWVudElkIiwiZGl2SWQiLCJjdXJyZW50Iiwid2luZG93IiwiQWRvYmVEQyIsIlZpZXciLCJ1c2VIb29rc0ZvckxvYWRpbmciLCJ1c2VSZWFjdEhvb2tXaGVuTG9hZGluZ0Fkb2JlQVBJIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JpcHQiLCJzZXRBdHRyaWJ1dGUiLCJzcmMiLCJhc3luYyIsIm9ubG9hZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImkiLCJ1c2VSZWFjdEhvb2tXaGVuQ2FsbGluZ0Fkb2JlQVBJIiwicHJldmlld0ZpbGUiLCJ2aWV3ZXJDb25maWciLCJ1cmwiLCJfaGVhZGVycyIsIl9maWxlTWV0YSIsIl9kY1ZpZXciLCJjb250ZW50IiwibG9jYXRpb24iLCJtZXRhRGF0YSIsImRlYnVnIiwiY29uc29sZSIsImluZm8iLCJhZG9iZV9kY192aWV3X3NkayIsInByZXZpZXdDb25maWciLCJlbWJlZE1vZGUiLCJoZWFkZXJzIiwiZmlsZU1ldGEiLCJ0cmlnZ2VyQWRvYmVEQ1ZpZXdSZW5kZXIiXSwibWFwcGluZ3MiOiI2QkFDdUIsQ0FDbkJBLFFBQVMsd0VBQ1RDLG9CQUFxQixDQUNqQkMscUJBQTBC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
=======
import React from"react";const DefaultConfigs={demoUrl:"https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",staticDefaultConfig:{showAnnotationTools:!1,showLeftHandPanel:!1,showPageControls:!1,showDownloadPDF:!1,showPrintPDF:!1},staticDivId:"pdf-div",demoMetaData:{fileName:"Menu.pdf",id:"6d07d124 - ac85\u201343b3 - a867\u201336930f502ac6"}};function previewFile({divId:a,viewerConfig:b,url:c,clientID:d,_fileMeta:e,_dcView:f}){const g=f||new window.AdobeDC.View({clientId:d,divId:a}),h=g.previewFile({content:{location:{url:c}},metaData:e||DefaultConfigs.demoMetaData},b);return h}const AdobeDiv=a=>{const b=React.useRef(document.getElementById(a.id||DefaultConfigs.staticDivId));return React.createElement("div",{ref:b,id:a.id||DefaultConfigs.staticDivId,className:a.className||"adobe-viewer-of-amazon-corporate-retaliations",style:a.style,title:a.title||"entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots"})};function ReactViewAdobe(a){const[b,c]=React.useState(!1),[d,e]=React.useState(!1),f=React[a?.useReactHookForAdobeAPIConfigs||"useMemo"],g=f(()=>{if(!0===b){const a=window.AdobeDC?.["View"];return a}},[b]),h=React[a?.useReactHookWhenLoadingAdobeAPI||"useEffect"];h(()=>{if(!1===d){const d=document.querySelector(".react-adobe-embed-handholding-adobe-api-loading-idiocy");if(d)!1===b&&document.addEventListener("adobe_dc_view_sdk.ready",()=>{c(!0)}),e(!0);else{const b=document.createElement("script");b.setAttribute("data-adobe-pdf-id",a.id||DefaultConfigs.staticDivId),b.setAttribute("class","react-adobe-embed-handholding-adobe-api-loading-idiocy"),b.src="https://documentcloud.adobe.com/view-sdk/viewer.js",b.async=!0,b.onload=()=>{e(!0)},document.body.appendChild(b)}}},[a.id,d,b]);const i=React[a?.useReactHookWhenCallingAdobeAPI||"useEffect"];return i(()=>{!1===b&&!0===d&&document.addEventListener("adobe_dc_view_sdk.ready",()=>{c(!0)});!0===d&&!0===b&&(a=>{a.debug&&console.info("Adobe PDF Viewer SDK Ready Event",g,window.adobe_dc_view_sdk);const b=a.id||DefaultConfigs.staticDivId,c=document.getElementById(b);c&&"LIGHT_BOX"!==a.previewConfig?.embedMode?(a.debug&&console.info("Adobe PDF Viewer SDK Ready Rendering"),previewFile({divId:b,viewerConfig:a.previewConfig||DefaultConfigs.staticDefaultConfig,url:a.url||DefaultConfigs.demoUrl,clientID:a.clientId,_fileMeta:a.fileMeta})):"LIGHT_BOX"===a.previewConfig?.embedMode&&a?.triggerAdobeDCViewRender&&previewFile({divId:a.id||DefaultConfigs.staticDivId,viewerConfig:a.previewConfig||DefaultConfigs.staticDefaultConfig,url:a.url||DefaultConfigs.demoUrl,clientID:a.clientId})})(a)},[b,d,a,g]),React.createElement(AdobeDiv,{...a})}export{ReactViewAdobe as default,previewFile};
>>>>>>> parent of a0744d2 (feat: match code style with adobe pdf api examples when call adobe api)
