function go(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fu={exports:{}},ui={},du={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function S0(){if(Rp)return Ee;Rp=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.iterator;function v(C){return C===null||typeof C!="object"?null:(C=b&&C[b]||C["@@iterator"],typeof C=="function"?C:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,x={};function S(C,V,oe){this.props=C,this.context=V,this.refs=x,this.updater=oe||w}S.prototype.isReactComponent={},S.prototype.setState=function(C,V){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,V,"setState")},S.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function O(){}O.prototype=S.prototype;function M(C,V,oe){this.props=C,this.context=V,this.refs=x,this.updater=oe||w}var U=M.prototype=new O;U.constructor=M,k(U,S.prototype),U.isPureReactComponent=!0;var te=Array.isArray,B=Object.prototype.hasOwnProperty,ne={current:null},ie={key:!0,ref:!0,__self:!0,__source:!0};function K(C,V,oe){var ae,we={},ke=null,Re=null;if(V!=null)for(ae in V.ref!==void 0&&(Re=V.ref),V.key!==void 0&&(ke=""+V.key),V)B.call(V,ae)&&!ie.hasOwnProperty(ae)&&(we[ae]=V[ae]);var Te=arguments.length-2;if(Te===1)we.children=oe;else if(1<Te){for(var je=Array(Te),et=0;et<Te;et++)je[et]=arguments[et+2];we.children=je}if(C&&C.defaultProps)for(ae in Te=C.defaultProps,Te)we[ae]===void 0&&(we[ae]=Te[ae]);return{$$typeof:t,type:C,key:ke,ref:Re,props:we,_owner:ne.current}}function Q(C,V){return{$$typeof:t,type:C.type,key:V,ref:C.ref,props:C.props,_owner:C._owner}}function ve(C){return typeof C=="object"&&C!==null&&C.$$typeof===t}function _e(C){var V={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(oe){return V[oe]})}var Ae=/\/+/g;function Le(C,V){return typeof C=="object"&&C!==null&&C.key!=null?_e(""+C.key):V.toString(36)}function $(C,V,oe,ae,we){var ke=typeof C;(ke==="undefined"||ke==="boolean")&&(C=null);var Re=!1;if(C===null)Re=!0;else switch(ke){case"string":case"number":Re=!0;break;case"object":switch(C.$$typeof){case t:case r:Re=!0}}if(Re)return Re=C,we=we(Re),C=ae===""?"."+Le(Re,0):ae,te(we)?(oe="",C!=null&&(oe=C.replace(Ae,"$&/")+"/"),$(we,V,oe,"",function(et){return et})):we!=null&&(ve(we)&&(we=Q(we,oe+(!we.key||Re&&Re.key===we.key?"":(""+we.key).replace(Ae,"$&/")+"/")+C)),V.push(we)),1;if(Re=0,ae=ae===""?".":ae+":",te(C))for(var Te=0;Te<C.length;Te++){ke=C[Te];var je=ae+Le(ke,Te);Re+=$(ke,V,oe,je,we)}else if(je=v(C),typeof je=="function")for(C=je.call(C),Te=0;!(ke=C.next()).done;)ke=ke.value,je=ae+Le(ke,Te++),Re+=$(ke,V,oe,je,we);else if(ke==="object")throw V=String(C),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return Re}function z(C,V,oe){if(C==null)return C;var ae=[],we=0;return $(C,ae,"","",function(ke){return V.call(oe,ke,we++)}),ae}function N(C){if(C._status===-1){var V=C._result;V=V(),V.then(function(oe){(C._status===0||C._status===-1)&&(C._status=1,C._result=oe)},function(oe){(C._status===0||C._status===-1)&&(C._status=2,C._result=oe)}),C._status===-1&&(C._status=0,C._result=V)}if(C._status===1)return C._result.default;throw C._result}var j={current:null},R={transition:null},H={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:R,ReactCurrentOwner:ne};function q(){throw Error("act(...) is not supported in production builds of React.")}return Ee.Children={map:z,forEach:function(C,V,oe){z(C,function(){V.apply(this,arguments)},oe)},count:function(C){var V=0;return z(C,function(){V++}),V},toArray:function(C){return z(C,function(V){return V})||[]},only:function(C){if(!ve(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},Ee.Component=S,Ee.Fragment=o,Ee.Profiler=l,Ee.PureComponent=M,Ee.StrictMode=a,Ee.Suspense=p,Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,Ee.act=q,Ee.cloneElement=function(C,V,oe){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var ae=k({},C.props),we=C.key,ke=C.ref,Re=C._owner;if(V!=null){if(V.ref!==void 0&&(ke=V.ref,Re=ne.current),V.key!==void 0&&(we=""+V.key),C.type&&C.type.defaultProps)var Te=C.type.defaultProps;for(je in V)B.call(V,je)&&!ie.hasOwnProperty(je)&&(ae[je]=V[je]===void 0&&Te!==void 0?Te[je]:V[je])}var je=arguments.length-2;if(je===1)ae.children=oe;else if(1<je){Te=Array(je);for(var et=0;et<je;et++)Te[et]=arguments[et+2];ae.children=Te}return{$$typeof:t,type:C.type,key:we,ref:ke,props:ae,_owner:Re}},Ee.createContext=function(C){return C={$$typeof:c,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:u,_context:C},C.Consumer=C},Ee.createElement=K,Ee.createFactory=function(C){var V=K.bind(null,C);return V.type=C,V},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(C){return{$$typeof:d,render:C}},Ee.isValidElement=ve,Ee.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:N}},Ee.memo=function(C,V){return{$$typeof:m,type:C,compare:V===void 0?null:V}},Ee.startTransition=function(C){var V=R.transition;R.transition={};try{C()}finally{R.transition=V}},Ee.unstable_act=q,Ee.useCallback=function(C,V){return j.current.useCallback(C,V)},Ee.useContext=function(C){return j.current.useContext(C)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(C){return j.current.useDeferredValue(C)},Ee.useEffect=function(C,V){return j.current.useEffect(C,V)},Ee.useId=function(){return j.current.useId()},Ee.useImperativeHandle=function(C,V,oe){return j.current.useImperativeHandle(C,V,oe)},Ee.useInsertionEffect=function(C,V){return j.current.useInsertionEffect(C,V)},Ee.useLayoutEffect=function(C,V){return j.current.useLayoutEffect(C,V)},Ee.useMemo=function(C,V){return j.current.useMemo(C,V)},Ee.useReducer=function(C,V,oe){return j.current.useReducer(C,V,oe)},Ee.useRef=function(C){return j.current.useRef(C)},Ee.useState=function(C){return j.current.useState(C)},Ee.useSyncExternalStore=function(C,V,oe){return j.current.useSyncExternalStore(C,V,oe)},Ee.useTransition=function(){return j.current.useTransition()},Ee.version="18.3.1",Ee}var Dp;function ms(){return Dp||(Dp=1,du.exports=S0()),du.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function T0(){if(Mp)return ui;Mp=1;var t=ms(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var g,b={},v=null,w=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(w=p.ref);for(g in p)a.call(p,g)&&!u.hasOwnProperty(g)&&(b[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)b[g]===void 0&&(b[g]=p[g]);return{$$typeof:r,type:d,key:v,ref:w,props:b,_owner:l.current}}return ui.Fragment=o,ui.jsx=c,ui.jsxs=c,ui}var Lp;function C0(){return Lp||(Lp=1,fu.exports=T0()),fu.exports}var An=C0(),_=ms();const Oe=go(_);var Ha={},pu={exports:{}},Mt={},hu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function E0(){return zp||(zp=1,function(t){function r(R,H){var q=R.length;R.push(H);e:for(;0<q;){var C=q-1>>>1,V=R[C];if(0<l(V,H))R[C]=H,R[q]=V,q=C;else break e}}function o(R){return R.length===0?null:R[0]}function a(R){if(R.length===0)return null;var H=R[0],q=R.pop();if(q!==H){R[0]=q;e:for(var C=0,V=R.length,oe=V>>>1;C<oe;){var ae=2*(C+1)-1,we=R[ae],ke=ae+1,Re=R[ke];if(0>l(we,q))ke<V&&0>l(Re,we)?(R[C]=Re,R[ke]=q,C=ke):(R[C]=we,R[ae]=q,C=ae);else if(ke<V&&0>l(Re,q))R[C]=Re,R[ke]=q,C=ke;else break e}}return H}function l(R,H){var q=R.sortIndex-H.sortIndex;return q!==0?q:R.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],m=[],g=1,b=null,v=3,w=!1,k=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(R){for(var H=o(m);H!==null;){if(H.callback===null)a(m);else if(H.startTime<=R)a(m),H.sortIndex=H.expirationTime,r(p,H);else break;H=o(m)}}function te(R){if(x=!1,U(R),!k)if(o(p)!==null)k=!0,N(B);else{var H=o(m);H!==null&&j(te,H.startTime-R)}}function B(R,H){k=!1,x&&(x=!1,O(K),K=-1),w=!0;var q=v;try{for(U(H),b=o(p);b!==null&&(!(b.expirationTime>H)||R&&!_e());){var C=b.callback;if(typeof C=="function"){b.callback=null,v=b.priorityLevel;var V=C(b.expirationTime<=H);H=t.unstable_now(),typeof V=="function"?b.callback=V:b===o(p)&&a(p),U(H)}else a(p);b=o(p)}if(b!==null)var oe=!0;else{var ae=o(m);ae!==null&&j(te,ae.startTime-H),oe=!1}return oe}finally{b=null,v=q,w=!1}}var ne=!1,ie=null,K=-1,Q=5,ve=-1;function _e(){return!(t.unstable_now()-ve<Q)}function Ae(){if(ie!==null){var R=t.unstable_now();ve=R;var H=!0;try{H=ie(!0,R)}finally{H?Le():(ne=!1,ie=null)}}else ne=!1}var Le;if(typeof M=="function")Le=function(){M(Ae)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,z=$.port2;$.port1.onmessage=Ae,Le=function(){z.postMessage(null)}}else Le=function(){S(Ae,0)};function N(R){ie=R,ne||(ne=!0,Le())}function j(R,H){K=S(function(){R(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){k||w||(k=!0,N(B))},t.unstable_forceFrameRate=function(R){0>R||125<R||(Q=0<R?Math.floor(1e3/R):5)},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return o(p)},t.unstable_next=function(R){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var q=v;v=H;try{return R()}finally{v=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var q=v;v=R;try{return H()}finally{v=q}},t.unstable_scheduleCallback=function(R,H,q){var C=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?C+q:C):q=C,R){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=q+V,R={id:g++,callback:H,priorityLevel:R,startTime:q,expirationTime:V,sortIndex:-1},q>C?(R.sortIndex=q,r(m,R),o(p)===null&&R===o(m)&&(x?(O(K),K=-1):x=!0,j(te,q-C))):(R.sortIndex=V,r(p,R),k||w||(k=!0,N(B))),R},t.unstable_shouldYield=_e,t.unstable_wrapCallback=function(R){var H=v;return function(){var q=v;v=H;try{return R.apply(this,arguments)}finally{v=q}}}}(mu)),mu}var jp;function O0(){return jp||(jp=1,hu.exports=E0()),hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function _0(){if(Ip)return Mt;Ip=1;var t=ms(),r=O0();function o(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function u(e,n){c(e,n),c(e+"Capture",n)}function c(e,n){for(l[e]=n,e=0;e<n.length;e++)a.add(n[e])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},b={};function v(e){return p.call(b,e)?!0:p.call(g,e)?!1:m.test(e)?b[e]=!0:(g[e]=!0,!1)}function w(e,n,i,s){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k(e,n,i,s){if(n===null||typeof n>"u"||w(e,n,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function x(e,n,i,s,f,h,y){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=f,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=h,this.removeEmptyString=y}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new x(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];S[n]=new x(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new x(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new x(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new x(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new x(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new x(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new x(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new x(e,5,!1,e.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function M(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(O,M);S[n]=new x(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(O,M);S[n]=new x(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(O,M);S[n]=new x(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new x(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new x(e,1,!1,e.toLowerCase(),null,!0,!0)});function U(e,n,i,s){var f=S.hasOwnProperty(n)?S[n]:null;(f!==null?f.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(k(n,i,f,s)&&(i=null),s||f===null?v(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):f.mustUseProperty?e[f.propertyName]=i===null?f.type===3?!1:"":i:(n=f.attributeName,s=f.attributeNamespace,i===null?e.removeAttribute(n):(f=f.type,i=f===3||f===4&&i===!0?"":""+i,s?e.setAttributeNS(s,n,i):e.setAttribute(n,i))))}var te=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),ne=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),_e=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),R=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,C;function V(e){if(C===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);C=n&&n[1]||""}return`
`+C+e}var oe=!1;function ae(e,n){if(!e||oe)return"";oe=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(I){var s=I}Reflect.construct(e,[],n)}else{try{n.call()}catch(I){s=I}e.call(n.prototype)}else{try{throw Error()}catch(I){s=I}e()}}catch(I){if(I&&s&&typeof I.stack=="string"){for(var f=I.stack.split(`
`),h=s.stack.split(`
`),y=f.length-1,P=h.length-1;1<=y&&0<=P&&f[y]!==h[P];)P--;for(;1<=y&&0<=P;y--,P--)if(f[y]!==h[P]){if(y!==1||P!==1)do if(y--,P--,0>P||f[y]!==h[P]){var T=`
`+f[y].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=y&&0<=P);break}}}finally{oe=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?V(e):""}function we(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ie:return"Fragment";case ne:return"Portal";case Q:return"Profiler";case K:return"StrictMode";case Le:return"Suspense";case $:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _e:return(e.displayName||"Context")+".Consumer";case ve:return(e._context.displayName||"Context")+".Provider";case Ae:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ke(e.type)||"Memo";case N:n=e._payload,e=e._init;try{return ke(e(n))}catch{}}return null}function Re(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(n);case 8:return n===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(e){var n=je(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var f=i.get,h=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return f.call(this)},set:function(y){s=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function tt(e){e._valueTracker||(e._valueTracker=et(e))}function Tt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),s="";return e&&(s=je(e)?e.checked?"true":"false":e.value),e=s,e!==i?(n.setValue(e),!0):!1}function lt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xo(e,n){var i=n.checked;return q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function ko(e,n){var i=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;i=Te(n.value!=null?n.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Po(e,n){n=n.checked,n!=null&&U(e,"checked",n,!1)}function So(e,n){Po(e,n);var i=Te(n.value),s=n.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?To(e,n.type,i):n.hasOwnProperty("defaultValue")&&To(e,n.type,Te(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function lr(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function To(e,n,i){(n!=="number"||lt(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var jn=Array.isArray;function ln(e,n,i,s){if(e=e.options,n){n={};for(var f=0;f<i.length;f++)n["$"+i[f]]=!0;for(i=0;i<e.length;i++)f=n.hasOwnProperty("$"+e[i].value),e[i].selected!==f&&(e[i].selected=f),f&&s&&(e[i].defaultSelected=!0)}else{for(i=""+Te(i),n=null,f=0;f<e.length;f++){if(e[f].value===i){e[f].selected=!0,s&&(e[f].defaultSelected=!0);return}n!==null||e[f].disabled||(n=e[f])}n!==null&&(n.selected=!0)}}function In(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(o(91));return q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ar(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(o(92));if(jn(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:Te(i)}}function Ii(e,n){var i=Te(n.value),s=Te(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function Y(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function L(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function J(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?L(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ee,Se=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,s,f){MSApp.execUnsafeLocalFunction(function(){return e(n,i,s,f)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ee.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Pe(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var De={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F=["Webkit","ms","Moz","O"];Object.keys(De).forEach(function(e){F.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),De[n]=De[e]})});function W(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||De.hasOwnProperty(e)&&De[e]?(""+n).trim():n+"px"}function de(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var s=i.indexOf("--")===0,f=W(i,n[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,f):e[i]=f}}var ce=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function le(e,n){if(n){if(ce[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(o(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(n.style!=null&&typeof n.style!="object")throw Error(o(62))}}function Ce(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fe=null;function Be(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ie=null,Ke=null,Ue=null;function ut(e){if(e=Go(e)){if(typeof Ie!="function")throw Error(o(280));var n=e.stateNode;n&&(n=aa(n),Ie(e.stateNode,e.type,n))}}function wn(e){Ke?Ue?Ue.push(e):Ue=[e]:Ke=e}function un(){if(Ke){var e=Ke,n=Ue;if(Ue=Ke=null,ut(e),n)for(e=0;e<n.length;e++)ut(n[e])}}function ur(e,n){return e(n)}function Co(){}var Rr=!1;function Zc(e,n,i){if(Rr)return e(n,i);Rr=!0;try{return ur(e,n,i)}finally{Rr=!1,(Ke!==null||Ue!==null)&&(Co(),un())}}function Eo(e,n){var i=e.stateNode;if(i===null)return null;var s=aa(i);if(s===null)return null;i=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,n,typeof i));return i}var As=!1;if(d)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){As=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{As=!1}function Ay(e,n,i,s,f,h,y,P,T){var I=Array.prototype.slice.call(arguments,3);try{n.apply(i,I)}catch(X){this.onError(X)}}var _o=!1,Vi=null,Ni=!1,Rs=null,Ry={onError:function(e){_o=!0,Vi=e}};function Dy(e,n,i,s,f,h,y,P,T){_o=!1,Vi=null,Ay.apply(Ry,arguments)}function My(e,n,i,s,f,h,y,P,T){if(Dy.apply(this,arguments),_o){if(_o){var I=Vi;_o=!1,Vi=null}else throw Error(o(198));Ni||(Ni=!0,Rs=I)}}function cr(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function Jc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ef(e){if(cr(e)!==e)throw Error(o(188))}function Ly(e){var n=e.alternate;if(!n){if(n=cr(e),n===null)throw Error(o(188));return n!==e?null:e}for(var i=e,s=n;;){var f=i.return;if(f===null)break;var h=f.alternate;if(h===null){if(s=f.return,s!==null){i=s;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===i)return ef(f),e;if(h===s)return ef(f),n;h=h.sibling}throw Error(o(188))}if(i.return!==s.return)i=f,s=h;else{for(var y=!1,P=f.child;P;){if(P===i){y=!0,i=f,s=h;break}if(P===s){y=!0,s=f,i=h;break}P=P.sibling}if(!y){for(P=h.child;P;){if(P===i){y=!0,i=h,s=f;break}if(P===s){y=!0,s=h,i=f;break}P=P.sibling}if(!y)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:n}function tf(e){return e=Ly(e),e!==null?nf(e):null}function nf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=nf(e);if(n!==null)return n;e=e.sibling}return null}var rf=r.unstable_scheduleCallback,of=r.unstable_cancelCallback,zy=r.unstable_shouldYield,jy=r.unstable_requestPaint,ot=r.unstable_now,Iy=r.unstable_getCurrentPriorityLevel,Ds=r.unstable_ImmediatePriority,af=r.unstable_UserBlockingPriority,Fi=r.unstable_NormalPriority,Vy=r.unstable_LowPriority,sf=r.unstable_IdlePriority,Bi=null,cn=null;function Ny(e){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Bi,e,void 0,(e.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:Uy,Fy=Math.log,By=Math.LN2;function Uy(e){return e>>>=0,e===0?32:31-(Fy(e)/By|0)|0}var Ui=64,$i=4194304;function Ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qi(e,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,f=e.suspendedLanes,h=e.pingedLanes,y=i&268435455;if(y!==0){var P=y&~f;P!==0?s=Ao(P):(h&=y,h!==0&&(s=Ao(h)))}else y=i&~f,y!==0?s=Ao(y):h!==0&&(s=Ao(h));if(s===0)return 0;if(n!==0&&n!==s&&(n&f)===0&&(f=s&-s,h=n&-n,f>=h||f===16&&(h&4194240)!==0))return n;if((s&4)!==0&&(s|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)i=31-Yt(n),f=1<<i,s|=e[i],n&=~f;return s}function $y(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qy(e,n){for(var i=e.suspendedLanes,s=e.pingedLanes,f=e.expirationTimes,h=e.pendingLanes;0<h;){var y=31-Yt(h),P=1<<y,T=f[y];T===-1?((P&i)===0||(P&s)!==0)&&(f[y]=$y(P,n)):T<=n&&(e.expiredLanes|=P),h&=~P}}function Ms(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lf(){var e=Ui;return Ui<<=1,(Ui&4194240)===0&&(Ui=64),e}function Ls(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Ro(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Yt(n),e[n]=i}function Hy(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var f=31-Yt(i),h=1<<f;n[f]=0,s[f]=-1,e[f]=-1,i&=~h}}function zs(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var s=31-Yt(i),f=1<<s;f&n|e[s]&n&&(e[s]|=n),i&=~f}}var Ve=0;function uf(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var cf,js,ff,df,pf,Is=!1,Hi=[],Vn=null,Nn=null,Fn=null,Do=new Map,Mo=new Map,Bn=[],Wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hf(e,n){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Lo(e,n,i,s,f,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:i,eventSystemFlags:s,nativeEvent:h,targetContainers:[f]},n!==null&&(n=Go(n),n!==null&&js(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),e)}function Ky(e,n,i,s,f){switch(n){case"focusin":return Vn=Lo(Vn,e,n,i,s,f),!0;case"dragenter":return Nn=Lo(Nn,e,n,i,s,f),!0;case"mouseover":return Fn=Lo(Fn,e,n,i,s,f),!0;case"pointerover":var h=f.pointerId;return Do.set(h,Lo(Do.get(h)||null,e,n,i,s,f)),!0;case"gotpointercapture":return h=f.pointerId,Mo.set(h,Lo(Mo.get(h)||null,e,n,i,s,f)),!0}return!1}function mf(e){var n=fr(e.target);if(n!==null){var i=cr(n);if(i!==null){if(n=i.tag,n===13){if(n=Jc(i),n!==null){e.blockedOn=n,pf(e.priority,function(){ff(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Ns(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);Fe=s,i.target.dispatchEvent(s),Fe=null}else return n=Go(i),n!==null&&js(n),e.blockedOn=i,!1;n.shift()}return!0}function gf(e,n,i){Wi(e)&&i.delete(n)}function Gy(){Is=!1,Vn!==null&&Wi(Vn)&&(Vn=null),Nn!==null&&Wi(Nn)&&(Nn=null),Fn!==null&&Wi(Fn)&&(Fn=null),Do.forEach(gf),Mo.forEach(gf)}function zo(e,n){e.blockedOn===n&&(e.blockedOn=null,Is||(Is=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Gy)))}function jo(e){function n(f){return zo(f,e)}if(0<Hi.length){zo(Hi[0],e);for(var i=1;i<Hi.length;i++){var s=Hi[i];s.blockedOn===e&&(s.blockedOn=null)}}for(Vn!==null&&zo(Vn,e),Nn!==null&&zo(Nn,e),Fn!==null&&zo(Fn,e),Do.forEach(n),Mo.forEach(n),i=0;i<Bn.length;i++)s=Bn[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<Bn.length&&(i=Bn[0],i.blockedOn===null);)mf(i),i.blockedOn===null&&Bn.shift()}var Dr=te.ReactCurrentBatchConfig,Ki=!0;function Xy(e,n,i,s){var f=Ve,h=Dr.transition;Dr.transition=null;try{Ve=1,Vs(e,n,i,s)}finally{Ve=f,Dr.transition=h}}function Yy(e,n,i,s){var f=Ve,h=Dr.transition;Dr.transition=null;try{Ve=4,Vs(e,n,i,s)}finally{Ve=f,Dr.transition=h}}function Vs(e,n,i,s){if(Ki){var f=Ns(e,n,i,s);if(f===null)nl(e,n,s,Gi,i),hf(e,s);else if(Ky(f,e,n,i,s))s.stopPropagation();else if(hf(e,s),n&4&&-1<Wy.indexOf(e)){for(;f!==null;){var h=Go(f);if(h!==null&&cf(h),h=Ns(e,n,i,s),h===null&&nl(e,n,s,Gi,i),h===f)break;f=h}f!==null&&s.stopPropagation()}else nl(e,n,s,null,i)}}var Gi=null;function Ns(e,n,i,s){if(Gi=null,e=Be(s),e=fr(e),e!==null)if(n=cr(e),n===null)e=null;else if(i=n.tag,i===13){if(e=Jc(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Gi=e,null}function yf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iy()){case Ds:return 1;case af:return 4;case Fi:case Vy:return 16;case sf:return 536870912;default:return 16}default:return 16}}var Un=null,Fs=null,Xi=null;function vf(){if(Xi)return Xi;var e,n=Fs,i=n.length,s,f="value"in Un?Un.value:Un.textContent,h=f.length;for(e=0;e<i&&n[e]===f[e];e++);var y=i-e;for(s=1;s<=y&&n[i-s]===f[h-s];s++);return Xi=f.slice(e,1<s?1-s:void 0)}function Yi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function bf(){return!1}function Lt(e){function n(i,s,f,h,y){this._reactName=i,this._targetInst=f,this.type=s,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var P in e)e.hasOwnProperty(P)&&(i=e[P],this[P]=i?i(h):h[P]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Qi:bf,this.isPropagationStopped=bf,this}return q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),n}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bs=Lt(Mr),Io=q({},Mr,{view:0,detail:0}),Qy=Lt(Io),Us,$s,Vo,Zi=q({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vo&&(Vo&&e.type==="mousemove"?(Us=e.screenX-Vo.screenX,$s=e.screenY-Vo.screenY):$s=Us=0,Vo=e),Us)},movementY:function(e){return"movementY"in e?e.movementY:$s}}),wf=Lt(Zi),Zy=q({},Zi,{dataTransfer:0}),Jy=Lt(Zy),ev=q({},Io,{relatedTarget:0}),qs=Lt(ev),tv=q({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=Lt(tv),rv=q({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ov=Lt(rv),iv=q({},Mr,{data:0}),xf=Lt(iv),av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=lv[e])?!!n[e]:!1}function Hs(){return uv}var cv=q({},Io,{key:function(e){if(e.key){var n=av[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?Yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fv=Lt(cv),dv=q({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=Lt(dv),pv=q({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),hv=Lt(pv),mv=q({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),gv=Lt(mv),yv=q({},Zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=Lt(yv),bv=[9,13,27,32],Ws=d&&"CompositionEvent"in window,No=null;d&&"documentMode"in document&&(No=document.documentMode);var wv=d&&"TextEvent"in window&&!No,Pf=d&&(!Ws||No&&8<No&&11>=No),Sf=" ",Tf=!1;function Cf(e,n){switch(e){case"keyup":return bv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function xv(e,n){switch(e){case"compositionend":return Ef(n);case"keypress":return n.which!==32?null:(Tf=!0,Sf);case"textInput":return e=n.data,e===Sf&&Tf?null:e;default:return null}}function kv(e,n){if(Lr)return e==="compositionend"||!Ws&&Cf(e,n)?(e=vf(),Xi=Fs=Un=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pf&&n.locale!=="ko"?null:n.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pv[e.type]:n==="textarea"}function _f(e,n,i,s){wn(s),n=ra(n,"onChange"),0<n.length&&(i=new Bs("onChange","change",null,i,s),e.push({event:i,listeners:n}))}var Fo=null,Bo=null;function Sv(e){Kf(e,0)}function Ji(e){var n=Nr(e);if(Tt(n))return e}function Tv(e,n){if(e==="change")return n}var Af=!1;if(d){var Ks;if(d){var Gs="oninput"in document;if(!Gs){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),Gs=typeof Rf.oninput=="function"}Ks=Gs}else Ks=!1;Af=Ks&&(!document.documentMode||9<document.documentMode)}function Df(){Fo&&(Fo.detachEvent("onpropertychange",Mf),Bo=Fo=null)}function Mf(e){if(e.propertyName==="value"&&Ji(Bo)){var n=[];_f(n,Bo,e,Be(e)),Zc(Sv,n)}}function Cv(e,n,i){e==="focusin"?(Df(),Fo=n,Bo=i,Fo.attachEvent("onpropertychange",Mf)):e==="focusout"&&Df()}function Ev(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ji(Bo)}function Ov(e,n){if(e==="click")return Ji(n)}function _v(e,n){if(e==="input"||e==="change")return Ji(n)}function Av(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qt=typeof Object.is=="function"?Object.is:Av;function Uo(e,n){if(Qt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),s=Object.keys(n);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var f=i[s];if(!p.call(n,f)||!Qt(e[f],n[f]))return!1}return!0}function Lf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zf(e,n){var i=Lf(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=n&&s>=n)return{node:i,offset:n-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Lf(i)}}function jf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?jf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function If(){for(var e=window,n=lt();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=lt(e.document)}return n}function Xs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Rv(e){var n=If(),i=e.focusedElem,s=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&jf(i.ownerDocument.documentElement,i)){if(s!==null&&Xs(i)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var f=i.textContent.length,h=Math.min(s.start,f);s=s.end===void 0?h:Math.min(s.end,f),!e.extend&&h>s&&(f=s,s=h,h=f),f=zf(i,h);var y=zf(i,s);f&&y&&(e.rangeCount!==1||e.anchorNode!==f.node||e.anchorOffset!==f.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(n=n.createRange(),n.setStart(f.node,f.offset),e.removeAllRanges(),h>s?(e.addRange(n),e.extend(y.node,y.offset)):(n.setEnd(y.node,y.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dv=d&&"documentMode"in document&&11>=document.documentMode,zr=null,Ys=null,$o=null,Qs=!1;function Vf(e,n,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Qs||zr==null||zr!==lt(s)||(s=zr,"selectionStart"in s&&Xs(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),$o&&Uo($o,s)||($o=s,s=ra(Ys,"onSelect"),0<s.length&&(n=new Bs("onSelect","select",null,n,i),e.push({event:n,listeners:s}),n.target=zr)))}function ea(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var jr={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},Zs={},Nf={};d&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function ta(e){if(Zs[e])return Zs[e];if(!jr[e])return e;var n=jr[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Nf)return Zs[e]=n[i];return e}var Ff=ta("animationend"),Bf=ta("animationiteration"),Uf=ta("animationstart"),$f=ta("transitionend"),qf=new Map,Hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,n){qf.set(e,n),u(n,[e])}for(var Js=0;Js<Hf.length;Js++){var el=Hf[Js],Mv=el.toLowerCase(),Lv=el[0].toUpperCase()+el.slice(1);$n(Mv,"on"+Lv)}$n(Ff,"onAnimationEnd"),$n(Bf,"onAnimationIteration"),$n(Uf,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n($f,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Wf(e,n,i){var s=e.type||"unknown-event";e.currentTarget=i,My(s,n,void 0,e),e.currentTarget=null}function Kf(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],f=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var y=s.length-1;0<=y;y--){var P=s[y],T=P.instance,I=P.currentTarget;if(P=P.listener,T!==h&&f.isPropagationStopped())break e;Wf(f,P,I),h=T}else for(y=0;y<s.length;y++){if(P=s[y],T=P.instance,I=P.currentTarget,P=P.listener,T!==h&&f.isPropagationStopped())break e;Wf(f,P,I),h=T}}}if(Ni)throw e=Rs,Ni=!1,Rs=null,e}function qe(e,n){var i=n[ll];i===void 0&&(i=n[ll]=new Set);var s=e+"__bubble";i.has(s)||(Gf(n,e,2,!1),i.add(s))}function tl(e,n,i){var s=0;n&&(s|=4),Gf(i,e,s,n)}var na="_reactListening"+Math.random().toString(36).slice(2);function Ho(e){if(!e[na]){e[na]=!0,a.forEach(function(i){i!=="selectionchange"&&(zv.has(i)||tl(i,!1,e),tl(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[na]||(n[na]=!0,tl("selectionchange",!1,n))}}function Gf(e,n,i,s){switch(yf(n)){case 1:var f=Xy;break;case 4:f=Yy;break;default:f=Vs}i=f.bind(null,n,i,e),f=void 0,!As||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),s?f!==void 0?e.addEventListener(n,i,{capture:!0,passive:f}):e.addEventListener(n,i,!0):f!==void 0?e.addEventListener(n,i,{passive:f}):e.addEventListener(n,i,!1)}function nl(e,n,i,s,f){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var P=s.stateNode.containerInfo;if(P===f||P.nodeType===8&&P.parentNode===f)break;if(y===4)for(y=s.return;y!==null;){var T=y.tag;if((T===3||T===4)&&(T=y.stateNode.containerInfo,T===f||T.nodeType===8&&T.parentNode===f))return;y=y.return}for(;P!==null;){if(y=fr(P),y===null)return;if(T=y.tag,T===5||T===6){s=h=y;continue e}P=P.parentNode}}s=s.return}Zc(function(){var I=h,X=Be(i),Z=[];e:{var G=qf.get(e);if(G!==void 0){var se=Bs,fe=e;switch(e){case"keypress":if(Yi(i)===0)break e;case"keydown":case"keyup":se=fv;break;case"focusin":fe="focus",se=qs;break;case"focusout":fe="blur",se=qs;break;case"beforeblur":case"afterblur":se=qs;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=hv;break;case Ff:case Bf:case Uf:se=nv;break;case $f:se=gv;break;case"scroll":se=Qy;break;case"wheel":se=vv;break;case"copy":case"cut":case"paste":se=ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=kf}var pe=(n&4)!==0,it=!pe&&e==="scroll",A=pe?G!==null?G+"Capture":null:G;pe=[];for(var E=I,D;E!==null;){D=E;var re=D.stateNode;if(D.tag===5&&re!==null&&(D=re,A!==null&&(re=Eo(E,A),re!=null&&pe.push(Wo(E,re,D)))),it)break;E=E.return}0<pe.length&&(G=new se(G,fe,null,i,X),Z.push({event:G,listeners:pe}))}}if((n&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",G&&i!==Fe&&(fe=i.relatedTarget||i.fromElement)&&(fr(fe)||fe[xn]))break e;if((se||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,se?(fe=i.relatedTarget||i.toElement,se=I,fe=fe?fr(fe):null,fe!==null&&(it=cr(fe),fe!==it||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(se=null,fe=I),se!==fe)){if(pe=wf,re="onMouseLeave",A="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(pe=kf,re="onPointerLeave",A="onPointerEnter",E="pointer"),it=se==null?G:Nr(se),D=fe==null?G:Nr(fe),G=new pe(re,E+"leave",se,i,X),G.target=it,G.relatedTarget=D,re=null,fr(X)===I&&(pe=new pe(A,E+"enter",fe,i,X),pe.target=D,pe.relatedTarget=it,re=pe),it=re,se&&fe)t:{for(pe=se,A=fe,E=0,D=pe;D;D=Ir(D))E++;for(D=0,re=A;re;re=Ir(re))D++;for(;0<E-D;)pe=Ir(pe),E--;for(;0<D-E;)A=Ir(A),D--;for(;E--;){if(pe===A||A!==null&&pe===A.alternate)break t;pe=Ir(pe),A=Ir(A)}pe=null}else pe=null;se!==null&&Xf(Z,G,se,pe,!1),fe!==null&&it!==null&&Xf(Z,it,fe,pe,!0)}}e:{if(G=I?Nr(I):window,se=G.nodeName&&G.nodeName.toLowerCase(),se==="select"||se==="input"&&G.type==="file")var he=Tv;else if(Of(G))if(Af)he=_v;else{he=Ev;var ge=Cv}else(se=G.nodeName)&&se.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(he=Ov);if(he&&(he=he(e,I))){_f(Z,he,i,X);break e}ge&&ge(e,G,I),e==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&To(G,"number",G.value)}switch(ge=I?Nr(I):window,e){case"focusin":(Of(ge)||ge.contentEditable==="true")&&(zr=ge,Ys=I,$o=null);break;case"focusout":$o=Ys=zr=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,Vf(Z,i,X);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":Vf(Z,i,X)}var ye;if(Ws)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Lr?Cf(e,i)&&(xe="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(xe="onCompositionStart");xe&&(Pf&&i.locale!=="ko"&&(Lr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Lr&&(ye=vf()):(Un=X,Fs="value"in Un?Un.value:Un.textContent,Lr=!0)),ge=ra(I,xe),0<ge.length&&(xe=new xf(xe,e,null,i,X),Z.push({event:xe,listeners:ge}),ye?xe.data=ye:(ye=Ef(i),ye!==null&&(xe.data=ye)))),(ye=wv?xv(e,i):kv(e,i))&&(I=ra(I,"onBeforeInput"),0<I.length&&(X=new xf("onBeforeInput","beforeinput",null,i,X),Z.push({event:X,listeners:I}),X.data=ye))}Kf(Z,n)})}function Wo(e,n,i){return{instance:e,listener:n,currentTarget:i}}function ra(e,n){for(var i=n+"Capture",s=[];e!==null;){var f=e,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=Eo(e,i),h!=null&&s.unshift(Wo(e,h,f)),h=Eo(e,n),h!=null&&s.push(Wo(e,h,f))),e=e.return}return s}function Ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xf(e,n,i,s,f){for(var h=n._reactName,y=[];i!==null&&i!==s;){var P=i,T=P.alternate,I=P.stateNode;if(T!==null&&T===s)break;P.tag===5&&I!==null&&(P=I,f?(T=Eo(i,h),T!=null&&y.unshift(Wo(i,T,P))):f||(T=Eo(i,h),T!=null&&y.push(Wo(i,T,P)))),i=i.return}y.length!==0&&e.push({event:n,listeners:y})}var jv=/\r\n?/g,Iv=/\u0000|\uFFFD/g;function Yf(e){return(typeof e=="string"?e:""+e).replace(jv,`
`).replace(Iv,"")}function oa(e,n,i){if(n=Yf(n),Yf(e)!==n&&i)throw Error(o(425))}function ia(){}var rl=null,ol=null;function il(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var al=typeof setTimeout=="function"?setTimeout:void 0,Vv=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,Nv=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(e){return Qf.resolve(null).then(e).catch(Fv)}:al;function Fv(e){setTimeout(function(){throw e})}function sl(e,n){var i=n,s=0;do{var f=i.nextSibling;if(e.removeChild(i),f&&f.nodeType===8)if(i=f.data,i==="/$"){if(s===0){e.removeChild(f),jo(n);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=f}while(i);jo(n)}function qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Zf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),fn="__reactFiber$"+Vr,Ko="__reactProps$"+Vr,xn="__reactContainer$"+Vr,ll="__reactEvents$"+Vr,Bv="__reactListeners$"+Vr,Uv="__reactHandles$"+Vr;function fr(e){var n=e[fn];if(n)return n;for(var i=e.parentNode;i;){if(n=i[xn]||i[fn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Zf(e);e!==null;){if(i=e[fn])return i;e=Zf(e)}return n}e=i,i=e.parentNode}return null}function Go(e){return e=e[fn]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function aa(e){return e[Ko]||null}var ul=[],Fr=-1;function Hn(e){return{current:e}}function He(e){0>Fr||(e.current=ul[Fr],ul[Fr]=null,Fr--)}function $e(e,n){Fr++,ul[Fr]=e.current,e.current=n}var Wn={},bt=Hn(Wn),Ot=Hn(!1),dr=Wn;function Br(e,n){var i=e.type.contextTypes;if(!i)return Wn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in i)f[h]=n[h];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=f),f}function _t(e){return e=e.childContextTypes,e!=null}function sa(){He(Ot),He(bt)}function Jf(e,n,i){if(bt.current!==Wn)throw Error(o(168));$e(bt,n),$e(Ot,i)}function ed(e,n,i){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var f in s)if(!(f in n))throw Error(o(108,Re(e)||"Unknown",f));return q({},i,s)}function la(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,dr=bt.current,$e(bt,e),$e(Ot,Ot.current),!0}function td(e,n,i){var s=e.stateNode;if(!s)throw Error(o(169));i?(e=ed(e,n,dr),s.__reactInternalMemoizedMergedChildContext=e,He(Ot),He(bt),$e(bt,e)):He(Ot),$e(Ot,i)}var kn=null,ua=!1,cl=!1;function nd(e){kn===null?kn=[e]:kn.push(e)}function $v(e){ua=!0,nd(e)}function Kn(){if(!cl&&kn!==null){cl=!0;var e=0,n=Ve;try{var i=kn;for(Ve=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}kn=null,ua=!1}catch(f){throw kn!==null&&(kn=kn.slice(e+1)),rf(Ds,Kn),f}finally{Ve=n,cl=!1}}return null}var Ur=[],$r=0,ca=null,fa=0,Bt=[],Ut=0,pr=null,Pn=1,Sn="";function hr(e,n){Ur[$r++]=fa,Ur[$r++]=ca,ca=e,fa=n}function rd(e,n,i){Bt[Ut++]=Pn,Bt[Ut++]=Sn,Bt[Ut++]=pr,pr=e;var s=Pn;e=Sn;var f=32-Yt(s)-1;s&=~(1<<f),i+=1;var h=32-Yt(n)+f;if(30<h){var y=f-f%5;h=(s&(1<<y)-1).toString(32),s>>=y,f-=y,Pn=1<<32-Yt(n)+f|i<<f|s,Sn=h+e}else Pn=1<<h|i<<f|s,Sn=e}function fl(e){e.return!==null&&(hr(e,1),rd(e,1,0))}function dl(e){for(;e===ca;)ca=Ur[--$r],Ur[$r]=null,fa=Ur[--$r],Ur[$r]=null;for(;e===pr;)pr=Bt[--Ut],Bt[Ut]=null,Sn=Bt[--Ut],Bt[Ut]=null,Pn=Bt[--Ut],Bt[Ut]=null}var zt=null,jt=null,Ge=!1,Zt=null;function od(e,n){var i=Wt(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function id(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,zt=e,jt=qn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,zt=e,jt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=pr!==null?{id:Pn,overflow:Sn}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=Wt(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,zt=e,jt=null,!0):!1;default:return!1}}function pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hl(e){if(Ge){var n=jt;if(n){var i=n;if(!id(e,n)){if(pl(e))throw Error(o(418));n=qn(i.nextSibling);var s=zt;n&&id(e,n)?od(s,i):(e.flags=e.flags&-4097|2,Ge=!1,zt=e)}}else{if(pl(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ge=!1,zt=e}}}function ad(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function da(e){if(e!==zt)return!1;if(!Ge)return ad(e),Ge=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!il(e.type,e.memoizedProps)),n&&(n=jt)){if(pl(e))throw sd(),Error(o(418));for(;n;)od(e,n),n=qn(n.nextSibling)}if(ad(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){jt=qn(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}jt=null}}else jt=zt?qn(e.stateNode.nextSibling):null;return!0}function sd(){for(var e=jt;e;)e=qn(e.nextSibling)}function qr(){jt=zt=null,Ge=!1}function ml(e){Zt===null?Zt=[e]:Zt.push(e)}var qv=te.ReactCurrentBatchConfig;function Xo(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var s=i.stateNode}if(!s)throw Error(o(147,e));var f=s,h=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(y){var P=f.refs;y===null?delete P[h]:P[h]=y},n._stringRef=h,n)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function pa(e,n){throw e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ld(e){var n=e._init;return n(e._payload)}function ud(e){function n(A,E){if(e){var D=A.deletions;D===null?(A.deletions=[E],A.flags|=16):D.push(E)}}function i(A,E){if(!e)return null;for(;E!==null;)n(A,E),E=E.sibling;return null}function s(A,E){for(A=new Map;E!==null;)E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;return A}function f(A,E){return A=tr(A,E),A.index=0,A.sibling=null,A}function h(A,E,D){return A.index=D,e?(D=A.alternate,D!==null?(D=D.index,D<E?(A.flags|=2,E):D):(A.flags|=2,E)):(A.flags|=1048576,E)}function y(A){return e&&A.alternate===null&&(A.flags|=2),A}function P(A,E,D,re){return E===null||E.tag!==6?(E=iu(D,A.mode,re),E.return=A,E):(E=f(E,D),E.return=A,E)}function T(A,E,D,re){var he=D.type;return he===ie?X(A,E,D.props.children,re,D.key):E!==null&&(E.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===N&&ld(he)===E.type)?(re=f(E,D.props),re.ref=Xo(A,E,D),re.return=A,re):(re=Ia(D.type,D.key,D.props,null,A.mode,re),re.ref=Xo(A,E,D),re.return=A,re)}function I(A,E,D,re){return E===null||E.tag!==4||E.stateNode.containerInfo!==D.containerInfo||E.stateNode.implementation!==D.implementation?(E=au(D,A.mode,re),E.return=A,E):(E=f(E,D.children||[]),E.return=A,E)}function X(A,E,D,re,he){return E===null||E.tag!==7?(E=kr(D,A.mode,re,he),E.return=A,E):(E=f(E,D),E.return=A,E)}function Z(A,E,D){if(typeof E=="string"&&E!==""||typeof E=="number")return E=iu(""+E,A.mode,D),E.return=A,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case B:return D=Ia(E.type,E.key,E.props,null,A.mode,D),D.ref=Xo(A,null,E),D.return=A,D;case ne:return E=au(E,A.mode,D),E.return=A,E;case N:var re=E._init;return Z(A,re(E._payload),D)}if(jn(E)||H(E))return E=kr(E,A.mode,D,null),E.return=A,E;pa(A,E)}return null}function G(A,E,D,re){var he=E!==null?E.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return he!==null?null:P(A,E,""+D,re);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case B:return D.key===he?T(A,E,D,re):null;case ne:return D.key===he?I(A,E,D,re):null;case N:return he=D._init,G(A,E,he(D._payload),re)}if(jn(D)||H(D))return he!==null?null:X(A,E,D,re,null);pa(A,D)}return null}function se(A,E,D,re,he){if(typeof re=="string"&&re!==""||typeof re=="number")return A=A.get(D)||null,P(E,A,""+re,he);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case B:return A=A.get(re.key===null?D:re.key)||null,T(E,A,re,he);case ne:return A=A.get(re.key===null?D:re.key)||null,I(E,A,re,he);case N:var ge=re._init;return se(A,E,D,ge(re._payload),he)}if(jn(re)||H(re))return A=A.get(D)||null,X(E,A,re,he,null);pa(E,re)}return null}function fe(A,E,D,re){for(var he=null,ge=null,ye=E,xe=E=0,mt=null;ye!==null&&xe<D.length;xe++){ye.index>xe?(mt=ye,ye=null):mt=ye.sibling;var ze=G(A,ye,D[xe],re);if(ze===null){ye===null&&(ye=mt);break}e&&ye&&ze.alternate===null&&n(A,ye),E=h(ze,E,xe),ge===null?he=ze:ge.sibling=ze,ge=ze,ye=mt}if(xe===D.length)return i(A,ye),Ge&&hr(A,xe),he;if(ye===null){for(;xe<D.length;xe++)ye=Z(A,D[xe],re),ye!==null&&(E=h(ye,E,xe),ge===null?he=ye:ge.sibling=ye,ge=ye);return Ge&&hr(A,xe),he}for(ye=s(A,ye);xe<D.length;xe++)mt=se(ye,A,xe,D[xe],re),mt!==null&&(e&&mt.alternate!==null&&ye.delete(mt.key===null?xe:mt.key),E=h(mt,E,xe),ge===null?he=mt:ge.sibling=mt,ge=mt);return e&&ye.forEach(function(nr){return n(A,nr)}),Ge&&hr(A,xe),he}function pe(A,E,D,re){var he=H(D);if(typeof he!="function")throw Error(o(150));if(D=he.call(D),D==null)throw Error(o(151));for(var ge=he=null,ye=E,xe=E=0,mt=null,ze=D.next();ye!==null&&!ze.done;xe++,ze=D.next()){ye.index>xe?(mt=ye,ye=null):mt=ye.sibling;var nr=G(A,ye,ze.value,re);if(nr===null){ye===null&&(ye=mt);break}e&&ye&&nr.alternate===null&&n(A,ye),E=h(nr,E,xe),ge===null?he=nr:ge.sibling=nr,ge=nr,ye=mt}if(ze.done)return i(A,ye),Ge&&hr(A,xe),he;if(ye===null){for(;!ze.done;xe++,ze=D.next())ze=Z(A,ze.value,re),ze!==null&&(E=h(ze,E,xe),ge===null?he=ze:ge.sibling=ze,ge=ze);return Ge&&hr(A,xe),he}for(ye=s(A,ye);!ze.done;xe++,ze=D.next())ze=se(ye,A,xe,ze.value,re),ze!==null&&(e&&ze.alternate!==null&&ye.delete(ze.key===null?xe:ze.key),E=h(ze,E,xe),ge===null?he=ze:ge.sibling=ze,ge=ze);return e&&ye.forEach(function(P0){return n(A,P0)}),Ge&&hr(A,xe),he}function it(A,E,D,re){if(typeof D=="object"&&D!==null&&D.type===ie&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case B:e:{for(var he=D.key,ge=E;ge!==null;){if(ge.key===he){if(he=D.type,he===ie){if(ge.tag===7){i(A,ge.sibling),E=f(ge,D.props.children),E.return=A,A=E;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===N&&ld(he)===ge.type){i(A,ge.sibling),E=f(ge,D.props),E.ref=Xo(A,ge,D),E.return=A,A=E;break e}i(A,ge);break}else n(A,ge);ge=ge.sibling}D.type===ie?(E=kr(D.props.children,A.mode,re,D.key),E.return=A,A=E):(re=Ia(D.type,D.key,D.props,null,A.mode,re),re.ref=Xo(A,E,D),re.return=A,A=re)}return y(A);case ne:e:{for(ge=D.key;E!==null;){if(E.key===ge)if(E.tag===4&&E.stateNode.containerInfo===D.containerInfo&&E.stateNode.implementation===D.implementation){i(A,E.sibling),E=f(E,D.children||[]),E.return=A,A=E;break e}else{i(A,E);break}else n(A,E);E=E.sibling}E=au(D,A.mode,re),E.return=A,A=E}return y(A);case N:return ge=D._init,it(A,E,ge(D._payload),re)}if(jn(D))return fe(A,E,D,re);if(H(D))return pe(A,E,D,re);pa(A,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,E!==null&&E.tag===6?(i(A,E.sibling),E=f(E,D),E.return=A,A=E):(i(A,E),E=iu(D,A.mode,re),E.return=A,A=E),y(A)):i(A,E)}return it}var Hr=ud(!0),cd=ud(!1),ha=Hn(null),ma=null,Wr=null,gl=null;function yl(){gl=Wr=ma=null}function vl(e){var n=ha.current;He(ha),e._currentValue=n}function bl(e,n,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===i)break;e=e.return}}function Kr(e,n){ma=e,gl=Wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(At=!0),e.firstContext=null)}function $t(e){var n=e._currentValue;if(gl!==e)if(e={context:e,memoizedValue:n,next:null},Wr===null){if(ma===null)throw Error(o(308));Wr=e,ma.dependencies={lanes:0,firstContext:e}}else Wr=Wr.next=e;return n}var mr=null;function wl(e){mr===null?mr=[e]:mr.push(e)}function fd(e,n,i,s){var f=n.interleaved;return f===null?(i.next=i,wl(n)):(i.next=f.next,f.next=i),n.interleaved=i,Tn(e,s)}function Tn(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Gn=!1;function xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Xn(e,n,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Me&2)!==0){var f=s.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),s.pending=n,Tn(e,i)}return f=s.interleaved,f===null?(n.next=n,wl(s)):(n.next=f.next,f.next=n),s.interleaved=n,Tn(e,i)}function ga(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,i|=s,n.lanes=i,zs(e,i)}}function pd(e,n){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var f=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var y={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?f=h=y:h=h.next=y,i=i.next}while(i!==null);h===null?f=h=n:h=h.next=n}else f=h=n;i={baseState:s.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function ya(e,n,i,s){var f=e.updateQueue;Gn=!1;var h=f.firstBaseUpdate,y=f.lastBaseUpdate,P=f.shared.pending;if(P!==null){f.shared.pending=null;var T=P,I=T.next;T.next=null,y===null?h=I:y.next=I,y=T;var X=e.alternate;X!==null&&(X=X.updateQueue,P=X.lastBaseUpdate,P!==y&&(P===null?X.firstBaseUpdate=I:P.next=I,X.lastBaseUpdate=T))}if(h!==null){var Z=f.baseState;y=0,X=I=T=null,P=h;do{var G=P.lane,se=P.eventTime;if((s&G)===G){X!==null&&(X=X.next={eventTime:se,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var fe=e,pe=P;switch(G=n,se=i,pe.tag){case 1:if(fe=pe.payload,typeof fe=="function"){Z=fe.call(se,Z,G);break e}Z=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=pe.payload,G=typeof fe=="function"?fe.call(se,Z,G):fe,G==null)break e;Z=q({},Z,G);break e;case 2:Gn=!0}}P.callback!==null&&P.lane!==0&&(e.flags|=64,G=f.effects,G===null?f.effects=[P]:G.push(P))}else se={eventTime:se,lane:G,tag:P.tag,payload:P.payload,callback:P.callback,next:null},X===null?(I=X=se,T=Z):X=X.next=se,y|=G;if(P=P.next,P===null){if(P=f.shared.pending,P===null)break;G=P,P=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);if(X===null&&(T=Z),f.baseState=T,f.firstBaseUpdate=I,f.lastBaseUpdate=X,n=f.shared.interleaved,n!==null){f=n;do y|=f.lane,f=f.next;while(f!==n)}else h===null&&(f.shared.lanes=0);vr|=y,e.lanes=y,e.memoizedState=Z}}function hd(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],f=s.callback;if(f!==null){if(s.callback=null,s=i,typeof f!="function")throw Error(o(191,f));f.call(s)}}}var Yo={},dn=Hn(Yo),Qo=Hn(Yo),Zo=Hn(Yo);function gr(e){if(e===Yo)throw Error(o(174));return e}function kl(e,n){switch($e(Zo,n),$e(Qo,e),$e(dn,Yo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:J(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=J(n,e)}He(dn),$e(dn,n)}function Gr(){He(dn),He(Qo),He(Zo)}function md(e){gr(Zo.current);var n=gr(dn.current),i=J(n,e.type);n!==i&&($e(Qo,e),$e(dn,i))}function Pl(e){Qo.current===e&&(He(dn),He(Qo))}var Ye=Hn(0);function va(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sl=[];function Tl(){for(var e=0;e<Sl.length;e++)Sl[e]._workInProgressVersionPrimary=null;Sl.length=0}var ba=te.ReactCurrentDispatcher,Cl=te.ReactCurrentBatchConfig,yr=0,Qe=null,ct=null,pt=null,wa=!1,Jo=!1,ei=0,Hv=0;function wt(){throw Error(o(321))}function El(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Qt(e[i],n[i]))return!1;return!0}function Ol(e,n,i,s,f,h){if(yr=h,Qe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ba.current=e===null||e.memoizedState===null?Xv:Yv,e=i(s,f),Jo){h=0;do{if(Jo=!1,ei=0,25<=h)throw Error(o(301));h+=1,pt=ct=null,n.updateQueue=null,ba.current=Qv,e=i(s,f)}while(Jo)}if(ba.current=Pa,n=ct!==null&&ct.next!==null,yr=0,pt=ct=Qe=null,wa=!1,n)throw Error(o(300));return e}function _l(){var e=ei!==0;return ei=0,e}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Qe.memoizedState=pt=e:pt=pt.next=e,pt}function qt(){if(ct===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var n=pt===null?Qe.memoizedState:pt.next;if(n!==null)pt=n,ct=e;else{if(e===null)throw Error(o(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},pt===null?Qe.memoizedState=pt=e:pt=pt.next=e}return pt}function ti(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=qt(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=ct,f=s.baseQueue,h=i.pending;if(h!==null){if(f!==null){var y=f.next;f.next=h.next,h.next=y}s.baseQueue=f=h,i.pending=null}if(f!==null){h=f.next,s=s.baseState;var P=y=null,T=null,I=h;do{var X=I.lane;if((yr&X)===X)T!==null&&(T=T.next={lane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),s=I.hasEagerState?I.eagerState:e(s,I.action);else{var Z={lane:X,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null};T===null?(P=T=Z,y=s):T=T.next=Z,Qe.lanes|=X,vr|=X}I=I.next}while(I!==null&&I!==h);T===null?y=s:T.next=P,Qt(s,n.memoizedState)||(At=!0),n.memoizedState=s,n.baseState=y,n.baseQueue=T,i.lastRenderedState=s}if(e=i.interleaved,e!==null){f=e;do h=f.lane,Qe.lanes|=h,vr|=h,f=f.next;while(f!==e)}else f===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Rl(e){var n=qt(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=i.dispatch,f=i.pending,h=n.memoizedState;if(f!==null){i.pending=null;var y=f=f.next;do h=e(h,y.action),y=y.next;while(y!==f);Qt(h,n.memoizedState)||(At=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),i.lastRenderedState=h}return[h,s]}function gd(){}function yd(e,n){var i=Qe,s=qt(),f=n(),h=!Qt(s.memoizedState,f);if(h&&(s.memoizedState=f,At=!0),s=s.queue,Dl(wd.bind(null,i,s,e),[e]),s.getSnapshot!==n||h||pt!==null&&pt.memoizedState.tag&1){if(i.flags|=2048,ni(9,bd.bind(null,i,s,f,n),void 0,null),ht===null)throw Error(o(349));(yr&30)!==0||vd(i,n,f)}return f}function vd(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=Qe.updateQueue,n===null?(n={lastEffect:null,stores:null},Qe.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function bd(e,n,i,s){n.value=i,n.getSnapshot=s,xd(n)&&kd(e)}function wd(e,n,i){return i(function(){xd(n)&&kd(e)})}function xd(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Qt(e,i)}catch{return!0}}function kd(e){var n=Tn(e,1);n!==null&&nn(n,e,1,-1)}function Pd(e){var n=pn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},n.queue=e,e=e.dispatch=Gv.bind(null,Qe,e),[n.memoizedState,e]}function ni(e,n,i,s){return e={tag:e,create:n,destroy:i,deps:s,next:null},n=Qe.updateQueue,n===null?(n={lastEffect:null,stores:null},Qe.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,n.lastEffect=e)),e}function Sd(){return qt().memoizedState}function xa(e,n,i,s){var f=pn();Qe.flags|=e,f.memoizedState=ni(1|n,i,void 0,s===void 0?null:s)}function ka(e,n,i,s){var f=qt();s=s===void 0?null:s;var h=void 0;if(ct!==null){var y=ct.memoizedState;if(h=y.destroy,s!==null&&El(s,y.deps)){f.memoizedState=ni(n,i,h,s);return}}Qe.flags|=e,f.memoizedState=ni(1|n,i,h,s)}function Td(e,n){return xa(8390656,8,e,n)}function Dl(e,n){return ka(2048,8,e,n)}function Cd(e,n){return ka(4,2,e,n)}function Ed(e,n){return ka(4,4,e,n)}function Od(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function _d(e,n,i){return i=i!=null?i.concat([e]):null,ka(4,4,Od.bind(null,n,e),i)}function Ml(){}function Ad(e,n){var i=qt();n=n===void 0?null:n;var s=i.memoizedState;return s!==null&&n!==null&&El(n,s[1])?s[0]:(i.memoizedState=[e,n],e)}function Rd(e,n){var i=qt();n=n===void 0?null:n;var s=i.memoizedState;return s!==null&&n!==null&&El(n,s[1])?s[0]:(e=e(),i.memoizedState=[e,n],e)}function Dd(e,n,i){return(yr&21)===0?(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=i):(Qt(i,n)||(i=lf(),Qe.lanes|=i,vr|=i,e.baseState=!0),n)}function Wv(e,n){var i=Ve;Ve=i!==0&&4>i?i:4,e(!0);var s=Cl.transition;Cl.transition={};try{e(!1),n()}finally{Ve=i,Cl.transition=s}}function Md(){return qt().memoizedState}function Kv(e,n,i){var s=Jn(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},Ld(e))zd(n,i);else if(i=fd(e,n,i,s),i!==null){var f=Et();nn(i,e,s,f),jd(i,n,s)}}function Gv(e,n,i){var s=Jn(e),f={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(Ld(e))zd(n,f);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,P=h(y,i);if(f.hasEagerState=!0,f.eagerState=P,Qt(P,y)){var T=n.interleaved;T===null?(f.next=f,wl(n)):(f.next=T.next,T.next=f),n.interleaved=f;return}}catch{}finally{}i=fd(e,n,f,s),i!==null&&(f=Et(),nn(i,e,s,f),jd(i,n,s))}}function Ld(e){var n=e.alternate;return e===Qe||n!==null&&n===Qe}function zd(e,n){Jo=wa=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function jd(e,n,i){if((i&4194240)!==0){var s=n.lanes;s&=e.pendingLanes,i|=s,n.lanes=i,zs(e,i)}}var Pa={readContext:$t,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},Xv={readContext:$t,useCallback:function(e,n){return pn().memoizedState=[e,n===void 0?null:n],e},useContext:$t,useEffect:Td,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,xa(4194308,4,Od.bind(null,n,e),i)},useLayoutEffect:function(e,n){return xa(4194308,4,e,n)},useInsertionEffect:function(e,n){return xa(4,2,e,n)},useMemo:function(e,n){var i=pn();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var s=pn();return n=i!==void 0?i(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Kv.bind(null,Qe,e),[s.memoizedState,e]},useRef:function(e){var n=pn();return e={current:e},n.memoizedState=e},useState:Pd,useDebugValue:Ml,useDeferredValue:function(e){return pn().memoizedState=e},useTransition:function(){var e=Pd(!1),n=e[0];return e=Wv.bind(null,e[1]),pn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var s=Qe,f=pn();if(Ge){if(i===void 0)throw Error(o(407));i=i()}else{if(i=n(),ht===null)throw Error(o(349));(yr&30)!==0||vd(s,n,i)}f.memoizedState=i;var h={value:i,getSnapshot:n};return f.queue=h,Td(wd.bind(null,s,h,e),[e]),s.flags|=2048,ni(9,bd.bind(null,s,h,i,n),void 0,null),i},useId:function(){var e=pn(),n=ht.identifierPrefix;if(Ge){var i=Sn,s=Pn;i=(s&~(1<<32-Yt(s)-1)).toString(32)+i,n=":"+n+"R"+i,i=ei++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=Hv++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Yv={readContext:$t,useCallback:Ad,useContext:$t,useEffect:Dl,useImperativeHandle:_d,useInsertionEffect:Cd,useLayoutEffect:Ed,useMemo:Rd,useReducer:Al,useRef:Sd,useState:function(){return Al(ti)},useDebugValue:Ml,useDeferredValue:function(e){var n=qt();return Dd(n,ct.memoizedState,e)},useTransition:function(){var e=Al(ti)[0],n=qt().memoizedState;return[e,n]},useMutableSource:gd,useSyncExternalStore:yd,useId:Md,unstable_isNewReconciler:!1},Qv={readContext:$t,useCallback:Ad,useContext:$t,useEffect:Dl,useImperativeHandle:_d,useInsertionEffect:Cd,useLayoutEffect:Ed,useMemo:Rd,useReducer:Rl,useRef:Sd,useState:function(){return Rl(ti)},useDebugValue:Ml,useDeferredValue:function(e){var n=qt();return ct===null?n.memoizedState=e:Dd(n,ct.memoizedState,e)},useTransition:function(){var e=Rl(ti)[0],n=qt().memoizedState;return[e,n]},useMutableSource:gd,useSyncExternalStore:yd,useId:Md,unstable_isNewReconciler:!1};function Jt(e,n){if(e&&e.defaultProps){n=q({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function Ll(e,n,i,s){n=e.memoizedState,i=i(s,n),i=i==null?n:q({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Sa={isMounted:function(e){return(e=e._reactInternals)?cr(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var s=Et(),f=Jn(e),h=Cn(s,f);h.payload=n,i!=null&&(h.callback=i),n=Xn(e,h,f),n!==null&&(nn(n,e,f,s),ga(n,e,f))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var s=Et(),f=Jn(e),h=Cn(s,f);h.tag=1,h.payload=n,i!=null&&(h.callback=i),n=Xn(e,h,f),n!==null&&(nn(n,e,f,s),ga(n,e,f))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Et(),s=Jn(e),f=Cn(i,s);f.tag=2,n!=null&&(f.callback=n),n=Xn(e,f,s),n!==null&&(nn(n,e,s,i),ga(n,e,s))}};function Id(e,n,i,s,f,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,h,y):n.prototype&&n.prototype.isPureReactComponent?!Uo(i,s)||!Uo(f,h):!0}function Vd(e,n,i){var s=!1,f=Wn,h=n.contextType;return typeof h=="object"&&h!==null?h=$t(h):(f=_t(n)?dr:bt.current,s=n.contextTypes,h=(s=s!=null)?Br(e,f):Wn),n=new n(i,h),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Sa,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=f,e.__reactInternalMemoizedMaskedChildContext=h),n}function Nd(e,n,i,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,s),n.state!==e&&Sa.enqueueReplaceState(n,n.state,null)}function zl(e,n,i,s){var f=e.stateNode;f.props=i,f.state=e.memoizedState,f.refs={},xl(e);var h=n.contextType;typeof h=="object"&&h!==null?f.context=$t(h):(h=_t(n)?dr:bt.current,f.context=Br(e,h)),f.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Ll(e,n,h,i),f.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(n=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),n!==f.state&&Sa.enqueueReplaceState(f,f.state,null),ya(e,i,f,s),f.state=e.memoizedState),typeof f.componentDidMount=="function"&&(e.flags|=4194308)}function Xr(e,n){try{var i="",s=n;do i+=we(s),s=s.return;while(s);var f=i}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:n,stack:f,digest:null}}function jl(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function MS(e,n){}var Zv=typeof WeakMap=="function"?WeakMap:Map;function Fd(e,n,i){i=Cn(-1,i),i.tag=3,i.payload={element:null};var s=n.value;return i.callback=function(){Ra||(Ra=!0,Ql=s)},i}function Bd(e,n,i){i=Cn(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var f=n.value;i.payload=function(){return s(f)},i.callback=function(){}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){typeof s!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var y=n.stack;this.componentDidCatch(n.value,{componentStack:y!==null?y:""})}),i}function Ud(e,n,i){var s=e.pingCache;if(s===null){s=e.pingCache=new Zv;var f=new Set;s.set(n,f)}else f=s.get(n),f===void 0&&(f=new Set,s.set(n,f));f.has(i)||(f.add(i),e=d0.bind(null,e,n,i),n.then(e,e))}function $d(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function qd(e,n,i,s,f){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Cn(-1,1),n.tag=2,Xn(i,n,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=f,e)}var Jv=te.ReactCurrentOwner,At=!1;function Ct(e,n,i,s){n.child=e===null?cd(n,null,i,s):Hr(n,e.child,i,s)}function Hd(e,n,i,s,f){i=i.render;var h=n.ref;return Kr(n,f),s=Ol(e,n,i,s,h,f),i=_l(),e!==null&&!At?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~f,En(e,n,f)):(Ge&&i&&fl(n),n.flags|=1,Ct(e,n,s,f),n.child)}function Wd(e,n,i,s,f){if(e===null){var h=i.type;return typeof h=="function"&&!ou(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=h,Kd(e,n,h,s,f)):(e=Ia(i.type,null,s,n,n.mode,f),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,(e.lanes&f)===0){var y=h.memoizedProps;if(i=i.compare,i=i!==null?i:Uo,i(y,s)&&e.ref===n.ref)return En(e,n,f)}return n.flags|=1,e=tr(h,s),e.ref=n.ref,e.return=n,n.child=e}function Kd(e,n,i,s,f){if(e!==null){var h=e.memoizedProps;if(Uo(h,s)&&e.ref===n.ref)if(At=!1,n.pendingProps=s=h,(e.lanes&f)!==0)(e.flags&131072)!==0&&(At=!0);else return n.lanes=e.lanes,En(e,n,f)}return Il(e,n,i,s,f)}function Gd(e,n,i){var s=n.pendingProps,f=s.children,h=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Qr,It),It|=i;else{if((i&1073741824)===0)return e=h!==null?h.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,$e(Qr,It),It|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=h!==null?h.baseLanes:i,$e(Qr,It),It|=s}else h!==null?(s=h.baseLanes|i,n.memoizedState=null):s=i,$e(Qr,It),It|=s;return Ct(e,n,f,i),n.child}function Xd(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Il(e,n,i,s,f){var h=_t(i)?dr:bt.current;return h=Br(n,h),Kr(n,f),i=Ol(e,n,i,s,h,f),s=_l(),e!==null&&!At?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~f,En(e,n,f)):(Ge&&s&&fl(n),n.flags|=1,Ct(e,n,i,f),n.child)}function Yd(e,n,i,s,f){if(_t(i)){var h=!0;la(n)}else h=!1;if(Kr(n,f),n.stateNode===null)Ca(e,n),Vd(n,i,s),zl(n,i,s,f),s=!0;else if(e===null){var y=n.stateNode,P=n.memoizedProps;y.props=P;var T=y.context,I=i.contextType;typeof I=="object"&&I!==null?I=$t(I):(I=_t(i)?dr:bt.current,I=Br(n,I));var X=i.getDerivedStateFromProps,Z=typeof X=="function"||typeof y.getSnapshotBeforeUpdate=="function";Z||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(P!==s||T!==I)&&Nd(n,y,s,I),Gn=!1;var G=n.memoizedState;y.state=G,ya(n,s,y,f),T=n.memoizedState,P!==s||G!==T||Ot.current||Gn?(typeof X=="function"&&(Ll(n,i,X,s),T=n.memoizedState),(P=Gn||Id(n,i,P,s,G,T,I))?(Z||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(n.flags|=4194308)):(typeof y.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=T),y.props=s,y.state=T,y.context=I,s=P):(typeof y.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{y=n.stateNode,dd(e,n),P=n.memoizedProps,I=n.type===n.elementType?P:Jt(n.type,P),y.props=I,Z=n.pendingProps,G=y.context,T=i.contextType,typeof T=="object"&&T!==null?T=$t(T):(T=_t(i)?dr:bt.current,T=Br(n,T));var se=i.getDerivedStateFromProps;(X=typeof se=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(P!==Z||G!==T)&&Nd(n,y,s,T),Gn=!1,G=n.memoizedState,y.state=G,ya(n,s,y,f);var fe=n.memoizedState;P!==Z||G!==fe||Ot.current||Gn?(typeof se=="function"&&(Ll(n,i,se,s),fe=n.memoizedState),(I=Gn||Id(n,i,I,s,G,fe,T)||!1)?(X||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(s,fe,T),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(s,fe,T)),typeof y.componentDidUpdate=="function"&&(n.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof y.componentDidUpdate!="function"||P===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=fe),y.props=s,y.state=fe,y.context=T,s=I):(typeof y.componentDidUpdate!="function"||P===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),s=!1)}return Vl(e,n,i,s,h,f)}function Vl(e,n,i,s,f,h){Xd(e,n);var y=(n.flags&128)!==0;if(!s&&!y)return f&&td(n,i,!1),En(e,n,h);s=n.stateNode,Jv.current=n;var P=y&&typeof i.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&y?(n.child=Hr(n,e.child,null,h),n.child=Hr(n,null,P,h)):Ct(e,n,P,h),n.memoizedState=s.state,f&&td(n,i,!0),n.child}function Qd(e){var n=e.stateNode;n.pendingContext?Jf(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Jf(e,n.context,!1),kl(e,n.containerInfo)}function Zd(e,n,i,s,f){return qr(),ml(f),n.flags|=256,Ct(e,n,i,s),n.child}var Nl={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jd(e,n,i){var s=n.pendingProps,f=Ye.current,h=!1,y=(n.flags&128)!==0,P;if((P=y)||(P=e!==null&&e.memoizedState===null?!1:(f&2)!==0),P?(h=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(f|=1),$e(Ye,f&1),e===null)return hl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(y=s.children,e=s.fallback,h?(s=n.mode,h=n.child,y={mode:"hidden",children:y},(s&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=y):h=Va(y,s,0,null),e=kr(e,s,i,null),h.return=n,e.return=n,h.sibling=e,n.child=h,n.child.memoizedState=Fl(i),n.memoizedState=Nl,e):Bl(n,y));if(f=e.memoizedState,f!==null&&(P=f.dehydrated,P!==null))return e0(e,n,y,s,P,f,i);if(h){h=s.fallback,y=n.mode,f=e.child,P=f.sibling;var T={mode:"hidden",children:s.children};return(y&1)===0&&n.child!==f?(s=n.child,s.childLanes=0,s.pendingProps=T,n.deletions=null):(s=tr(f,T),s.subtreeFlags=f.subtreeFlags&14680064),P!==null?h=tr(P,h):(h=kr(h,y,i,null),h.flags|=2),h.return=n,s.return=n,s.sibling=h,n.child=s,s=h,h=n.child,y=e.child.memoizedState,y=y===null?Fl(i):{baseLanes:y.baseLanes|i,cachePool:null,transitions:y.transitions},h.memoizedState=y,h.childLanes=e.childLanes&~i,n.memoizedState=Nl,s}return h=e.child,e=h.sibling,s=tr(h,{mode:"visible",children:s.children}),(n.mode&1)===0&&(s.lanes=i),s.return=n,s.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=s,n.memoizedState=null,s}function Bl(e,n){return n=Va({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ta(e,n,i,s){return s!==null&&ml(s),Hr(n,e.child,null,i),e=Bl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function e0(e,n,i,s,f,h,y){if(i)return n.flags&256?(n.flags&=-257,s=jl(Error(o(422))),Ta(e,n,y,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(h=s.fallback,f=n.mode,s=Va({mode:"visible",children:s.children},f,0,null),h=kr(h,f,y,null),h.flags|=2,s.return=n,h.return=n,s.sibling=h,n.child=s,(n.mode&1)!==0&&Hr(n,e.child,null,y),n.child.memoizedState=Fl(y),n.memoizedState=Nl,h);if((n.mode&1)===0)return Ta(e,n,y,null);if(f.data==="$!"){if(s=f.nextSibling&&f.nextSibling.dataset,s)var P=s.dgst;return s=P,h=Error(o(419)),s=jl(h,s,void 0),Ta(e,n,y,s)}if(P=(y&e.childLanes)!==0,At||P){if(s=ht,s!==null){switch(y&-y){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(s.suspendedLanes|y))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Tn(e,f),nn(s,e,f,-1))}return ru(),s=jl(Error(o(421))),Ta(e,n,y,s)}return f.data==="$?"?(n.flags|=128,n.child=e.child,n=p0.bind(null,e),f._reactRetry=n,null):(e=h.treeContext,jt=qn(f.nextSibling),zt=n,Ge=!0,Zt=null,e!==null&&(Bt[Ut++]=Pn,Bt[Ut++]=Sn,Bt[Ut++]=pr,Pn=e.id,Sn=e.overflow,pr=n),n=Bl(n,s.children),n.flags|=4096,n)}function ep(e,n,i){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),bl(e.return,n,i)}function Ul(e,n,i,s,f){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:f}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=i,h.tailMode=f)}function tp(e,n,i){var s=n.pendingProps,f=s.revealOrder,h=s.tail;if(Ct(e,n,s.children,i),s=Ye.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ep(e,i,n);else if(e.tag===19)ep(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if($e(Ye,s),(n.mode&1)===0)n.memoizedState=null;else switch(f){case"forwards":for(i=n.child,f=null;i!==null;)e=i.alternate,e!==null&&va(e)===null&&(f=i),i=i.sibling;i=f,i===null?(f=n.child,n.child=null):(f=i.sibling,i.sibling=null),Ul(n,!1,f,i,h);break;case"backwards":for(i=null,f=n.child,n.child=null;f!==null;){if(e=f.alternate,e!==null&&va(e)===null){n.child=f;break}e=f.sibling,f.sibling=i,i=f,f=e}Ul(n,!0,i,null,h);break;case"together":Ul(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ca(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function En(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),vr|=n.lanes,(i&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,i=tr(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=tr(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function t0(e,n,i){switch(n.tag){case 3:Qd(n),qr();break;case 5:md(n);break;case 1:_t(n.type)&&la(n);break;case 4:kl(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,f=n.memoizedProps.value;$e(ha,s._currentValue),s._currentValue=f;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?($e(Ye,Ye.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?Jd(e,n,i):($e(Ye,Ye.current&1),e=En(e,n,i),e!==null?e.sibling:null);$e(Ye,Ye.current&1);break;case 19:if(s=(i&n.childLanes)!==0,(e.flags&128)!==0){if(s)return tp(e,n,i);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),$e(Ye,Ye.current),s)break;return null;case 22:case 23:return n.lanes=0,Gd(e,n,i)}return En(e,n,i)}var np,$l,rp,op;np=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},$l=function(){},rp=function(e,n,i,s){var f=e.memoizedProps;if(f!==s){e=n.stateNode,gr(dn.current);var h=null;switch(i){case"input":f=xo(e,f),s=xo(e,s),h=[];break;case"select":f=q({},f,{value:void 0}),s=q({},s,{value:void 0}),h=[];break;case"textarea":f=In(e,f),s=In(e,s),h=[];break;default:typeof f.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=ia)}le(i,s);var y;i=null;for(I in f)if(!s.hasOwnProperty(I)&&f.hasOwnProperty(I)&&f[I]!=null)if(I==="style"){var P=f[I];for(y in P)P.hasOwnProperty(y)&&(i||(i={}),i[y]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(l.hasOwnProperty(I)?h||(h=[]):(h=h||[]).push(I,null));for(I in s){var T=s[I];if(P=f?.[I],s.hasOwnProperty(I)&&T!==P&&(T!=null||P!=null))if(I==="style")if(P){for(y in P)!P.hasOwnProperty(y)||T&&T.hasOwnProperty(y)||(i||(i={}),i[y]="");for(y in T)T.hasOwnProperty(y)&&P[y]!==T[y]&&(i||(i={}),i[y]=T[y])}else i||(h||(h=[]),h.push(I,i)),i=T;else I==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,P=P?P.__html:void 0,T!=null&&P!==T&&(h=h||[]).push(I,T)):I==="children"?typeof T!="string"&&typeof T!="number"||(h=h||[]).push(I,""+T):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(l.hasOwnProperty(I)?(T!=null&&I==="onScroll"&&qe("scroll",e),h||P===T||(h=[])):(h=h||[]).push(I,T))}i&&(h=h||[]).push("style",i);var I=h;(n.updateQueue=I)&&(n.flags|=4)}},op=function(e,n,i,s){i!==s&&(n.flags|=4)};function ri(e,n){if(!Ge)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function xt(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(n)for(var f=e.child;f!==null;)i|=f.lanes|f.childLanes,s|=f.subtreeFlags&14680064,s|=f.flags&14680064,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)i|=f.lanes|f.childLanes,s|=f.subtreeFlags,s|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=s,e.childLanes=i,n}function n0(e,n,i){var s=n.pendingProps;switch(dl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(n),null;case 1:return _t(n.type)&&sa(),xt(n),null;case 3:return s=n.stateNode,Gr(),He(Ot),He(bt),Tl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(da(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zt!==null&&(eu(Zt),Zt=null))),$l(e,n),xt(n),null;case 5:Pl(n);var f=gr(Zo.current);if(i=n.type,e!==null&&n.stateNode!=null)rp(e,n,i,s,f),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(o(166));return xt(n),null}if(e=gr(dn.current),da(n)){s=n.stateNode,i=n.type;var h=n.memoizedProps;switch(s[fn]=n,s[Ko]=h,e=(n.mode&1)!==0,i){case"dialog":qe("cancel",s),qe("close",s);break;case"iframe":case"object":case"embed":qe("load",s);break;case"video":case"audio":for(f=0;f<qo.length;f++)qe(qo[f],s);break;case"source":qe("error",s);break;case"img":case"image":case"link":qe("error",s),qe("load",s);break;case"details":qe("toggle",s);break;case"input":ko(s,h),qe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!h.multiple},qe("invalid",s);break;case"textarea":Ar(s,h),qe("invalid",s)}le(i,h),f=null;for(var y in h)if(h.hasOwnProperty(y)){var P=h[y];y==="children"?typeof P=="string"?s.textContent!==P&&(h.suppressHydrationWarning!==!0&&oa(s.textContent,P,e),f=["children",P]):typeof P=="number"&&s.textContent!==""+P&&(h.suppressHydrationWarning!==!0&&oa(s.textContent,P,e),f=["children",""+P]):l.hasOwnProperty(y)&&P!=null&&y==="onScroll"&&qe("scroll",s)}switch(i){case"input":tt(s),lr(s,h,!0);break;case"textarea":tt(s),Y(s);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(s.onclick=ia)}s=f,n.updateQueue=s,s!==null&&(n.flags|=4)}else{y=f.nodeType===9?f:f.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=L(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=y.createElement(i,{is:s.is}):(e=y.createElement(i),i==="select"&&(y=e,s.multiple?y.multiple=!0:s.size&&(y.size=s.size))):e=y.createElementNS(e,i),e[fn]=n,e[Ko]=s,np(e,n,!1,!1),n.stateNode=e;e:{switch(y=Ce(i,s),i){case"dialog":qe("cancel",e),qe("close",e),f=s;break;case"iframe":case"object":case"embed":qe("load",e),f=s;break;case"video":case"audio":for(f=0;f<qo.length;f++)qe(qo[f],e);f=s;break;case"source":qe("error",e),f=s;break;case"img":case"image":case"link":qe("error",e),qe("load",e),f=s;break;case"details":qe("toggle",e),f=s;break;case"input":ko(e,s),f=xo(e,s),qe("invalid",e);break;case"option":f=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},f=q({},s,{value:void 0}),qe("invalid",e);break;case"textarea":Ar(e,s),f=In(e,s),qe("invalid",e);break;default:f=s}le(i,f),P=f;for(h in P)if(P.hasOwnProperty(h)){var T=P[h];h==="style"?de(e,T):h==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&Se(e,T)):h==="children"?typeof T=="string"?(i!=="textarea"||T!=="")&&Pe(e,T):typeof T=="number"&&Pe(e,""+T):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?T!=null&&h==="onScroll"&&qe("scroll",e):T!=null&&U(e,h,T,y))}switch(i){case"input":tt(e),lr(e,s,!1);break;case"textarea":tt(e),Y(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Te(s.value));break;case"select":e.multiple=!!s.multiple,h=s.value,h!=null?ln(e,!!s.multiple,h,!1):s.defaultValue!=null&&ln(e,!!s.multiple,s.defaultValue,!0);break;default:typeof f.onClick=="function"&&(e.onclick=ia)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return xt(n),null;case 6:if(e&&n.stateNode!=null)op(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(o(166));if(i=gr(Zo.current),gr(dn.current),da(n)){if(s=n.stateNode,i=n.memoizedProps,s[fn]=n,(h=s.nodeValue!==i)&&(e=zt,e!==null))switch(e.tag){case 3:oa(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oa(s.nodeValue,i,(e.mode&1)!==0)}h&&(n.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[fn]=n,n.stateNode=s}return xt(n),null;case 13:if(He(Ye),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ge&&jt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)sd(),qr(),n.flags|=98560,h=!1;else if(h=da(n),s!==null&&s.dehydrated!==null){if(e===null){if(!h)throw Error(o(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(o(317));h[fn]=n}else qr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;xt(n),h=!1}else Zt!==null&&(eu(Zt),Zt=null),h=!0;if(!h)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ye.current&1)!==0?ft===0&&(ft=3):ru())),n.updateQueue!==null&&(n.flags|=4),xt(n),null);case 4:return Gr(),$l(e,n),e===null&&Ho(n.stateNode.containerInfo),xt(n),null;case 10:return vl(n.type._context),xt(n),null;case 17:return _t(n.type)&&sa(),xt(n),null;case 19:if(He(Ye),h=n.memoizedState,h===null)return xt(n),null;if(s=(n.flags&128)!==0,y=h.rendering,y===null)if(s)ri(h,!1);else{if(ft!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(y=va(e),y!==null){for(n.flags|=128,ri(h,!1),s=y.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=i,i=n.child;i!==null;)h=i,e=s,h.flags&=14680066,y=h.alternate,y===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=y.childLanes,h.lanes=y.lanes,h.child=y.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=y.memoizedProps,h.memoizedState=y.memoizedState,h.updateQueue=y.updateQueue,h.type=y.type,e=y.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return $e(Ye,Ye.current&1|2),n.child}e=e.sibling}h.tail!==null&&ot()>Zr&&(n.flags|=128,s=!0,ri(h,!1),n.lanes=4194304)}else{if(!s)if(e=va(y),e!==null){if(n.flags|=128,s=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),ri(h,!0),h.tail===null&&h.tailMode==="hidden"&&!y.alternate&&!Ge)return xt(n),null}else 2*ot()-h.renderingStartTime>Zr&&i!==1073741824&&(n.flags|=128,s=!0,ri(h,!1),n.lanes=4194304);h.isBackwards?(y.sibling=n.child,n.child=y):(i=h.last,i!==null?i.sibling=y:n.child=y,h.last=y)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=ot(),n.sibling=null,i=Ye.current,$e(Ye,s?i&1|2:i&1),n):(xt(n),null);case 22:case 23:return nu(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&(n.mode&1)!==0?(It&1073741824)!==0&&(xt(n),n.subtreeFlags&6&&(n.flags|=8192)):xt(n),null;case 24:return null;case 25:return null}throw Error(o(156,n.tag))}function r0(e,n){switch(dl(n),n.tag){case 1:return _t(n.type)&&sa(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gr(),He(Ot),He(bt),Tl(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Pl(n),null;case 13:if(He(Ye),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));qr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return He(Ye),null;case 4:return Gr(),null;case 10:return vl(n.type._context),null;case 22:case 23:return nu(),null;case 24:return null;default:return null}}var Ea=!1,kt=!1,o0=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Yr(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){nt(e,n,s)}else i.current=null}function ql(e,n,i){try{i()}catch(s){nt(e,n,s)}}var ip=!1;function i0(e,n){if(rl=Ki,e=If(),Xs(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var f=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var y=0,P=-1,T=-1,I=0,X=0,Z=e,G=null;t:for(;;){for(var se;Z!==i||f!==0&&Z.nodeType!==3||(P=y+f),Z!==h||s!==0&&Z.nodeType!==3||(T=y+s),Z.nodeType===3&&(y+=Z.nodeValue.length),(se=Z.firstChild)!==null;)G=Z,Z=se;for(;;){if(Z===e)break t;if(G===i&&++I===f&&(P=y),G===h&&++X===s&&(T=y),(se=Z.nextSibling)!==null)break;Z=G,G=Z.parentNode}Z=se}i=P===-1||T===-1?null:{start:P,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(ol={focusedElem:e,selectionRange:i},Ki=!1,ue=n;ue!==null;)if(n=ue,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ue=e;else for(;ue!==null;){n=ue;try{var fe=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var pe=fe.memoizedProps,it=fe.memoizedState,A=n.stateNode,E=A.getSnapshotBeforeUpdate(n.elementType===n.type?pe:Jt(n.type,pe),it);A.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var D=n.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(re){nt(n,n.return,re)}if(e=n.sibling,e!==null){e.return=n.return,ue=e;break}ue=n.return}return fe=ip,ip=!1,fe}function oi(e,n,i){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var f=s=s.next;do{if((f.tag&e)===e){var h=f.destroy;f.destroy=void 0,h!==void 0&&ql(n,i,h)}f=f.next}while(f!==s)}}function Oa(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==n)}}function Hl(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function ap(e){var n=e.alternate;n!==null&&(e.alternate=null,ap(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[fn],delete n[Ko],delete n[ll],delete n[Bv],delete n[Uv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sp(e){return e.tag===5||e.tag===3||e.tag===4}function lp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wl(e,n,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=ia));else if(s!==4&&(e=e.child,e!==null))for(Wl(e,n,i),e=e.sibling;e!==null;)Wl(e,n,i),e=e.sibling}function Kl(e,n,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Kl(e,n,i),e=e.sibling;e!==null;)Kl(e,n,i),e=e.sibling}var gt=null,en=!1;function Yn(e,n,i){for(i=i.child;i!==null;)up(e,n,i),i=i.sibling}function up(e,n,i){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Bi,i)}catch{}switch(i.tag){case 5:kt||Yr(i,n);case 6:var s=gt,f=en;gt=null,Yn(e,n,i),gt=s,en=f,gt!==null&&(en?(e=gt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):gt.removeChild(i.stateNode));break;case 18:gt!==null&&(en?(e=gt,i=i.stateNode,e.nodeType===8?sl(e.parentNode,i):e.nodeType===1&&sl(e,i),jo(e)):sl(gt,i.stateNode));break;case 4:s=gt,f=en,gt=i.stateNode.containerInfo,en=!0,Yn(e,n,i),gt=s,en=f;break;case 0:case 11:case 14:case 15:if(!kt&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){f=s=s.next;do{var h=f,y=h.destroy;h=h.tag,y!==void 0&&((h&2)!==0||(h&4)!==0)&&ql(i,n,y),f=f.next}while(f!==s)}Yn(e,n,i);break;case 1:if(!kt&&(Yr(i,n),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(P){nt(i,n,P)}Yn(e,n,i);break;case 21:Yn(e,n,i);break;case 22:i.mode&1?(kt=(s=kt)||i.memoizedState!==null,Yn(e,n,i),kt=s):Yn(e,n,i);break;default:Yn(e,n,i)}}function cp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new o0),n.forEach(function(s){var f=h0.bind(null,e,s);i.has(s)||(i.add(s),s.then(f,f))})}}function tn(e,n){var i=n.deletions;if(i!==null)for(var s=0;s<i.length;s++){var f=i[s];try{var h=e,y=n,P=y;e:for(;P!==null;){switch(P.tag){case 5:gt=P.stateNode,en=!1;break e;case 3:gt=P.stateNode.containerInfo,en=!0;break e;case 4:gt=P.stateNode.containerInfo,en=!0;break e}P=P.return}if(gt===null)throw Error(o(160));up(h,y,f),gt=null,en=!1;var T=f.alternate;T!==null&&(T.return=null),f.return=null}catch(I){nt(f,n,I)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)fp(n,e),n=n.sibling}function fp(e,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tn(n,e),hn(e),s&4){try{oi(3,e,e.return),Oa(3,e)}catch(pe){nt(e,e.return,pe)}try{oi(5,e,e.return)}catch(pe){nt(e,e.return,pe)}}break;case 1:tn(n,e),hn(e),s&512&&i!==null&&Yr(i,i.return);break;case 5:if(tn(n,e),hn(e),s&512&&i!==null&&Yr(i,i.return),e.flags&32){var f=e.stateNode;try{Pe(f,"")}catch(pe){nt(e,e.return,pe)}}if(s&4&&(f=e.stateNode,f!=null)){var h=e.memoizedProps,y=i!==null?i.memoizedProps:h,P=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{P==="input"&&h.type==="radio"&&h.name!=null&&Po(f,h),Ce(P,y);var I=Ce(P,h);for(y=0;y<T.length;y+=2){var X=T[y],Z=T[y+1];X==="style"?de(f,Z):X==="dangerouslySetInnerHTML"?Se(f,Z):X==="children"?Pe(f,Z):U(f,X,Z,I)}switch(P){case"input":So(f,h);break;case"textarea":Ii(f,h);break;case"select":var G=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var se=h.value;se!=null?ln(f,!!h.multiple,se,!1):G!==!!h.multiple&&(h.defaultValue!=null?ln(f,!!h.multiple,h.defaultValue,!0):ln(f,!!h.multiple,h.multiple?[]:"",!1))}f[Ko]=h}catch(pe){nt(e,e.return,pe)}}break;case 6:if(tn(n,e),hn(e),s&4){if(e.stateNode===null)throw Error(o(162));f=e.stateNode,h=e.memoizedProps;try{f.nodeValue=h}catch(pe){nt(e,e.return,pe)}}break;case 3:if(tn(n,e),hn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{jo(n.containerInfo)}catch(pe){nt(e,e.return,pe)}break;case 4:tn(n,e),hn(e);break;case 13:tn(n,e),hn(e),f=e.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(Yl=ot())),s&4&&cp(e);break;case 22:if(X=i!==null&&i.memoizedState!==null,e.mode&1?(kt=(I=kt)||X,tn(n,e),kt=I):tn(n,e),hn(e),s&8192){if(I=e.memoizedState!==null,(e.stateNode.isHidden=I)&&!X&&(e.mode&1)!==0)for(ue=e,X=e.child;X!==null;){for(Z=ue=X;ue!==null;){switch(G=ue,se=G.child,G.tag){case 0:case 11:case 14:case 15:oi(4,G,G.return);break;case 1:Yr(G,G.return);var fe=G.stateNode;if(typeof fe.componentWillUnmount=="function"){s=G,i=G.return;try{n=s,fe.props=n.memoizedProps,fe.state=n.memoizedState,fe.componentWillUnmount()}catch(pe){nt(s,i,pe)}}break;case 5:Yr(G,G.return);break;case 22:if(G.memoizedState!==null){hp(Z);continue}}se!==null?(se.return=G,ue=se):hp(Z)}X=X.sibling}e:for(X=null,Z=e;;){if(Z.tag===5){if(X===null){X=Z;try{f=Z.stateNode,I?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(P=Z.stateNode,T=Z.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null,P.style.display=W("display",y))}catch(pe){nt(e,e.return,pe)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=I?"":Z.memoizedProps}catch(pe){nt(e,e.return,pe)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===e)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===e)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===e)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:tn(n,e),hn(e),s&4&&cp(e);break;case 21:break;default:tn(n,e),hn(e)}}function hn(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(sp(i)){var s=i;break e}i=i.return}throw Error(o(160))}switch(s.tag){case 5:var f=s.stateNode;s.flags&32&&(Pe(f,""),s.flags&=-33);var h=lp(e);Kl(e,h,f);break;case 3:case 4:var y=s.stateNode.containerInfo,P=lp(e);Wl(e,P,y);break;default:throw Error(o(161))}}catch(T){nt(e,e.return,T)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function a0(e,n,i){ue=e,dp(e)}function dp(e,n,i){for(var s=(e.mode&1)!==0;ue!==null;){var f=ue,h=f.child;if(f.tag===22&&s){var y=f.memoizedState!==null||Ea;if(!y){var P=f.alternate,T=P!==null&&P.memoizedState!==null||kt;P=Ea;var I=kt;if(Ea=y,(kt=T)&&!I)for(ue=f;ue!==null;)y=ue,T=y.child,y.tag===22&&y.memoizedState!==null?mp(f):T!==null?(T.return=y,ue=T):mp(f);for(;h!==null;)ue=h,dp(h),h=h.sibling;ue=f,Ea=P,kt=I}pp(e)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,ue=h):pp(e)}}function pp(e){for(;ue!==null;){var n=ue;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:kt||Oa(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!kt)if(i===null)s.componentDidMount();else{var f=n.elementType===n.type?i.memoizedProps:Jt(n.type,i.memoizedProps);s.componentDidUpdate(f,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&hd(n,h,s);break;case 3:var y=n.updateQueue;if(y!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}hd(n,y,i)}break;case 5:var P=n.stateNode;if(i===null&&n.flags&4){i=P;var T=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&i.focus();break;case"img":T.src&&(i.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var I=n.alternate;if(I!==null){var X=I.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&jo(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}kt||n.flags&512&&Hl(n)}catch(G){nt(n,n.return,G)}}if(n===e){ue=null;break}if(i=n.sibling,i!==null){i.return=n.return,ue=i;break}ue=n.return}}function hp(e){for(;ue!==null;){var n=ue;if(n===e){ue=null;break}var i=n.sibling;if(i!==null){i.return=n.return,ue=i;break}ue=n.return}}function mp(e){for(;ue!==null;){var n=ue;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Oa(4,n)}catch(T){nt(n,i,T)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var f=n.return;try{s.componentDidMount()}catch(T){nt(n,f,T)}}var h=n.return;try{Hl(n)}catch(T){nt(n,h,T)}break;case 5:var y=n.return;try{Hl(n)}catch(T){nt(n,y,T)}}}catch(T){nt(n,n.return,T)}if(n===e){ue=null;break}var P=n.sibling;if(P!==null){P.return=n.return,ue=P;break}ue=n.return}}var s0=Math.ceil,_a=te.ReactCurrentDispatcher,Gl=te.ReactCurrentOwner,Ht=te.ReactCurrentBatchConfig,Me=0,ht=null,st=null,yt=0,It=0,Qr=Hn(0),ft=0,ii=null,vr=0,Aa=0,Xl=0,ai=null,Rt=null,Yl=0,Zr=1/0,On=null,Ra=!1,Ql=null,Qn=null,Da=!1,Zn=null,Ma=0,si=0,Zl=null,La=-1,za=0;function Et(){return(Me&6)!==0?ot():La!==-1?La:La=ot()}function Jn(e){return(e.mode&1)===0?1:(Me&2)!==0&&yt!==0?yt&-yt:qv.transition!==null?(za===0&&(za=lf()),za):(e=Ve,e!==0||(e=window.event,e=e===void 0?16:yf(e.type)),e)}function nn(e,n,i,s){if(50<si)throw si=0,Zl=null,Error(o(185));Ro(e,i,s),((Me&2)===0||e!==ht)&&(e===ht&&((Me&2)===0&&(Aa|=i),ft===4&&er(e,yt)),Dt(e,s),i===1&&Me===0&&(n.mode&1)===0&&(Zr=ot()+500,ua&&Kn()))}function Dt(e,n){var i=e.callbackNode;qy(e,n);var s=qi(e,e===ht?yt:0);if(s===0)i!==null&&of(i),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(i!=null&&of(i),n===1)e.tag===0?$v(yp.bind(null,e)):nd(yp.bind(null,e)),Nv(function(){(Me&6)===0&&Kn()}),i=null;else{switch(uf(s)){case 1:i=Ds;break;case 4:i=af;break;case 16:i=Fi;break;case 536870912:i=sf;break;default:i=Fi}i=Tp(i,gp.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function gp(e,n){if(La=-1,za=0,(Me&6)!==0)throw Error(o(327));var i=e.callbackNode;if(Jr()&&e.callbackNode!==i)return null;var s=qi(e,e===ht?yt:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||n)n=ja(e,s);else{n=s;var f=Me;Me|=2;var h=bp();(ht!==e||yt!==n)&&(On=null,Zr=ot()+500,wr(e,n));do try{c0();break}catch(P){vp(e,P)}while(!0);yl(),_a.current=h,Me=f,st!==null?n=0:(ht=null,yt=0,n=ft)}if(n!==0){if(n===2&&(f=Ms(e),f!==0&&(s=f,n=Jl(e,f))),n===1)throw i=ii,wr(e,0),er(e,s),Dt(e,ot()),i;if(n===6)er(e,s);else{if(f=e.current.alternate,(s&30)===0&&!l0(f)&&(n=ja(e,s),n===2&&(h=Ms(e),h!==0&&(s=h,n=Jl(e,h))),n===1))throw i=ii,wr(e,0),er(e,s),Dt(e,ot()),i;switch(e.finishedWork=f,e.finishedLanes=s,n){case 0:case 1:throw Error(o(345));case 2:xr(e,Rt,On);break;case 3:if(er(e,s),(s&130023424)===s&&(n=Yl+500-ot(),10<n)){if(qi(e,0)!==0)break;if(f=e.suspendedLanes,(f&s)!==s){Et(),e.pingedLanes|=e.suspendedLanes&f;break}e.timeoutHandle=al(xr.bind(null,e,Rt,On),n);break}xr(e,Rt,On);break;case 4:if(er(e,s),(s&4194240)===s)break;for(n=e.eventTimes,f=-1;0<s;){var y=31-Yt(s);h=1<<y,y=n[y],y>f&&(f=y),s&=~h}if(s=f,s=ot()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*s0(s/1960))-s,10<s){e.timeoutHandle=al(xr.bind(null,e,Rt,On),s);break}xr(e,Rt,On);break;case 5:xr(e,Rt,On);break;default:throw Error(o(329))}}}return Dt(e,ot()),e.callbackNode===i?gp.bind(null,e):null}function Jl(e,n){var i=ai;return e.current.memoizedState.isDehydrated&&(wr(e,n).flags|=256),e=ja(e,n),e!==2&&(n=Rt,Rt=i,n!==null&&eu(n)),e}function eu(e){Rt===null?Rt=e:Rt.push.apply(Rt,e)}function l0(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var f=i[s],h=f.getSnapshot;f=f.value;try{if(!Qt(h(),f))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function er(e,n){for(n&=~Xl,n&=~Aa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-Yt(n),s=1<<i;e[i]=-1,n&=~s}}function yp(e){if((Me&6)!==0)throw Error(o(327));Jr();var n=qi(e,0);if((n&1)===0)return Dt(e,ot()),null;var i=ja(e,n);if(e.tag!==0&&i===2){var s=Ms(e);s!==0&&(n=s,i=Jl(e,s))}if(i===1)throw i=ii,wr(e,0),er(e,n),Dt(e,ot()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,xr(e,Rt,On),Dt(e,ot()),null}function tu(e,n){var i=Me;Me|=1;try{return e(n)}finally{Me=i,Me===0&&(Zr=ot()+500,ua&&Kn())}}function br(e){Zn!==null&&Zn.tag===0&&(Me&6)===0&&Jr();var n=Me;Me|=1;var i=Ht.transition,s=Ve;try{if(Ht.transition=null,Ve=1,e)return e()}finally{Ve=s,Ht.transition=i,Me=n,(Me&6)===0&&Kn()}}function nu(){It=Qr.current,He(Qr)}function wr(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Vv(i)),st!==null)for(i=st.return;i!==null;){var s=i;switch(dl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&sa();break;case 3:Gr(),He(Ot),He(bt),Tl();break;case 5:Pl(s);break;case 4:Gr();break;case 13:He(Ye);break;case 19:He(Ye);break;case 10:vl(s.type._context);break;case 22:case 23:nu()}i=i.return}if(ht=e,st=e=tr(e.current,null),yt=It=n,ft=0,ii=null,Xl=Aa=vr=0,Rt=ai=null,mr!==null){for(n=0;n<mr.length;n++)if(i=mr[n],s=i.interleaved,s!==null){i.interleaved=null;var f=s.next,h=i.pending;if(h!==null){var y=h.next;h.next=f,s.next=y}i.pending=s}mr=null}return e}function vp(e,n){do{var i=st;try{if(yl(),ba.current=Pa,wa){for(var s=Qe.memoizedState;s!==null;){var f=s.queue;f!==null&&(f.pending=null),s=s.next}wa=!1}if(yr=0,pt=ct=Qe=null,Jo=!1,ei=0,Gl.current=null,i===null||i.return===null){ft=1,ii=n,st=null;break}e:{var h=e,y=i.return,P=i,T=n;if(n=yt,P.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var I=T,X=P,Z=X.tag;if((X.mode&1)===0&&(Z===0||Z===11||Z===15)){var G=X.alternate;G?(X.updateQueue=G.updateQueue,X.memoizedState=G.memoizedState,X.lanes=G.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=$d(y);if(se!==null){se.flags&=-257,qd(se,y,P,h,n),se.mode&1&&Ud(h,I,n),n=se,T=I;var fe=n.updateQueue;if(fe===null){var pe=new Set;pe.add(T),n.updateQueue=pe}else fe.add(T);break e}else{if((n&1)===0){Ud(h,I,n),ru();break e}T=Error(o(426))}}else if(Ge&&P.mode&1){var it=$d(y);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),qd(it,y,P,h,n),ml(Xr(T,P));break e}}h=T=Xr(T,P),ft!==4&&(ft=2),ai===null?ai=[h]:ai.push(h),h=y;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var A=Fd(h,T,n);pd(h,A);break e;case 1:P=T;var E=h.type,D=h.stateNode;if((h.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(Qn===null||!Qn.has(D)))){h.flags|=65536,n&=-n,h.lanes|=n;var re=Bd(h,P,n);pd(h,re);break e}}h=h.return}while(h!==null)}xp(i)}catch(he){n=he,st===i&&i!==null&&(st=i=i.return);continue}break}while(!0)}function bp(){var e=_a.current;return _a.current=Pa,e===null?Pa:e}function ru(){(ft===0||ft===3||ft===2)&&(ft=4),ht===null||(vr&268435455)===0&&(Aa&268435455)===0||er(ht,yt)}function ja(e,n){var i=Me;Me|=2;var s=bp();(ht!==e||yt!==n)&&(On=null,wr(e,n));do try{u0();break}catch(f){vp(e,f)}while(!0);if(yl(),Me=i,_a.current=s,st!==null)throw Error(o(261));return ht=null,yt=0,ft}function u0(){for(;st!==null;)wp(st)}function c0(){for(;st!==null&&!zy();)wp(st)}function wp(e){var n=Sp(e.alternate,e,It);e.memoizedProps=e.pendingProps,n===null?xp(e):st=n,Gl.current=null}function xp(e){var n=e;do{var i=n.alternate;if(e=n.return,(n.flags&32768)===0){if(i=n0(i,n,It),i!==null){st=i;return}}else{if(i=r0(i,n),i!==null){i.flags&=32767,st=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ft=6,st=null;return}}if(n=n.sibling,n!==null){st=n;return}st=n=e}while(n!==null);ft===0&&(ft=5)}function xr(e,n,i){var s=Ve,f=Ht.transition;try{Ht.transition=null,Ve=1,f0(e,n,i,s)}finally{Ht.transition=f,Ve=s}return null}function f0(e,n,i,s){do Jr();while(Zn!==null);if((Me&6)!==0)throw Error(o(327));i=e.finishedWork;var f=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var h=i.lanes|i.childLanes;if(Hy(e,h),e===ht&&(st=ht=null,yt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Da||(Da=!0,Tp(Fi,function(){return Jr(),null})),h=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||h){h=Ht.transition,Ht.transition=null;var y=Ve;Ve=1;var P=Me;Me|=4,Gl.current=null,i0(e,i),fp(i,e),Rv(ol),Ki=!!rl,ol=rl=null,e.current=i,a0(i),jy(),Me=P,Ve=y,Ht.transition=h}else e.current=i;if(Da&&(Da=!1,Zn=e,Ma=f),h=e.pendingLanes,h===0&&(Qn=null),Ny(i.stateNode),Dt(e,ot()),n!==null)for(s=e.onRecoverableError,i=0;i<n.length;i++)f=n[i],s(f.value,{componentStack:f.stack,digest:f.digest});if(Ra)throw Ra=!1,e=Ql,Ql=null,e;return(Ma&1)!==0&&e.tag!==0&&Jr(),h=e.pendingLanes,(h&1)!==0?e===Zl?si++:(si=0,Zl=e):si=0,Kn(),null}function Jr(){if(Zn!==null){var e=uf(Ma),n=Ht.transition,i=Ve;try{if(Ht.transition=null,Ve=16>e?16:e,Zn===null)var s=!1;else{if(e=Zn,Zn=null,Ma=0,(Me&6)!==0)throw Error(o(331));var f=Me;for(Me|=4,ue=e.current;ue!==null;){var h=ue,y=h.child;if((ue.flags&16)!==0){var P=h.deletions;if(P!==null){for(var T=0;T<P.length;T++){var I=P[T];for(ue=I;ue!==null;){var X=ue;switch(X.tag){case 0:case 11:case 15:oi(8,X,h)}var Z=X.child;if(Z!==null)Z.return=X,ue=Z;else for(;ue!==null;){X=ue;var G=X.sibling,se=X.return;if(ap(X),X===I){ue=null;break}if(G!==null){G.return=se,ue=G;break}ue=se}}}var fe=h.alternate;if(fe!==null){var pe=fe.child;if(pe!==null){fe.child=null;do{var it=pe.sibling;pe.sibling=null,pe=it}while(pe!==null)}}ue=h}}if((h.subtreeFlags&2064)!==0&&y!==null)y.return=h,ue=y;else e:for(;ue!==null;){if(h=ue,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:oi(9,h,h.return)}var A=h.sibling;if(A!==null){A.return=h.return,ue=A;break e}ue=h.return}}var E=e.current;for(ue=E;ue!==null;){y=ue;var D=y.child;if((y.subtreeFlags&2064)!==0&&D!==null)D.return=y,ue=D;else e:for(y=E;ue!==null;){if(P=ue,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:Oa(9,P)}}catch(he){nt(P,P.return,he)}if(P===y){ue=null;break e}var re=P.sibling;if(re!==null){re.return=P.return,ue=re;break e}ue=P.return}}if(Me=f,Kn(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Bi,e)}catch{}s=!0}return s}finally{Ve=i,Ht.transition=n}}return!1}function kp(e,n,i){n=Xr(i,n),n=Fd(e,n,1),e=Xn(e,n,1),n=Et(),e!==null&&(Ro(e,1,n),Dt(e,n))}function nt(e,n,i){if(e.tag===3)kp(e,e,i);else for(;n!==null;){if(n.tag===3){kp(n,e,i);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Qn===null||!Qn.has(s))){e=Xr(i,e),e=Bd(n,e,1),n=Xn(n,e,1),e=Et(),n!==null&&(Ro(n,1,e),Dt(n,e));break}}n=n.return}}function d0(e,n,i){var s=e.pingCache;s!==null&&s.delete(n),n=Et(),e.pingedLanes|=e.suspendedLanes&i,ht===e&&(yt&i)===i&&(ft===4||ft===3&&(yt&130023424)===yt&&500>ot()-Yl?wr(e,0):Xl|=i),Dt(e,n)}function Pp(e,n){n===0&&((e.mode&1)===0?n=1:(n=$i,$i<<=1,($i&130023424)===0&&($i=4194304)));var i=Et();e=Tn(e,n),e!==null&&(Ro(e,n,i),Dt(e,i))}function p0(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Pp(e,i)}function h0(e,n){var i=0;switch(e.tag){case 13:var s=e.stateNode,f=e.memoizedState;f!==null&&(i=f.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(n),Pp(e,i)}var Sp;Sp=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ot.current)At=!0;else{if((e.lanes&i)===0&&(n.flags&128)===0)return At=!1,t0(e,n,i);At=(e.flags&131072)!==0}else At=!1,Ge&&(n.flags&1048576)!==0&&rd(n,fa,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;Ca(e,n),e=n.pendingProps;var f=Br(n,bt.current);Kr(n,i),f=Ol(null,n,s,e,f,i);var h=_l();return n.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,_t(s)?(h=!0,la(n)):h=!1,n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,xl(n),f.updater=Sa,n.stateNode=f,f._reactInternals=n,zl(n,s,e,i),n=Vl(null,n,s,!0,h,i)):(n.tag=0,Ge&&h&&fl(n),Ct(null,n,f,i),n=n.child),n;case 16:s=n.elementType;e:{switch(Ca(e,n),e=n.pendingProps,f=s._init,s=f(s._payload),n.type=s,f=n.tag=g0(s),e=Jt(s,e),f){case 0:n=Il(null,n,s,e,i);break e;case 1:n=Yd(null,n,s,e,i);break e;case 11:n=Hd(null,n,s,e,i);break e;case 14:n=Wd(null,n,s,Jt(s.type,e),i);break e}throw Error(o(306,s,""))}return n;case 0:return s=n.type,f=n.pendingProps,f=n.elementType===s?f:Jt(s,f),Il(e,n,s,f,i);case 1:return s=n.type,f=n.pendingProps,f=n.elementType===s?f:Jt(s,f),Yd(e,n,s,f,i);case 3:e:{if(Qd(n),e===null)throw Error(o(387));s=n.pendingProps,h=n.memoizedState,f=h.element,dd(e,n),ya(n,s,null,i);var y=n.memoizedState;if(s=y.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){f=Xr(Error(o(423)),n),n=Zd(e,n,s,i,f);break e}else if(s!==f){f=Xr(Error(o(424)),n),n=Zd(e,n,s,i,f);break e}else for(jt=qn(n.stateNode.containerInfo.firstChild),zt=n,Ge=!0,Zt=null,i=cd(n,null,s,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(qr(),s===f){n=En(e,n,i);break e}Ct(e,n,s,i)}n=n.child}return n;case 5:return md(n),e===null&&hl(n),s=n.type,f=n.pendingProps,h=e!==null?e.memoizedProps:null,y=f.children,il(s,f)?y=null:h!==null&&il(s,h)&&(n.flags|=32),Xd(e,n),Ct(e,n,y,i),n.child;case 6:return e===null&&hl(n),null;case 13:return Jd(e,n,i);case 4:return kl(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Hr(n,null,s,i):Ct(e,n,s,i),n.child;case 11:return s=n.type,f=n.pendingProps,f=n.elementType===s?f:Jt(s,f),Hd(e,n,s,f,i);case 7:return Ct(e,n,n.pendingProps,i),n.child;case 8:return Ct(e,n,n.pendingProps.children,i),n.child;case 12:return Ct(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(s=n.type._context,f=n.pendingProps,h=n.memoizedProps,y=f.value,$e(ha,s._currentValue),s._currentValue=y,h!==null)if(Qt(h.value,y)){if(h.children===f.children&&!Ot.current){n=En(e,n,i);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var P=h.dependencies;if(P!==null){y=h.child;for(var T=P.firstContext;T!==null;){if(T.context===s){if(h.tag===1){T=Cn(-1,i&-i),T.tag=2;var I=h.updateQueue;if(I!==null){I=I.shared;var X=I.pending;X===null?T.next=T:(T.next=X.next,X.next=T),I.pending=T}}h.lanes|=i,T=h.alternate,T!==null&&(T.lanes|=i),bl(h.return,i,n),P.lanes|=i;break}T=T.next}}else if(h.tag===10)y=h.type===n.type?null:h.child;else if(h.tag===18){if(y=h.return,y===null)throw Error(o(341));y.lanes|=i,P=y.alternate,P!==null&&(P.lanes|=i),bl(y,i,n),y=h.sibling}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===n){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}Ct(e,n,f.children,i),n=n.child}return n;case 9:return f=n.type,s=n.pendingProps.children,Kr(n,i),f=$t(f),s=s(f),n.flags|=1,Ct(e,n,s,i),n.child;case 14:return s=n.type,f=Jt(s,n.pendingProps),f=Jt(s.type,f),Wd(e,n,s,f,i);case 15:return Kd(e,n,n.type,n.pendingProps,i);case 17:return s=n.type,f=n.pendingProps,f=n.elementType===s?f:Jt(s,f),Ca(e,n),n.tag=1,_t(s)?(e=!0,la(n)):e=!1,Kr(n,i),Vd(n,s,f),zl(n,s,f,i),Vl(null,n,s,!0,e,i);case 19:return tp(e,n,i);case 22:return Gd(e,n,i)}throw Error(o(156,n.tag))};function Tp(e,n){return rf(e,n)}function m0(e,n,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,n,i,s){return new m0(e,n,i,s)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function g0(e){if(typeof e=="function")return ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ae)return 11;if(e===z)return 14}return 2}function tr(e,n){var i=e.alternate;return i===null?(i=Wt(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Ia(e,n,i,s,f,h){var y=2;if(s=e,typeof e=="function")ou(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case ie:return kr(i.children,f,h,n);case K:y=8,f|=8;break;case Q:return e=Wt(12,i,n,f|2),e.elementType=Q,e.lanes=h,e;case Le:return e=Wt(13,i,n,f),e.elementType=Le,e.lanes=h,e;case $:return e=Wt(19,i,n,f),e.elementType=$,e.lanes=h,e;case j:return Va(i,f,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ve:y=10;break e;case _e:y=9;break e;case Ae:y=11;break e;case z:y=14;break e;case N:y=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return n=Wt(y,i,n,f),n.elementType=e,n.type=s,n.lanes=h,n}function kr(e,n,i,s){return e=Wt(7,e,s,n),e.lanes=i,e}function Va(e,n,i,s){return e=Wt(22,e,s,n),e.elementType=j,e.lanes=i,e.stateNode={isHidden:!1},e}function iu(e,n,i){return e=Wt(6,e,null,n),e.lanes=i,e}function au(e,n,i){return n=Wt(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function y0(e,n,i,s,f){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ls(0),this.expirationTimes=Ls(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ls(0),this.identifierPrefix=s,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function su(e,n,i,s,f,h,y,P,T){return e=new y0(e,n,i,P,T),n===1?(n=1,h===!0&&(n|=8)):n=0,h=Wt(3,null,null,n),e.current=h,h.stateNode=e,h.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(h),e}function v0(e,n,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:s==null?null:""+s,children:e,containerInfo:n,implementation:i}}function Cp(e){if(!e)return Wn;e=e._reactInternals;e:{if(cr(e)!==e||e.tag!==1)throw Error(o(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(_t(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(_t(i))return ed(e,i,n)}return n}function Ep(e,n,i,s,f,h,y,P,T){return e=su(i,s,!0,e,f,h,y,P,T),e.context=Cp(null),i=e.current,s=Et(),f=Jn(i),h=Cn(s,f),h.callback=n??null,Xn(i,h,f),e.current.lanes=f,Ro(e,f,s),Dt(e,s),e}function Na(e,n,i,s){var f=n.current,h=Et(),y=Jn(f);return i=Cp(i),n.context===null?n.context=i:n.pendingContext=i,n=Cn(h,y),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Xn(f,n,y),e!==null&&(nn(e,f,y,h),ga(e,f,y)),y}function Fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Op(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function lu(e,n){Op(e,n),(e=e.alternate)&&Op(e,n)}function b0(){return null}var _p=typeof reportError=="function"?reportError:function(e){};function uu(e){this._internalRoot=e}Ba.prototype.render=uu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));Na(e,n,null,null)},Ba.prototype.unmount=uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;br(function(){Na(null,e,null,null)}),n[xn]=null}};function Ba(e){this._internalRoot=e}Ba.prototype.unstable_scheduleHydration=function(e){if(e){var n=df();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Bn.length&&n!==0&&n<Bn[i].priority;i++);Bn.splice(i,0,e),i===0&&mf(e)}};function cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function w0(e,n,i,s,f){if(f){if(typeof s=="function"){var h=s;s=function(){var I=Fa(y);h.call(I)}}var y=Ep(n,s,e,0,null,!1,!1,"",Ap);return e._reactRootContainer=y,e[xn]=y.current,Ho(e.nodeType===8?e.parentNode:e),br(),y}for(;f=e.lastChild;)e.removeChild(f);if(typeof s=="function"){var P=s;s=function(){var I=Fa(T);P.call(I)}}var T=su(e,0,!1,null,null,!1,!1,"",Ap);return e._reactRootContainer=T,e[xn]=T.current,Ho(e.nodeType===8?e.parentNode:e),br(function(){Na(n,T,i,s)}),T}function $a(e,n,i,s,f){var h=i._reactRootContainer;if(h){var y=h;if(typeof f=="function"){var P=f;f=function(){var T=Fa(y);P.call(T)}}Na(n,y,e,f)}else y=w0(i,n,e,f,s);return Fa(y)}cf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Ao(n.pendingLanes);i!==0&&(zs(n,i|1),Dt(n,ot()),(Me&6)===0&&(Zr=ot()+500,Kn()))}break;case 13:br(function(){var s=Tn(e,1);if(s!==null){var f=Et();nn(s,e,1,f)}}),lu(e,1)}},js=function(e){if(e.tag===13){var n=Tn(e,134217728);if(n!==null){var i=Et();nn(n,e,134217728,i)}lu(e,134217728)}},ff=function(e){if(e.tag===13){var n=Jn(e),i=Tn(e,n);if(i!==null){var s=Et();nn(i,e,n,s)}lu(e,n)}},df=function(){return Ve},pf=function(e,n){var i=Ve;try{return Ve=e,n()}finally{Ve=i}},Ie=function(e,n,i){switch(n){case"input":if(So(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var s=i[n];if(s!==e&&s.form===e.form){var f=aa(s);if(!f)throw Error(o(90));Tt(s),So(s,f)}}}break;case"textarea":Ii(e,i);break;case"select":n=i.value,n!=null&&ln(e,!!i.multiple,n,!1)}},ur=tu,Co=br;var x0={usingClientEntryPoint:!1,Events:[Go,Nr,aa,wn,un,tu]},li={findFiberByHostInstance:fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k0={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tf(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||b0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{Bi=qa.inject(k0),cn=qa}catch{}}return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0,Mt.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(n))throw Error(o(200));return v0(e,n,null,i)},Mt.createRoot=function(e,n){if(!cu(e))throw Error(o(299));var i=!1,s="",f=_p;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(f=n.onRecoverableError)),n=su(e,1,!1,null,null,i,!1,s,f),e[xn]=n.current,Ho(e.nodeType===8?e.parentNode:e),new uu(n)},Mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=tf(n),e=e===null?null:e.stateNode,e},Mt.flushSync=function(e){return br(e)},Mt.hydrate=function(e,n,i){if(!Ua(n))throw Error(o(200));return $a(null,e,n,!0,i)},Mt.hydrateRoot=function(e,n,i){if(!cu(e))throw Error(o(405));var s=i!=null&&i.hydratedSources||null,f=!1,h="",y=_p;if(i!=null&&(i.unstable_strictMode===!0&&(f=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),n=Ep(n,null,e,1,i??null,f,!1,h,y),e[xn]=n.current,Ho(e),s)for(e=0;e<s.length;e++)i=s[e],f=i._getVersion,f=f(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,f]:n.mutableSourceEagerHydrationData.push(i,f);return new Ba(n)},Mt.render=function(e,n,i){if(!Ua(n))throw Error(o(200));return $a(null,e,n,!1,i)},Mt.unmountComponentAtNode=function(e){if(!Ua(e))throw Error(o(40));return e._reactRootContainer?(br(function(){$a(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1},Mt.unstable_batchedUpdates=tu,Mt.unstable_renderSubtreeIntoContainer=function(e,n,i,s){if(!Ua(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return $a(e,n,i,!1,s)},Mt.version="18.3.1-next-f1338f8080-20240426",Mt}var Vp;function A0(){if(Vp)return pu.exports;Vp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch{}}return t(),pu.exports=_0(),pu.exports}var Np;function R0(){if(Np)return Ha;Np=1;var t=A0();return Ha.createRoot=t.createRoot,Ha.hydrateRoot=t.hydrateRoot,Ha}var LS=R0(),ci={},Fp;function D0(){if(Fp)return ci;Fp=1,Object.defineProperty(ci,"__esModule",{value:!0}),ci.parse=c,ci.serialize=m;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function c(v,w){const k=new u,x=v.length;if(x<2)return k;const S=w?.decode||g;let O=0;do{const M=v.indexOf("=",O);if(M===-1)break;const U=v.indexOf(";",O),te=U===-1?x:U;if(M>te){O=v.lastIndexOf(";",M-1)+1;continue}const B=d(v,O,M),ne=p(v,M,B),ie=v.slice(B,ne);if(k[ie]===void 0){let K=d(v,M+1,te),Q=p(v,te,K);const ve=S(v.slice(K,Q));k[ie]=ve}O=te+1}while(O<x);return k}function d(v,w,k){do{const x=v.charCodeAt(w);if(x!==32&&x!==9)return w}while(++w<k);return k}function p(v,w,k){for(;w>k;){const x=v.charCodeAt(--w);if(x!==32&&x!==9)return w+1}return k}function m(v,w,k){const x=k?.encode||encodeURIComponent;if(!t.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=x(w);if(!r.test(S))throw new TypeError(`argument val is invalid: ${w}`);let O=v+"="+S;if(!k)return O;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);O+="; Max-Age="+k.maxAge}if(k.domain){if(!o.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);O+="; Domain="+k.domain}if(k.path){if(!a.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);O+="; Path="+k.path}if(k.expires){if(!b(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);O+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(O+="; HttpOnly"),k.secure&&(O+="; Secure"),k.partitioned&&(O+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":O+="; Priority=Low";break;case"medium":O+="; Priority=Medium";break;case"high":O+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":O+="; SameSite=Strict";break;case"lax":O+="; SameSite=Lax";break;case"none":O+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return O}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function b(v){return l.call(v)==="[object Date]"}return ci}D0();/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bp="popstate";function M0(t={}){function r(a,l){let{pathname:u,search:c,hash:d}=a.location;return $u("",{pathname:u,search:c,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function o(a,l){return typeof l=="string"?l:Pi(l)}return z0(r,o,null,t)}function Je(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function yn(t,r){if(!t)try{throw new Error(r)}catch{}}function L0(){return Math.random().toString(36).substring(2,10)}function Up(t,r){return{usr:t.state,key:t.key,idx:r}}function $u(t,r,o=null,a){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?yo(r):r,state:o,key:r&&r.key||a||L0()}}function Pi({pathname:t="/",search:r="",hash:o=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function yo(t){let r={};if(t){let o=t.indexOf("#");o>=0&&(r.hash=t.substring(o),t=t.substring(0,o));let a=t.indexOf("?");a>=0&&(r.search=t.substring(a),t=t.substring(0,a)),t&&(r.pathname=t)}return r}function z0(t,r,o,a={}){let{window:l=document.defaultView,v5Compat:u=!1}=a,c=l.history,d="POP",p=null,m=g();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function g(){return(c.state||{idx:null}).idx}function b(){d="POP";let S=g(),O=S==null?null:S-m;m=S,p&&p({action:d,location:x.location,delta:O})}function v(S,O){d="PUSH";let M=$u(x.location,S,O);m=g()+1;let U=Up(M,m),te=x.createHref(M);try{c.pushState(U,"",te)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(te)}u&&p&&p({action:d,location:x.location,delta:1})}function w(S,O){d="REPLACE";let M=$u(x.location,S,O);m=g();let U=Up(M,m),te=x.createHref(M);c.replaceState(U,"",te),u&&p&&p({action:d,location:x.location,delta:0})}function k(S){let O=l.location.origin!=="null"?l.location.origin:l.location.href,M=typeof S=="string"?S:Pi(S);return M=M.replace(/ $/,"%20"),Je(O,`No window.location.(origin|href) available to create URL for href: ${M}`),new URL(M,O)}let x={get action(){return d},get location(){return t(l,c)},listen(S){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(Bp,b),p=S,()=>{l.removeEventListener(Bp,b),p=null}},createHref(S){return r(l,S)},createURL:k,encodeLocation(S){let O=k(S);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:v,replace:w,go(S){return c.go(S)}};return x}function Om(t,r,o="/"){return j0(t,r,o,!1)}function j0(t,r,o,a){let l=typeof r=="string"?yo(r):r,u=Ln(l.pathname||"/",o);if(u==null)return null;let c=_m(t);I0(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let m=G0(u);d=W0(c[p],m,a)}return d}function _m(t,r=[],o=[],a=""){let l=(u,c,d)=>{let p={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};p.relativePath.startsWith("/")&&(Je(p.relativePath.startsWith(a),`Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(a.length));let m=Rn([a,p.relativePath]),g=o.concat(p);u.children&&u.children.length>0&&(Je(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),_m(u.children,r,g,m)),!(u.path==null&&!u.index)&&r.push({path:m,score:q0(m,u.index),routesMeta:g})};return t.forEach((u,c)=>{if(u.path===""||!u.path?.includes("?"))l(u,c);else for(let d of Am(u.path))l(u,c,d)}),r}function Am(t){let r=t.split("/");if(r.length===0)return[];let[o,...a]=r,l=o.endsWith("?"),u=o.replace(/\?$/,"");if(a.length===0)return l?[u,""]:[u];let c=Am(a.join("/")),d=[];return d.push(...c.map(p=>p===""?u:[u,p].join("/"))),l&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function I0(t){t.sort((r,o)=>r.score!==o.score?o.score-r.score:H0(r.routesMeta.map(a=>a.childrenIndex),o.routesMeta.map(a=>a.childrenIndex)))}var V0=/^:[\w-]+$/,N0=3,F0=2,B0=1,U0=10,$0=-2,$p=t=>t==="*";function q0(t,r){let o=t.split("/"),a=o.length;return o.some($p)&&(a+=$0),r&&(a+=F0),o.filter(l=>!$p(l)).reduce((l,u)=>l+(V0.test(u)?N0:u===""?B0:U0),a)}function H0(t,r){return t.length===r.length&&t.slice(0,-1).every((a,l)=>a===r[l])?t[t.length-1]-r[r.length-1]:0}function W0(t,r,o=!1){let{routesMeta:a}=t,l={},u="/",c=[];for(let d=0;d<a.length;++d){let p=a[d],m=d===a.length-1,g=u==="/"?r:r.slice(u.length)||"/",b=as({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),v=p.route;if(!b&&m&&o&&!a[a.length-1].route.index&&(b=as({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!b)return null;Object.assign(l,b.params),c.push({params:l,pathname:Rn([u,b.pathname]),pathnameBase:Z0(Rn([u,b.pathnameBase])),route:v}),b.pathnameBase!=="/"&&(u=Rn([u,b.pathnameBase]))}return c}function as(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[o,a]=K0(t.path,t.caseSensitive,t.end),l=r.match(o);if(!l)return null;let u=l[0],c=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:b},v)=>{if(g==="*"){let k=d[v]||"";c=u.slice(0,u.length-k.length).replace(/(.)\/+$/,"$1")}const w=d[v];return b&&!w?m[g]=void 0:m[g]=(w||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:c,pattern:t}}function K0(t,r=!1,o=!0){yn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let a=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(a.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(a.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,r?void 0:"i"),a]}function G0(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return yn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function Ln(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,a=t.charAt(o);return a&&a!=="/"?null:t.slice(o)||"/"}function X0(t,r="/"){let{pathname:o,search:a="",hash:l=""}=typeof t=="string"?yo(t):t;return{pathname:o?o.startsWith("/")?o:Y0(o,r):r,search:J0(a),hash:e1(l)}}function Y0(t,r){let o=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?o.length>1&&o.pop():l!=="."&&o.push(l)}),o.length>1?o.join("/"):"/"}function gu(t,r,o,a){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Q0(t){return t.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function Rm(t){let r=Q0(t);return r.map((o,a)=>a===r.length-1?o.pathname:o.pathnameBase)}function Dm(t,r,o,a=!1){let l;typeof t=="string"?l=yo(t):(l={...t},Je(!l.pathname||!l.pathname.includes("?"),gu("?","pathname","search",l)),Je(!l.pathname||!l.pathname.includes("#"),gu("#","pathname","hash",l)),Je(!l.search||!l.search.includes("#"),gu("#","search","hash",l)));let u=t===""||l.pathname==="",c=u?"/":l.pathname,d;if(c==null)d=o;else{let b=r.length-1;if(!a&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),b-=1;l.pathname=v.join("/")}d=b>=0?r[b]:"/"}let p=X0(l,d),m=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&o.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var Rn=t=>t.join("/").replace(/\/\/+/g,"/"),Z0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),J0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,e1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function t1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Mm=["POST","PUT","PATCH","DELETE"];new Set(Mm);var n1=["GET",...Mm];new Set(n1);var vo=_.createContext(null);vo.displayName="DataRouter";var gs=_.createContext(null);gs.displayName="DataRouterState";var Lm=_.createContext({isTransitioning:!1});Lm.displayName="ViewTransition";var r1=_.createContext(new Map);r1.displayName="Fetchers";var o1=_.createContext(null);o1.displayName="Await";var vn=_.createContext(null);vn.displayName="Navigation";var _i=_.createContext(null);_i.displayName="Location";var bn=_.createContext({outlet:null,matches:[],isDataRoute:!1});bn.displayName="Route";var dc=_.createContext(null);dc.displayName="RouteError";function i1(t,{relative:r}={}){Je(Ai(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:a}=_.useContext(vn),{hash:l,pathname:u,search:c}=Ri(t,{relative:r}),d=u;return o!=="/"&&(d=u==="/"?o:Rn([o,u])),a.createHref({pathname:d,search:c,hash:l})}function Ai(){return _.useContext(_i)!=null}function Or(){return Je(Ai(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(_i).location}var zm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jm(t){_.useContext(vn).static||_.useLayoutEffect(t)}function a1(){let{isDataRoute:t}=_.useContext(bn);return t?b1():s1()}function s1(){Je(Ai(),"useNavigate() may be used only in the context of a <Router> component.");let t=_.useContext(vo),{basename:r,navigator:o}=_.useContext(vn),{matches:a}=_.useContext(bn),{pathname:l}=Or(),u=JSON.stringify(Rm(a)),c=_.useRef(!1);return jm(()=>{c.current=!0}),_.useCallback((p,m={})=>{if(yn(c.current,zm),!c.current)return;if(typeof p=="number"){o.go(p);return}let g=Dm(p,JSON.parse(u),l,m.relative==="path");t==null&&r!=="/"&&(g.pathname=g.pathname==="/"?r:Rn([r,g.pathname])),(m.replace?o.replace:o.push)(g,m.state,m)},[r,o,u,l,t])}_.createContext(null);function zS(){let{matches:t}=_.useContext(bn),r=t[t.length-1];return r?r.params:{}}function Ri(t,{relative:r}={}){let{matches:o}=_.useContext(bn),{pathname:a}=Or(),l=JSON.stringify(Rm(o));return _.useMemo(()=>Dm(t,JSON.parse(l),a,r==="path"),[t,l,a,r])}function l1(t,r){return Im(t,r)}function Im(t,r,o,a){Je(Ai(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=_.useContext(vn),{matches:c}=_.useContext(bn),d=c[c.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",b=d&&d.route;{let M=b&&b.path||"";Vm(m,!b||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let v=Or(),w;if(r){let M=typeof r=="string"?yo(r):r;Je(g==="/"||M.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${M.pathname}" was given in the \`location\` prop.`),w=M}else w=v;let k=w.pathname||"/",x=k;if(g!=="/"){let M=g.replace(/^\//,"").split("/");x="/"+k.replace(/^\//,"").split("/").slice(M.length).join("/")}let S=!u&&o&&o.matches&&o.matches.length>0?o.matches:Om(t,{pathname:x});yn(b||S!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),yn(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=p1(S&&S.map(M=>Object.assign({},M,{params:Object.assign({},p,M.params),pathname:Rn([g,l.encodeLocation?l.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?g:Rn([g,l.encodeLocation?l.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),c,o,a);return r&&O?_.createElement(_i.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},O):O}function u1(){let t=v1(),r=t1(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),o=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return c=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:u},"ErrorBoundary")," or"," ",_.createElement("code",{style:u},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},r),o?_.createElement("pre",{style:l},o):null,c)}var c1=_.createElement(u1,null),f1=class extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){}render(){return this.state.error!==void 0?_.createElement(bn.Provider,{value:this.props.routeContext},_.createElement(dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function d1({routeContext:t,match:r,children:o}){let a=_.useContext(vo);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),_.createElement(bn.Provider,{value:t},o)}function p1(t,r=[],o=null,a=null){if(t==null){if(!o)return null;if(o.errors)t=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)t=o.matches;else return null}let l=t,u=o?.errors;if(u!=null){let p=l.findIndex(m=>m.route.id&&u?.[m.route.id]!==void 0);Je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let c=!1,d=-1;if(o)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:b}=o,v=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!b||b[m.route.id]===void 0);if(m.route.lazy||v){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let b,v=!1,w=null,k=null;o&&(b=u&&m.route.id?u[m.route.id]:void 0,w=m.route.errorElement||c1,c&&(d<0&&g===0?(Vm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,k=null):d===g&&(v=!0,k=m.route.hydrateFallbackElement||null)));let x=r.concat(l.slice(0,g+1)),S=()=>{let O;return b?O=w:v?O=k:m.route.Component?O=_.createElement(m.route.Component,null):m.route.element?O=m.route.element:O=p,_.createElement(d1,{match:m,routeContext:{outlet:p,matches:x,isDataRoute:o!=null},children:O})};return o&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?_.createElement(f1,{location:o.location,revalidation:o.revalidation,component:w,error:b,children:S(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):S()},null)}function pc(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function h1(t){let r=_.useContext(vo);return Je(r,pc(t)),r}function m1(t){let r=_.useContext(gs);return Je(r,pc(t)),r}function g1(t){let r=_.useContext(bn);return Je(r,pc(t)),r}function hc(t){let r=g1(t),o=r.matches[r.matches.length-1];return Je(o.route.id,`${t} can only be used on routes that contain a unique "id"`),o.route.id}function y1(){return hc("useRouteId")}function v1(){let t=_.useContext(dc),r=m1("useRouteError"),o=hc("useRouteError");return t!==void 0?t:r.errors?.[o]}function b1(){let{router:t}=h1("useNavigate"),r=hc("useNavigate"),o=_.useRef(!1);return jm(()=>{o.current=!0}),_.useCallback(async(l,u={})=>{yn(o.current,zm),o.current&&(typeof l=="number"?t.navigate(l):await t.navigate(l,{fromRouteId:r,...u}))},[t,r])}var qp={};function Vm(t,r,o){!r&&!qp[t]&&(qp[t]=!0,yn(!1,o))}_.memo(w1);function w1({routes:t,future:r,state:o}){return Im(t,void 0,o,r)}function x1(t){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function k1({basename:t="/",children:r=null,location:o,navigationType:a="POP",navigator:l,static:u=!1}){Je(!Ai(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=_.useMemo(()=>({basename:c,navigator:l,static:u,future:{}}),[c,l,u]);typeof o=="string"&&(o=yo(o));let{pathname:p="/",search:m="",hash:g="",state:b=null,key:v="default"}=o,w=_.useMemo(()=>{let k=Ln(p,c);return k==null?null:{location:{pathname:k,search:m,hash:g,state:b,key:v},navigationType:a}},[c,p,m,g,b,v,a]);return yn(w!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:_.createElement(vn.Provider,{value:d},_.createElement(_i.Provider,{children:r,value:w}))}function jS({children:t,location:r}){return l1(qu(t),r)}function qu(t,r=[]){let o=[];return _.Children.forEach(t,(a,l)=>{if(!_.isValidElement(a))return;let u=[...r,l];if(a.type===_.Fragment){o.push.apply(o,qu(a.props.children,u));return}Je(a.type===x1,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=qu(a.props.children,u)),o.push(c)}),o}var es="get",ts="application/x-www-form-urlencoded";function ys(t){return t!=null&&typeof t.tagName=="string"}function P1(t){return ys(t)&&t.tagName.toLowerCase()==="button"}function S1(t){return ys(t)&&t.tagName.toLowerCase()==="form"}function T1(t){return ys(t)&&t.tagName.toLowerCase()==="input"}function C1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function E1(t,r){return t.button===0&&(!r||r==="_self")&&!C1(t)}var Wa=null;function O1(){if(Wa===null)try{new FormData(document.createElement("form"),0),Wa=!1}catch{Wa=!0}return Wa}var _1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yu(t){return t!=null&&!_1.has(t)?(yn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ts}"`),null):t}function A1(t,r){let o,a,l,u,c;if(S1(t)){let d=t.getAttribute("action");a=d?Ln(d,r):null,o=t.getAttribute("method")||es,l=yu(t.getAttribute("enctype"))||ts,u=new FormData(t)}else if(P1(t)||T1(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(a=p?Ln(p,r):null,o=t.getAttribute("formmethod")||d.getAttribute("method")||es,l=yu(t.getAttribute("formenctype"))||yu(d.getAttribute("enctype"))||ts,u=new FormData(d,t),!O1()){let{name:m,type:g,value:b}=t;if(g==="image"){let v=m?`${m}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else m&&u.append(m,b)}}else{if(ys(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=es,a=null,l=ts,c=t}return u&&l==="text/plain"&&(c=u,u=void 0),{action:a,method:o.toLowerCase(),encType:l,formData:u,body:c}}function mc(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}async function R1(t,r){if(t.id in r)return r[t.id];try{let o=await import(t.module);return r[t.id]=o,o}catch{return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function D1(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function M1(t,r,o){let a=await Promise.all(t.map(async l=>{let u=r.routes[l.route.id];if(u){let c=await R1(u,o);return c.links?c.links():[]}return[]}));return I1(a.flat(1).filter(D1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Hp(t,r,o,a,l,u){let c=(p,m)=>o[m]?p.route.id!==o[m].route.id:!0,d=(p,m)=>o[m].pathname!==p.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==p.params["*"];return u==="assets"?r.filter((p,m)=>c(p,m)||d(p,m)):u==="data"?r.filter((p,m)=>{let g=a.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(c(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function L1(t,r,{includeHydrateFallback:o}={}){return z1(t.map(a=>{let l=r.routes[a.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),o&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function z1(t){return[...new Set(t)]}function j1(t){let r={},o=Object.keys(t).sort();for(let a of o)r[a]=t[a];return r}function I1(t,r){let o=new Set;return new Set(r),t.reduce((a,l)=>{let u=JSON.stringify(j1(l));return o.has(u)||(o.add(u),a.push({key:u,link:l})),a},[])}function V1(t,r){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return o.pathname==="/"?o.pathname="_root.data":r&&Ln(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function Nm(){let t=_.useContext(vo);return mc(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function N1(){let t=_.useContext(gs);return mc(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var gc=_.createContext(void 0);gc.displayName="FrameworkContext";function Fm(){let t=_.useContext(gc);return mc(t,"You must render this element inside a <HydratedRouter> element"),t}function F1(t,r){let o=_.useContext(gc),[a,l]=_.useState(!1),[u,c]=_.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:b}=r,v=_.useRef(null);_.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let x=O=>{O.forEach(M=>{c(M.isIntersecting)})},S=new IntersectionObserver(x,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[t]),_.useEffect(()=>{if(a){let x=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(x)}}},[a]);let w=()=>{l(!0)},k=()=>{l(!1),c(!1)};return o?t!=="intent"?[u,v,{}]:[u,v,{onFocus:fi(d,w),onBlur:fi(p,k),onMouseEnter:fi(m,w),onMouseLeave:fi(g,k),onTouchStart:fi(b,w)}]:[!1,v,{}]}function fi(t,r){return o=>{t&&t(o),o.defaultPrevented||r(o)}}function B1({page:t,...r}){let{router:o}=Nm(),a=_.useMemo(()=>Om(o.routes,t,o.basename),[o.routes,t,o.basename]);return a?_.createElement($1,{page:t,matches:a,...r}):null}function U1(t){let{manifest:r,routeModules:o}=Fm(),[a,l]=_.useState([]);return _.useEffect(()=>{let u=!1;return M1(t,r,o).then(c=>{u||l(c)}),()=>{u=!0}},[t,r,o]),a}function $1({page:t,matches:r,...o}){let a=Or(),{manifest:l,routeModules:u}=Fm(),{basename:c}=Nm(),{loaderData:d,matches:p}=N1(),m=_.useMemo(()=>Hp(t,r,p,l,a,"data"),[t,r,p,l,a]),g=_.useMemo(()=>Hp(t,r,p,l,a,"assets"),[t,r,p,l,a]),b=_.useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let k=new Set,x=!1;if(r.forEach(O=>{let M=l.routes[O.route.id];!M||!M.hasLoader||(!m.some(U=>U.route.id===O.route.id)&&O.route.id in d&&u[O.route.id]?.shouldRevalidate||M.hasClientLoader?x=!0:k.add(O.route.id))}),k.size===0)return[];let S=V1(t,c);return x&&k.size>0&&S.searchParams.set("_routes",r.filter(O=>k.has(O.route.id)).map(O=>O.route.id).join(",")),[S.pathname+S.search]},[c,d,a,l,m,r,t,u]),v=_.useMemo(()=>L1(g,l),[g,l]),w=U1(g);return _.createElement(_.Fragment,null,b.map(k=>_.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...o})),v.map(k=>_.createElement("link",{key:k,rel:"modulepreload",href:k,...o})),w.map(({key:k,link:x})=>_.createElement("link",{key:k,...x})))}function q1(...t){return r=>{t.forEach(o=>{typeof o=="function"?o(r):o!=null&&(o.current=r)})}}var Bm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bm&&(window.__reactRouterVersion="7.4.1")}catch{}function IS({basename:t,children:r,window:o}){let a=_.useRef();a.current==null&&(a.current=M0({window:o,v5Compat:!0}));let l=a.current,[u,c]=_.useState({action:l.action,location:l.location}),d=_.useCallback(p=>{_.startTransition(()=>c(p))},[c]);return _.useLayoutEffect(()=>l.listen(d),[l,d]),_.createElement(k1,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:l})}var Um=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$m=_.forwardRef(function({onClick:r,discover:o="render",prefetch:a="none",relative:l,reloadDocument:u,replace:c,state:d,target:p,to:m,preventScrollReset:g,viewTransition:b,...v},w){let{basename:k}=_.useContext(vn),x=typeof m=="string"&&Um.test(m),S,O=!1;if(typeof m=="string"&&x&&(S=m,Bm))try{let Q=new URL(window.location.href),ve=m.startsWith("//")?new URL(Q.protocol+m):new URL(m),_e=Ln(ve.pathname,k);ve.origin===Q.origin&&_e!=null?m=_e+ve.search+ve.hash:O=!0}catch{yn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=i1(m,{relative:l}),[U,te,B]=F1(a,v),ne=G1(m,{replace:c,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:b});function ie(Q){r&&r(Q),Q.defaultPrevented||ne(Q)}let K=_.createElement("a",{...v,...B,href:S||M,onClick:O||u?r:ie,ref:q1(w,te),target:p,"data-discover":!x&&o==="render"?"true":void 0});return U&&!x?_.createElement(_.Fragment,null,K,_.createElement(B1,{page:M})):K});$m.displayName="Link";var H1=_.forwardRef(function({"aria-current":r="page",caseSensitive:o=!1,className:a="",end:l=!1,style:u,to:c,viewTransition:d,children:p,...m},g){let b=Ri(c,{relative:m.relative}),v=Or(),w=_.useContext(gs),{navigator:k,basename:x}=_.useContext(vn),S=w!=null&&J1(b)&&d===!0,O=k.encodeLocation?k.encodeLocation(b).pathname:b.pathname,M=v.pathname,U=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;o||(M=M.toLowerCase(),U=U?U.toLowerCase():null,O=O.toLowerCase()),U&&x&&(U=Ln(U,x)||U);const te=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let B=M===O||!l&&M.startsWith(O)&&M.charAt(te)==="/",ne=U!=null&&(U===O||!l&&U.startsWith(O)&&U.charAt(O.length)==="/"),ie={isActive:B,isPending:ne,isTransitioning:S},K=B?r:void 0,Q;typeof a=="function"?Q=a(ie):Q=[a,B?"active":null,ne?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let ve=typeof u=="function"?u(ie):u;return _.createElement($m,{...m,"aria-current":K,className:Q,ref:g,style:ve,to:c,viewTransition:d},typeof p=="function"?p(ie):p)});H1.displayName="NavLink";var W1=_.forwardRef(({discover:t="render",fetcherKey:r,navigate:o,reloadDocument:a,replace:l,state:u,method:c=es,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:b,...v},w)=>{let k=Q1(),x=Z1(d,{relative:m}),S=c.toLowerCase()==="get"?"get":"post",O=typeof d=="string"&&Um.test(d),M=U=>{if(p&&p(U),U.defaultPrevented)return;U.preventDefault();let te=U.nativeEvent.submitter,B=te?.getAttribute("formmethod")||c;k(te||U.currentTarget,{fetcherKey:r,method:B,navigate:o,replace:l,state:u,relative:m,preventScrollReset:g,viewTransition:b})};return _.createElement("form",{ref:w,method:S,action:x,onSubmit:a?p:M,...v,"data-discover":!O&&t==="render"?"true":void 0})});W1.displayName="Form";function K1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qm(t){let r=_.useContext(vo);return Je(r,K1(t)),r}function G1(t,{target:r,replace:o,state:a,preventScrollReset:l,relative:u,viewTransition:c}={}){let d=a1(),p=Or(),m=Ri(t,{relative:u});return _.useCallback(g=>{if(E1(g,r)){g.preventDefault();let b=o!==void 0?o:Pi(p)===Pi(m);d(t,{replace:b,state:a,preventScrollReset:l,relative:u,viewTransition:c})}},[p,d,m,o,a,r,t,l,u,c])}var X1=0,Y1=()=>`__${String(++X1)}__`;function Q1(){let{router:t}=qm("useSubmit"),{basename:r}=_.useContext(vn),o=y1();return _.useCallback(async(a,l={})=>{let{action:u,method:c,encType:d,formData:p,body:m}=A1(a,r);if(l.navigate===!1){let g=l.fetcherKey||Y1();await t.fetch(g,o,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||c,formEncType:l.encType||d,flushSync:l.flushSync})}else await t.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||c,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:o,flushSync:l.flushSync,viewTransition:l.viewTransition})},[t,r,o])}function Z1(t,{relative:r}={}){let{basename:o}=_.useContext(vn),a=_.useContext(bn);Je(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),u={...Ri(t||".",{relative:r})},c=Or();if(t==null){u.search=c.search;let d=new URLSearchParams(u.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(b=>b).forEach(b=>d.append("index",b));let g=d.toString();u.search=g?`?${g}`:""}}return(!t||t===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:Rn([o,u.pathname])),Pi(u)}function J1(t,r={}){let o=_.useContext(Lm);Je(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=qm("useViewTransitionState"),l=Ri(t,{relative:r.relative});if(!o.isTransitioning)return!1;let u=Ln(o.currentLocation.pathname,a)||o.currentLocation.pathname,c=Ln(o.nextLocation.pathname,a)||o.nextLocation.pathname;return as(l.pathname,c)!=null||as(l.pathname,u)!=null}new TextEncoder;var vu,Wp;function eb(){if(Wp)return vu;Wp=1;var t=typeof Element<"u",r=typeof Map=="function",o=typeof Set=="function",a=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function l(u,c){if(u===c)return!0;if(u&&c&&typeof u=="object"&&typeof c=="object"){if(u.constructor!==c.constructor)return!1;var d,p,m;if(Array.isArray(u)){if(d=u.length,d!=c.length)return!1;for(p=d;p--!==0;)if(!l(u[p],c[p]))return!1;return!0}var g;if(r&&u instanceof Map&&c instanceof Map){if(u.size!==c.size)return!1;for(g=u.entries();!(p=g.next()).done;)if(!c.has(p.value[0]))return!1;for(g=u.entries();!(p=g.next()).done;)if(!l(p.value[1],c.get(p.value[0])))return!1;return!0}if(o&&u instanceof Set&&c instanceof Set){if(u.size!==c.size)return!1;for(g=u.entries();!(p=g.next()).done;)if(!c.has(p.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(u)&&ArrayBuffer.isView(c)){if(d=u.length,d!=c.length)return!1;for(p=d;p--!==0;)if(u[p]!==c[p])return!1;return!0}if(u.constructor===RegExp)return u.source===c.source&&u.flags===c.flags;if(u.valueOf!==Object.prototype.valueOf&&typeof u.valueOf=="function"&&typeof c.valueOf=="function")return u.valueOf()===c.valueOf();if(u.toString!==Object.prototype.toString&&typeof u.toString=="function"&&typeof c.toString=="function")return u.toString()===c.toString();if(m=Object.keys(u),d=m.length,d!==Object.keys(c).length)return!1;for(p=d;p--!==0;)if(!Object.prototype.hasOwnProperty.call(c,m[p]))return!1;if(t&&u instanceof Element)return!1;for(p=d;p--!==0;)if(!((m[p]==="_owner"||m[p]==="__v"||m[p]==="__o")&&u.$$typeof)&&!l(u[m[p]],c[m[p]]))return!1;return!0}return u!==u&&c!==c}return vu=function(c,d){try{return l(c,d)}catch(p){if((p.message||"").match(/stack|recursion/i))return!1;throw p}},vu}var tb=eb();const nb=go(tb);var bu,Kp;function rb(){if(Kp)return bu;Kp=1;var t=function(r,o,a,l,u,c,d,p){if(!r){var m;if(o===void 0)m=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var g=[a,l,u,c,d,p],b=0;m=new Error(o.replace(/%s/g,function(){return g[b++]})),m.name="Invariant Violation"}throw m.framesToPop=1,m}};return bu=t,bu}var ob=rb();const Gp=go(ob);var wu,Xp;function ib(){return Xp||(Xp=1,wu=function(r,o,a,l){var u=a?a.call(l,r,o):void 0;if(u!==void 0)return!!u;if(r===o)return!0;if(typeof r!="object"||!r||typeof o!="object"||!o)return!1;var c=Object.keys(r),d=Object.keys(o);if(c.length!==d.length)return!1;for(var p=Object.prototype.hasOwnProperty.bind(o),m=0;m<c.length;m++){var g=c[m];if(!p(g))return!1;var b=r[g],v=o[g];if(u=a?a.call(l,b,v,g):void 0,u===!1||u===void 0&&b!==v)return!1}return!0}),wu}var ab=ib();const sb=go(ab);var Hm=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(Hm||{}),xu={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Yp=Object.values(Hm),yc={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},lb=Object.entries(yc).reduce((t,[r,o])=>(t[o]=r,t),{}),an="data-rh",co={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},fo=(t,r)=>{for(let o=t.length-1;o>=0;o-=1){const a=t[o];if(Object.prototype.hasOwnProperty.call(a,r))return a[r]}return null},ub=t=>{let r=fo(t,"title");const o=fo(t,co.TITLE_TEMPLATE);if(Array.isArray(r)&&(r=r.join("")),o&&r)return o.replace(/%s/g,()=>r);const a=fo(t,co.DEFAULT_TITLE);return r||a||void 0},cb=t=>fo(t,co.ON_CHANGE_CLIENT_STATE)||(()=>{}),ku=(t,r)=>r.filter(o=>typeof o[t]<"u").map(o=>o[t]).reduce((o,a)=>({...o,...a}),{}),fb=(t,r)=>r.filter(o=>typeof o.base<"u").map(o=>o.base).reverse().reduce((o,a)=>{if(!o.length){const l=Object.keys(a);for(let u=0;u<l.length;u+=1){const d=l[u].toLowerCase();if(t.indexOf(d)!==-1&&a[d])return o.concat(a)}}return o},[]),db=t=>console&&typeof console.warn=="function"&&void 0,di=(t,r,o)=>{const a={};return o.filter(l=>Array.isArray(l[t])?!0:(typeof l[t]<"u"&&db(`Helmet: ${t} should be of type "Array". Instead found type "${typeof l[t]}"`),!1)).map(l=>l[t]).reverse().reduce((l,u)=>{const c={};u.filter(p=>{let m;const g=Object.keys(p);for(let v=0;v<g.length;v+=1){const w=g[v],k=w.toLowerCase();r.indexOf(k)!==-1&&!(m==="rel"&&p[m].toLowerCase()==="canonical")&&!(k==="rel"&&p[k].toLowerCase()==="stylesheet")&&(m=k),r.indexOf(w)!==-1&&(w==="innerHTML"||w==="cssText"||w==="itemprop")&&(m=w)}if(!m||!p[m])return!1;const b=p[m].toLowerCase();return a[m]||(a[m]={}),c[m]||(c[m]={}),a[m][b]?!1:(c[m][b]=!0,!0)}).reverse().forEach(p=>l.push(p));const d=Object.keys(c);for(let p=0;p<d.length;p+=1){const m=d[p],g={...a[m],...c[m]};a[m]=g}return l},[]).reverse()},pb=(t,r)=>{if(Array.isArray(t)&&t.length){for(let o=0;o<t.length;o+=1)if(t[o][r])return!0}return!1},hb=t=>({baseTag:fb(["href"],t),bodyAttributes:ku("bodyAttributes",t),defer:fo(t,co.DEFER),encode:fo(t,co.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ku("htmlAttributes",t),linkTags:di("link",["rel","href"],t),metaTags:di("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:di("noscript",["innerHTML"],t),onChangeClientState:cb(t),scriptTags:di("script",["src","innerHTML"],t),styleTags:di("style",["cssText"],t),title:ub(t),titleAttributes:ku("titleAttributes",t),prioritizeSeoTags:pb(t,co.PRIORITIZE_SEO_TAGS)}),Wm=t=>Array.isArray(t)?t.join(""):t,mb=(t,r)=>{const o=Object.keys(t);for(let a=0;a<o.length;a+=1)if(r[o[a]]&&r[o[a]].includes(t[o[a]]))return!0;return!1},Pu=(t,r)=>Array.isArray(t)?t.reduce((o,a)=>(mb(a,r)?o.priority.push(a):o.default.push(a),o),{priority:[],default:[]}):{default:t,priority:[]},Qp=(t,r)=>({...t,[r]:void 0}),gb=["noscript","script","style"],Hu=(t,r=!0)=>r===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Km=t=>Object.keys(t).reduce((r,o)=>{const a=typeof t[o]<"u"?`${o}="${t[o]}"`:`${o}`;return r?`${r} ${a}`:a},""),yb=(t,r,o,a)=>{const l=Km(o),u=Wm(r);return l?`<${t} ${an}="true" ${l}>${Hu(u,a)}</${t}>`:`<${t} ${an}="true">${Hu(u,a)}</${t}>`},vb=(t,r,o=!0)=>r.reduce((a,l)=>{const u=l,c=Object.keys(u).filter(m=>!(m==="innerHTML"||m==="cssText")).reduce((m,g)=>{const b=typeof u[g]>"u"?g:`${g}="${Hu(u[g],o)}"`;return m?`${m} ${b}`:b},""),d=u.innerHTML||u.cssText||"",p=gb.indexOf(t)===-1;return`${a}<${t} ${an}="true" ${c}${p?"/>":`>${d}</${t}>`}`},""),Gm=(t,r={})=>Object.keys(t).reduce((o,a)=>{const l=yc[a];return o[l||a]=t[a],o},r),bb=(t,r,o)=>{const a={key:r,[an]:!0},l=Gm(o,a);return[Oe.createElement("title",l,r)]},ns=(t,r)=>r.map((o,a)=>{const l={key:a,[an]:!0};return Object.keys(o).forEach(u=>{const d=yc[u]||u;if(d==="innerHTML"||d==="cssText"){const p=o.innerHTML||o.cssText;l.dangerouslySetInnerHTML={__html:p}}else l[d]=o[u]}),Oe.createElement(t,l)}),Xt=(t,r,o=!0)=>{switch(t){case"title":return{toComponent:()=>bb(t,r.title,r.titleAttributes),toString:()=>yb(t,r.title,r.titleAttributes,o)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Gm(r),toString:()=>Km(r)};default:return{toComponent:()=>ns(t,r),toString:()=>vb(t,r,o)}}},wb=({metaTags:t,linkTags:r,scriptTags:o,encode:a})=>{const l=Pu(t,xu.meta),u=Pu(r,xu.link),c=Pu(o,xu.script);return{priorityMethods:{toComponent:()=>[...ns("meta",l.priority),...ns("link",u.priority),...ns("script",c.priority)],toString:()=>`${Xt("meta",l.priority,a)} ${Xt("link",u.priority,a)} ${Xt("script",c.priority,a)}`},metaTags:l.default,linkTags:u.default,scriptTags:c.default}},xb=t=>{const{baseTag:r,bodyAttributes:o,encode:a=!0,htmlAttributes:l,noscriptTags:u,styleTags:c,title:d="",titleAttributes:p,prioritizeSeoTags:m}=t;let{linkTags:g,metaTags:b,scriptTags:v}=t,w={toComponent:()=>{},toString:()=>""};return m&&({priorityMethods:w,linkTags:g,metaTags:b,scriptTags:v}=wb(t)),{priority:w,base:Xt("base",r,a),bodyAttributes:Xt("bodyAttributes",o,a),htmlAttributes:Xt("htmlAttributes",l,a),link:Xt("link",g,a),meta:Xt("meta",b,a),noscript:Xt("noscript",u,a),script:Xt("script",v,a),style:Xt("style",c,a),title:Xt("title",{title:d,titleAttributes:p},a)}},Wu=xb,Ka=[],Xm=!!(typeof window<"u"&&window.document&&window.document.createElement),Ku=class{instances=[];canUseDOM=Xm;context;value={setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Ka:this.instances,add:t=>{(this.canUseDOM?Ka:this.instances).push(t)},remove:t=>{const r=(this.canUseDOM?Ka:this.instances).indexOf(t);(this.canUseDOM?Ka:this.instances).splice(r,1)}}};constructor(t,r){this.context=t,this.canUseDOM=r||!1,r||(t.helmet=Wu({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},kb={},Ym=Oe.createContext(kb),Pb=class Qm extends _.Component{static canUseDOM=Xm;helmetData;constructor(r){super(r),this.helmetData=new Ku(this.props.context||{},Qm.canUseDOM)}render(){return Oe.createElement(Ym.Provider,{value:this.helmetData.value},this.props.children)}},eo=(t,r)=>{const o=document.head||document.querySelector("head"),a=o.querySelectorAll(`${t}[${an}]`),l=[].slice.call(a),u=[];let c;return r&&r.length&&r.forEach(d=>{const p=document.createElement(t);for(const m in d)if(Object.prototype.hasOwnProperty.call(d,m))if(m==="innerHTML")p.innerHTML=d.innerHTML;else if(m==="cssText")p.styleSheet?p.styleSheet.cssText=d.cssText:p.appendChild(document.createTextNode(d.cssText));else{const g=m,b=typeof d[g]>"u"?"":d[g];p.setAttribute(m,b)}p.setAttribute(an,"true"),l.some((m,g)=>(c=g,p.isEqualNode(m)))?l.splice(c,1):u.push(p)}),l.forEach(d=>d.parentNode?.removeChild(d)),u.forEach(d=>o.appendChild(d)),{oldTags:l,newTags:u}},Gu=(t,r)=>{const o=document.getElementsByTagName(t)[0];if(!o)return;const a=o.getAttribute(an),l=a?a.split(","):[],u=[...l],c=Object.keys(r);for(const d of c){const p=r[d]||"";o.getAttribute(d)!==p&&o.setAttribute(d,p),l.indexOf(d)===-1&&l.push(d);const m=u.indexOf(d);m!==-1&&u.splice(m,1)}for(let d=u.length-1;d>=0;d-=1)o.removeAttribute(u[d]);l.length===u.length?o.removeAttribute(an):o.getAttribute(an)!==c.join(",")&&o.setAttribute(an,c.join(","))},Sb=(t,r)=>{typeof t<"u"&&document.title!==t&&(document.title=Wm(t)),Gu("title",r)},Zp=(t,r)=>{const{baseTag:o,bodyAttributes:a,htmlAttributes:l,linkTags:u,metaTags:c,noscriptTags:d,onChangeClientState:p,scriptTags:m,styleTags:g,title:b,titleAttributes:v}=t;Gu("body",a),Gu("html",l),Sb(b,v);const w={baseTag:eo("base",o),linkTags:eo("link",u),metaTags:eo("meta",c),noscriptTags:eo("noscript",d),scriptTags:eo("script",m),styleTags:eo("style",g)},k={},x={};Object.keys(w).forEach(S=>{const{newTags:O,oldTags:M}=w[S];O.length&&(k[S]=O),M.length&&(x[S]=w[S].oldTags)}),r&&r(),p(t,k,x)},pi=null,Tb=t=>{pi&&cancelAnimationFrame(pi),t.defer?pi=requestAnimationFrame(()=>{Zp(t,()=>{pi=null})}):(Zp(t),pi=null)},Cb=Tb,Jp=class extends _.Component{rendered=!1;shouldComponentUpdate(t){return!sb(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:r}=this.props.context;let o=null;const a=hb(t.get().map(l=>{const u={...l.props};return delete u.context,u}));Pb.canUseDOM?Cb(a):Wu&&(o=Wu(a)),r(o)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},VS=class extends _.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(t){return!nb(Qp(this.props,"helmetData"),Qp(t,"helmetData"))}mapNestedChildrenToProps(t,r){if(!r)return null;switch(t.type){case"script":case"noscript":return{innerHTML:r};case"style":return{cssText:r};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,r,o,a){return{...r,[t.type]:[...r[t.type]||[],{...o,...this.mapNestedChildrenToProps(t,a)}]}}mapObjectTypeChildren(t,r,o,a){switch(t.type){case"title":return{...r,[t.type]:a,titleAttributes:{...o}};case"body":return{...r,bodyAttributes:{...o}};case"html":return{...r,htmlAttributes:{...o}};default:return{...r,[t.type]:{...o}}}}mapArrayTypeChildrenToProps(t,r){let o={...r};return Object.keys(t).forEach(a=>{o={...o,[a]:t[a]}}),o}warnOnInvalidChildren(t,r){return Gp(Yp.some(o=>t.type===o),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Yp.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Gp(!r||typeof r=="string"||Array.isArray(r)&&!r.some(o=>typeof o!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,r){let o={};return Oe.Children.forEach(t,a=>{if(!a||!a.props)return;const{children:l,...u}=a.props,c=Object.keys(u).reduce((p,m)=>(p[lb[m]||m]=u[m],p),{});let{type:d}=a;switch(typeof d=="symbol"?d=d.toString():this.warnOnInvalidChildren(a,l),d){case"Symbol(react.fragment)":r=this.mapChildrenToProps(l,r);break;case"link":case"meta":case"noscript":case"script":case"style":o=this.flattenArrayTypeChildren(a,o,c,l);break;default:r=this.mapObjectTypeChildren(a,r,c,l);break}}),this.mapArrayTypeChildrenToProps(o,r)}render(){const{children:t,...r}=this.props;let o={...r},{helmetData:a}=r;if(t&&(o=this.mapChildrenToProps(t,o)),a&&!(a instanceof Ku)){const l=a;a=new Ku(l.context,!0),delete o.helmetData}return a?Oe.createElement(Jp,{...o,context:a.value}):Oe.createElement(Ym.Consumer,null,l=>Oe.createElement(Jp,{...o,context:l}))}};const vc=_.createContext({});function bc(t){const r=_.useRef(null);return r.current===null&&(r.current=t()),r.current}const vs=_.createContext(null),wc=_.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class Eb extends _.Component{getSnapshotBeforeUpdate(r){const o=this.props.childRef.current;if(o&&r.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=o.offsetHeight||0,a.width=o.offsetWidth||0,a.top=o.offsetTop,a.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ob({children:t,isPresent:r}){const o=_.useId(),a=_.useRef(null),l=_.useRef({width:0,height:0,top:0,left:0}),{nonce:u}=_.useContext(wc);return _.useInsertionEffect(()=>{const{width:c,height:d,top:p,left:m}=l.current;if(r||!a.current||!c||!d)return;a.current.dataset.motionPopId=o;const g=document.createElement("style");return u&&(g.nonce=u),document.head.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            top: ${p}px !important;
            left: ${m}px !important;
          }
        `),()=>{document.head.removeChild(g)}},[r]),An.jsx(Eb,{isPresent:r,childRef:a,sizeRef:l,children:_.cloneElement(t,{ref:a})})}const _b=({children:t,initial:r,isPresent:o,onExitComplete:a,custom:l,presenceAffectsLayout:u,mode:c})=>{const d=bc(Ab),p=_.useId(),m=_.useCallback(b=>{d.set(b,!0);for(const v of d.values())if(!v)return;a&&a()},[d,a]),g=_.useMemo(()=>({id:p,initial:r,isPresent:o,custom:l,onExitComplete:m,register:b=>(d.set(b,!1),()=>d.delete(b))}),u?[Math.random(),m]:[o,m]);return _.useMemo(()=>{d.forEach((b,v)=>d.set(v,!1))},[o]),_.useEffect(()=>{!o&&!d.size&&a&&a()},[o]),c==="popLayout"&&(t=An.jsx(Ob,{isPresent:o,children:t})),An.jsx(vs.Provider,{value:g,children:t})};function Ab(){return new Map}function Zm(t=!0){const r=_.useContext(vs);if(r===null)return[!0,null];const{isPresent:o,onExitComplete:a,register:l}=r,u=_.useId();_.useEffect(()=>{t&&l(u)},[t]);const c=_.useCallback(()=>t&&a&&a(u),[u,a,t]);return!o&&a?[!1,c]:[!0]}const Ga=t=>t.key||"";function eh(t){const r=[];return _.Children.forEach(t,o=>{_.isValidElement(o)&&r.push(o)}),r}const xc=typeof window<"u",Jm=xc?_.useLayoutEffect:_.useEffect,NS=({children:t,custom:r,initial:o=!0,onExitComplete:a,presenceAffectsLayout:l=!0,mode:u="sync",propagate:c=!1})=>{const[d,p]=Zm(c),m=_.useMemo(()=>eh(t),[t]),g=c&&!d?[]:m.map(Ga),b=_.useRef(!0),v=_.useRef(m),w=bc(()=>new Map),[k,x]=_.useState(m),[S,O]=_.useState(m);Jm(()=>{b.current=!1,v.current=m;for(let te=0;te<S.length;te++){const B=Ga(S[te]);g.includes(B)?w.delete(B):w.get(B)!==!0&&w.set(B,!1)}},[S,g.length,g.join("-")]);const M=[];if(m!==k){let te=[...m];for(let B=0;B<S.length;B++){const ne=S[B],ie=Ga(ne);g.includes(ie)||(te.splice(B,0,ne),M.push(ne))}u==="wait"&&M.length&&(te=M),O(eh(te)),x(m);return}const{forceRender:U}=_.useContext(vc);return An.jsx(An.Fragment,{children:S.map(te=>{const B=Ga(te),ne=c&&!d?!1:m===S||g.includes(B),ie=()=>{if(w.has(B))w.set(B,!0);else return;let K=!0;w.forEach(Q=>{Q||(K=!1)}),K&&(U?.(),O(v.current),c&&p?.(),a&&a())};return An.jsx(_b,{isPresent:ne,initial:!b.current||o?void 0:!1,custom:ne?void 0:r,presenceAffectsLayout:l,mode:u,onExitComplete:ne?void 0:ie,children:te},B)})})},Nt=t=>t;let eg=Nt;function kc(t){let r;return()=>(r===void 0&&(r=t()),r)}const po=(t,r,o)=>{const a=r-t;return a===0?1:(o-t)/a},Dn=t=>t*1e3,Mn=t=>t/1e3,Rb={useManualTiming:!1};function Db(t){let r=new Set,o=new Set,a=!1,l=!1;const u=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function d(m){u.has(m)&&(p.schedule(m),t()),m(c)}const p={schedule:(m,g=!1,b=!1)=>{const w=b&&a?r:o;return g&&u.add(m),w.has(m)||w.add(m),m},cancel:m=>{o.delete(m),u.delete(m)},process:m=>{if(c=m,a){l=!0;return}a=!0,[r,o]=[o,r],r.forEach(d),r.clear(),a=!1,l&&(l=!1,p.process(m))}};return p}const Xa=["read","resolveKeyframes","update","preRender","render","postRender"],Mb=40;function tg(t,r){let o=!1,a=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>o=!0,c=Xa.reduce((O,M)=>(O[M]=Db(u),O),{}),{read:d,resolveKeyframes:p,update:m,preRender:g,render:b,postRender:v}=c,w=()=>{const O=performance.now();o=!1,l.delta=a?1e3/60:Math.max(Math.min(O-l.timestamp,Mb),1),l.timestamp=O,l.isProcessing=!0,d.process(l),p.process(l),m.process(l),g.process(l),b.process(l),v.process(l),l.isProcessing=!1,o&&r&&(a=!1,t(w))},k=()=>{o=!0,a=!0,l.isProcessing||t(w)};return{schedule:Xa.reduce((O,M)=>{const U=c[M];return O[M]=(te,B=!1,ne=!1)=>(o||k(),U.schedule(te,B,ne)),O},{}),cancel:O=>{for(let M=0;M<Xa.length;M++)c[Xa[M]].cancel(O)},state:l,steps:c}}const{schedule:We,cancel:ir,state:vt,steps:Su}=tg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Nt,!0),ng=_.createContext({strict:!1}),th={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ho={};for(const t in th)ho[t]={isEnabled:r=>th[t].some(o=>!!r[o])};function Lb(t){for(const r in t)ho[r]={...ho[r],...t[r]}}const zb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ss(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||zb.has(t)}let rg=t=>!ss(t);function jb(t){t&&(rg=r=>r.startsWith("on")?!ss(r):t(r))}try{jb(require("@emotion/is-prop-valid").default)}catch{}function Ib(t,r,o){const a={};for(const l in t)l==="values"&&typeof t.values=="object"||(rg(l)||o===!0&&ss(l)||!r&&!ss(l)||t.draggable&&l.startsWith("onDrag"))&&(a[l]=t[l]);return a}function Vb(t){if(typeof Proxy>"u")return t;const r=new Map,o=(...a)=>t(...a);return new Proxy(o,{get:(a,l)=>l==="create"?t:(r.has(l)||r.set(l,t(l)),r.get(l))})}const bs=_.createContext({});function Si(t){return typeof t=="string"||Array.isArray(t)}function ws(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Pc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Sc=["initial",...Pc];function xs(t){return ws(t.animate)||Sc.some(r=>Si(t[r]))}function og(t){return!!(xs(t)||t.variants)}function Nb(t,r){if(xs(t)){const{initial:o,animate:a}=t;return{initial:o===!1||Si(o)?o:void 0,animate:Si(a)?a:void 0}}return t.inherit!==!1?r:{}}function Fb(t){const{initial:r,animate:o}=Nb(t,_.useContext(bs));return _.useMemo(()=>({initial:r,animate:o}),[nh(r),nh(o)])}function nh(t){return Array.isArray(t)?t.join(" "):t}const Bb=Symbol.for("motionComponentSymbol");function io(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Ub(t,r,o){return _.useCallback(a=>{a&&t.onMount&&t.onMount(a),r&&(a?r.mount(a):r.unmount()),o&&(typeof o=="function"?o(a):io(o)&&(o.current=a))},[r])}const Tc=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),$b="framerAppearId",ig="data-"+Tc($b),{schedule:Cc}=tg(queueMicrotask,!1),ag=_.createContext({});function qb(t,r,o,a,l){var u,c;const{visualElement:d}=_.useContext(bs),p=_.useContext(ng),m=_.useContext(vs),g=_.useContext(wc).reducedMotion,b=_.useRef(null);a=a||p.renderer,!b.current&&a&&(b.current=a(t,{visualState:r,parent:d,props:o,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:g}));const v=b.current,w=_.useContext(ag);v&&!v.projection&&l&&(v.type==="html"||v.type==="svg")&&Hb(b.current,o,l,w);const k=_.useRef(!1);_.useInsertionEffect(()=>{v&&k.current&&v.update(o,m)});const x=o[ig],S=_.useRef(!!x&&!(!((u=window.MotionHandoffIsComplete)===null||u===void 0)&&u.call(window,x))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,x)));return Jm(()=>{v&&(k.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),Cc.render(v.render),S.current&&v.animationState&&v.animationState.animateChanges())}),_.useEffect(()=>{v&&(!S.current&&v.animationState&&v.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var O;(O=window.MotionHandoffMarkAsComplete)===null||O===void 0||O.call(window,x)}),S.current=!1))}),v}function Hb(t,r,o,a){const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:p,layoutRoot:m}=r;t.projection=new o(t.latestValues,r["data-framer-portal-id"]?void 0:sg(t.parent)),t.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||d&&io(d),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,layoutScroll:p,layoutRoot:m})}function sg(t){if(t)return t.options.allowProjection!==!1?t.projection:sg(t.parent)}function Wb({preloadedFeatures:t,createVisualElement:r,useRender:o,useVisualState:a,Component:l}){var u,c;t&&Lb(t);function d(m,g){let b;const v={..._.useContext(wc),...m,layoutId:Kb(m)},{isStatic:w}=v,k=Fb(m),x=a(m,w);if(!w&&xc){Gb();const S=Xb(v);b=S.MeasureLayout,k.visualElement=qb(l,x,v,r,S.ProjectionNode)}return An.jsxs(bs.Provider,{value:k,children:[b&&k.visualElement?An.jsx(b,{visualElement:k.visualElement,...v}):null,o(l,m,Ub(x,k.visualElement,g),x,w,k.visualElement)]})}d.displayName=`motion.${typeof l=="string"?l:`create(${(c=(u=l.displayName)!==null&&u!==void 0?u:l.name)!==null&&c!==void 0?c:""})`}`;const p=_.forwardRef(d);return p[Bb]=l,p}function Kb({layoutId:t}){const r=_.useContext(vc).id;return r&&t!==void 0?r+"-"+t:t}function Gb(t,r){_.useContext(ng).strict}function Xb(t){const{drag:r,layout:o}=ho;if(!r&&!o)return{};const a={...r,...o};return{MeasureLayout:r?.isEnabled(t)||o?.isEnabled(t)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const Yb=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ec(t){return typeof t!="string"||t.includes("-")?!1:!!(Yb.indexOf(t)>-1||/[A-Z]/u.test(t))}function rh(t){const r=[{},{}];return t?.values.forEach((o,a)=>{r[0][a]=o.get(),r[1][a]=o.getVelocity()}),r}function Oc(t,r,o,a){if(typeof r=="function"){const[l,u]=rh(a);r=r(o!==void 0?o:t.custom,l,u)}if(typeof r=="string"&&(r=t.variants&&t.variants[r]),typeof r=="function"){const[l,u]=rh(a);r=r(o!==void 0?o:t.custom,l,u)}return r}const Xu=t=>Array.isArray(t),Qb=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Zb=t=>Xu(t)?t[t.length-1]||0:t,St=t=>!!(t&&t.getVelocity);function rs(t){const r=St(t)?t.get():t;return Qb(r)?r.toValue():r}function Jb({scrapeMotionValuesFromProps:t,createRenderState:r,onUpdate:o},a,l,u){const c={latestValues:ew(a,l,u,t),renderState:r()};return o&&(c.onMount=d=>o({props:a,current:d,...c}),c.onUpdate=d=>o(d)),c}const lg=t=>(r,o)=>{const a=_.useContext(bs),l=_.useContext(vs),u=()=>Jb(t,r,a,l);return o?u():bc(u)};function ew(t,r,o,a){const l={},u=a(t,{});for(const v in u)l[v]=rs(u[v]);let{initial:c,animate:d}=t;const p=xs(t),m=og(t);r&&m&&!p&&t.inherit!==!1&&(c===void 0&&(c=r.initial),d===void 0&&(d=r.animate));let g=o?o.initial===!1:!1;g=g||c===!1;const b=g?d:c;if(b&&typeof b!="boolean"&&!ws(b)){const v=Array.isArray(b)?b:[b];for(let w=0;w<v.length;w++){const k=Oc(t,v[w]);if(k){const{transitionEnd:x,transition:S,...O}=k;for(const M in O){let U=O[M];if(Array.isArray(U)){const te=g?U.length-1:0;U=U[te]}U!==null&&(l[M]=U)}for(const M in x)l[M]=x[M]}}}return l}const bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],_r=new Set(bo),ug=t=>r=>typeof r=="string"&&r.startsWith(t),cg=ug("--"),tw=ug("var(--"),_c=t=>tw(t)?nw.test(t.split("/*")[0].trim()):!1,nw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,fg=(t,r)=>r&&typeof t=="number"?r.transform(t):t,zn=(t,r,o)=>o>r?r:o<t?t:o,wo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ti={...wo,transform:t=>zn(0,1,t)},Ya={...wo,default:1},Di=t=>({test:r=>typeof r=="string"&&r.endsWith(t)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${t}`}),or=Di("deg"),mn=Di("%"),be=Di("px"),rw=Di("vh"),ow=Di("vw"),oh={...mn,parse:t=>mn.parse(t)/100,transform:t=>mn.transform(t*100)},iw={borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,backgroundPositionX:be,backgroundPositionY:be},aw={rotate:or,rotateX:or,rotateY:or,rotateZ:or,scale:Ya,scaleX:Ya,scaleY:Ya,scaleZ:Ya,skew:or,skewX:or,skewY:or,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:Ti,originX:oh,originY:oh,originZ:be},ih={...wo,transform:Math.round},Ac={...iw,...aw,zIndex:ih,size:be,fillOpacity:Ti,strokeOpacity:Ti,numOctaves:ih},sw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lw=bo.length;function uw(t,r,o){let a="",l=!0;for(let u=0;u<lw;u++){const c=bo[u],d=t[c];if(d===void 0)continue;let p=!0;if(typeof d=="number"?p=d===(c.startsWith("scale")?1:0):p=parseFloat(d)===0,!p||o){const m=fg(d,Ac[c]);if(!p){l=!1;const g=sw[c]||c;a+=`${g}(${m}) `}o&&(r[c]=m)}}return a=a.trim(),o?a=o(r,l?"":a):l&&(a="none"),a}function Rc(t,r,o){const{style:a,vars:l,transformOrigin:u}=t;let c=!1,d=!1;for(const p in r){const m=r[p];if(_r.has(p)){c=!0;continue}else if(cg(p)){l[p]=m;continue}else{const g=fg(m,Ac[p]);p.startsWith("origin")?(d=!0,u[p]=g):a[p]=g}}if(r.transform||(c||o?a.transform=uw(r,t.transform,o):a.transform&&(a.transform="none")),d){const{originX:p="50%",originY:m="50%",originZ:g=0}=u;a.transformOrigin=`${p} ${m} ${g}`}}const cw={offset:"stroke-dashoffset",array:"stroke-dasharray"},fw={offset:"strokeDashoffset",array:"strokeDasharray"};function dw(t,r,o=1,a=0,l=!0){t.pathLength=1;const u=l?cw:fw;t[u.offset]=be.transform(-a);const c=be.transform(r),d=be.transform(o);t[u.array]=`${c} ${d}`}function ah(t,r,o){return typeof t=="string"?t:be.transform(r+o*t)}function pw(t,r,o){const a=ah(r,t.x,t.width),l=ah(o,t.y,t.height);return`${a} ${l}`}function Dc(t,{attrX:r,attrY:o,attrScale:a,originX:l,originY:u,pathLength:c,pathSpacing:d=1,pathOffset:p=0,...m},g,b){if(Rc(t,m,b),g){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:v,style:w,dimensions:k}=t;v.transform&&(k&&(w.transform=v.transform),delete v.transform),k&&(l!==void 0||u!==void 0||w.transform)&&(w.transformOrigin=pw(k,l!==void 0?l:.5,u!==void 0?u:.5)),r!==void 0&&(v.x=r),o!==void 0&&(v.y=o),a!==void 0&&(v.scale=a),c!==void 0&&dw(v,c,d,p,!1)}const Mc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),dg=()=>({...Mc(),attrs:{}}),Lc=t=>typeof t=="string"&&t.toLowerCase()==="svg";function pg(t,{style:r,vars:o},a,l){Object.assign(t.style,r,l&&l.getProjectionStyles(a));for(const u in o)t.style.setProperty(u,o[u])}const hg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function mg(t,r,o,a){pg(t,r,void 0,a);for(const l in r.attrs)t.setAttribute(hg.has(l)?l:Tc(l),r.attrs[l])}const ls={};function hw(t){Object.assign(ls,t)}function gg(t,{layout:r,layoutId:o}){return _r.has(t)||t.startsWith("origin")||(r||o!==void 0)&&(!!ls[t]||t==="opacity")}function zc(t,r,o){var a;const{style:l}=t,u={};for(const c in l)(St(l[c])||r.style&&St(r.style[c])||gg(c,t)||((a=o?.getValue(c))===null||a===void 0?void 0:a.liveStyle)!==void 0)&&(u[c]=l[c]);return u}function yg(t,r,o){const a=zc(t,r,o);for(const l in t)if(St(t[l])||St(r[l])){const u=bo.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;a[u]=t[l]}return a}function mw(t,r){try{r.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}const sh=["x","y","width","height","cx","cy","r"],gw={useVisualState:lg({scrapeMotionValuesFromProps:yg,createRenderState:dg,onUpdate:({props:t,prevProps:r,current:o,renderState:a,latestValues:l})=>{if(!o)return;let u=!!t.drag;if(!u){for(const d in l)if(_r.has(d)){u=!0;break}}if(!u)return;let c=!r;if(r)for(let d=0;d<sh.length;d++){const p=sh[d];t[p]!==r[p]&&(c=!0)}c&&We.read(()=>{mw(o,a),We.render(()=>{Dc(a,l,Lc(o.tagName),t.transformTemplate),mg(o,a)})})}})},yw={useVisualState:lg({scrapeMotionValuesFromProps:zc,createRenderState:Mc})};function vg(t,r,o){for(const a in r)!St(r[a])&&!gg(a,o)&&(t[a]=r[a])}function vw({transformTemplate:t},r){return _.useMemo(()=>{const o=Mc();return Rc(o,r,t),Object.assign({},o.vars,o.style)},[r])}function bw(t,r){const o=t.style||{},a={};return vg(a,o,t),Object.assign(a,vw(t,r)),a}function ww(t,r){const o={},a=bw(t,r);return t.drag&&t.dragListener!==!1&&(o.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(o.tabIndex=0),o.style=a,o}function xw(t,r,o,a){const l=_.useMemo(()=>{const u=dg();return Dc(u,r,Lc(a),t.transformTemplate),{...u.attrs,style:{...u.style}}},[r]);if(t.style){const u={};vg(u,t.style,t),l.style={...u,...l.style}}return l}function kw(t=!1){return(o,a,l,{latestValues:u},c)=>{const p=(Ec(o)?xw:ww)(a,u,c,o),m=Ib(a,typeof o=="string",t),g=o!==_.Fragment?{...m,...p,ref:l}:{},{children:b}=a,v=_.useMemo(()=>St(b)?b.get():b,[b]);return _.createElement(o,{...g,children:v})}}function Pw(t,r){return function(a,{forwardMotionProps:l}={forwardMotionProps:!1}){const c={...Ec(a)?gw:yw,preloadedFeatures:t,useRender:kw(l),createVisualElement:r,Component:a};return Wb(c)}}function bg(t,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==t.length)return!1;for(let a=0;a<o;a++)if(r[a]!==t[a])return!1;return!0}function ks(t,r,o){const a=t.getProps();return Oc(a,r,o!==void 0?o:a.custom,t)}const Sw=kc(()=>window.ScrollTimeline!==void 0);class Tw{constructor(r){this.stop=()=>this.runAll("stop"),this.animations=r.filter(Boolean)}get finished(){return Promise.all(this.animations.map(r=>"finished"in r?r.finished:r))}getAll(r){return this.animations[0][r]}setAll(r,o){for(let a=0;a<this.animations.length;a++)this.animations[a][r]=o}attachTimeline(r,o){const a=this.animations.map(l=>{if(Sw()&&l.attachTimeline)return l.attachTimeline(r);if(typeof o=="function")return o(l)});return()=>{a.forEach((l,u)=>{l&&l(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(r){this.setAll("time",r)}get speed(){return this.getAll("speed")}set speed(r){this.setAll("speed",r)}get startTime(){return this.getAll("startTime")}get duration(){let r=0;for(let o=0;o<this.animations.length;o++)r=Math.max(r,this.animations[o].duration);return r}runAll(r){this.animations.forEach(o=>o[r]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Cw extends Tw{then(r,o){return Promise.all(this.animations).then(r).catch(o)}}function jc(t,r){return t?t[r]||t.default||t:void 0}const Yu=2e4;function wg(t){let r=0;const o=50;let a=t.next(r);for(;!a.done&&r<Yu;)r+=o,a=t.next(r);return r>=Yu?1/0:r}function Ic(t){return typeof t=="function"}function lh(t,r){t.timeline=r,t.onfinish=null}const Vc=t=>Array.isArray(t)&&typeof t[0]=="number",Ew={linearEasing:void 0};function Ow(t,r){const o=kc(t);return()=>{var a;return(a=Ew[r])!==null&&a!==void 0?a:o()}}const us=Ow(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),xg=(t,r,o=10)=>{let a="";const l=Math.max(Math.round(r/o),2);for(let u=0;u<l;u++)a+=t(po(0,l-1,u))+", ";return`linear(${a.substring(0,a.length-2)})`};function kg(t){return!!(typeof t=="function"&&us()||!t||typeof t=="string"&&(t in Qu||us())||Vc(t)||Array.isArray(t)&&t.every(kg))}const mi=([t,r,o,a])=>`cubic-bezier(${t}, ${r}, ${o}, ${a})`,Qu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:mi([0,.65,.55,1]),circOut:mi([.55,0,1,.45]),backIn:mi([.31,.01,.66,-.59]),backOut:mi([.33,1.53,.69,.99])};function Pg(t,r){if(t)return typeof t=="function"&&us()?xg(t,r):Vc(t)?mi(t):Array.isArray(t)?t.map(o=>Pg(o,r)||Qu.easeOut):Qu[t]}const on={x:!1,y:!1};function Sg(){return on.x||on.y}function _w(t,r,o){var a;if(t instanceof Element)return[t];if(typeof t=="string"){let l=document;const u=(a=void 0)!==null&&a!==void 0?a:l.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t)}function Tg(t,r){const o=_w(t),a=new AbortController,l={passive:!0,...r,signal:a.signal};return[o,l,()=>a.abort()]}function uh(t){return r=>{r.pointerType==="touch"||Sg()||t(r)}}function Aw(t,r,o={}){const[a,l,u]=Tg(t,o),c=uh(d=>{const{target:p}=d,m=r(d);if(typeof m!="function"||!p)return;const g=uh(b=>{m(b),p.removeEventListener("pointerleave",g)});p.addEventListener("pointerleave",g,l)});return a.forEach(d=>{d.addEventListener("pointerenter",c,l)}),u}const Cg=(t,r)=>r?t===r?!0:Cg(t,r.parentElement):!1,Nc=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Rw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Dw(t){return Rw.has(t.tagName)||t.tabIndex!==-1}const gi=new WeakSet;function ch(t){return r=>{r.key==="Enter"&&t(r)}}function Tu(t,r){t.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const Mw=(t,r)=>{const o=t.currentTarget;if(!o)return;const a=ch(()=>{if(gi.has(o))return;Tu(o,"down");const l=ch(()=>{Tu(o,"up")}),u=()=>Tu(o,"cancel");o.addEventListener("keyup",l,r),o.addEventListener("blur",u,r)});o.addEventListener("keydown",a,r),o.addEventListener("blur",()=>o.removeEventListener("keydown",a),r)};function fh(t){return Nc(t)&&!Sg()}function Lw(t,r,o={}){const[a,l,u]=Tg(t,o),c=d=>{const p=d.currentTarget;if(!fh(d)||gi.has(p))return;gi.add(p);const m=r(d),g=(w,k)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",v),!(!fh(w)||!gi.has(p))&&(gi.delete(p),typeof m=="function"&&m(w,{success:k}))},b=w=>{g(w,o.useGlobalTarget||Cg(p,w.target))},v=w=>{g(w,!1)};window.addEventListener("pointerup",b,l),window.addEventListener("pointercancel",v,l)};return a.forEach(d=>{!Dw(d)&&d.getAttribute("tabindex")===null&&(d.tabIndex=0),(o.useGlobalTarget?window:d).addEventListener("pointerdown",c,l),d.addEventListener("focus",m=>Mw(m,l),l)}),u}function zw(t){return t==="x"||t==="y"?on[t]?null:(on[t]=!0,()=>{on[t]=!1}):on.x||on.y?null:(on.x=on.y=!0,()=>{on.x=on.y=!1})}const Eg=new Set(["width","height","top","left","right","bottom",...bo]);let os;function jw(){os=void 0}const gn={now:()=>(os===void 0&&gn.set(vt.isProcessing||Rb.useManualTiming?vt.timestamp:performance.now()),os),set:t=>{os=t,queueMicrotask(jw)}};function Fc(t,r){t.indexOf(r)===-1&&t.push(r)}function Bc(t,r){const o=t.indexOf(r);o>-1&&t.splice(o,1)}class Uc{constructor(){this.subscriptions=[]}add(r){return Fc(this.subscriptions,r),()=>Bc(this.subscriptions,r)}notify(r,o,a){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](r,o,a);else for(let u=0;u<l;u++){const c=this.subscriptions[u];c&&c(r,o,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Og(t,r){return r?t*(1e3/r):0}const dh=30,Iw=t=>!isNaN(parseFloat(t));class Vw{constructor(r,o={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,l=!0)=>{const u=gn.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),l&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(r),this.owner=o.owner}setCurrent(r){this.current=r,this.updatedAt=gn.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=Iw(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new Uc);const a=this.events[r].add(o);return r==="change"?()=>{a(),We.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r,o=!0){!o||!this.passiveEffect?this.updateAndNotify(r,o):this.passiveEffect(r,this.updateAndNotify)}setWithVelocity(r,o,a){this.set(o),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-a}jump(r,o=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=gn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>dh)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,dh);return Og(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ci(t,r){return new Vw(t,r)}function Nw(t,r,o){t.hasValue(r)?t.getValue(r).set(o):t.addValue(r,Ci(o))}function Fw(t,r){const o=ks(t,r);let{transitionEnd:a={},transition:l={},...u}=o||{};u={...u,...a};for(const c in u){const d=Zb(u[c]);Nw(t,c,d)}}function Bw(t){return!!(St(t)&&t.add)}function Zu(t,r){const o=t.getValue("willChange");if(Bw(o))return o.add(r)}function _g(t){return t.props[ig]}const Ag=(t,r,o)=>(((1-3*o+3*r)*t+(3*o-6*r))*t+3*r)*t,Uw=1e-7,$w=12;function qw(t,r,o,a,l){let u,c,d=0;do c=r+(o-r)/2,u=Ag(c,a,l)-t,u>0?o=c:r=c;while(Math.abs(u)>Uw&&++d<$w);return c}function Mi(t,r,o,a){if(t===r&&o===a)return Nt;const l=u=>qw(u,0,1,t,o);return u=>u===0||u===1?u:Ag(l(u),r,a)}const Rg=t=>r=>r<=.5?t(2*r)/2:(2-t(2*(1-r)))/2,Dg=t=>r=>1-t(1-r),Mg=Mi(.33,1.53,.69,.99),$c=Dg(Mg),Lg=Rg($c),zg=t=>(t*=2)<1?.5*$c(t):.5*(2-Math.pow(2,-10*(t-1))),qc=t=>1-Math.sin(Math.acos(t)),jg=Dg(qc),Ig=Rg(qc),Vg=t=>/^0[^.\s]+$/u.test(t);function Hw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Vg(t):!0}const bi=t=>Math.round(t*1e5)/1e5,Hc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ww(t){return t==null}const Kw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wc=(t,r)=>o=>!!(typeof o=="string"&&Kw.test(o)&&o.startsWith(t)||r&&!Ww(o)&&Object.prototype.hasOwnProperty.call(o,r)),Ng=(t,r,o)=>a=>{if(typeof a!="string")return a;const[l,u,c,d]=a.match(Hc);return{[t]:parseFloat(l),[r]:parseFloat(u),[o]:parseFloat(c),alpha:d!==void 0?parseFloat(d):1}},Gw=t=>zn(0,255,t),Cu={...wo,transform:t=>Math.round(Gw(t))},Cr={test:Wc("rgb","red"),parse:Ng("red","green","blue"),transform:({red:t,green:r,blue:o,alpha:a=1})=>"rgba("+Cu.transform(t)+", "+Cu.transform(r)+", "+Cu.transform(o)+", "+bi(Ti.transform(a))+")"};function Xw(t){let r="",o="",a="",l="";return t.length>5?(r=t.substring(1,3),o=t.substring(3,5),a=t.substring(5,7),l=t.substring(7,9)):(r=t.substring(1,2),o=t.substring(2,3),a=t.substring(3,4),l=t.substring(4,5),r+=r,o+=o,a+=a,l+=l),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:l?parseInt(l,16)/255:1}}const Ju={test:Wc("#"),parse:Xw,transform:Cr.transform},ao={test:Wc("hsl","hue"),parse:Ng("hue","saturation","lightness"),transform:({hue:t,saturation:r,lightness:o,alpha:a=1})=>"hsla("+Math.round(t)+", "+mn.transform(bi(r))+", "+mn.transform(bi(o))+", "+bi(Ti.transform(a))+")"},Pt={test:t=>Cr.test(t)||Ju.test(t)||ao.test(t),parse:t=>Cr.test(t)?Cr.parse(t):ao.test(t)?ao.parse(t):Ju.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Cr.transform(t):ao.transform(t)},Yw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Qw(t){var r,o;return isNaN(t)&&typeof t=="string"&&(((r=t.match(Hc))===null||r===void 0?void 0:r.length)||0)+(((o=t.match(Yw))===null||o===void 0?void 0:o.length)||0)>0}const Fg="number",Bg="color",Zw="var",Jw="var(",ph="${}",ex=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ei(t){const r=t.toString(),o=[],a={color:[],number:[],var:[]},l=[];let u=0;const d=r.replace(ex,p=>(Pt.test(p)?(a.color.push(u),l.push(Bg),o.push(Pt.parse(p))):p.startsWith(Jw)?(a.var.push(u),l.push(Zw),o.push(p)):(a.number.push(u),l.push(Fg),o.push(parseFloat(p))),++u,ph)).split(ph);return{values:o,split:d,indexes:a,types:l}}function Ug(t){return Ei(t).values}function $g(t){const{split:r,types:o}=Ei(t),a=r.length;return l=>{let u="";for(let c=0;c<a;c++)if(u+=r[c],l[c]!==void 0){const d=o[c];d===Fg?u+=bi(l[c]):d===Bg?u+=Pt.transform(l[c]):u+=l[c]}return u}}const tx=t=>typeof t=="number"?0:t;function nx(t){const r=Ug(t);return $g(t)(r.map(tx))}const ar={test:Qw,parse:Ug,createTransformer:$g,getAnimatableNone:nx},rx=new Set(["brightness","contrast","saturate","opacity"]);function ox(t){const[r,o]=t.slice(0,-1).split("(");if(r==="drop-shadow")return t;const[a]=o.match(Hc)||[];if(!a)return t;const l=o.replace(a,"");let u=rx.has(r)?1:0;return a!==o&&(u*=100),r+"("+u+l+")"}const ix=/\b([a-z-]*)\(.*?\)/gu,ec={...ar,getAnimatableNone:t=>{const r=t.match(ix);return r?r.map(ox).join(" "):t}},ax={...Ac,color:Pt,backgroundColor:Pt,outlineColor:Pt,fill:Pt,stroke:Pt,borderColor:Pt,borderTopColor:Pt,borderRightColor:Pt,borderBottomColor:Pt,borderLeftColor:Pt,filter:ec,WebkitFilter:ec},Kc=t=>ax[t];function qg(t,r){let o=Kc(t);return o!==ec&&(o=ar),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const sx=new Set(["auto","none","0"]);function lx(t,r,o){let a=0,l;for(;a<t.length&&!l;){const u=t[a];typeof u=="string"&&!sx.has(u)&&Ei(u).values.length&&(l=t[a]),a++}if(l&&o)for(const u of r)t[u]=qg(o,l)}const hh=t=>t===wo||t===be,mh=(t,r)=>parseFloat(t.split(", ")[r]),gh=(t,r)=>(o,{transform:a})=>{if(a==="none"||!a)return 0;const l=a.match(/^matrix3d\((.+)\)$/u);if(l)return mh(l[1],r);{const u=a.match(/^matrix\((.+)\)$/u);return u?mh(u[1],t):0}},ux=new Set(["x","y","z"]),cx=bo.filter(t=>!ux.has(t));function fx(t){const r=[];return cx.forEach(o=>{const a=t.getValue(o);a!==void 0&&(r.push([o,a.get()]),a.set(o.startsWith("scale")?1:0))}),r}const mo={width:({x:t},{paddingLeft:r="0",paddingRight:o="0"})=>t.max-t.min-parseFloat(r)-parseFloat(o),height:({y:t},{paddingTop:r="0",paddingBottom:o="0"})=>t.max-t.min-parseFloat(r)-parseFloat(o),top:(t,{top:r})=>parseFloat(r),left:(t,{left:r})=>parseFloat(r),bottom:({y:t},{top:r})=>parseFloat(r)+(t.max-t.min),right:({x:t},{left:r})=>parseFloat(r)+(t.max-t.min),x:gh(4,13),y:gh(5,14)};mo.translateX=mo.x;mo.translateY=mo.y;const Er=new Set;let tc=!1,nc=!1;function Hg(){if(nc){const t=Array.from(Er).filter(a=>a.needsMeasurement),r=new Set(t.map(a=>a.element)),o=new Map;r.forEach(a=>{const l=fx(a);l.length&&(o.set(a,l),a.render())}),t.forEach(a=>a.measureInitialState()),r.forEach(a=>{a.render();const l=o.get(a);l&&l.forEach(([u,c])=>{var d;(d=a.getValue(u))===null||d===void 0||d.set(c)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}nc=!1,tc=!1,Er.forEach(t=>t.complete()),Er.clear()}function Wg(){Er.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(nc=!0)})}function dx(){Wg(),Hg()}class Gc{constructor(r,o,a,l,u,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...r],this.onComplete=o,this.name=a,this.motionValue=l,this.element=u,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Er.add(this),tc||(tc=!0,We.read(Wg),We.resolveKeyframes(Hg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:o,element:a,motionValue:l}=this;for(let u=0;u<r.length;u++)if(r[u]===null)if(u===0){const c=l?.get(),d=r[r.length-1];if(c!==void 0)r[0]=c;else if(a&&o){const p=a.readValue(o,d);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=d),l&&c===void 0&&l.set(r[0])}else r[u]=r[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Er.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Er.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Kg=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),px=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function hx(t){const r=px.exec(t);if(!r)return[,];const[,o,a,l]=r;return[`--${o??a}`,l]}function Gg(t,r,o=1){const[a,l]=hx(t);if(!a)return;const u=window.getComputedStyle(r).getPropertyValue(a);if(u){const c=u.trim();return Kg(c)?parseFloat(c):c}return _c(l)?Gg(l,r,o+1):l}const Xg=t=>r=>r.test(t),mx={test:t=>t==="auto",parse:t=>t},Yg=[wo,be,mn,or,ow,rw,mx],yh=t=>Yg.find(Xg(t));class Qg extends Gc{constructor(r,o,a,l,u){super(r,o,a,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:o,name:a}=this;if(!o||!o.current)return;super.readKeyframes();for(let p=0;p<r.length;p++){let m=r[p];if(typeof m=="string"&&(m=m.trim(),_c(m))){const g=Gg(m,o.current);g!==void 0&&(r[p]=g),p===r.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!Eg.has(a)||r.length!==2)return;const[l,u]=r,c=yh(l),d=yh(u);if(c!==d)if(hh(c)&&hh(d))for(let p=0;p<r.length;p++){const m=r[p];typeof m=="string"&&(r[p]=parseFloat(m))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:o}=this,a=[];for(let l=0;l<r.length;l++)Hw(r[l])&&a.push(l);a.length&&lx(r,a,o)}measureInitialState(){const{element:r,unresolvedKeyframes:o,name:a}=this;if(!r||!r.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=mo[a](r.measureViewportBox(),window.getComputedStyle(r.current)),o[0]=this.measuredOrigin;const l=o[o.length-1];l!==void 0&&r.getValue(a,l).jump(l,!1)}measureEndState(){var r;const{element:o,name:a,unresolvedKeyframes:l}=this;if(!o||!o.current)return;const u=o.getValue(a);u&&u.jump(this.measuredOrigin,!1);const c=l.length-1,d=l[c];l[c]=mo[a](o.measureViewportBox(),window.getComputedStyle(o.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),!((r=this.removedTransforms)===null||r===void 0)&&r.length&&this.removedTransforms.forEach(([p,m])=>{o.getValue(p).set(m)}),this.resolveNoneKeyframes()}}const vh=(t,r)=>r==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ar.test(t)||t==="0")&&!t.startsWith("url("));function gx(t){const r=t[0];if(t.length===1)return!0;for(let o=0;o<t.length;o++)if(t[o]!==r)return!0}function yx(t,r,o,a){const l=t[0];if(l===null)return!1;if(r==="display"||r==="visibility")return!0;const u=t[t.length-1],c=vh(l,r),d=vh(u,r);return!c||!d?!1:gx(t)||(o==="spring"||Ic(o))&&a}const vx=t=>t!==null;function Ps(t,{repeat:r,repeatType:o="loop"},a){const l=t.filter(vx),u=r&&o!=="loop"&&r%2===1?0:l.length-1;return!u||a===void 0?l[u]:a}const bx=40;class Zg{constructor({autoplay:r=!0,delay:o=0,type:a="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:c="loop",...d}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=gn.now(),this.options={autoplay:r,delay:o,type:a,repeat:l,repeatDelay:u,repeatType:c,...d},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>bx?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&dx(),this._resolved}onKeyframesResolved(r,o){this.resolvedAt=gn.now(),this.hasAttemptedResolve=!0;const{name:a,type:l,velocity:u,delay:c,onComplete:d,onUpdate:p,isGenerator:m}=this.options;if(!m&&!yx(r,a,l,u))if(c)this.options.duration=0;else{p&&p(Ps(r,this.options,o)),d&&d(),this.resolveFinishedPromise();return}const g=this.initPlayback(r,o);g!==!1&&(this._resolved={keyframes:r,finalKeyframe:o,...g},this.onPostResolved())}onPostResolved(){}then(r,o){return this.currentFinishedPromise.then(r,o)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(r=>{this.resolveFinishedPromise=r})}}const Ze=(t,r,o)=>t+(r-t)*o;function Eu(t,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(r-t)*6*o:o<1/2?r:o<2/3?t+(r-t)*(2/3-o)*6:t}function wx({hue:t,saturation:r,lightness:o,alpha:a}){t/=360,r/=100,o/=100;let l=0,u=0,c=0;if(!r)l=u=c=o;else{const d=o<.5?o*(1+r):o+r-o*r,p=2*o-d;l=Eu(p,d,t+1/3),u=Eu(p,d,t),c=Eu(p,d,t-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:a}}function cs(t,r){return o=>o>0?r:t}const Ou=(t,r,o)=>{const a=t*t,l=o*(r*r-a)+a;return l<0?0:Math.sqrt(l)},xx=[Ju,Cr,ao],kx=t=>xx.find(r=>r.test(t));function bh(t){const r=kx(t);if(!r)return!1;let o=r.parse(t);return r===ao&&(o=wx(o)),o}const wh=(t,r)=>{const o=bh(t),a=bh(r);if(!o||!a)return cs(t,r);const l={...o};return u=>(l.red=Ou(o.red,a.red,u),l.green=Ou(o.green,a.green,u),l.blue=Ou(o.blue,a.blue,u),l.alpha=Ze(o.alpha,a.alpha,u),Cr.transform(l))},Px=(t,r)=>o=>r(t(o)),Li=(...t)=>t.reduce(Px),rc=new Set(["none","hidden"]);function Sx(t,r){return rc.has(t)?o=>o<=0?t:r:o=>o>=1?r:t}function Tx(t,r){return o=>Ze(t,r,o)}function Xc(t){return typeof t=="number"?Tx:typeof t=="string"?_c(t)?cs:Pt.test(t)?wh:Ox:Array.isArray(t)?Jg:typeof t=="object"?Pt.test(t)?wh:Cx:cs}function Jg(t,r){const o=[...t],a=o.length,l=t.map((u,c)=>Xc(u)(u,r[c]));return u=>{for(let c=0;c<a;c++)o[c]=l[c](u);return o}}function Cx(t,r){const o={...t,...r},a={};for(const l in o)t[l]!==void 0&&r[l]!==void 0&&(a[l]=Xc(t[l])(t[l],r[l]));return l=>{for(const u in a)o[u]=a[u](l);return o}}function Ex(t,r){var o;const a=[],l={color:0,var:0,number:0};for(let u=0;u<r.values.length;u++){const c=r.types[u],d=t.indexes[c][l[c]],p=(o=t.values[d])!==null&&o!==void 0?o:0;a[u]=p,l[c]++}return a}const Ox=(t,r)=>{const o=ar.createTransformer(r),a=Ei(t),l=Ei(r);return a.indexes.var.length===l.indexes.var.length&&a.indexes.color.length===l.indexes.color.length&&a.indexes.number.length>=l.indexes.number.length?rc.has(t)&&!l.values.length||rc.has(r)&&!a.values.length?Sx(t,r):Li(Jg(Ex(a,l),l.values),o):cs(t,r)};function ey(t,r,o){return typeof t=="number"&&typeof r=="number"&&typeof o=="number"?Ze(t,r,o):Xc(t)(t,r)}const _x=5;function ty(t,r,o){const a=Math.max(r-_x,0);return Og(o-t(a),r-a)}const rt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},xh=.001;function Ax({duration:t=rt.duration,bounce:r=rt.bounce,velocity:o=rt.velocity,mass:a=rt.mass}){let l,u,c=1-r;c=zn(rt.minDamping,rt.maxDamping,c),t=zn(rt.minDuration,rt.maxDuration,Mn(t)),c<1?(l=m=>{const g=m*c,b=g*t,v=g-o,w=oc(m,c),k=Math.exp(-b);return xh-v/w*k},u=m=>{const b=m*c*t,v=b*o+o,w=Math.pow(c,2)*Math.pow(m,2)*t,k=Math.exp(-b),x=oc(Math.pow(m,2),c);return(-l(m)+xh>0?-1:1)*((v-w)*k)/x}):(l=m=>{const g=Math.exp(-m*t),b=(m-o)*t+1;return-.001+g*b},u=m=>{const g=Math.exp(-m*t),b=(o-m)*(t*t);return g*b});const d=5/t,p=Dx(l,u,d);if(t=Dn(t),isNaN(p))return{stiffness:rt.stiffness,damping:rt.damping,duration:t};{const m=Math.pow(p,2)*a;return{stiffness:m,damping:c*2*Math.sqrt(a*m),duration:t}}}const Rx=12;function Dx(t,r,o){let a=o;for(let l=1;l<Rx;l++)a=a-t(a)/r(a);return a}function oc(t,r){return t*Math.sqrt(1-r*r)}const Mx=["duration","bounce"],Lx=["stiffness","damping","mass"];function kh(t,r){return r.some(o=>t[o]!==void 0)}function zx(t){let r={velocity:rt.velocity,stiffness:rt.stiffness,damping:rt.damping,mass:rt.mass,isResolvedFromDuration:!1,...t};if(!kh(t,Lx)&&kh(t,Mx))if(t.visualDuration){const o=t.visualDuration,a=2*Math.PI/(o*1.2),l=a*a,u=2*zn(.05,1,1-(t.bounce||0))*Math.sqrt(l);r={...r,mass:rt.mass,stiffness:l,damping:u}}else{const o=Ax(t);r={...r,...o,mass:rt.mass},r.isResolvedFromDuration=!0}return r}function ny(t=rt.visualDuration,r=rt.bounce){const o=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:r}:t;let{restSpeed:a,restDelta:l}=o;const u=o.keyframes[0],c=o.keyframes[o.keyframes.length-1],d={done:!1,value:u},{stiffness:p,damping:m,mass:g,duration:b,velocity:v,isResolvedFromDuration:w}=zx({...o,velocity:-Mn(o.velocity||0)}),k=v||0,x=m/(2*Math.sqrt(p*g)),S=c-u,O=Mn(Math.sqrt(p/g)),M=Math.abs(S)<5;a||(a=M?rt.restSpeed.granular:rt.restSpeed.default),l||(l=M?rt.restDelta.granular:rt.restDelta.default);let U;if(x<1){const B=oc(O,x);U=ne=>{const ie=Math.exp(-x*O*ne);return c-ie*((k+x*O*S)/B*Math.sin(B*ne)+S*Math.cos(B*ne))}}else if(x===1)U=B=>c-Math.exp(-O*B)*(S+(k+O*S)*B);else{const B=O*Math.sqrt(x*x-1);U=ne=>{const ie=Math.exp(-x*O*ne),K=Math.min(B*ne,300);return c-ie*((k+x*O*S)*Math.sinh(K)+B*S*Math.cosh(K))/B}}const te={calculatedDuration:w&&b||null,next:B=>{const ne=U(B);if(w)d.done=B>=b;else{let ie=0;x<1&&(ie=B===0?Dn(k):ty(U,B,ne));const K=Math.abs(ie)<=a,Q=Math.abs(c-ne)<=l;d.done=K&&Q}return d.value=d.done?c:ne,d},toString:()=>{const B=Math.min(wg(te),Yu),ne=xg(ie=>te.next(B*ie).value,B,30);return B+"ms "+ne}};return te}function Ph({keyframes:t,velocity:r=0,power:o=.8,timeConstant:a=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:c,min:d,max:p,restDelta:m=.5,restSpeed:g}){const b=t[0],v={done:!1,value:b},w=K=>d!==void 0&&K<d||p!==void 0&&K>p,k=K=>d===void 0?p:p===void 0||Math.abs(d-K)<Math.abs(p-K)?d:p;let x=o*r;const S=b+x,O=c===void 0?S:c(S);O!==S&&(x=O-b);const M=K=>-x*Math.exp(-K/a),U=K=>O+M(K),te=K=>{const Q=M(K),ve=U(K);v.done=Math.abs(Q)<=m,v.value=v.done?O:ve};let B,ne;const ie=K=>{w(v.value)&&(B=K,ne=ny({keyframes:[v.value,k(v.value)],velocity:ty(U,K,v.value),damping:l,stiffness:u,restDelta:m,restSpeed:g}))};return ie(0),{calculatedDuration:null,next:K=>{let Q=!1;return!ne&&B===void 0&&(Q=!0,te(K),ie(K)),B!==void 0&&K>=B?ne.next(K-B):(!Q&&te(K),v)}}}const jx=Mi(.42,0,1,1),Ix=Mi(0,0,.58,1),ry=Mi(.42,0,.58,1),Vx=t=>Array.isArray(t)&&typeof t[0]!="number",Nx={linear:Nt,easeIn:jx,easeInOut:ry,easeOut:Ix,circIn:qc,circInOut:Ig,circOut:jg,backIn:$c,backInOut:Lg,backOut:Mg,anticipate:zg},Sh=t=>{if(Vc(t)){eg(t.length===4);const[r,o,a,l]=t;return Mi(r,o,a,l)}else if(typeof t=="string")return Nx[t];return t};function Fx(t,r,o){const a=[],l=o||ey,u=t.length-1;for(let c=0;c<u;c++){let d=l(t[c],t[c+1]);if(r){const p=Array.isArray(r)?r[c]||Nt:r;d=Li(p,d)}a.push(d)}return a}function Bx(t,r,{clamp:o=!0,ease:a,mixer:l}={}){const u=t.length;if(eg(u===r.length),u===1)return()=>r[0];if(u===2&&r[0]===r[1])return()=>r[1];const c=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),r=[...r].reverse());const d=Fx(r,a,l),p=d.length,m=g=>{if(c&&g<t[0])return r[0];let b=0;if(p>1)for(;b<t.length-2&&!(g<t[b+1]);b++);const v=po(t[b],t[b+1],g);return d[b](v)};return o?g=>m(zn(t[0],t[u-1],g)):m}function Ux(t,r){const o=t[t.length-1];for(let a=1;a<=r;a++){const l=po(0,r,a);t.push(Ze(o,1,l))}}function $x(t){const r=[0];return Ux(r,t.length-1),r}function qx(t,r){return t.map(o=>o*r)}function Hx(t,r){return t.map(()=>r||ry).splice(0,t.length-1)}function fs({duration:t=300,keyframes:r,times:o,ease:a="easeInOut"}){const l=Vx(a)?a.map(Sh):Sh(a),u={done:!1,value:r[0]},c=qx(o&&o.length===r.length?o:$x(r),t),d=Bx(c,r,{ease:Array.isArray(l)?l:Hx(r,l)});return{calculatedDuration:t,next:p=>(u.value=d(p),u.done=p>=t,u)}}const Wx=t=>{const r=({timestamp:o})=>t(o);return{start:()=>We.update(r,!0),stop:()=>ir(r),now:()=>vt.isProcessing?vt.timestamp:gn.now()}},Kx={decay:Ph,inertia:Ph,tween:fs,keyframes:fs,spring:ny},Gx=t=>t/100;class Yc extends Zg{constructor(r){super(r),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:p}=this.options;p&&p()};const{name:o,motionValue:a,element:l,keyframes:u}=this.options,c=l?.KeyframeResolver||Gc,d=(p,m)=>this.onKeyframesResolved(p,m);this.resolver=new c(u,d,o,a,l),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(r){const{type:o="keyframes",repeat:a=0,repeatDelay:l=0,repeatType:u,velocity:c=0}=this.options,d=Ic(o)?o:Kx[o]||fs;let p,m;d!==fs&&typeof r[0]!="number"&&(p=Li(Gx,ey(r[0],r[1])),r=[0,100]);const g=d({...this.options,keyframes:r});u==="mirror"&&(m=d({...this.options,keyframes:[...r].reverse(),velocity:-c})),g.calculatedDuration===null&&(g.calculatedDuration=wg(g));const{calculatedDuration:b}=g,v=b+l,w=v*(a+1)-l;return{generator:g,mirroredGenerator:m,mapPercentToKeyframes:p,calculatedDuration:b,resolvedDuration:v,totalDuration:w}}onPostResolved(){const{autoplay:r=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!r?this.pause():this.state=this.pendingPlayState}tick(r,o=!1){const{resolved:a}=this;if(!a){const{keyframes:K}=this.options;return{done:!0,value:K[K.length-1]}}const{finalKeyframe:l,generator:u,mirroredGenerator:c,mapPercentToKeyframes:d,keyframes:p,calculatedDuration:m,totalDuration:g,resolvedDuration:b}=a;if(this.startTime===null)return u.next(0);const{delay:v,repeat:w,repeatType:k,repeatDelay:x,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-g/this.speed,this.startTime)),o?this.currentTime=r:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(r-this.startTime)*this.speed;const O=this.currentTime-v*(this.speed>=0?1:-1),M=this.speed>=0?O<0:O>g;this.currentTime=Math.max(O,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let U=this.currentTime,te=u;if(w){const K=Math.min(this.currentTime,g)/b;let Q=Math.floor(K),ve=K%1;!ve&&K>=1&&(ve=1),ve===1&&Q--,Q=Math.min(Q,w+1),!!(Q%2)&&(k==="reverse"?(ve=1-ve,x&&(ve-=x/b)):k==="mirror"&&(te=c)),U=zn(0,1,ve)*b}const B=M?{done:!1,value:p[0]}:te.next(U);d&&(B.value=d(B.value));let{done:ne}=B;!M&&m!==null&&(ne=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const ie=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ne);return ie&&l!==void 0&&(B.value=Ps(p,this.options,l)),S&&S(B.value),ie&&this.finish(),B}get duration(){const{resolved:r}=this;return r?Mn(r.calculatedDuration):0}get time(){return Mn(this.currentTime)}set time(r){r=Dn(r),this.currentTime=r,this.holdTime!==null||this.speed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.speed)}get speed(){return this.playbackSpeed}set speed(r){const o=this.playbackSpeed!==r;this.playbackSpeed=r,o&&(this.time=Mn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:r=Wx,onPlay:o,startTime:a}=this.options;this.driver||(this.driver=r(u=>this.tick(u))),o&&o();const l=this.driver.now();this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=l):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var r;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(r=this.currentTime)!==null&&r!==void 0?r:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:r}=this.options;r&&r()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}}const Xx=new Set(["opacity","clipPath","filter","transform"]);function Yx(t,r,o,{delay:a=0,duration:l=300,repeat:u=0,repeatType:c="loop",ease:d="easeInOut",times:p}={}){const m={[r]:o};p&&(m.offset=p);const g=Pg(d,l);return Array.isArray(g)&&(m.easing=g),t.animate(m,{delay:a,duration:l,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal"})}const Qx=kc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ds=10,Zx=2e4;function Jx(t){return Ic(t.type)||t.type==="spring"||!kg(t.ease)}function ek(t,r){const o=new Yc({...r,keyframes:t,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:t[0]};const l=[];let u=0;for(;!a.done&&u<Zx;)a=o.sample(u),l.push(a.value),u+=ds;return{times:void 0,keyframes:l,duration:u-ds,ease:"linear"}}const oy={anticipate:zg,backInOut:Lg,circInOut:Ig};function tk(t){return t in oy}class Th extends Zg{constructor(r){super(r);const{name:o,motionValue:a,element:l,keyframes:u}=this.options;this.resolver=new Qg(u,(c,d)=>this.onKeyframesResolved(c,d),o,a,l),this.resolver.scheduleResolve()}initPlayback(r,o){let{duration:a=300,times:l,ease:u,type:c,motionValue:d,name:p,startTime:m}=this.options;if(!d.owner||!d.owner.current)return!1;if(typeof u=="string"&&us()&&tk(u)&&(u=oy[u]),Jx(this.options)){const{onComplete:b,onUpdate:v,motionValue:w,element:k,...x}=this.options,S=ek(r,x);r=S.keyframes,r.length===1&&(r[1]=r[0]),a=S.duration,l=S.times,u=S.ease,c="keyframes"}const g=Yx(d.owner.current,p,r,{...this.options,duration:a,times:l,ease:u});return g.startTime=m??this.calcStartTime(),this.pendingTimeline?(lh(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:b}=this.options;d.set(Ps(r,this.options,o)),b&&b(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:a,times:l,type:c,ease:u,keyframes:r}}get duration(){const{resolved:r}=this;if(!r)return 0;const{duration:o}=r;return Mn(o)}get time(){const{resolved:r}=this;if(!r)return 0;const{animation:o}=r;return Mn(o.currentTime||0)}set time(r){const{resolved:o}=this;if(!o)return;const{animation:a}=o;a.currentTime=Dn(r)}get speed(){const{resolved:r}=this;if(!r)return 1;const{animation:o}=r;return o.playbackRate}set speed(r){const{resolved:o}=this;if(!o)return;const{animation:a}=o;a.playbackRate=r}get state(){const{resolved:r}=this;if(!r)return"idle";const{animation:o}=r;return o.playState}get startTime(){const{resolved:r}=this;if(!r)return null;const{animation:o}=r;return o.startTime}attachTimeline(r){if(!this._resolved)this.pendingTimeline=r;else{const{resolved:o}=this;if(!o)return Nt;const{animation:a}=o;lh(a,r)}return Nt}play(){if(this.isStopped)return;const{resolved:r}=this;if(!r)return;const{animation:o}=r;o.playState==="finished"&&this.updateFinishedPromise(),o.play()}pause(){const{resolved:r}=this;if(!r)return;const{animation:o}=r;o.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:r}=this;if(!r)return;const{animation:o,keyframes:a,duration:l,type:u,ease:c,times:d}=r;if(o.playState==="idle"||o.playState==="finished")return;if(this.time){const{motionValue:m,onUpdate:g,onComplete:b,element:v,...w}=this.options,k=new Yc({...w,keyframes:a,duration:l,type:u,ease:c,times:d,isGenerator:!0}),x=Dn(this.time);m.setWithVelocity(k.sample(x-ds).value,k.sample(x).value,ds)}const{onStop:p}=this.options;p&&p(),this.cancel()}complete(){const{resolved:r}=this;r&&r.animation.finish()}cancel(){const{resolved:r}=this;r&&r.animation.cancel()}static supports(r){const{motionValue:o,name:a,repeatDelay:l,repeatType:u,damping:c,type:d}=r;if(!o||!o.owner||!(o.owner.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=o.owner.getProps();return Qx()&&a&&Xx.has(a)&&!p&&!m&&!l&&u!=="mirror"&&c!==0&&d!=="inertia"}}const nk={type:"spring",stiffness:500,damping:25,restSpeed:10},rk=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),ok={type:"keyframes",duration:.8},ik={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ak=(t,{keyframes:r})=>r.length>2?ok:_r.has(t)?t.startsWith("scale")?rk(r[1]):nk:ik;function sk({when:t,delay:r,delayChildren:o,staggerChildren:a,staggerDirection:l,repeat:u,repeatType:c,repeatDelay:d,from:p,elapsed:m,...g}){return!!Object.keys(g).length}const Qc=(t,r,o,a={},l,u)=>c=>{const d=jc(a,t)||{},p=d.delay||a.delay||0;let{elapsed:m=0}=a;m=m-Dn(p);let g={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:r.getVelocity(),...d,delay:-m,onUpdate:v=>{r.set(v),d.onUpdate&&d.onUpdate(v)},onComplete:()=>{c(),d.onComplete&&d.onComplete()},name:t,motionValue:r,element:u?void 0:l};sk(d)||(g={...g,...ak(t,g)}),g.duration&&(g.duration=Dn(g.duration)),g.repeatDelay&&(g.repeatDelay=Dn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let b=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(b=!0)),b&&!u&&r.get()!==void 0){const v=Ps(g.keyframes,d);if(v!==void 0)return We.update(()=>{g.onUpdate(v),g.onComplete()}),new Cw([])}return!u&&Th.supports(g)?new Th(g):new Yc(g)};function lk({protectedKeys:t,needsAnimating:r},o){const a=t.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,a}function iy(t,r,{delay:o=0,transitionOverride:a,type:l}={}){var u;let{transition:c=t.getDefaultTransition(),transitionEnd:d,...p}=r;a&&(c=a);const m=[],g=l&&t.animationState&&t.animationState.getState()[l];for(const b in p){const v=t.getValue(b,(u=t.latestValues[b])!==null&&u!==void 0?u:null),w=p[b];if(w===void 0||g&&lk(g,b))continue;const k={delay:o,...jc(c||{},b)};let x=!1;if(window.MotionHandoffAnimation){const O=_g(t);if(O){const M=window.MotionHandoffAnimation(O,b,We);M!==null&&(k.startTime=M,x=!0)}}Zu(t,b),v.start(Qc(b,v,w,t.shouldReduceMotion&&Eg.has(b)?{type:!1}:k,t,x));const S=v.animation;S&&m.push(S)}return d&&Promise.all(m).then(()=>{We.update(()=>{d&&Fw(t,d)})}),m}function ic(t,r,o={}){var a;const l=ks(t,r,o.type==="exit"?(a=t.presenceContext)===null||a===void 0?void 0:a.custom:void 0);let{transition:u=t.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(u=o.transitionOverride);const c=l?()=>Promise.all(iy(t,l,o)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:b,staggerDirection:v}=u;return uk(t,r,g+m,b,v,o)}:()=>Promise.resolve(),{when:p}=u;if(p){const[m,g]=p==="beforeChildren"?[c,d]:[d,c];return m().then(()=>g())}else return Promise.all([c(),d(o.delay)])}function uk(t,r,o=0,a=0,l=1,u){const c=[],d=(t.variantChildren.size-1)*a,p=l===1?(m=0)=>m*a:(m=0)=>d-m*a;return Array.from(t.variantChildren).sort(ck).forEach((m,g)=>{m.notify("AnimationStart",r),c.push(ic(m,r,{...u,delay:o+p(g)}).then(()=>m.notify("AnimationComplete",r)))}),Promise.all(c)}function ck(t,r){return t.sortNodePosition(r)}function fk(t,r,o={}){t.notify("AnimationStart",r);let a;if(Array.isArray(r)){const l=r.map(u=>ic(t,u,o));a=Promise.all(l)}else if(typeof r=="string")a=ic(t,r,o);else{const l=typeof r=="function"?ks(t,r,o.custom):r;a=Promise.all(iy(t,l,o))}return a.then(()=>{t.notify("AnimationComplete",r)})}const dk=Sc.length;function ay(t){if(!t)return;if(!t.isControllingVariants){const o=t.parent?ay(t.parent)||{}:{};return t.props.initial!==void 0&&(o.initial=t.props.initial),o}const r={};for(let o=0;o<dk;o++){const a=Sc[o],l=t.props[a];(Si(l)||l===!1)&&(r[a]=l)}return r}const pk=[...Pc].reverse(),hk=Pc.length;function mk(t){return r=>Promise.all(r.map(({animation:o,options:a})=>fk(t,o,a)))}function gk(t){let r=mk(t),o=Ch(),a=!0;const l=p=>(m,g)=>{var b;const v=ks(t,g,p==="exit"?(b=t.presenceContext)===null||b===void 0?void 0:b.custom:void 0);if(v){const{transition:w,transitionEnd:k,...x}=v;m={...m,...x,...k}}return m};function u(p){r=p(t)}function c(p){const{props:m}=t,g=ay(t.parent)||{},b=[],v=new Set;let w={},k=1/0;for(let S=0;S<hk;S++){const O=pk[S],M=o[O],U=m[O]!==void 0?m[O]:g[O],te=Si(U),B=O===p?M.isActive:null;B===!1&&(k=S);let ne=U===g[O]&&U!==m[O]&&te;if(ne&&a&&t.manuallyAnimateOnMount&&(ne=!1),M.protectedKeys={...w},!M.isActive&&B===null||!U&&!M.prevProp||ws(U)||typeof U=="boolean")continue;const ie=yk(M.prevProp,U);let K=ie||O===p&&M.isActive&&!ne&&te||S>k&&te,Q=!1;const ve=Array.isArray(U)?U:[U];let _e=ve.reduce(l(O),{});B===!1&&(_e={});const{prevResolvedValues:Ae={}}=M,Le={...Ae,..._e},$=j=>{K=!0,v.has(j)&&(Q=!0,v.delete(j)),M.needsAnimating[j]=!0;const R=t.getValue(j);R&&(R.liveStyle=!1)};for(const j in Le){const R=_e[j],H=Ae[j];if(w.hasOwnProperty(j))continue;let q=!1;Xu(R)&&Xu(H)?q=!bg(R,H):q=R!==H,q?R!=null?$(j):v.add(j):R!==void 0&&v.has(j)?$(j):M.protectedKeys[j]=!0}M.prevProp=U,M.prevResolvedValues=_e,M.isActive&&(w={...w,..._e}),a&&t.blockInitialAnimation&&(K=!1),K&&(!(ne&&ie)||Q)&&b.push(...ve.map(j=>({animation:j,options:{type:O}})))}if(v.size){const S={};v.forEach(O=>{const M=t.getBaseTarget(O),U=t.getValue(O);U&&(U.liveStyle=!0),S[O]=M??null}),b.push({animation:S})}let x=!!b.length;return a&&(m.initial===!1||m.initial===m.animate)&&!t.manuallyAnimateOnMount&&(x=!1),a=!1,x?r(b):Promise.resolve()}function d(p,m){var g;if(o[p].isActive===m)return Promise.resolve();(g=t.variantChildren)===null||g===void 0||g.forEach(v=>{var w;return(w=v.animationState)===null||w===void 0?void 0:w.setActive(p,m)}),o[p].isActive=m;const b=c(p);for(const v in o)o[v].protectedKeys={};return b}return{animateChanges:c,setActive:d,setAnimateFunction:u,getState:()=>o,reset:()=>{o=Ch(),a=!0}}}function yk(t,r){return typeof r=="string"?r!==t:Array.isArray(r)?!bg(r,t):!1}function Pr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ch(){return{animate:Pr(!0),whileInView:Pr(),whileHover:Pr(),whileTap:Pr(),whileDrag:Pr(),whileFocus:Pr(),exit:Pr()}}class sr{constructor(r){this.isMounted=!1,this.node=r}update(){}}class vk extends sr{constructor(r){super(r),r.animationState||(r.animationState=gk(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();ws(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){var r;this.node.animationState.reset(),(r=this.unmountControls)===null||r===void 0||r.call(this)}}let bk=0;class wk extends sr{constructor(){super(...arguments),this.id=bk++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===a)return;const l=this.node.animationState.setActive("exit",!r);o&&!r&&l.then(()=>o(this.id))}mount(){const{register:r}=this.node.presenceContext||{};r&&(this.unmount=r(this.id))}unmount(){}}const xk={animation:{Feature:vk},exit:{Feature:wk}};function Oi(t,r,o,a={passive:!0}){return t.addEventListener(r,o,a),()=>t.removeEventListener(r,o)}function zi(t){return{point:{x:t.pageX,y:t.pageY}}}const kk=t=>r=>Nc(r)&&t(r,zi(r));function wi(t,r,o,a){return Oi(t,r,kk(o),a)}const Eh=(t,r)=>Math.abs(t-r);function Pk(t,r){const o=Eh(t.x,r.x),a=Eh(t.y,r.y);return Math.sqrt(o**2+a**2)}class sy{constructor(r,o,{transformPagePoint:a,contextWindow:l,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Au(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,w=Pk(b.offset,{x:0,y:0})>=3;if(!v&&!w)return;const{point:k}=b,{timestamp:x}=vt;this.history.push({...k,timestamp:x});const{onStart:S,onMove:O}=this.handlers;v||(S&&S(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,b)},this.handlePointerMove=(b,v)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=_u(v,this.transformPagePoint),We.update(this.updatePoint,!0)},this.handlePointerUp=(b,v)=>{this.end();const{onEnd:w,onSessionEnd:k,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Au(b.type==="pointercancel"?this.lastMoveEventInfo:_u(v,this.transformPagePoint),this.history);this.startEvent&&w&&w(b,S),k&&k(b,S)},!Nc(r))return;this.dragSnapToOrigin=u,this.handlers=o,this.transformPagePoint=a,this.contextWindow=l||window;const c=zi(r),d=_u(c,this.transformPagePoint),{point:p}=d,{timestamp:m}=vt;this.history=[{...p,timestamp:m}];const{onSessionStart:g}=o;g&&g(r,Au(d,this.history)),this.removeListeners=Li(wi(this.contextWindow,"pointermove",this.handlePointerMove),wi(this.contextWindow,"pointerup",this.handlePointerUp),wi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),ir(this.updatePoint)}}function _u(t,r){return r?{point:r(t.point)}:t}function Oh(t,r){return{x:t.x-r.x,y:t.y-r.y}}function Au({point:t},r){return{point:t,delta:Oh(t,ly(r)),offset:Oh(t,Sk(r)),velocity:Tk(r,.1)}}function Sk(t){return t[0]}function ly(t){return t[t.length-1]}function Tk(t,r){if(t.length<2)return{x:0,y:0};let o=t.length-1,a=null;const l=ly(t);for(;o>=0&&(a=t[o],!(l.timestamp-a.timestamp>Dn(r)));)o--;if(!a)return{x:0,y:0};const u=Mn(l.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const c={x:(l.x-a.x)/u,y:(l.y-a.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const uy=1e-4,Ck=1-uy,Ek=1+uy,cy=.01,Ok=0-cy,_k=0+cy;function Ft(t){return t.max-t.min}function Ak(t,r,o){return Math.abs(t-r)<=o}function _h(t,r,o,a=.5){t.origin=a,t.originPoint=Ze(r.min,r.max,t.origin),t.scale=Ft(o)/Ft(r),t.translate=Ze(o.min,o.max,t.origin)-t.originPoint,(t.scale>=Ck&&t.scale<=Ek||isNaN(t.scale))&&(t.scale=1),(t.translate>=Ok&&t.translate<=_k||isNaN(t.translate))&&(t.translate=0)}function xi(t,r,o,a){_h(t.x,r.x,o.x,a?a.originX:void 0),_h(t.y,r.y,o.y,a?a.originY:void 0)}function Ah(t,r,o){t.min=o.min+r.min,t.max=t.min+Ft(r)}function Rk(t,r,o){Ah(t.x,r.x,o.x),Ah(t.y,r.y,o.y)}function Rh(t,r,o){t.min=r.min-o.min,t.max=t.min+Ft(r)}function ki(t,r,o){Rh(t.x,r.x,o.x),Rh(t.y,r.y,o.y)}function Dk(t,{min:r,max:o},a){return r!==void 0&&t<r?t=a?Ze(r,t,a.min):Math.max(t,r):o!==void 0&&t>o&&(t=a?Ze(o,t,a.max):Math.min(t,o)),t}function Dh(t,r,o){return{min:r!==void 0?t.min+r:void 0,max:o!==void 0?t.max+o-(t.max-t.min):void 0}}function Mk(t,{top:r,left:o,bottom:a,right:l}){return{x:Dh(t.x,o,l),y:Dh(t.y,r,a)}}function Mh(t,r){let o=r.min-t.min,a=r.max-t.max;return r.max-r.min<t.max-t.min&&([o,a]=[a,o]),{min:o,max:a}}function Lk(t,r){return{x:Mh(t.x,r.x),y:Mh(t.y,r.y)}}function zk(t,r){let o=.5;const a=Ft(t),l=Ft(r);return l>a?o=po(r.min,r.max-a,t.min):a>l&&(o=po(t.min,t.max-l,r.min)),zn(0,1,o)}function jk(t,r){const o={};return r.min!==void 0&&(o.min=r.min-t.min),r.max!==void 0&&(o.max=r.max-t.min),o}const ac=.35;function Ik(t=ac){return t===!1?t=0:t===!0&&(t=ac),{x:Lh(t,"left","right"),y:Lh(t,"top","bottom")}}function Lh(t,r,o){return{min:zh(t,r),max:zh(t,o)}}function zh(t,r){return typeof t=="number"?t:t[r]||0}const jh=()=>({translate:0,scale:1,origin:0,originPoint:0}),so=()=>({x:jh(),y:jh()}),Ih=()=>({min:0,max:0}),at=()=>({x:Ih(),y:Ih()});function Gt(t){return[t("x"),t("y")]}function fy({top:t,left:r,right:o,bottom:a}){return{x:{min:r,max:o},y:{min:t,max:a}}}function Vk({x:t,y:r}){return{top:r.min,right:t.max,bottom:r.max,left:t.min}}function Nk(t,r){if(!r)return t;const o=r({x:t.left,y:t.top}),a=r({x:t.right,y:t.bottom});return{top:o.y,left:o.x,bottom:a.y,right:a.x}}function Ru(t){return t===void 0||t===1}function sc({scale:t,scaleX:r,scaleY:o}){return!Ru(t)||!Ru(r)||!Ru(o)}function Sr(t){return sc(t)||dy(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function dy(t){return Vh(t.x)||Vh(t.y)}function Vh(t){return t&&t!=="0%"}function ps(t,r,o){const a=t-o,l=r*a;return o+l}function Nh(t,r,o,a,l){return l!==void 0&&(t=ps(t,l,a)),ps(t,o,a)+r}function lc(t,r=0,o=1,a,l){t.min=Nh(t.min,r,o,a,l),t.max=Nh(t.max,r,o,a,l)}function py(t,{x:r,y:o}){lc(t.x,r.translate,r.scale,r.originPoint),lc(t.y,o.translate,o.scale,o.originPoint)}const Fh=.999999999999,Bh=1.0000000000001;function Fk(t,r,o,a=!1){const l=o.length;if(!l)return;r.x=r.y=1;let u,c;for(let d=0;d<l;d++){u=o[d],c=u.projectionDelta;const{visualElement:p}=u.options;p&&p.props.style&&p.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&uo(t,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(r.x*=c.x.scale,r.y*=c.y.scale,py(t,c)),a&&Sr(u.latestValues)&&uo(t,u.latestValues))}r.x<Bh&&r.x>Fh&&(r.x=1),r.y<Bh&&r.y>Fh&&(r.y=1)}function lo(t,r){t.min=t.min+r,t.max=t.max+r}function Uh(t,r,o,a,l=.5){const u=Ze(t.min,t.max,l);lc(t,r,o,u,a)}function uo(t,r){Uh(t.x,r.x,r.scaleX,r.scale,r.originX),Uh(t.y,r.y,r.scaleY,r.scale,r.originY)}function hy(t,r){return fy(Nk(t.getBoundingClientRect(),r))}function Bk(t,r,o){const a=hy(t,o),{scroll:l}=r;return l&&(lo(a.x,l.offset.x),lo(a.y,l.offset.y)),a}const my=({current:t})=>t?t.ownerDocument.defaultView:null,Uk=new WeakMap;class $k{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=at(),this.visualElement=r}start(r,{snapToCursor:o=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const l=g=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(zi(g).point)},u=(g,b)=>{const{drag:v,dragPropagation:w,onDragStart:k}=this.getProps();if(v&&!w&&(this.openDragLock&&this.openDragLock(),this.openDragLock=zw(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gt(S=>{let O=this.getAxisMotionValue(S).get()||0;if(mn.test(O)){const{projection:M}=this.visualElement;if(M&&M.layout){const U=M.layout.layoutBox[S];U&&(O=Ft(U)*(parseFloat(O)/100))}}this.originPoint[S]=O}),k&&We.postRender(()=>k(g,b)),Zu(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},c=(g,b)=>{const{dragPropagation:v,dragDirectionLock:w,onDirectionLock:k,onDrag:x}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:S}=b;if(w&&this.currentDirection===null){this.currentDirection=qk(S),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",b.point,S),this.updateAxis("y",b.point,S),this.visualElement.render(),x&&x(g,b)},d=(g,b)=>this.stop(g,b),p=()=>Gt(g=>{var b;return this.getAnimationState(g)==="paused"&&((b=this.getAxisMotionValue(g).animation)===null||b===void 0?void 0:b.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new sy(r,{onSessionStart:l,onStart:u,onMove:c,onSessionEnd:d,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:my(this.visualElement)})}stop(r,o){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:l}=o;this.startAnimation(l);const{onDragEnd:u}=this.getProps();u&&We.postRender(()=>u(r,o))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(r,o,a){const{drag:l}=this.getProps();if(!a||!Qa(r,l,this.currentDirection))return;const u=this.getAxisMotionValue(r);let c=this.originPoint[r]+a[r];this.constraints&&this.constraints[r]&&(c=Dk(c,this.constraints[r],this.elastic[r])),u.set(c)}resolveConstraints(){var r;const{dragConstraints:o,dragElastic:a}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)===null||r===void 0?void 0:r.layout,u=this.constraints;o&&io(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&l?this.constraints=Mk(l.layoutBox,o):this.constraints=!1,this.elastic=Ik(a),u!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&Gt(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=jk(l.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!io(r))return!1;const a=r.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const u=Bk(a,l.root,this.visualElement.getTransformPagePoint());let c=Lk(l.layout.layoutBox,u);if(o){const d=o(Vk(c));this.hasMutatedConstraints=!!d,d&&(c=fy(d))}return c}startAnimation(r){const{drag:o,dragMomentum:a,dragElastic:l,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:d}=this.getProps(),p=this.constraints||{},m=Gt(g=>{if(!Qa(g,o,this.currentDirection))return;let b=p&&p[g]||{};c&&(b={min:0,max:0});const v=l?200:1e6,w=l?40:1e7,k={type:"inertia",velocity:a?r[g]:0,bounceStiffness:v,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...b};return this.startAxisValueAnimation(g,k)});return Promise.all(m).then(d)}startAxisValueAnimation(r,o){const a=this.getAxisMotionValue(r);return Zu(this.visualElement,r),a.start(Qc(r,a,0,o,this.visualElement,!1))}stopAnimation(){Gt(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){Gt(r=>{var o;return(o=this.getAxisMotionValue(r).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(r){var o;return(o=this.getAxisMotionValue(r).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(r){const o=`_drag${r.toUpperCase()}`,a=this.visualElement.getProps(),l=a[o];return l||this.visualElement.getValue(r,(a.initial?a.initial[r]:void 0)||0)}snapToCursor(r){Gt(o=>{const{drag:a}=this.getProps();if(!Qa(o,a,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(o);if(l&&l.layout){const{min:c,max:d}=l.layout.layoutBox[o];u.set(r[o]-Ze(c,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:a}=this.visualElement;if(!io(o)||!a||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Gt(c=>{const d=this.getAxisMotionValue(c);if(d&&this.constraints!==!1){const p=d.get();l[c]=zk({min:p,max:p},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Gt(c=>{if(!Qa(c,r,null))return;const d=this.getAxisMotionValue(c),{min:p,max:m}=this.constraints[c];d.set(Ze(p,m,l[c]))})}addListeners(){if(!this.visualElement.current)return;Uk.set(this.visualElement,this);const r=this.visualElement.current,o=wi(r,"pointerdown",p=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(p)}),a=()=>{const{dragConstraints:p}=this.getProps();io(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,u=l.addEventListener("measure",a);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),We.read(a);const c=Oi(window,"resize",()=>this.scalePositionWithinConstraints()),d=l.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(Gt(g=>{const b=this.getAxisMotionValue(g);b&&(this.originPoint[g]+=p[g].translate,b.set(b.get()+p[g].translate))}),this.visualElement.render())});return()=>{c(),o(),u(),d&&d()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:a=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:c=ac,dragMomentum:d=!0}=r;return{...r,drag:o,dragDirectionLock:a,dragPropagation:l,dragConstraints:u,dragElastic:c,dragMomentum:d}}}function Qa(t,r,o){return(r===!0||r===t)&&(o===null||o===t)}function qk(t,r=10){let o=null;return Math.abs(t.y)>r?o="y":Math.abs(t.x)>r&&(o="x"),o}class Hk extends sr{constructor(r){super(r),this.removeGroupControls=Nt,this.removeListeners=Nt,this.controls=new $k(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Nt}unmount(){this.removeGroupControls(),this.removeListeners()}}const $h=t=>(r,o)=>{t&&We.postRender(()=>t(r,o))};class Wk extends sr{constructor(){super(...arguments),this.removePointerDownListener=Nt}onPointerDown(r){this.session=new sy(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:my(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:a,onPanEnd:l}=this.node.getProps();return{onSessionStart:$h(r),onStart:$h(o),onMove:a,onEnd:(u,c)=>{delete this.session,l&&We.postRender(()=>l(u,c))}}}mount(){this.removePointerDownListener=wi(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const is={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function qh(t,r){return r.max===r.min?0:t/(r.max-r.min)*100}const hi={correct:(t,r)=>{if(!r.target)return t;if(typeof t=="string")if(be.test(t))t=parseFloat(t);else return t;const o=qh(t,r.target.x),a=qh(t,r.target.y);return`${o}% ${a}%`}},Kk={correct:(t,{treeScale:r,projectionDelta:o})=>{const a=t,l=ar.parse(t);if(l.length>5)return a;const u=ar.createTransformer(t),c=typeof l[0]!="number"?1:0,d=o.x.scale*r.x,p=o.y.scale*r.y;l[0+c]/=d,l[1+c]/=p;const m=Ze(d,p,.5);return typeof l[2+c]=="number"&&(l[2+c]/=m),typeof l[3+c]=="number"&&(l[3+c]/=m),u(l)}};class Gk extends _.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:a,layoutId:l}=this.props,{projection:u}=r;hw(Xk),u&&(o.group&&o.group.add(u),a&&a.register&&l&&a.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),is.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:a,drag:l,isPresent:u}=this.props,c=a.projection;return c&&(c.isPresent=u,l||r.layoutDependency!==o||o===void 0?c.willUpdate():this.safeToRemove(),r.isPresent!==u&&(u?c.promote():c.relegate()||We.postRender(()=>{const d=c.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),Cc.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:a}=this.props,{projection:l}=r;l&&(l.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(l),a&&a.deregister&&a.deregister(l))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function gy(t){const[r,o]=Zm(),a=_.useContext(vc);return An.jsx(Gk,{...t,layoutGroup:a,switchLayoutGroup:_.useContext(ag),isPresent:r,safeToRemove:o})}const Xk={borderRadius:{...hi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hi,borderTopRightRadius:hi,borderBottomLeftRadius:hi,borderBottomRightRadius:hi,boxShadow:Kk};function Yk(t,r,o){const a=St(t)?t:Ci(t);return a.start(Qc("",a,r,o)),a.animation}function Qk(t){return t instanceof SVGElement&&t.tagName!=="svg"}const Zk=(t,r)=>t.depth-r.depth;class Jk{constructor(){this.children=[],this.isDirty=!1}add(r){Fc(this.children,r),this.isDirty=!0}remove(r){Bc(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(Zk),this.isDirty=!1,this.children.forEach(r)}}function eP(t,r){const o=gn.now(),a=({timestamp:l})=>{const u=l-o;u>=r&&(ir(a),t(u-r))};return We.read(a,!0),()=>ir(a)}const yy=["TopLeft","TopRight","BottomLeft","BottomRight"],tP=yy.length,Hh=t=>typeof t=="string"?parseFloat(t):t,Wh=t=>typeof t=="number"||be.test(t);function nP(t,r,o,a,l,u){l?(t.opacity=Ze(0,o.opacity!==void 0?o.opacity:1,rP(a)),t.opacityExit=Ze(r.opacity!==void 0?r.opacity:1,0,oP(a))):u&&(t.opacity=Ze(r.opacity!==void 0?r.opacity:1,o.opacity!==void 0?o.opacity:1,a));for(let c=0;c<tP;c++){const d=`border${yy[c]}Radius`;let p=Kh(r,d),m=Kh(o,d);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||Wh(p)===Wh(m)?(t[d]=Math.max(Ze(Hh(p),Hh(m),a),0),(mn.test(m)||mn.test(p))&&(t[d]+="%")):t[d]=m}(r.rotate||o.rotate)&&(t.rotate=Ze(r.rotate||0,o.rotate||0,a))}function Kh(t,r){return t[r]!==void 0?t[r]:t.borderRadius}const rP=vy(0,.5,jg),oP=vy(.5,.95,Nt);function vy(t,r,o){return a=>a<t?0:a>r?1:o(po(t,r,a))}function Gh(t,r){t.min=r.min,t.max=r.max}function Kt(t,r){Gh(t.x,r.x),Gh(t.y,r.y)}function Xh(t,r){t.translate=r.translate,t.scale=r.scale,t.originPoint=r.originPoint,t.origin=r.origin}function Yh(t,r,o,a,l){return t-=r,t=ps(t,1/o,a),l!==void 0&&(t=ps(t,1/l,a)),t}function iP(t,r=0,o=1,a=.5,l,u=t,c=t){if(mn.test(r)&&(r=parseFloat(r),r=Ze(c.min,c.max,r/100)-c.min),typeof r!="number")return;let d=Ze(u.min,u.max,a);t===u&&(d-=r),t.min=Yh(t.min,r,o,d,l),t.max=Yh(t.max,r,o,d,l)}function Qh(t,r,[o,a,l],u,c){iP(t,r[o],r[a],r[l],r.scale,u,c)}const aP=["x","scaleX","originX"],sP=["y","scaleY","originY"];function Zh(t,r,o,a){Qh(t.x,r,aP,o?o.x:void 0,a?a.x:void 0),Qh(t.y,r,sP,o?o.y:void 0,a?a.y:void 0)}function Jh(t){return t.translate===0&&t.scale===1}function by(t){return Jh(t.x)&&Jh(t.y)}function em(t,r){return t.min===r.min&&t.max===r.max}function lP(t,r){return em(t.x,r.x)&&em(t.y,r.y)}function tm(t,r){return Math.round(t.min)===Math.round(r.min)&&Math.round(t.max)===Math.round(r.max)}function wy(t,r){return tm(t.x,r.x)&&tm(t.y,r.y)}function nm(t){return Ft(t.x)/Ft(t.y)}function rm(t,r){return t.translate===r.translate&&t.scale===r.scale&&t.originPoint===r.originPoint}class uP{constructor(){this.members=[]}add(r){Fc(this.members,r),r.scheduleRender()}remove(r){if(Bc(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){const o=this.members.findIndex(l=>r===l);if(o===0)return!1;let a;for(let l=o;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1){a=u;break}}return a?(this.promote(a),!0):!1}promote(r,o){const a=this.lead;if(r!==a&&(this.prevLead=a,this.lead=r,r.show(),a)){a.instance&&a.scheduleRender(),r.scheduleRender(),r.resumeFrom=a,o&&(r.resumeFrom.preserveOpacity=!0),a.snapshot&&(r.snapshot=a.snapshot,r.snapshot.latestValues=a.animationValues||a.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:l}=r.options;l===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:o,resumingFrom:a}=r;o.onExitComplete&&o.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function cP(t,r,o){let a="";const l=t.x.translate/r.x,u=t.y.translate/r.y,c=o?.z||0;if((l||u||c)&&(a=`translate3d(${l}px, ${u}px, ${c}px) `),(r.x!==1||r.y!==1)&&(a+=`scale(${1/r.x}, ${1/r.y}) `),o){const{transformPerspective:m,rotate:g,rotateX:b,rotateY:v,skewX:w,skewY:k}=o;m&&(a=`perspective(${m}px) ${a}`),g&&(a+=`rotate(${g}deg) `),b&&(a+=`rotateX(${b}deg) `),v&&(a+=`rotateY(${v}deg) `),w&&(a+=`skewX(${w}deg) `),k&&(a+=`skewY(${k}deg) `)}const d=t.x.scale*r.x,p=t.y.scale*r.y;return(d!==1||p!==1)&&(a+=`scale(${d}, ${p})`),a||"none"}const Tr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},yi=typeof window<"u"&&window.MotionDebug!==void 0,Du=["","X","Y","Z"],fP={visibility:"hidden"},om=1e3;let dP=0;function Mu(t,r,o,a){const{latestValues:l}=r;l[t]&&(o[t]=l[t],r.setStaticValue(t,0),a&&(a[t]=0))}function xy(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:r}=t.options;if(!r)return;const o=_g(r);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:l,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(o,"transform",We,!(l||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&xy(a)}function ky({attachResizeListener:t,defaultParent:r,measureScroll:o,checkIsScrollRoot:a,resetTransform:l}){return class{constructor(c={},d=r?.()){this.id=dP++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,yi&&(Tr.totalNodes=Tr.resolvedTargetDeltas=Tr.recalculatedProjection=0),this.nodes.forEach(mP),this.nodes.forEach(wP),this.nodes.forEach(xP),this.nodes.forEach(gP),yi&&window.MotionDebug.record(Tr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new Jk)}addEventListener(c,d){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Uc),this.eventHandlers.get(c).add(d)}notifyListeners(c,...d){const p=this.eventHandlers.get(c);p&&p.notify(...d)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,d=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Qk(c),this.instance=c;const{layoutId:p,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),d&&(m||p)&&(this.isLayoutDirty=!0),t){let b;const v=()=>this.root.updateBlockedByResize=!1;t(c,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=eP(v,250),is.hasAnimatedSinceResize&&(is.hasAnimatedSinceResize=!1,this.nodes.forEach(am))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||m)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:v,hasRelativeTargetChanged:w,layout:k})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||g.getDefaultTransition()||CP,{onLayoutAnimationStart:S,onLayoutAnimationComplete:O}=g.getProps(),M=!this.targetLayout||!wy(this.targetLayout,k)||w,U=!v&&w;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||U||v&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,U);const te={...jc(x,"layout"),onPlay:S,onComplete:O};(g.shouldReduceMotion||this.options.layoutRoot)&&(te.delay=0,te.type=!1),this.startAnimation(te)}else v||am(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=k})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ir(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kP),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&xy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const b=this.path[g];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:d,layout:p}=this.options;if(d===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(im);return}this.isUpdating||this.nodes.forEach(vP),this.isUpdating=!1,this.nodes.forEach(bP),this.nodes.forEach(pP),this.nodes.forEach(hP),this.clearAllSnapshots();const d=gn.now();vt.delta=zn(0,1e3/60,d-vt.timestamp),vt.timestamp=d,vt.isProcessing=!0,Su.update.process(vt),Su.preRender.process(vt),Su.render.process(vt),vt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Cc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yP),this.sharedNodes.forEach(PP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,We.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){We.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=at(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(d=!1),d){const p=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:p,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!l)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!by(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;c&&(d||Sr(this.latestValues)||g)&&(l(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const d=this.measurePageBox();let p=this.removeElementScroll(d);return c&&(p=this.removeTransform(p)),EP(p),{animationId:this.root.animationId,measuredBox:d,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:d}=this.options;if(!d)return at();const p=d.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(OP))){const{scroll:g}=this.root;g&&(lo(p.x,g.offset.x),lo(p.y,g.offset.y))}return p}removeElementScroll(c){var d;const p=at();if(Kt(p,c),!((d=this.scroll)===null||d===void 0)&&d.wasRoot)return p;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:b,options:v}=g;g!==this.root&&b&&v.layoutScroll&&(b.wasRoot&&Kt(p,c),lo(p.x,b.offset.x),lo(p.y,b.offset.y))}return p}applyTransform(c,d=!1){const p=at();Kt(p,c);for(let m=0;m<this.path.length;m++){const g=this.path[m];!d&&g.options.layoutScroll&&g.scroll&&g!==g.root&&uo(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Sr(g.latestValues)&&uo(p,g.latestValues)}return Sr(this.latestValues)&&uo(p,this.latestValues),p}removeTransform(c){const d=at();Kt(d,c);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!Sr(m.latestValues))continue;sc(m.latestValues)&&m.updateSnapshot();const g=at(),b=m.measurePageBox();Kt(g,b),Zh(d,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return Sr(this.latestValues)&&Zh(d,this.latestValues),d}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==vt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var d;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==p;if(!(c||m&&this.isSharedProjectionDirty||this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:v}=this.options;if(!(!this.layout||!(b||v))){if(this.resolvedRelativeTargetAt=vt.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=at(),this.relativeTargetOrigin=at(),ki(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),Kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=at(),this.targetWithTransforms=at()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Rk(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Kt(this.target,this.layout.layoutBox),py(this.target,this.targetDelta)):Kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=at(),this.relativeTargetOrigin=at(),ki(this.relativeTargetOrigin,this.target,w.target),Kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}yi&&Tr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||sc(this.parent.latestValues)||dy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const d=this.getLead(),p=!!this.resumingFrom||this!==d;let m=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(m=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===vt.timestamp&&(m=!1),m)return;const{layout:g,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||b))return;Kt(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,w=this.treeScale.y;Fk(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=at());const{target:k}=d;if(!k){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Xh(this.prevProjectionDelta.x,this.projectionDelta.x),Xh(this.prevProjectionDelta.y,this.projectionDelta.y)),xi(this.projectionDelta,this.layoutCorrected,k,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==w||!rm(this.projectionDelta.x,this.prevProjectionDelta.x)||!rm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",k)),yi&&Tr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var d;if((d=this.options.visualElement)===null||d===void 0||d.scheduleRender(),c){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=so(),this.projectionDelta=so(),this.projectionDeltaWithTransform=so()}setAnimationOrigin(c,d=!1){const p=this.snapshot,m=p?p.latestValues:{},g={...this.latestValues},b=so();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const v=at(),w=p?p.source:void 0,k=this.layout?this.layout.source:void 0,x=w!==k,S=this.getStack(),O=!S||S.members.length<=1,M=!!(x&&!O&&this.options.crossfade===!0&&!this.path.some(TP));this.animationProgress=0;let U;this.mixTargetDelta=te=>{const B=te/1e3;sm(b.x,c.x,B),sm(b.y,c.y,B),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ki(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),SP(this.relativeTarget,this.relativeTargetOrigin,v,B),U&&lP(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=at()),Kt(U,this.relativeTarget)),x&&(this.animationValues=g,nP(g,m,this.latestValues,B,M,O)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=B},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ir(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=We.update(()=>{is.hasAnimatedSinceResize=!0,this.currentAnimation=Yk(0,om,{...c,onUpdate:d=>{this.mixTargetDelta(d),c.onUpdate&&c.onUpdate(d)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(om),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:d,target:p,layout:m,latestValues:g}=c;if(!(!d||!p||!m)){if(this!==c&&this.layout&&m&&Py(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||at();const b=Ft(this.layout.layoutBox.x);p.x.min=c.target.x.min,p.x.max=p.x.min+b;const v=Ft(this.layout.layoutBox.y);p.y.min=c.target.y.min,p.y.max=p.y.min+v}Kt(d,p),uo(d,g),xi(this.projectionDeltaWithTransform,this.layoutCorrected,d,g)}}registerSharedNode(c,d){this.sharedNodes.has(c)||this.sharedNodes.set(c,new uP),this.sharedNodes.get(c).add(d);const m=d.options.initialPromotionConfig;d.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(d):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:d}=this.options;return d?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:d}=this.options;return d?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:d,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),c&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let d=!1;const{latestValues:p}=c;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(d=!0),!d)return;const m={};p.z&&Mu("z",c,m,this.animationValues);for(let g=0;g<Du.length;g++)Mu(`rotate${Du[g]}`,c,m,this.animationValues),Mu(`skew${Du[g]}`,c,m,this.animationValues);c.render();for(const g in m)c.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);c.scheduleRender()}getProjectionStyles(c){var d,p;if(!this.instance||this.isSVG)return;if(!this.isVisible)return fP;const m={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,m.opacity="",m.pointerEvents=rs(c?.pointerEvents)||"",m.transform=g?g(this.latestValues,""):"none",m;const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=rs(c?.pointerEvents)||""),this.hasProjected&&!Sr(this.latestValues)&&(x.transform=g?g({},""):"none",this.hasProjected=!1),x}const v=b.animationValues||b.latestValues;this.applyTransformsToTarget(),m.transform=cP(this.projectionDeltaWithTransform,this.treeScale,v),g&&(m.transform=g(v,m.transform));const{x:w,y:k}=this.projectionDelta;m.transformOrigin=`${w.origin*100}% ${k.origin*100}% 0`,b.animationValues?m.opacity=b===this?(p=(d=v.opacity)!==null&&d!==void 0?d:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:m.opacity=b===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const x in ls){if(v[x]===void 0)continue;const{correct:S,applyTo:O}=ls[x],M=m.transform==="none"?v[x]:S(v[x],b);if(O){const U=O.length;for(let te=0;te<U;te++)m[O[te]]=M}else m[x]=M}return this.options.layoutId&&(m.pointerEvents=b===this?rs(c?.pointerEvents)||"":"none"),m}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var d;return(d=c.currentAnimation)===null||d===void 0?void 0:d.stop()}),this.root.nodes.forEach(im),this.root.sharedNodes.clear()}}}function pP(t){t.updateLayout()}function hP(t){var r;const o=((r=t.resumeFrom)===null||r===void 0?void 0:r.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&o&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:l}=t.layout,{animationType:u}=t.options,c=o.source!==t.layout.source;u==="size"?Gt(b=>{const v=c?o.measuredBox[b]:o.layoutBox[b],w=Ft(v);v.min=a[b].min,v.max=v.min+w}):Py(u,o.layoutBox,a)&&Gt(b=>{const v=c?o.measuredBox[b]:o.layoutBox[b],w=Ft(a[b]);v.max=v.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[b].max=t.relativeTarget[b].min+w)});const d=so();xi(d,a,o.layoutBox);const p=so();c?xi(p,t.applyTransform(l,!0),o.measuredBox):xi(p,a,o.layoutBox);const m=!by(d);let g=!1;if(!t.resumeFrom){const b=t.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:v,layout:w}=b;if(v&&w){const k=at();ki(k,o.layoutBox,v.layoutBox);const x=at();ki(x,a,w.layoutBox),wy(k,x)||(g=!0),b.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=k,t.relativeParent=b)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:p,layoutDelta:d,hasLayoutChanged:m,hasRelativeTargetChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function mP(t){yi&&Tr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function gP(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function yP(t){t.clearSnapshot()}function im(t){t.clearMeasurements()}function vP(t){t.isLayoutDirty=!1}function bP(t){const{visualElement:r}=t.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),t.resetTransform()}function am(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function wP(t){t.resolveTargetDelta()}function xP(t){t.calcProjection()}function kP(t){t.resetSkewAndRotation()}function PP(t){t.removeLeadSnapshot()}function sm(t,r,o){t.translate=Ze(r.translate,0,o),t.scale=Ze(r.scale,1,o),t.origin=r.origin,t.originPoint=r.originPoint}function lm(t,r,o,a){t.min=Ze(r.min,o.min,a),t.max=Ze(r.max,o.max,a)}function SP(t,r,o,a){lm(t.x,r.x,o.x,a),lm(t.y,r.y,o.y,a)}function TP(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const CP={duration:.45,ease:[.4,0,.1,1]},um=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),cm=um("applewebkit/")&&!um("chrome/")?Math.round:Nt;function fm(t){t.min=cm(t.min),t.max=cm(t.max)}function EP(t){fm(t.x),fm(t.y)}function Py(t,r,o){return t==="position"||t==="preserve-aspect"&&!Ak(nm(r),nm(o),.2)}function OP(t){var r;return t!==t.root&&((r=t.scroll)===null||r===void 0?void 0:r.wasRoot)}const _P=ky({attachResizeListener:(t,r)=>Oi(t,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Lu={current:void 0},Sy=ky({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Lu.current){const t=new _P({});t.mount(window),t.setOptions({layoutScroll:!0}),Lu.current=t}return Lu.current},resetTransform:(t,r)=>{t.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),AP={pan:{Feature:Wk},drag:{Feature:Hk,ProjectionNode:Sy,MeasureLayout:gy}};function dm(t,r,o){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",o==="Start");const l="onHover"+o,u=a[l];u&&We.postRender(()=>u(r,zi(r)))}class RP extends sr{mount(){const{current:r}=this.node;r&&(this.unmount=Aw(r,o=>(dm(this.node,o,"Start"),a=>dm(this.node,a,"End"))))}unmount(){}}class DP extends sr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Li(Oi(this.node.current,"focus",()=>this.onFocus()),Oi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function pm(t,r,o){const{props:a}=t;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",o==="Start");const l="onTap"+(o==="End"?"":o),u=a[l];u&&We.postRender(()=>u(r,zi(r)))}class MP extends sr{mount(){const{current:r}=this.node;r&&(this.unmount=Lw(r,o=>(pm(this.node,o,"Start"),(a,{success:l})=>pm(this.node,a,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const uc=new WeakMap,zu=new WeakMap,LP=t=>{const r=uc.get(t.target);r&&r(t)},zP=t=>{t.forEach(LP)};function jP({root:t,...r}){const o=t||document;zu.has(o)||zu.set(o,{});const a=zu.get(o),l=JSON.stringify(r);return a[l]||(a[l]=new IntersectionObserver(zP,{root:t,...r})),a[l]}function IP(t,r,o){const a=jP(r);return uc.set(t,o),a.observe(t),()=>{uc.delete(t),a.unobserve(t)}}const VP={some:0,all:1};class NP extends sr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:o,margin:a,amount:l="some",once:u}=r,c={root:o?o.current:void 0,rootMargin:a,threshold:typeof l=="number"?l:VP[l]},d=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,u&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:b}=this.node.getProps(),v=m?g:b;v&&v(p)};return IP(this.node.current,c,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some(FP(r,o))&&this.startObserver()}unmount(){}}function FP({viewport:t={}},{viewport:r={}}={}){return o=>t[o]!==r[o]}const BP={inView:{Feature:NP},tap:{Feature:MP},focus:{Feature:DP},hover:{Feature:RP}},UP={layout:{ProjectionNode:Sy,MeasureLayout:gy}},cc={current:null},Ty={current:!1};function $P(){if(Ty.current=!0,!!xc)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),r=()=>cc.current=t.matches;t.addListener(r),r()}else cc.current=!1}const qP=[...Yg,Pt,ar],HP=t=>qP.find(Xg(t)),hm=new WeakMap;function WP(t,r,o){for(const a in r){const l=r[a],u=o[a];if(St(l))t.addValue(a,l);else if(St(u))t.addValue(a,Ci(l,{owner:t}));else if(u!==l)if(t.hasValue(a)){const c=t.getValue(a);c.liveStyle===!0?c.jump(l):c.hasAnimated||c.set(l)}else{const c=t.getStaticValue(a);t.addValue(a,Ci(c!==void 0?c:l,{owner:t}))}}for(const a in o)r[a]===void 0&&t.removeValue(a);return r}const mm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class KP{scrapeMotionValuesFromProps(r,o,a){return{}}constructor({parent:r,props:o,presenceContext:a,reducedMotionConfig:l,blockInitialAnimation:u,visualState:c},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Gc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=gn.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,We.render(this.render,!1,!0))};const{latestValues:p,renderState:m,onUpdate:g}=c;this.onUpdate=g,this.latestValues=p,this.baseTarget={...p},this.initialValues=o.initial?{...p}:{},this.renderState=m,this.parent=r,this.props=o,this.presenceContext=a,this.depth=r?r.depth+1:0,this.reducedMotionConfig=l,this.options=d,this.blockInitialAnimation=!!u,this.isControllingVariants=xs(o),this.isVariantNode=og(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:b,...v}=this.scrapeMotionValuesFromProps(o,{},this);for(const w in v){const k=v[w];p[w]!==void 0&&St(k)&&k.set(p[w],!1)}}mount(r){this.current=r,hm.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),Ty.current||$P(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:cc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){hm.delete(this.current),this.projection&&this.projection.unmount(),ir(this.notifyUpdate),ir(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const o=this.features[r];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(r,o){this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)();const a=_r.has(r),l=o.on("change",d=>{this.latestValues[r]=d,this.props.onUpdate&&We.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),u=o.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,r,o)),this.valueSubscriptions.set(r,()=>{l(),u(),c&&c(),o.owner&&o.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in ho){const o=ho[r];if(!o)continue;const{isEnabled:a,Feature:l}=o;if(!this.features[r]&&l&&a(this.props)&&(this.features[r]=new l(this)),this.features[r]){const u=this.features[r];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):at()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let a=0;a<mm.length;a++){const l=mm[a];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,c=r[u];c&&(this.propEventSubscriptions[l]=this.on(l,c))}this.prevMotionValues=WP(this,this.scrapeMotionValuesFromProps(r,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){const a=this.values.get(r);o!==a&&(a&&this.removeValue(r),this.bindToMotionValue(r,o),this.values.set(r,o),this.latestValues[r]=o.get())}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let a=this.values.get(r);return a===void 0&&o!==void 0&&(a=Ci(o===null?void 0:o,{owner:this}),this.addValue(r,a)),a}readValue(r,o){var a;let l=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:(a=this.getBaseTargetFromProps(this.props,r))!==null&&a!==void 0?a:this.readValueFromInstance(this.current,r,this.options);return l!=null&&(typeof l=="string"&&(Kg(l)||Vg(l))?l=parseFloat(l):!HP(l)&&ar.test(o)&&(l=qg(r,o)),this.setBaseTarget(r,St(l)?l.get():l)),St(l)?l.get():l}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){var o;const{initial:a}=this.props;let l;if(typeof a=="string"||typeof a=="object"){const c=Oc(this.props,a,(o=this.presenceContext)===null||o===void 0?void 0:o.custom);c&&(l=c[r])}if(a&&l!==void 0)return l;const u=this.getBaseTargetFromProps(this.props,r);return u!==void 0&&!St(u)?u:this.initialValues[r]!==void 0&&l===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new Uc),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}}class Cy extends KP{constructor(){super(...arguments),this.KeyframeResolver=Qg}sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){return r.style?r.style[o]:void 0}removeValueFromRenderState(r,{vars:o,style:a}){delete o[r],delete a[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;St(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function GP(t){return window.getComputedStyle(t)}class XP extends Cy{constructor(){super(...arguments),this.type="html",this.renderInstance=pg}readValueFromInstance(r,o){if(_r.has(o)){const a=Kc(o);return a&&a.default||0}else{const a=GP(r),l=(cg(o)?a.getPropertyValue(o):a[o])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(r,{transformPagePoint:o}){return hy(r,o)}build(r,o,a){Rc(r,o,a.transformTemplate)}scrapeMotionValuesFromProps(r,o,a){return zc(r,o,a)}}class YP extends Cy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=at}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(_r.has(o)){const a=Kc(o);return a&&a.default||0}return o=hg.has(o)?o:Tc(o),r.getAttribute(o)}scrapeMotionValuesFromProps(r,o,a){return yg(r,o,a)}build(r,o,a){Dc(r,o,this.isSVGTag,a.transformTemplate)}renderInstance(r,o,a,l){mg(r,o,a,l)}mount(r){this.isSVGTag=Lc(r.tagName),super.mount(r)}}const QP=(t,r)=>Ec(t)?new YP(r):new XP(r,{allowProjection:t!==_.Fragment}),ZP=Pw({...xk,...BP,...AP,...UP},QP),BS=Vb(ZP);var ju={},Iu={},Vu={},gm;function JP(){return gm||(gm=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];if(typeof window<"u"){var d;typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(d=window).gtag.apply(d,u)}},o=r;t.default=o}(Vu)),Vu}var Nu={},ym;function eS(){return ym||(ym=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var r=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function o(d){return d.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(p,m,g){return m>0&&m+p.length!==g.length&&p.search(r)>-1&&g.charAt(m-2)!==":"&&(g.charAt(m+p.length)!=="-"||g.charAt(m-1)==="-")&&g.charAt(m-1).search(/[^\s-]/)<0?p.toLowerCase():p.substr(1).search(/[A-Z]|\../)>-1?p:p.charAt(0).toUpperCase()+p.substr(1)})}function a(d){return typeof d=="string"&&d.indexOf("@")!==-1}var l="REDACTED (Potential Email Address)";function u(d){return a(d)?l:d}function c(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,g=d||"";return p&&(g=o(d)),m&&(g=u(g)),g}}(Nu)),Nu}var vm;function tS(){return vm||(vm=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GA4=void 0;var r=c(JP()),o=c(eS()),a=["eventCategory","eventAction","eventLabel","eventValue","hitType"],l=["title","location"],u=["page","hitType"];function c($){return $&&$.__esModule?$:{default:$}}function d($,z){if($==null)return{};var N=p($,z),j,R;if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols($);for(R=0;R<H.length;R++)j=H[R],!(z.indexOf(j)>=0)&&Object.prototype.propertyIsEnumerable.call($,j)&&(N[j]=$[j])}return N}function p($,z){if($==null)return{};var N={},j=Object.keys($),R,H;for(H=0;H<j.length;H++)R=j[H],!(z.indexOf(R)>=0)&&(N[R]=$[R]);return N}function m($){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},m($)}function g($){return w($)||v($)||M($)||b()}function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v($){if(typeof Symbol<"u"&&$[Symbol.iterator]!=null||$["@@iterator"]!=null)return Array.from($)}function w($){if(Array.isArray($))return U($)}function k($,z){var N=Object.keys($);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols($);z&&(j=j.filter(function(R){return Object.getOwnPropertyDescriptor($,R).enumerable})),N.push.apply(N,j)}return N}function x($){for(var z=1;z<arguments.length;z++){var N=arguments[z]!=null?arguments[z]:{};z%2?k(Object(N),!0).forEach(function(j){Q($,j,N[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties($,Object.getOwnPropertyDescriptors(N)):k(Object(N)).forEach(function(j){Object.defineProperty($,j,Object.getOwnPropertyDescriptor(N,j))})}return $}function S($,z){return B($)||te($,z)||M($,z)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M($,z){if($){if(typeof $=="string")return U($,z);var N=Object.prototype.toString.call($).slice(8,-1);if(N==="Object"&&$.constructor&&(N=$.constructor.name),N==="Map"||N==="Set")return Array.from($);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return U($,z)}}function U($,z){(z==null||z>$.length)&&(z=$.length);for(var N=0,j=new Array(z);N<z;N++)j[N]=$[N];return j}function te($,z){var N=$==null?null:typeof Symbol<"u"&&$[Symbol.iterator]||$["@@iterator"];if(N!=null){var j,R,H,q,C=[],V=!0,oe=!1;try{if(H=(N=N.call($)).next,z!==0)for(;!(V=(j=H.call(N)).done)&&(C.push(j.value),C.length!==z);V=!0);}catch(ae){oe=!0,R=ae}finally{try{if(!V&&N.return!=null&&(q=N.return(),Object(q)!==q))return}finally{if(oe)throw R}}return C}}function B($){if(Array.isArray($))return $}function ne($,z){if(!($ instanceof z))throw new TypeError("Cannot call a class as a function")}function ie($,z){for(var N=0;N<z.length;N++){var j=z[N];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty($,ve(j.key),j)}}function K($,z,N){return z&&ie($.prototype,z),Object.defineProperty($,"prototype",{writable:!1}),$}function Q($,z,N){return z=ve(z),z in $?Object.defineProperty($,z,{value:N,enumerable:!0,configurable:!0,writable:!0}):$[z]=N,$}function ve($){var z=_e($,"string");return m(z)==="symbol"?z:String(z)}function _e($,z){if(m($)!=="object"||$===null)return $;var N=$[Symbol.toPrimitive];if(N!==void 0){var j=N.call($,z);if(m(j)!=="object")return j;throw new TypeError("@@toPrimitive must return a primitive value.")}return(z==="string"?String:Number)($)}var Ae=function(){function $(){var z=this;ne(this,$),Q(this,"reset",function(){z.isInitialized=!1,z._testMode=!1,z._currentMeasurementId,z._hasLoadedGA=!1,z._isQueuing=!1,z._queueGtag=[]}),Q(this,"_gtag",function(){for(var N=arguments.length,j=new Array(N),R=0;R<N;R++)j[R]=arguments[R];z._testMode||z._isQueuing?z._queueGtag.push(j):r.default.apply(void 0,j)}),Q(this,"_loadGA",function(N,j){var R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"https://www.googletagmanager.com/gtag/js";if(!(typeof window>"u"||typeof document>"u")&&!z._hasLoadedGA){var H=document.createElement("script");H.async=!0,H.src="".concat(R,"?id=").concat(N),j&&H.setAttribute("nonce",j),document.body.appendChild(H),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},z._hasLoadedGA=!0}}),Q(this,"_toGtagOptions",function(N){if(N){var j={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"},R=Object.entries(N).reduce(function(H,q){var C=S(q,2),V=C[0],oe=C[1];return j[V]?H[j[V]]=oe:H[V]=oe,H},{});return R}}),Q(this,"initialize",function(N){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!N)throw new Error("Require GA_MEASUREMENT_ID");var R=typeof N=="string"?[{trackingId:N}]:N;z._currentMeasurementId=R[0].trackingId;var H=j.gaOptions,q=j.gtagOptions,C=j.nonce,V=j.testMode,oe=V===void 0?!1:V,ae=j.gtagUrl;if(z._testMode=oe,oe||z._loadGA(z._currentMeasurementId,C,ae),z.isInitialized||(z._gtag("js",new Date),R.forEach(function(Re){var Te=x(x(x({},z._toGtagOptions(x(x({},H),Re.gaOptions))),q),Re.gtagOptions);Object.keys(Te).length?z._gtag("config",Re.trackingId,Te):z._gtag("config",Re.trackingId)})),z.isInitialized=!0,!oe){var we=g(z._queueGtag);for(z._queueGtag=[],z._isQueuing=!1;we.length;){var ke=we.shift();z._gtag.apply(z,g(ke)),ke[0]==="get"&&(z._isQueuing=!0)}}}),Q(this,"set",function(N){N&&m(N)==="object"&&(Object.keys(N).length,z._gaCommand("set",N))}),Q(this,"_gaCommandSendEvent",function(N,j,R,H,q){z._gtag("event",j,x(x({event_category:N,event_label:R,value:H},q&&{non_interaction:q.nonInteraction}),z._toGtagOptions(q)))}),Q(this,"_gaCommandSendEventParameters",function(){for(var N=arguments.length,j=new Array(N),R=0;R<N;R++)j[R]=arguments[R];if(typeof j[0]=="string")z._gaCommandSendEvent.apply(z,g(j.slice(1)));else{var H=j[0],q=H.eventCategory,C=H.eventAction,V=H.eventLabel,oe=H.eventValue;H.hitType;var ae=d(H,a);z._gaCommandSendEvent(q,C,V,oe,ae)}}),Q(this,"_gaCommandSendTiming",function(N,j,R,H){z._gtag("event","timing_complete",{name:j,value:R,event_category:N,event_label:H})}),Q(this,"_gaCommandSendPageview",function(N,j){if(j&&Object.keys(j).length){var R=z._toGtagOptions(j),H=R.title,q=R.location,C=d(R,l);z._gtag("event","page_view",x(x(x(x({},N&&{page_path:N}),H&&{page_title:H}),q&&{page_location:q}),C))}else N?z._gtag("event","page_view",{page_path:N}):z._gtag("event","page_view")}),Q(this,"_gaCommandSendPageviewParameters",function(){for(var N=arguments.length,j=new Array(N),R=0;R<N;R++)j[R]=arguments[R];if(typeof j[0]=="string")z._gaCommandSendPageview.apply(z,g(j.slice(1)));else{var H=j[0],q=H.page;H.hitType;var C=d(H,u);z._gaCommandSendPageview(q,C)}}),Q(this,"_gaCommandSend",function(){for(var N=arguments.length,j=new Array(N),R=0;R<N;R++)j[R]=arguments[R];var H=typeof j[0]=="string"?j[0]:j[0].hitType;switch(H){case"event":z._gaCommandSendEventParameters.apply(z,j);break;case"pageview":z._gaCommandSendPageviewParameters.apply(z,j);break;case"timing":z._gaCommandSendTiming.apply(z,g(j.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":break;default:}}),Q(this,"_gaCommandSet",function(){for(var N=arguments.length,j=new Array(N),R=0;R<N;R++)j[R]=arguments[R];typeof j[0]=="string"&&(j[0]=Q({},j[0],j[1])),z._gtag("set",z._toGtagOptions(j[0]))}),Q(this,"_gaCommand",function(N){for(var j=arguments.length,R=new Array(j>1?j-1:0),H=1;H<j;H++)R[H-1]=arguments[H];switch(N){case"send":z._gaCommandSend.apply(z,R);break;case"set":z._gaCommandSet.apply(z,R);break;default:}}),Q(this,"ga",function(){for(var N=arguments.length,j=new Array(N),R=0;R<N;R++)j[R]=arguments[R];if(typeof j[0]=="string")z._gaCommand.apply(z,j);else{var H=j[0];z._gtag("get",z._currentMeasurementId,"client_id",function(q){z._isQueuing=!1;var C=z._queueGtag;for(H({get:function(ae){return ae==="clientId"?q:ae==="trackingId"?z._currentMeasurementId:ae==="apiVersion"?"1":void 0}});C.length;){var V=C.shift();z._gtag.apply(z,g(V))}}),z._isQueuing=!0}return z.ga}),Q(this,"event",function(N,j){if(typeof N=="string")z._gtag("event",N,z._toGtagOptions(j));else{var R=N.action,H=N.category,q=N.label,C=N.value,V=N.nonInteraction,oe=N.transport;if(!H||!R)return;var ae={hitType:"event",eventCategory:(0,o.default)(H),eventAction:(0,o.default)(R)};q&&(ae.eventLabel=(0,o.default)(q)),typeof C<"u"&&(typeof C!="number"||(ae.eventValue=C)),typeof V<"u"&&(typeof V!="boolean"||(ae.nonInteraction=V)),typeof oe<"u"&&(typeof oe!="string"||(["beacon","xhr","image"].indexOf(oe),ae.transport=oe)),z._gaCommand("send",ae)}}),Q(this,"send",function(N){z._gaCommand("send",N)}),this.reset()}return K($,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),$}();t.GA4=Ae;var Le=new Ae;t.default=Le}(Iu)),Iu}var bm;function nS(){return bm||(bm=1,function(t){function r(d){"@babel/helpers - typeof";return r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},r(d)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ReactGAImplementation=void 0;var o=l(tS());function a(d){if(typeof WeakMap!="function")return null;var p=new WeakMap,m=new WeakMap;return(a=function(b){return b?m:p})(d)}function l(d,p){if(d&&d.__esModule)return d;if(d===null||r(d)!=="object"&&typeof d!="function")return{default:d};var m=a(p);if(m&&m.has(d))return m.get(d);var g={},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in d)if(v!=="default"&&Object.prototype.hasOwnProperty.call(d,v)){var w=b?Object.getOwnPropertyDescriptor(d,v):null;w&&(w.get||w.set)?Object.defineProperty(g,v,w):g[v]=d[v]}return g.default=d,m&&m.set(d,g),g}var u=o.GA4;t.ReactGAImplementation=u;var c=o.default;t.default=c}(ju)),ju}var rS=nS();const US=go(rS);var Fu={exports:{}},wm;function oS(){return wm||(wm=1,function(t,r){(function(o,a){t.exports=a()})(window,function(){return function(o){var a={};function l(u){if(a[u])return a[u].exports;var c=a[u]={i:u,l:!1,exports:{}};return o[u].call(c.exports,c,c.exports,l),c.l=!0,c.exports}return l.m=o,l.c=a,l.d=function(u,c,d){l.o(u,c)||Object.defineProperty(u,c,{enumerable:!0,get:d})},l.r=function(u){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},l.t=function(u,c){if(1&c&&(u=l(u)),8&c||4&c&&typeof u=="object"&&u&&u.__esModule)return u;var d=Object.create(null);if(l.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:u}),2&c&&typeof u!="string")for(var p in u)l.d(d,p,function(m){return u[m]}.bind(null,p));return d},l.n=function(u){var c=u&&u.__esModule?function(){return u.default}:function(){return u};return l.d(c,"a",c),c},l.o=function(u,c){return Object.prototype.hasOwnProperty.call(u,c)},l.p="",l(l.s=0)}([function(o,a,l){o.exports=l(1)},function(o,a,l){function u(v){return function(w){if(Array.isArray(w)){for(var k=0,x=new Array(w.length);k<w.length;k++)x[k]=w[k];return x}}(v)||function(w){if(Symbol.iterator in Object(w)||Object.prototype.toString.call(w)==="[object Arguments]")return Array.from(w)}(v)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}l.r(a);var c=!!window.fbq,d=!1,p=function(){var v;if(d){for(var w=arguments.length,k=new Array(w),x=0;x<w;x++)k[x]=arguments[x];(v=console).info.apply(v,u(["[react-facebook-pixel]"].concat(k)))}},m=function(){var v;if(d){for(var w=arguments.length,k=new Array(w),x=0;x<w;x++)k[x]=arguments[x];(v=console).info.apply(v,u(["[react-facebook-pixel]"].concat(k)))}},g=function(){return c||p("Pixel not initialized before using call ReactPixel.init with required params"),c},b={autoConfig:!0,debug:!1};a.default={init:function(v){var w,k,x,S,O,M,U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},te=arguments.length>2&&arguments[2]!==void 0?arguments[2]:b;w=window,k=document,x="script",w.fbq||(S=w.fbq=function(){S.callMethod?S.callMethod.apply(S,arguments):S.queue.push(arguments)},w._fbq||(w._fbq=S),S.push=S,S.loaded=!0,S.version="2.0",S.queue=[],(O=k.createElement(x)).async=!0,O.src="https://connect.facebook.net/en_US/fbevents.js",(M=k.getElementsByTagName(x)[0]).parentNode.insertBefore(O,M)),v?(te.autoConfig===!1&&fbq("set","autoConfig",!1,v),fbq("init",v,U),c=!0,d=te.debug):p("Please insert pixel id for initializing")},pageView:function(){g()&&(fbq("track","PageView"),d&&m("called fbq('track', 'PageView');"))},track:function(v,w){g()&&(fbq("track",v,w),d&&(m("called fbq('track', '".concat(v,"');")),w&&m("with data",w)))},trackSingle:function(v,w,k){g()&&(fbq("trackSingle",v,w,k),d&&(m("called fbq('trackSingle', '".concat(v,"', '").concat(w,"');")),k&&m("with data",k)))},trackCustom:function(v,w){g()&&(fbq("trackCustom",v,w),d&&(m("called fbq('trackCustom', '".concat(v,"');")),w&&m("with data",w)))},trackSingleCustom:function(v,w,k){g()&&(fbq("trackSingle",v,w,k),d&&(m("called fbq('trackSingleCustom', '".concat(v,"', '").concat(w,"');")),k&&m("with data",k)))},grantConsent:function(){g()&&(fbq("consent","grant"),d&&m("called fbq('consent', 'grant');"))},revokeConsent:function(){g()&&(fbq("consent","revoke"),d&&m("called fbq('consent', 'revoke');"))},fbq:function(v){function w(){return v.apply(this,arguments)}return w.toString=function(){return v.toString()},w}(function(){if(g()){for(var v=arguments.length,w=new Array(v),k=0;k<v;k++)w[k]=arguments[k];fbq.apply(void 0,w),d&&(m("called fbq('".concat(w.slice(0,2).join("', '"),"')")),w[2]&&m("with data",w[2]))}})}}])})}(Fu)),Fu.exports}var iS=oS();const $S=go(iS);function dt(t,r){r===void 0&&(r={});var o=r.insertAt;if(t&&typeof document<"u"){var a=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o==="top"&&a.firstChild?a.insertBefore(l,a.firstChild):a.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}}dt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Ne=function(){return Ne=Object.assign||function(t){for(var r,o=1,a=arguments.length;o<a;o++)for(var l in r=arguments[o])Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l]);return t},Ne.apply(this,arguments)};function hs(t){return hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},hs(t)}var aS=/^\s+/,sS=/\s+$/;function me(t,r){if(r=r||{},(t=t||"")instanceof me)return t;if(!(this instanceof me))return new me(t,r);var o=function(a){var l={r:0,g:0,b:0},u=1,c=null,d=null,p=null,m=!1,g=!1;typeof a=="string"&&(a=function(k){k=k.replace(aS,"").replace(sS,"").toLowerCase();var x,S=!1;if(fc[k])k=fc[k],S=!0;else if(k=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(x=rn.rgb.exec(k))?{r:x[1],g:x[2],b:x[3]}:(x=rn.rgba.exec(k))?{r:x[1],g:x[2],b:x[3],a:x[4]}:(x=rn.hsl.exec(k))?{h:x[1],s:x[2],l:x[3]}:(x=rn.hsla.exec(k))?{h:x[1],s:x[2],l:x[3],a:x[4]}:(x=rn.hsv.exec(k))?{h:x[1],s:x[2],v:x[3]}:(x=rn.hsva.exec(k))?{h:x[1],s:x[2],v:x[3],a:x[4]}:(x=rn.hex8.exec(k))?{r:Vt(x[1]),g:Vt(x[2]),b:Vt(x[3]),a:Cm(x[4]),format:S?"name":"hex8"}:(x=rn.hex6.exec(k))?{r:Vt(x[1]),g:Vt(x[2]),b:Vt(x[3]),format:S?"name":"hex"}:(x=rn.hex4.exec(k))?{r:Vt(x[1]+""+x[1]),g:Vt(x[2]+""+x[2]),b:Vt(x[3]+""+x[3]),a:Cm(x[4]+""+x[4]),format:S?"name":"hex8"}:(x=rn.hex3.exec(k))?{r:Vt(x[1]+""+x[1]),g:Vt(x[2]+""+x[2]),b:Vt(x[3]+""+x[3]),format:S?"name":"hex"}:!1}(a)),hs(a)=="object"&&(_n(a.r)&&_n(a.g)&&_n(a.b)?(b=a.r,v=a.g,w=a.b,l={r:255*Xe(b,255),g:255*Xe(v,255),b:255*Xe(w,255)},m=!0,g=String(a.r).substr(-1)==="%"?"prgb":"rgb"):_n(a.h)&&_n(a.s)&&_n(a.v)?(c=vi(a.s),d=vi(a.v),l=function(k,x,S){k=6*Xe(k,360),x=Xe(x,100),S=Xe(S,100);var O=Math.floor(k),M=k-O,U=S*(1-x),te=S*(1-M*x),B=S*(1-(1-M)*x),ne=O%6,ie=[S,te,U,U,B,S][ne],K=[B,S,S,te,U,U][ne],Q=[U,U,B,S,S,te][ne];return{r:255*ie,g:255*K,b:255*Q}}(a.h,c,d),m=!0,g="hsv"):_n(a.h)&&_n(a.s)&&_n(a.l)&&(c=vi(a.s),p=vi(a.l),l=function(k,x,S){var O,M,U;function te(ie,K,Q){return Q<0&&(Q+=1),Q>1&&(Q-=1),Q<1/6?ie+6*(K-ie)*Q:Q<.5?K:Q<2/3?ie+(K-ie)*(2/3-Q)*6:ie}if(k=Xe(k,360),x=Xe(x,100),S=Xe(S,100),x===0)O=M=U=S;else{var B=S<.5?S*(1+x):S+x-S*x,ne=2*S-B;O=te(ne,B,k+1/3),M=te(ne,B,k),U=te(ne,B,k-1/3)}return{r:255*O,g:255*M,b:255*U}}(a.h,c,p),m=!0,g="hsl"),a.hasOwnProperty("a")&&(u=a.a));var b,v,w;return u=Ey(u),{ok:m,format:a.format||g,r:Math.min(255,Math.max(l.r,0)),g:Math.min(255,Math.max(l.g,0)),b:Math.min(255,Math.max(l.b,0)),a:u}}(t);this._originalInput=t,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||o.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function xm(t,r,o){t=Xe(t,255),r=Xe(r,255),o=Xe(o,255);var a,l,u=Math.max(t,r,o),c=Math.min(t,r,o),d=(u+c)/2;if(u==c)a=l=0;else{var p=u-c;switch(l=d>.5?p/(2-u-c):p/(u+c),u){case t:a=(r-o)/p+(r<o?6:0);break;case r:a=(o-t)/p+2;break;case o:a=(t-r)/p+4}a/=6}return{h:a,s:l,l:d}}function km(t,r,o){t=Xe(t,255),r=Xe(r,255),o=Xe(o,255);var a,l,u=Math.max(t,r,o),c=Math.min(t,r,o),d=u,p=u-c;if(l=u===0?0:p/u,u==c)a=0;else{switch(u){case t:a=(r-o)/p+(r<o?6:0);break;case r:a=(o-t)/p+2;break;case o:a=(t-r)/p+4}a/=6}return{h:a,s:l,v:d}}function Pm(t,r,o,a){var l=[sn(Math.round(t).toString(16)),sn(Math.round(r).toString(16)),sn(Math.round(o).toString(16))];return a&&l[0].charAt(0)==l[0].charAt(1)&&l[1].charAt(0)==l[1].charAt(1)&&l[2].charAt(0)==l[2].charAt(1)?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0):l.join("")}function Sm(t,r,o,a){return[sn(Oy(a)),sn(Math.round(t).toString(16)),sn(Math.round(r).toString(16)),sn(Math.round(o).toString(16))].join("")}function lS(t,r){r=r===0?0:r||10;var o=me(t).toHsl();return o.s-=r/100,o.s=Ss(o.s),me(o)}function uS(t,r){r=r===0?0:r||10;var o=me(t).toHsl();return o.s+=r/100,o.s=Ss(o.s),me(o)}function cS(t){return me(t).desaturate(100)}function fS(t,r){r=r===0?0:r||10;var o=me(t).toHsl();return o.l+=r/100,o.l=Ss(o.l),me(o)}function dS(t,r){r=r===0?0:r||10;var o=me(t).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-r/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-r/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-r/100*255))),me(o)}function pS(t,r){r=r===0?0:r||10;var o=me(t).toHsl();return o.l-=r/100,o.l=Ss(o.l),me(o)}function hS(t,r){var o=me(t).toHsl(),a=(o.h+r)%360;return o.h=a<0?360+a:a,me(o)}function mS(t){var r=me(t).toHsl();return r.h=(r.h+180)%360,me(r)}function Tm(t,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var o=me(t).toHsl(),a=[me(t)],l=360/r,u=1;u<r;u++)a.push(me({h:(o.h+u*l)%360,s:o.s,l:o.l}));return a}function gS(t){var r=me(t).toHsl(),o=r.h;return[me(t),me({h:(o+72)%360,s:r.s,l:r.l}),me({h:(o+216)%360,s:r.s,l:r.l})]}function yS(t,r,o){r=r||6,o=o||30;var a=me(t).toHsl(),l=360/o,u=[me(t)];for(a.h=(a.h-(l*r>>1)+720)%360;--r;)a.h=(a.h+l)%360,u.push(me(a));return u}function vS(t,r){r=r||6;for(var o=me(t).toHsv(),a=o.h,l=o.s,u=o.v,c=[],d=1/r;r--;)c.push(me({h:a,s:l,v:u})),u=(u+d)%1;return c}me.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,r,o,a=this.toRgb();return t=a.r/255,r=a.g/255,o=a.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(t){return this._a=Ey(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=km(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=km(this._r,this._g,this._b),r=Math.round(360*t.h),o=Math.round(100*t.s),a=Math.round(100*t.v);return this._a==1?"hsv("+r+", "+o+"%, "+a+"%)":"hsva("+r+", "+o+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=xm(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=xm(this._r,this._g,this._b),r=Math.round(360*t.h),o=Math.round(100*t.s),a=Math.round(100*t.l);return this._a==1?"hsl("+r+", "+o+"%, "+a+"%)":"hsla("+r+", "+o+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return Pm(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(r,o,a,l,u){var c=[sn(Math.round(r).toString(16)),sn(Math.round(o).toString(16)),sn(Math.round(a).toString(16)),sn(Oy(l))];return u&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)&&c[3].charAt(0)==c[3].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0)+c[3].charAt(0):c.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Xe(this._r,255))+"%",g:Math.round(100*Xe(this._g,255))+"%",b:Math.round(100*Xe(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Xe(this._r,255))+"%, "+Math.round(100*Xe(this._g,255))+"%, "+Math.round(100*Xe(this._b,255))+"%)":"rgba("+Math.round(100*Xe(this._r,255))+"%, "+Math.round(100*Xe(this._g,255))+"%, "+Math.round(100*Xe(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(bS[Pm(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var r="#"+Sm(this._r,this._g,this._b,this._a),o=r,a=this._gradientType?"GradientType = 1, ":"";if(t){var l=me(t);o="#"+Sm(l._r,l._g,l._b,l._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+r+",endColorstr="+o+")"},toString:function(t){var r=!!t;t=t||this._format;var o=!1,a=this._a<1&&this._a>=0;return r||!a||t!=="hex"&&t!=="hex6"&&t!=="hex3"&&t!=="hex4"&&t!=="hex8"&&t!=="name"?(t==="rgb"&&(o=this.toRgbString()),t==="prgb"&&(o=this.toPercentageRgbString()),t!=="hex"&&t!=="hex6"||(o=this.toHexString()),t==="hex3"&&(o=this.toHexString(!0)),t==="hex4"&&(o=this.toHex8String(!0)),t==="hex8"&&(o=this.toHex8String()),t==="name"&&(o=this.toName()),t==="hsl"&&(o=this.toHslString()),t==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):t==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return me(this.toString())},_applyModification:function(t,r){var o=t.apply(null,[this].concat([].slice.call(r)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(fS,arguments)},brighten:function(){return this._applyModification(dS,arguments)},darken:function(){return this._applyModification(pS,arguments)},desaturate:function(){return this._applyModification(lS,arguments)},saturate:function(){return this._applyModification(uS,arguments)},greyscale:function(){return this._applyModification(cS,arguments)},spin:function(){return this._applyModification(hS,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(yS,arguments)},complement:function(){return this._applyCombination(mS,arguments)},monochromatic:function(){return this._applyCombination(vS,arguments)},splitcomplement:function(){return this._applyCombination(gS,arguments)},triad:function(){return this._applyCombination(Tm,[3])},tetrad:function(){return this._applyCombination(Tm,[4])}},me.fromRatio=function(t,r){if(hs(t)=="object"){var o={};for(var a in t)t.hasOwnProperty(a)&&(o[a]=a==="a"?t[a]:vi(t[a]));t=o}return me(t,r)},me.equals=function(t,r){return!(!t||!r)&&me(t).toRgbString()==me(r).toRgbString()},me.random=function(){return me.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},me.mix=function(t,r,o){o=o===0?0:o||50;var a=me(t).toRgb(),l=me(r).toRgb(),u=o/100;return me({r:(l.r-a.r)*u+a.r,g:(l.g-a.g)*u+a.g,b:(l.b-a.b)*u+a.b,a:(l.a-a.a)*u+a.a})},me.readability=function(t,r){var o=me(t),a=me(r);return(Math.max(o.getLuminance(),a.getLuminance())+.05)/(Math.min(o.getLuminance(),a.getLuminance())+.05)},me.isReadable=function(t,r,o){var a,l,u=me.readability(t,r);switch(l=!1,(a=function(c){var d,p;return d=((c=c||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(c.size||"small").toLowerCase(),d!=="AA"&&d!=="AAA"&&(d="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:d,size:p}}(o)).level+a.size){case"AAsmall":case"AAAlarge":l=u>=4.5;break;case"AAlarge":l=u>=3;break;case"AAAsmall":l=u>=7}return l},me.mostReadable=function(t,r,o){var a,l,u,c,d=null,p=0;l=(o=o||{}).includeFallbackColors,u=o.level,c=o.size;for(var m=0;m<r.length;m++)(a=me.readability(t,r[m]))>p&&(p=a,d=me(r[m]));return me.isReadable(t,d,{level:u,size:c})||!l?d:(o.includeFallbackColors=!1,me.mostReadable(t,["#fff","#000"],o))};var fc=me.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},bS=me.hexNames=function(t){var r={};for(var o in t)t.hasOwnProperty(o)&&(r[t[o]]=o);return r}(fc);function Ey(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Xe(t,r){(function(a){return typeof a=="string"&&a.indexOf(".")!=-1&&parseFloat(a)===1})(t)&&(t="100%");var o=function(a){return typeof a=="string"&&a.indexOf("%")!=-1}(t);return t=Math.min(r,Math.max(0,parseFloat(t))),o&&(t=parseInt(t*r,10)/100),Math.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function Ss(t){return Math.min(1,Math.max(0,t))}function Vt(t){return parseInt(t,16)}function sn(t){return t.length==1?"0"+t:""+t}function vi(t){return t<=1&&(t=100*t+"%"),t}function Oy(t){return Math.round(255*parseFloat(t)).toString(16)}function Cm(t){return Vt(t)/255}var rr,Za,Ja,rn=(Za="[\\s|\\(]+("+(rr="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+rr+")[,|\\s]+("+rr+")\\s*\\)?",Ja="[\\s|\\(]+("+rr+")[,|\\s]+("+rr+")[,|\\s]+("+rr+")[,|\\s]+("+rr+")\\s*\\)?",{CSS_UNIT:new RegExp(rr),rgb:new RegExp("rgb"+Za),rgba:new RegExp("rgba"+Ja),hsl:new RegExp("hsl"+Za),hsla:new RegExp("hsla"+Ja),hsv:new RegExp("hsv"+Za),hsva:new RegExp("hsva"+Ja),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function _n(t){return!!rn.CSS_UNIT.exec(t)}var Ts=function(t,r){var o=(typeof t=="string"?parseInt(t):t)||0;if(o>=-5&&o<=5){var a=o,l=parseFloat(r),u=l+a*(l/5)*-1;return(u==0||u<=Number.EPSILON)&&(u=.1),{animationPeriod:u+"s"}}return{animationPeriod:r}},Cs=function(t,r){var o=t||{},a="";switch(r){case"small":a="12px";break;case"medium":a="16px";break;case"large":a="20px";break;default:a=void 0}var l={};if(o.fontSize){var u=o.fontSize;l=function(c,d){var p={};for(var m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.indexOf(m)<0&&(p[m]=c[m]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(m=Object.getOwnPropertySymbols(c);g<m.length;g++)d.indexOf(m[g])<0&&Object.prototype.propertyIsEnumerable.call(c,m[g])&&(p[m[g]]=c[m[g]])}return p}(o,["fontSize"]),a=u}return{fontSize:a,styles:l}},wS={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Es=function(t){var r=t.className,o=t.text,a=t.textColor,l=t.staticText,u=t.style;return o?Oe.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(r||"").trim(),style:Ne(Ne(Ne({},l&&wS),a&&{color:a,mixBlendMode:"unset"}),u&&u)},typeof o=="string"&&o.length?o:"loading"):null},ji="rgb(50, 205, 50)";function Os(t,r){r===void 0&&(r=0);var o=[];return function a(l,u){return u===void 0&&(u=0),o.push.apply(o,l),o.length<u&&a(o,u),o.slice(0,u)}(t,r)}dt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);me(ji).toRgb();Array.from({length:4},function(t,r){return"--atom-phase".concat(r+1,"-rgb")});dt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--commet-phase".concat(r+1,"-color")});dt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--OP-annulus-phase".concat(r+1,"-color")});function Bu(t){return t&&t.Math===Math&&t}dt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Bu(typeof window=="object"&&window)||Bu(typeof self=="object"&&self)||Bu(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(t,r){return"--OP-dotted-phase".concat(r+1,"-color")});dt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--OP-spokes-phase".concat(r+1,"-color")});dt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(t,r){return"--OP-annulus-dual-sectors-phase".concat(r+1,"-color")});dt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return["--OP-annulus-track-phase".concat(r+1,"-color"),"--OP-annulus-sector-phase".concat(r+1,"-color")]});dt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--four-square-phase".concat(r+1,"-color")});dt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--mosaic-phase".concat(r+1,"-color")});dt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--riple-phase".concat(r+1,"-color")});dt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var to=Array.from({length:4},function(t,r){return"--TD-pulsate-phase".concat(r+1,"-color")}),xS=function(t){var r,o=Cs(t?.style,t?.size),a=o.styles,l=o.fontSize,u=t?.easing,c=Ts(t?.speedPlus,"1.2s").animationPeriod,d=function(p){var m={};if(p instanceof Array){for(var g=Os(p,to.length),b=0;b<g.length&&!(b>=4);b++)m[to[b]]=g[b];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var v=0;v<to.length;v++)m[to[v]]=p}catch(w){for(w instanceof Error,v=0;v<to.length;v++)m[to[v]]=ji}return m}((r=t?.color)!==null&&r!==void 0?r:"");return Oe.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:Ne(Ne(Ne(Ne(Ne({},l&&{fontSize:l}),c&&{"--rli-animation-duration":c}),u&&{"--rli-animation-function":u}),d),a),role:"status","aria-live":"polite","aria-label":"Loading"},Oe.createElement("span",{className:"rli-d-i-b pulsate-indicator"},Oe.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Oe.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Oe.createElement("span",{className:"rli-d-i-b pulsate-dot"})),Oe.createElement(Es,{staticText:!0,text:t?.text,textColor:t?.textColor}))};dt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var no=Array.from({length:4},function(t,r){return"--TD-brick-stack-phase".concat(r+1,"-color")}),kS=function(t){var r,o=Cs(t?.style,t?.size),a=o.styles,l=o.fontSize,u=t?.easing,c=Ts(t?.speedPlus,"1s").animationPeriod,d=function(p){var m={};if(p instanceof Array){for(var g=Os(p,no.length),b=0;b<g.length&&!(b>=4);b++)m[no[b]]=g[b];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var v=0;v<no.length;v++)m[no[v]]=p}catch(w){for(w instanceof Error,v=0;v<no.length;v++)m[no[v]]=ji}return m}((r=t?.color)!==null&&r!==void 0?r:"");return Oe.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:Ne(Ne(Ne(Ne(Ne({},l&&{fontSize:l}),c&&{"--rli-animation-duration":c}),u&&{"--rli-animation-function":u}),d),a),role:"status","aria-live":"polite","aria-label":"Loading"},Oe.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},Oe.createElement("span",{className:"rli-d-i-b brick-stack"})),Oe.createElement(Es,{staticText:!0,text:t?.text,textColor:t?.textColor}))};dt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var ro=Array.from({length:4},function(t,r){return"--TD-bob-phase".concat(r+1,"-color")}),PS=function(t){var r,o=Cs(t?.style,t?.size),a=o.styles,l=o.fontSize,u=t?.easing,c=Ts(t?.speedPlus,"1.2s").animationPeriod,d=function(p){var m={};if(p instanceof Array){for(var g=Os(p,ro.length),b=0;b<g.length&&!(b>=4);b++)m[ro[b]]=g[b];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var v=0;v<ro.length;v++)m[ro[v]]=p}catch(w){for(w instanceof Error,v=0;v<ro.length;v++)m[ro[v]]=ji}return m}((r=t?.color)!==null&&r!==void 0?r:"");return Oe.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:Ne(Ne(Ne(Ne(Ne({},l&&{fontSize:l}),c&&{"--rli-animation-duration":c}),u&&{"--rli-animation-function":u}),d),a),role:"status","aria-live":"polite","aria-label":"Loading"},Oe.createElement("span",{className:"bob-indicator"},Oe.createElement("span",{className:"bobbing"})),Oe.createElement(Es,{staticText:!0,text:t?.text,textColor:t?.textColor}))};dt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var oo=Array.from({length:4},function(t,r){return"--TD-bounce-phase".concat(r+1,"-color")}),SS=function(t){var r,o=Cs(t?.style,t?.size),a=o.styles,l=o.fontSize,u=t?.easing,c=Ts(t?.speedPlus,"0.5s").animationPeriod,d=function(p){var m={};if(p instanceof Array){for(var g=Os(p,oo.length),b=0;b<g.length&&!(b>=4);b++)m[oo[b]]=g[b];return m}try{if(typeof p!="string")throw new Error("Color String expected");for(var v=0;v<oo.length;v++)m[oo[v]]=p}catch{for(v=0;v<oo.length;v++)m[oo[v]]=ji}return m}((r=t?.color)!==null&&r!==void 0?r:"");return Oe.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:Ne(Ne(Ne(Ne(Ne({},l&&{fontSize:l}),c&&{"--rli-animation-duration":c}),u&&{"--rli-animation-function":u}),d),a)},Oe.createElement("span",{className:"wrapper"},Oe.createElement("span",{className:"group"},Oe.createElement("span",{className:"rli-d-i-b dot"}),Oe.createElement("span",{className:"rli-d-i-b dot"}),Oe.createElement("span",{className:"rli-d-i-b dot"})),Oe.createElement("span",{className:"group"},Oe.createElement("span",{className:"rli-d-i-b shadow"}),Oe.createElement("span",{className:"rli-d-i-b shadow"}),Oe.createElement("span",{className:"rli-d-i-b shadow"}))),Oe.createElement(Es,{staticText:!0,text:t?.text,textColor:t?.textColor,style:{marginTop:"2px"}}))},qS=function(t){var r=Object(t).variant,o=r===void 0?"pulsate":r;return o==="pulsate"?Oe.createElement(xS,Ne({},t)):o==="brick-stack"?Oe.createElement(kS,Ne({},t)):o==="bob"?Oe.createElement(PS,Ne({},t)):o==="bounce"?Oe.createElement(SS,Ne({},t)):null};dt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--shape-phase".concat(r+1,"-color")});dt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--trophySpin-phase".concat(r+1,"-color")});dt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--slab-phase".concat(r+1,"-color")});dt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(t,r){return"--life-line-phase".concat(r+1,"-color")});/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_y=(...t)=>t.filter((r,o,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===o).join(" ").trim();/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=_.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:u,iconNode:c,...d},p)=>_.createElement("svg",{ref:p,...CS,width:r,height:r,stroke:t,strokeWidth:a?Number(o)*24/Number(r):o,className:_y("lucide",l),...d},[...c.map(([m,g])=>_.createElement(m,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=(t,r)=>{const o=_.forwardRef(({className:a,...l},u)=>_.createElement(ES,{ref:u,iconNode:r,className:_y(`lucide-${TS(t)}`,a),...l}));return o.displayName=`${t}`,o};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],HS=_s("ArrowDownRight",OS);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],WS=_s("ArrowUpRight",_S);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],KS=_s("Calendar",AS);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],GS=_s("X",RS);var Uu={exports:{}},Em;function DS(){return Em||(Em=1,(()=>{var t={296:(l,u,c)=>{var d=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,g=/^0o[0-7]+$/i,b=parseInt,v=typeof c.g=="object"&&c.g&&c.g.Object===Object&&c.g,w=typeof self=="object"&&self&&self.Object===Object&&self,k=v||w||Function("return this")(),x=Object.prototype.toString,S=Math.max,O=Math.min,M=function(){return k.Date.now()};function U(B){var ne=typeof B;return!!B&&(ne=="object"||ne=="function")}function te(B){if(typeof B=="number")return B;if(function(K){return typeof K=="symbol"||function(Q){return!!Q&&typeof Q=="object"}(K)&&x.call(K)=="[object Symbol]"}(B))return NaN;if(U(B)){var ne=typeof B.valueOf=="function"?B.valueOf():B;B=U(ne)?ne+"":ne}if(typeof B!="string")return B===0?B:+B;B=B.replace(d,"");var ie=m.test(B);return ie||g.test(B)?b(B.slice(2),ie?2:8):p.test(B)?NaN:+B}l.exports=function(B,ne,ie){var K,Q,ve,_e,Ae,Le,$=0,z=!1,N=!1,j=!0;if(typeof B!="function")throw new TypeError("Expected a function");function R(oe){var ae=K,we=Q;return K=Q=void 0,$=oe,_e=B.apply(we,ae)}function H(oe){var ae=oe-Le;return Le===void 0||ae>=ne||ae<0||N&&oe-$>=ve}function q(){var oe=M();if(H(oe))return C(oe);Ae=setTimeout(q,function(ae){var we=ne-(ae-Le);return N?O(we,ve-(ae-$)):we}(oe))}function C(oe){return Ae=void 0,j&&K?R(oe):(K=Q=void 0,_e)}function V(){var oe=M(),ae=H(oe);if(K=arguments,Q=this,Le=oe,ae){if(Ae===void 0)return function(we){return $=we,Ae=setTimeout(q,ne),z?R(we):_e}(Le);if(N)return Ae=setTimeout(q,ne),R(Le)}return Ae===void 0&&(Ae=setTimeout(q,ne)),_e}return ne=te(ne)||0,U(ie)&&(z=!!ie.leading,ve=(N="maxWait"in ie)?S(te(ie.maxWait)||0,ne):ve,j="trailing"in ie?!!ie.trailing:j),V.cancel=function(){Ae!==void 0&&clearTimeout(Ae),$=0,K=Le=Q=Ae=void 0},V.flush=function(){return Ae===void 0?_e:C(M())},V}},96:(l,u,c)=>{var d="Expected a function",p=NaN,m="[object Symbol]",g=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,w=/^0o[0-7]+$/i,k=parseInt,x=typeof c.g=="object"&&c.g&&c.g.Object===Object&&c.g,S=typeof self=="object"&&self&&self.Object===Object&&self,O=x||S||Function("return this")(),M=Object.prototype.toString,U=Math.max,te=Math.min,B=function(){return O.Date.now()};function ne(K){var Q=typeof K;return!!K&&(Q=="object"||Q=="function")}function ie(K){if(typeof K=="number")return K;if(function(_e){return typeof _e=="symbol"||function(Ae){return!!Ae&&typeof Ae=="object"}(_e)&&M.call(_e)==m}(K))return p;if(ne(K)){var Q=typeof K.valueOf=="function"?K.valueOf():K;K=ne(Q)?Q+"":Q}if(typeof K!="string")return K===0?K:+K;K=K.replace(g,"");var ve=v.test(K);return ve||w.test(K)?k(K.slice(2),ve?2:8):b.test(K)?p:+K}l.exports=function(K,Q,ve){var _e=!0,Ae=!0;if(typeof K!="function")throw new TypeError(d);return ne(ve)&&(_e="leading"in ve?!!ve.leading:_e,Ae="trailing"in ve?!!ve.trailing:Ae),function(Le,$,z){var N,j,R,H,q,C,V=0,oe=!1,ae=!1,we=!0;if(typeof Le!="function")throw new TypeError(d);function ke(tt){var Tt=N,lt=j;return N=j=void 0,V=tt,H=Le.apply(lt,Tt)}function Re(tt){var Tt=tt-C;return C===void 0||Tt>=$||Tt<0||ae&&tt-V>=R}function Te(){var tt=B();if(Re(tt))return je(tt);q=setTimeout(Te,function(Tt){var lt=$-(Tt-C);return ae?te(lt,R-(Tt-V)):lt}(tt))}function je(tt){return q=void 0,we&&N?ke(tt):(N=j=void 0,H)}function et(){var tt=B(),Tt=Re(tt);if(N=arguments,j=this,C=tt,Tt){if(q===void 0)return function(lt){return V=lt,q=setTimeout(Te,$),oe?ke(lt):H}(C);if(ae)return q=setTimeout(Te,$),ke(C)}return q===void 0&&(q=setTimeout(Te,$)),H}return $=ie($)||0,ne(z)&&(oe=!!z.leading,R=(ae="maxWait"in z)?U(ie(z.maxWait)||0,$):R,we="trailing"in z?!!z.trailing:we),et.cancel=function(){q!==void 0&&clearTimeout(q),V=0,N=C=j=q=void 0},et.flush=function(){return q===void 0?H:je(B())},et}(K,Q,{leading:_e,maxWait:Q,trailing:Ae})}},703:(l,u,c)=>{var d=c(414);function p(){}function m(){}m.resetWarningCache=p,l.exports=function(){function g(w,k,x,S,O,M){if(M!==d){var U=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw U.name="Invariant Violation",U}}function b(){return g}g.isRequired=g;var v={array:g,bigint:g,bool:g,func:g,number:g,object:g,string:g,symbol:g,any:g,arrayOf:b,element:g,elementType:g,instanceOf:b,node:g,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:m,resetWarningCache:p};return v.PropTypes=v,v}},697:(l,u,c)=>{l.exports=c(703)()},414:l=>{l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},r={};function o(l){var u=r[l];if(u!==void 0)return u.exports;var c=r[l]={exports:{}};return t[l](c,c.exports,o),c.exports}o.n=l=>{var u=l&&l.__esModule?()=>l.default:()=>l;return o.d(u,{a:u}),u},o.d=(l,u)=>{for(var c in u)o.o(u,c)&&!o.o(l,c)&&Object.defineProperty(l,c,{enumerable:!0,get:u[c]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(l,u)=>Object.prototype.hasOwnProperty.call(l,u),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a={};(()=>{o.r(a),o.d(a,{LazyLoadComponent:()=>Tt,LazyLoadImage:()=>Ii,trackWindowScroll:()=>H});const l=ms();var u=o.n(l),c=o(697);function d(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function p(Y){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},p(Y)}function m(Y,L){var J=Object.keys(Y);if(Object.getOwnPropertySymbols){var ee=Object.getOwnPropertySymbols(Y);L&&(ee=ee.filter(function(Se){return Object.getOwnPropertyDescriptor(Y,Se).enumerable})),J.push.apply(J,ee)}return J}function g(Y,L,J){return(L=v(L))in Y?Object.defineProperty(Y,L,{value:J,enumerable:!0,configurable:!0,writable:!0}):Y[L]=J,Y}function b(Y,L){for(var J=0;J<L.length;J++){var ee=L[J];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(Y,v(ee.key),ee)}}function v(Y){var L=function(J,ee){if(p(J)!=="object"||J===null)return J;var Se=J[Symbol.toPrimitive];if(Se!==void 0){var Pe=Se.call(J,"string");if(p(Pe)!=="object")return Pe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(J)}(Y);return p(L)==="symbol"?L:String(L)}function w(Y,L){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,ee){return J.__proto__=ee,J},w(Y,L)}function k(Y){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},k(Y)}var x=function(Y){Y.forEach(function(L){L.isIntersecting&&L.target.onVisible()})},S={},O=function(Y){(function(F,W){if(typeof W!="function"&&W!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(W&&W.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),W&&w(F,W)})(De,Y);var L,J,ee,Se,Pe=(ee=De,Se=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var F,W=k(ee);if(Se){var de=k(this).constructor;F=Reflect.construct(W,arguments,de)}else F=W.apply(this,arguments);return function(ce,le){if(le&&(p(le)==="object"||typeof le=="function"))return le;if(le!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(Ce){if(Ce===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Ce}(ce)}(this,F)});function De(F){var W;if(function(ce,le){if(!(ce instanceof le))throw new TypeError("Cannot call a class as a function")}(this,De),(W=Pe.call(this,F)).supportsObserver=!F.scrollPosition&&F.useIntersectionObserver&&d(),W.supportsObserver){var de=F.threshold;W.observer=function(ce){return S[ce]=S[ce]||new IntersectionObserver(x,{rootMargin:ce+"px"}),S[ce]}(de)}return W}return L=De,J=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,W=this.placeholder.getBoundingClientRect(),de=this.placeholder.style,ce=parseInt(de.getPropertyValue("margin-left"),10)||0,le=parseInt(de.getPropertyValue("margin-top"),10)||0;return{bottom:F.y+W.bottom+le,left:F.x+W.left+ce,right:F.x+W.right+ce,top:F.y+W.top+le}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var F=this.props,W=F.scrollPosition,de=F.threshold,ce=this.getPlaceholderBoundingBox(W),le=W.y+window.innerHeight,Ce=W.x,Fe=W.x+window.innerWidth,Be=W.y;return Be-de<=ce.bottom&&le+de>=ce.top&&Ce-de<=ce.right&&Fe+de>=ce.left}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var F=this,W=this.props,de=W.className,ce=W.height,le=W.placeholder,Ce=W.style,Fe=W.width;if(le&&typeof le.type!="function")return u().cloneElement(le,{ref:function(Ie){return F.placeholder=Ie}});var Be=function(Ie){for(var Ke=1;Ke<arguments.length;Ke++){var Ue=arguments[Ke]!=null?arguments[Ke]:{};Ke%2?m(Object(Ue),!0).forEach(function(ut){g(Ie,ut,Ue[ut])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Ie,Object.getOwnPropertyDescriptors(Ue)):m(Object(Ue)).forEach(function(ut){Object.defineProperty(Ie,ut,Object.getOwnPropertyDescriptor(Ue,ut))})}return Ie}({display:"inline-block"},Ce);return Fe!==void 0&&(Be.width=Fe),ce!==void 0&&(Be.height=ce),u().createElement("span",{className:de,ref:function(Ie){return F.placeholder=Ie},style:Be},le)}}],J&&b(L.prototype,J),Object.defineProperty(L,"prototype",{writable:!1}),De}(u().Component);O.propTypes={onVisible:c.PropTypes.func.isRequired,className:c.PropTypes.string,height:c.PropTypes.oneOfType([c.PropTypes.number,c.PropTypes.string]),placeholder:c.PropTypes.element,threshold:c.PropTypes.number,useIntersectionObserver:c.PropTypes.bool,scrollPosition:c.PropTypes.shape({x:c.PropTypes.number.isRequired,y:c.PropTypes.number.isRequired}),width:c.PropTypes.oneOfType([c.PropTypes.number,c.PropTypes.string])},O.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const M=O;var U=o(296),te=o.n(U),B=o(96),ne=o.n(B),ie=function(Y){var L=getComputedStyle(Y,null);return L.getPropertyValue("overflow")+L.getPropertyValue("overflow-y")+L.getPropertyValue("overflow-x")};const K=function(Y){if(!(Y instanceof HTMLElement))return window;for(var L=Y;L&&L instanceof HTMLElement;){if(/(scroll|auto)/.test(ie(L)))return L;L=L.parentNode}return window};function Q(Y){return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},Q(Y)}var ve=["delayMethod","delayTime"];function _e(){return _e=Object.assign?Object.assign.bind():function(Y){for(var L=1;L<arguments.length;L++){var J=arguments[L];for(var ee in J)Object.prototype.hasOwnProperty.call(J,ee)&&(Y[ee]=J[ee])}return Y},_e.apply(this,arguments)}function Ae(Y,L){for(var J=0;J<L.length;J++){var ee=L[J];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(Y,(Se=function(Pe,De){if(Q(Pe)!=="object"||Pe===null)return Pe;var F=Pe[Symbol.toPrimitive];if(F!==void 0){var W=F.call(Pe,"string");if(Q(W)!=="object")return W;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Pe)}(ee.key),Q(Se)==="symbol"?Se:String(Se)),ee)}var Se}function Le(Y,L){return Le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,ee){return J.__proto__=ee,J},Le(Y,L)}function $(Y,L){if(L&&(Q(L)==="object"||typeof L=="function"))return L;if(L!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return z(Y)}function z(Y){if(Y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Y}function N(Y){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},N(Y)}var j=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},R=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const H=function(Y){var L=function(J){(function(de,ce){if(typeof ce!="function"&&ce!==null)throw new TypeError("Super expression must either be null or a function");de.prototype=Object.create(ce&&ce.prototype,{constructor:{value:de,writable:!0,configurable:!0}}),Object.defineProperty(de,"prototype",{writable:!1}),ce&&Le(de,ce)})(W,J);var ee,Se,Pe,De,F=(Pe=W,De=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var de,ce=N(Pe);if(De){var le=N(this).constructor;de=Reflect.construct(ce,arguments,le)}else de=ce.apply(this,arguments);return $(this,de)});function W(de){var ce;if(function(Ce,Fe){if(!(Ce instanceof Fe))throw new TypeError("Cannot call a class as a function")}(this,W),(ce=F.call(this,de)).useIntersectionObserver=de.useIntersectionObserver&&d(),ce.useIntersectionObserver)return $(ce);var le=ce.onChangeScroll.bind(z(ce));return de.delayMethod==="debounce"?ce.delayedScroll=te()(le,de.delayTime):de.delayMethod==="throttle"&&(ce.delayedScroll=ne()(le,de.delayTime)),ce.state={scrollPosition:{x:j(),y:R()}},ce.baseComponentRef=u().createRef(),ce}return ee=W,(Se=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||K(this.baseComponentRef.current)!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=K(this.baseComponentRef.current),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:j(),y:R()}})}},{key:"render",value:function(){var de=this.props,ce=(de.delayMethod,de.delayTime,function(Ce,Fe){if(Ce==null)return{};var Be,Ie,Ke=function(ut,wn){if(ut==null)return{};var un,ur,Co={},Rr=Object.keys(ut);for(ur=0;ur<Rr.length;ur++)un=Rr[ur],wn.indexOf(un)>=0||(Co[un]=ut[un]);return Co}(Ce,Fe);if(Object.getOwnPropertySymbols){var Ue=Object.getOwnPropertySymbols(Ce);for(Ie=0;Ie<Ue.length;Ie++)Be=Ue[Ie],Fe.indexOf(Be)>=0||Object.prototype.propertyIsEnumerable.call(Ce,Be)&&(Ke[Be]=Ce[Be])}return Ke}(de,ve)),le=this.useIntersectionObserver?null:this.state.scrollPosition;return u().createElement(Y,_e({forwardRef:this.baseComponentRef,scrollPosition:le},ce))}}])&&Ae(ee.prototype,Se),Object.defineProperty(ee,"prototype",{writable:!1}),W}(u().Component);return L.propTypes={delayMethod:c.PropTypes.oneOf(["debounce","throttle"]),delayTime:c.PropTypes.number,useIntersectionObserver:c.PropTypes.bool},L.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},L};function q(Y){return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},q(Y)}function C(Y,L){for(var J=0;J<L.length;J++){var ee=L[J];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(Y,(Se=function(Pe,De){if(q(Pe)!=="object"||Pe===null)return Pe;var F=Pe[Symbol.toPrimitive];if(F!==void 0){var W=F.call(Pe,"string");if(q(W)!=="object")return W;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Pe)}(ee.key),q(Se)==="symbol"?Se:String(Se)),ee)}var Se}function V(Y,L){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,ee){return J.__proto__=ee,J},V(Y,L)}function oe(Y){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},oe(Y)}var ae=function(Y){(function(F,W){if(typeof W!="function"&&W!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(W&&W.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),W&&V(F,W)})(De,Y);var L,J,ee,Se,Pe=(ee=De,Se=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var F,W=oe(ee);if(Se){var de=oe(this).constructor;F=Reflect.construct(W,arguments,de)}else F=W.apply(this,arguments);return function(ce,le){if(le&&(q(le)==="object"||typeof le=="function"))return le;if(le!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(Ce){if(Ce===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Ce}(ce)}(this,F)});function De(F){return function(W,de){if(!(W instanceof de))throw new TypeError("Cannot call a class as a function")}(this,De),Pe.call(this,F)}return L=De,(J=[{key:"render",value:function(){return u().createElement(M,this.props)}}])&&C(L.prototype,J),Object.defineProperty(L,"prototype",{writable:!1}),De}(u().Component);const we=H(ae);function ke(Y){return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},ke(Y)}function Re(Y,L){for(var J=0;J<L.length;J++){var ee=L[J];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(Y,(Se=function(Pe,De){if(ke(Pe)!=="object"||Pe===null)return Pe;var F=Pe[Symbol.toPrimitive];if(F!==void 0){var W=F.call(Pe,"string");if(ke(W)!=="object")return W;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Pe)}(ee.key),ke(Se)==="symbol"?Se:String(Se)),ee)}var Se}function Te(Y,L){return Te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,ee){return J.__proto__=ee,J},Te(Y,L)}function je(Y){if(Y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Y}function et(Y){return et=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},et(Y)}var tt=function(Y){(function(F,W){if(typeof W!="function"&&W!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(W&&W.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),W&&Te(F,W)})(De,Y);var L,J,ee,Se,Pe=(ee=De,Se=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var F,W=et(ee);if(Se){var de=et(this).constructor;F=Reflect.construct(W,arguments,de)}else F=W.apply(this,arguments);return function(ce,le){if(le&&(ke(le)==="object"||typeof le=="function"))return le;if(le!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return je(ce)}(this,F)});function De(F){var W;(function(Fe,Be){if(!(Fe instanceof Be))throw new TypeError("Cannot call a class as a function")})(this,De),W=Pe.call(this,F);var de=F.afterLoad,ce=F.beforeLoad,le=F.scrollPosition,Ce=F.visibleByDefault;return W.state={visible:Ce},Ce&&(ce(),de()),W.onVisible=W.onVisible.bind(je(W)),W.isScrollTracked=!!(le&&Number.isFinite(le.x)&&le.x>=0&&Number.isFinite(le.y)&&le.y>=0),W}return L=De,(J=[{key:"componentDidUpdate",value:function(F,W){W.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var F=this.props,W=F.className,de=F.delayMethod,ce=F.delayTime,le=F.height,Ce=F.placeholder,Fe=F.scrollPosition,Be=F.style,Ie=F.threshold,Ke=F.useIntersectionObserver,Ue=F.width;return this.isScrollTracked||Ke&&d()?u().createElement(M,{className:W,height:le,onVisible:this.onVisible,placeholder:Ce,scrollPosition:Fe,style:Be,threshold:Ie,useIntersectionObserver:Ke,width:Ue}):u().createElement(we,{className:W,delayMethod:de,delayTime:ce,height:le,onVisible:this.onVisible,placeholder:Ce,style:Be,threshold:Ie,width:Ue})}}])&&Re(L.prototype,J),Object.defineProperty(L,"prototype",{writable:!1}),De}(u().Component);tt.propTypes={afterLoad:c.PropTypes.func,beforeLoad:c.PropTypes.func,useIntersectionObserver:c.PropTypes.bool,visibleByDefault:c.PropTypes.bool},tt.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Tt=tt;function lt(Y){return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},lt(Y)}var xo=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function ko(Y,L){var J=Object.keys(Y);if(Object.getOwnPropertySymbols){var ee=Object.getOwnPropertySymbols(Y);L&&(ee=ee.filter(function(Se){return Object.getOwnPropertyDescriptor(Y,Se).enumerable})),J.push.apply(J,ee)}return J}function Po(Y){for(var L=1;L<arguments.length;L++){var J=arguments[L]!=null?arguments[L]:{};L%2?ko(Object(J),!0).forEach(function(ee){So(Y,ee,J[ee])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Y,Object.getOwnPropertyDescriptors(J)):ko(Object(J)).forEach(function(ee){Object.defineProperty(Y,ee,Object.getOwnPropertyDescriptor(J,ee))})}return Y}function So(Y,L,J){return(L=jn(L))in Y?Object.defineProperty(Y,L,{value:J,enumerable:!0,configurable:!0,writable:!0}):Y[L]=J,Y}function lr(){return lr=Object.assign?Object.assign.bind():function(Y){for(var L=1;L<arguments.length;L++){var J=arguments[L];for(var ee in J)Object.prototype.hasOwnProperty.call(J,ee)&&(Y[ee]=J[ee])}return Y},lr.apply(this,arguments)}function To(Y,L){for(var J=0;J<L.length;J++){var ee=L[J];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(Y,jn(ee.key),ee)}}function jn(Y){var L=function(J,ee){if(lt(J)!=="object"||J===null)return J;var Se=J[Symbol.toPrimitive];if(Se!==void 0){var Pe=Se.call(J,"string");if(lt(Pe)!=="object")return Pe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(J)}(Y);return lt(L)==="symbol"?L:String(L)}function ln(Y,L){return ln=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,ee){return J.__proto__=ee,J},ln(Y,L)}function In(Y){return In=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},In(Y)}var Ar=function(Y){(function(F,W){if(typeof W!="function"&&W!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(W&&W.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),W&&ln(F,W)})(De,Y);var L,J,ee,Se,Pe=(ee=De,Se=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var F,W=In(ee);if(Se){var de=In(this).constructor;F=Reflect.construct(W,arguments,de)}else F=W.apply(this,arguments);return function(ce,le){if(le&&(lt(le)==="object"||typeof le=="function"))return le;if(le!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(Ce){if(Ce===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Ce}(ce)}(this,F)});function De(F){var W;return function(de,ce){if(!(de instanceof ce))throw new TypeError("Cannot call a class as a function")}(this,De),(W=Pe.call(this,F)).state={loaded:!1},W}return L=De,(J=[{key:"onImageLoad",value:function(){var F=this;return this.state.loaded?null:function(W){F.props.onLoad(W),F.props.afterLoad(),F.setState({loaded:!0})}}},{key:"getImg",value:function(){var F=this.props,W=(F.afterLoad,F.beforeLoad,F.delayMethod,F.delayTime,F.effect,F.placeholder,F.placeholderSrc,F.scrollPosition,F.threshold,F.useIntersectionObserver,F.visibleByDefault,F.wrapperClassName,F.wrapperProps,function(de,ce){if(de==null)return{};var le,Ce,Fe=function(Ie,Ke){if(Ie==null)return{};var Ue,ut,wn={},un=Object.keys(Ie);for(ut=0;ut<un.length;ut++)Ue=un[ut],Ke.indexOf(Ue)>=0||(wn[Ue]=Ie[Ue]);return wn}(de,ce);if(Object.getOwnPropertySymbols){var Be=Object.getOwnPropertySymbols(de);for(Ce=0;Ce<Be.length;Ce++)le=Be[Ce],ce.indexOf(le)>=0||Object.prototype.propertyIsEnumerable.call(de,le)&&(Fe[le]=de[le])}return Fe}(F,xo));return u().createElement("img",lr({},W,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var F=this.props,W=F.beforeLoad,de=F.className,ce=F.delayMethod,le=F.delayTime,Ce=F.height,Fe=F.placeholder,Be=F.scrollPosition,Ie=F.style,Ke=F.threshold,Ue=F.useIntersectionObserver,ut=F.visibleByDefault,wn=F.width;return u().createElement(Tt,{beforeLoad:W,className:de,delayMethod:ce,delayTime:le,height:Ce,placeholder:Fe,scrollPosition:Be,style:Ie,threshold:Ke,useIntersectionObserver:Ue,visibleByDefault:ut,width:wn},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(F){var W=this.props,de=W.effect,ce=W.height,le=W.placeholderSrc,Ce=W.width,Fe=W.wrapperClassName,Be=W.wrapperProps,Ie=this.state.loaded,Ke=Ie?" lazy-load-image-loaded":"",Ue=Ie||!le?{}:{backgroundImage:"url(".concat(le,")"),backgroundSize:"100% 100%"};return u().createElement("span",lr({className:Fe+" lazy-load-image-background "+de+Ke,style:Po(Po({},Ue),{},{color:"transparent",display:"inline-block",height:ce,width:Ce})},Be),F)}},{key:"render",value:function(){var F=this.props,W=F.effect,de=F.placeholderSrc,ce=F.visibleByDefault,le=F.wrapperClassName,Ce=F.wrapperProps,Fe=this.getLazyLoadImage();return(W||de)&&!ce||le||Ce?this.getWrappedLazyLoadImage(Fe):Fe}}])&&To(L.prototype,J),Object.defineProperty(L,"prototype",{writable:!1}),De}(u().Component);Ar.propTypes={onLoad:c.PropTypes.func,afterLoad:c.PropTypes.func,beforeLoad:c.PropTypes.func,delayMethod:c.PropTypes.string,delayTime:c.PropTypes.number,effect:c.PropTypes.string,placeholderSrc:c.PropTypes.string,threshold:c.PropTypes.number,useIntersectionObserver:c.PropTypes.bool,visibleByDefault:c.PropTypes.bool,wrapperClassName:c.PropTypes.string,wrapperProps:c.PropTypes.object},Ar.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const Ii=Ar})(),Uu.exports=a})()),Uu.exports}var XS=DS();export{HS as A,IS as B,KS as C,qS as E,VS as H,$m as L,Oe as R,GS as X,US as a,$S as b,NS as c,a1 as d,WS as e,XS as f,zS as g,Pb as h,jS as i,An as j,x1 as k,LS as l,BS as m,_ as r,Or as u};
