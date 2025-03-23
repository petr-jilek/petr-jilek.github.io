"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8173],{8173:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(306),o=r(5155),u=n._(r(2115)),a=r(180),i=r(1394),f=r(4116),l=r(4445),s=r(5353),c=r(2170),p=r(9544);function d(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}r(2363);let y=u.default.forwardRef(function(e,t){let r,n;let{href:a,as:y,children:g,prefetch:m=null,passHref:b,replace:E,shallow:P,scroll:v,onClick:_,onMouseEnter:O,onTouchStart:j,legacyBehavior:C=!1,...M}=e;r=g,C&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let k=u.default.useContext(i.AppRouterContext),w=!1!==m,S=null===m?l.PrefetchKind.AUTO:l.PrefetchKind.FULL,{href:x,as:N}=u.default.useMemo(()=>{let e=h(a);return{href:e,as:y?h(y):e}},[a,y]),A=u.default.useRef(x),I=u.default.useRef(N);C&&(n=u.default.Children.only(r));let T=C?n&&"object"==typeof n&&n.ref:t,[R,U,F]=(0,f.useIntersection)({rootMargin:"200px"}),L=u.default.useCallback(e=>{(I.current!==N||A.current!==x)&&(F(),I.current=N,A.current=x),R(e)},[N,x,F,R]),K=(0,s.useMergedRef)(L,T);u.default.useEffect(()=>{k&&U&&w&&d(k,x,{kind:S})},[N,x,U,w,k,S]);let z={ref:K,onClick(e){C||"function"!=typeof _||_(e),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),k&&!e.defaultPrevented&&function(e,t,r,n,o,a,i){let{nodeName:f}=e.currentTarget;"A"===f.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),u.default.startTransition(()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,k,x,N,E,P,v)},onMouseEnter(e){C||"function"!=typeof O||O(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),k&&w&&d(k,x,{kind:S})},onTouchStart:function(e){C||"function"!=typeof j||j(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),k&&w&&d(k,x,{kind:S})}};return(0,c.isAbsoluteUrl)(N)?z.href=N:C&&!b&&("a"!==n.type||"href"in n.props)||(z.href=(0,p.addBasePath)(N)),C?u.default.cloneElement(n,z):(0,o.jsx)("a",{...M,...z,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let n=r(2115),o=r(8571),u="function"==typeof IntersectionObserver,a=new Map,i=[];function f(e){let{rootRef:t,rootMargin:r,disabled:f}=e,l=f||!u,[s,c]=(0,n.useState)(!1),p=(0,n.useRef)(null),d=(0,n.useCallback)(e=>{p.current=e},[]);return(0,n.useEffect)(()=>{if(u){if(l||s)return;let e=p.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),a.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!s){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,r,t,s,p.current]),[d,s,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return u},formatWithValidation:function(){return i},urlObjectKeys:function(){return a}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,u=e.protocol||"",a=e.pathname||"",i=e.hash||"",f=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(l+=":"+e.port)),f&&"object"==typeof f&&(f=String(n.urlQueryToSearchParams(f)));let s=e.search||f&&"?"+f||"";return u&&!u.endsWith(":")&&(u+=":"),e.slashes||(!u||o.test(u))&&!1!==l?(l="//"+(l||""),a&&"/"!==a[0]&&(a="/"+a)):l||(l=""),i&&"#"!==i[0]&&(i="#"+i),s&&"?"!==s[0]&&(s="?"+s),""+u+l+(a=a.replace(/[?#]/g,encodeURIComponent))+(s=s.replace("#","%23"))+i}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return u(e)}},4156:(e,t)=>{function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return u},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return m},NormalizeError:function(){return y},PageNotFoundError:function(){return g},SP:function(){return p},ST:function(){return d},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return f},getLocationOrigin:function(){return a},getURL:function(){return i},isAbsoluteUrl:function(){return u},isResSent:function(){return l},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return s},stringifyError:function(){return E}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function i(){let{href:e}=window.location,t=a();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function l(e){return e.finished||e.headersSent}function s(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&l(r))return n;if(!n)throw Error('"'+f(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let p="undefined"!=typeof performance,d=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);