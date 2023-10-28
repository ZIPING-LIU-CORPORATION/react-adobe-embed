(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-dom/client")):"function"==typeof define&&define.amd?define(["exports","react","react-dom/client"],t):(e="undefined"==typeof globalThis?e||self:globalThis,t(e.App={},e.React,e.ReactDOM))})(this,function(e,t,a){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)}function r(e){function t(e,t){let{pathname:a="/",search:n="",hash:r=""}=u(e.location.hash.substr(1));return a.startsWith("/")||a.startsWith(".")||(a="/"+a),l("",{pathname:a,search:n,hash:r},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function a(e,t){let a=e.document.querySelector("base"),n="";if(a&&a.getAttribute("href")){let t=e.location.href,a=t.indexOf("#");n=-1===a?t:t.slice(0,a)}return n+"#"+("string"==typeof t?t:c(t))}function n(e,t){o("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}return void 0===e&&(e={}),h(t,a,n,e)}function i(e,t){if(!1===e||null===e||"undefined"==typeof e)throw new Error(t)}function o(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(t){}}}function s(){return Math.random().toString(36).substr(2,8)}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function l(e,t,a,r){void 0===a&&(a=null);let i=n({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?u(t):t,{state:a,key:t&&t.key||r||s()});return i}function c(e){let{pathname:t="/",search:a="",hash:n=""}=e;return a&&"?"!==a&&(t+="?"===a.charAt(0)?a:"?"+a),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function u(e){let t={};if(e){let a=e.indexOf("#");0<=a&&(t.hash=e.substr(a),e=e.substr(0,a));let n=e.indexOf("?");0<=n&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function h(e,t,a,r){function o(){let e=g.state||{idx:null};return e.idx}function s(){v=xe.Pop;let e=o(),t=null==e?null:e-y;y=e,b&&b({action:v,location:w.location,delta:t})}function u(e,t){v=xe.Push;let n=l(w.location,e,t);a&&a(n,e),y=o()+1;let r=d(n,y),i=w.createHref(n);try{g.pushState(r,"",i)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;m.location.assign(i)}f&&b&&b({action:v,location:w.location,delta:1})}function h(e,t){v=xe.Replace;let n=l(w.location,e,t);a&&a(n,e),y=o();let r=d(n,y),i=w.createHref(n);g.replaceState(r,"",i),f&&b&&b({action:v,location:w.location,delta:0})}function p(e){let t="null"===m.location.origin?m.location.href:m.location.origin,a="string"==typeof e?e:c(e);return i(t,"No window.location.(origin|href) available to create URL for href: "+a),new URL(a,t)}void 0===r&&(r={});let{window:m=document.defaultView,v5Compat:f=!1}=r,g=m.history,v=xe.Pop,b=null,y=o();null==y&&(y=0,g.replaceState(n({},g.state,{idx:y}),""));let w={get action(){return v},get location(){return e(m,g)},listen(e){if(b)throw new Error("A history only accepts one active listener");return m.addEventListener(De,s),b=e,()=>{m.removeEventListener(De,s),b=null}},createHref(e){return t(m,e)},createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:u,replace:h,go(e){return g.go(e)}};return w}function p(e,t,a){void 0===a&&(a="/");let n="string"==typeof t?u(t):t,r=S(n.pathname||"/",a);if(null==r)return null;let o=m(e);g(o);let s=null;for(let n=0;null==s&&n<o.length;++n)s=w(o[n],E(r));return s}function m(e,t,a,n){void 0===t&&(t=[]),void 0===a&&(a=[]),void 0===n&&(n="");let r=(e,r,o)=>{let s={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};s.relativePath.startsWith("/")&&(i(s.relativePath.startsWith(n),"Absolute route path \""+s.relativePath+"\" nested under path "+("\""+n+"\" is not valid. An absolute child route path must start with the combined path of all its parent routes.")),s.relativePath=s.relativePath.slice(n.length));let d=Be([n,s.relativePath]),l=a.concat(s);e.children&&0<e.children.length&&(i(!0!==e.index,"Index routes must not have child routes. Please remove all child routes from route path \""+d+"\"."),m(e.children,t,l,d)),(null!=e.path||e.index)&&t.push({path:d,score:v(d,e.index),routesMeta:l})};return e.forEach((e,t)=>{var a;if(""===e.path||!(null!=(a=e.path)&&a.includes("?")))r(e,t);else for(let a of f(e.path))r(e,t,a)}),t}function f(e){let t=e.split("/");if(0===t.length)return[];let[a,...n]=t,r=a.endsWith("?"),i=a.replace(/\?$/,"");if(0===n.length)return r?[i,""]:[i];let o=f(n.join("/")),s=[];return s.push(...o.map(e=>""===e?i:[i,e].join("/"))),r&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}function g(e){e.sort((e,t)=>e.score===t.score?y(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}function v(e,t){let a=e.split("/"),n=a.length;return a.some(Ue)&&(n+=Ie),t&&(n+=Te),a.filter(e=>!Ue(e)).reduce((e,t)=>e+(Le.test(t)?Ne:""===t?Pe:Ae),n)}function y(e,t){let a=e.length===t.length&&e.slice(0,-1).every((e,a)=>e===t[a]);return a?e[e.length-1]-t[t.length-1]:0}function w(e,t){let{routesMeta:a}=e,n={},r="/",o=[];for(let s=0;s<a.length;++s){let e=a[s],i=s==a.length-1,d="/"===r?t:t.slice(r.length)||"/",l=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:i},d);if(!l)return null;Object.assign(n,l.params);let c=e.route;o.push({params:n,pathname:Be([r,l.pathname]),pathnameBase:_e(Be([r,l.pathnameBase])),route:c}),"/"!==l.pathnameBase&&(r=Be([r,l.pathnameBase]))}return o}function R(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[a,n]=C(e.path,e.caseSensitive,e.end),r=t.match(a);if(!r)return null;let i=r[0],o=i.replace(/(.)\/+$/,"$1"),s=r.slice(1),d=n.reduce((e,t,a)=>{if("*"===t){let e=s[a]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=x(s[a]||"",t),e},{});return{params:d,pathname:i,pathnameBase:o,pattern:e}}function C(e,t,a){void 0===t&&(t=!1),void 0===a&&(a=!0),o("*"===e||!e.endsWith("*")||e.endsWith("/*"),"Route path \""+e+"\" will be treated as if it were "+("\""+e.replace(/\*$/,"/*")+"\" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, ")+("please change the route path to \""+e.replace(/\*$/,"/*")+"\"."));let n=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(e,t)=>(n.push(t),"/([^\\/]+)"));if(e.endsWith("*"))n.push("*"),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$";else if(a)r+="\\/*$";else if(""!==e&&"/"!==e)r+="(?:(?=\\/|$))";else;let i=new RegExp(r,t?void 0:"i");return[i,n]}function E(e){try{return decodeURI(e)}catch(t){return o(!1,"The URL path \""+e+"\" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent "+("encoding ("+t+").")),e}}function x(e,t){try{return decodeURIComponent(e)}catch(a){return o(!1,"The value for the URL param \""+t+"\" will not be decoded because"+(" the string \""+e+"\" is a malformed URL segment. This is probably")+(" due to a bad percent encoding ("+a+").")),e}}function S(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,n=e.charAt(a);return n&&"/"!==n?null:e.slice(a)||"/"}function D(e,t){void 0===t&&(t="/");let{pathname:a,search:n="",hash:r=""}="string"==typeof e?u(e):e,i=a?a.startsWith("/")?a:k(a,t):t;return{pathname:i,search:Me(n),hash:We(r)}}function k(e,t){let a=t.replace(/\/+$/,"").split("/"),n=e.split("/");return n.forEach(e=>{".."===e?1<a.length&&a.pop():"."!=e&&a.push(e)}),1<a.length?a.join("/"):"/"}function L(e,t,a,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as a string in <Link to=\"...\"> and the router will parse it for you.")}function N(e){return e.filter((e,t)=>0===t||e.route.path&&0<e.route.path.length)}function T(e,t,a,r){void 0===r&&(r=!1);let o;"string"==typeof e?o=u(e):(o=n({},e),i(!o.pathname||!o.pathname.includes("?"),L("?","pathname","search",o)),i(!o.pathname||!o.pathname.includes("#"),L("#","pathname","hash",o)),i(!o.search||!o.search.includes("#"),L("#","search","hash",o)));let s,d=""===e||""===o.pathname,l=d?"/":o.pathname;if(r||null==l)s=a;else{let e=t.length-1;if(l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}s=0<=e?t[e]:"/"}let c=D(o,s),h=l&&"/"!==l&&l.endsWith("/"),p=(d||"."===l)&&a.endsWith("/");return!c.pathname.endsWith("/")&&(h||p)&&(c.pathname+="/"),c}function P(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},A.apply(this,arguments)}function I(e,t){let{relative:a}=void 0===t?{}:t;U()?void 0:i(!1,"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=Se.useContext(ze),{hash:o,pathname:s,search:d}=F(e,{relative:a}),l=s;return"/"!==n&&(l="/"===s?n:Be([n,s])),r.createHref({pathname:l,search:d,hash:o})}function U(){return null!=Se.useContext(Ye)}function B(){return U()?void 0:i(!1,"useLocation() may be used only in the context of a <Router> component."),Se.useContext(Ye).location}function _(e){let t=Se.useContext(ze).static;t||Se.useLayoutEffect(e)}function M(){let{isDataRoute:e}=Se.useContext($e);return e?Z():W()}function W(){U()?void 0:i(!1,"useNavigate() may be used only in the context of a <Router> component.");let e=Se.useContext(Oe),{basename:t,navigator:a}=Se.useContext(ze),{matches:n}=Se.useContext($e),{pathname:r}=B(),s=JSON.stringify(N(n).map(e=>e.pathnameBase)),d=Se.useRef(!1);_(()=>{d.current=!0});let l=Se.useCallback(function(n,i){if(void 0===i&&(i={}),o(d.current,qe),!!d.current){if("number"==typeof n)return void a.go(n);let o=T(n,JSON.parse(s),r,"path"===i.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:Be([t,o.pathname])),(i.replace?a.replace:a.push)(o,i.state,i)}},[t,a,s,r,e]);return l}function F(e,t){let{relative:a}=void 0===t?{}:t,{matches:n}=Se.useContext($e),{pathname:r}=B(),i=JSON.stringify(N(n).map(e=>e.pathnameBase));return Se.useMemo(()=>T(e,JSON.parse(i),r,"path"===a),[e,i,r,a])}function V(e,t){return O(e,t)}function O(e,t,a){U()?void 0:i(!1,"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=Se.useContext(ze),{matches:r}=Se.useContext($e),s=r[r.length-1],d=s?s.params:{},l=s?s.pathname:"/",c=s?s.pathnameBase:"/",h=s&&s.route;{let e=h&&h.path||"";J(l,!h||e.endsWith("*"),"You rendered descendant <Routes> (or called `useRoutes()`) at \""+l+"\" (under <Route path=\""+e+"\">) but the parent route path has no trailing \"*\". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\n"+("Please change the parent <Route path=\""+e+"\"> to <Route ")+("path=\""+("/"===e?"*":e+"/*")+"\">."))}let m,f=B();if(t){var g;let e="string"==typeof t?u(t):t;"/"===c||(null==(g=e.pathname)?void 0:g.startsWith(c))?void 0:i(!1,"When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was "+("matched by all parent routes. The current pathname base is \""+c+"\" ")+("but pathname \""+e.pathname+"\" was given in the `location` prop.")),m=e}else m=f;let v=m.pathname||"/",b="/"===c?v:v.slice(c.length)||"/",y=p(e,{pathname:b});o(h||null!=y,"No routes matched location \""+m.pathname+m.search+m.hash+"\" "),o(null==y||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0,"Matched leaf route at location \""+m.pathname+m.search+m.hash+"\" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an \"empty\" page.");let w=H(y&&y.map(e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:Be([c,n.encodeLocation?n.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:Be([c,n.encodeLocation?n.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),r,a);return t&&w?Se.createElement(Ye.Provider,{value:{location:A({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:xe.Pop}},w):w}function j(e){let{routeContext:t,match:a,children:n}=e,r=Se.useContext(Oe);return r&&r.static&&r.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=a.route.id),Se.createElement($e.Provider,{value:t},n)}function H(e,t,a){var r,n=Math.min;if(void 0===t&&(t=[]),void 0===a&&(a=null),null==e){var o;if(null!=(o=a)&&o.errors)e=a.matches;else return null}let s=e,d=null==(r=a)?void 0:r.errors;if(null!=d){let e=s.findIndex(e=>e.route.id&&(null==d?void 0:d[e.route.id]));0<=e?void 0:i(!1,"Could not find a matching route for errors on route IDs: "+Object.keys(d).join(",")),s=s.slice(0,n(s.length,e+1))}return s.reduceRight((e,n,r)=>{let i=n.route.id?null==d?void 0:d[n.route.id]:null,o=null;a&&(o=n.route.errorElement||Ge);let l=t.concat(s.slice(0,r+1)),c=()=>{let t;return t=i?o:n.route.Component?Se.createElement(n.route.Component,null):n.route.element?n.route.element:e,Se.createElement(j,{match:n,routeContext:{outlet:e,matches:l,isDataRoute:null!=a},children:t})};return a&&(n.route.ErrorBoundary||n.route.errorElement||0===r)?Se.createElement(Xe,{location:a.location,revalidation:a.revalidation,component:o,error:i,children:c(),routeContext:{outlet:null,matches:l,isDataRoute:!0}}):c()},null)}function z(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function Y(e){let t=Se.useContext(Oe);return t?void 0:i(!1,z(e)),t}function $(e){let t=Se.useContext(je);return t?void 0:i(!1,z(e)),t}function K(e){let t=Se.useContext($e);return t?void 0:i(!1,z(e)),t}function q(e){let t=K(e),a=t.matches[t.matches.length-1];return a.route.id?void 0:i(!1,e+" can only be used on routes that contain a unique \"id\""),a.route.id}function G(){return q(Je.UseRouteId)}function X(){var e;let t=Se.useContext(Ke),a=$(Je.UseRouteError),n=q(Je.UseRouteError);return t?t:null==(e=a.errors)?void 0:e[n]}function Z(){let{router:e}=Y(Ze.UseNavigateStable),t=q(Je.UseNavigateStable),a=Se.useRef(!1);_(()=>{a.current=!0});let n=Se.useCallback(function(n,r){void 0===r&&(r={}),o(a.current,qe);a.current&&("number"==typeof n?e.navigate(n):e.navigate(n,A({fromRouteId:t},r)))},[e,t]);return n}function J(e,t,a){t||Qe[e]||(Qe[e]=!0,o(!1,a))}function Q(e){i(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ee(e){let{basename:n="/",children:r=null,location:t,navigationType:s=xe.Pop,navigator:a,static:d=!1}=e;U()?i(!1,"You cannot render a <Router> inside another <Router>. You should never have more than one in your app."):void 0;let l=n.replace(/^\/*/,"/"),c=Se.useMemo(()=>({basename:l,navigator:a,static:d}),[l,a,d]);"string"==typeof t&&(t=u(t));let{pathname:h="/",search:p="",hash:m="",state:f=null,key:g="default"}=t,v=Se.useMemo(()=>{let e=S(h,l);return null==e?null:{location:{pathname:e,search:p,hash:m,state:f,key:g},navigationType:s}},[l,h,p,m,f,g,s]);return o(null!=v,"<Router basename=\""+l+"\"> is not able to match the URL "+("\""+h+p+m+"\" because it does not start with the basename, so the <Router> won't render anything.")),null==v?null:Se.createElement(ze.Provider,{value:c},Se.createElement(Ye.Provider,{children:r,value:v}))}function te(e){let{children:t,location:a}=e;return V(ae(t),a)}function ae(e,t){void 0===t&&(t=[]);let a=[];return Se.Children.forEach(e,(e,n)=>{if(Se.isValidElement(e)){let r=[...t,n];if(e.type===Se.Fragment)return void a.push.apply(a,ae(e.props.children,r));e.type===Q?void 0:i(!1,"["+("string"==typeof e.type?e.type:e.type.name)+"] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"),e.props.index&&e.props.children?i(!1,"An index route cannot have child routes."):void 0;let o={id:e.props.id||r.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=ae(e.props.children,r)),a.push(o)}}),a}function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},ne.apply(this,arguments)}function re(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],0<=t.indexOf(a)||(r[a]=e[a]);return r}function ie(e){return null!=e&&"string"==typeof e.tagName}function oe(e){return ie(e)&&"button"===e.tagName.toLowerCase()}function se(e){return ie(e)&&"form"===e.tagName.toLowerCase()}function de(e){return ie(e)&&"input"===e.tagName.toLowerCase()}function le(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ce(e,t){return 0===e.button&&(!t||"_self"===t)&&!le(e)}function ue(){if(null===at)try{new FormData(document.createElement("form"),0),at=!1}catch(t){at=!0}return at}function he(e){return null==e||nt.has(e)?e:(o(!1,"\""+e+"\" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to \"application/x-www-form-urlencoded\""),null)}function pe(e,t){let a,n,r,i,o;if(se(e)){let o=e.getAttribute("action");n=o?S(o,t):null,a=e.getAttribute("method")||et,r=he(e.getAttribute("enctype"))||tt,i=new FormData(e)}else if(oe(e)||de(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");let s=e.getAttribute("formaction")||o.getAttribute("action");if(n=s?S(s,t):null,a=e.getAttribute("formmethod")||o.getAttribute("method")||et,r=he(e.getAttribute("formenctype"))||he(o.getAttribute("enctype"))||tt,i=new FormData(o,e),!ue()){let{name:t,type:a,value:n}=e;if("image"===a){let e=t?t+".":"";i.append(e+"x","0"),i.append(e+"y","0")}else t&&i.append(t,n)}}else if(ie(e))throw new Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");else a=et,n=null,r=tt,o=e;return i&&"text/plain"===r&&(o=i,i=void 0),{action:n,method:a.toLowerCase(),encType:r,formData:i,body:o}}function me(e){let{basename:t,children:a,future:n,window:i}=e,o=Se.useRef();null==o.current&&(o.current=r({window:i,v5Compat:!0}));let s=o.current,[d,l]=Se.useState({action:s.action,location:s.location}),{v7_startTransition:c}=n||{},u=Se.useCallback(e=>{c&&dt?dt(()=>l(e)):l(e)},[l,c]);return Se.useLayoutEffect(()=>s.listen(u),[s,u]),Se.createElement(ee,{basename:t,children:a,location:d.location,navigationType:d.action,navigator:s})}function fe(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function ge(e){let t=Se.useContext(Oe);return t?void 0:i(!1,fe(e)),t}function ve(e,t){let{target:a,replace:n,state:r,preventScrollReset:i,relative:o,unstable_viewTransition:s}=void 0===t?{}:t,d=M(),l=B(),u=F(e,{relative:o});return Se.useCallback(t=>{if(ce(t,a)){t.preventDefault();let a=n===void 0?c(l)===c(u):n;d(e,{replace:a,state:r,preventScrollReset:i,relative:o,unstable_viewTransition:s})}},[l,d,u,n,r,a,e,i,o,s])}function be(){if("undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}function ye(){let{router:e}=ge(ft.UseSubmit),{basename:t}=Se.useContext(ze),a=G();return Se.useCallback(function(n,r){void 0===r&&(r={}),be();let{action:i,method:o,encType:s,formData:d,body:l}=pe(n,t);e.navigate(r.action||i,{preventScrollReset:r.preventScrollReset,formData:d,body:l,formMethod:r.method||o,formEncType:r.encType||s,replace:r.replace,state:r.state,fromRouteId:a,unstable_viewTransition:r.unstable_viewTransition})},[e,t,a])}function we(e,t){let{relative:a}=void 0===t?{}:t,{basename:n}=Se.useContext(ze),r=Se.useContext($e);r?void 0:i(!1,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),s=ne({},F(e?e:".",{relative:a})),d=B();if(null==e&&(s.search=d.search,o.route.index)){let e=new URLSearchParams(s.search);e.delete("index"),s.search=e.toString()?"?"+e.toString():""}return(!e||"."===e)&&o.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),"/"!==n&&(s.pathname="/"===s.pathname?n:Be([n,s.pathname])),c(s)}function Re(e,t){void 0===t&&(t={});let a=Se.useContext(st);null!=a?void 0:i(!1,"`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=ge(ft.useViewTransitionState),r=F(e,{relative:t.relative});if(!a.isTransitioning)return!1;let o=S(a.currentLocation.pathname,n)||a.currentLocation.pathname,s=S(a.nextLocation.pathname,n)||a.nextLocation.pathname;return null!=R(r.pathname,s)||null!=R(r.pathname,o)}function Ce({divId:e,viewerConfig:t,url:a,clientID:n,_fileMeta:r,_dcView:i}){const o={clientId:n,divId:e},s=i||new window.AdobeDC.View(o),d=s.previewFile({content:{location:{url:a}},metaData:r||bt.demoMetaData},t);return d}function Ee(e){const[a,n]=t.useState(!1),[r,i]=t.useState(!1),[o,s]=t.useState(!1),d=t[e?.useReactHookForAdobeAPIConfigs||"useMemo"],l=d(()=>{if(!0===a){const e=window.AdobeDC?.["View"];return e}},[a]),c=t[e?.useReactHookWhenLoadingAdobeAPI||"useEffect"];c(()=>{if(!1===o){const t=document.querySelector(".react-adobe-embed-handholding-adobe-api-loading-idiocy");if(t)i(!0),t.setAttribute("data-testid","react-adobe-embed-handholding-adobe-api-loading-idiocy-reused");else{const t=document.createElement("script");t.setAttribute("data-testid","react-adobe-embed-handholding-adobe-api-loading-idiocy-initial"),t.setAttribute("data-adobe-pdf-id",e.id||bt.staticDivId),t.setAttribute("class","react-adobe-embed-handholding-adobe-api-loading-idiocy"),t.src=e.previewConfig?.viewSdkViewerScript||bt.staticDefaultConfig.viewSdkViewerScript,t.async=!0,t.onload=()=>{s(!0)},document.body.appendChild(t)}}},[e.id,o,a]);const u=t[e?.useReactHookWhenCallingAdobeAPI||"useEffect"];u(()=>{!1===a&&!0===o&&document.addEventListener("adobe_dc_view_sdk.ready",()=>{n(!0)});const t=e=>{e.debug&&console.info("Adobe PDF Viewer SDK Ready Event",l,window.adobe_dc_view_sdk);const t=e.id||bt.staticDivId,a=document.getElementById(t);a&&"LIGHT_BOX"!==e.previewConfig?.embedMode?(e.debug&&console.info("Adobe PDF Viewer SDK Ready Rendering"),Ce({divId:t,viewerConfig:e.previewConfig||bt.staticDefaultConfig,url:e.url||bt.demoUrl,clientID:e.clientId,_fileMeta:e.fileMeta})):"LIGHT_BOX"===e.previewConfig?.embedMode&&e?.triggerAdobeDCViewRender&&Ce({divId:e.id||bt.staticDivId,viewerConfig:e.previewConfig||bt.staticDefaultConfig,url:e.url||bt.demoUrl,clientID:e.clientId})};!0===o&&!0===a&&t(e)},[a,o,e,l]);const h=t[e?.useReactHookForComponentDidUpdate||"useEffect"];return h(()=>{if(!0===r){const t=e.id||bt.staticDivId,a=document.getElementById(t);a&&Ce({divId:t,viewerConfig:e.previewConfig||bt.staticDefaultConfig,url:e.url||bt.demoUrl,clientID:e.clientId,_fileMeta:e.fileMeta}),i(!1)}},[r,e]),t.createElement(vt,{...e})}var xe,Se=function e(t){var a=Object.create(null);return t&&Object.keys(t).forEach(function(e){if("default"!==e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(a,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})}}),a.default=t,Object.freeze(a)}(t);(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xe||(xe={}));const De="popstate";var ke;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ke||(ke={}));const Le=/^:\w+$/,Ne=3,Te=2,Pe=1,Ae=10,Ie=-2,Ue=e=>"*"===e,Be=e=>e.join("/").replace(/\/\/+/g,"/"),_e=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Me=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",We=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"",Fe=["post","put","patch","delete"];new Set(Fe);const Ve=["get",...Fe];new Set(Ve);const Oe=Se.createContext(null);Oe.displayName="DataRouter";const je=Se.createContext(null);je.displayName="DataRouterState";const He=Se.createContext(null);He.displayName="Await";const ze=Se.createContext(null);ze.displayName="Navigation";const Ye=Se.createContext(null);Ye.displayName="Location";const $e=Se.createContext({outlet:null,matches:[],isDataRoute:!1});$e.displayName="Route";const Ke=Se.createContext(null);Ke.displayName="RouteError";const qe="You should call navigate() in a React.useEffect(), not when your component is first rendered.",Ge=Se.createElement(function e(){let t=X(),a=P(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=Se.createElement(Se.Fragment,null,Se.createElement("p",null,"\uD83D\uDCBF Hey developer \uD83D\uDC4B"),Se.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Se.createElement("code",{style:o},"ErrorBoundary")," or"," ",Se.createElement("code",{style:o},"errorElement")," prop on your route.")),Se.createElement(Se.Fragment,null,Se.createElement("h2",null,"Unexpected Application Error!"),Se.createElement("h3",{style:{fontStyle:"italic"}},a),n?Se.createElement("pre",{style:i},n):null,s)},null);class Xe extends Se.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?Se.createElement($e.Provider,{value:this.props.routeContext},Se.createElement(Ke.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}var Ze=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ze||{}),Je=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Je||{});const Qe={};new Promise(()=>{});const et="get",tt="application/x-www-form-urlencoded";let at=null;const nt=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]),rt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],it=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],ot=["reloadDocument","replace","state","method","action","onSubmit","submit","relative","preventScrollReset","unstable_viewTransition"],st=Se.createContext({isTransitioning:!1});st.displayName="ViewTransition";const dt=Se.startTransition,lt="undefined"!=typeof window&&"undefined"!=typeof window.document&&"undefined"!=typeof window.document.createElement,ct=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ut=Se.forwardRef(function a(e,t){function n(e){i&&i(e),e.defaultPrevented||y(e)}let r,{onClick:i,relative:s,reloadDocument:d,replace:l,state:c,target:u,to:h,preventScrollReset:p,unstable_viewTransition:m}=e,f=re(e,rt),{basename:g}=Se.useContext(ze),v=!1;if("string"==typeof h&&ct.test(h)&&(r=h,lt))try{let e=new URL(window.location.href),t=h.startsWith("//")?new URL(e.protocol+h):new URL(h),a=S(t.pathname,g);t.origin===e.origin&&null!=a?h=a+t.search+t.hash:v=!0}catch(t){o(!1,"<Link to=\""+h+"\"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.")}let b=I(h,{relative:s}),y=ve(h,{replace:l,state:c,target:u,preventScrollReset:p,relative:s,unstable_viewTransition:m});return Se.createElement("a",ne({},f,{href:r||b,onClick:v||d?i:n,ref:t,target:u}))});ut.displayName="Link";const ht=Se.forwardRef(function a(e,t){let{"aria-current":s="page",caseSensitive:d=!1,className:l="",end:c=!1,style:n,to:r,unstable_viewTransition:i,children:o}=e,u=re(e,it),h=F(r,{relative:u.relative}),p=B(),m=Se.useContext(je),{navigator:f}=Se.useContext(ze),g=null!=m&&Re(h)&&!0===i,v=f.encodeLocation?f.encodeLocation(h).pathname:h.pathname,b=p.pathname,y=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;d||(b=b.toLowerCase(),y=y?y.toLowerCase():null,v=v.toLowerCase());let w,R=b===v||!c&&b.startsWith(v)&&"/"===b.charAt(v.length),C=null!=y&&(y===v||!c&&y.startsWith(v)&&"/"===y.charAt(v.length)),E={isActive:R,isPending:C,isTransitioning:g},x=R?s:void 0;w="function"==typeof l?l(E):[l,R?"active":null,C?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let S="function"==typeof n?n(E):n;return Se.createElement(ut,ne({},u,{"aria-current":x,className:w,ref:t,style:S,to:r,unstable_viewTransition:i}),"function"==typeof o?o(E):o)});ht.displayName="NavLink";const pt=Se.forwardRef((e,t)=>{let a=ye();return Se.createElement(mt,ne({},e,{submit:a,ref:t}))});pt.displayName="Form";const mt=Se.forwardRef((e,t)=>{let{reloadDocument:a,replace:n,state:r,method:u=et,action:i,onSubmit:o,submit:s,relative:d,preventScrollReset:l,unstable_viewTransition:c}=e,h=re(e,ot),p="get"===u.toLowerCase()?"get":"post",m=we(i,{relative:d}),f=e=>{if(o&&o(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,a=(null==t?void 0:t.getAttribute("formmethod"))||u;s(t||e.currentTarget,{method:a,replace:n,state:r,relative:d,preventScrollReset:l,unstable_viewTransition:c})};return Se.createElement("form",ne({ref:t,method:p,action:m,onSubmit:a?o:f},h))});mt.displayName="FormImpl";var ft;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ft||(ft={}));var gt;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gt||(gt={}));const vt=e=>{const a=t.useRef(document.getElementById(e.id||bt.staticDivId));return t.createElement("div",{ref:a,id:e.id||bt.staticDivId,className:e.className||"adobe-viewer-of-amazon-corporate-retaliations",style:e.style,title:e.title||"entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots"})},bt={demoUrl:"https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf",staticDefaultConfig:{showAnnotationTools:!1,showLeftHandPanel:!1,showPageControls:!1,viewSdkViewerScript:"https://acrobatservices.adobe.com/view-sdk/viewer.js",showDownloadPDF:!1,showPrintPDF:!1},staticDivId:"pdf-div",demoMetaData:{fileName:"Odd Distateful Adobe Example Pdf.pdf",id:"6d07d124 - ac85\u201343b3 - a867\u201336930f502ac6"}},yt=()=>t.createElement(me,null,t.createElement("header",null,t.createElement("nav",{className:"navbar navbar-default navbar-fixed"},t.createElement("div",{className:"container"},t.createElement("div",{className:"navbar-header"},t.createElement("div",{className:"navbar-collapse"},t.createElement("ul",{style:{display:"inline-flex",flexDirection:"row",justifyContent:"center",alignItems:"center",alignContent:"center",listStyle:"none",margin:"0"},className:"nav navbar-nav"},t.createElement("li",{className:"dropdown"},t.createElement(ut,{style:{textDecoration:"none",padding:"10px"},className:"dropdown",to:"/test"},"Test Route")),t.createElement("li",{className:"dropdown"},t.createElement(ut,{style:{textDecoration:"none",padding:"10px"},className:"dropdown",to:"/home"},"Home Route")))))))),t.createElement(te,null,t.createElement(Q,{path:"/test",element:t.createElement("div",{className:"section container"},t.createElement("div",{className:"row"},t.createElement("div",{className:"col s12"},t.createElement("h5",{"data-testid":"test-route",className:"header"},"Test Route View"),t.createElement("iframe",{src:"https://storage.googleapis.com/laotzu/awslegal/ANDYTIME/assets/github/readme.html",style:{width:"100%",height:"900px",border:"1px solid black",alignContent:"center",justifyContent:"center"}}))))}),t.createElement(Q,{path:"*",element:t.createElement(Ee,{previewConfig:{embedMode:"FULL_WINDOW",defaultViewMode:"FIT_PAGE",enableLinearization:!0},fileMeta:{fileName:"23andMe_Ancestry_Book.pdf"},style:{width:"100%",height:"900px",border:"1px solid black",alignContent:"center",justifyContent:"center"},url:"https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf",clientId:"localhost"===window.location.hostname?"324caa2a91b84f688935436cd2d25217":"zipingl.github.io"===window.location.hostname?"9c16d364507948289a9f65f9ab9da8bf":"875691e089ad4bf6bc4c5cea79403542"})}))),wt=document.getElementById("app");if(wt){const e=a.createRoot(wt);e.render(t.createElement(yt,null))}e.App=yt});
