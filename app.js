/* react app for react-adobe-embed used as a live testing environment  via github pages */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("react"),require("react-dom/client")):"function"==typeof define&&define.amd?define(["react","react-dom/client"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).React,e.ReactDOM)}(this,(function(e,t){"use strict";function n(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var a,r=n(e);
/**
   * @remix-run/router v1.10.0
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
null==v&&(v=0,p.replaceState(o({},p.state,{idx:v}),""));function g(){return(p.state||{idx:null}).idx}function b(){m=a.Pop;let e=g(),t=null==e?null:e-v;v=e,f&&f({action:m,location:R.location,delta:t})}function w(e,t){m=a.Push;let r=d(R.location,e,t);n&&n(r,e),v=g()+1;let o=u(r,v),i=R.createHref(r);
// try...catch because iOS limits us to 100 pushState calls :/
try{p.pushState(o,"",i)}catch(e){
// If the exception is because `state` can't be serialized, let that throw
// outwards just like a replace call would so the dev knows the cause
// https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
// https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;
// They are going to lose state here, but there is no real
// way to warn them about it since the page will refresh...
l.location.assign(i)}c&&f&&f({action:m,location:R.location,delta:1})}function y(e,t){m=a.Replace;let r=d(R.location,e,t);n&&n(r,e),v=g();let o=u(r,v),i=R.createHref(r);p.replaceState(o,"",i),c&&f&&f({action:m,location:R.location,delta:0})}function E(e){
// window.location.origin is "null" (the literal string value) in Firefox
// under certain conditions, notably when serving from a local HTML file
// See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
let t="null"!==l.location.origin?l.location.origin:l.location.href,n="string"==typeof e?e:h(e);return s(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let R={get action(){return m},get location(){return e(l,p)},listen(e){if(f)throw new Error("A history only accepts one active listener");return l.addEventListener(i,b),f=e,()=>{l.removeEventListener(i,b),f=null}},createHref:e=>t(l,e),createURL:E,encodeLocation(e){
// Encode a Location the same way window.location would
let t=E(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:w,replace:y,go:e=>p.go(e)};return R}
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
   * @see https://reactrouter.com/utils/match-routes
   */
function f(e,t,n){void 0===n&&(n="/");let a=k(("string"==typeof t?p(t):t).pathname||"/",n);if(null==a)return null;let r=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?
// If two routes are siblings, we should try to match the earlier sibling
// first. This allows people to have fine-grained control over the matching
// behavior by simply putting routes with identical paths in the order they
// want them tried.
e[e.length-1]-t[t.length-1]:
// Otherwise, it doesn't really make sense to rank non-siblings by index,
// so they sort equally.
0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(r);let o=null;for(let e=0;null==o&&e<r.length;++e)o=S(r[e],
// Incoming pathnames are generally encoded from either window.location
// or from router.navigate, but we want to match against the unencoded
// paths in the route definitions.  Memory router locations won't be
// encoded here but there also shouldn't be anything to decode so this
// should be a safe operation.  This avoids needing matchRoutes to be
// history-aware.
L(a));return o}function v(e,t,n,a){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===a&&(a="");let r=(e,r,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};i.relativePath.startsWith("/")&&(s(i.relativePath.startsWith(a),'Absolute route path "'+i.relativePath+'" nested under path "'+a+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(a.length));let l=T([a,i.relativePath]),c=n.concat(i);
// Add the children before adding this route to the array, so we traverse the
// route tree depth-first and child routes appear before their parents in
// the "flattened" version.
e.children&&e.children.length>0&&(s(
// Our types know better, but runtime JS may not!
// @ts-expect-error
!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),v(e.children,t,c,l)),
// Routes without a path shouldn't ever match by themselves unless they are
// index routes, so don't add them to the list of possible branches.
(null!=e.path||e.index)&&t.push({path:l,score:x(l,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var n;
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
r&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));const b=/^:\w+$/,w=3,y=2,E=1,R=10,C=-2,N=e=>"*"===e;function x(e,t){let n=e.split("/"),a=n.length;return n.some(N)&&(a+=C),t&&(a+=y),n.filter((e=>!N(e))).reduce(((e,t)=>e+(b.test(t)?w:""===t?E:R)),a)}function S(e,t){let{routesMeta:n}=e,a={},r="/",o=[];for(let e=0;e<n.length;++e){let i=n[e],l=e===n.length-1,s="/"===r?t:t.slice(r.length)||"/",c=D({path:i.relativePath,caseSensitive:i.caseSensitive,end:l},s);if(!c)return null;Object.assign(a,c.params);let u=i.route;o.push({
// TODO: Can this as be avoided?
params:a,pathname:T([r,c.pathname]),pathnameBase:U(T([r,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(r=T([r,c.pathnameBase]))}return o}
/**
   * Performs pattern matching on a URL pathname and returns information about
   * the match.
   *
   * @see https://reactrouter.com/utils/match-path
   */function D(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(a.push(t),"/([^\\/]+)")));e.endsWith("*")?(a.push("*"),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?
// When matching to the end, ignore trailing slashes
r+="\\/*$":""!==e&&"/"!==e&&(
// If our path is non-empty and contains anything beyond an initial slash,
// then we have _some_ form of path in our regex, so we should expect to
// match only if we find the end of this path segment.  Look for an optional
// non-captured trailing slash (to match a portion of the URL) or the end
// of the path (if we've matched to the end).  We used to do this with a
// word boundary but that gives false positives on routes like
// /user-preferences since `-` counts as a word boundary.
r+="(?:(?=\\/|$))");let o=new RegExp(r,t?void 0:"i");return[o,a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let o=r[0],i=o.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:a.reduce(((e,t,n)=>{
// We need to compute the pathnameBase here using the raw splat value
// instead of using params["*"] later because it will be decoded then
if("*"===t){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return c(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}
/**
   * @private
   */(l[n]||"",t),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function L(e){try{return decodeURI(e)}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function k(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;
// We want to leave trailing slash behavior in the user's control, so if they
// specify a basename with a trailing slash, we should support it
let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&"/"!==a?null:e.slice(n)||"/"}
/**
   * Returns a resolved path object relative to the given pathname.
   *
   * @see https://reactrouter.com/utils/resolve-path
   */function A(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}
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
   */function I(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}
/**
   * @private
   */function P(e,t,n,a){let r;void 0===a&&(a=!1),"string"==typeof e?r=p(e):(r=o({},e),s(!r.pathname||!r.pathname.includes("?"),A("?","pathname","search",r)),s(!r.pathname||!r.pathname.includes("#"),A("#","pathname","hash",r)),s(!r.search||!r.search.includes("#"),A("#","search","hash",r)));let i,l=""===e||""===r.pathname,c=l?"/":r.pathname;
// Routing is relative to the current pathname if explicitly requested.
// If a pathname is explicitly provided in `to`, it should be relative to the
// route context. This is explained in `Note on `<Link to>` values` in our
// migration guide from v5 as a means of disambiguation between `to` values
// that begin with `/` and those that do not. However, this is problematic for
// `to` values that do not provide a pathname. `to` can simply be a search or
// hash string, in which case we should assume that the navigation is relative
// to the current location's pathname and *not* the route pathname.
if(a||null==c)i=n;else{let e=t.length-1;if(c.startsWith("..")){let t=c.split("/");
// Each leading .. segment means "go up one route" instead of "go up one
// URL segment".  This is a key difference from how <a href> works and a
// major reason we call this a "to" value instead of a "href".
for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}
// If there are more ".." segments than parent routes, resolve relative to
// the root / URL.
i=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:a="",hash:r=""}="string"==typeof e?p(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?
// Keep the root "" segment so the pathname starts at /
n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:O(a),hash:B(r)}}(r,i),d=c&&"/"!==c&&c.endsWith("/"),h=(l||"."===c)&&n.endsWith("/");
// Ensure the pathname has a trailing slash if the original "to" had one
return u.pathname.endsWith("/")||!d&&!h||(u.pathname+="/"),u}
/**
   * @private
   */const T=e=>e.join("/").replace(/\/\/+/g,"/")
/**
   * @private
   */,U=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/")
/**
   * @private
   */,O=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:""
/**
   * @private
   */,B=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:""
/**
   * Check if the given error is an ErrorResponse generated from a 4xx/5xx
   * Response thrown from an action/loader
   */;const _=["post","put","patch","delete"];new Set(_);const M=["get",..._];
/**
   * React Router v6.17.0
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
new Set(M);const j=r.createContext(null);j.displayName="DataRouter";const W=r.createContext(null);W.displayName="DataRouterState";r.createContext(null).displayName="Await";
/**
   * A Navigator is a "location changer"; it's how you get to different locations.
   *
   * Every history instance conforms to the Navigator interface, but the
   * distinction is useful primarily when it comes to the low-level `<Router>` API
   * where both the location and a navigator must be provided separately in order
   * to avoid "tearing" that may occur in a suspense-enabled app if the action
   * and/or location were to be read directly from the history instance.
   */
const V=r.createContext(null);V.displayName="Navigation";const H=r.createContext(null);H.displayName="Location";const $=r.createContext({outlet:null,matches:[],isDataRoute:!1});$.displayName="Route";const z=r.createContext(null);
/**
   * Returns true if this component is a descendant of a `<Router>`.
   *
   * @see https://reactrouter.com/hooks/use-in-router-context
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
   * @see https://reactrouter.com/hooks/use-location
   */function q(){return K()||s(!1,// TODO: This error is probably because they somehow have 2 versions of the
// router loaded. We can help them understand how to avoid that.
"useLocation() may be used only in the context of a <Router> component."),r.useContext(H).location}
/**
   * The interface for the navigate() function returned from useNavigate().
   */z.displayName="RouteError";const G="You should call navigate() in a React.useEffect(), not when your component is first rendered.";
// Mute warnings for calls to useNavigate in SSR environments
function Z(e){r.useContext(V).static||
// We should be able to get rid of this once react 18.3 is released
// See: https://github.com/facebook/react/pull/26395
// eslint-disable-next-line react-hooks/rules-of-hooks
r.useLayoutEffect(e)}
/**
   * Returns an imperative method for changing the location. Used by `<Link>`s, but
   * may also be used by other elements to change the location.
   *
   * @see https://reactrouter.com/hooks/use-navigate
   */function J(){let{isDataRoute:e}=r.useContext($);
// Conditional usage is OK here because the usage of a data router is static
// eslint-disable-next-line react-hooks/rules-of-hooks
return e?
/**
   * Stable version of useNavigate that is used when we are in the context of
   * a RouterProvider.
   */
function(){let{router:e}=function(e){let t=r.useContext(j);return t||s(!1,oe(e)),t}(ae.UseNavigateStable),t=ie(re.UseNavigateStable),n=r.useRef(!1);return Z((()=>{n.current=!0})),r.useCallback((function(a,r){void 0===r&&(r={}),c(n.current,G),
// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our router subscriber yet
n.current&&("number"==typeof a?e.navigate(a):e.navigate(a,F({fromRouteId:t},r)))}),[e,t])}():function(){K()||s(!1,// TODO: This error is probably because they somehow have 2 versions of the
// router loaded. We can help them understand how to avoid that.
"useNavigate() may be used only in the context of a <Router> component.");let e=r.useContext(j),{basename:t,navigator:n}=r.useContext(V),{matches:a}=r.useContext($),{pathname:o}=q(),i=JSON.stringify(I(a).map((e=>e.pathnameBase))),l=r.useRef(!1);return Z((()=>{l.current=!0})),r.useCallback((function(a,r){
// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our history listener yet
if(void 0===r&&(r={}),c(l.current,G),!l.current)return;if("number"==typeof a)return void n.go(a);let s=P(a,JSON.parse(i),o,"path"===r.relative);
// If we're operating within a basename, prepend it to the pathname prior
// to handing off to history (but only if we're not in a data router,
// otherwise it'll prepend the basename inside of the router).
// If this is a root navigation, then we navigate to the raw basename
// which allows the basename to have full control over the presence of a
// trailing slash on root links
null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:T([t,s.pathname])),(r.replace?n.replace:n.push)(s,r.state,r)}),[t,n,i,o,e])}
/**
   * Resolves the pathname of the given `to` value against the current location.
   *
   * @see https://reactrouter.com/hooks/use-resolved-path
   */()}function X(e,t){let{relative:n}=void 0===t?{}:t,{matches:a}=r.useContext($),{pathname:o}=q(),i=JSON.stringify(I(a).map((e=>e.pathnameBase)));return r.useMemo((()=>P(e,JSON.parse(i),o,"path"===n)),[e,i,o,n])}
/**
   * Returns the element of the route that matched the current location, prepared
   * with the correct context to render the remainder of the route tree. Route
   * elements in the tree must render an `<Outlet>` to render their child route's
   * element.
   *
   * @see https://reactrouter.com/hooks/use-routes
   */function Y(e,t){
// Internal implementation with accept optional param for RouterProvider usage
return function(e,t,n){K()||s(!1,// TODO: This error is probably because they somehow have 2 versions of the
// router loaded. We can help them understand how to avoid that.
"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=r.useContext(V),{matches:i}=r.useContext($),l=i[i.length-1],u=l?l.params:{},d=l?l.pathname:"/",h=l?l.pathnameBase:"/",m=l&&l.route;{
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
let e=m&&m.path||"";v=d,g=!m||e.endsWith("*"),b='You rendered descendant <Routes> (or called `useRoutes()`) at "'+d+'" (under <Route path="'+e+'">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="'+e+'"> to <Route path="'+("/"===e?"*":e+"/*")+'">.',g||le[v]||(le[v]=!0,c(!1,b))}var v,g,b;
/**
   * Declares an element that should be rendered at a certain URL path.
   *
   * @see https://reactrouter.com/components/route
   */let w,y=q();if(t){var E;let e="string"==typeof t?p(t):t;"/"===h||(null==(E=e.pathname)?void 0:E.startsWith(h))||s(!1,'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'+h+'" but pathname "'+e.pathname+'" was given in the `location` prop.'),w=e}else w=y;let R=w.pathname||"/",C="/"===h?R:R.slice(h.length)||"/",N=f(e,{pathname:C});c(m||null!=N,'No routes matched location "'+w.pathname+w.search+w.hash+'" '),c(null==N||void 0!==N[N.length-1].route.element||void 0!==N[N.length-1].route.Component,'Matched leaf route at location "'+w.pathname+w.search+w.hash+'" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');let x=function(e,t,n){var a,o;void 0===t&&(t=[]);void 0===n&&(n=null);if(null==e){if(null==(o=n)||!o.errors)return null;
// Don't bail if we have data router errors so we can render them in the
// boundary.  Use the pre-matched (or shimmed) matches
e=n.matches}let i=e,l=null==(a=n)?void 0:a.errors;
// If we have data errors, trim matches to the highest error boundary
if(null!=l){let e=i.findIndex((e=>e.route.id&&(null==l?void 0:l[e.route.id])));e>=0||s(!1,"Could not find a matching route for errors on route IDs: "+Object.keys(l).join(",")),i=i.slice(0,Math.min(i.length,e+1))}return i.reduceRight(((e,a,o)=>{let s=a.route.id?null==l?void 0:l[a.route.id]:null,c=null;
// Only data routers handle errors
n&&(c=a.route.errorElement||ee);let u=t.concat(i.slice(0,o+1)),d=()=>{let t;return t=s?c:a.route.Component?r.createElement(a.route.Component,null):a.route.element?a.route.element:e,r.createElement(ne,{match:a,routeContext:{outlet:e,matches:u,isDataRoute:null!=n},children:t})};
// Only wrap in an error boundary within data router usages when we have an
// ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
// an ancestor ErrorBoundary/errorElement
return n&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?r.createElement(te,{location:n.location,revalidation:n.revalidation,component:c,error:s,children:d(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):d()}),null)}(N&&N.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:T([h,
// Re-encode pathnames that were decoded inside matchRoutes
o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?h:T([h,
// Re-encode pathnames that were decoded inside matchRoutes
o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),i,n);
// When a user passes in a `locationArg`, the associated routes need to
// be wrapped in a new `LocationContext.Provider` in order for `useLocation`
// to use the scoped location instead of the global location.
if(t&&x)
return r.createElement(H.Provider,{value:{location:F({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:a.Pop}},x);return x}(e,t)}function Q(){let e=
/**
   * Returns the nearest ancestor Route error, which could be a loader/action
   * error or a render error.  This is intended to be called from your
   * ErrorBoundary/errorElement to display a proper error message.
   */
function(){var e;let t=r.useContext(z),n=function(e){let t=r.useContext(W);return t||s(!1,oe(e)),t}(re.UseRouteError),a=ie(re.UseRouteError);
// If this was a render error, we put it in a RouteError context inside
// of RenderErrorBoundary
if(t)return t;
// Otherwise look for errors from our data router state
return null==(e=n.errors)?void 0:e[a]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},i={padding:"2px 4px",backgroundColor:a},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=r.createElement(r.Fragment,null,r.createElement("p",null,"💿 Hey developer 👋"),r.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",r.createElement("code",{style:i},"ErrorBoundary")," or"," ",r.createElement("code",{style:i},"errorElement")," prop on your route.")),r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,l)}const ee=r.createElement(Q,null);class te extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){
// When we get into an error state, the user will likely click "back" to the
// previous page that didn't have an error. Because this wraps the entire
// application, that will have no effect--the error page continues to display.
// This gives us a mechanism to recover from the error when the location changes.
// Whether we're in an error state or not, we update the location in state
// so that when we are in an error state, it gets reset when a new location
// comes in and the user recovers from the error.
return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation};
// If we're not changing locations, preserve the location but still surface
// any new errors that may come through. We retain the existing error, we do
// this because the error provided from the app state may be cleared without
// the location changing.
}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?r.createElement($.Provider,{value:this.props.routeContext},r.createElement(z.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ne(e){let{routeContext:t,match:n,children:a}=e,o=r.useContext(j);
// Track how deep we got in our render pass to emulate SSR componentDidCatch
// in a DataStaticRouter
return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement($.Provider,{value:t},a)}var ae=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ae||{}),re=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(re||{});function oe(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}
// Internal version with hookName-aware debugging
function ie(e){let t=function(e){let t=r.useContext($);return t||s(!1,oe(e)),t}(e),n=t.matches[t.matches.length-1];return n.route.id||s(!1,e+' can only be used on routes that contain a unique "id"'),n.route.id}
/**
   * Returns the ID for the nearest contextual route
   */const le={};function se(e){s(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}
/**
   * Provides location context for the rest of the app.
   *
   * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
   * router that is more specific to your environment such as a `<BrowserRouter>`
   * in web browsers or a `<StaticRouter>` for server rendering.
   *
   * @see https://reactrouter.com/router-components/router
   */function ce(e){let{basename:t="/",children:n=null,location:o,navigationType:i=a.Pop,navigator:l,static:u=!1}=e;K()&&s(!1,"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
// Preserve trailing slashes on basename, so we can let the user control
// the enforcement of trailing slashes throughout the app
let d=t.replace(/^\/*/,"/"),h=r.useMemo((()=>({basename:d,navigator:l,static:u})),[d,l,u]);"string"==typeof o&&(o=p(o));let{pathname:m="/",search:f="",hash:v="",state:g=null,key:b="default"}=o,w=r.useMemo((()=>{let e=k(m,d);return null==e?null:{location:{pathname:e,search:f,hash:v,state:g,key:b},navigationType:i}}),[d,m,f,v,g,b,i]);return c(null!=w,'<Router basename="'+d+'"> is not able to match the URL "'+m+f+v+"\" because it does not start with the basename, so the <Router> won't render anything."),null==w?null:r.createElement(V.Provider,{value:h},r.createElement(H.Provider,{children:n,value:w}))}
/**
   * A container for a nested tree of `<Route>` elements that renders the branch
   * that best matches the current location.
   *
   * @see https://reactrouter.com/components/routes
   */function ue(e){let{children:t,location:n}=e;return Y(de(t),n)}
///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
   * Creates a route config from a React "children" object, which is usually
   * either a `<Route>` element or an array of them. Used internally by
   * `<Routes>` to create a route config from its children.
   *
   * @see https://reactrouter.com/utils/create-routes-from-children
   */
function de(e,t){void 0===t&&(t=[]);let n=[];return r.Children.forEach(e,((e,a)=>{if(!r.isValidElement(e))
// Ignore non-elements. This allows people to more easily inline
// conditionals in their route config.
return;let o=[...t,a];if(e.type===r.Fragment)
// Transparently support React.Fragment and its children.
return void n.push.apply(n,de(e.props.children,o));e.type!==se&&s(!1,"["+("string"==typeof e.type?e.type:e.type.name)+"] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"),e.props.index&&e.props.children&&s(!1,"An index route cannot have child routes.");let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=de(e.props.children,o)),n.push(i)})),n}
/**
   * React Router DOM v6.17.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},he.apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}new Promise((()=>{}));const me="get",fe="application/x-www-form-urlencoded";function ve(e){return null!=e&&"string"==typeof e.tagName}
// One-time check for submitter support
let ge=null;const be=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function we(e){return null==e||be.has(e)?e:(c(!1,'"'+e+'" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "'+fe+'"'),null)}function ye(e,t){let n,a,r,o,i;if(ve(l=e)&&"form"===l.tagName.toLowerCase()){
// When grabbing the action from the element, it will have had the basename
// prefixed to ensure non-JS scenarios work, so strip it since we'll
// re-prefix in the router
let i=e.getAttribute("action");a=i?k(i,t):null,n=e.getAttribute("method")||me,r=we(e.getAttribute("enctype"))||fe,o=new FormData(e)}else if(function(e){return ve(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return ve(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
// <button>/<input type="submit"> may override attributes of <form>
// When grabbing the action from the element, it will have had the basename
// prefixed to ensure non-JS scenarios work, so strip it since we'll
// re-prefix in the router
let l=e.getAttribute("formaction")||i.getAttribute("action");
// If this browser doesn't support the `FormData(el, submitter)` format,
// then tack on the submitter value at the end.  This is a lightweight
// solution that is not 100% spec compliant.  For complete support in older
// browsers, consider using the `formdata-submitter-polyfill` package
if(a=l?k(l,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||me,r=we(e.getAttribute("formenctype"))||we(i.getAttribute("enctype"))||fe,
// Build a FormData object populated from a form and submitter
o=new FormData(i,e),!function(){if(null===ge)try{new FormData(document.createElement("form"),
// @ts-expect-error if FormData supports the submitter parameter, this will throw
0),ge=!1}catch(e){ge=!0}return ge}()){let{name:t,type:n,value:a}=e;if("image"===n){let e=t?t+".":"";o.append(e+"x","0"),o.append(e+"y","0")}else t&&o.append(t,a)}}else{if(ve(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
// Send body for <Form encType="text/plain" so we encode it into text
n=me,a=null,r=fe,i=e}var l;return o&&"text/plain"===r&&(i=o,o=void 0),{action:a,method:n.toLowerCase(),encType:r,formData:o,body:i}}const Ee=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Re=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Ce=["reloadDocument","replace","state","method","action","onSubmit","submit","relative","preventScrollReset","unstable_viewTransition"],Ne=r.createContext({isTransitioning:!1});Ne.displayName="ViewTransition";
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
const xe=r.startTransition;
/**
   * A `<Router>` for use in web browsers. Stores the location in the hash
   * portion of the URL so it is not sent to the server.
   */
function Se(e){let{basename:t,children:n,future:a,window:o}=e,i=r.useRef();null==i.current&&(i.current=l({window:o,v5Compat:!0}));let s=i.current,[c,u]=r.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},h=r.useCallback((e=>{d&&xe?xe((()=>u(e))):u(e)}),[u,d]);return r.useLayoutEffect((()=>s.listen(h)),[s,h]),r.createElement(ce,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s})}const De="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Le=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ke=r.forwardRef((function(e,t){let n,{onClick:a,relative:o,reloadDocument:i,replace:l,state:u,target:d,to:p,preventScrollReset:m,unstable_viewTransition:f}=e,v=pe(e,Ee),{basename:g}=r.useContext(V),b=!1;if("string"==typeof p&&Le.test(p)&&(
// Render the absolute href server- and client-side
n=p,De))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=k(t.pathname,g);t.origin===e.origin&&null!=n?
// Strip the protocol/origin/basename for same-origin absolute URLs
p=n+t.search+t.hash:b=!0}catch(e){
// We can't do external URL detection without a valid URL
c(!1,'<Link to="'+p+'"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.')}
// Rendered into <a href> for relative URLs
let w=
/**
   * Returns the full href for the given "to" value. This is useful for building
   * custom links that are also accessible and preserve right-click behavior.
   *
   * @see https://reactrouter.com/hooks/use-href
   */
function(e,t){let{relative:n}=void 0===t?{}:t;K()||s(!1,// TODO: This error is probably because they somehow have 2 versions of the
// router loaded. We can help them understand how to avoid that.
"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:o}=r.useContext(V),{hash:i,pathname:l,search:c}=X(e,{relative:n}),u=l;
// If we're operating within a basename, prepend it to the pathname prior
// to creating the href.  If this is a root navigation, then just use the raw
// basename which allows the basename to have full control over the presence
// of a trailing slash on root links
return"/"!==a&&(u="/"===l?a:T([a,l])),o.createHref({pathname:u,search:c,hash:i})}(p,{relative:o}),y=
/**
   * Handles the click behavior for router `<Link>` components. This is useful if
   * you need to create custom `<Link>` components with the same click behavior we
   * use in our exported `<Link>`.
   */
function(e,t){let{target:n,replace:a,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s}=void 0===t?{}:t,c=J(),u=q(),d=X(e,{relative:l});return r.useCallback((t=>{if(function(e,t){return!(0!==e.button||
// Ignore everything but left clicks
t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();
// If the URL hasn't changed, a regular <a> will do a replace instead of
// a push, so do the same here unless the replace prop is explicitly set
let n=void 0!==a?a:h(u)===h(d);c(e,{replace:n,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s})}}),[u,c,d,a,o,n,e,i,l,s])}(p,{replace:l,state:u,target:d,preventScrollReset:m,relative:o,unstable_viewTransition:f});

// eslint-disable-next-line jsx-a11y/anchor-has-content
return r.createElement("a",he({},v,{href:n||w,onClick:b||i?a:function(e){a&&a(e),e.defaultPrevented||y(e)},ref:t,target:d}))}));ke.displayName="Link";r.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:a=!1,className:o="",end:i=!1,style:l,to:c,unstable_viewTransition:u,children:d}=e,h=pe(e,Re),p=X(c,{relative:h.relative}),m=q(),f=r.useContext(W),{navigator:v}=r.useContext(V),g=null!=f&&
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
function(e,t){void 0===t&&(t={});let n=r.useContext(Ne);null==n&&s(!1,"`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Te(Ie.useViewTransitionState),o=X(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=k(n.currentLocation.pathname,a)||n.currentLocation.pathname,l=k(n.nextLocation.pathname,a)||n.nextLocation.pathname;
// Transition is active if we're going to or coming from the indicated
// destination.  This ensures that other PUSH navigations that reverse
// an indicated transition apply.  I.e., on the list view you have:
//   <NavLink to="/details/1" unstable_viewTransition>
// If you click the breadcrumb back to the list view:
//   <NavLink to="/list" unstable_viewTransition>
// We should apply the transition because it's indicated as active going
// from /list -> /details/1 and therefore should be active on the reverse
// (even though this isn't strictly a POP reverse)
return null!=D(o.pathname,l)||null!=D(o.pathname,i)}(p)&&!0===u,b=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,w=m.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;a||(w=w.toLowerCase(),y=y?y.toLowerCase():null,b=b.toLowerCase());let E,R=w===b||!i&&w.startsWith(b)&&"/"===w.charAt(b.length),C=null!=y&&(y===b||!i&&y.startsWith(b)&&"/"===y.charAt(b.length)),N={isActive:R,isPending:C,isTransitioning:g},x=R?n:void 0;E="function"==typeof o?o(N):[o,R?"active":null,C?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let S="function"==typeof l?l(N):l;
return r.createElement(ke,he({},h,{"aria-current":x,className:E,ref:t,style:S,to:c,unstable_viewTransition:u}),"function"==typeof d?d(N):d)})).displayName="NavLink";r.forwardRef(((e,t)=>{let n=
/**
   * Returns a function that may be used to programmatically submit a form (or
   * some arbitrary data) to the server.
   */
function(){let{router:e}=Te(Ie.UseSubmit),{basename:t}=r.useContext(V),n=ie(re.UseRouteId);return r.useCallback((function(a,r){void 0===r&&(r={}),function(){if("undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}();let{action:o,method:i,encType:l,formData:s,body:c}=ye(a,t);e.navigate(r.action||o,{preventScrollReset:r.preventScrollReset,formData:s,body:c,formMethod:r.method||i,formEncType:r.encType||l,replace:r.replace,state:r.state,fromRouteId:n,unstable_viewTransition:r.unstable_viewTransition})}),[e,t,n])}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
();
return r.createElement(Ae,he({},e,{submit:n,ref:t}))})).displayName="Form";const Ae=r.forwardRef(((e,t)=>{let{reloadDocument:n,replace:a,state:o,method:i=me,action:l,onSubmit:c,submit:u,relative:d,preventScrollReset:p,unstable_viewTransition:m}=e,f=pe(e,Ce),v="get"===i.toLowerCase()?"get":"post",g=function(e,t){let{relative:n}=void 0===t?{}:t,{basename:a}=r.useContext(V),o=r.useContext($);o||s(!1,"useFormAction must be used inside a RouteContext");let[i]=o.matches.slice(-1),l=he({},X(e||".",{relative:n})),c=q();
// Shallow clone path so we can modify it below, otherwise we modify the
// object referenced by useMemo inside useResolvedPath
if(null==e&&(
// Safe to write to this directly here since if action was undefined, we
// would have called useResolvedPath(".") which will never include a search
l.search=c.search,i.route.index)){let e=new URLSearchParams(l.search);e.delete("index"),l.search=e.toString()?"?"+e.toString():""}e&&"."!==e||!i.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");
// If we're operating within a basename, prepend it to the pathname prior
// to creating the form action.  If this is a root navigation, then just use
// the raw basename which allows the basename to have full control over the
// presence of a trailing slash on root actions
"/"!==a&&(l.pathname="/"===l.pathname?a:T([a,l.pathname]));return h(l)}(l,{relative:d});
return r.createElement("form",he({ref:t,method:v,action:g,onSubmit:n?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=(null==t?void 0:t.getAttribute("formmethod"))||i;u(t||e.currentTarget,{method:n,replace:a,state:o,relative:d,preventScrollReset:p,unstable_viewTransition:m})}},f))}));
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var Ie,Pe;function Te(e){let t=r.useContext(j);return t||s(!1,function(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}(e)),t}function Ue(){const[t,n]=e.useState(!1),[a,r]=e.useState(!1),[o,i]=e.useState(!1);return e.useEffect((()=>{t||n(!0)}),[t]),e.createElement("nav",{className:"navbar navbar-default navbar-fixed-top navbar-inverse navbar-trans navbar-trans-dark trans-helper navbar-fw",role:"navigation"},e.createElement("div",{className:"container"},e.createElement("div",{style:{width:"75%"},className:"navbar-header page-scroller"},e.createElement("button",{type:"button",onClick:e=>{console.info("hi2"),e.preventDefault(),r(!a)},className:"navbar-toggle collapsed","data-toggle":a?"collapse in":"collapse","data-target":"#navbar","aria-expanded":a?"true":"false","aria-controls":"navbar"},e.createElement("span",{className:"sr-only"},"Toggle navigation"),e.createElement("span",{className:"icon-bar"}),e.createElement("span",{className:"icon-bar"}),e.createElement("span",{className:"icon-bar"})),e.createElement("a",{className:"navbar-brand",href:"index.html"},e.createElement("img",{className:"navbar-logo-dark",style:{content:"unset",height:"50px",backgroundImage:"none"},src:"https://synthethics.awscyber.ai/static/media/RADAR.c104f9526930a39724dc.png",alt:"Definity - Logo"}))),e.createElement("div",{id:"navbar","aria-expanded":a?"true":"false",className:a?"navbar-collapse   collapse in":" navbar-collapse   collapse"},e.createElement("ul",{className:"nav navbar-nav"},e.createElement("li",null,e.createElement(ke,{"data-testid":"home-link",to:"/test"},"Home",e.createElement("span",{className:"sr-only"}))),e.createElement("li",{onClick:()=>{i(!o)},className:"dropdown"+(o?" open":"")},e.createElement(ke,{className:"dropdown-toggle","data-testid":"test-link",to:"#"},"Test",e.createElement("span",{className:"caret"})),e.createElement("ul",{className:"dropdown-menu"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-lg-6 mb-sm-30"},e.createElement("li",{className:"dropdown-header"},"Test Routes"),e.createElement("li",{className:"divider"}),e.createElement("li",null,e.createElement(ke,{to:"/home"},"Basic PDF Render")),e.createElement("li",null,e.createElement(ke,{to:"/light"},"Lightbox PDF Render")),e.createElement("li",null,e.createElement(ke,{to:"/cdn"},"CDN Loaded PDF Render"))))))))))}function Oe(){return e.createElement("footer",{className:"footer-widgets"},e.createElement("div",{className:"copyright"},e.createElement("div",{className:"container"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-sm-6"},e.createElement("small",null,"© 2024 by Ziping liu. Proudly Served with ",e.createElement("a",{className:"no-style-link",href:"https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/blob/slave/.github/workflows/canaryapp.yml"},"Github Pages"))),e.createElement("div",{className:"col-sm-6"},e.createElement("small",null,e.createElement("a",{href:"#page-top",className:"pull-right to-the-top"},"To the top",e.createElement("i",{className:"fa fa-angle-up"}))))))))}function Be({divId:e,viewerConfig:t,url:n,clientID:a,_fileMeta:r,_dcView:o}){const i={clientId:a,divId:e};return(o||new window.AdobeDC.View(i)).previewFile({content:{location:{url:n}},metaData:r||Fe.demoMetaData},t)}
/**
   * @description - An atypical Nested React Component of ReactViewAdobe,
   * specifically for managing API calls and configurations of the Adobe Embed API SDK
   * This component, in turn, employs the use of React Hooks
   * to render what the Adobe Embed API SDK perceives as static
   * and vanilla JavaScript code, transposed into the Document Object Model (DOM).
   */Ae.displayName="FormImpl",function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"}(Ie||(Ie={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Pe||(Pe={}));const _e=t=>{const n=e.useRef(document.getElementById(t.id||Fe.staticDivId));return e.createElement("div",{ref:n,id:t.id||Fe.staticDivId,className:t.className||"adobe-viewer-of-amazon-corporate-retaliations",style:t.style,title:t.title||"entity-existent-on-frameworks-of-state-regulations-as-defined-by-the-state-and-may-try-to-destroy-your-life-and-control-the-fbi-of-the-state-such-as-amazon-legal-idiots"},t.children)};
/**
   * @description - ReactViewAdobe component which is a wrapper around Adobe PDF Viewer SDK that allows for
   * rendering PDFs via Adobe's PDF Engine. Ensures that Adobe Embed API Services are
   * compartmentalized and fully encapsulated and configured within a rendered page. Not sure why Adobe
   * Embed API does not inherently do this. See ReactViewAdobeProps for more details.
   */function Me(n){const[a,r]=e.useState(!1),[o,i]=e.useState(null),[l,s]=e.useState(!1),[c,u]=e.useState(!1),d=(0,e[n?.useReactHookForAdobeAPIConfigs||"useMemo"])((()=>{if(!0===a){const e=window.AdobeDC?.View;return e}}),[a]);(0,e[n?.useReactHookWhenLoadingAdobeAPI||"useEffect"])((()=>{const a=t=>{const[a,r]=e.useState(!1),[l,s]=e.useState(!1);return e.useEffect((()=>{if(null===o&&i(e.createRef()),!1===l&&s(!0),!1===a&&!0===l){const e=document.createElement("script");e.setAttribute("src",n.previewConfig?.viewSdkViewerScript||Fe.staticDefaultConfig.viewSdkViewerScript),e.setAttribute("data-adobe-pdf-id",n.id||Fe.staticDivId),e.setAttribute("data-testid","react-adobe-embed-handholding-adobe-api-loading-idiocy-initial"),e.setAttribute("id","react-adobe-embed-handholding-adobe-api-loading-idiocy-react-managed-script-loading-observer"),e.setAttribute("type","text/javascript"),e.setAttribute("async","true"),document.body.appendChild(e),r(!0),t?.onLoad&&t.onLoad()}}),[l,a,n.previewConfig?.viewSdkViewerScript,n.id,o,t]),e.createElement("script",{ref:o,src:n.previewConfig?.viewSdkViewerScript||Fe.staticDefaultConfig.viewSdkViewerScript,className:"react-adobe-embed-handholding-adobe-api-loading-idiocy-react-managed-script-loading-observer","data-adobe-pdf-id":n.id||Fe.staticDivId})};if(0==c){const r=document.querySelector(`script[data-adobe-pdf-id="${n.id||Fe.staticDivId}"]`);if(console.info("scriptExistsALready",r,o),r)"LIGHT_BOX"!==n.previewConfig?.embedMode&&s(!0),r.setAttribute("data-testid","react-adobe-embed-handholding-adobe-api-loading-idiocy-reused"),o?.current?.setAttribute("data-testid","react-adobe-embed-handholding-adobe-api-loading-idiocy-reused"),n.debug&&console.info("[1mAdobe SDK Check[0m","Adobe SDK Already Loaded so Setting Flag for Rerender Needed");else{n.debug&&console.info("[1mAdobe SDK Check[0m","Initial Adobe SDK Load");const r=document.querySelector(`#${n.id||Fe.staticDivId} #adobe-pdf-viewer-sdk-script-loader`);console.info("scriptElemWrap",r),r&&t.createRoot(r).render(e.createElement(a,{onLoad:()=>{u(!0)}}))}}}),[n.id,c,a,n.previewConfig?.viewSdkViewerScript,o]);(0,e[n?.useReactHookWhenCallingAdobeAPI||"useEffect"])((()=>{!1===a&&!0===c&&document.addEventListener("adobe_dc_view_sdk.ready",(()=>{r(!0)}));!0===c&&!0===a&&(e=>{e.debug&&console.info("Adobe PDF Viewer SDK Ready Event",d,window.adobe_dc_view_sdk);const t=e.id||Fe.staticDivId;document.getElementById(t)&&"LIGHT_BOX"!==e.previewConfig?.embedMode?(e.debug&&console.info("Adobe PDF Viewer SDK Ready Rendering"),Be({divId:t,viewerConfig:e.previewConfig||Fe.staticDefaultConfig,url:e.url||Fe.demoUrl,clientID:e.clientId,_fileMeta:e.fileMeta})):"LIGHT_BOX"===e.previewConfig?.embedMode&&e?.triggerAdobeDCViewRender&&Be({divId:e.id||Fe.staticDivId,viewerConfig:e.previewConfig||Fe.staticDefaultConfig,url:e.url||Fe.demoUrl,clientID:e.clientId})})(n)}),[a,c,n,d]);return(0,e[n?.useReactHookForComponentDidUpdate||"useEffect"])((()=>{if(!0===l){const e=n.id||Fe.staticDivId;document.getElementById(e)&&Be({divId:e,viewerConfig:n.previewConfig||Fe.staticDefaultConfig,url:n.url||Fe.demoUrl,clientID:n.clientId,_fileMeta:n.fileMeta}),s(!1)}}),[l,n]),e.createElement(_e,{...n},e.createElement("div",{id:"adobe-pdf-viewer-sdk-script-loader"}))}const Fe={demoUrl:"https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf",staticDefaultConfig:{showAnnotationTools:!1,showLeftHandPanel:!1,showPageControls:!1,viewSdkViewerScript:"https://acrobatservices.adobe.com/view-sdk/viewer.js",showDownloadPDF:!1,showPrintPDF:!1},staticDivId:"pdf-div",demoMetaData:{fileName:"Odd Distateful Adobe Example Pdf.pdf",id:"6d07d124 - ac85–43b3 - a867–36930f502ac6"}};function je(){switch(window.location.hostname){case"localhost":default:return"324caa2a91b84f688935436cd2d25217";case"ziping.dev":return"2aeb65914ea244cd85c16b60ca3b688d";case"ziping.life":return"2daf6038d0f1447fb9dd17988e93b5b8";case"ziping.org":return"312487a25a5b4c0d845f6d93e8103c32";case"awsuni.com":return"50d3f2b88101430f8da3006527dcdf78";case"twitterliu.com":return"ac52e99ebc8242e9bf85ecb55444f726";case"one.ziping.org":return"2e5605e61e5b4306829b619d6fad2dc4";case"zipingl.github.io":return"9c16d364507948289a9f65f9ab9da8bf";case"ziping-liu-corporation.github.io":return"875691e089ad4bf6bc4c5cea79403542"}}function We(){const t=window.location.href.split("?")[1],n=new URLSearchParams(t),a=n.get("pdf")||n.get("url")||"https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf",r=n.get("width"),o=n.get("height"),i=n.get("fileName")||a.split("/").pop()||"23andMe_Ancestry_Book.pdf";return e.createElement("section",{id:"about",className:"container section"},e.createElement("div",{className:"row ws-m"},e.createElement("header",{className:"sec-heading"},e.createElement("h2",null,"Basic Test View"),e.createElement("span",{className:"subheading"},"Using the react-adobe-embed component with no additional configurations, except for the pdf url, in order to test the rendering of a PDF at the most basic level of usage.")),e.createElement(Me,{previewConfig:{},className:"col container-fluid post-content",fileMeta:{fileName:i},style:{width:r||"100%",height:o||"calc(100vh - 200px)",maxHeight:"100%",border:"1px solid transparent",alignContent:"center",justifyContent:"center",minHeight:"500px"},url:a||"https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf",debug:!0,id:"adobe-dc-view-0",clientId:je()})))}function Ve(){return e.createElement("section",{className:"container section"},e.createElement("div",{className:"row ws-m"},e.createElement("div",{className:"col s12",style:{height:"calc(100vh - 420px)"}},e.createElement(Me,{url:"https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf",clientId:je(),previewConfig:{embedMode:"LIGHT_BOX"},debug:!0}),e.createElement("button",{className:"btn btn-primary",onClick:()=>{Be({url:"https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf",viewerConfig:{embedMode:"LIGHT_BOX"},clientID:je(),divId:"pdf-div",_fileMeta:{fileName:"23andMe_Ancestry_Book.pdf"}})}},"Toggle Light Box View"))))}function He(){const[t,n]=e.useState(!1),[a,r]=e.useState(!1);e.useEffect((()=>{if(!t){
// Create new script element to load cdn
const e=document.createElement("script");e.src="https://ziping-liu-corporation.github.io/react-adobe-embed/dist/react-adobe-embed.cdn.js",e.async=!0,e.onload=()=>{r(!0)},
// Add script to document body
document.body.appendChild(e),n(!0)}}),[t,a]),window.React=e;// expose React as global since the react-adobe embed cdn expects React to be loaded via cdn as well
const o=window.ReactViewAdobe;return e.createElement("section",{className:"container section"},e.createElement("div",{className:"row ws-m"},e.createElement("div",{className:"col s12"},e.createElement("header",{className:"sec-heading"},e.createElement("h2",null,"CDN Loaded Basic PDF Render"),e.createElement("span",{className:"subheading"},"Content Delivery Networking (CDN) allows the delivery of the react-adobe-embed component to a browser environment to occur as ",e.createElement("strong",null,"a separate process")," from the main body of the web application's code.")),e.createElement("p",null,"This approach involves loading the component as an independent script within the initial HTML page load, effectively integrating it into the HTML DOM environment. This method not only reduces the space required by the web application, thereby enhancing its load speed, but also leverages the benefits of distributed loading. By loading distinct components of the web application through separate network requests, we can maximize efficiency. In this instance, the react-adobe-embed component is sourced from a CDN as a separate network request, distinct from the main web application. This effectively allows the web application to load in two concurrent parts, or at least simulates this effect, thanks to the inherent multi-threading capabilities of computer systems."),a&&t&&o&&e.createElement(o,{clientId:je(),url:"https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf",debug:!0,className:"col container-fluid post-content",style:{height:"calc(100vh - 420px)",width:"100%"},previewConfig:{},fileMeta:{fileName:"23andMe_Ancestry_Book.pdf"}}))))}const $e=document.getElementById("app");$e&&t.createRoot($e).render(e.createElement((function(){return e.createElement(Se,null,e.createElement(Ue,null),e.createElement(ue,null,e.createElement(se,{path:"/test",element:e.createElement("div",{className:"section container"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col s12"},e.createElement("h5",{"data-testid":"test-route",className:"header"},"Test Route View"),e.createElement("iframe",{src:"https://one.ziping.org/ZIPING-LIU-CORPORATION/react-adobe-embed/blob/slave/README.md/?domain=github.com",style:{width:"100%",height:"900px",border:"1px solid transparent",alignContent:"center",justifyContent:"center"}}))))}),e.createElement(se,{path:"/home",element:e.createElement(We,null)}),e.createElement(se,{path:"/light",element:e.createElement(Ve,null)}),e.createElement(se,{path:"/cdn",element:e.createElement(He,null)})),e.createElement(Oe,null))}),null))}));
