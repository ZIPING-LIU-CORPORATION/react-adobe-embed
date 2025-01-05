/* react app for react-adobe-embed used as a live testing environment  via github pages */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("react"),require("react-dom/client"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom/client","react-dom"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).React,e.ReactDOM)}(this,(function(e,t){"use strict";function n(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var a,r=n(e);
/**
   * @remix-run/router v1.21.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}
////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
   * Actions represent the type of change to a location value.
   */!function(e){
/**
     * A POP indicates a change to an arbitrary index in the history stack, such
     * as a back or forward navigation. It does not describe the direction of the
     * navigation, only that the current index changed.
     *
     * Note: This is the default action for newly created history objects.
     */
e.Pop="POP",
/**
     * A PUSH indicates a new entry being added to the history stack, such as when
     * a link is clicked and a new page loads. When this happens, all subsequent
     * entries in the stack are lost.
     */
e.Push="PUSH",
/**
     * A REPLACE indicates the entry at the current index in the history stack
     * being replaced by a new one.
     */
e.Replace="REPLACE"}(a||(a={}));const i="popstate";
/**
   * Hash history stores the location in window.location.hash. This makes it ideal
   * for situations where you don't want to send the location to the server for
   * some reason, either because you do cannot configure it or the URL space is
   * reserved for something else.
   *
   * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
   */function l(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:l=document.defaultView,v5Compat:c=!1}=r,p=l.history,m=a.Pop,f=null,v=g();
// Index should only be null when we initialize. If not, it's because the
// user called history.pushState or history.replaceState directly, in which
// case we should log a warning as it will result in bugs.
null==v&&(v=0,p.replaceState(o({},p.state,{idx:v}),""));function g(){return(p.state||{idx:null}).idx}function b(){m=a.Pop;let e=g(),t=null==e?null:e-v;v=e,f&&f({action:m,location:R.location,delta:t})}function y(e,t){m=a.Push;let r=d(R.location,e,t);n(r,e),v=g()+1;let o=u(r,v),i=R.createHref(r);
// try...catch because iOS limits us to 100 pushState calls :/
try{p.pushState(o,"",i)}catch(e){
// If the exception is because `state` can't be serialized, let that throw
// outwards just like a replace call would so the dev knows the cause
// https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
// https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;
// They are going to lose state here, but there is no real
// way to warn them about it since the page will refresh...
l.location.assign(i)}c&&f&&f({action:m,location:R.location,delta:1})}function w(e,t){m=a.Replace;let r=d(R.location,e,t);n(r,e),v=g();let o=u(r,v),i=R.createHref(r);p.replaceState(o,"",i),c&&f&&f({action:m,location:R.location,delta:0})}function E(e){
// window.location.origin is "null" (the literal string value) in Firefox
// under certain conditions, notably when serving from a local HTML file
// See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
let t="null"!==l.location.origin?l.location.origin:l.location.href,n="string"==typeof e?e:h(e);
// Treating this as a full URL will strip any trailing spaces so we need to
// pre-encode them since they might be part of a matching splat param from
// an ancestor route
return n=n.replace(/ $/,"%20"),s(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let R={get action(){return m},get location(){return e(l,p)},listen(e){if(f)throw new Error("A history only accepts one active listener");return l.addEventListener(i,b),f=e,()=>{l.removeEventListener(i,b),f=null}},createHref:e=>t(l,e),createURL:E,encodeLocation(e){
// Encode a Location the same way window.location would
let t=E(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:y,replace:w,go:e=>p.go(e)};return R}
//#endregion
((function(e,t){let{pathname:n="/",search:a="",hash:r=""}=p(e.location.hash.substr(1));
// Hash URL should always have a leading / just like window.location.pathname
// does, so if an app ends up at a route like /#something then we add a
// leading slash so all of our path-matching behaves the same as if it would
// in a browser router.  This is particularly important when there exists a
// root splat route (<Route path="*">) since that matches internally against
// "/*" and we'd expect /#something to 404 in a hash router app.
return n.startsWith("/")||n.startsWith(".")||(n="/"+n),d("",{pathname:n,search:a,hash:r},
// state defaults to `null` because `window.history.state` does
t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),a="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");a=-1===n?t:t.slice(0,n)}return a+"#"+("string"==typeof t?t:h(t))}),(function(e,t){c("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function s(e,t){if(!1===e||null==e)throw new Error(t)}function c(e,t){if(!e){
// eslint-disable-next-line no-console
"undefined"!=typeof console&&console.warn(t);try{
// Welcome to debugging history!
// This error is thrown as a convenience, so you can more easily
// find the source for a warning that appears in the console by
// enabling "pause on exceptions" in your JavaScript debugger.
throw new Error(t);
// eslint-disable-next-line no-empty
}catch(e){}}}
/**
   * For browser-based histories, we combine the state and key into an object
   */
function u(e,t){return{usr:e.state,key:e.key,idx:t}}
/**
   * Creates a Location object with a unique key from the given Path
   */function d(e,t,n,a){return void 0===n&&(n=null),o({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?p(t):t,{state:n,
// TODO: This could be cleaned up.  push/replace should probably just take
// full Locations now and avoid the need to run through this flow at all
// But that's a pretty big refactor to the current test suite so going to
// keep as is for the time being and just let any incoming keys take precedence
key:t&&t.key||a||Math.random().toString(36).substr(2,8)})}
/**
   * Creates a string URL path from the given pathname, search, and hash components.
   */function h(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),a&&"#"!==a&&(t+="#"===a.charAt(0)?a:"#"+a),t}
/**
   * Parses a string URL path into its separate pathname, search, and hash components.
   */function p(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}var m;
/**
   * Matches the given routes to a location and returns the match data.
   *
   * @see https://reactrouter.com/v6/utils/match-routes
   */
function f(e,t,n){return void 0===n&&(n="/"),function(e,t,n){let a="string"==typeof t?p(t):t,r=k(a.pathname||"/",n);if(null==r)return null;let o=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?
// If two routes are siblings, we should try to match the earlier sibling
// first. This allows people to have fine-grained control over the matching
// behavior by simply putting routes with identical paths in the order they
// want them tried.
e[e.length-1]-t[t.length-1]:
// Otherwise, it doesn't really make sense to rank non-siblings by index,
// so they sort equally.
0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let e=0;null==i&&e<o.length;++e){
// Incoming pathnames are generally encoded from either window.location
// or from router.navigate, but we want to match against the unencoded
// paths in the route definitions.  Memory router locations won't be
// encoded here but there also shouldn't be anything to decode so this
// should be a safe operation.  This avoids needing matchRoutes to be
// history-aware.
let t=A(r);i=S(o[e],t)}return i}(e,t,n)}function v(e,t,n,a){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===a&&(a="");let r=(e,r,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};i.relativePath.startsWith("/")&&(s(i.relativePath.startsWith(a),'Absolute route path "'+i.relativePath+'" nested under path "'+a+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(a.length));let l=I([a,i.relativePath]),c=n.concat(i);
// Add the children before adding this route to the array, so we traverse the
// route tree depth-first and child routes appear before their parents in
// the "flattened" version.
e.children&&e.children.length>0&&(s(
// Our types know better, but runtime JS may not!
// @ts-expect-error
!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),v(e.children,t,c,l)),
// Routes without a path shouldn't ever match by themselves unless they are
// index routes, so don't add them to the list of possible branches.
(null!=e.path||e.index)&&t.push({path:l,score:N(l,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var n;
// coarse-grain check for optional params
if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of g(e.path))r(e,t,n);else r(e,t)})),t}
/**
   * Computes all combinations of optional path segments for a given path,
   * excluding combinations that are ambiguous and of lower priority.
   *
   * For example, `/one/:two?/three/:four?/:five?` explodes to:
   * - `/one/three`
   * - `/one/:two/three`
   * - `/one/three/:four`
   * - `/one/three/:five`
   * - `/one/:two/three/:four`
   * - `/one/:two/three/:five`
   * - `/one/three/:four/:five`
   * - `/one/:two/three/:four/:five`
   */function g(e){let t=e.split("/");if(0===t.length)return[];let[n,...a]=t,r=n.endsWith("?"),o=n.replace(/\?$/,"");
// Optional path segments are denoted by a trailing `?`
if(0===a.length)
// Intepret empty string as omitting an optional segment
// `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
return r?[o,""]:[o];let i=g(a.join("/")),l=[];
// for absolute paths, ensure `/` instead of empty segment
// All child paths with the prefix.  Do this for all children before the
// optional version for all children, so we get consistent ordering where the
// parent optional aspect is preferred as required.  Otherwise, we can get
// child sections interspersed where deeper optional segments are higher than
// parent optional segments, where for example, /:two would explode _earlier_
// then /:one.  By always including the parent as required _for all children_
// first, we avoid this issue
return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),
// Then, if this is an optional value, add all child versions without
r&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));const b=/^:[\w-]+$/,y=3,w=2,E=1,R=10,C=-2,x=e=>"*"===e;function N(e,t){let n=e.split("/"),a=n.length;return n.some(x)&&(a+=C),t&&(a+=w),n.filter((e=>!x(e))).reduce(((e,t)=>e+(b.test(t)?y:""===t?E:R)),a)}function S(e,t,n){let{routesMeta:a}=e,r={},o="/",i=[];for(let e=0;e<a.length;++e){let n=a[e],l=e===a.length-1,s="/"===o?t:t.slice(o.length)||"/",c=D({path:n.relativePath,caseSensitive:n.caseSensitive,end:l},s),u=n.route;if(!c)return null;Object.assign(r,c.params),i.push({
// TODO: Can this as be avoided?
params:r,pathname:I([o,c.pathname]),pathnameBase:_(I([o,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(o=I([o,c.pathnameBase]))}return i}
/**
   * Performs pattern matching on a URL pathname and returns information about
   * the match.
   *
   * @see https://reactrouter.com/v6/utils/match-path
   */function D(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(a.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(a.push({paramName:"*"}),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?
// When matching to the end, ignore trailing slashes
r+="\\/*$":""!==e&&"/"!==e&&(
// If our path is non-empty and contains anything beyond an initial slash,
// then we have _some_ form of path in our regex, so we should expect to
// match only if we find the end of this path segment.  Look for an optional
// non-captured trailing slash (to match a portion of the URL) or the end
// of the path (if we've matched to the end).  We used to do this with a
// word boundary but that gives false positives on routes like
// /user-preferences since `-` counts as a word boundary.
r+="(?:(?=\\/|$))");let o=new RegExp(r,t?void 0:"i");return[o,a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let o=r[0],i=o.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:a.reduce(((e,t,n)=>{let{paramName:a,isOptional:r}=t;
// We need to compute the pathnameBase here using the raw splat value
// instead of using params["*"] later because it will be decoded then
if("*"===a){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[a]=r&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function A(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}
/**
   * @private
   */function k(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;
// We want to leave trailing slash behavior in the user's control, so if they
// specify a basename with a trailing slash, we should support it
let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&"/"!==a?null:e.slice(n)||"/"}
/**
   * Returns a resolved path object relative to the given pathname.
   *
   * @see https://reactrouter.com/v6/utils/resolve-path
   */function P(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}
/**
   * @private
   *
   * When processing relative navigation we want to ignore ancestor routes that
   * do not contribute to the path, such that index/pathless layout routes don't
   * interfere.
   *
   * For example, when moving a route element into an index route and/or a
   * pathless layout route, relative link behavior contained within should stay
   * the same.  Both of the following examples should link back to the root:
   *
   *   <Route path="/">
   *     <Route path="accounts" element={<Link to=".."}>
   *   </Route>
   *
   *   <Route path="/">
   *     <Route path="accounts">
   *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
   *         <Route index element={<Link to=".."} />  // <-- Does not contribute
   *       </Route
   *     </Route>
   *   </Route>
   */
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function L(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);
// When v7_relativeSplatPath is enabled, use the full pathname for the leaf
// match so we include splat values for "." links.  See:
// https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}
/**
   * @private
   */function T(e,t,n,a){let r;void 0===a&&(a=!1),"string"==typeof e?r=p(e):(r=o({},e),s(!r.pathname||!r.pathname.includes("?"),P("?","pathname","search",r)),s(!r.pathname||!r.pathname.includes("#"),P("#","pathname","hash",r)),s(!r.search||!r.search.includes("#"),P("#","search","hash",r)));let i,l=""===e||""===r.pathname,c=l?"/":r.pathname;
// Routing is relative to the current pathname if explicitly requested.
// If a pathname is explicitly provided in `to`, it should be relative to the
// route context. This is explained in `Note on `<Link to>` values` in our
// migration guide from v5 as a means of disambiguation between `to` values
// that begin with `/` and those that do not. However, this is problematic for
// `to` values that do not provide a pathname. `to` can simply be a search or
// hash string, in which case we should assume that the navigation is relative
// to the current location's pathname and *not* the route pathname.
if(null==c)i=n;else{let e=t.length-1;
// With relative="route" (the default), each leading .. segment means
// "go up one route" instead of "go up one URL segment".  This is a key
// difference from how <a href> works and a major reason we call this a
// "to" value instead of a "href".
if(!a&&c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:a="",hash:r=""}="string"==typeof e?p(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?
// Keep the root "" segment so the pathname starts at /
n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:O(a),hash:U(r)}}(r,i),d=c&&"/"!==c&&c.endsWith("/"),h=(l||"."===c)&&n.endsWith("/");
// Ensure the pathname has a trailing slash if the original "to" had one
return u.pathname.endsWith("/")||!d&&!h||(u.pathname+="/"),u}
/**
   * @private
   */const I=e=>e.join("/").replace(/\/\/+/g,"/")
/**
   * @private
   */,_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/")
/**
   * @private
   */,O=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:""
/**
   * @private
   */,U=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:""
/**
   * Check if the given error is an ErrorResponse generated from a 4xx/5xx
   * Response thrown from an action/loader
   */;const B=["post","put","patch","delete"];new Set(B);const M=["get",...B];
/**
   * React Router v6.28.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},F.apply(this,arguments)}
// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
new Set(M);const j=r.createContext(null);j.displayName="DataRouter";const V=r.createContext(null);V.displayName="DataRouterState";r.createContext(null).displayName="Await";
/**
   * A Navigator is a "location changer"; it's how you get to different locations.
   *
   * Every history instance conforms to the Navigator interface, but the
   * distinction is useful primarily when it comes to the low-level `<Router>` API
   * where both the location and a navigator must be provided separately in order
   * to avoid "tearing" that may occur in a suspense-enabled app if the action
   * and/or location were to be read directly from the history instance.
   */
const W=r.createContext(null);W.displayName="Navigation";const H=r.createContext(null);H.displayName="Location";const $=r.createContext({outlet:null,matches:[],isDataRoute:!1});$.displayName="Route";const z=r.createContext(null);
/**
   * Returns true if this component is a descendant of a `<Router>`.
   *
   * @see https://reactrouter.com/v6/hooks/use-in-router-context
   */
function K(){return null!=r.useContext(H)}
/**
   * Returns the current location object, which represents the current URL in web
   * browsers.
   *
   * Note: If you're using this it may mean you're doing some of your own
   * "routing" in your app, and we'd like to know what your use case is. We may
   * be able to provide something higher-level to better suit your needs.
   *
   * @see https://reactrouter.com/v6/hooks/use-location
   */function q(){return K()||s(!1,// TODO: This error is probably because they somehow have 2 versions of the
// router loaded. We can help them understand how to avoid that.
"useLocation() may be used only in the context of a <Router> component."),r.useContext(H).location}
/**
   * The interface for the navigate() function returned from useNavigate().
   */z.displayName="RouteError";const G="You should call navigate() in a React.useEffect(), not when your component is first rendered.";
// Mute warnings for calls to useNavigate in SSR environments
function J(e){r.useContext(W).static||
// We should be able to get rid of this once react 18.3 is released
// See: https://github.com/facebook/react/pull/26395
// eslint-disable-next-line react-hooks/rules-of-hooks
r.useLayoutEffect(e)}
/**
   * Returns an imperative method for changing the location. Used by `<Link>`s, but
   * may also be used by other elements to change the location.
   *
   * @see https://reactrouter.com/v6/hooks/use-navigate
   */function Y(){let{isDataRoute:e}=r.useContext($);
// Conditional usage is OK here because the usage of a data router is static
// eslint-disable-next-line react-hooks/rules-of-hooks
return e?
/**
   * Stable version of useNavigate that is used when we are in the context of
   * a RouterProvider.
   */
function(){let{router:e}=function(e){let t=r.useContext(j);return t||s(!1,oe(e)),t}(ae.UseNavigateStable),t=ie(re.UseNavigateStable),n=r.useRef(!1);return J((()=>{n.current=!0})),r.useCallback((function(a,r){void 0===r&&(r={}),c(n.current,G),
// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our router subscriber yet
n.current&&("number"==typeof a?e.navigate(a):e.navigate(a,F({fromRouteId:t},r)))}),[e,t])}():function(){K()||s(!1,// TODO: This error is probably because they somehow have 2 versions of the
// router loaded. We can help them understand how to avoid that.
"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(j),{basename:t,future:n,navigator:a}=r.useContext(W),{matches:o}=r.useContext($),{pathname:i}=q(),l=JSON.stringify(L(o,n.v7_relativeSplatPath)),u=r.useRef(!1);return J((()=>{u.current=!0})),r.useCallback((function(n,r){
// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our history listener yet
if(void 0===r&&(r={}),c(u.current,G),!u.current)return;if("number"==typeof n)return void a.go(n);let o=T(n,JSON.parse(l),i,"path"===r.relative);
// If we're operating within a basename, prepend it to the pathname prior
// to handing off to history (but only if we're not in a data router,
// otherwise it'll prepend the basename inside of the router).
// If this is a root navigation, then we navigate to the raw basename
// which allows the basename to have full control over the presence of a
// trailing slash on root links
null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:I([t,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[t,a,l,i,e])}
/**
   * Resolves the pathname of the given `to` value against the current location.
   *
   * @see https://reactrouter.com/v6/hooks/use-resolved-path
   */()}function Z(e,t){let{relative:n}=void 0===t?{}:t,{future:a}=r.useContext(W),{matches:o}=r.useContext($),{pathname:i}=q(),l=JSON.stringify(L(o,a.v7_relativeSplatPath));return r.useMemo((()=>T(e,JSON.parse(l),i,"path"===n)),[e,l,i,n])}
/**
   * Returns the element of the route that matched the current location, prepared
   * with the correct context to render the remainder of the route tree. Route
   * elements in the tree must render an `<Outlet>` to render their child route's
   * element.
   *
   * @see https://reactrouter.com/v6/hooks/use-routes
   */function X(e,t){
// Internal implementation with accept optional param for RouterProvider usage
return function(e,t,n,o){K()||s(!1,// TODO: This error is probably because they somehow have 2 versions of the
// router loaded. We can help them understand how to avoid that.
"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=r.useContext(W),{matches:l}=r.useContext($),u=l[l.length-1],d=u?u.params:{},h=u?u.pathname:"/",m=u?u.pathnameBase:"/",v=u&&u.route;{
// You won't get a warning about 2 different <Routes> under a <Route>
// without a trailing *, but this is a best-effort warning anyway since we
// cannot even give the warning unless they land at the parent route.
// Example:
// <Routes>
//   {/* This route path MUST end with /* because otherwise
//       it will never match /blog/post/123 */}
//   <Route path="blog" element={<Blog />} />
//   <Route path="blog/feed" element={<BlogFeed />} />
// </Routes>
// function Blog() {
//   return (
//     <Routes>
//       <Route path="post/:id" element={<Post />} />
//     </Routes>
//   );
// }
let e=v&&v.path||"";se(h,!v||e.endsWith("*"),'You rendered descendant <Routes> (or called `useRoutes()`) at "'+h+'" (under <Route path="'+e+'">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="'+e+'"> to <Route path="'+("/"===e?"*":e+"/*")+'">.')}let g,b=q();if(t){var y;let e="string"==typeof t?p(t):t;"/"===m||(null==(y=e.pathname)?void 0:y.startsWith(m))||s(!1,'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'+m+'" but pathname "'+e.pathname+'" was given in the `location` prop.'),g=e}else g=b;let w=g.pathname||"/",E=w;if("/"!==m){
// Determine the remaining pathname by removing the # of URL segments the
// parentPathnameBase has, instead of removing based on character count.
// This is because we can't guarantee that incoming/outgoing encodings/
// decodings will match exactly.
// We decode paths before matching on a per-segment basis with
// decodeURIComponent(), but we re-encode pathnames via `new URL()` so they
// match what `window.location.pathname` would reflect.  Those don't 100%
// align when it comes to encoded URI characters such as % and &.
// So we may end up with:
//   pathname:           "/descendant/a%25b/match"
//   parentPathnameBase: "/descendant/a%b"
// And the direct substring removal approach won't work :/
let e=m.replace(/^\//,"").split("/");E="/"+w.replace(/^\//,"").split("/").slice(e.length).join("/")}let R=f(e,{pathname:E});c(v||null!=R,'No routes matched location "'+g.pathname+g.search+g.hash+'" '),c(null==R||void 0!==R[R.length-1].route.element||void 0!==R[R.length-1].route.Component||void 0!==R[R.length-1].route.lazy,'Matched leaf route at location "'+g.pathname+g.search+g.hash+'" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');let C=function(e,t,n,a){var o;void 0===t&&(t=[]);void 0===n&&(n=null);void 0===a&&(a=null);if(null==e){var i;if(!n)return null;if(n.errors)
// Don't bail if we have data router errors so we can render them in the
// boundary.  Use the pre-matched (or shimmed) matches
e=n.matches;else{if(!(null!=(i=a)&&i.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;
// Don't bail if we're initializing with partial hydration and we have
// router matches.  That means we're actively running `patchRoutesOnNavigation`
// so we should render down the partial matches to the appropriate
// `HydrateFallback`.  We only do this if `parentMatches` is empty so it
// only impacts the root matches for `RouterProvider` and no descendant
// `<Routes>`
e=n.matches}}let l=e,c=null==(o=n)?void 0:o.errors;
// If we have data errors, trim matches to the highest error boundary
if(null!=c){let e=l.findIndex((e=>e.route.id&&void 0!==(null==c?void 0:c[e.route.id])));e>=0||s(!1,"Could not find a matching route for errors on route IDs: "+Object.keys(c).join(",")),l=l.slice(0,Math.min(l.length,e+1))}
// If we're in a partial hydration mode, detect if we need to render down to
// a given HydrateFallback while we load the rest of the hydration data
let u=!1,d=-1;if(n&&a&&a.v7_partialHydration)for(let e=0;e<l.length;e++){let t=l[e];
// Track the deepest fallback up until the first route without data
if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(d=e),t.route.id){let{loaderData:e,errors:a}=n,r=t.route.loader&&void 0===e[t.route.id]&&(!a||void 0===a[t.route.id]);if(t.route.lazy||r){
// We found the first route that's not ready to render (waiting on
// lazy, or has a loader that hasn't run yet).  Flag that we need to
// render a fallback and render up until the appropriate fallback
u=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,a,o)=>{
// Only data routers handle errors/fallbacks
let i,s=!1,h=null,p=null;n&&(i=c&&a.route.id?c[a.route.id]:void 0,h=a.route.errorElement||ee,u&&(d<0&&0===o?(se("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),s=!0,p=null):d===o&&(s=!0,p=a.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,o+1)),f=()=>{let t;return t=i?h:s?p:a.route.Component?r.createElement(a.route.Component,null):a.route.element?a.route.element:e,r.createElement(ne,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};
// Only wrap in an error boundary within data router usages when we have an
// ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
// an ancestor ErrorBoundary/errorElement
return n&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?r.createElement(te,{location:n.location,revalidation:n.revalidation,component:h,error:i,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()}),null)}(R&&R.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:I([m,
// Re-encode pathnames that were decoded inside matchRoutes
i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:I([m,
// Re-encode pathnames that were decoded inside matchRoutes
i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,n,o);
// When a user passes in a `locationArg`, the associated routes need to
// be wrapped in a new `LocationContext.Provider` in order for `useLocation`
// to use the scoped location instead of the global location.
if(t&&C)
return r.createElement(H.Provider,{value:{location:F({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:a.Pop}},C);return C}(e,t)}function Q(){let e=
/**
   * Returns the nearest ancestor Route error, which could be a loader/action
   * error or a render error.  This is intended to be called from your
   * ErrorBoundary/errorElement to display a proper error message.
   */
function(){var e;let t=r.useContext(z),n=function(e){let t=r.useContext(V);return t||s(!1,oe(e)),t}(re.UseRouteError),a=ie(re.UseRouteError);
// If this was a render error, we put it in a RouteError context inside
// of RenderErrorBoundary
if(void 0!==t)return t;
// Otherwise look for errors from our data router state
return null==(e=n.errors)?void 0:e[a]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},i={padding:"2px 4px",backgroundColor:a},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=r.createElement(r.Fragment,null,r.createElement("p",null,"💿 Hey developer 👋"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:i},"ErrorBoundary")," or"," ",r.createElement("code",{style:i},"errorElement")," prop on your route.")),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,l)}const ee=r.createElement(Q,null);class te extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){
// When we get into an error state, the user will likely click "back" to the
// previous page that didn't have an error. Because this wraps the entire
// application, that will have no effect--the error page continues to display.
// This gives us a mechanism to recover from the error when the location changes.
// Whether we're in an error state or not, we update the location in state
// so that when we are in an error state, it gets reset when a new location
// comes in and the user recovers from the error.
return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation};
// If we're not changing locations, preserve the location but still surface
// any new errors that may come through. We retain the existing error, we do
// this because the error provided from the app state may be cleared without
// the location changing.
}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement($.Provider,{value:this.props.routeContext},r.createElement(z.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ne(e){let{routeContext:t,match:n,children:a}=e,o=r.useContext(j);
// Track how deep we got in our render pass to emulate SSR componentDidCatch
// in a DataStaticRouter
return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement($.Provider,{value:t},a)}var ae=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ae||{}),re=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(re||{});function oe(e){return e+" must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router."}
// Internal version with hookName-aware debugging
function ie(e){let t=function(e){let t=r.useContext($);return t||s(!1,oe(e)),t}(e),n=t.matches[t.matches.length-1];return n.route.id||s(!1,e+' can only be used on routes that contain a unique "id"'),n.route.id}
/**
   * Returns the ID for the nearest contextual route
   */const le={};function se(e,t,n){t||le[e]||(le[e]=!0,c(!1,n))}const ce={};const ue=(e,t,n)=>{var a;ce[a="⚠️ React Router Future Flag Warning: "+t+". You can use the `"+e+"` future flag to opt-in early. For more information, see "+n+"."]||(ce[a]=!0,console.warn(a))};
/**
   * Declares an element that should be rendered at a certain URL path.
   *
   * @see https://reactrouter.com/v6/components/route
   */
function de(e){s(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}
/**
   * Provides location context for the rest of the app.
   *
   * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
   * router that is more specific to your environment such as a `<BrowserRouter>`
   * in web browsers or a `<StaticRouter>` for server rendering.
   *
   * @see https://reactrouter.com/v6/router-components/router
   */function he(e){let{basename:t="/",children:n=null,location:o,navigationType:i=a.Pop,navigator:l,static:u=!1,future:d}=e;K()&&s(!1,"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
// Preserve trailing slashes on basename, so we can let the user control
// the enforcement of trailing slashes throughout the app
let h=t.replace(/^\/*/,"/"),m=r.useMemo((()=>({basename:h,navigator:l,static:u,future:F({v7_relativeSplatPath:!1},d)})),[h,d,l,u]);"string"==typeof o&&(o=p(o));let{pathname:f="/",search:v="",hash:g="",state:b=null,key:y="default"}=o,w=r.useMemo((()=>{let e=k(f,h);return null==e?null:{location:{pathname:e,search:v,hash:g,state:b,key:y},navigationType:i}}),[h,f,v,g,b,y,i]);return c(null!=w,'<Router basename="'+h+'"> is not able to match the URL "'+f+v+g+"\" because it does not start with the basename, so the <Router> won't render anything."),null==w?null:r.createElement(W.Provider,{value:m},r.createElement(H.Provider,{children:n,value:w}))}
/**
   * A container for a nested tree of `<Route>` elements that renders the branch
   * that best matches the current location.
   *
   * @see https://reactrouter.com/v6/components/routes
   */function pe(e){let{children:t,location:n}=e;return X(me(t),n)}
///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
   * Creates a route config from a React "children" object, which is usually
   * either a `<Route>` element or an array of them. Used internally by
   * `<Routes>` to create a route config from its children.
   *
   * @see https://reactrouter.com/v6/utils/create-routes-from-children
   */
function me(e,t){void 0===t&&(t=[]);let n=[];return r.Children.forEach(e,((e,a)=>{if(!r.isValidElement(e))
// Ignore non-elements. This allows people to more easily inline
// conditionals in their route config.
return;let o=[...t,a];if(e.type===r.Fragment)
// Transparently support React.Fragment and its children.
return void n.push.apply(n,me(e.props.children,o));e.type!==de&&s(!1,"["+("string"==typeof e.type?e.type:e.type.name)+"] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"),e.props.index&&e.props.children&&s(!1,"An index route cannot have child routes.");let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=me(e.props.children,o)),n.push(i)})),n}
/**
   * React Router DOM v6.28.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},fe.apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}new Promise((()=>{}));const ge="get",be="application/x-www-form-urlencoded";function ye(e){return null!=e&&"string"==typeof e.tagName}
// One-time check for submitter support
let we=null;const Ee=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Re(e){return null==e||Ee.has(e)?e:(c(!1,'"'+e+'" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "'+be+'"'),null)}function Ce(e,t){let n,a,r,o,i;if(ye(l=e)&&"form"===l.tagName.toLowerCase()){
// When grabbing the action from the element, it will have had the basename
// prefixed to ensure non-JS scenarios work, so strip it since we'll
// re-prefix in the router
let i=e.getAttribute("action");a=i?k(i,t):null,n=e.getAttribute("method")||ge,r=Re(e.getAttribute("enctype"))||be,o=new FormData(e)}else if(function(e){return ye(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return ye(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
// <button>/<input type="submit"> may override attributes of <form>
// When grabbing the action from the element, it will have had the basename
// prefixed to ensure non-JS scenarios work, so strip it since we'll
// re-prefix in the router
let l=e.getAttribute("formaction")||i.getAttribute("action");
// If this browser doesn't support the `FormData(el, submitter)` format,
// then tack on the submitter value at the end.  This is a lightweight
// solution that is not 100% spec compliant.  For complete support in older
// browsers, consider using the `formdata-submitter-polyfill` package
if(a=l?k(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||ge,r=Re(e.getAttribute("formenctype"))||Re(i.getAttribute("enctype"))||be,
// Build a FormData object populated from a form and submitter
o=new FormData(i,e),!function(){if(null===we)try{new FormData(document.createElement("form"),
// @ts-expect-error if FormData supports the submitter parameter, this will throw
0),we=!1}catch(e){we=!0}return we}()){let{name:t,type:n,value:a}=e;if("image"===n){let e=t?t+".":"";o.append(e+"x","0"),o.append(e+"y","0")}else t&&o.append(t,a)}}else{if(ye(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
// Send body for <Form encType="text/plain" so we encode it into text
n=ge,a=null,r=be,i=e}var l;return o&&"text/plain"===r&&(i=o,o=void 0),{action:a,method:n.toLowerCase(),encType:r,formData:o,body:i}}const xe=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ne=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Se=["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","viewTransition"];
// HEY YOU! DON'T TOUCH THIS VARIABLE!

// It is replaced with the proper version at build time via a babel plugin in
// the rollup config.

// Export a global property onto the window for React Router detection by the
// Core Web Vitals Technology Report.  This way they can configure the `wappalyzer`
// to detect and properly classify live websites as being built with React Router:
// https://github.com/HTTPArchive/wappalyzer/blob/main/src/technologies/r.json
try{window.__reactRouterVersion="6"}catch(e){
// no-op
}const De=r.createContext({isTransitioning:!1});De.displayName="ViewTransition";r.createContext(new Map).displayName="Fetchers";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
    Webpack + React 17 fails to compile on any of the following because webpack
    complains that `startTransition` doesn't exist in `React`:
    * import { startTransition } from "react"
    * import * as React from from "react";
      "startTransition" in React ? React.startTransition(() => setState()) : setState()
    * import * as React from from "react";
      "startTransition" in React ? React["startTransition"](() => setState()) : setState()

    Moving it to a constant such as the following solves the Webpack/React 17 issue:
    * import * as React from from "react";
      const START_TRANSITION = "startTransition";
      START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

    However, that introduces webpack/terser minification issues in production builds
    in React 18 where minification/obfuscation ends up removing the call of
    React.startTransition entirely from the first half of the ternary.  Grabbing
    this exported reference once up front resolves that issue.

    See https://github.com/remix-run/react-router/issues/10579
  */
const Ae=r.startTransition;
/**
   * A `<Router>` for use in web browsers. Stores the location in the hash
   * portion of the URL so it is not sent to the server.
   */
function ke(e){let{basename:t,children:n,future:a,window:o}=e,i=r.useRef();null==i.current&&(i.current=l({window:o,v5Compat:!0}));let s=i.current,[c,u]=r.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},h=r.useCallback((e=>{d&&Ae?Ae((()=>u(e))):u(e)}),[u,d]);return r.useLayoutEffect((()=>s.listen(h)),[s,h]),r.useEffect((()=>{return void 0===(null==(e=a)?void 0:e.v7_startTransition)&&ue("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),void(void 0!==(null==e?void 0:e.v7_relativeSplatPath)||t||ue("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"));var e,t}),[a]),r.createElement(he,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,future:a})}const Pe="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Le=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Te=r.forwardRef((function(e,t){let n,{onClick:a,relative:o,reloadDocument:i,replace:l,state:u,target:d,to:p,preventScrollReset:m,viewTransition:f}=e,v=ve(e,xe),{basename:g}=r.useContext(W),b=!1;if("string"==typeof p&&Le.test(p)&&(
// Render the absolute href server- and client-side
n=p,Pe))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=k(t.pathname,g);t.origin===e.origin&&null!=n?
// Strip the protocol/origin/basename for same-origin absolute URLs
p=n+t.search+t.hash:b=!0}catch(e){
// We can't do external URL detection without a valid URL
c(!1,'<Link to="'+p+'"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.')}
// Rendered into <a href> for relative URLs
let y=
/**
   * Returns the full href for the given "to" value. This is useful for building
   * custom links that are also accessible and preserve right-click behavior.
   *
   * @see https://reactrouter.com/v6/hooks/use-href
   */
function(e,t){let{relative:n}=void 0===t?{}:t;K()||s(!1,// TODO: This error is probably because they somehow have 2 versions of the
// router loaded. We can help them understand how to avoid that.
"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:o}=r.useContext(W),{hash:i,pathname:l,search:c}=Z(e,{relative:n}),u=l;
// If we're operating within a basename, prepend it to the pathname prior
// to creating the href.  If this is a root navigation, then just use the raw
// basename which allows the basename to have full control over the presence
// of a trailing slash on root links
return"/"!==a&&(u="/"===l?a:I([a,l])),o.createHref({pathname:u,search:c,hash:i})}(p,{relative:o}),w=
// External hooks
/**
   * Handles the click behavior for router `<Link>` components. This is useful if
   * you need to create custom `<Link>` components with the same click behavior we
   * use in our exported `<Link>`.
   */
function(e,t){let{target:n,replace:a,state:o,preventScrollReset:i,relative:l,viewTransition:s}=void 0===t?{}:t,c=Y(),u=q(),d=Z(e,{relative:l});return r.useCallback((t=>{if(function(e,t){return!(0!==e.button||
// Ignore everything but left clicks
t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();
// If the URL hasn't changed, a regular <a> will do a replace instead of
// a push, so do the same here unless the replace prop is explicitly set
let n=void 0!==a?a:h(u)===h(d);c(e,{replace:n,state:o,preventScrollReset:i,relative:l,viewTransition:s})}}),[u,c,d,a,o,n,e,i,l,s])}(p,{replace:l,state:u,target:d,preventScrollReset:m,relative:o,viewTransition:f});

// eslint-disable-next-line jsx-a11y/anchor-has-content
return r.createElement("a",fe({},v,{href:n||y,onClick:b||i?a:function(e){a&&a(e),e.defaultPrevented||w(e)},ref:t,target:d}))}));Te.displayName="Link";r.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:a=!1,className:o="",end:i=!1,style:l,to:c,viewTransition:u,children:d}=e,h=ve(e,Ne),p=Z(c,{relative:h.relative}),m=q(),f=r.useContext(V),{navigator:v,basename:g}=r.useContext(W),b=null!=f&&
// Conditional usage is OK here because the usage of a data router is static
// eslint-disable-next-line react-hooks/rules-of-hooks
/**
   * Return a boolean indicating if there is an active view transition to the
   * given href.  You can use this value to render CSS classes or viewTransitionName
   * styles onto your elements
   *
   * @param href The destination href
   * @param [opts.relative] Relative routing type ("route" | "path")
   */
function(e,t){void 0===t&&(t={});let n=r.useContext(De);null==n&&s(!1,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Oe(Ie.useViewTransitionState),o=Z(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=k(n.currentLocation.pathname,a)||n.currentLocation.pathname,l=k(n.nextLocation.pathname,a)||n.nextLocation.pathname;
// Transition is active if we're going to or coming from the indicated
// destination.  This ensures that other PUSH navigations that reverse
// an indicated transition apply.  I.e., on the list view you have:
//   <NavLink to="/details/1" viewTransition>
// If you click the breadcrumb back to the list view:
//   <NavLink to="/list" viewTransition>
// We should apply the transition because it's indicated as active going
// from /list -> /details/1 and therefore should be active on the reverse
// (even though this isn't strictly a POP reverse)
return null!=D(o.pathname,l)||null!=D(o.pathname,i)}(p)&&!0===u,y=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,w=m.pathname,E=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;a||(w=w.toLowerCase(),E=E?E.toLowerCase():null,y=y.toLowerCase()),E&&g&&(E=k(E,g)||E);
// If the `to` has a trailing slash, look at that exact spot.  Otherwise,
// we're looking for a slash _after_ what's in `to`.  For example:
// <NavLink to="/users"> and <NavLink to="/users/">
// both want to look for a / at index 6 to match URL `/users/matt`
const R="/"!==y&&y.endsWith("/")?y.length-1:y.length;let C,x=w===y||!i&&w.startsWith(y)&&"/"===w.charAt(R),N=null!=E&&(E===y||!i&&E.startsWith(y)&&"/"===E.charAt(y.length)),S={isActive:x,isPending:N,isTransitioning:b},A=x?n:void 0;C="function"==typeof o?o(S):[o,x?"active":null,N?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let P="function"==typeof l?l(S):l;
return r.createElement(Te,fe({},h,{"aria-current":A,className:C,ref:t,style:P,to:c,viewTransition:u}),"function"==typeof d?d(S):d)})).displayName="NavLink";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var Ie,_e;function Oe(e){let t=r.useContext(j);return t||s(!1,
// Internal hooks
function(e){return e+" must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router."}(e)),t}r.forwardRef(((e,t)=>{let{fetcherKey:n,navigate:a,reloadDocument:o,replace:i,state:l,method:c=ge,action:u,onSubmit:d,relative:p,preventScrollReset:m,viewTransition:f}=e,v=ve(e,Se),g=
/**
   * Returns a function that may be used to programmatically submit a form (or
   * some arbitrary data) to the server.
   */
function(){let{router:e}=Oe(Ie.UseSubmit),{basename:t}=r.useContext(W),n=ie(re.UseRouteId);return r.useCallback((function(a,r){void 0===r&&(r={}),function(){if("undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}();let{action:o,method:i,encType:l,formData:s,body:c}=Ce(a,t);if(!1===r.navigate){let t=r.fetcherKey||Be();e.fetch(t,n,r.action||o,{preventScrollReset:r.preventScrollReset,formData:s,body:c,formMethod:r.method||i,formEncType:r.encType||l,flushSync:r.flushSync})}else e.navigate(r.action||o,{preventScrollReset:r.preventScrollReset,formData:s,body:c,formMethod:r.method||i,formEncType:r.encType||l,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})}),[e,t,n])}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
(),b=function(e,t){let{relative:n}=void 0===t?{}:t,{basename:a}=r.useContext(W),o=r.useContext($);o||s(!1,"useFormAction must be used inside a RouteContext");let[i]=o.matches.slice(-1),l=fe({},Z(e||".",{relative:n})),c=q();
// Shallow clone path so we can modify it below, otherwise we modify the
// object referenced by useMemo inside useResolvedPath
if(null==e){
// Safe to write to this directly here since if action was undefined, we
// would have called useResolvedPath(".") which will never include a search
l.search=c.search;
// When grabbing search params from the URL, remove any included ?index param
// since it might not apply to our contextual route.  We add it back based
// on match.route.index below
let e=new URLSearchParams(l.search),t=e.getAll("index");if(t.some((e=>""===e))){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();l.search=n?"?"+n:""}}e&&"."!==e||!i.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");
// If we're operating within a basename, prepend it to the pathname prior
// to creating the form action.  If this is a root navigation, then just use
// the raw basename which allows the basename to have full control over the
// presence of a trailing slash on root actions
"/"!==a&&(l.pathname="/"===l.pathname?a:I([a,l.pathname]));return h(l)}(u,{relative:p}),y="get"===c.toLowerCase()?"get":"post";
return r.createElement("form",fe({ref:t,method:y,action:b,onSubmit:o?d:e=>{if(d&&d(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,r=(null==t?void 0:t.getAttribute("formmethod"))||c;g(t||e.currentTarget,{fetcherKey:n,method:r,navigate:a,replace:i,state:l,relative:p,preventScrollReset:m,viewTransition:f})}},v))})).displayName="Form",function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"}(Ie||(Ie={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(_e||(_e={}));let Ue=0,Be=()=>"__"+String(++Ue)+"__";function Me(){const[t,n]=e.useState(!1),[a,r]=e.useState(!1),[o,i]=e.useState(!1);return e.useEffect((()=>{t||n(!0)}),[t]),e.createElement("nav",{className:"navbar navbar-default navbar-fixed-top navbar-inverse navbar-trans navbar-trans-dark trans-helper navbar-fw",role:"navigation"},e.createElement("div",{className:"container"},e.createElement("div",{style:{width:"75%"},className:"navbar-header page-scroller"},e.createElement("button",{type:"button",onClick:e=>{console.info("hi2"),e.preventDefault(),r(!a)},className:"navbar-toggle collapsed","data-toggle":a?"collapse in":"collapse","data-target":"#navbar","aria-expanded":a?"true":"false","aria-controls":"navbar"},e.createElement("span",{className:"sr-only"},"Toggle navigation"),e.createElement("span",{className:"icon-bar"}),e.createElement("span",{className:"icon-bar"}),e.createElement("span",{className:"icon-bar"})),e.createElement("a",{className:"navbar-brand",href:"index.html"},e.createElement("img",{className:"navbar-logo-dark",style:{content:"unset",height:"50px",backgroundImage:"none"},src:"radar_big.webp",alt:"React Adobe Embed Canary Testing Endpoint"}))),e.createElement("div",{id:"navbar","aria-expanded":a?"true":"false",className:a?"navbar-collapse   collapse in":" navbar-collapse   collapse"},e.createElement("ul",{className:"nav navbar-nav"},e.createElement("li",null,e.createElement(Te,{"data-testid":"home-link",to:"/test"},"Home",e.createElement("span",{className:"sr-only"}))),e.createElement("li",{onClick:()=>{i(!o)},className:"dropdown"+(o?" open":"")},e.createElement(Te,{className:"dropdown-toggle","data-testid":"test-link",to:"#"},"Test",e.createElement("span",{className:"caret"})),e.createElement("ul",{className:"dropdown-menu"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-lg-6 mb-sm-30"},e.createElement("li",{className:"dropdown-header"},"Test Routes"),e.createElement("li",{className:"divider"}),e.createElement("li",null,e.createElement(Te,{to:"/home"},"Basic PDF Render")),e.createElement("li",null,e.createElement(Te,{to:"/light"},"Lightbox PDF Render")),e.createElement("li",null,e.createElement(Te,{to:"/cdn"},"CDN Loaded PDF Render"))))))))))}function Fe(){return e.createElement("footer",{className:"footer-widgets"},e.createElement("div",{className:"copyright"},e.createElement("div",{className:"container"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-sm-6"},e.createElement("small",null,"© 2024 by Ziping liu. Proudly Served with ",e.createElement("a",{className:"no-style-link",href:"https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/blob/slave/.github/workflows/canaryapp.yml"},"Github Pages"))),e.createElement("div",{className:"col-sm-6"},e.createElement("small",null,e.createElement("a",{href:"#page-top",className:"pull-right to-the-top"},"To the top",e.createElement("i",{className:"fa fa-angle-up"}))))))))}const je={demoUrl:"https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf",staticDefaultConfig:{showAnnotationTools:!1,showLeftHandPanel:!1,embedMode:void 0,showPageControls:!1,viewSdkViewerScript:"https://acrobatservices.adobe.com/view-sdk/viewer.js",showDownloadPDF:!1,showPrintPDF:!1},staticDivId:"pdf-div",demoMetaData:{fileName:"Adobe Example Pdf.pdf",id:"6d07d124 - ac85–43b3 - a867–36930f502ac6"}},Ve=t=>{const n=e.useRef(document.getElementById(t.id||je.staticDivId));return e.createElement("div",{ref:n,id:t.id||je.staticDivId,className:t.className||"adobe-viewer-of-amazon-corporate-retaliations",style:t.style,title:t.title||"entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots"})};
/**
   * @description - An atypical Nested React Component of ReactViewAdobe,
   * specifically for managing API calls and configurations of the Adobe Embed API SDK
   * This component, in turn, employs the use of React Hooks
   * to render what the Adobe Embed API SDK perceives as static
   * and vanilla JavaScript code, transposed into the Document Object Model (DOM).
   */
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
function We({divId:e,viewerConfig:t,url:n,clientID:a,_fileMeta:r,_dcView:o}){const i={clientId:a,divId:e};return(o||new window.AdobeDC.View(i)).previewFile({content:{location:{url:n}},metaData:r||je.demoMetaData},t)}function He({message:e,prefix:t="ReactViewAdobe",type:n="info"}){
// format the message  and better colors, prefix in bold
const a=`[1m${t}[0m: ${e}`;
// log the message to the console add prefix in bold
console[n](a)}
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
   */function $e(t){const[n,a]=e.useState(!1),[r,o]=e.useState(!1),[i,l]=e.useState(!1),s=e[t?.useReactHookForAdobeAPIConfigs||"useMemo"],c=e.useCallback((()=>{const e=t.id||je.staticDivId,n=t.previewConfig||je.staticDefaultConfig,a=t.url||je.demoUrl;
// For Lightbox, we only call if "triggerAdobeDCViewRender" is set
if("LIGHT_BOX"===n?.embedMode)t.triggerAdobeDCViewRender&&We({divId:e,viewerConfig:n,url:a,clientID:t.clientId,_fileMeta:t.fileMeta});else{document.getElementById(e)&&(t.debug&&console.info("Adobe PDF Viewer: Attempting to preview the file"),We({divId:e,viewerConfig:n,url:a,clientID:t.clientId,_fileMeta:t.fileMeta}))}}),[t.id,t.url,t.clientId,t.fileMeta,t.debug,t.triggerAdobeDCViewRender,t.previewConfig]),u=s((()=>{if(t.debug&&He({message:"At hooks to check if Adobe DC View is available",prefix:"ReactViewAdobe:adobeDCView",type:"info"}),!0===n){const e=window.AdobeDC?.View;return t.debug&&He({message:"Adobe DC View is available",prefix:"ReactViewAdobe:adobeDCView",type:"info"}),e}}),[n]);(0,e[t?.useReactHookWhenLoadingAdobeAPI||"useEffect"])((()=>{if(!1===i){const e=document.querySelector(`script.react-adobe-embed-handholding-adobe-api-loading-idiocy[data-adobe-pdf-id="${t.id||je.staticDivId}"]`);if(e)t.debug&&
// console.info(`\x1b[1mAdobe SDK Check\x1b[0m`, 'Reloading and Rerendering Adobe SDK');
He({message:"Reloading and Rerendering Adobe SDK",prefix:"ReactViewAdobe:AdobeSDK",type:"info"}),
// Lightbox mode renders from ui event triggered by user, so no need to render
"LIGHT_BOX"!==t.previewConfig?.embedMode&&o(!0),e.setAttribute("data-testid","react-adobe-embed-handholding-adobe-api-loading-idiocy-reused");else{t.debug&&He({message:"Initial Adobe SDK Load",prefix:"ReactViewAdobe:AdobeSDK",type:"info"});const e=document.createElement("script");e.setAttribute("data-testid","react-adobe-embed-handholding-adobe-api-loading-idiocy-initial"),e.setAttribute("data-adobe-pdf-id",t.id||je.staticDivId),e.setAttribute("class","react-adobe-embed-handholding-adobe-api-loading-idiocy"),e.src=t.previewConfig?.viewSdkViewerScript||je.staticDefaultConfig.viewSdkViewerScript,e.async=!0,e.onload=()=>{l(!0)},document.body.appendChild(e)}}}),[t.id,i,n]);(0,e[t?.useReactHookWhenCallingAdobeAPI||"useEffect"])((()=>{!1===n&&!0===i&&document.addEventListener("adobe_dc_view_sdk.ready",(()=>{a(!0)}));!0===i&&!0===n&&(e=>{e.debug&&
/*
                    console.info(
                    "Adobe PDF Viewer SDK Ready Event",
                    adobeDCView,
                    (window as any)["adobe_dc_view_sdk"],
                  );*/
He({message:"At Calling Adobe API to render PDF - window.adobe_dc_view_sdk:"+window.adobe_dc_view_sdk,prefix:"ReactViewAdobe:callAdobeApi",type:"info"}),c()})(t)}),[n,i,t,u]);return(0,e[t?.useReactHookForComponentDidUpdate||"useEffect"])((()=>{if(!0===r){const e=t.id||je.staticDivId;document.getElementById(e)&&c(),o(!1)}}),[r,t]),e.createElement(Ve,{...t})}function ze(){switch(window.location.hostname){case"localhost":default:return"324caa2a91b84f688935436cd2d25217";case"ziping.dev":return"2aeb65914ea244cd85c16b60ca3b688d";case"ziping.life":return"2daf6038d0f1447fb9dd17988e93b5b8";case"ziping.org":return"312487a25a5b4c0d845f6d93e8103c32";case"awsuni.com":return"50d3f2b88101430f8da3006527dcdf78";case"twitterliu.com":return"ac52e99ebc8242e9bf85ecb55444f726";case"one.ziping.org":return"2e5605e61e5b4306829b619d6fad2dc4";case"zipingl.github.io":return"9c16d364507948289a9f65f9ab9da8bf";case"ziping-liu-corporation.github.io":return"875691e089ad4bf6bc4c5cea79403542"}}function Ke(){const t=window.location.href.split("?")[1],n=new URLSearchParams(t),a=n.get("pdf")||n.get("url")||"https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf",r=n.get("width"),o=n.get("height"),i=n.get("fileName")||a.split("/").pop()||"23andMe_Ancestry_Book.pdf";return e.createElement("section",{id:"about",className:"container section"},e.createElement("div",{className:"row ws-m"},e.createElement("header",{className:"sec-heading"},e.createElement("h2",null,"Basic Test View"),e.createElement("span",{className:"subheading"},"Using the react-adobe-embed component with no additional configurations, except for the pdf url, in order to test the rendering of a PDF at the most basic level of usage.")),e.createElement($e,{previewConfig:{},className:"col container-fluid post-content",fileMeta:{fileName:i},style:{width:r||"100%",height:o||"calc(100vh - 200px)",maxHeight:"100%",border:"1px solid transparent",alignContent:"center",justifyContent:"center",minHeight:"500px"},url:a,debug:!0,id:"adobe-dc-view-0",clientId:ze()})))}function qe(){return e.createElement("section",{className:"container section"},e.createElement("div",{className:"row ws-m"},e.createElement("div",{className:"col s12",style:{height:"calc(100vh - 420px)"}},e.createElement($e,{url:"https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf",clientId:ze(),previewConfig:{embedMode:"LIGHT_BOX"},debug:!0}),e.createElement("button",{className:"btn btn-primary",onClick:()=>{We({url:"https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf",viewerConfig:{embedMode:"LIGHT_BOX"},clientID:ze(),divId:"pdf-div",_fileMeta:{fileName:"23andMe_Ancestry_Book.pdf"}})}},"Toggle Light Box View"))))}function Ge(){const[t,n]=e.useState(!1),[a,r]=e.useState(!1);e.useEffect((()=>{if(!t){
// Create new script element to load cdn
const e=document.createElement("script");e.src="https://ziping-liu-corporation.github.io/react-adobe-embed/lib/bundle.js",e.async=!0,e.onload=()=>{r(!0)},
// Add script to document body
document.body.appendChild(e),n(!0)}}),[t,a]),window.React=e,// expose React as global since the react-adobe embed cdn expects React to be loaded via cdn as well
console.info("ReactAdobeEMbed",window.ReactAdobeEmbed);const o=window.ReactAdobeEmbed?.ReactViewAdobe;return e.createElement("section",{className:"container section"},e.createElement("div",{className:"row ws-m"},e.createElement("div",{className:"col s12"},e.createElement("header",{className:"sec-heading"},e.createElement("h2",null,"CDN Loaded Basic PDF Render"),e.createElement("span",{className:"subheading"},"Content Delivery Networking (CDN) allows the delivery of the react-adobe-embed component to a browser environment to occur as ",e.createElement("strong",null,"a separate process")," from the main body of the web application's code.")),e.createElement("p",null,"This approach involves loading the component as an independent script within the initial HTML page load, effectively integrating it into the HTML DOM environment. This method not only reduces the space required by the web application, thereby enhancing its load speed, but also leverages the benefits of distributed loading. By loading distinct components of the web application through separate network requests, we can maximize efficiency. In this instance, the react-adobe-embed component is sourced from a CDN as a separate network request, distinct from the main web application. This effectively allows the web application to load in two concurrent parts, or at least simulates this effect, thanks to the inherent multi-threading capabilities of computer systems."),a&&t&&e.createElement(o,{clientId:ze(),url:"https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf",debug:!0,className:"col container-fluid post-content",style:{height:"calc(100vh - 420px)",width:"100%"},previewConfig:{},fileMeta:{fileName:"23andMe_Ancestry_Book.pdf"}}))))}const Je=document.getElementById("app");Je&&t.createRoot(Je).render(e.createElement((function(){return e.createElement(ke,null,e.createElement(Me,null),e.createElement(pe,null,e.createElement(de,{path:"/test",element:e.createElement("div",{className:"section container"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col s12"},e.createElement("h5",{"data-testid":"test-route",className:"header"},"Test Route View"),e.createElement("iframe",{src:"https://one.ziping.org/ZIPING-LIU-CORPORATION/react-adobe-embed/blob/slave/README.md/?domain=github.com",style:{width:"100%",height:"900px",border:"1px solid transparent",alignContent:"center",justifyContent:"center"}}))))}),e.createElement(de,{path:"/home",element:e.createElement(Ke,null)}),e.createElement(de,{path:"/light",element:e.createElement(qe,null)}),e.createElement(de,{path:"/cdn",element:e.createElement(Ge,null)})),e.createElement(Fe,null))}),null))}));
