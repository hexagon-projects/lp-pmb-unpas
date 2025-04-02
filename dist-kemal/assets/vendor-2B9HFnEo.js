var Yb=Object.defineProperty;var Qb=(e,n,o)=>n in e?Yb(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var zn=(e,n,o)=>Qb(e,typeof n!="symbol"?n+"":n,o);function Ro(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uu={exports:{}},ki={},$u={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function Jb(){if(xh)return Re;xh=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,x={};function P(O,B,ie){this.props=O,this.context=B,this.refs=x,this.updater=ie||S}P.prototype.isReactComponent={},P.prototype.setState=function(O,B){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,B,"setState")},P.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function E(){}E.prototype=P.prototype;function L(O,B,ie){this.props=O,this.context=B,this.refs=x,this.updater=ie||S}var _=L.prototype=new E;_.constructor=L,w(_,P.prototype),_.isPureReactComponent=!0;var X=Array.isArray,F=Object.prototype.hasOwnProperty,ee={current:null},ae={key:!0,ref:!0,__self:!0,__source:!0};function K(O,B,ie){var se,xe={},Pe=null,Me=null;if(B!=null)for(se in B.ref!==void 0&&(Me=B.ref),B.key!==void 0&&(Pe=""+B.key),B)F.call(B,se)&&!ae.hasOwnProperty(se)&&(xe[se]=B[se]);var Oe=arguments.length-2;if(Oe===1)xe.children=ie;else if(1<Oe){for(var Ie=Array(Oe),nt=0;nt<Oe;nt++)Ie[nt]=arguments[nt+2];xe.children=Ie}if(O&&O.defaultProps)for(se in Oe=O.defaultProps,Oe)xe[se]===void 0&&(xe[se]=Oe[se]);return{$$typeof:e,type:O,key:Pe,ref:Me,props:xe,_owner:ee.current}}function J(O,B){return{$$typeof:e,type:O.type,key:B,ref:O.ref,props:O.props,_owner:O._owner}}function be(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function _e(O){var B={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ie){return B[ie]})}var De=/\/+/g;function je(O,B){return typeof O=="object"&&O!==null&&O.key!=null?_e(""+O.key):B.toString(36)}function q(O,B,ie,se,xe){var Pe=typeof O;(Pe==="undefined"||Pe==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(Pe){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case e:case n:Me=!0}}if(Me)return Me=O,xe=xe(Me),O=se===""?"."+je(Me,0):se,X(xe)?(ie="",O!=null&&(ie=O.replace(De,"$&/")+"/"),q(xe,B,ie,"",function(nt){return nt})):xe!=null&&(be(xe)&&(xe=J(xe,ie+(!xe.key||Me&&Me.key===xe.key?"":(""+xe.key).replace(De,"$&/")+"/")+O)),B.push(xe)),1;if(Me=0,se=se===""?".":se+":",X(O))for(var Oe=0;Oe<O.length;Oe++){Pe=O[Oe];var Ie=se+je(Pe,Oe);Me+=q(Pe,B,ie,Ie,xe)}else if(Ie=v(O),typeof Ie=="function")for(O=Ie.call(O),Oe=0;!(Pe=O.next()).done;)Pe=Pe.value,Ie=se+je(Pe,Oe++),Me+=q(Pe,B,ie,Ie,xe);else if(Pe==="object")throw B=String(O),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Me}function j(O,B,ie){if(O==null)return O;var se=[],xe=0;return q(O,se,"","",function(Pe){return B.call(ie,Pe,xe++)}),se}function V(O){if(O._status===-1){var B=O._result;B=B(),B.then(function(ie){(O._status===0||O._status===-1)&&(O._status=1,O._result=ie)},function(ie){(O._status===0||O._status===-1)&&(O._status=2,O._result=ie)}),O._status===-1&&(O._status=0,O._result=B)}if(O._status===1)return O._result.default;throw O._result}var z={current:null},D={transition:null},H={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:D,ReactCurrentOwner:ee};function W(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:j,forEach:function(O,B,ie){j(O,function(){B.apply(this,arguments)},ie)},count:function(O){var B=0;return j(O,function(){B++}),B},toArray:function(O){return j(O,function(B){return B})||[]},only:function(O){if(!be(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=P,Re.Fragment=o,Re.Profiler=s,Re.PureComponent=L,Re.StrictMode=i,Re.Suspense=p,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,Re.act=W,Re.cloneElement=function(O,B,ie){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var se=w({},O.props),xe=O.key,Pe=O.ref,Me=O._owner;if(B!=null){if(B.ref!==void 0&&(Pe=B.ref,Me=ee.current),B.key!==void 0&&(xe=""+B.key),O.type&&O.type.defaultProps)var Oe=O.type.defaultProps;for(Ie in B)F.call(B,Ie)&&!ae.hasOwnProperty(Ie)&&(se[Ie]=B[Ie]===void 0&&Oe!==void 0?Oe[Ie]:B[Ie])}var Ie=arguments.length-2;if(Ie===1)se.children=ie;else if(1<Ie){Oe=Array(Ie);for(var nt=0;nt<Ie;nt++)Oe[nt]=arguments[nt+2];se.children=Oe}return{$$typeof:e,type:O.type,key:xe,ref:Pe,props:se,_owner:Me}},Re.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Re.createElement=K,Re.createFactory=function(O){var B=K.bind(null,O);return B.type=O,B},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:d,render:O}},Re.isValidElement=be,Re.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:V}},Re.memo=function(O,B){return{$$typeof:h,type:O,compare:B===void 0?null:B}},Re.startTransition=function(O){var B=D.transition;D.transition={};try{O()}finally{D.transition=B}},Re.unstable_act=W,Re.useCallback=function(O,B){return z.current.useCallback(O,B)},Re.useContext=function(O){return z.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return z.current.useDeferredValue(O)},Re.useEffect=function(O,B){return z.current.useEffect(O,B)},Re.useId=function(){return z.current.useId()},Re.useImperativeHandle=function(O,B,ie){return z.current.useImperativeHandle(O,B,ie)},Re.useInsertionEffect=function(O,B){return z.current.useInsertionEffect(O,B)},Re.useLayoutEffect=function(O,B){return z.current.useLayoutEffect(O,B)},Re.useMemo=function(O,B){return z.current.useMemo(O,B)},Re.useReducer=function(O,B,ie){return z.current.useReducer(O,B,ie)},Re.useRef=function(O){return z.current.useRef(O)},Re.useState=function(O){return z.current.useState(O)},Re.useSyncExternalStore=function(O,B,ie){return z.current.useSyncExternalStore(O,B,ie)},Re.useTransition=function(){return z.current.useTransition()},Re.version="18.3.1",Re}var Sh;function Fs(){return Sh||(Sh=1,$u.exports=Jb()),$u.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph;function Zb(){if(Ph)return ki;Ph=1;var e=Fs(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,h){var g,y={},v=null,S=null;h!==void 0&&(v=""+h),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(S=p.ref);for(g in p)i.call(p,g)&&!u.hasOwnProperty(g)&&(y[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)y[g]===void 0&&(y[g]=p[g]);return{$$typeof:n,type:d,key:v,ref:S,props:y,_owner:s.current}}return ki.Fragment=o,ki.jsx=c,ki.jsxs=c,ki}var kh;function e1(){return kh||(kh=1,Uu.exports=Zb()),Uu.exports}var Fn=e1(),R=Fs();const Ae=Ro(R);var cs={},qu={exports:{}},zt={},Hu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function t1(){return Th||(Th=1,function(e){function n(D,H){var W=D.length;D.push(H);e:for(;0<W;){var O=W-1>>>1,B=D[O];if(0<s(B,H))D[O]=H,D[W]=B,W=O;else break e}}function o(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var H=D[0],W=D.pop();if(W!==H){D[0]=W;e:for(var O=0,B=D.length,ie=B>>>1;O<ie;){var se=2*(O+1)-1,xe=D[se],Pe=se+1,Me=D[Pe];if(0>s(xe,W))Pe<B&&0>s(Me,xe)?(D[O]=Me,D[Pe]=W,O=Pe):(D[O]=xe,D[se]=W,O=se);else if(Pe<B&&0>s(Me,W))D[O]=Me,D[Pe]=W,O=Pe;else break e}}return H}function s(D,H){var W=D.sortIndex-H.sortIndex;return W!==0?W:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();e.unstable_now=function(){return c.now()-d}}var p=[],h=[],g=1,y=null,v=3,S=!1,w=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var H=o(h);H!==null;){if(H.callback===null)i(h);else if(H.startTime<=D)i(h),H.sortIndex=H.expirationTime,n(p,H);else break;H=o(h)}}function X(D){if(x=!1,_(D),!w)if(o(p)!==null)w=!0,V(F);else{var H=o(h);H!==null&&z(X,H.startTime-D)}}function F(D,H){w=!1,x&&(x=!1,E(K),K=-1),S=!0;var W=v;try{for(_(H),y=o(p);y!==null&&(!(y.expirationTime>H)||D&&!_e());){var O=y.callback;if(typeof O=="function"){y.callback=null,v=y.priorityLevel;var B=O(y.expirationTime<=H);H=e.unstable_now(),typeof B=="function"?y.callback=B:y===o(p)&&i(p),_(H)}else i(p);y=o(p)}if(y!==null)var ie=!0;else{var se=o(h);se!==null&&z(X,se.startTime-H),ie=!1}return ie}finally{y=null,v=W,S=!1}}var ee=!1,ae=null,K=-1,J=5,be=-1;function _e(){return!(e.unstable_now()-be<J)}function De(){if(ae!==null){var D=e.unstable_now();be=D;var H=!0;try{H=ae(!0,D)}finally{H?je():(ee=!1,ae=null)}}else ee=!1}var je;if(typeof L=="function")je=function(){L(De)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,j=q.port2;q.port1.onmessage=De,je=function(){j.postMessage(null)}}else je=function(){P(De,0)};function V(D){ae=D,ee||(ee=!0,je())}function z(D,H){K=P(function(){D(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,V(F))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return o(p)},e.unstable_next=function(D){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var W=v;v=H;try{return D()}finally{v=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var W=v;v=D;try{return H()}finally{v=W}},e.unstable_scheduleCallback=function(D,H,W){var O=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?O+W:O):W=O,D){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=W+B,D={id:g++,callback:H,priorityLevel:D,startTime:W,expirationTime:B,sortIndex:-1},W>O?(D.sortIndex=W,n(h,D),o(p)===null&&D===o(h)&&(x?(E(K),K=-1):x=!0,z(X,W-O))):(D.sortIndex=B,n(p,D),w||S||(w=!0,V(F))),D},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(D){var H=v;return function(){var W=v;v=H;try{return D.apply(this,arguments)}finally{v=W}}}}(Wu)),Wu}var Eh;function n1(){return Eh||(Eh=1,Hu.exports=t1()),Hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function r1(){if(Oh)return zt;Oh=1;var e=Fs(),n=n1();function o(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function u(t,r){c(t,r),c(t+"Capture",r)}function c(t,r){for(s[t]=r,t=0;t<r.length;t++)i.add(r[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function v(t){return p.call(y,t)?!0:p.call(g,t)?!1:h.test(t)?y[t]=!0:(g[t]=!0,!1)}function S(t,r,a,l){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,r,a,l){if(r===null||typeof r>"u"||S(t,r,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function x(t,r,a,l,f,m,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=m,this.removeEmptyString=b}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){P[t]=new x(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];P[r]=new x(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){P[t]=new x(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){P[t]=new x(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){P[t]=new x(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){P[t]=new x(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){P[t]=new x(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){P[t]=new x(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){P[t]=new x(t,5,!1,t.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(E,L);P[r]=new x(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(E,L);P[r]=new x(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(E,L);P[r]=new x(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){P[t]=new x(t,1,!1,t.toLowerCase(),null,!1,!1)}),P.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){P[t]=new x(t,1,!1,t.toLowerCase(),null,!0,!0)});function _(t,r,a,l){var f=P.hasOwnProperty(r)?P[r]:null;(f!==null?f.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(w(r,a,f,l)&&(a=null),l||f===null?v(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(r=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(r):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,r,a):t.setAttribute(r,a))))}var X=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),ee=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),be=Symbol.for("react.provider"),_e=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),D=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,O;function B(t){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+t}var ie=!1;function se(t,r){if(!t||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(I){var l=I}Reflect.construct(t,[],r)}else{try{r.call()}catch(I){l=I}t.call(r.prototype)}else{try{throw Error()}catch(I){l=I}t()}}catch(I){if(I&&l&&typeof I.stack=="string"){for(var f=I.stack.split(`
`),m=l.stack.split(`
`),b=f.length-1,k=m.length-1;1<=b&&0<=k&&f[b]!==m[k];)k--;for(;1<=b&&0<=k;b--,k--)if(f[b]!==m[k]){if(b!==1||k!==1)do if(b--,k--,0>k||f[b]!==m[k]){var T=`
`+f[b].replace(" at new "," at ");return t.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",t.displayName)),T}while(1<=b&&0<=k);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?B(t):""}function xe(t){switch(t.tag){case 5:return B(t.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return t=se(t.type,!1),t;case 11:return t=se(t.type.render,!1),t;case 1:return t=se(t.type,!0),t;default:return""}}function Pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ae:return"Fragment";case ee:return"Portal";case J:return"Profiler";case K:return"StrictMode";case je:return"Suspense";case q:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _e:return(t.displayName||"Context")+".Consumer";case be:return(t._context.displayName||"Context")+".Provider";case De:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return r=t.displayName||null,r!==null?r:Pe(t.type)||"Memo";case V:r=t._payload,t=t._init;try{return Pe(t(r))}catch{}}return null}function Me(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(r);case 8:return r===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Oe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function nt(t){var r=Ie(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(b){l=""+b,m.call(this,b)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function rt(t){t._valueTracker||(t._valueTracker=nt(t))}function Rt(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==a?(r.setValue(t),!0):!1}function ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jo(t,r){var a=r.checked;return W({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function zo(t,r){var a=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;a=Oe(r.value!=null?r.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Io(t,r){r=r.checked,r!=null&&_(t,"checked",r,!1)}function Fo(t,r){Io(t,r);var a=Oe(r.value),l=r.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Vo(t,r.type,a):r.hasOwnProperty("defaultValue")&&Vo(t,r.type,Oe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function yr(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Vo(t,r,a){(r!=="number"||ft(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Hn=Array.isArray;function mn(t,r,a,l){if(t=t.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=r.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Oe(a),r=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function Wn(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(o(91));return W({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $r(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(o(92));if(Hn(a)){if(1<a.length)throw Error(o(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:Oe(a)}}function na(t,r){var a=Oe(r.value),l=Oe(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function Z(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function N(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ne(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?N(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var re,Te=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(r,a,l,f)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=re.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function ke(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(t){$.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Le[r]=Le[t]})});function G(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Le.hasOwnProperty(t)&&Le[t]?(""+r).trim():r+"px"}function pe(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=G(a,r[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var fe=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ue(t,r){if(r){if(fe[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(o(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(o(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(o(61))}if(r.style!=null&&typeof r.style!="object")throw Error(o(62))}}function Ce(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=null;function $e(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fe=null,Xe=null,qe=null;function dt(t){if(t=ui(t)){if(typeof Fe!="function")throw Error(o(280));var r=t.stateNode;r&&(r=Ta(r),Fe(t.stateNode,t.type,r))}}function Cn(t){Xe?qe?qe.push(t):qe=[t]:Xe=t}function gn(){if(Xe){var t=Xe,r=qe;if(qe=Xe=null,dt(t),r)for(t=0;t<r.length;t++)dt(r[t])}}function vr(t,r){return t(r)}function Bo(){}var qr=!1;function $f(t,r,a){if(qr)return t(r,a);qr=!0;try{return vr(t,r,a)}finally{qr=!1,(Xe!==null||qe!==null)&&(Bo(),gn())}}function Uo(t,r){var a=t.stateNode;if(a===null)return null;var l=Ta(a);if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,r,typeof a));return a}var al=!1;if(d)try{var $o={};Object.defineProperty($o,"passive",{get:function(){al=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{al=!1}function n0(t,r,a,l,f,m,b,k,T){var I=Array.prototype.slice.call(arguments,3);try{r.apply(a,I)}catch(Q){this.onError(Q)}}var qo=!1,ra=null,oa=!1,sl=null,r0={onError:function(t){qo=!0,ra=t}};function o0(t,r,a,l,f,m,b,k,T){qo=!1,ra=null,n0.apply(r0,arguments)}function i0(t,r,a,l,f,m,b,k,T){if(o0.apply(this,arguments),qo){if(qo){var I=ra;qo=!1,ra=null}else throw Error(o(198));oa||(oa=!0,sl=I)}}function br(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function qf(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Hf(t){if(br(t)!==t)throw Error(o(188))}function a0(t){var r=t.alternate;if(!r){if(r=br(t),r===null)throw Error(o(188));return r!==t?null:t}for(var a=t,l=r;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return Hf(f),t;if(m===l)return Hf(f),r;m=m.sibling}throw Error(o(188))}if(a.return!==l.return)a=f,l=m;else{for(var b=!1,k=f.child;k;){if(k===a){b=!0,a=f,l=m;break}if(k===l){b=!0,l=f,a=m;break}k=k.sibling}if(!b){for(k=m.child;k;){if(k===a){b=!0,a=m,l=f;break}if(k===l){b=!0,l=m,a=f;break}k=k.sibling}if(!b)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:r}function Wf(t){return t=a0(t),t!==null?Kf(t):null}function Kf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Kf(t);if(r!==null)return r;t=t.sibling}return null}var Gf=n.unstable_scheduleCallback,Xf=n.unstable_cancelCallback,s0=n.unstable_shouldYield,l0=n.unstable_requestPaint,at=n.unstable_now,u0=n.unstable_getCurrentPriorityLevel,ll=n.unstable_ImmediatePriority,Yf=n.unstable_UserBlockingPriority,ia=n.unstable_NormalPriority,c0=n.unstable_LowPriority,Qf=n.unstable_IdlePriority,aa=null,yn=null;function f0(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(aa,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:h0,d0=Math.log,p0=Math.LN2;function h0(t){return t>>>=0,t===0?32:31-(d0(t)/p0|0)|0}var sa=64,la=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ua(t,r){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,m=t.pingedLanes,b=a&268435455;if(b!==0){var k=b&~f;k!==0?l=Ho(k):(m&=b,m!==0&&(l=Ho(m)))}else b=a&~f,b!==0?l=Ho(b):m!==0&&(l=Ho(m));if(l===0)return 0;if(r!==0&&r!==l&&(r&f)===0&&(f=l&-l,m=r&-r,f>=m||f===16&&(m&4194240)!==0))return r;if((l&4)!==0&&(l|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=l;0<r;)a=31-nn(r),f=1<<a,l|=t[a],r&=~f;return l}function m0(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g0(t,r){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes;0<m;){var b=31-nn(m),k=1<<b,T=f[b];T===-1?((k&a)===0||(k&l)!==0)&&(f[b]=m0(k,r)):T<=r&&(t.expiredLanes|=k),m&=~k}}function ul(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jf(){var t=sa;return sa<<=1,(sa&4194240)===0&&(sa=64),t}function cl(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Wo(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-nn(r),t[r]=a}function y0(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-nn(a),m=1<<f;r[f]=0,l[f]=-1,t[f]=-1,a&=~m}}function fl(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var l=31-nn(a),f=1<<l;f&r|t[l]&r&&(t[l]|=r),a&=~f}}var Ve=0;function Zf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ed,dl,td,nd,rd,pl=!1,ca=[],Kn=null,Gn=null,Xn=null,Ko=new Map,Go=new Map,Yn=[],v0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function od(t,r){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":Ko.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(r.pointerId)}}function Xo(t,r,a,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},r!==null&&(r=ui(r),r!==null&&dl(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function b0(t,r,a,l,f){switch(r){case"focusin":return Kn=Xo(Kn,t,r,a,l,f),!0;case"dragenter":return Gn=Xo(Gn,t,r,a,l,f),!0;case"mouseover":return Xn=Xo(Xn,t,r,a,l,f),!0;case"pointerover":var m=f.pointerId;return Ko.set(m,Xo(Ko.get(m)||null,t,r,a,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Go.set(m,Xo(Go.get(m)||null,t,r,a,l,f)),!0}return!1}function id(t){var r=wr(t.target);if(r!==null){var a=br(r);if(a!==null){if(r=a.tag,r===13){if(r=qf(a),r!==null){t.blockedOn=r,rd(t.priority,function(){td(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fa(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=ml(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Ue=l,a.target.dispatchEvent(l),Ue=null}else return r=ui(a),r!==null&&dl(r),t.blockedOn=a,!1;r.shift()}return!0}function ad(t,r,a){fa(t)&&a.delete(r)}function w0(){pl=!1,Kn!==null&&fa(Kn)&&(Kn=null),Gn!==null&&fa(Gn)&&(Gn=null),Xn!==null&&fa(Xn)&&(Xn=null),Ko.forEach(ad),Go.forEach(ad)}function Yo(t,r){t.blockedOn===r&&(t.blockedOn=null,pl||(pl=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,w0)))}function Qo(t){function r(f){return Yo(f,t)}if(0<ca.length){Yo(ca[0],t);for(var a=1;a<ca.length;a++){var l=ca[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Kn!==null&&Yo(Kn,t),Gn!==null&&Yo(Gn,t),Xn!==null&&Yo(Xn,t),Ko.forEach(r),Go.forEach(r),a=0;a<Yn.length;a++)l=Yn[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)id(a),a.blockedOn===null&&Yn.shift()}var Hr=X.ReactCurrentBatchConfig,da=!0;function x0(t,r,a,l){var f=Ve,m=Hr.transition;Hr.transition=null;try{Ve=1,hl(t,r,a,l)}finally{Ve=f,Hr.transition=m}}function S0(t,r,a,l){var f=Ve,m=Hr.transition;Hr.transition=null;try{Ve=4,hl(t,r,a,l)}finally{Ve=f,Hr.transition=m}}function hl(t,r,a,l){if(da){var f=ml(t,r,a,l);if(f===null)Dl(t,r,l,pa,a),od(t,l);else if(b0(f,t,r,a,l))l.stopPropagation();else if(od(t,l),r&4&&-1<v0.indexOf(t)){for(;f!==null;){var m=ui(f);if(m!==null&&ed(m),m=ml(t,r,a,l),m===null&&Dl(t,r,l,pa,a),m===f)break;f=m}f!==null&&l.stopPropagation()}else Dl(t,r,l,null,a)}}var pa=null;function ml(t,r,a,l){if(pa=null,t=$e(l),t=wr(t),t!==null)if(r=br(t),r===null)t=null;else if(a=r.tag,a===13){if(t=qf(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return pa=t,null}function sd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(u0()){case ll:return 1;case Yf:return 4;case ia:case c0:return 16;case Qf:return 536870912;default:return 16}default:return 16}}var Qn=null,gl=null,ha=null;function ld(){if(ha)return ha;var t,r=gl,a=r.length,l,f="value"in Qn?Qn.value:Qn.textContent,m=f.length;for(t=0;t<a&&r[t]===f[t];t++);var b=a-t;for(l=1;l<=b&&r[a-l]===f[m-l];l++);return ha=f.slice(t,1<l?1-l:void 0)}function ma(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function ud(){return!1}function Ft(t){function r(a,l,f,m,b){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(a=t[k],this[k]=a?a(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ga:ud,this.isPropagationStopped=ud,this}return W(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),r}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Ft(Wr),Jo=W({},Wr,{view:0,detail:0}),P0=Ft(Jo),vl,bl,Zo,ya=W({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zo&&(Zo&&t.type==="mousemove"?(vl=t.screenX-Zo.screenX,bl=t.screenY-Zo.screenY):bl=vl=0,Zo=t),vl)},movementY:function(t){return"movementY"in t?t.movementY:bl}}),cd=Ft(ya),k0=W({},ya,{dataTransfer:0}),T0=Ft(k0),E0=W({},Jo,{relatedTarget:0}),wl=Ft(E0),O0=W({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),C0=Ft(O0),R0=W({},Wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A0=Ft(R0),_0=W({},Wr,{data:0}),fd=Ft(_0),D0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=L0[t])?!!r[t]:!1}function xl(){return N0}var j0=W({},Jo,{key:function(t){if(t.key){var r=D0[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(t){return t.type==="keypress"?ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),z0=Ft(j0),I0=W({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dd=Ft(I0),F0=W({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),V0=Ft(F0),B0=W({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=Ft(B0),$0=W({},ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q0=Ft($0),H0=[9,13,27,32],Sl=d&&"CompositionEvent"in window,ei=null;d&&"documentMode"in document&&(ei=document.documentMode);var W0=d&&"TextEvent"in window&&!ei,pd=d&&(!Sl||ei&&8<ei&&11>=ei),hd=" ",md=!1;function gd(t,r){switch(t){case"keyup":return H0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function K0(t,r){switch(t){case"compositionend":return yd(r);case"keypress":return r.which!==32?null:(md=!0,hd);case"textInput":return t=r.data,t===hd&&md?null:t;default:return null}}function G0(t,r){if(Kr)return t==="compositionend"||!Sl&&gd(t,r)?(t=ld(),ha=gl=Qn=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return pd&&r.locale!=="ko"?null:r.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!X0[t.type]:r==="textarea"}function bd(t,r,a,l){Cn(l),r=Sa(r,"onChange"),0<r.length&&(a=new yl("onChange","change",null,a,l),t.push({event:a,listeners:r}))}var ti=null,ni=null;function Y0(t){zd(t,0)}function va(t){var r=Jr(t);if(Rt(r))return t}function Q0(t,r){if(t==="change")return r}var wd=!1;if(d){var Pl;if(d){var kl="oninput"in document;if(!kl){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),kl=typeof xd.oninput=="function"}Pl=kl}else Pl=!1;wd=Pl&&(!document.documentMode||9<document.documentMode)}function Sd(){ti&&(ti.detachEvent("onpropertychange",Pd),ni=ti=null)}function Pd(t){if(t.propertyName==="value"&&va(ni)){var r=[];bd(r,ni,t,$e(t)),$f(Y0,r)}}function J0(t,r,a){t==="focusin"?(Sd(),ti=r,ni=a,ti.attachEvent("onpropertychange",Pd)):t==="focusout"&&Sd()}function Z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return va(ni)}function eb(t,r){if(t==="click")return va(r)}function tb(t,r){if(t==="input"||t==="change")return va(r)}function nb(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var rn=typeof Object.is=="function"?Object.is:nb;function ri(t,r){if(rn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!p.call(r,f)||!rn(t[f],r[f]))return!1}return!0}function kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Td(t,r){var a=kd(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=r&&l>=r)return{node:a,offset:r-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kd(a)}}function Ed(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Ed(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Od(){for(var t=window,r=ft();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=ft(t.document)}return r}function Tl(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function rb(t){var r=Od(),a=t.focusedElem,l=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&Ed(a.ownerDocument.documentElement,a)){if(l!==null&&Tl(a)){if(r=l.start,t=l.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,m=Math.min(l.start,f);l=l.end===void 0?m:Math.min(l.end,f),!t.extend&&m>l&&(f=l,l=m,m=f),f=Td(a,m);var b=Td(a,l);f&&b&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),m>l?(t.addRange(r),t.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ob=d&&"documentMode"in document&&11>=document.documentMode,Gr=null,El=null,oi=null,Ol=!1;function Cd(t,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ol||Gr==null||Gr!==ft(l)||(l=Gr,"selectionStart"in l&&Tl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oi&&ri(oi,l)||(oi=l,l=Sa(El,"onSelect"),0<l.length&&(r=new yl("onSelect","select",null,r,a),t.push({event:r,listeners:l}),r.target=Gr)))}function ba(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Xr={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Cl={},Rd={};d&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function wa(t){if(Cl[t])return Cl[t];if(!Xr[t])return t;var r=Xr[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in Rd)return Cl[t]=r[a];return t}var Ad=wa("animationend"),_d=wa("animationiteration"),Dd=wa("animationstart"),Md=wa("transitionend"),Ld=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(t,r){Ld.set(t,r),u(r,[t])}for(var Rl=0;Rl<Nd.length;Rl++){var Al=Nd[Rl],ib=Al.toLowerCase(),ab=Al[0].toUpperCase()+Al.slice(1);Jn(ib,"on"+ab)}Jn(Ad,"onAnimationEnd"),Jn(_d,"onAnimationIteration"),Jn(Dd,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(Md,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function jd(t,r,a){var l=t.type||"unknown-event";t.currentTarget=a,i0(l,r,void 0,t),t.currentTarget=null}function zd(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var m=void 0;if(r)for(var b=l.length-1;0<=b;b--){var k=l[b],T=k.instance,I=k.currentTarget;if(k=k.listener,T!==m&&f.isPropagationStopped())break e;jd(f,k,I),m=T}else for(b=0;b<l.length;b++){if(k=l[b],T=k.instance,I=k.currentTarget,k=k.listener,T!==m&&f.isPropagationStopped())break e;jd(f,k,I),m=T}}}if(oa)throw t=sl,oa=!1,sl=null,t}function We(t,r){var a=r[Il];a===void 0&&(a=r[Il]=new Set);var l=t+"__bubble";a.has(l)||(Id(r,t,2,!1),a.add(l))}function _l(t,r,a){var l=0;r&&(l|=4),Id(a,t,l,r)}var xa="_reactListening"+Math.random().toString(36).slice(2);function ai(t){if(!t[xa]){t[xa]=!0,i.forEach(function(a){a!=="selectionchange"&&(sb.has(a)||_l(a,!1,t),_l(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[xa]||(r[xa]=!0,_l("selectionchange",!1,r))}}function Id(t,r,a,l){switch(sd(r)){case 1:var f=x0;break;case 4:f=S0;break;default:f=hl}a=f.bind(null,r,a,t),f=void 0,!al||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(r,a,{capture:!0,passive:f}):t.addEventListener(r,a,!0):f!==void 0?t.addEventListener(r,a,{passive:f}):t.addEventListener(r,a,!1)}function Dl(t,r,a,l,f){var m=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var k=l.stateNode.containerInfo;if(k===f||k.nodeType===8&&k.parentNode===f)break;if(b===4)for(b=l.return;b!==null;){var T=b.tag;if((T===3||T===4)&&(T=b.stateNode.containerInfo,T===f||T.nodeType===8&&T.parentNode===f))return;b=b.return}for(;k!==null;){if(b=wr(k),b===null)return;if(T=b.tag,T===5||T===6){l=m=b;continue e}k=k.parentNode}}l=l.return}$f(function(){var I=m,Q=$e(a),te=[];e:{var Y=Ld.get(t);if(Y!==void 0){var le=yl,de=t;switch(t){case"keypress":if(ma(a)===0)break e;case"keydown":case"keyup":le=z0;break;case"focusin":de="focus",le=wl;break;case"focusout":de="blur",le=wl;break;case"beforeblur":case"afterblur":le=wl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=T0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=V0;break;case Ad:case _d:case Dd:le=C0;break;case Md:le=U0;break;case"scroll":le=P0;break;case"wheel":le=q0;break;case"copy":case"cut":case"paste":le=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=dd}var he=(r&4)!==0,st=!he&&t==="scroll",A=he?Y!==null?Y+"Capture":null:Y;he=[];for(var C=I,M;C!==null;){M=C;var oe=M.stateNode;if(M.tag===5&&oe!==null&&(M=oe,A!==null&&(oe=Uo(C,A),oe!=null&&he.push(si(C,oe,M)))),st)break;C=C.return}0<he.length&&(Y=new le(Y,de,null,a,Q),te.push({event:Y,listeners:he}))}}if((r&7)===0){e:{if(Y=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",Y&&a!==Ue&&(de=a.relatedTarget||a.fromElement)&&(wr(de)||de[Rn]))break e;if((le||Y)&&(Y=Q.window===Q?Q:(Y=Q.ownerDocument)?Y.defaultView||Y.parentWindow:window,le?(de=a.relatedTarget||a.toElement,le=I,de=de?wr(de):null,de!==null&&(st=br(de),de!==st||de.tag!==5&&de.tag!==6)&&(de=null)):(le=null,de=I),le!==de)){if(he=cd,oe="onMouseLeave",A="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(he=dd,oe="onPointerLeave",A="onPointerEnter",C="pointer"),st=le==null?Y:Jr(le),M=de==null?Y:Jr(de),Y=new he(oe,C+"leave",le,a,Q),Y.target=st,Y.relatedTarget=M,oe=null,wr(Q)===I&&(he=new he(A,C+"enter",de,a,Q),he.target=M,he.relatedTarget=st,oe=he),st=oe,le&&de)t:{for(he=le,A=de,C=0,M=he;M;M=Yr(M))C++;for(M=0,oe=A;oe;oe=Yr(oe))M++;for(;0<C-M;)he=Yr(he),C--;for(;0<M-C;)A=Yr(A),M--;for(;C--;){if(he===A||A!==null&&he===A.alternate)break t;he=Yr(he),A=Yr(A)}he=null}else he=null;le!==null&&Fd(te,Y,le,he,!1),de!==null&&st!==null&&Fd(te,st,de,he,!0)}}e:{if(Y=I?Jr(I):window,le=Y.nodeName&&Y.nodeName.toLowerCase(),le==="select"||le==="input"&&Y.type==="file")var me=Q0;else if(vd(Y))if(wd)me=tb;else{me=Z0;var ye=J0}else(le=Y.nodeName)&&le.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(me=eb);if(me&&(me=me(t,I))){bd(te,me,a,Q);break e}ye&&ye(t,Y,I),t==="focusout"&&(ye=Y._wrapperState)&&ye.controlled&&Y.type==="number"&&Vo(Y,"number",Y.value)}switch(ye=I?Jr(I):window,t){case"focusin":(vd(ye)||ye.contentEditable==="true")&&(Gr=ye,El=I,oi=null);break;case"focusout":oi=El=Gr=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,Cd(te,a,Q);break;case"selectionchange":if(ob)break;case"keydown":case"keyup":Cd(te,a,Q)}var ve;if(Sl)e:{switch(t){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Kr?gd(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(pd&&a.locale!=="ko"&&(Kr||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Kr&&(ve=ld()):(Qn=Q,gl="value"in Qn?Qn.value:Qn.textContent,Kr=!0)),ye=Sa(I,Se),0<ye.length&&(Se=new fd(Se,t,null,a,Q),te.push({event:Se,listeners:ye}),ve?Se.data=ve:(ve=yd(a),ve!==null&&(Se.data=ve)))),(ve=W0?K0(t,a):G0(t,a))&&(I=Sa(I,"onBeforeInput"),0<I.length&&(Q=new fd("onBeforeInput","beforeinput",null,a,Q),te.push({event:Q,listeners:I}),Q.data=ve))}zd(te,r)})}function si(t,r,a){return{instance:t,listener:r,currentTarget:a}}function Sa(t,r){for(var a=r+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Uo(t,a),m!=null&&l.unshift(si(t,m,f)),m=Uo(t,r),m!=null&&l.push(si(t,m,f))),t=t.return}return l}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fd(t,r,a,l,f){for(var m=r._reactName,b=[];a!==null&&a!==l;){var k=a,T=k.alternate,I=k.stateNode;if(T!==null&&T===l)break;k.tag===5&&I!==null&&(k=I,f?(T=Uo(a,m),T!=null&&b.unshift(si(a,T,k))):f||(T=Uo(a,m),T!=null&&b.push(si(a,T,k)))),a=a.return}b.length!==0&&t.push({event:r,listeners:b})}var lb=/\r\n?/g,ub=/\u0000|\uFFFD/g;function Vd(t){return(typeof t=="string"?t:""+t).replace(lb,`
`).replace(ub,"")}function Pa(t,r,a){if(r=Vd(r),Vd(t)!==r&&a)throw Error(o(425))}function ka(){}var Ml=null,Ll=null;function Nl(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,cb=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,fb=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(t){return Bd.resolve(null).then(t).catch(db)}:jl;function db(t){setTimeout(function(){throw t})}function zl(t,r){var a=r,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),Qo(r);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);Qo(r)}function Zn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Ud(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),vn="__reactFiber$"+Qr,li="__reactProps$"+Qr,Rn="__reactContainer$"+Qr,Il="__reactEvents$"+Qr,pb="__reactListeners$"+Qr,hb="__reactHandles$"+Qr;function wr(t){var r=t[vn];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Rn]||a[vn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Ud(t);t!==null;){if(a=t[vn])return a;t=Ud(t)}return r}t=a,a=t.parentNode}return null}function ui(t){return t=t[vn]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(o(33))}function Ta(t){return t[li]||null}var Fl=[],Zr=-1;function er(t){return{current:t}}function Ke(t){0>Zr||(t.current=Fl[Zr],Fl[Zr]=null,Zr--)}function He(t,r){Zr++,Fl[Zr]=t.current,t.current=r}var tr={},St=er(tr),Dt=er(!1),xr=tr;function eo(t,r){var a=t.type.contextTypes;if(!a)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=r[m];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function Mt(t){return t=t.childContextTypes,t!=null}function Ea(){Ke(Dt),Ke(St)}function $d(t,r,a){if(St.current!==tr)throw Error(o(168));He(St,r),He(Dt,a)}function qd(t,r,a){var l=t.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in r))throw Error(o(108,Me(t)||"Unknown",f));return W({},a,l)}function Oa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,xr=St.current,He(St,t),He(Dt,Dt.current),!0}function Hd(t,r,a){var l=t.stateNode;if(!l)throw Error(o(169));a?(t=qd(t,r,xr),l.__reactInternalMemoizedMergedChildContext=t,Ke(Dt),Ke(St),He(St,t)):Ke(Dt),He(Dt,a)}var An=null,Ca=!1,Vl=!1;function Wd(t){An===null?An=[t]:An.push(t)}function mb(t){Ca=!0,Wd(t)}function nr(){if(!Vl&&An!==null){Vl=!0;var t=0,r=Ve;try{var a=An;for(Ve=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}An=null,Ca=!1}catch(f){throw An!==null&&(An=An.slice(t+1)),Gf(ll,nr),f}finally{Ve=r,Vl=!1}}return null}var to=[],no=0,Ra=null,Aa=0,Kt=[],Gt=0,Sr=null,_n=1,Dn="";function Pr(t,r){to[no++]=Aa,to[no++]=Ra,Ra=t,Aa=r}function Kd(t,r,a){Kt[Gt++]=_n,Kt[Gt++]=Dn,Kt[Gt++]=Sr,Sr=t;var l=_n;t=Dn;var f=32-nn(l)-1;l&=~(1<<f),a+=1;var m=32-nn(r)+f;if(30<m){var b=f-f%5;m=(l&(1<<b)-1).toString(32),l>>=b,f-=b,_n=1<<32-nn(r)+f|a<<f|l,Dn=m+t}else _n=1<<m|a<<f|l,Dn=t}function Bl(t){t.return!==null&&(Pr(t,1),Kd(t,1,0))}function Ul(t){for(;t===Ra;)Ra=to[--no],to[no]=null,Aa=to[--no],to[no]=null;for(;t===Sr;)Sr=Kt[--Gt],Kt[Gt]=null,Dn=Kt[--Gt],Kt[Gt]=null,_n=Kt[--Gt],Kt[Gt]=null}var Vt=null,Bt=null,Ye=!1,on=null;function Gd(t,r){var a=Jt(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Xd(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Vt=t,Bt=Zn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Vt=t,Bt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Sr!==null?{id:_n,overflow:Dn}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Jt(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,Vt=t,Bt=null,!0):!1;default:return!1}}function $l(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ql(t){if(Ye){var r=Bt;if(r){var a=r;if(!Xd(t,r)){if($l(t))throw Error(o(418));r=Zn(a.nextSibling);var l=Vt;r&&Xd(t,r)?Gd(l,a):(t.flags=t.flags&-4097|2,Ye=!1,Vt=t)}}else{if($l(t))throw Error(o(418));t.flags=t.flags&-4097|2,Ye=!1,Vt=t}}}function Yd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vt=t}function _a(t){if(t!==Vt)return!1;if(!Ye)return Yd(t),Ye=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Nl(t.type,t.memoizedProps)),r&&(r=Bt)){if($l(t))throw Qd(),Error(o(418));for(;r;)Gd(t,r),r=Zn(r.nextSibling)}if(Yd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){Bt=Zn(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}Bt=null}}else Bt=Vt?Zn(t.stateNode.nextSibling):null;return!0}function Qd(){for(var t=Bt;t;)t=Zn(t.nextSibling)}function ro(){Bt=Vt=null,Ye=!1}function Hl(t){on===null?on=[t]:on.push(t)}var gb=X.ReactCurrentBatchConfig;function ci(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(o(309));var l=a.stateNode}if(!l)throw Error(o(147,t));var f=l,m=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(b){var k=f.refs;b===null?delete k[m]:k[m]=b},r._stringRef=m,r)}if(typeof t!="string")throw Error(o(284));if(!a._owner)throw Error(o(290,t))}return t}function Da(t,r){throw t=Object.prototype.toString.call(r),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Jd(t){var r=t._init;return r(t._payload)}function Zd(t){function r(A,C){if(t){var M=A.deletions;M===null?(A.deletions=[C],A.flags|=16):M.push(C)}}function a(A,C){if(!t)return null;for(;C!==null;)r(A,C),C=C.sibling;return null}function l(A,C){for(A=new Map;C!==null;)C.key!==null?A.set(C.key,C):A.set(C.index,C),C=C.sibling;return A}function f(A,C){return A=cr(A,C),A.index=0,A.sibling=null,A}function m(A,C,M){return A.index=M,t?(M=A.alternate,M!==null?(M=M.index,M<C?(A.flags|=2,C):M):(A.flags|=2,C)):(A.flags|=1048576,C)}function b(A){return t&&A.alternate===null&&(A.flags|=2),A}function k(A,C,M,oe){return C===null||C.tag!==6?(C=ju(M,A.mode,oe),C.return=A,C):(C=f(C,M),C.return=A,C)}function T(A,C,M,oe){var me=M.type;return me===ae?Q(A,C,M.props.children,oe,M.key):C!==null&&(C.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===V&&Jd(me)===C.type)?(oe=f(C,M.props),oe.ref=ci(A,C,M),oe.return=A,oe):(oe=ns(M.type,M.key,M.props,null,A.mode,oe),oe.ref=ci(A,C,M),oe.return=A,oe)}function I(A,C,M,oe){return C===null||C.tag!==4||C.stateNode.containerInfo!==M.containerInfo||C.stateNode.implementation!==M.implementation?(C=zu(M,A.mode,oe),C.return=A,C):(C=f(C,M.children||[]),C.return=A,C)}function Q(A,C,M,oe,me){return C===null||C.tag!==7?(C=_r(M,A.mode,oe,me),C.return=A,C):(C=f(C,M),C.return=A,C)}function te(A,C,M){if(typeof C=="string"&&C!==""||typeof C=="number")return C=ju(""+C,A.mode,M),C.return=A,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case F:return M=ns(C.type,C.key,C.props,null,A.mode,M),M.ref=ci(A,null,C),M.return=A,M;case ee:return C=zu(C,A.mode,M),C.return=A,C;case V:var oe=C._init;return te(A,oe(C._payload),M)}if(Hn(C)||H(C))return C=_r(C,A.mode,M,null),C.return=A,C;Da(A,C)}return null}function Y(A,C,M,oe){var me=C!==null?C.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return me!==null?null:k(A,C,""+M,oe);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case F:return M.key===me?T(A,C,M,oe):null;case ee:return M.key===me?I(A,C,M,oe):null;case V:return me=M._init,Y(A,C,me(M._payload),oe)}if(Hn(M)||H(M))return me!==null?null:Q(A,C,M,oe,null);Da(A,M)}return null}function le(A,C,M,oe,me){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return A=A.get(M)||null,k(C,A,""+oe,me);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case F:return A=A.get(oe.key===null?M:oe.key)||null,T(C,A,oe,me);case ee:return A=A.get(oe.key===null?M:oe.key)||null,I(C,A,oe,me);case V:var ye=oe._init;return le(A,C,M,ye(oe._payload),me)}if(Hn(oe)||H(oe))return A=A.get(M)||null,Q(C,A,oe,me,null);Da(C,oe)}return null}function de(A,C,M,oe){for(var me=null,ye=null,ve=C,Se=C=0,vt=null;ve!==null&&Se<M.length;Se++){ve.index>Se?(vt=ve,ve=null):vt=ve.sibling;var ze=Y(A,ve,M[Se],oe);if(ze===null){ve===null&&(ve=vt);break}t&&ve&&ze.alternate===null&&r(A,ve),C=m(ze,C,Se),ye===null?me=ze:ye.sibling=ze,ye=ze,ve=vt}if(Se===M.length)return a(A,ve),Ye&&Pr(A,Se),me;if(ve===null){for(;Se<M.length;Se++)ve=te(A,M[Se],oe),ve!==null&&(C=m(ve,C,Se),ye===null?me=ve:ye.sibling=ve,ye=ve);return Ye&&Pr(A,Se),me}for(ve=l(A,ve);Se<M.length;Se++)vt=le(ve,A,Se,M[Se],oe),vt!==null&&(t&&vt.alternate!==null&&ve.delete(vt.key===null?Se:vt.key),C=m(vt,C,Se),ye===null?me=vt:ye.sibling=vt,ye=vt);return t&&ve.forEach(function(fr){return r(A,fr)}),Ye&&Pr(A,Se),me}function he(A,C,M,oe){var me=H(M);if(typeof me!="function")throw Error(o(150));if(M=me.call(M),M==null)throw Error(o(151));for(var ye=me=null,ve=C,Se=C=0,vt=null,ze=M.next();ve!==null&&!ze.done;Se++,ze=M.next()){ve.index>Se?(vt=ve,ve=null):vt=ve.sibling;var fr=Y(A,ve,ze.value,oe);if(fr===null){ve===null&&(ve=vt);break}t&&ve&&fr.alternate===null&&r(A,ve),C=m(fr,C,Se),ye===null?me=fr:ye.sibling=fr,ye=fr,ve=vt}if(ze.done)return a(A,ve),Ye&&Pr(A,Se),me;if(ve===null){for(;!ze.done;Se++,ze=M.next())ze=te(A,ze.value,oe),ze!==null&&(C=m(ze,C,Se),ye===null?me=ze:ye.sibling=ze,ye=ze);return Ye&&Pr(A,Se),me}for(ve=l(A,ve);!ze.done;Se++,ze=M.next())ze=le(ve,A,Se,ze.value,oe),ze!==null&&(t&&ze.alternate!==null&&ve.delete(ze.key===null?Se:ze.key),C=m(ze,C,Se),ye===null?me=ze:ye.sibling=ze,ye=ze);return t&&ve.forEach(function(Xb){return r(A,Xb)}),Ye&&Pr(A,Se),me}function st(A,C,M,oe){if(typeof M=="object"&&M!==null&&M.type===ae&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case F:e:{for(var me=M.key,ye=C;ye!==null;){if(ye.key===me){if(me=M.type,me===ae){if(ye.tag===7){a(A,ye.sibling),C=f(ye,M.props.children),C.return=A,A=C;break e}}else if(ye.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===V&&Jd(me)===ye.type){a(A,ye.sibling),C=f(ye,M.props),C.ref=ci(A,ye,M),C.return=A,A=C;break e}a(A,ye);break}else r(A,ye);ye=ye.sibling}M.type===ae?(C=_r(M.props.children,A.mode,oe,M.key),C.return=A,A=C):(oe=ns(M.type,M.key,M.props,null,A.mode,oe),oe.ref=ci(A,C,M),oe.return=A,A=oe)}return b(A);case ee:e:{for(ye=M.key;C!==null;){if(C.key===ye)if(C.tag===4&&C.stateNode.containerInfo===M.containerInfo&&C.stateNode.implementation===M.implementation){a(A,C.sibling),C=f(C,M.children||[]),C.return=A,A=C;break e}else{a(A,C);break}else r(A,C);C=C.sibling}C=zu(M,A.mode,oe),C.return=A,A=C}return b(A);case V:return ye=M._init,st(A,C,ye(M._payload),oe)}if(Hn(M))return de(A,C,M,oe);if(H(M))return he(A,C,M,oe);Da(A,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,C!==null&&C.tag===6?(a(A,C.sibling),C=f(C,M),C.return=A,A=C):(a(A,C),C=ju(M,A.mode,oe),C.return=A,A=C),b(A)):a(A,C)}return st}var oo=Zd(!0),ep=Zd(!1),Ma=er(null),La=null,io=null,Wl=null;function Kl(){Wl=io=La=null}function Gl(t){var r=Ma.current;Ke(Ma),t._currentValue=r}function Xl(t,r,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===a)break;t=t.return}}function ao(t,r){La=t,Wl=io=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Lt=!0),t.firstContext=null)}function Xt(t){var r=t._currentValue;if(Wl!==t)if(t={context:t,memoizedValue:r,next:null},io===null){if(La===null)throw Error(o(308));io=t,La.dependencies={lanes:0,firstContext:t}}else io=io.next=t;return r}var kr=null;function Yl(t){kr===null?kr=[t]:kr.push(t)}function tp(t,r,a,l){var f=r.interleaved;return f===null?(a.next=a,Yl(r)):(a.next=f.next,f.next=a),r.interleaved=a,Mn(t,l)}function Mn(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var rr=!1;function Ql(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function np(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function or(t,r,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,Mn(t,a)}return f=l.interleaved,f===null?(r.next=r,Yl(l)):(r.next=f.next,f.next=r),l.interleaved=r,Mn(t,a)}function Na(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,fl(t,a)}}function rp(t,r){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?f=m=r:m=m.next=r}else f=m=r;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function ja(t,r,a,l){var f=t.updateQueue;rr=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var T=k,I=T.next;T.next=null,b===null?m=I:b.next=I,b=T;var Q=t.alternate;Q!==null&&(Q=Q.updateQueue,k=Q.lastBaseUpdate,k!==b&&(k===null?Q.firstBaseUpdate=I:k.next=I,Q.lastBaseUpdate=T))}if(m!==null){var te=f.baseState;b=0,Q=I=T=null,k=m;do{var Y=k.lane,le=k.eventTime;if((l&Y)===Y){Q!==null&&(Q=Q.next={eventTime:le,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var de=t,he=k;switch(Y=r,le=a,he.tag){case 1:if(de=he.payload,typeof de=="function"){te=de.call(le,te,Y);break e}te=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=he.payload,Y=typeof de=="function"?de.call(le,te,Y):de,Y==null)break e;te=W({},te,Y);break e;case 2:rr=!0}}k.callback!==null&&k.lane!==0&&(t.flags|=64,Y=f.effects,Y===null?f.effects=[k]:Y.push(k))}else le={eventTime:le,lane:Y,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Q===null?(I=Q=le,T=te):Q=Q.next=le,b|=Y;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;Y=k,k=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(Q===null&&(T=te),f.baseState=T,f.firstBaseUpdate=I,f.lastBaseUpdate=Q,r=f.shared.interleaved,r!==null){f=r;do b|=f.lane,f=f.next;while(f!==r)}else m===null&&(f.shared.lanes=0);Or|=b,t.lanes=b,t.memoizedState=te}}function op(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var l=t[r],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(o(191,f));f.call(l)}}}var fi={},bn=er(fi),di=er(fi),pi=er(fi);function Tr(t){if(t===fi)throw Error(o(174));return t}function Jl(t,r){switch(He(pi,r),He(di,t),He(bn,fi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ne(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ne(r,t)}Ke(bn),He(bn,r)}function so(){Ke(bn),Ke(di),Ke(pi)}function ip(t){Tr(pi.current);var r=Tr(bn.current),a=ne(r,t.type);r!==a&&(He(di,t),He(bn,a))}function Zl(t){di.current===t&&(Ke(bn),Ke(di))}var Je=er(0);function za(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var eu=[];function tu(){for(var t=0;t<eu.length;t++)eu[t]._workInProgressVersionPrimary=null;eu.length=0}var Ia=X.ReactCurrentDispatcher,nu=X.ReactCurrentBatchConfig,Er=0,Ze=null,pt=null,gt=null,Fa=!1,hi=!1,mi=0,yb=0;function Pt(){throw Error(o(321))}function ru(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!rn(t[a],r[a]))return!1;return!0}function ou(t,r,a,l,f,m){if(Er=m,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ia.current=t===null||t.memoizedState===null?xb:Sb,t=a(l,f),hi){m=0;do{if(hi=!1,mi=0,25<=m)throw Error(o(301));m+=1,gt=pt=null,r.updateQueue=null,Ia.current=Pb,t=a(l,f)}while(hi)}if(Ia.current=Ua,r=pt!==null&&pt.next!==null,Er=0,gt=pt=Ze=null,Fa=!1,r)throw Error(o(300));return t}function iu(){var t=mi!==0;return mi=0,t}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ze.memoizedState=gt=t:gt=gt.next=t,gt}function Yt(){if(pt===null){var t=Ze.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var r=gt===null?Ze.memoizedState:gt.next;if(r!==null)gt=r,pt=t;else{if(t===null)throw Error(o(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},gt===null?Ze.memoizedState=gt=t:gt=gt.next=t}return gt}function gi(t,r){return typeof r=="function"?r(t):r}function au(t){var r=Yt(),a=r.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=pt,f=l.baseQueue,m=a.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}l.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,l=l.baseState;var k=b=null,T=null,I=m;do{var Q=I.lane;if((Er&Q)===Q)T!==null&&(T=T.next={lane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),l=I.hasEagerState?I.eagerState:t(l,I.action);else{var te={lane:Q,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null};T===null?(k=T=te,b=l):T=T.next=te,Ze.lanes|=Q,Or|=Q}I=I.next}while(I!==null&&I!==m);T===null?b=l:T.next=k,rn(l,r.memoizedState)||(Lt=!0),r.memoizedState=l,r.baseState=b,r.baseQueue=T,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do m=f.lane,Ze.lanes|=m,Or|=m,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function su(t){var r=Yt(),a=r.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,m=r.memoizedState;if(f!==null){a.pending=null;var b=f=f.next;do m=t(m,b.action),b=b.next;while(b!==f);rn(m,r.memoizedState)||(Lt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,l]}function ap(){}function sp(t,r){var a=Ze,l=Yt(),f=r(),m=!rn(l.memoizedState,f);if(m&&(l.memoizedState=f,Lt=!0),l=l.queue,lu(cp.bind(null,a,l,t),[t]),l.getSnapshot!==r||m||gt!==null&&gt.memoizedState.tag&1){if(a.flags|=2048,yi(9,up.bind(null,a,l,f,r),void 0,null),yt===null)throw Error(o(349));(Er&30)!==0||lp(a,r,f)}return f}function lp(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function up(t,r,a,l){r.value=a,r.getSnapshot=l,fp(r)&&dp(t)}function cp(t,r,a){return a(function(){fp(r)&&dp(t)})}function fp(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!rn(t,a)}catch{return!0}}function dp(t){var r=Mn(t,1);r!==null&&un(r,t,1,-1)}function pp(t){var r=wn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gi,lastRenderedState:t},r.queue=t,t=t.dispatch=wb.bind(null,Ze,t),[r.memoizedState,t]}function yi(t,r,a,l){return t={tag:t,create:r,destroy:a,deps:l,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,r.lastEffect=t)),t}function hp(){return Yt().memoizedState}function Va(t,r,a,l){var f=wn();Ze.flags|=t,f.memoizedState=yi(1|r,a,void 0,l===void 0?null:l)}function Ba(t,r,a,l){var f=Yt();l=l===void 0?null:l;var m=void 0;if(pt!==null){var b=pt.memoizedState;if(m=b.destroy,l!==null&&ru(l,b.deps)){f.memoizedState=yi(r,a,m,l);return}}Ze.flags|=t,f.memoizedState=yi(1|r,a,m,l)}function mp(t,r){return Va(8390656,8,t,r)}function lu(t,r){return Ba(2048,8,t,r)}function gp(t,r){return Ba(4,2,t,r)}function yp(t,r){return Ba(4,4,t,r)}function vp(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function bp(t,r,a){return a=a!=null?a.concat([t]):null,Ba(4,4,vp.bind(null,r,t),a)}function uu(){}function wp(t,r){var a=Yt();r=r===void 0?null:r;var l=a.memoizedState;return l!==null&&r!==null&&ru(r,l[1])?l[0]:(a.memoizedState=[t,r],t)}function xp(t,r){var a=Yt();r=r===void 0?null:r;var l=a.memoizedState;return l!==null&&r!==null&&ru(r,l[1])?l[0]:(t=t(),a.memoizedState=[t,r],t)}function Sp(t,r,a){return(Er&21)===0?(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=a):(rn(a,r)||(a=Jf(),Ze.lanes|=a,Or|=a,t.baseState=!0),r)}function vb(t,r){var a=Ve;Ve=a!==0&&4>a?a:4,t(!0);var l=nu.transition;nu.transition={};try{t(!1),r()}finally{Ve=a,nu.transition=l}}function Pp(){return Yt().memoizedState}function bb(t,r,a){var l=lr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},kp(t))Tp(r,a);else if(a=tp(t,r,a,l),a!==null){var f=_t();un(a,t,l,f),Ep(a,r,l)}}function wb(t,r,a){var l=lr(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(kp(t))Tp(r,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var b=r.lastRenderedState,k=m(b,a);if(f.hasEagerState=!0,f.eagerState=k,rn(k,b)){var T=r.interleaved;T===null?(f.next=f,Yl(r)):(f.next=T.next,T.next=f),r.interleaved=f;return}}catch{}finally{}a=tp(t,r,f,l),a!==null&&(f=_t(),un(a,t,l,f),Ep(a,r,l))}}function kp(t){var r=t.alternate;return t===Ze||r!==null&&r===Ze}function Tp(t,r){hi=Fa=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Ep(t,r,a){if((a&4194240)!==0){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,fl(t,a)}}var Ua={readContext:Xt,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},xb={readContext:Xt,useCallback:function(t,r){return wn().memoizedState=[t,r===void 0?null:r],t},useContext:Xt,useEffect:mp,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Va(4194308,4,vp.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Va(4194308,4,t,r)},useInsertionEffect:function(t,r){return Va(4,2,t,r)},useMemo:function(t,r){var a=wn();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var l=wn();return r=a!==void 0?a(r):r,l.memoizedState=l.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},l.queue=t,t=t.dispatch=bb.bind(null,Ze,t),[l.memoizedState,t]},useRef:function(t){var r=wn();return t={current:t},r.memoizedState=t},useState:pp,useDebugValue:uu,useDeferredValue:function(t){return wn().memoizedState=t},useTransition:function(){var t=pp(!1),r=t[0];return t=vb.bind(null,t[1]),wn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var l=Ze,f=wn();if(Ye){if(a===void 0)throw Error(o(407));a=a()}else{if(a=r(),yt===null)throw Error(o(349));(Er&30)!==0||lp(l,r,a)}f.memoizedState=a;var m={value:a,getSnapshot:r};return f.queue=m,mp(cp.bind(null,l,m,t),[t]),l.flags|=2048,yi(9,up.bind(null,l,m,a,r),void 0,null),a},useId:function(){var t=wn(),r=yt.identifierPrefix;if(Ye){var a=Dn,l=_n;a=(l&~(1<<32-nn(l)-1)).toString(32)+a,r=":"+r+"R"+a,a=mi++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=yb++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Sb={readContext:Xt,useCallback:wp,useContext:Xt,useEffect:lu,useImperativeHandle:bp,useInsertionEffect:gp,useLayoutEffect:yp,useMemo:xp,useReducer:au,useRef:hp,useState:function(){return au(gi)},useDebugValue:uu,useDeferredValue:function(t){var r=Yt();return Sp(r,pt.memoizedState,t)},useTransition:function(){var t=au(gi)[0],r=Yt().memoizedState;return[t,r]},useMutableSource:ap,useSyncExternalStore:sp,useId:Pp,unstable_isNewReconciler:!1},Pb={readContext:Xt,useCallback:wp,useContext:Xt,useEffect:lu,useImperativeHandle:bp,useInsertionEffect:gp,useLayoutEffect:yp,useMemo:xp,useReducer:su,useRef:hp,useState:function(){return su(gi)},useDebugValue:uu,useDeferredValue:function(t){var r=Yt();return pt===null?r.memoizedState=t:Sp(r,pt.memoizedState,t)},useTransition:function(){var t=su(gi)[0],r=Yt().memoizedState;return[t,r]},useMutableSource:ap,useSyncExternalStore:sp,useId:Pp,unstable_isNewReconciler:!1};function an(t,r){if(t&&t.defaultProps){r=W({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function cu(t,r,a,l){r=t.memoizedState,a=a(l,r),a=a==null?r:W({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var $a={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var l=_t(),f=lr(t),m=Ln(l,f);m.payload=r,a!=null&&(m.callback=a),r=or(t,m,f),r!==null&&(un(r,t,f,l),Na(r,t,f))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var l=_t(),f=lr(t),m=Ln(l,f);m.tag=1,m.payload=r,a!=null&&(m.callback=a),r=or(t,m,f),r!==null&&(un(r,t,f,l),Na(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=_t(),l=lr(t),f=Ln(a,l);f.tag=2,r!=null&&(f.callback=r),r=or(t,f,l),r!==null&&(un(r,t,l,a),Na(r,t,l))}};function Op(t,r,a,l,f,m,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,b):r.prototype&&r.prototype.isPureReactComponent?!ri(a,l)||!ri(f,m):!0}function Cp(t,r,a){var l=!1,f=tr,m=r.contextType;return typeof m=="object"&&m!==null?m=Xt(m):(f=Mt(r)?xr:St.current,l=r.contextTypes,m=(l=l!=null)?eo(t,f):tr),r=new r(a,m),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=$a,t.stateNode=r,r._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=m),r}function Rp(t,r,a,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==t&&$a.enqueueReplaceState(r,r.state,null)}function fu(t,r,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Ql(t);var m=r.contextType;typeof m=="object"&&m!==null?f.context=Xt(m):(m=Mt(r)?xr:St.current,f.context=eo(t,m)),f.state=t.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(cu(t,r,m,a),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&$a.enqueueReplaceState(f,f.state,null),ja(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function lo(t,r){try{var a="",l=r;do a+=xe(l),l=l.return;while(l);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:r,stack:f,digest:null}}function du(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function pu(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var kb=typeof WeakMap=="function"?WeakMap:Map;function Ap(t,r,a){a=Ln(-1,a),a.tag=3,a.payload={element:null};var l=r.value;return a.callback=function(){Ya||(Ya=!0,Cu=l),pu(t,r)},a}function _p(t,r,a){a=Ln(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=r.value;a.payload=function(){return l(f)},a.callback=function(){pu(t,r)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){pu(t,r),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),a}function Dp(t,r,a){var l=t.pingCache;if(l===null){l=t.pingCache=new kb;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(a)||(f.add(a),t=Ib.bind(null,t,r,a),r.then(t,t))}function Mp(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Lp(t,r,a,l,f){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ln(-1,1),r.tag=2,or(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Tb=X.ReactCurrentOwner,Lt=!1;function At(t,r,a,l){r.child=t===null?ep(r,null,a,l):oo(r,t.child,a,l)}function Np(t,r,a,l,f){a=a.render;var m=r.ref;return ao(r,f),l=ou(t,r,a,l,m,f),a=iu(),t!==null&&!Lt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Nn(t,r,f)):(Ye&&a&&Bl(r),r.flags|=1,At(t,r,l,f),r.child)}function jp(t,r,a,l,f){if(t===null){var m=a.type;return typeof m=="function"&&!Nu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=m,zp(t,r,m,l,f)):(t=ns(a.type,null,l,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(m=t.child,(t.lanes&f)===0){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:ri,a(b,l)&&t.ref===r.ref)return Nn(t,r,f)}return r.flags|=1,t=cr(m,l),t.ref=r.ref,t.return=r,r.child=t}function zp(t,r,a,l,f){if(t!==null){var m=t.memoizedProps;if(ri(m,l)&&t.ref===r.ref)if(Lt=!1,r.pendingProps=l=m,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Lt=!0);else return r.lanes=t.lanes,Nn(t,r,f)}return hu(t,r,a,l,f)}function Ip(t,r,a){var l=r.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(co,Ut),Ut|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,He(co,Ut),Ut|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:a,He(co,Ut),Ut|=l}else m!==null?(l=m.baseLanes|a,r.memoizedState=null):l=a,He(co,Ut),Ut|=l;return At(t,r,f,a),r.child}function Fp(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function hu(t,r,a,l,f){var m=Mt(a)?xr:St.current;return m=eo(r,m),ao(r,f),a=ou(t,r,a,l,m,f),l=iu(),t!==null&&!Lt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Nn(t,r,f)):(Ye&&l&&Bl(r),r.flags|=1,At(t,r,a,f),r.child)}function Vp(t,r,a,l,f){if(Mt(a)){var m=!0;Oa(r)}else m=!1;if(ao(r,f),r.stateNode===null)Ha(t,r),Cp(r,a,l),fu(r,a,l,f),l=!0;else if(t===null){var b=r.stateNode,k=r.memoizedProps;b.props=k;var T=b.context,I=a.contextType;typeof I=="object"&&I!==null?I=Xt(I):(I=Mt(a)?xr:St.current,I=eo(r,I));var Q=a.getDerivedStateFromProps,te=typeof Q=="function"||typeof b.getSnapshotBeforeUpdate=="function";te||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==l||T!==I)&&Rp(r,b,l,I),rr=!1;var Y=r.memoizedState;b.state=Y,ja(r,l,b,f),T=r.memoizedState,k!==l||Y!==T||Dt.current||rr?(typeof Q=="function"&&(cu(r,a,Q,l),T=r.memoizedState),(k=rr||Op(r,a,k,l,Y,T,I))?(te||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=T),b.props=l,b.state=T,b.context=I,l=k):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{b=r.stateNode,np(t,r),k=r.memoizedProps,I=r.type===r.elementType?k:an(r.type,k),b.props=I,te=r.pendingProps,Y=b.context,T=a.contextType,typeof T=="object"&&T!==null?T=Xt(T):(T=Mt(a)?xr:St.current,T=eo(r,T));var le=a.getDerivedStateFromProps;(Q=typeof le=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==te||Y!==T)&&Rp(r,b,l,T),rr=!1,Y=r.memoizedState,b.state=Y,ja(r,l,b,f);var de=r.memoizedState;k!==te||Y!==de||Dt.current||rr?(typeof le=="function"&&(cu(r,a,le,l),de=r.memoizedState),(I=rr||Op(r,a,I,l,Y,de,T)||!1)?(Q||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(l,de,T),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(l,de,T)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||k===t.memoizedProps&&Y===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&Y===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=de),b.props=l,b.state=de,b.context=T,l=I):(typeof b.componentDidUpdate!="function"||k===t.memoizedProps&&Y===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&Y===t.memoizedState||(r.flags|=1024),l=!1)}return mu(t,r,a,l,m,f)}function mu(t,r,a,l,f,m){Fp(t,r);var b=(r.flags&128)!==0;if(!l&&!b)return f&&Hd(r,a,!1),Nn(t,r,m);l=r.stateNode,Tb.current=r;var k=b&&typeof a.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,t!==null&&b?(r.child=oo(r,t.child,null,m),r.child=oo(r,null,k,m)):At(t,r,k,m),r.memoizedState=l.state,f&&Hd(r,a,!0),r.child}function Bp(t){var r=t.stateNode;r.pendingContext?$d(t,r.pendingContext,r.pendingContext!==r.context):r.context&&$d(t,r.context,!1),Jl(t,r.containerInfo)}function Up(t,r,a,l,f){return ro(),Hl(f),r.flags|=256,At(t,r,a,l),r.child}var gu={dehydrated:null,treeContext:null,retryLane:0};function yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function $p(t,r,a){var l=r.pendingProps,f=Je.current,m=!1,b=(r.flags&128)!==0,k;if((k=b)||(k=t!==null&&t.memoizedState===null?!1:(f&2)!==0),k?(m=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),He(Je,f&1),t===null)return ql(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=l.children,t=l.fallback,m?(l=r.mode,m=r.child,b={mode:"hidden",children:b},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=rs(b,l,0,null),t=_r(t,l,a,null),m.return=r,t.return=r,m.sibling=t,r.child=m,r.child.memoizedState=yu(a),r.memoizedState=gu,t):vu(r,b));if(f=t.memoizedState,f!==null&&(k=f.dehydrated,k!==null))return Eb(t,r,b,l,k,f,a);if(m){m=l.fallback,b=r.mode,f=t.child,k=f.sibling;var T={mode:"hidden",children:l.children};return(b&1)===0&&r.child!==f?(l=r.child,l.childLanes=0,l.pendingProps=T,r.deletions=null):(l=cr(f,T),l.subtreeFlags=f.subtreeFlags&14680064),k!==null?m=cr(k,m):(m=_r(m,b,a,null),m.flags|=2),m.return=r,l.return=r,l.sibling=m,r.child=l,l=m,m=r.child,b=t.child.memoizedState,b=b===null?yu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=t.childLanes&~a,r.memoizedState=gu,l}return m=t.child,t=m.sibling,l=cr(m,{mode:"visible",children:l.children}),(r.mode&1)===0&&(l.lanes=a),l.return=r,l.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=l,r.memoizedState=null,l}function vu(t,r){return r=rs({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function qa(t,r,a,l){return l!==null&&Hl(l),oo(r,t.child,null,a),t=vu(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Eb(t,r,a,l,f,m,b){if(a)return r.flags&256?(r.flags&=-257,l=du(Error(o(422))),qa(t,r,b,l)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(m=l.fallback,f=r.mode,l=rs({mode:"visible",children:l.children},f,0,null),m=_r(m,f,b,null),m.flags|=2,l.return=r,m.return=r,l.sibling=m,r.child=l,(r.mode&1)!==0&&oo(r,t.child,null,b),r.child.memoizedState=yu(b),r.memoizedState=gu,m);if((r.mode&1)===0)return qa(t,r,b,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var k=l.dgst;return l=k,m=Error(o(419)),l=du(m,l,void 0),qa(t,r,b,l)}if(k=(b&t.childLanes)!==0,Lt||k){if(l=yt,l!==null){switch(b&-b){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|b))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Mn(t,f),un(l,t,f,-1))}return Lu(),l=du(Error(o(421))),qa(t,r,b,l)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=Fb.bind(null,t),f._reactRetry=r,null):(t=m.treeContext,Bt=Zn(f.nextSibling),Vt=r,Ye=!0,on=null,t!==null&&(Kt[Gt++]=_n,Kt[Gt++]=Dn,Kt[Gt++]=Sr,_n=t.id,Dn=t.overflow,Sr=r),r=vu(r,l.children),r.flags|=4096,r)}function qp(t,r,a){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),Xl(t.return,r,a)}function bu(t,r,a,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=f)}function Hp(t,r,a){var l=r.pendingProps,f=l.revealOrder,m=l.tail;if(At(t,r,l.children,a),l=Je.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qp(t,a,r);else if(t.tag===19)qp(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(He(Je,l),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(a=r.child,f=null;a!==null;)t=a.alternate,t!==null&&za(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),bu(r,!1,f,a,m);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&za(t)===null){r.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}bu(r,!0,a,null,m);break;case"together":bu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ha(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Nn(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),Or|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(o(153));if(r.child!==null){for(t=r.child,a=cr(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=cr(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Ob(t,r,a){switch(r.tag){case 3:Bp(r),ro();break;case 5:ip(r);break;case 1:Mt(r.type)&&Oa(r);break;case 4:Jl(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,f=r.memoizedProps.value;He(Ma,l._currentValue),l._currentValue=f;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(He(Je,Je.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?$p(t,r,a):(He(Je,Je.current&1),t=Nn(t,r,a),t!==null?t.sibling:null);He(Je,Je.current&1);break;case 19:if(l=(a&r.childLanes)!==0,(t.flags&128)!==0){if(l)return Hp(t,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),He(Je,Je.current),l)break;return null;case 22:case 23:return r.lanes=0,Ip(t,r,a)}return Nn(t,r,a)}var Wp,wu,Kp,Gp;Wp=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},wu=function(){},Kp=function(t,r,a,l){var f=t.memoizedProps;if(f!==l){t=r.stateNode,Tr(bn.current);var m=null;switch(a){case"input":f=jo(t,f),l=jo(t,l),m=[];break;case"select":f=W({},f,{value:void 0}),l=W({},l,{value:void 0}),m=[];break;case"textarea":f=Wn(t,f),l=Wn(t,l),m=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ka)}ue(a,l);var b;a=null;for(I in f)if(!l.hasOwnProperty(I)&&f.hasOwnProperty(I)&&f[I]!=null)if(I==="style"){var k=f[I];for(b in k)k.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(s.hasOwnProperty(I)?m||(m=[]):(m=m||[]).push(I,null));for(I in l){var T=l[I];if(k=f!=null?f[I]:void 0,l.hasOwnProperty(I)&&T!==k&&(T!=null||k!=null))if(I==="style")if(k){for(b in k)!k.hasOwnProperty(b)||T&&T.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in T)T.hasOwnProperty(b)&&k[b]!==T[b]&&(a||(a={}),a[b]=T[b])}else a||(m||(m=[]),m.push(I,a)),a=T;else I==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,k=k?k.__html:void 0,T!=null&&k!==T&&(m=m||[]).push(I,T)):I==="children"?typeof T!="string"&&typeof T!="number"||(m=m||[]).push(I,""+T):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(s.hasOwnProperty(I)?(T!=null&&I==="onScroll"&&We("scroll",t),m||k===T||(m=[])):(m=m||[]).push(I,T))}a&&(m=m||[]).push("style",a);var I=m;(r.updateQueue=I)&&(r.flags|=4)}},Gp=function(t,r,a,l){a!==l&&(r.flags|=4)};function vi(t,r){if(!Ye)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function kt(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(r)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,r}function Cb(t,r,a){var l=r.pendingProps;switch(Ul(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(r),null;case 1:return Mt(r.type)&&Ea(),kt(r),null;case 3:return l=r.stateNode,so(),Ke(Dt),Ke(St),tu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(_a(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,on!==null&&(_u(on),on=null))),wu(t,r),kt(r),null;case 5:Zl(r);var f=Tr(pi.current);if(a=r.type,t!==null&&r.stateNode!=null)Kp(t,r,a,l,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(o(166));return kt(r),null}if(t=Tr(bn.current),_a(r)){l=r.stateNode,a=r.type;var m=r.memoizedProps;switch(l[vn]=r,l[li]=m,t=(r.mode&1)!==0,a){case"dialog":We("cancel",l),We("close",l);break;case"iframe":case"object":case"embed":We("load",l);break;case"video":case"audio":for(f=0;f<ii.length;f++)We(ii[f],l);break;case"source":We("error",l);break;case"img":case"image":case"link":We("error",l),We("load",l);break;case"details":We("toggle",l);break;case"input":zo(l,m),We("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},We("invalid",l);break;case"textarea":$r(l,m),We("invalid",l)}ue(a,m),f=null;for(var b in m)if(m.hasOwnProperty(b)){var k=m[b];b==="children"?typeof k=="string"?l.textContent!==k&&(m.suppressHydrationWarning!==!0&&Pa(l.textContent,k,t),f=["children",k]):typeof k=="number"&&l.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&Pa(l.textContent,k,t),f=["children",""+k]):s.hasOwnProperty(b)&&k!=null&&b==="onScroll"&&We("scroll",l)}switch(a){case"input":rt(l),yr(l,m,!0);break;case"textarea":rt(l),Z(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=ka)}l=f,r.updateQueue=l,l!==null&&(r.flags|=4)}else{b=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=N(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=b.createElement(a,{is:l.is}):(t=b.createElement(a),a==="select"&&(b=t,l.multiple?b.multiple=!0:l.size&&(b.size=l.size))):t=b.createElementNS(t,a),t[vn]=r,t[li]=l,Wp(t,r,!1,!1),r.stateNode=t;e:{switch(b=Ce(a,l),a){case"dialog":We("cancel",t),We("close",t),f=l;break;case"iframe":case"object":case"embed":We("load",t),f=l;break;case"video":case"audio":for(f=0;f<ii.length;f++)We(ii[f],t);f=l;break;case"source":We("error",t),f=l;break;case"img":case"image":case"link":We("error",t),We("load",t),f=l;break;case"details":We("toggle",t),f=l;break;case"input":zo(t,l),f=jo(t,l),We("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=W({},l,{value:void 0}),We("invalid",t);break;case"textarea":$r(t,l),f=Wn(t,l),We("invalid",t);break;default:f=l}ue(a,f),k=f;for(m in k)if(k.hasOwnProperty(m)){var T=k[m];m==="style"?pe(t,T):m==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&Te(t,T)):m==="children"?typeof T=="string"?(a!=="textarea"||T!=="")&&ke(t,T):typeof T=="number"&&ke(t,""+T):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(s.hasOwnProperty(m)?T!=null&&m==="onScroll"&&We("scroll",t):T!=null&&_(t,m,T,b))}switch(a){case"input":rt(t),yr(t,l,!1);break;case"textarea":rt(t),Z(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Oe(l.value));break;case"select":t.multiple=!!l.multiple,m=l.value,m!=null?mn(t,!!l.multiple,m,!1):l.defaultValue!=null&&mn(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=ka)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return kt(r),null;case 6:if(t&&r.stateNode!=null)Gp(t,r,t.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(o(166));if(a=Tr(pi.current),Tr(bn.current),_a(r)){if(l=r.stateNode,a=r.memoizedProps,l[vn]=r,(m=l.nodeValue!==a)&&(t=Vt,t!==null))switch(t.tag){case 3:Pa(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(l.nodeValue,a,(t.mode&1)!==0)}m&&(r.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[vn]=r,r.stateNode=l}return kt(r),null;case 13:if(Ke(Je),l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ye&&Bt!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Qd(),ro(),r.flags|=98560,m=!1;else if(m=_a(r),l!==null&&l.dehydrated!==null){if(t===null){if(!m)throw Error(o(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(o(317));m[vn]=r}else ro(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;kt(r),m=!1}else on!==null&&(_u(on),on=null),m=!0;if(!m)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Je.current&1)!==0?ht===0&&(ht=3):Lu())),r.updateQueue!==null&&(r.flags|=4),kt(r),null);case 4:return so(),wu(t,r),t===null&&ai(r.stateNode.containerInfo),kt(r),null;case 10:return Gl(r.type._context),kt(r),null;case 17:return Mt(r.type)&&Ea(),kt(r),null;case 19:if(Ke(Je),m=r.memoizedState,m===null)return kt(r),null;if(l=(r.flags&128)!==0,b=m.rendering,b===null)if(l)vi(m,!1);else{if(ht!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(b=za(t),b!==null){for(r.flags|=128,vi(m,!1),l=b.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=a,a=r.child;a!==null;)m=a,t=l,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,t=b.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),r.child}t=t.sibling}m.tail!==null&&at()>fo&&(r.flags|=128,l=!0,vi(m,!1),r.lanes=4194304)}else{if(!l)if(t=za(b),t!==null){if(r.flags|=128,l=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),vi(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!Ye)return kt(r),null}else 2*at()-m.renderingStartTime>fo&&a!==1073741824&&(r.flags|=128,l=!0,vi(m,!1),r.lanes=4194304);m.isBackwards?(b.sibling=r.child,r.child=b):(a=m.last,a!==null?a.sibling=b:r.child=b,m.last=b)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=at(),r.sibling=null,a=Je.current,He(Je,l?a&1|2:a&1),r):(kt(r),null);case 22:case 23:return Mu(),l=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(r.flags|=8192),l&&(r.mode&1)!==0?(Ut&1073741824)!==0&&(kt(r),r.subtreeFlags&6&&(r.flags|=8192)):kt(r),null;case 24:return null;case 25:return null}throw Error(o(156,r.tag))}function Rb(t,r){switch(Ul(r),r.tag){case 1:return Mt(r.type)&&Ea(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return so(),Ke(Dt),Ke(St),tu(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Zl(r),null;case 13:if(Ke(Je),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(o(340));ro()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Ke(Je),null;case 4:return so(),null;case 10:return Gl(r.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var Wa=!1,Tt=!1,Ab=typeof WeakSet=="function"?WeakSet:Set,ce=null;function uo(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){ot(t,r,l)}else a.current=null}function xu(t,r,a){try{a()}catch(l){ot(t,r,l)}}var Xp=!1;function _b(t,r){if(Ml=da,t=Od(),Tl(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,k=-1,T=-1,I=0,Q=0,te=t,Y=null;t:for(;;){for(var le;te!==a||f!==0&&te.nodeType!==3||(k=b+f),te!==m||l!==0&&te.nodeType!==3||(T=b+l),te.nodeType===3&&(b+=te.nodeValue.length),(le=te.firstChild)!==null;)Y=te,te=le;for(;;){if(te===t)break t;if(Y===a&&++I===f&&(k=b),Y===m&&++Q===l&&(T=b),(le=te.nextSibling)!==null)break;te=Y,Y=te.parentNode}te=le}a=k===-1||T===-1?null:{start:k,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ll={focusedElem:t,selectionRange:a},da=!1,ce=r;ce!==null;)if(r=ce,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ce=t;else for(;ce!==null;){r=ce;try{var de=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var he=de.memoizedProps,st=de.memoizedState,A=r.stateNode,C=A.getSnapshotBeforeUpdate(r.elementType===r.type?he:an(r.type,he),st);A.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(oe){ot(r,r.return,oe)}if(t=r.sibling,t!==null){t.return=r.return,ce=t;break}ce=r.return}return de=Xp,Xp=!1,de}function bi(t,r,a){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var m=f.destroy;f.destroy=void 0,m!==void 0&&xu(r,a,m)}f=f.next}while(f!==l)}}function Ka(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==r)}}function Su(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function Yp(t){var r=t.alternate;r!==null&&(t.alternate=null,Yp(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[vn],delete r[li],delete r[Il],delete r[pb],delete r[hb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qp(t){return t.tag===5||t.tag===3||t.tag===4}function Jp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pu(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=ka));else if(l!==4&&(t=t.child,t!==null))for(Pu(t,r,a),t=t.sibling;t!==null;)Pu(t,r,a),t=t.sibling}function ku(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ku(t,r,a),t=t.sibling;t!==null;)ku(t,r,a),t=t.sibling}var bt=null,sn=!1;function ir(t,r,a){for(a=a.child;a!==null;)Zp(t,r,a),a=a.sibling}function Zp(t,r,a){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(aa,a)}catch{}switch(a.tag){case 5:Tt||uo(a,r);case 6:var l=bt,f=sn;bt=null,ir(t,r,a),bt=l,sn=f,bt!==null&&(sn?(t=bt,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):bt.removeChild(a.stateNode));break;case 18:bt!==null&&(sn?(t=bt,a=a.stateNode,t.nodeType===8?zl(t.parentNode,a):t.nodeType===1&&zl(t,a),Qo(t)):zl(bt,a.stateNode));break;case 4:l=bt,f=sn,bt=a.stateNode.containerInfo,sn=!0,ir(t,r,a),bt=l,sn=f;break;case 0:case 11:case 14:case 15:if(!Tt&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var m=f,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&xu(a,r,b),f=f.next}while(f!==l)}ir(t,r,a);break;case 1:if(!Tt&&(uo(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(k){ot(a,r,k)}ir(t,r,a);break;case 21:ir(t,r,a);break;case 22:a.mode&1?(Tt=(l=Tt)||a.memoizedState!==null,ir(t,r,a),Tt=l):ir(t,r,a);break;default:ir(t,r,a)}}function eh(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Ab),r.forEach(function(l){var f=Vb.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function ln(t,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var m=t,b=r,k=b;e:for(;k!==null;){switch(k.tag){case 5:bt=k.stateNode,sn=!1;break e;case 3:bt=k.stateNode.containerInfo,sn=!0;break e;case 4:bt=k.stateNode.containerInfo,sn=!0;break e}k=k.return}if(bt===null)throw Error(o(160));Zp(m,b,f),bt=null,sn=!1;var T=f.alternate;T!==null&&(T.return=null),f.return=null}catch(I){ot(f,r,I)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)th(r,t),r=r.sibling}function th(t,r){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(r,t),xn(t),l&4){try{bi(3,t,t.return),Ka(3,t)}catch(he){ot(t,t.return,he)}try{bi(5,t,t.return)}catch(he){ot(t,t.return,he)}}break;case 1:ln(r,t),xn(t),l&512&&a!==null&&uo(a,a.return);break;case 5:if(ln(r,t),xn(t),l&512&&a!==null&&uo(a,a.return),t.flags&32){var f=t.stateNode;try{ke(f,"")}catch(he){ot(t,t.return,he)}}if(l&4&&(f=t.stateNode,f!=null)){var m=t.memoizedProps,b=a!==null?a.memoizedProps:m,k=t.type,T=t.updateQueue;if(t.updateQueue=null,T!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&Io(f,m),Ce(k,b);var I=Ce(k,m);for(b=0;b<T.length;b+=2){var Q=T[b],te=T[b+1];Q==="style"?pe(f,te):Q==="dangerouslySetInnerHTML"?Te(f,te):Q==="children"?ke(f,te):_(f,Q,te,I)}switch(k){case"input":Fo(f,m);break;case"textarea":na(f,m);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var le=m.value;le!=null?mn(f,!!m.multiple,le,!1):Y!==!!m.multiple&&(m.defaultValue!=null?mn(f,!!m.multiple,m.defaultValue,!0):mn(f,!!m.multiple,m.multiple?[]:"",!1))}f[li]=m}catch(he){ot(t,t.return,he)}}break;case 6:if(ln(r,t),xn(t),l&4){if(t.stateNode===null)throw Error(o(162));f=t.stateNode,m=t.memoizedProps;try{f.nodeValue=m}catch(he){ot(t,t.return,he)}}break;case 3:if(ln(r,t),xn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Qo(r.containerInfo)}catch(he){ot(t,t.return,he)}break;case 4:ln(r,t),xn(t);break;case 13:ln(r,t),xn(t),f=t.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Ou=at())),l&4&&eh(t);break;case 22:if(Q=a!==null&&a.memoizedState!==null,t.mode&1?(Tt=(I=Tt)||Q,ln(r,t),Tt=I):ln(r,t),xn(t),l&8192){if(I=t.memoizedState!==null,(t.stateNode.isHidden=I)&&!Q&&(t.mode&1)!==0)for(ce=t,Q=t.child;Q!==null;){for(te=ce=Q;ce!==null;){switch(Y=ce,le=Y.child,Y.tag){case 0:case 11:case 14:case 15:bi(4,Y,Y.return);break;case 1:uo(Y,Y.return);var de=Y.stateNode;if(typeof de.componentWillUnmount=="function"){l=Y,a=Y.return;try{r=l,de.props=r.memoizedProps,de.state=r.memoizedState,de.componentWillUnmount()}catch(he){ot(l,a,he)}}break;case 5:uo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){oh(te);continue}}le!==null?(le.return=Y,ce=le):oh(te)}Q=Q.sibling}e:for(Q=null,te=t;;){if(te.tag===5){if(Q===null){Q=te;try{f=te.stateNode,I?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=te.stateNode,T=te.memoizedProps.style,b=T!=null&&T.hasOwnProperty("display")?T.display:null,k.style.display=G("display",b))}catch(he){ot(t,t.return,he)}}}else if(te.tag===6){if(Q===null)try{te.stateNode.nodeValue=I?"":te.memoizedProps}catch(he){ot(t,t.return,he)}}else if((te.tag!==22&&te.tag!==23||te.memoizedState===null||te===t)&&te.child!==null){te.child.return=te,te=te.child;continue}if(te===t)break e;for(;te.sibling===null;){if(te.return===null||te.return===t)break e;Q===te&&(Q=null),te=te.return}Q===te&&(Q=null),te.sibling.return=te.return,te=te.sibling}}break;case 19:ln(r,t),xn(t),l&4&&eh(t);break;case 21:break;default:ln(r,t),xn(t)}}function xn(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(Qp(a)){var l=a;break e}a=a.return}throw Error(o(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ke(f,""),l.flags&=-33);var m=Jp(t);ku(t,m,f);break;case 3:case 4:var b=l.stateNode.containerInfo,k=Jp(t);Pu(t,k,b);break;default:throw Error(o(161))}}catch(T){ot(t,t.return,T)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Db(t,r,a){ce=t,nh(t)}function nh(t,r,a){for(var l=(t.mode&1)!==0;ce!==null;){var f=ce,m=f.child;if(f.tag===22&&l){var b=f.memoizedState!==null||Wa;if(!b){var k=f.alternate,T=k!==null&&k.memoizedState!==null||Tt;k=Wa;var I=Tt;if(Wa=b,(Tt=T)&&!I)for(ce=f;ce!==null;)b=ce,T=b.child,b.tag===22&&b.memoizedState!==null?ih(f):T!==null?(T.return=b,ce=T):ih(f);for(;m!==null;)ce=m,nh(m),m=m.sibling;ce=f,Wa=k,Tt=I}rh(t)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,ce=m):rh(t)}}function rh(t){for(;ce!==null;){var r=ce;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Tt||Ka(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!Tt)if(a===null)l.componentDidMount();else{var f=r.elementType===r.type?a.memoizedProps:an(r.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&op(r,m,l);break;case 3:var b=r.updateQueue;if(b!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}op(r,b,a)}break;case 5:var k=r.stateNode;if(a===null&&r.flags&4){a=k;var T=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&a.focus();break;case"img":T.src&&(a.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var I=r.alternate;if(I!==null){var Q=I.memoizedState;if(Q!==null){var te=Q.dehydrated;te!==null&&Qo(te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Tt||r.flags&512&&Su(r)}catch(Y){ot(r,r.return,Y)}}if(r===t){ce=null;break}if(a=r.sibling,a!==null){a.return=r.return,ce=a;break}ce=r.return}}function oh(t){for(;ce!==null;){var r=ce;if(r===t){ce=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ce=a;break}ce=r.return}}function ih(t){for(;ce!==null;){var r=ce;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Ka(4,r)}catch(T){ot(r,a,T)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var f=r.return;try{l.componentDidMount()}catch(T){ot(r,f,T)}}var m=r.return;try{Su(r)}catch(T){ot(r,m,T)}break;case 5:var b=r.return;try{Su(r)}catch(T){ot(r,b,T)}}}catch(T){ot(r,r.return,T)}if(r===t){ce=null;break}var k=r.sibling;if(k!==null){k.return=r.return,ce=k;break}ce=r.return}}var Mb=Math.ceil,Ga=X.ReactCurrentDispatcher,Tu=X.ReactCurrentOwner,Qt=X.ReactCurrentBatchConfig,Ne=0,yt=null,ut=null,wt=0,Ut=0,co=er(0),ht=0,wi=null,Or=0,Xa=0,Eu=0,xi=null,Nt=null,Ou=0,fo=1/0,jn=null,Ya=!1,Cu=null,ar=null,Qa=!1,sr=null,Ja=0,Si=0,Ru=null,Za=-1,es=0;function _t(){return(Ne&6)!==0?at():Za!==-1?Za:Za=at()}function lr(t){return(t.mode&1)===0?1:(Ne&2)!==0&&wt!==0?wt&-wt:gb.transition!==null?(es===0&&(es=Jf()),es):(t=Ve,t!==0||(t=window.event,t=t===void 0?16:sd(t.type)),t)}function un(t,r,a,l){if(50<Si)throw Si=0,Ru=null,Error(o(185));Wo(t,a,l),((Ne&2)===0||t!==yt)&&(t===yt&&((Ne&2)===0&&(Xa|=a),ht===4&&ur(t,wt)),jt(t,l),a===1&&Ne===0&&(r.mode&1)===0&&(fo=at()+500,Ca&&nr()))}function jt(t,r){var a=t.callbackNode;g0(t,r);var l=ua(t,t===yt?wt:0);if(l===0)a!==null&&Xf(a),t.callbackNode=null,t.callbackPriority=0;else if(r=l&-l,t.callbackPriority!==r){if(a!=null&&Xf(a),r===1)t.tag===0?mb(sh.bind(null,t)):Wd(sh.bind(null,t)),fb(function(){(Ne&6)===0&&nr()}),a=null;else{switch(Zf(l)){case 1:a=ll;break;case 4:a=Yf;break;case 16:a=ia;break;case 536870912:a=Qf;break;default:a=ia}a=mh(a,ah.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function ah(t,r){if(Za=-1,es=0,(Ne&6)!==0)throw Error(o(327));var a=t.callbackNode;if(po()&&t.callbackNode!==a)return null;var l=ua(t,t===yt?wt:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||r)r=ts(t,l);else{r=l;var f=Ne;Ne|=2;var m=uh();(yt!==t||wt!==r)&&(jn=null,fo=at()+500,Rr(t,r));do try{jb();break}catch(k){lh(t,k)}while(!0);Kl(),Ga.current=m,Ne=f,ut!==null?r=0:(yt=null,wt=0,r=ht)}if(r!==0){if(r===2&&(f=ul(t),f!==0&&(l=f,r=Au(t,f))),r===1)throw a=wi,Rr(t,0),ur(t,l),jt(t,at()),a;if(r===6)ur(t,l);else{if(f=t.current.alternate,(l&30)===0&&!Lb(f)&&(r=ts(t,l),r===2&&(m=ul(t),m!==0&&(l=m,r=Au(t,m))),r===1))throw a=wi,Rr(t,0),ur(t,l),jt(t,at()),a;switch(t.finishedWork=f,t.finishedLanes=l,r){case 0:case 1:throw Error(o(345));case 2:Ar(t,Nt,jn);break;case 3:if(ur(t,l),(l&130023424)===l&&(r=Ou+500-at(),10<r)){if(ua(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){_t(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=jl(Ar.bind(null,t,Nt,jn),r);break}Ar(t,Nt,jn);break;case 4:if(ur(t,l),(l&4194240)===l)break;for(r=t.eventTimes,f=-1;0<l;){var b=31-nn(l);m=1<<b,b=r[b],b>f&&(f=b),l&=~m}if(l=f,l=at()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Mb(l/1960))-l,10<l){t.timeoutHandle=jl(Ar.bind(null,t,Nt,jn),l);break}Ar(t,Nt,jn);break;case 5:Ar(t,Nt,jn);break;default:throw Error(o(329))}}}return jt(t,at()),t.callbackNode===a?ah.bind(null,t):null}function Au(t,r){var a=xi;return t.current.memoizedState.isDehydrated&&(Rr(t,r).flags|=256),t=ts(t,r),t!==2&&(r=Nt,Nt=a,r!==null&&_u(r)),t}function _u(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function Lb(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],m=f.getSnapshot;f=f.value;try{if(!rn(m(),f))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ur(t,r){for(r&=~Eu,r&=~Xa,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-nn(r),l=1<<a;t[a]=-1,r&=~l}}function sh(t){if((Ne&6)!==0)throw Error(o(327));po();var r=ua(t,0);if((r&1)===0)return jt(t,at()),null;var a=ts(t,r);if(t.tag!==0&&a===2){var l=ul(t);l!==0&&(r=l,a=Au(t,l))}if(a===1)throw a=wi,Rr(t,0),ur(t,r),jt(t,at()),a;if(a===6)throw Error(o(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Ar(t,Nt,jn),jt(t,at()),null}function Du(t,r){var a=Ne;Ne|=1;try{return t(r)}finally{Ne=a,Ne===0&&(fo=at()+500,Ca&&nr())}}function Cr(t){sr!==null&&sr.tag===0&&(Ne&6)===0&&po();var r=Ne;Ne|=1;var a=Qt.transition,l=Ve;try{if(Qt.transition=null,Ve=1,t)return t()}finally{Ve=l,Qt.transition=a,Ne=r,(Ne&6)===0&&nr()}}function Mu(){Ut=co.current,Ke(co)}function Rr(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,cb(a)),ut!==null)for(a=ut.return;a!==null;){var l=a;switch(Ul(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ea();break;case 3:so(),Ke(Dt),Ke(St),tu();break;case 5:Zl(l);break;case 4:so();break;case 13:Ke(Je);break;case 19:Ke(Je);break;case 10:Gl(l.type._context);break;case 22:case 23:Mu()}a=a.return}if(yt=t,ut=t=cr(t.current,null),wt=Ut=r,ht=0,wi=null,Eu=Xa=Or=0,Nt=xi=null,kr!==null){for(r=0;r<kr.length;r++)if(a=kr[r],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,m=a.pending;if(m!==null){var b=m.next;m.next=f,l.next=b}a.pending=l}kr=null}return t}function lh(t,r){do{var a=ut;try{if(Kl(),Ia.current=Ua,Fa){for(var l=Ze.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Fa=!1}if(Er=0,gt=pt=Ze=null,hi=!1,mi=0,Tu.current=null,a===null||a.return===null){ht=1,wi=r,ut=null;break}e:{var m=t,b=a.return,k=a,T=r;if(r=wt,k.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var I=T,Q=k,te=Q.tag;if((Q.mode&1)===0&&(te===0||te===11||te===15)){var Y=Q.alternate;Y?(Q.updateQueue=Y.updateQueue,Q.memoizedState=Y.memoizedState,Q.lanes=Y.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var le=Mp(b);if(le!==null){le.flags&=-257,Lp(le,b,k,m,r),le.mode&1&&Dp(m,I,r),r=le,T=I;var de=r.updateQueue;if(de===null){var he=new Set;he.add(T),r.updateQueue=he}else de.add(T);break e}else{if((r&1)===0){Dp(m,I,r),Lu();break e}T=Error(o(426))}}else if(Ye&&k.mode&1){var st=Mp(b);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),Lp(st,b,k,m,r),Hl(lo(T,k));break e}}m=T=lo(T,k),ht!==4&&(ht=2),xi===null?xi=[m]:xi.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var A=Ap(m,T,r);rp(m,A);break e;case 1:k=T;var C=m.type,M=m.stateNode;if((m.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ar===null||!ar.has(M)))){m.flags|=65536,r&=-r,m.lanes|=r;var oe=_p(m,k,r);rp(m,oe);break e}}m=m.return}while(m!==null)}fh(a)}catch(me){r=me,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function uh(){var t=Ga.current;return Ga.current=Ua,t===null?Ua:t}function Lu(){(ht===0||ht===3||ht===2)&&(ht=4),yt===null||(Or&268435455)===0&&(Xa&268435455)===0||ur(yt,wt)}function ts(t,r){var a=Ne;Ne|=2;var l=uh();(yt!==t||wt!==r)&&(jn=null,Rr(t,r));do try{Nb();break}catch(f){lh(t,f)}while(!0);if(Kl(),Ne=a,Ga.current=l,ut!==null)throw Error(o(261));return yt=null,wt=0,ht}function Nb(){for(;ut!==null;)ch(ut)}function jb(){for(;ut!==null&&!s0();)ch(ut)}function ch(t){var r=hh(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,r===null?fh(t):ut=r,Tu.current=null}function fh(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Cb(a,r,Ut),a!==null){ut=a;return}}else{if(a=Rb(a,r),a!==null){a.flags&=32767,ut=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ht=6,ut=null;return}}if(r=r.sibling,r!==null){ut=r;return}ut=r=t}while(r!==null);ht===0&&(ht=5)}function Ar(t,r,a){var l=Ve,f=Qt.transition;try{Qt.transition=null,Ve=1,zb(t,r,a,l)}finally{Qt.transition=f,Ve=l}return null}function zb(t,r,a,l){do po();while(sr!==null);if((Ne&6)!==0)throw Error(o(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(y0(t,m),t===yt&&(ut=yt=null,wt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Qa||(Qa=!0,mh(ia,function(){return po(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Qt.transition,Qt.transition=null;var b=Ve;Ve=1;var k=Ne;Ne|=4,Tu.current=null,_b(t,a),th(a,t),rb(Ll),da=!!Ml,Ll=Ml=null,t.current=a,Db(a),l0(),Ne=k,Ve=b,Qt.transition=m}else t.current=a;if(Qa&&(Qa=!1,sr=t,Ja=f),m=t.pendingLanes,m===0&&(ar=null),f0(a.stateNode),jt(t,at()),r!==null)for(l=t.onRecoverableError,a=0;a<r.length;a++)f=r[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Ya)throw Ya=!1,t=Cu,Cu=null,t;return(Ja&1)!==0&&t.tag!==0&&po(),m=t.pendingLanes,(m&1)!==0?t===Ru?Si++:(Si=0,Ru=t):Si=0,nr(),null}function po(){if(sr!==null){var t=Zf(Ja),r=Qt.transition,a=Ve;try{if(Qt.transition=null,Ve=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,Ja=0,(Ne&6)!==0)throw Error(o(331));var f=Ne;for(Ne|=4,ce=t.current;ce!==null;){var m=ce,b=m.child;if((ce.flags&16)!==0){var k=m.deletions;if(k!==null){for(var T=0;T<k.length;T++){var I=k[T];for(ce=I;ce!==null;){var Q=ce;switch(Q.tag){case 0:case 11:case 15:bi(8,Q,m)}var te=Q.child;if(te!==null)te.return=Q,ce=te;else for(;ce!==null;){Q=ce;var Y=Q.sibling,le=Q.return;if(Yp(Q),Q===I){ce=null;break}if(Y!==null){Y.return=le,ce=Y;break}ce=le}}}var de=m.alternate;if(de!==null){var he=de.child;if(he!==null){de.child=null;do{var st=he.sibling;he.sibling=null,he=st}while(he!==null)}}ce=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,ce=b;else e:for(;ce!==null;){if(m=ce,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:bi(9,m,m.return)}var A=m.sibling;if(A!==null){A.return=m.return,ce=A;break e}ce=m.return}}var C=t.current;for(ce=C;ce!==null;){b=ce;var M=b.child;if((b.subtreeFlags&2064)!==0&&M!==null)M.return=b,ce=M;else e:for(b=C;ce!==null;){if(k=ce,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Ka(9,k)}}catch(me){ot(k,k.return,me)}if(k===b){ce=null;break e}var oe=k.sibling;if(oe!==null){oe.return=k.return,ce=oe;break e}ce=k.return}}if(Ne=f,nr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(aa,t)}catch{}l=!0}return l}finally{Ve=a,Qt.transition=r}}return!1}function dh(t,r,a){r=lo(a,r),r=Ap(t,r,1),t=or(t,r,1),r=_t(),t!==null&&(Wo(t,1,r),jt(t,r))}function ot(t,r,a){if(t.tag===3)dh(t,t,a);else for(;r!==null;){if(r.tag===3){dh(r,t,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ar===null||!ar.has(l))){t=lo(a,t),t=_p(r,t,1),r=or(r,t,1),t=_t(),r!==null&&(Wo(r,1,t),jt(r,t));break}}r=r.return}}function Ib(t,r,a){var l=t.pingCache;l!==null&&l.delete(r),r=_t(),t.pingedLanes|=t.suspendedLanes&a,yt===t&&(wt&a)===a&&(ht===4||ht===3&&(wt&130023424)===wt&&500>at()-Ou?Rr(t,0):Eu|=a),jt(t,r)}function ph(t,r){r===0&&((t.mode&1)===0?r=1:(r=la,la<<=1,(la&130023424)===0&&(la=4194304)));var a=_t();t=Mn(t,r),t!==null&&(Wo(t,r,a),jt(t,a))}function Fb(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),ph(t,a)}function Vb(t,r){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(o(314))}l!==null&&l.delete(r),ph(t,a)}var hh;hh=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||Dt.current)Lt=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return Lt=!1,Ob(t,r,a);Lt=(t.flags&131072)!==0}else Lt=!1,Ye&&(r.flags&1048576)!==0&&Kd(r,Aa,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;Ha(t,r),t=r.pendingProps;var f=eo(r,St.current);ao(r,a),f=ou(null,r,l,t,f,a);var m=iu();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Mt(l)?(m=!0,Oa(r)):m=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ql(r),f.updater=$a,r.stateNode=f,f._reactInternals=r,fu(r,l,t,a),r=mu(null,r,l,!0,m,a)):(r.tag=0,Ye&&m&&Bl(r),At(null,r,f,a),r=r.child),r;case 16:l=r.elementType;e:{switch(Ha(t,r),t=r.pendingProps,f=l._init,l=f(l._payload),r.type=l,f=r.tag=Ub(l),t=an(l,t),f){case 0:r=hu(null,r,l,t,a);break e;case 1:r=Vp(null,r,l,t,a);break e;case 11:r=Np(null,r,l,t,a);break e;case 14:r=jp(null,r,l,an(l.type,t),a);break e}throw Error(o(306,l,""))}return r;case 0:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:an(l,f),hu(t,r,l,f,a);case 1:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:an(l,f),Vp(t,r,l,f,a);case 3:e:{if(Bp(r),t===null)throw Error(o(387));l=r.pendingProps,m=r.memoizedState,f=m.element,np(t,r),ja(r,l,null,a);var b=r.memoizedState;if(l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){f=lo(Error(o(423)),r),r=Up(t,r,l,a,f);break e}else if(l!==f){f=lo(Error(o(424)),r),r=Up(t,r,l,a,f);break e}else for(Bt=Zn(r.stateNode.containerInfo.firstChild),Vt=r,Ye=!0,on=null,a=ep(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ro(),l===f){r=Nn(t,r,a);break e}At(t,r,l,a)}r=r.child}return r;case 5:return ip(r),t===null&&ql(r),l=r.type,f=r.pendingProps,m=t!==null?t.memoizedProps:null,b=f.children,Nl(l,f)?b=null:m!==null&&Nl(l,m)&&(r.flags|=32),Fp(t,r),At(t,r,b,a),r.child;case 6:return t===null&&ql(r),null;case 13:return $p(t,r,a);case 4:return Jl(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=oo(r,null,l,a):At(t,r,l,a),r.child;case 11:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:an(l,f),Np(t,r,l,f,a);case 7:return At(t,r,r.pendingProps,a),r.child;case 8:return At(t,r,r.pendingProps.children,a),r.child;case 12:return At(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(l=r.type._context,f=r.pendingProps,m=r.memoizedProps,b=f.value,He(Ma,l._currentValue),l._currentValue=b,m!==null)if(rn(m.value,b)){if(m.children===f.children&&!Dt.current){r=Nn(t,r,a);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var k=m.dependencies;if(k!==null){b=m.child;for(var T=k.firstContext;T!==null;){if(T.context===l){if(m.tag===1){T=Ln(-1,a&-a),T.tag=2;var I=m.updateQueue;if(I!==null){I=I.shared;var Q=I.pending;Q===null?T.next=T:(T.next=Q.next,Q.next=T),I.pending=T}}m.lanes|=a,T=m.alternate,T!==null&&(T.lanes|=a),Xl(m.return,a,r),k.lanes|=a;break}T=T.next}}else if(m.tag===10)b=m.type===r.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(o(341));b.lanes|=a,k=b.alternate,k!==null&&(k.lanes|=a),Xl(b,a,r),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===r){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}At(t,r,f.children,a),r=r.child}return r;case 9:return f=r.type,l=r.pendingProps.children,ao(r,a),f=Xt(f),l=l(f),r.flags|=1,At(t,r,l,a),r.child;case 14:return l=r.type,f=an(l,r.pendingProps),f=an(l.type,f),jp(t,r,l,f,a);case 15:return zp(t,r,r.type,r.pendingProps,a);case 17:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:an(l,f),Ha(t,r),r.tag=1,Mt(l)?(t=!0,Oa(r)):t=!1,ao(r,a),Cp(r,l,f),fu(r,l,f,a),mu(null,r,l,!0,t,a);case 19:return Hp(t,r,a);case 22:return Ip(t,r,a)}throw Error(o(156,r.tag))};function mh(t,r){return Gf(t,r)}function Bb(t,r,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,r,a,l){return new Bb(t,r,a,l)}function Nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ub(t){if(typeof t=="function")return Nu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===De)return 11;if(t===j)return 14}return 2}function cr(t,r){var a=t.alternate;return a===null?(a=Jt(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function ns(t,r,a,l,f,m){var b=2;if(l=t,typeof t=="function")Nu(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case ae:return _r(a.children,f,m,r);case K:b=8,f|=8;break;case J:return t=Jt(12,a,r,f|2),t.elementType=J,t.lanes=m,t;case je:return t=Jt(13,a,r,f),t.elementType=je,t.lanes=m,t;case q:return t=Jt(19,a,r,f),t.elementType=q,t.lanes=m,t;case z:return rs(a,f,m,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case be:b=10;break e;case _e:b=9;break e;case De:b=11;break e;case j:b=14;break e;case V:b=16,l=null;break e}throw Error(o(130,t==null?t:typeof t,""))}return r=Jt(b,a,r,f),r.elementType=t,r.type=l,r.lanes=m,r}function _r(t,r,a,l){return t=Jt(7,t,l,r),t.lanes=a,t}function rs(t,r,a,l){return t=Jt(22,t,l,r),t.elementType=z,t.lanes=a,t.stateNode={isHidden:!1},t}function ju(t,r,a){return t=Jt(6,t,null,r),t.lanes=a,t}function zu(t,r,a){return r=Jt(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function $b(t,r,a,l,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Iu(t,r,a,l,f,m,b,k,T){return t=new $b(t,r,a,k,T),r===1?(r=1,m===!0&&(r|=8)):r=0,m=Jt(3,null,null,r),t.current=m,m.stateNode=t,m.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ql(m),t}function qb(t,r,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:l==null?null:""+l,children:t,containerInfo:r,implementation:a}}function gh(t){if(!t)return tr;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(o(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Mt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(o(171))}if(t.tag===1){var a=t.type;if(Mt(a))return qd(t,a,r)}return r}function yh(t,r,a,l,f,m,b,k,T){return t=Iu(a,l,!0,t,f,m,b,k,T),t.context=gh(null),a=t.current,l=_t(),f=lr(a),m=Ln(l,f),m.callback=r??null,or(a,m,f),t.current.lanes=f,Wo(t,f,l),jt(t,l),t}function os(t,r,a,l){var f=r.current,m=_t(),b=lr(f);return a=gh(a),r.context===null?r.context=a:r.pendingContext=a,r=Ln(m,b),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=or(f,r,b),t!==null&&(un(t,f,b,m),Na(t,f,b)),b}function is(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vh(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function Fu(t,r){vh(t,r),(t=t.alternate)&&vh(t,r)}function Hb(){return null}var bh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vu(t){this._internalRoot=t}as.prototype.render=Vu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(o(409));os(t,r,null,null)},as.prototype.unmount=Vu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Cr(function(){os(null,t,null,null)}),r[Rn]=null}};function as(t){this._internalRoot=t}as.prototype.unstable_scheduleHydration=function(t){if(t){var r=nd();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Yn.length&&r!==0&&r<Yn[a].priority;a++);Yn.splice(a,0,t),a===0&&id(t)}};function Bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ss(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wh(){}function Wb(t,r,a,l,f){if(f){if(typeof l=="function"){var m=l;l=function(){var I=is(b);m.call(I)}}var b=yh(r,l,t,0,null,!1,!1,"",wh);return t._reactRootContainer=b,t[Rn]=b.current,ai(t.nodeType===8?t.parentNode:t),Cr(),b}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var k=l;l=function(){var I=is(T);k.call(I)}}var T=Iu(t,0,!1,null,null,!1,!1,"",wh);return t._reactRootContainer=T,t[Rn]=T.current,ai(t.nodeType===8?t.parentNode:t),Cr(function(){os(r,T,a,l)}),T}function ls(t,r,a,l,f){var m=a._reactRootContainer;if(m){var b=m;if(typeof f=="function"){var k=f;f=function(){var T=is(b);k.call(T)}}os(r,b,t,f)}else b=Wb(a,r,t,f,l);return is(b)}ed=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ho(r.pendingLanes);a!==0&&(fl(r,a|1),jt(r,at()),(Ne&6)===0&&(fo=at()+500,nr()))}break;case 13:Cr(function(){var l=Mn(t,1);if(l!==null){var f=_t();un(l,t,1,f)}}),Fu(t,1)}},dl=function(t){if(t.tag===13){var r=Mn(t,134217728);if(r!==null){var a=_t();un(r,t,134217728,a)}Fu(t,134217728)}},td=function(t){if(t.tag===13){var r=lr(t),a=Mn(t,r);if(a!==null){var l=_t();un(a,t,r,l)}Fu(t,r)}},nd=function(){return Ve},rd=function(t,r){var a=Ve;try{return Ve=t,r()}finally{Ve=a}},Fe=function(t,r,a){switch(r){case"input":if(Fo(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==t&&l.form===t.form){var f=Ta(l);if(!f)throw Error(o(90));Rt(l),Fo(l,f)}}}break;case"textarea":na(t,a);break;case"select":r=a.value,r!=null&&mn(t,!!a.multiple,r,!1)}},vr=Du,Bo=Cr;var Kb={usingClientEntryPoint:!1,Events:[ui,Jr,Ta,Cn,gn,Du]},Pi={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gb={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wf(t),t===null?null:t.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||Hb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var us=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!us.isDisabled&&us.supportsFiber)try{aa=us.inject(Gb),yn=us}catch{}}return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kb,zt.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(r))throw Error(o(200));return qb(t,r,null,a)},zt.createRoot=function(t,r){if(!Bu(t))throw Error(o(299));var a=!1,l="",f=bh;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=Iu(t,1,!1,null,null,a,!1,l,f),t[Rn]=r.current,ai(t.nodeType===8?t.parentNode:t),new Vu(r)},zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=Wf(r),t=t===null?null:t.stateNode,t},zt.flushSync=function(t){return Cr(t)},zt.hydrate=function(t,r,a){if(!ss(r))throw Error(o(200));return ls(null,t,r,!0,a)},zt.hydrateRoot=function(t,r,a){if(!Bu(t))throw Error(o(405));var l=a!=null&&a.hydratedSources||null,f=!1,m="",b=bh;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),r=yh(r,null,t,1,a??null,f,!1,m,b),t[Rn]=r.current,ai(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,f]:r.mutableSourceEagerHydrationData.push(a,f);return new as(r)},zt.render=function(t,r,a){if(!ss(r))throw Error(o(200));return ls(null,t,r,!1,a)},zt.unmountComponentAtNode=function(t){if(!ss(t))throw Error(o(40));return t._reactRootContainer?(Cr(function(){ls(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1},zt.unstable_batchedUpdates=Du,zt.unstable_renderSubtreeIntoContainer=function(t,r,a,l){if(!ss(a))throw Error(o(200));if(t==null||t._reactInternals===void 0)throw Error(o(38));return ls(t,r,a,!1,l)},zt.version="18.3.1-next-f1338f8080-20240426",zt}var Ch;function o1(){if(Ch)return qu.exports;Ch=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),qu.exports=r1(),qu.exports}var Rh;function i1(){if(Rh)return cs;Rh=1;var e=o1();return cs.createRoot=e.createRoot,cs.hydrateRoot=e.hydrateRoot,cs}var zO=i1(),Ti={},Ah;function a1(){if(Ah)return Ti;Ah=1,Object.defineProperty(Ti,"__esModule",{value:!0}),Ti.parse=c,Ti.serialize=h;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,n=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function c(v,S){const w=new u,x=v.length;if(x<2)return w;const P=(S==null?void 0:S.decode)||g;let E=0;do{const L=v.indexOf("=",E);if(L===-1)break;const _=v.indexOf(";",E),X=_===-1?x:_;if(L>X){E=v.lastIndexOf(";",L-1)+1;continue}const F=d(v,E,L),ee=p(v,L,F),ae=v.slice(F,ee);if(w[ae]===void 0){let K=d(v,L+1,X),J=p(v,X,K);const be=P(v.slice(K,J));w[ae]=be}E=X+1}while(E<x);return w}function d(v,S,w){do{const x=v.charCodeAt(S);if(x!==32&&x!==9)return S}while(++S<w);return w}function p(v,S,w){for(;S>w;){const x=v.charCodeAt(--S);if(x!==32&&x!==9)return S+1}return w}function h(v,S,w){const x=(w==null?void 0:w.encode)||encodeURIComponent;if(!e.test(v))throw new TypeError(`argument name is invalid: ${v}`);const P=x(S);if(!n.test(P))throw new TypeError(`argument val is invalid: ${S}`);let E=v+"="+P;if(!w)return E;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);E+="; Max-Age="+w.maxAge}if(w.domain){if(!o.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);E+="; Domain="+w.domain}if(w.path){if(!i.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);E+="; Path="+w.path}if(w.expires){if(!y(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);E+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(E+="; HttpOnly"),w.secure&&(E+="; Secure"),w.partitioned&&(E+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":E+="; Priority=Low";break;case"medium":E+="; Priority=Medium";break;case"high":E+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":E+="; SameSite=Strict";break;case"lax":E+="; SameSite=Lax";break;case"none":E+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return E}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function y(v){return s.call(v)==="[object Date]"}return Ti}a1();/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var _h="popstate";function s1(e={}){function n(i,s){let{pathname:u,search:c,hash:d}=i.location;return kc("",{pathname:u,search:c,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function o(i,s){return typeof s=="string"?s:Fi(s)}return u1(n,o,null,e)}function tt(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Tn(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function l1(){return Math.random().toString(36).substring(2,10)}function Dh(e,n){return{usr:e.state,key:e.key,idx:n}}function kc(e,n,o=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?Ao(n):n,state:o,key:n&&n.key||i||l1()}}function Fi({pathname:e="/",search:n="",hash:o=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function Ao(e){let n={};if(e){let o=e.indexOf("#");o>=0&&(n.hash=e.substring(o),e=e.substring(0,o));let i=e.indexOf("?");i>=0&&(n.search=e.substring(i),e=e.substring(0,i)),e&&(n.pathname=e)}return n}function u1(e,n,o,i={}){let{window:s=document.defaultView,v5Compat:u=!1}=i,c=s.history,d="POP",p=null,h=g();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function g(){return(c.state||{idx:null}).idx}function y(){d="POP";let P=g(),E=P==null?null:P-h;h=P,p&&p({action:d,location:x.location,delta:E})}function v(P,E){d="PUSH";let L=kc(x.location,P,E);h=g()+1;let _=Dh(L,h),X=x.createHref(L);try{c.pushState(_,"",X)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;s.location.assign(X)}u&&p&&p({action:d,location:x.location,delta:1})}function S(P,E){d="REPLACE";let L=kc(x.location,P,E);h=g();let _=Dh(L,h),X=x.createHref(L);c.replaceState(_,"",X),u&&p&&p({action:d,location:x.location,delta:0})}function w(P){let E=s.location.origin!=="null"?s.location.origin:s.location.href,L=typeof P=="string"?P:Fi(P);return L=L.replace(/ $/,"%20"),tt(E,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,E)}let x={get action(){return d},get location(){return e(s,c)},listen(P){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(_h,y),p=P,()=>{s.removeEventListener(_h,y),p=null}},createHref(P){return n(s,P)},createURL:w,encodeLocation(P){let E=w(P);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:v,replace:S,go(P){return c.go(P)}};return x}function _g(e,n,o="/"){return c1(e,n,o,!1)}function c1(e,n,o,i){let s=typeof n=="string"?Ao(n):n,u=$n(s.pathname||"/",o);if(u==null)return null;let c=Dg(e);f1(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let h=S1(u);d=w1(c[p],h,i)}return d}function Dg(e,n=[],o=[],i=""){let s=(u,c,d)=>{let p={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};p.relativePath.startsWith("/")&&(tt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let h=Vn([i,p.relativePath]),g=o.concat(p);u.children&&u.children.length>0&&(tt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),Dg(u.children,n,g,h)),!(u.path==null&&!u.index)&&n.push({path:h,score:v1(h,u.index),routesMeta:g})};return e.forEach((u,c)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))s(u,c);else for(let p of Mg(u.path))s(u,c,p)}),n}function Mg(e){let n=e.split("/");if(n.length===0)return[];let[o,...i]=n,s=o.endsWith("?"),u=o.replace(/\?$/,"");if(i.length===0)return s?[u,""]:[u];let c=Mg(i.join("/")),d=[];return d.push(...c.map(p=>p===""?u:[u,p].join("/"))),s&&d.push(...c),d.map(p=>e.startsWith("/")&&p===""?"/":p)}function f1(e){e.sort((n,o)=>n.score!==o.score?o.score-n.score:b1(n.routesMeta.map(i=>i.childrenIndex),o.routesMeta.map(i=>i.childrenIndex)))}var d1=/^:[\w-]+$/,p1=3,h1=2,m1=1,g1=10,y1=-2,Mh=e=>e==="*";function v1(e,n){let o=e.split("/"),i=o.length;return o.some(Mh)&&(i+=y1),n&&(i+=h1),o.filter(s=>!Mh(s)).reduce((s,u)=>s+(d1.test(u)?p1:u===""?m1:g1),i)}function b1(e,n){return e.length===n.length&&e.slice(0,-1).every((i,s)=>i===n[s])?e[e.length-1]-n[n.length-1]:0}function w1(e,n,o=!1){let{routesMeta:i}=e,s={},u="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],h=d===i.length-1,g=u==="/"?n:n.slice(u.length)||"/",y=Cs({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},g),v=p.route;if(!y&&h&&o&&!i[i.length-1].route.index&&(y=Cs({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!y)return null;Object.assign(s,y.params),c.push({params:s,pathname:Vn([u,y.pathname]),pathnameBase:E1(Vn([u,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(u=Vn([u,y.pathnameBase]))}return c}function Cs(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,i]=x1(e.path,e.caseSensitive,e.end),s=n.match(o);if(!s)return null;let u=s[0],c=u.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:i.reduce((h,{paramName:g,isOptional:y},v)=>{if(g==="*"){let w=d[v]||"";c=u.slice(0,u.length-w.length).replace(/(.)\/+$/,"$1")}const S=d[v];return y&&!S?h[g]=void 0:h[g]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:c,pattern:e}}function x1(e,n=!1,o=!0){Tn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),i]}function S1(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Tn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function $n(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let o=n.endsWith("/")?n.length-1:n.length,i=e.charAt(o);return i&&i!=="/"?null:e.slice(o)||"/"}function P1(e,n="/"){let{pathname:o,search:i="",hash:s=""}=typeof e=="string"?Ao(e):e;return{pathname:o?o.startsWith("/")?o:k1(o,n):n,search:O1(i),hash:C1(s)}}function k1(e,n){let o=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?o.length>1&&o.pop():s!=="."&&o.push(s)}),o.length>1?o.join("/"):"/"}function Ku(e,n,o,i){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function T1(e){return e.filter((n,o)=>o===0||n.route.path&&n.route.path.length>0)}function Lg(e){let n=T1(e);return n.map((o,i)=>i===n.length-1?o.pathname:o.pathnameBase)}function Ng(e,n,o,i=!1){let s;typeof e=="string"?s=Ao(e):(s={...e},tt(!s.pathname||!s.pathname.includes("?"),Ku("?","pathname","search",s)),tt(!s.pathname||!s.pathname.includes("#"),Ku("#","pathname","hash",s)),tt(!s.search||!s.search.includes("#"),Ku("#","search","hash",s)));let u=e===""||s.pathname==="",c=u?"/":s.pathname,d;if(c==null)d=o;else{let y=n.length-1;if(!i&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),y-=1;s.pathname=v.join("/")}d=y>=0?n[y]:"/"}let p=P1(s,d),h=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&o.endsWith("/");return!p.pathname.endsWith("/")&&(h||g)&&(p.pathname+="/"),p}var Vn=e=>e.join("/").replace(/\/\/+/g,"/"),E1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),O1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,C1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function R1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var jg=["POST","PUT","PATCH","DELETE"];new Set(jg);var A1=["GET",...jg];new Set(A1);var _o=R.createContext(null);_o.displayName="DataRouter";var Vs=R.createContext(null);Vs.displayName="DataRouterState";var zg=R.createContext({isTransitioning:!1});zg.displayName="ViewTransition";var _1=R.createContext(new Map);_1.displayName="Fetchers";var D1=R.createContext(null);D1.displayName="Await";var En=R.createContext(null);En.displayName="Navigation";var Wi=R.createContext(null);Wi.displayName="Location";var On=R.createContext({outlet:null,matches:[],isDataRoute:!1});On.displayName="Route";var Zc=R.createContext(null);Zc.displayName="RouteError";function M1(e,{relative:n}={}){tt(Ki(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:i}=R.useContext(En),{hash:s,pathname:u,search:c}=Gi(e,{relative:n}),d=u;return o!=="/"&&(d=u==="/"?o:Vn([o,u])),i.createHref({pathname:d,search:c,hash:s})}function Ki(){return R.useContext(Wi)!=null}function Br(){return tt(Ki(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Wi).location}var Ig="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fg(e){R.useContext(En).static||R.useLayoutEffect(e)}function L1(){let{isDataRoute:e}=R.useContext(On);return e?K1():N1()}function N1(){tt(Ki(),"useNavigate() may be used only in the context of a <Router> component.");let e=R.useContext(_o),{basename:n,navigator:o}=R.useContext(En),{matches:i}=R.useContext(On),{pathname:s}=Br(),u=JSON.stringify(Lg(i)),c=R.useRef(!1);return Fg(()=>{c.current=!0}),R.useCallback((p,h={})=>{if(Tn(c.current,Ig),!c.current)return;if(typeof p=="number"){o.go(p);return}let g=Ng(p,JSON.parse(u),s,h.relative==="path");e==null&&n!=="/"&&(g.pathname=g.pathname==="/"?n:Vn([n,g.pathname])),(h.replace?o.replace:o.push)(g,h.state,h)},[n,o,u,s,e])}R.createContext(null);function IO(){let{matches:e}=R.useContext(On),n=e[e.length-1];return n?n.params:{}}function Gi(e,{relative:n}={}){let{matches:o}=R.useContext(On),{pathname:i}=Br(),s=JSON.stringify(Lg(o));return R.useMemo(()=>Ng(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function j1(e,n){return Vg(e,n)}function Vg(e,n,o,i){var L;tt(Ki(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:u}=R.useContext(En),{matches:c}=R.useContext(On),d=c[c.length-1],p=d?d.params:{},h=d?d.pathname:"/",g=d?d.pathnameBase:"/",y=d&&d.route;{let _=y&&y.path||"";Bg(h,!y||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let v=Br(),S;if(n){let _=typeof n=="string"?Ao(n):n;tt(g==="/"||((L=_.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${_.pathname}" was given in the \`location\` prop.`),S=_}else S=v;let w=S.pathname||"/",x=w;if(g!=="/"){let _=g.replace(/^\//,"").split("/");x="/"+w.replace(/^\//,"").split("/").slice(_.length).join("/")}let P=!u&&o&&o.matches&&o.matches.length>0?o.matches:_g(e,{pathname:x});Tn(y||P!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Tn(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=B1(P&&P.map(_=>Object.assign({},_,{params:Object.assign({},p,_.params),pathname:Vn([g,s.encodeLocation?s.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?g:Vn([g,s.encodeLocation?s.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),c,o,i);return n&&E?R.createElement(Wi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},E):E}function z1(){let e=W1(),n=R1(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},u={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:u},"ErrorBoundary")," or"," ",R.createElement("code",{style:u},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},n),o?R.createElement("pre",{style:s},o):null,c)}var I1=R.createElement(z1,null),F1=class extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(On.Provider,{value:this.props.routeContext},R.createElement(Zc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function V1({routeContext:e,match:n,children:o}){let i=R.useContext(_o);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(On.Provider,{value:e},o)}function B1(e,n=[],o=null,i=null){if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(n.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let s=e,u=o==null?void 0:o.errors;if(u!=null){let p=s.findIndex(h=>h.route.id&&(u==null?void 0:u[h.route.id])!==void 0);tt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(o)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=p),h.route.id){let{loaderData:g,errors:y}=o,v=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!y||y[h.route.id]===void 0);if(h.route.lazy||v){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,h,g)=>{let y,v=!1,S=null,w=null;o&&(y=u&&h.route.id?u[h.route.id]:void 0,S=h.route.errorElement||I1,c&&(d<0&&g===0?(Bg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,w=null):d===g&&(v=!0,w=h.route.hydrateFallbackElement||null)));let x=n.concat(s.slice(0,g+1)),P=()=>{let E;return y?E=S:v?E=w:h.route.Component?E=R.createElement(h.route.Component,null):h.route.element?E=h.route.element:E=p,R.createElement(V1,{match:h,routeContext:{outlet:p,matches:x,isDataRoute:o!=null},children:E})};return o&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?R.createElement(F1,{location:o.location,revalidation:o.revalidation,component:S,error:y,children:P(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):P()},null)}function ef(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U1(e){let n=R.useContext(_o);return tt(n,ef(e)),n}function $1(e){let n=R.useContext(Vs);return tt(n,ef(e)),n}function q1(e){let n=R.useContext(On);return tt(n,ef(e)),n}function tf(e){let n=q1(e),o=n.matches[n.matches.length-1];return tt(o.route.id,`${e} can only be used on routes that contain a unique "id"`),o.route.id}function H1(){return tf("useRouteId")}function W1(){var i;let e=R.useContext(Zc),n=$1("useRouteError"),o=tf("useRouteError");return e!==void 0?e:(i=n.errors)==null?void 0:i[o]}function K1(){let{router:e}=U1("useNavigate"),n=tf("useNavigate"),o=R.useRef(!1);return Fg(()=>{o.current=!0}),R.useCallback(async(s,u={})=>{Tn(o.current,Ig),o.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:n,...u}))},[e,n])}var Lh={};function Bg(e,n,o){!n&&!Lh[e]&&(Lh[e]=!0,Tn(!1,o))}R.memo(G1);function G1({routes:e,future:n,state:o}){return Vg(e,void 0,o,n)}function X1(e){tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Y1({basename:e="/",children:n=null,location:o,navigationType:i="POP",navigator:s,static:u=!1}){tt(!Ki(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:c,navigator:s,static:u,future:{}}),[c,s,u]);typeof o=="string"&&(o=Ao(o));let{pathname:p="/",search:h="",hash:g="",state:y=null,key:v="default"}=o,S=R.useMemo(()=>{let w=$n(p,c);return w==null?null:{location:{pathname:w,search:h,hash:g,state:y,key:v},navigationType:i}},[c,p,h,g,y,v,i]);return Tn(S!=null,`<Router basename="${c}"> is not able to match the URL "${p}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:R.createElement(En.Provider,{value:d},R.createElement(Wi.Provider,{children:n,value:S}))}function FO({children:e,location:n}){return j1(Tc(e),n)}function Tc(e,n=[]){let o=[];return R.Children.forEach(e,(i,s)=>{if(!R.isValidElement(i))return;let u=[...n,s];if(i.type===R.Fragment){o.push.apply(o,Tc(i.props.children,u));return}tt(i.type===X1,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||u.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Tc(i.props.children,u)),o.push(c)}),o}var bs="get",ws="application/x-www-form-urlencoded";function Bs(e){return e!=null&&typeof e.tagName=="string"}function Q1(e){return Bs(e)&&e.tagName.toLowerCase()==="button"}function J1(e){return Bs(e)&&e.tagName.toLowerCase()==="form"}function Z1(e){return Bs(e)&&e.tagName.toLowerCase()==="input"}function ew(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tw(e,n){return e.button===0&&(!n||n==="_self")&&!ew(e)}var fs=null;function nw(){if(fs===null)try{new FormData(document.createElement("form"),0),fs=!1}catch{fs=!0}return fs}var rw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gu(e){return e!=null&&!rw.has(e)?(Tn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ws}"`),null):e}function ow(e,n){let o,i,s,u,c;if(J1(e)){let d=e.getAttribute("action");i=d?$n(d,n):null,o=e.getAttribute("method")||bs,s=Gu(e.getAttribute("enctype"))||ws,u=new FormData(e)}else if(Q1(e)||Z1(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||d.getAttribute("action");if(i=p?$n(p,n):null,o=e.getAttribute("formmethod")||d.getAttribute("method")||bs,s=Gu(e.getAttribute("formenctype"))||Gu(d.getAttribute("enctype"))||ws,u=new FormData(d,e),!nw()){let{name:h,type:g,value:y}=e;if(g==="image"){let v=h?`${h}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else h&&u.append(h,y)}}else{if(Bs(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=bs,i=null,s=ws,c=e}return u&&s==="text/plain"&&(c=u,u=void 0),{action:i,method:o.toLowerCase(),encType:s,formData:u,body:c}}function nf(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}async function iw(e,n){if(e.id in n)return n[e.id];try{let o=await import(e.module);return n[e.id]=o,o}catch(o){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function aw(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function sw(e,n,o){let i=await Promise.all(e.map(async s=>{let u=n.routes[s.route.id];if(u){let c=await iw(u,o);return c.links?c.links():[]}return[]}));return fw(i.flat(1).filter(aw).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Nh(e,n,o,i,s,u){let c=(p,h)=>o[h]?p.route.id!==o[h].route.id:!0,d=(p,h)=>{var g;return o[h].pathname!==p.pathname||((g=o[h].route.path)==null?void 0:g.endsWith("*"))&&o[h].params["*"]!==p.params["*"]};return u==="assets"?n.filter((p,h)=>c(p,h)||d(p,h)):u==="data"?n.filter((p,h)=>{var y;let g=i.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(c(p,h)||d(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((y=o[0])==null?void 0:y.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function lw(e,n,{includeHydrateFallback:o}={}){return uw(e.map(i=>{let s=n.routes[i.route.id];if(!s)return[];let u=[s.module];return s.clientActionModule&&(u=u.concat(s.clientActionModule)),s.clientLoaderModule&&(u=u.concat(s.clientLoaderModule)),o&&s.hydrateFallbackModule&&(u=u.concat(s.hydrateFallbackModule)),s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function uw(e){return[...new Set(e)]}function cw(e){let n={},o=Object.keys(e).sort();for(let i of o)n[i]=e[i];return n}function fw(e,n){let o=new Set;return new Set(n),e.reduce((i,s)=>{let u=JSON.stringify(cw(s));return o.has(u)||(o.add(u),i.push({key:u,link:s})),i},[])}function dw(e,n){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return o.pathname==="/"?o.pathname="_root.data":n&&$n(o.pathname,n)==="/"?o.pathname=`${n.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function Ug(){let e=R.useContext(_o);return nf(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function pw(){let e=R.useContext(Vs);return nf(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var rf=R.createContext(void 0);rf.displayName="FrameworkContext";function $g(){let e=R.useContext(rf);return nf(e,"You must render this element inside a <HydratedRouter> element"),e}function hw(e,n){let o=R.useContext(rf),[i,s]=R.useState(!1),[u,c]=R.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:h,onMouseLeave:g,onTouchStart:y}=n,v=R.useRef(null);R.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let x=E=>{E.forEach(L=>{c(L.isIntersecting)})},P=new IntersectionObserver(x,{threshold:.5});return v.current&&P.observe(v.current),()=>{P.disconnect()}}},[e]),R.useEffect(()=>{if(i){let x=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(x)}}},[i]);let S=()=>{s(!0)},w=()=>{s(!1),c(!1)};return o?e!=="intent"?[u,v,{}]:[u,v,{onFocus:Ei(d,S),onBlur:Ei(p,w),onMouseEnter:Ei(h,S),onMouseLeave:Ei(g,w),onTouchStart:Ei(y,S)}]:[!1,v,{}]}function Ei(e,n){return o=>{e&&e(o),o.defaultPrevented||n(o)}}function mw({page:e,...n}){let{router:o}=Ug(),i=R.useMemo(()=>_g(o.routes,e,o.basename),[o.routes,e,o.basename]);return i?R.createElement(yw,{page:e,matches:i,...n}):null}function gw(e){let{manifest:n,routeModules:o}=$g(),[i,s]=R.useState([]);return R.useEffect(()=>{let u=!1;return sw(e,n,o).then(c=>{u||s(c)}),()=>{u=!0}},[e,n,o]),i}function yw({page:e,matches:n,...o}){let i=Br(),{manifest:s,routeModules:u}=$g(),{basename:c}=Ug(),{loaderData:d,matches:p}=pw(),h=R.useMemo(()=>Nh(e,n,p,s,i,"data"),[e,n,p,s,i]),g=R.useMemo(()=>Nh(e,n,p,s,i,"assets"),[e,n,p,s,i]),y=R.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let w=new Set,x=!1;if(n.forEach(E=>{var _;let L=s.routes[E.route.id];!L||!L.hasLoader||(!h.some(X=>X.route.id===E.route.id)&&E.route.id in d&&((_=u[E.route.id])!=null&&_.shouldRevalidate)||L.hasClientLoader?x=!0:w.add(E.route.id))}),w.size===0)return[];let P=dw(e,c);return x&&w.size>0&&P.searchParams.set("_routes",n.filter(E=>w.has(E.route.id)).map(E=>E.route.id).join(",")),[P.pathname+P.search]},[c,d,i,s,h,n,e,u]),v=R.useMemo(()=>lw(g,s),[g,s]),S=gw(g);return R.createElement(R.Fragment,null,y.map(w=>R.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...o})),v.map(w=>R.createElement("link",{key:w,rel:"modulepreload",href:w,...o})),S.map(({key:w,link:x})=>R.createElement("link",{key:w,...x})))}function vw(...e){return n=>{e.forEach(o=>{typeof o=="function"?o(n):o!=null&&(o.current=n)})}}var qg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qg&&(window.__reactRouterVersion="7.4.1")}catch{}function VO({basename:e,children:n,window:o}){let i=R.useRef();i.current==null&&(i.current=s1({window:o,v5Compat:!0}));let s=i.current,[u,c]=R.useState({action:s.action,location:s.location}),d=R.useCallback(p=>{R.startTransition(()=>c(p))},[c]);return R.useLayoutEffect(()=>s.listen(d),[s,d]),R.createElement(Y1,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:s})}var Hg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wg=R.forwardRef(function({onClick:n,discover:o="render",prefetch:i="none",relative:s,reloadDocument:u,replace:c,state:d,target:p,to:h,preventScrollReset:g,viewTransition:y,...v},S){let{basename:w}=R.useContext(En),x=typeof h=="string"&&Hg.test(h),P,E=!1;if(typeof h=="string"&&x&&(P=h,qg))try{let J=new URL(window.location.href),be=h.startsWith("//")?new URL(J.protocol+h):new URL(h),_e=$n(be.pathname,w);be.origin===J.origin&&_e!=null?h=_e+be.search+be.hash:E=!0}catch{Tn(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=M1(h,{relative:s}),[_,X,F]=hw(i,v),ee=Sw(h,{replace:c,state:d,target:p,preventScrollReset:g,relative:s,viewTransition:y});function ae(J){n&&n(J),J.defaultPrevented||ee(J)}let K=R.createElement("a",{...v,...F,href:P||L,onClick:E||u?n:ae,ref:vw(S,X),target:p,"data-discover":!x&&o==="render"?"true":void 0});return _&&!x?R.createElement(R.Fragment,null,K,R.createElement(mw,{page:L})):K});Wg.displayName="Link";var bw=R.forwardRef(function({"aria-current":n="page",caseSensitive:o=!1,className:i="",end:s=!1,style:u,to:c,viewTransition:d,children:p,...h},g){let y=Gi(c,{relative:h.relative}),v=Br(),S=R.useContext(Vs),{navigator:w,basename:x}=R.useContext(En),P=S!=null&&Ow(y)&&d===!0,E=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,L=v.pathname,_=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;o||(L=L.toLowerCase(),_=_?_.toLowerCase():null,E=E.toLowerCase()),_&&x&&(_=$n(_,x)||_);const X=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let F=L===E||!s&&L.startsWith(E)&&L.charAt(X)==="/",ee=_!=null&&(_===E||!s&&_.startsWith(E)&&_.charAt(E.length)==="/"),ae={isActive:F,isPending:ee,isTransitioning:P},K=F?n:void 0,J;typeof i=="function"?J=i(ae):J=[i,F?"active":null,ee?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let be=typeof u=="function"?u(ae):u;return R.createElement(Wg,{...h,"aria-current":K,className:J,ref:g,style:be,to:c,viewTransition:d},typeof p=="function"?p(ae):p)});bw.displayName="NavLink";var ww=R.forwardRef(({discover:e="render",fetcherKey:n,navigate:o,reloadDocument:i,replace:s,state:u,method:c=bs,action:d,onSubmit:p,relative:h,preventScrollReset:g,viewTransition:y,...v},S)=>{let w=Tw(),x=Ew(d,{relative:h}),P=c.toLowerCase()==="get"?"get":"post",E=typeof d=="string"&&Hg.test(d),L=_=>{if(p&&p(_),_.defaultPrevented)return;_.preventDefault();let X=_.nativeEvent.submitter,F=(X==null?void 0:X.getAttribute("formmethod"))||c;w(X||_.currentTarget,{fetcherKey:n,method:F,navigate:o,replace:s,state:u,relative:h,preventScrollReset:g,viewTransition:y})};return R.createElement("form",{ref:S,method:P,action:x,onSubmit:i?p:L,...v,"data-discover":!E&&e==="render"?"true":void 0})});ww.displayName="Form";function xw(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kg(e){let n=R.useContext(_o);return tt(n,xw(e)),n}function Sw(e,{target:n,replace:o,state:i,preventScrollReset:s,relative:u,viewTransition:c}={}){let d=L1(),p=Br(),h=Gi(e,{relative:u});return R.useCallback(g=>{if(tw(g,n)){g.preventDefault();let y=o!==void 0?o:Fi(p)===Fi(h);d(e,{replace:y,state:i,preventScrollReset:s,relative:u,viewTransition:c})}},[p,d,h,o,i,n,e,s,u,c])}var Pw=0,kw=()=>`__${String(++Pw)}__`;function Tw(){let{router:e}=Kg("useSubmit"),{basename:n}=R.useContext(En),o=H1();return R.useCallback(async(i,s={})=>{let{action:u,method:c,encType:d,formData:p,body:h}=ow(i,n);if(s.navigate===!1){let g=s.fetcherKey||kw();await e.fetch(g,o,s.action||u,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||c,formEncType:s.encType||d,flushSync:s.flushSync})}else await e.navigate(s.action||u,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||c,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:o,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,n,o])}function Ew(e,{relative:n}={}){let{basename:o}=R.useContext(En),i=R.useContext(On);tt(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),u={...Gi(e||".",{relative:n})},c=Br();if(e==null){u.search=c.search;let d=new URLSearchParams(u.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(y=>y).forEach(y=>d.append("index",y));let g=d.toString();u.search=g?`?${g}`:""}}return(!e||e===".")&&s.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:Vn([o,u.pathname])),Fi(u)}function Ow(e,n={}){let o=R.useContext(zg);tt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Kg("useViewTransitionState"),s=Gi(e,{relative:n.relative});if(!o.isTransitioning)return!1;let u=$n(o.currentLocation.pathname,i)||o.currentLocation.pathname,c=$n(o.nextLocation.pathname,i)||o.nextLocation.pathname;return Cs(s.pathname,c)!=null||Cs(s.pathname,u)!=null}new TextEncoder;var Xu,jh;function Cw(){if(jh)return Xu;jh=1;var e=typeof Element<"u",n=typeof Map=="function",o=typeof Set=="function",i=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function s(u,c){if(u===c)return!0;if(u&&c&&typeof u=="object"&&typeof c=="object"){if(u.constructor!==c.constructor)return!1;var d,p,h;if(Array.isArray(u)){if(d=u.length,d!=c.length)return!1;for(p=d;p--!==0;)if(!s(u[p],c[p]))return!1;return!0}var g;if(n&&u instanceof Map&&c instanceof Map){if(u.size!==c.size)return!1;for(g=u.entries();!(p=g.next()).done;)if(!c.has(p.value[0]))return!1;for(g=u.entries();!(p=g.next()).done;)if(!s(p.value[1],c.get(p.value[0])))return!1;return!0}if(o&&u instanceof Set&&c instanceof Set){if(u.size!==c.size)return!1;for(g=u.entries();!(p=g.next()).done;)if(!c.has(p.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(u)&&ArrayBuffer.isView(c)){if(d=u.length,d!=c.length)return!1;for(p=d;p--!==0;)if(u[p]!==c[p])return!1;return!0}if(u.constructor===RegExp)return u.source===c.source&&u.flags===c.flags;if(u.valueOf!==Object.prototype.valueOf&&typeof u.valueOf=="function"&&typeof c.valueOf=="function")return u.valueOf()===c.valueOf();if(u.toString!==Object.prototype.toString&&typeof u.toString=="function"&&typeof c.toString=="function")return u.toString()===c.toString();if(h=Object.keys(u),d=h.length,d!==Object.keys(c).length)return!1;for(p=d;p--!==0;)if(!Object.prototype.hasOwnProperty.call(c,h[p]))return!1;if(e&&u instanceof Element)return!1;for(p=d;p--!==0;)if(!((h[p]==="_owner"||h[p]==="__v"||h[p]==="__o")&&u.$$typeof)&&!s(u[h[p]],c[h[p]]))return!1;return!0}return u!==u&&c!==c}return Xu=function(c,d){try{return s(c,d)}catch(p){if((p.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw p}},Xu}var Rw=Cw();const Aw=Ro(Rw);var Yu,zh;function _w(){if(zh)return Yu;zh=1;var e=function(n,o,i,s,u,c,d,p){if(!n){var h;if(o===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var g=[i,s,u,c,d,p],y=0;h=new Error(o.replace(/%s/g,function(){return g[y++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}};return Yu=e,Yu}var Dw=_w();const Ih=Ro(Dw);var Qu,Fh;function Mw(){return Fh||(Fh=1,Qu=function(n,o,i,s){var u=i?i.call(s,n,o):void 0;if(u!==void 0)return!!u;if(n===o)return!0;if(typeof n!="object"||!n||typeof o!="object"||!o)return!1;var c=Object.keys(n),d=Object.keys(o);if(c.length!==d.length)return!1;for(var p=Object.prototype.hasOwnProperty.bind(o),h=0;h<c.length;h++){var g=c[h];if(!p(g))return!1;var y=n[g],v=o[g];if(u=i?i.call(s,y,v,g):void 0,u===!1||u===void 0&&y!==v)return!1}return!0}),Qu}var Lw=Mw();const Nw=Ro(Lw);var Gg=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Gg||{}),Ju={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Vh=Object.values(Gg),of={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},jw=Object.entries(of).reduce((e,[n,o])=>(e[o]=n,e),{}),dn="data-rh",ko={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},To=(e,n)=>{for(let o=e.length-1;o>=0;o-=1){const i=e[o];if(Object.prototype.hasOwnProperty.call(i,n))return i[n]}return null},zw=e=>{let n=To(e,"title");const o=To(e,ko.TITLE_TEMPLATE);if(Array.isArray(n)&&(n=n.join("")),o&&n)return o.replace(/%s/g,()=>n);const i=To(e,ko.DEFAULT_TITLE);return n||i||void 0},Iw=e=>To(e,ko.ON_CHANGE_CLIENT_STATE)||(()=>{}),Zu=(e,n)=>n.filter(o=>typeof o[e]<"u").map(o=>o[e]).reduce((o,i)=>({...o,...i}),{}),Fw=(e,n)=>n.filter(o=>typeof o.base<"u").map(o=>o.base).reverse().reduce((o,i)=>{if(!o.length){const s=Object.keys(i);for(let u=0;u<s.length;u+=1){const d=s[u].toLowerCase();if(e.indexOf(d)!==-1&&i[d])return o.concat(i)}}return o},[]),Vw=e=>console&&typeof console.warn=="function"&&console.warn(e),Oi=(e,n,o)=>{const i={};return o.filter(s=>Array.isArray(s[e])?!0:(typeof s[e]<"u"&&Vw(`Helmet: ${e} should be of type "Array". Instead found type "${typeof s[e]}"`),!1)).map(s=>s[e]).reverse().reduce((s,u)=>{const c={};u.filter(p=>{let h;const g=Object.keys(p);for(let v=0;v<g.length;v+=1){const S=g[v],w=S.toLowerCase();n.indexOf(w)!==-1&&!(h==="rel"&&p[h].toLowerCase()==="canonical")&&!(w==="rel"&&p[w].toLowerCase()==="stylesheet")&&(h=w),n.indexOf(S)!==-1&&(S==="innerHTML"||S==="cssText"||S==="itemprop")&&(h=S)}if(!h||!p[h])return!1;const y=p[h].toLowerCase();return i[h]||(i[h]={}),c[h]||(c[h]={}),i[h][y]?!1:(c[h][y]=!0,!0)}).reverse().forEach(p=>s.push(p));const d=Object.keys(c);for(let p=0;p<d.length;p+=1){const h=d[p],g={...i[h],...c[h]};i[h]=g}return s},[]).reverse()},Bw=(e,n)=>{if(Array.isArray(e)&&e.length){for(let o=0;o<e.length;o+=1)if(e[o][n])return!0}return!1},Uw=e=>({baseTag:Fw(["href"],e),bodyAttributes:Zu("bodyAttributes",e),defer:To(e,ko.DEFER),encode:To(e,ko.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Zu("htmlAttributes",e),linkTags:Oi("link",["rel","href"],e),metaTags:Oi("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:Oi("noscript",["innerHTML"],e),onChangeClientState:Iw(e),scriptTags:Oi("script",["src","innerHTML"],e),styleTags:Oi("style",["cssText"],e),title:zw(e),titleAttributes:Zu("titleAttributes",e),prioritizeSeoTags:Bw(e,ko.PRIORITIZE_SEO_TAGS)}),Xg=e=>Array.isArray(e)?e.join(""):e,$w=(e,n)=>{const o=Object.keys(e);for(let i=0;i<o.length;i+=1)if(n[o[i]]&&n[o[i]].includes(e[o[i]]))return!0;return!1},ec=(e,n)=>Array.isArray(e)?e.reduce((o,i)=>($w(i,n)?o.priority.push(i):o.default.push(i),o),{priority:[],default:[]}):{default:e,priority:[]},Bh=(e,n)=>({...e,[n]:void 0}),qw=["noscript","script","style"],Ec=(e,n=!0)=>n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Yg=e=>Object.keys(e).reduce((n,o)=>{const i=typeof e[o]<"u"?`${o}="${e[o]}"`:`${o}`;return n?`${n} ${i}`:i},""),Hw=(e,n,o,i)=>{const s=Yg(o),u=Xg(n);return s?`<${e} ${dn}="true" ${s}>${Ec(u,i)}</${e}>`:`<${e} ${dn}="true">${Ec(u,i)}</${e}>`},Ww=(e,n,o=!0)=>n.reduce((i,s)=>{const u=s,c=Object.keys(u).filter(h=>!(h==="innerHTML"||h==="cssText")).reduce((h,g)=>{const y=typeof u[g]>"u"?g:`${g}="${Ec(u[g],o)}"`;return h?`${h} ${y}`:y},""),d=u.innerHTML||u.cssText||"",p=qw.indexOf(e)===-1;return`${i}<${e} ${dn}="true" ${c}${p?"/>":`>${d}</${e}>`}`},""),Qg=(e,n={})=>Object.keys(e).reduce((o,i)=>{const s=of[i];return o[s||i]=e[i],o},n),Kw=(e,n,o)=>{const i={key:n,[dn]:!0},s=Qg(o,i);return[Ae.createElement("title",s,n)]},xs=(e,n)=>n.map((o,i)=>{const s={key:i,[dn]:!0};return Object.keys(o).forEach(u=>{const d=of[u]||u;if(d==="innerHTML"||d==="cssText"){const p=o.innerHTML||o.cssText;s.dangerouslySetInnerHTML={__html:p}}else s[d]=o[u]}),Ae.createElement(e,s)}),tn=(e,n,o=!0)=>{switch(e){case"title":return{toComponent:()=>Kw(e,n.title,n.titleAttributes),toString:()=>Hw(e,n.title,n.titleAttributes,o)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Qg(n),toString:()=>Yg(n)};default:return{toComponent:()=>xs(e,n),toString:()=>Ww(e,n,o)}}},Gw=({metaTags:e,linkTags:n,scriptTags:o,encode:i})=>{const s=ec(e,Ju.meta),u=ec(n,Ju.link),c=ec(o,Ju.script);return{priorityMethods:{toComponent:()=>[...xs("meta",s.priority),...xs("link",u.priority),...xs("script",c.priority)],toString:()=>`${tn("meta",s.priority,i)} ${tn("link",u.priority,i)} ${tn("script",c.priority,i)}`},metaTags:s.default,linkTags:u.default,scriptTags:c.default}},Xw=e=>{const{baseTag:n,bodyAttributes:o,encode:i=!0,htmlAttributes:s,noscriptTags:u,styleTags:c,title:d="",titleAttributes:p,prioritizeSeoTags:h}=e;let{linkTags:g,metaTags:y,scriptTags:v}=e,S={toComponent:()=>{},toString:()=>""};return h&&({priorityMethods:S,linkTags:g,metaTags:y,scriptTags:v}=Gw(e)),{priority:S,base:tn("base",n,i),bodyAttributes:tn("bodyAttributes",o,i),htmlAttributes:tn("htmlAttributes",s,i),link:tn("link",g,i),meta:tn("meta",y,i),noscript:tn("noscript",u,i),script:tn("script",v,i),style:tn("style",c,i),title:tn("title",{title:d,titleAttributes:p},i)}},Oc=Xw,ds=[],Jg=!!(typeof window<"u"&&window.document&&window.document.createElement),Cc=class{constructor(e,n){zn(this,"instances",[]);zn(this,"canUseDOM",Jg);zn(this,"context");zn(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?ds:this.instances,add:e=>{(this.canUseDOM?ds:this.instances).push(e)},remove:e=>{const n=(this.canUseDOM?ds:this.instances).indexOf(e);(this.canUseDOM?ds:this.instances).splice(n,1)}}});this.context=e,this.canUseDOM=n||!1,n||(e.helmet=Oc({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Yw={},Zg=Ae.createContext(Yw),zr,Qw=(zr=class extends R.Component{constructor(o){super(o);zn(this,"helmetData");this.helmetData=new Cc(this.props.context||{},zr.canUseDOM)}render(){return Ae.createElement(Zg.Provider,{value:this.helmetData.value},this.props.children)}},zn(zr,"canUseDOM",Jg),zr),ho=(e,n)=>{const o=document.head||document.querySelector("head"),i=o.querySelectorAll(`${e}[${dn}]`),s=[].slice.call(i),u=[];let c;return n&&n.length&&n.forEach(d=>{const p=document.createElement(e);for(const h in d)if(Object.prototype.hasOwnProperty.call(d,h))if(h==="innerHTML")p.innerHTML=d.innerHTML;else if(h==="cssText")p.styleSheet?p.styleSheet.cssText=d.cssText:p.appendChild(document.createTextNode(d.cssText));else{const g=h,y=typeof d[g]>"u"?"":d[g];p.setAttribute(h,y)}p.setAttribute(dn,"true"),s.some((h,g)=>(c=g,p.isEqualNode(h)))?s.splice(c,1):u.push(p)}),s.forEach(d=>{var p;return(p=d.parentNode)==null?void 0:p.removeChild(d)}),u.forEach(d=>o.appendChild(d)),{oldTags:s,newTags:u}},Rc=(e,n)=>{const o=document.getElementsByTagName(e)[0];if(!o)return;const i=o.getAttribute(dn),s=i?i.split(","):[],u=[...s],c=Object.keys(n);for(const d of c){const p=n[d]||"";o.getAttribute(d)!==p&&o.setAttribute(d,p),s.indexOf(d)===-1&&s.push(d);const h=u.indexOf(d);h!==-1&&u.splice(h,1)}for(let d=u.length-1;d>=0;d-=1)o.removeAttribute(u[d]);s.length===u.length?o.removeAttribute(dn):o.getAttribute(dn)!==c.join(",")&&o.setAttribute(dn,c.join(","))},Jw=(e,n)=>{typeof e<"u"&&document.title!==e&&(document.title=Xg(e)),Rc("title",n)},Uh=(e,n)=>{const{baseTag:o,bodyAttributes:i,htmlAttributes:s,linkTags:u,metaTags:c,noscriptTags:d,onChangeClientState:p,scriptTags:h,styleTags:g,title:y,titleAttributes:v}=e;Rc("body",i),Rc("html",s),Jw(y,v);const S={baseTag:ho("base",o),linkTags:ho("link",u),metaTags:ho("meta",c),noscriptTags:ho("noscript",d),scriptTags:ho("script",h),styleTags:ho("style",g)},w={},x={};Object.keys(S).forEach(P=>{const{newTags:E,oldTags:L}=S[P];E.length&&(w[P]=E),L.length&&(x[P]=S[P].oldTags)}),n&&n(),p(e,w,x)},Ci=null,Zw=e=>{Ci&&cancelAnimationFrame(Ci),e.defer?Ci=requestAnimationFrame(()=>{Uh(e,()=>{Ci=null})}):(Uh(e),Ci=null)},ex=Zw,$h=class extends R.Component{constructor(){super(...arguments);zn(this,"rendered",!1)}shouldComponentUpdate(n){return!Nw(n,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:n}=this.props.context;n.remove(this),this.emitChange()}emitChange(){const{helmetInstances:n,setHelmet:o}=this.props.context;let i=null;const s=Uw(n.get().map(u=>{const c={...u.props};return delete c.context,c}));Qw.canUseDOM?ex(s):Oc&&(i=Oc(s)),o(i)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:n}=this.props.context;n.add(this),this.emitChange()}render(){return this.init(),null}},Pc,BO=(Pc=class extends R.Component{shouldComponentUpdate(e){return!Aw(Bh(this.props,"helmetData"),Bh(e,"helmetData"))}mapNestedChildrenToProps(e,n){if(!n)return null;switch(e.type){case"script":case"noscript":return{innerHTML:n};case"style":return{cssText:n};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,n,o,i){return{...n,[e.type]:[...n[e.type]||[],{...o,...this.mapNestedChildrenToProps(e,i)}]}}mapObjectTypeChildren(e,n,o,i){switch(e.type){case"title":return{...n,[e.type]:i,titleAttributes:{...o}};case"body":return{...n,bodyAttributes:{...o}};case"html":return{...n,htmlAttributes:{...o}};default:return{...n,[e.type]:{...o}}}}mapArrayTypeChildrenToProps(e,n){let o={...n};return Object.keys(e).forEach(i=>{o={...o,[i]:e[i]}}),o}warnOnInvalidChildren(e,n){return Ih(Vh.some(o=>e.type===o),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Vh.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Ih(!n||typeof n=="string"||Array.isArray(n)&&!n.some(o=>typeof o!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,n){let o={};return Ae.Children.forEach(e,i=>{if(!i||!i.props)return;const{children:s,...u}=i.props,c=Object.keys(u).reduce((p,h)=>(p[jw[h]||h]=u[h],p),{});let{type:d}=i;switch(typeof d=="symbol"?d=d.toString():this.warnOnInvalidChildren(i,s),d){case"Symbol(react.fragment)":n=this.mapChildrenToProps(s,n);break;case"link":case"meta":case"noscript":case"script":case"style":o=this.flattenArrayTypeChildren(i,o,c,s);break;default:n=this.mapObjectTypeChildren(i,n,c,s);break}}),this.mapArrayTypeChildrenToProps(o,n)}render(){const{children:e,...n}=this.props;let o={...n},{helmetData:i}=n;if(e&&(o=this.mapChildrenToProps(e,o)),i&&!(i instanceof Cc)){const s=i;i=new Cc(s.context,!0),delete o.helmetData}return i?Ae.createElement($h,{...o,context:i.value}):Ae.createElement(Zg.Consumer,null,s=>Ae.createElement($h,{...o,context:s}))}},zn(Pc,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Pc);const af=R.createContext({});function sf(e){const n=R.useRef(null);return n.current===null&&(n.current=e()),n.current}const Us=R.createContext(null),lf=R.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class tx extends R.Component{getSnapshotBeforeUpdate(n){const o=this.props.childRef.current;if(o&&n.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=o.offsetHeight||0,i.width=o.offsetWidth||0,i.top=o.offsetTop,i.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function nx({children:e,isPresent:n}){const o=R.useId(),i=R.useRef(null),s=R.useRef({width:0,height:0,top:0,left:0}),{nonce:u}=R.useContext(lf);return R.useInsertionEffect(()=>{const{width:c,height:d,top:p,left:h}=s.current;if(n||!i.current||!c||!d)return;i.current.dataset.motionPopId=o;const g=document.createElement("style");return u&&(g.nonce=u),document.head.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            top: ${p}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(g)}},[n]),Fn.jsx(tx,{isPresent:n,childRef:i,sizeRef:s,children:R.cloneElement(e,{ref:i})})}const rx=({children:e,initial:n,isPresent:o,onExitComplete:i,custom:s,presenceAffectsLayout:u,mode:c})=>{const d=sf(ox),p=R.useId(),h=R.useCallback(y=>{d.set(y,!0);for(const v of d.values())if(!v)return;i&&i()},[d,i]),g=R.useMemo(()=>({id:p,initial:n,isPresent:o,custom:s,onExitComplete:h,register:y=>(d.set(y,!1),()=>d.delete(y))}),u?[Math.random(),h]:[o,h]);return R.useMemo(()=>{d.forEach((y,v)=>d.set(v,!1))},[o]),R.useEffect(()=>{!o&&!d.size&&i&&i()},[o]),c==="popLayout"&&(e=Fn.jsx(nx,{isPresent:o,children:e})),Fn.jsx(Us.Provider,{value:g,children:e})};function ox(){return new Map}function ey(e=!0){const n=R.useContext(Us);if(n===null)return[!0,null];const{isPresent:o,onExitComplete:i,register:s}=n,u=R.useId();R.useEffect(()=>{e&&s(u)},[e]);const c=R.useCallback(()=>e&&i&&i(u),[u,i,e]);return!o&&i?[!1,c]:[!0]}const ps=e=>e.key||"";function qh(e){const n=[];return R.Children.forEach(e,o=>{R.isValidElement(o)&&n.push(o)}),n}const uf=typeof window<"u",ty=uf?R.useLayoutEffect:R.useEffect,UO=({children:e,custom:n,initial:o=!0,onExitComplete:i,presenceAffectsLayout:s=!0,mode:u="sync",propagate:c=!1})=>{const[d,p]=ey(c),h=R.useMemo(()=>qh(e),[e]),g=c&&!d?[]:h.map(ps),y=R.useRef(!0),v=R.useRef(h),S=sf(()=>new Map),[w,x]=R.useState(h),[P,E]=R.useState(h);ty(()=>{y.current=!1,v.current=h;for(let X=0;X<P.length;X++){const F=ps(P[X]);g.includes(F)?S.delete(F):S.get(F)!==!0&&S.set(F,!1)}},[P,g.length,g.join("-")]);const L=[];if(h!==w){let X=[...h];for(let F=0;F<P.length;F++){const ee=P[F],ae=ps(ee);g.includes(ae)||(X.splice(F,0,ee),L.push(ee))}u==="wait"&&L.length&&(X=L),E(qh(X)),x(h);return}const{forceRender:_}=R.useContext(af);return Fn.jsx(Fn.Fragment,{children:P.map(X=>{const F=ps(X),ee=c&&!d?!1:h===P||g.includes(F),ae=()=>{if(S.has(F))S.set(F,!0);else return;let K=!0;S.forEach(J=>{J||(K=!1)}),K&&(_==null||_(),E(v.current),c&&(p==null||p()),i&&i())};return Fn.jsx(rx,{isPresent:ee,initial:!y.current||o?void 0:!1,custom:ee?void 0:n,presenceAffectsLayout:s,mode:u,onExitComplete:ee?void 0:ae,children:X},F)})})},qt=e=>e;let ny=qt;function cf(e){let n;return()=>(n===void 0&&(n=e()),n)}const Eo=(e,n,o)=>{const i=n-e;return i===0?1:(o-e)/i},Bn=e=>e*1e3,Un=e=>e/1e3,ix={useManualTiming:!1};function ax(e){let n=new Set,o=new Set,i=!1,s=!1;const u=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function d(h){u.has(h)&&(p.schedule(h),e()),h(c)}const p={schedule:(h,g=!1,y=!1)=>{const S=y&&i?n:o;return g&&u.add(h),S.has(h)||S.add(h),h},cancel:h=>{o.delete(h),u.delete(h)},process:h=>{if(c=h,i){s=!0;return}i=!0,[n,o]=[o,n],n.forEach(d),n.clear(),i=!1,s&&(s=!1,p.process(h))}};return p}const hs=["read","resolveKeyframes","update","preRender","render","postRender"],sx=40;function ry(e,n){let o=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},u=()=>o=!0,c=hs.reduce((E,L)=>(E[L]=ax(u),E),{}),{read:d,resolveKeyframes:p,update:h,preRender:g,render:y,postRender:v}=c,S=()=>{const E=performance.now();o=!1,s.delta=i?1e3/60:Math.max(Math.min(E-s.timestamp,sx),1),s.timestamp=E,s.isProcessing=!0,d.process(s),p.process(s),h.process(s),g.process(s),y.process(s),v.process(s),s.isProcessing=!1,o&&n&&(i=!1,e(S))},w=()=>{o=!0,i=!0,s.isProcessing||e(S)};return{schedule:hs.reduce((E,L)=>{const _=c[L];return E[L]=(X,F=!1,ee=!1)=>(o||w(),_.schedule(X,F,ee)),E},{}),cancel:E=>{for(let L=0;L<hs.length;L++)c[hs[L]].cancel(E)},state:s,steps:c}}const{schedule:Ge,cancel:hr,state:xt,steps:tc}=ry(typeof requestAnimationFrame<"u"?requestAnimationFrame:qt,!0),oy=R.createContext({strict:!1}),Hh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Oo={};for(const e in Hh)Oo[e]={isEnabled:n=>Hh[e].some(o=>!!n[o])};function lx(e){for(const n in e)Oo[n]={...Oo[n],...e[n]}}const ux=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Rs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ux.has(e)}let iy=e=>!Rs(e);function cx(e){e&&(iy=n=>n.startsWith("on")?!Rs(n):e(n))}try{cx(require("@emotion/is-prop-valid").default)}catch{}function fx(e,n,o){const i={};for(const s in e)s==="values"&&typeof e.values=="object"||(iy(s)||o===!0&&Rs(s)||!n&&!Rs(s)||e.draggable&&s.startsWith("onDrag"))&&(i[s]=e[s]);return i}function dx(e){if(typeof Proxy>"u")return e;const n=new Map,o=(...i)=>e(...i);return new Proxy(o,{get:(i,s)=>s==="create"?e:(n.has(s)||n.set(s,e(s)),n.get(s))})}const $s=R.createContext({});function Vi(e){return typeof e=="string"||Array.isArray(e)}function qs(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const ff=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],df=["initial",...ff];function Hs(e){return qs(e.animate)||df.some(n=>Vi(e[n]))}function ay(e){return!!(Hs(e)||e.variants)}function px(e,n){if(Hs(e)){const{initial:o,animate:i}=e;return{initial:o===!1||Vi(o)?o:void 0,animate:Vi(i)?i:void 0}}return e.inherit!==!1?n:{}}function hx(e){const{initial:n,animate:o}=px(e,R.useContext($s));return R.useMemo(()=>({initial:n,animate:o}),[Wh(n),Wh(o)])}function Wh(e){return Array.isArray(e)?e.join(" "):e}const mx=Symbol.for("motionComponentSymbol");function bo(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function gx(e,n,o){return R.useCallback(i=>{i&&e.onMount&&e.onMount(i),n&&(i?n.mount(i):n.unmount()),o&&(typeof o=="function"?o(i):bo(o)&&(o.current=i))},[n])}const pf=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),yx="framerAppearId",sy="data-"+pf(yx),{schedule:hf}=ry(queueMicrotask,!1),ly=R.createContext({});function vx(e,n,o,i,s){var u,c;const{visualElement:d}=R.useContext($s),p=R.useContext(oy),h=R.useContext(Us),g=R.useContext(lf).reducedMotion,y=R.useRef(null);i=i||p.renderer,!y.current&&i&&(y.current=i(e,{visualState:n,parent:d,props:o,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:g}));const v=y.current,S=R.useContext(ly);v&&!v.projection&&s&&(v.type==="html"||v.type==="svg")&&bx(y.current,o,s,S);const w=R.useRef(!1);R.useInsertionEffect(()=>{v&&w.current&&v.update(o,h)});const x=o[sy],P=R.useRef(!!x&&!(!((u=window.MotionHandoffIsComplete)===null||u===void 0)&&u.call(window,x))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,x)));return ty(()=>{v&&(w.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),hf.render(v.render),P.current&&v.animationState&&v.animationState.animateChanges())}),R.useEffect(()=>{v&&(!P.current&&v.animationState&&v.animationState.animateChanges(),P.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)===null||E===void 0||E.call(window,x)}),P.current=!1))}),v}function bx(e,n,o,i){const{layoutId:s,layout:u,drag:c,dragConstraints:d,layoutScroll:p,layoutRoot:h}=n;e.projection=new o(e.latestValues,n["data-framer-portal-id"]?void 0:uy(e.parent)),e.projection.setOptions({layoutId:s,layout:u,alwaysMeasureLayout:!!c||d&&bo(d),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:p,layoutRoot:h})}function uy(e){if(e)return e.options.allowProjection!==!1?e.projection:uy(e.parent)}function wx({preloadedFeatures:e,createVisualElement:n,useRender:o,useVisualState:i,Component:s}){var u,c;e&&lx(e);function d(h,g){let y;const v={...R.useContext(lf),...h,layoutId:xx(h)},{isStatic:S}=v,w=hx(h),x=i(h,S);if(!S&&uf){Sx();const P=Px(v);y=P.MeasureLayout,w.visualElement=vx(s,x,v,n,P.ProjectionNode)}return Fn.jsxs($s.Provider,{value:w,children:[y&&w.visualElement?Fn.jsx(y,{visualElement:w.visualElement,...v}):null,o(s,h,gx(x,w.visualElement,g),x,S,w.visualElement)]})}d.displayName=`motion.${typeof s=="string"?s:`create(${(c=(u=s.displayName)!==null&&u!==void 0?u:s.name)!==null&&c!==void 0?c:""})`}`;const p=R.forwardRef(d);return p[mx]=s,p}function xx({layoutId:e}){const n=R.useContext(af).id;return n&&e!==void 0?n+"-"+e:e}function Sx(e,n){R.useContext(oy).strict}function Px(e){const{drag:n,layout:o}=Oo;if(!n&&!o)return{};const i={...n,...o};return{MeasureLayout:n!=null&&n.isEnabled(e)||o!=null&&o.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const kx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function mf(e){return typeof e!="string"||e.includes("-")?!1:!!(kx.indexOf(e)>-1||/[A-Z]/u.test(e))}function Kh(e){const n=[{},{}];return e==null||e.values.forEach((o,i)=>{n[0][i]=o.get(),n[1][i]=o.getVelocity()}),n}function gf(e,n,o,i){if(typeof n=="function"){const[s,u]=Kh(i);n=n(o!==void 0?o:e.custom,s,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[s,u]=Kh(i);n=n(o!==void 0?o:e.custom,s,u)}return n}const Ac=e=>Array.isArray(e),Tx=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Ex=e=>Ac(e)?e[e.length-1]||0:e,Ct=e=>!!(e&&e.getVelocity);function Ss(e){const n=Ct(e)?e.get():e;return Tx(n)?n.toValue():n}function Ox({scrapeMotionValuesFromProps:e,createRenderState:n,onUpdate:o},i,s,u){const c={latestValues:Cx(i,s,u,e),renderState:n()};return o&&(c.onMount=d=>o({props:i,current:d,...c}),c.onUpdate=d=>o(d)),c}const cy=e=>(n,o)=>{const i=R.useContext($s),s=R.useContext(Us),u=()=>Ox(e,n,i,s);return o?u():sf(u)};function Cx(e,n,o,i){const s={},u=i(e,{});for(const v in u)s[v]=Ss(u[v]);let{initial:c,animate:d}=e;const p=Hs(e),h=ay(e);n&&h&&!p&&e.inherit!==!1&&(c===void 0&&(c=n.initial),d===void 0&&(d=n.animate));let g=o?o.initial===!1:!1;g=g||c===!1;const y=g?d:c;if(y&&typeof y!="boolean"&&!qs(y)){const v=Array.isArray(y)?y:[y];for(let S=0;S<v.length;S++){const w=gf(e,v[S]);if(w){const{transitionEnd:x,transition:P,...E}=w;for(const L in E){let _=E[L];if(Array.isArray(_)){const X=g?_.length-1:0;_=_[X]}_!==null&&(s[L]=_)}for(const L in x)s[L]=x[L]}}}return s}const Do=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ur=new Set(Do),fy=e=>n=>typeof n=="string"&&n.startsWith(e),dy=fy("--"),Rx=fy("var(--"),yf=e=>Rx(e)?Ax.test(e.split("/*")[0].trim()):!1,Ax=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,py=(e,n)=>n&&typeof e=="number"?n.transform(e):e,qn=(e,n,o)=>o>n?n:o<e?e:o,Mo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Bi={...Mo,transform:e=>qn(0,1,e)},ms={...Mo,default:1},Xi=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),pr=Xi("deg"),Pn=Xi("%"),we=Xi("px"),_x=Xi("vh"),Dx=Xi("vw"),Gh={...Pn,parse:e=>Pn.parse(e)/100,transform:e=>Pn.transform(e*100)},Mx={borderWidth:we,borderTopWidth:we,borderRightWidth:we,borderBottomWidth:we,borderLeftWidth:we,borderRadius:we,radius:we,borderTopLeftRadius:we,borderTopRightRadius:we,borderBottomRightRadius:we,borderBottomLeftRadius:we,width:we,maxWidth:we,height:we,maxHeight:we,top:we,right:we,bottom:we,left:we,padding:we,paddingTop:we,paddingRight:we,paddingBottom:we,paddingLeft:we,margin:we,marginTop:we,marginRight:we,marginBottom:we,marginLeft:we,backgroundPositionX:we,backgroundPositionY:we},Lx={rotate:pr,rotateX:pr,rotateY:pr,rotateZ:pr,scale:ms,scaleX:ms,scaleY:ms,scaleZ:ms,skew:pr,skewX:pr,skewY:pr,distance:we,translateX:we,translateY:we,translateZ:we,x:we,y:we,z:we,perspective:we,transformPerspective:we,opacity:Bi,originX:Gh,originY:Gh,originZ:we},Xh={...Mo,transform:Math.round},vf={...Mx,...Lx,zIndex:Xh,size:we,fillOpacity:Bi,strokeOpacity:Bi,numOctaves:Xh},Nx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},jx=Do.length;function zx(e,n,o){let i="",s=!0;for(let u=0;u<jx;u++){const c=Do[u],d=e[c];if(d===void 0)continue;let p=!0;if(typeof d=="number"?p=d===(c.startsWith("scale")?1:0):p=parseFloat(d)===0,!p||o){const h=py(d,vf[c]);if(!p){s=!1;const g=Nx[c]||c;i+=`${g}(${h}) `}o&&(n[c]=h)}}return i=i.trim(),o?i=o(n,s?"":i):s&&(i="none"),i}function bf(e,n,o){const{style:i,vars:s,transformOrigin:u}=e;let c=!1,d=!1;for(const p in n){const h=n[p];if(Ur.has(p)){c=!0;continue}else if(dy(p)){s[p]=h;continue}else{const g=py(h,vf[p]);p.startsWith("origin")?(d=!0,u[p]=g):i[p]=g}}if(n.transform||(c||o?i.transform=zx(n,e.transform,o):i.transform&&(i.transform="none")),d){const{originX:p="50%",originY:h="50%",originZ:g=0}=u;i.transformOrigin=`${p} ${h} ${g}`}}const Ix={offset:"stroke-dashoffset",array:"stroke-dasharray"},Fx={offset:"strokeDashoffset",array:"strokeDasharray"};function Vx(e,n,o=1,i=0,s=!0){e.pathLength=1;const u=s?Ix:Fx;e[u.offset]=we.transform(-i);const c=we.transform(n),d=we.transform(o);e[u.array]=`${c} ${d}`}function Yh(e,n,o){return typeof e=="string"?e:we.transform(n+o*e)}function Bx(e,n,o){const i=Yh(n,e.x,e.width),s=Yh(o,e.y,e.height);return`${i} ${s}`}function wf(e,{attrX:n,attrY:o,attrScale:i,originX:s,originY:u,pathLength:c,pathSpacing:d=1,pathOffset:p=0,...h},g,y){if(bf(e,h,y),g){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:v,style:S,dimensions:w}=e;v.transform&&(w&&(S.transform=v.transform),delete v.transform),w&&(s!==void 0||u!==void 0||S.transform)&&(S.transformOrigin=Bx(w,s!==void 0?s:.5,u!==void 0?u:.5)),n!==void 0&&(v.x=n),o!==void 0&&(v.y=o),i!==void 0&&(v.scale=i),c!==void 0&&Vx(v,c,d,p,!1)}const xf=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),hy=()=>({...xf(),attrs:{}}),Sf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function my(e,{style:n,vars:o},i,s){Object.assign(e.style,n,s&&s.getProjectionStyles(i));for(const u in o)e.style.setProperty(u,o[u])}const gy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function yy(e,n,o,i){my(e,n,void 0,i);for(const s in n.attrs)e.setAttribute(gy.has(s)?s:pf(s),n.attrs[s])}const As={};function Ux(e){Object.assign(As,e)}function vy(e,{layout:n,layoutId:o}){return Ur.has(e)||e.startsWith("origin")||(n||o!==void 0)&&(!!As[e]||e==="opacity")}function Pf(e,n,o){var i;const{style:s}=e,u={};for(const c in s)(Ct(s[c])||n.style&&Ct(n.style[c])||vy(c,e)||((i=o==null?void 0:o.getValue(c))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(u[c]=s[c]);return u}function by(e,n,o){const i=Pf(e,n,o);for(const s in e)if(Ct(e[s])||Ct(n[s])){const u=Do.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[u]=e[s]}return i}function $x(e,n){try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}const Qh=["x","y","width","height","cx","cy","r"],qx={useVisualState:cy({scrapeMotionValuesFromProps:by,createRenderState:hy,onUpdate:({props:e,prevProps:n,current:o,renderState:i,latestValues:s})=>{if(!o)return;let u=!!e.drag;if(!u){for(const d in s)if(Ur.has(d)){u=!0;break}}if(!u)return;let c=!n;if(n)for(let d=0;d<Qh.length;d++){const p=Qh[d];e[p]!==n[p]&&(c=!0)}c&&Ge.read(()=>{$x(o,i),Ge.render(()=>{wf(i,s,Sf(o.tagName),e.transformTemplate),yy(o,i)})})}})},Hx={useVisualState:cy({scrapeMotionValuesFromProps:Pf,createRenderState:xf})};function wy(e,n,o){for(const i in n)!Ct(n[i])&&!vy(i,o)&&(e[i]=n[i])}function Wx({transformTemplate:e},n){return R.useMemo(()=>{const o=xf();return bf(o,n,e),Object.assign({},o.vars,o.style)},[n])}function Kx(e,n){const o=e.style||{},i={};return wy(i,o,e),Object.assign(i,Wx(e,n)),i}function Gx(e,n){const o={},i=Kx(e,n);return e.drag&&e.dragListener!==!1&&(o.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(o.tabIndex=0),o.style=i,o}function Xx(e,n,o,i){const s=R.useMemo(()=>{const u=hy();return wf(u,n,Sf(i),e.transformTemplate),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};wy(u,e.style,e),s.style={...u,...s.style}}return s}function Yx(e=!1){return(o,i,s,{latestValues:u},c)=>{const p=(mf(o)?Xx:Gx)(i,u,c,o),h=fx(i,typeof o=="string",e),g=o!==R.Fragment?{...h,...p,ref:s}:{},{children:y}=i,v=R.useMemo(()=>Ct(y)?y.get():y,[y]);return R.createElement(o,{...g,children:v})}}function Qx(e,n){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const c={...mf(i)?qx:Hx,preloadedFeatures:e,useRender:Yx(s),createVisualElement:n,Component:i};return wx(c)}}function xy(e,n){if(!Array.isArray(n))return!1;const o=n.length;if(o!==e.length)return!1;for(let i=0;i<o;i++)if(n[i]!==e[i])return!1;return!0}function Ws(e,n,o){const i=e.getProps();return gf(i,n,o!==void 0?o:i.custom,e)}const Jx=cf(()=>window.ScrollTimeline!==void 0);class Zx{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>"finished"in n?n.finished:n))}getAll(n){return this.animations[0][n]}setAll(n,o){for(let i=0;i<this.animations.length;i++)this.animations[i][n]=o}attachTimeline(n,o){const i=this.animations.map(s=>{if(Jx()&&s.attachTimeline)return s.attachTimeline(n);if(typeof o=="function")return o(s)});return()=>{i.forEach((s,u)=>{s&&s(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get startTime(){return this.getAll("startTime")}get duration(){let n=0;for(let o=0;o<this.animations.length;o++)n=Math.max(n,this.animations[o].duration);return n}runAll(n){this.animations.forEach(o=>o[n]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class eS extends Zx{then(n,o){return Promise.all(this.animations).then(n).catch(o)}}function kf(e,n){return e?e[n]||e.default||e:void 0}const _c=2e4;function Sy(e){let n=0;const o=50;let i=e.next(n);for(;!i.done&&n<_c;)n+=o,i=e.next(n);return n>=_c?1/0:n}function Tf(e){return typeof e=="function"}function Jh(e,n){e.timeline=n,e.onfinish=null}const Ef=e=>Array.isArray(e)&&typeof e[0]=="number",tS={linearEasing:void 0};function nS(e,n){const o=cf(e);return()=>{var i;return(i=tS[n])!==null&&i!==void 0?i:o()}}const _s=nS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Py=(e,n,o=10)=>{let i="";const s=Math.max(Math.round(n/o),2);for(let u=0;u<s;u++)i+=e(Eo(0,s-1,u))+", ";return`linear(${i.substring(0,i.length-2)})`};function ky(e){return!!(typeof e=="function"&&_s()||!e||typeof e=="string"&&(e in Dc||_s())||Ef(e)||Array.isArray(e)&&e.every(ky))}const _i=([e,n,o,i])=>`cubic-bezier(${e}, ${n}, ${o}, ${i})`,Dc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_i([0,.65,.55,1]),circOut:_i([.55,0,1,.45]),backIn:_i([.31,.01,.66,-.59]),backOut:_i([.33,1.53,.69,.99])};function Ty(e,n){if(e)return typeof e=="function"&&_s()?Py(e,n):Ef(e)?_i(e):Array.isArray(e)?e.map(o=>Ty(o,n)||Dc.easeOut):Dc[e]}const fn={x:!1,y:!1};function Ey(){return fn.x||fn.y}function rS(e,n,o){var i;if(e instanceof Element)return[e];if(typeof e=="string"){let s=document;const u=(i=void 0)!==null&&i!==void 0?i:s.querySelectorAll(e);return u?Array.from(u):[]}return Array.from(e)}function Oy(e,n){const o=rS(e),i=new AbortController,s={passive:!0,...n,signal:i.signal};return[o,s,()=>i.abort()]}function Zh(e){return n=>{n.pointerType==="touch"||Ey()||e(n)}}function oS(e,n,o={}){const[i,s,u]=Oy(e,o),c=Zh(d=>{const{target:p}=d,h=n(d);if(typeof h!="function"||!p)return;const g=Zh(y=>{h(y),p.removeEventListener("pointerleave",g)});p.addEventListener("pointerleave",g,s)});return i.forEach(d=>{d.addEventListener("pointerenter",c,s)}),u}const Cy=(e,n)=>n?e===n?!0:Cy(e,n.parentElement):!1,Of=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,iS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function aS(e){return iS.has(e.tagName)||e.tabIndex!==-1}const Di=new WeakSet;function em(e){return n=>{n.key==="Enter"&&e(n)}}function nc(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const sS=(e,n)=>{const o=e.currentTarget;if(!o)return;const i=em(()=>{if(Di.has(o))return;nc(o,"down");const s=em(()=>{nc(o,"up")}),u=()=>nc(o,"cancel");o.addEventListener("keyup",s,n),o.addEventListener("blur",u,n)});o.addEventListener("keydown",i,n),o.addEventListener("blur",()=>o.removeEventListener("keydown",i),n)};function tm(e){return Of(e)&&!Ey()}function lS(e,n,o={}){const[i,s,u]=Oy(e,o),c=d=>{const p=d.currentTarget;if(!tm(d)||Di.has(p))return;Di.add(p);const h=n(d),g=(S,w)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",v),!(!tm(S)||!Di.has(p))&&(Di.delete(p),typeof h=="function"&&h(S,{success:w}))},y=S=>{g(S,o.useGlobalTarget||Cy(p,S.target))},v=S=>{g(S,!1)};window.addEventListener("pointerup",y,s),window.addEventListener("pointercancel",v,s)};return i.forEach(d=>{!aS(d)&&d.getAttribute("tabindex")===null&&(d.tabIndex=0),(o.useGlobalTarget?window:d).addEventListener("pointerdown",c,s),d.addEventListener("focus",h=>sS(h,s),s)}),u}function uS(e){return e==="x"||e==="y"?fn[e]?null:(fn[e]=!0,()=>{fn[e]=!1}):fn.x||fn.y?null:(fn.x=fn.y=!0,()=>{fn.x=fn.y=!1})}const Ry=new Set(["width","height","top","left","right","bottom",...Do]);let Ps;function cS(){Ps=void 0}const kn={now:()=>(Ps===void 0&&kn.set(xt.isProcessing||ix.useManualTiming?xt.timestamp:performance.now()),Ps),set:e=>{Ps=e,queueMicrotask(cS)}};function Cf(e,n){e.indexOf(n)===-1&&e.push(n)}function Rf(e,n){const o=e.indexOf(n);o>-1&&e.splice(o,1)}class Af{constructor(){this.subscriptions=[]}add(n){return Cf(this.subscriptions,n),()=>Rf(this.subscriptions,n)}notify(n,o,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](n,o,i);else for(let u=0;u<s;u++){const c=this.subscriptions[u];c&&c(n,o,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Ay(e,n){return n?e*(1e3/n):0}const nm=30,fS=e=>!isNaN(parseFloat(e));class dS{constructor(n,o={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{const u=kn.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(n),this.owner=o.owner}setCurrent(n){this.current=n,this.updatedAt=kn.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=fS(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,o){this.events[n]||(this.events[n]=new Af);const i=this.events[n].add(o);return n==="change"?()=>{i(),Ge.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,o){this.passiveEffect=n,this.stopPassiveEffect=o}set(n,o=!0){!o||!this.passiveEffect?this.updateAndNotify(n,o):this.passiveEffect(n,this.updateAndNotify)}setWithVelocity(n,o,i){this.set(o),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-i}jump(n,o=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=kn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>nm)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,nm);return Ay(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(n){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=n(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ui(e,n){return new dS(e,n)}function pS(e,n,o){e.hasValue(n)?e.getValue(n).set(o):e.addValue(n,Ui(o))}function hS(e,n){const o=Ws(e,n);let{transitionEnd:i={},transition:s={},...u}=o||{};u={...u,...i};for(const c in u){const d=Ex(u[c]);pS(e,c,d)}}function mS(e){return!!(Ct(e)&&e.add)}function Mc(e,n){const o=e.getValue("willChange");if(mS(o))return o.add(n)}function _y(e){return e.props[sy]}const Dy=(e,n,o)=>(((1-3*o+3*n)*e+(3*o-6*n))*e+3*n)*e,gS=1e-7,yS=12;function vS(e,n,o,i,s){let u,c,d=0;do c=n+(o-n)/2,u=Dy(c,i,s)-e,u>0?o=c:n=c;while(Math.abs(u)>gS&&++d<yS);return c}function Yi(e,n,o,i){if(e===n&&o===i)return qt;const s=u=>vS(u,0,1,e,o);return u=>u===0||u===1?u:Dy(s(u),n,i)}const My=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,Ly=e=>n=>1-e(1-n),Ny=Yi(.33,1.53,.69,.99),_f=Ly(Ny),jy=My(_f),zy=e=>(e*=2)<1?.5*_f(e):.5*(2-Math.pow(2,-10*(e-1))),Df=e=>1-Math.sin(Math.acos(e)),Iy=Ly(Df),Fy=My(Df),Vy=e=>/^0[^.\s]+$/u.test(e);function bS(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Vy(e):!0}const Ni=e=>Math.round(e*1e5)/1e5,Mf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function wS(e){return e==null}const xS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Lf=(e,n)=>o=>!!(typeof o=="string"&&xS.test(o)&&o.startsWith(e)||n&&!wS(o)&&Object.prototype.hasOwnProperty.call(o,n)),By=(e,n,o)=>i=>{if(typeof i!="string")return i;const[s,u,c,d]=i.match(Mf);return{[e]:parseFloat(s),[n]:parseFloat(u),[o]:parseFloat(c),alpha:d!==void 0?parseFloat(d):1}},SS=e=>qn(0,255,e),rc={...Mo,transform:e=>Math.round(SS(e))},Nr={test:Lf("rgb","red"),parse:By("red","green","blue"),transform:({red:e,green:n,blue:o,alpha:i=1})=>"rgba("+rc.transform(e)+", "+rc.transform(n)+", "+rc.transform(o)+", "+Ni(Bi.transform(i))+")"};function PS(e){let n="",o="",i="",s="";return e.length>5?(n=e.substring(1,3),o=e.substring(3,5),i=e.substring(5,7),s=e.substring(7,9)):(n=e.substring(1,2),o=e.substring(2,3),i=e.substring(3,4),s=e.substring(4,5),n+=n,o+=o,i+=i,s+=s),{red:parseInt(n,16),green:parseInt(o,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Lc={test:Lf("#"),parse:PS,transform:Nr.transform},wo={test:Lf("hsl","hue"),parse:By("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:o,alpha:i=1})=>"hsla("+Math.round(e)+", "+Pn.transform(Ni(n))+", "+Pn.transform(Ni(o))+", "+Ni(Bi.transform(i))+")"},Et={test:e=>Nr.test(e)||Lc.test(e)||wo.test(e),parse:e=>Nr.test(e)?Nr.parse(e):wo.test(e)?wo.parse(e):Lc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Nr.transform(e):wo.transform(e)},kS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function TS(e){var n,o;return isNaN(e)&&typeof e=="string"&&(((n=e.match(Mf))===null||n===void 0?void 0:n.length)||0)+(((o=e.match(kS))===null||o===void 0?void 0:o.length)||0)>0}const Uy="number",$y="color",ES="var",OS="var(",rm="${}",CS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $i(e){const n=e.toString(),o=[],i={color:[],number:[],var:[]},s=[];let u=0;const d=n.replace(CS,p=>(Et.test(p)?(i.color.push(u),s.push($y),o.push(Et.parse(p))):p.startsWith(OS)?(i.var.push(u),s.push(ES),o.push(p)):(i.number.push(u),s.push(Uy),o.push(parseFloat(p))),++u,rm)).split(rm);return{values:o,split:d,indexes:i,types:s}}function qy(e){return $i(e).values}function Hy(e){const{split:n,types:o}=$i(e),i=n.length;return s=>{let u="";for(let c=0;c<i;c++)if(u+=n[c],s[c]!==void 0){const d=o[c];d===Uy?u+=Ni(s[c]):d===$y?u+=Et.transform(s[c]):u+=s[c]}return u}}const RS=e=>typeof e=="number"?0:e;function AS(e){const n=qy(e);return Hy(e)(n.map(RS))}const mr={test:TS,parse:qy,createTransformer:Hy,getAnimatableNone:AS},_S=new Set(["brightness","contrast","saturate","opacity"]);function DS(e){const[n,o]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[i]=o.match(Mf)||[];if(!i)return e;const s=o.replace(i,"");let u=_S.has(n)?1:0;return i!==o&&(u*=100),n+"("+u+s+")"}const MS=/\b([a-z-]*)\(.*?\)/gu,Nc={...mr,getAnimatableNone:e=>{const n=e.match(MS);return n?n.map(DS).join(" "):e}},LS={...vf,color:Et,backgroundColor:Et,outlineColor:Et,fill:Et,stroke:Et,borderColor:Et,borderTopColor:Et,borderRightColor:Et,borderBottomColor:Et,borderLeftColor:Et,filter:Nc,WebkitFilter:Nc},Nf=e=>LS[e];function Wy(e,n){let o=Nf(e);return o!==Nc&&(o=mr),o.getAnimatableNone?o.getAnimatableNone(n):void 0}const NS=new Set(["auto","none","0"]);function jS(e,n,o){let i=0,s;for(;i<e.length&&!s;){const u=e[i];typeof u=="string"&&!NS.has(u)&&$i(u).values.length&&(s=e[i]),i++}if(s&&o)for(const u of n)e[u]=Wy(o,s)}const om=e=>e===Mo||e===we,im=(e,n)=>parseFloat(e.split(", ")[n]),am=(e,n)=>(o,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return im(s[1],n);{const u=i.match(/^matrix\((.+)\)$/u);return u?im(u[1],e):0}},zS=new Set(["x","y","z"]),IS=Do.filter(e=>!zS.has(e));function FS(e){const n=[];return IS.forEach(o=>{const i=e.getValue(o);i!==void 0&&(n.push([o,i.get()]),i.set(o.startsWith("scale")?1:0))}),n}const Co={width:({x:e},{paddingLeft:n="0",paddingRight:o="0"})=>e.max-e.min-parseFloat(n)-parseFloat(o),height:({y:e},{paddingTop:n="0",paddingBottom:o="0"})=>e.max-e.min-parseFloat(n)-parseFloat(o),top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:am(4,13),y:am(5,14)};Co.translateX=Co.x;Co.translateY=Co.y;const Ir=new Set;let jc=!1,zc=!1;function Ky(){if(zc){const e=Array.from(Ir).filter(i=>i.needsMeasurement),n=new Set(e.map(i=>i.element)),o=new Map;n.forEach(i=>{const s=FS(i);s.length&&(o.set(i,s),i.render())}),e.forEach(i=>i.measureInitialState()),n.forEach(i=>{i.render();const s=o.get(i);s&&s.forEach(([u,c])=>{var d;(d=i.getValue(u))===null||d===void 0||d.set(c)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}zc=!1,jc=!1,Ir.forEach(e=>e.complete()),Ir.clear()}function Gy(){Ir.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(zc=!0)})}function VS(){Gy(),Ky()}class jf{constructor(n,o,i,s,u,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...n],this.onComplete=o,this.name=i,this.motionValue=s,this.element=u,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ir.add(this),jc||(jc=!0,Ge.read(Gy),Ge.resolveKeyframes(Ky))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:o,element:i,motionValue:s}=this;for(let u=0;u<n.length;u++)if(n[u]===null)if(u===0){const c=s==null?void 0:s.get(),d=n[n.length-1];if(c!==void 0)n[0]=c;else if(i&&o){const p=i.readValue(o,d);p!=null&&(n[0]=p)}n[0]===void 0&&(n[0]=d),s&&c===void 0&&s.set(n[0])}else n[u]=n[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ir.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ir.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Xy=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),BS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function US(e){const n=BS.exec(e);if(!n)return[,];const[,o,i,s]=n;return[`--${o??i}`,s]}function Yy(e,n,o=1){const[i,s]=US(e);if(!i)return;const u=window.getComputedStyle(n).getPropertyValue(i);if(u){const c=u.trim();return Xy(c)?parseFloat(c):c}return yf(s)?Yy(s,n,o+1):s}const Qy=e=>n=>n.test(e),$S={test:e=>e==="auto",parse:e=>e},Jy=[Mo,we,Pn,pr,Dx,_x,$S],sm=e=>Jy.find(Qy(e));class Zy extends jf{constructor(n,o,i,s,u){super(n,o,i,s,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:o,name:i}=this;if(!o||!o.current)return;super.readKeyframes();for(let p=0;p<n.length;p++){let h=n[p];if(typeof h=="string"&&(h=h.trim(),yf(h))){const g=Yy(h,o.current);g!==void 0&&(n[p]=g),p===n.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Ry.has(i)||n.length!==2)return;const[s,u]=n,c=sm(s),d=sm(u);if(c!==d)if(om(c)&&om(d))for(let p=0;p<n.length;p++){const h=n[p];typeof h=="string"&&(n[p]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:o}=this,i=[];for(let s=0;s<n.length;s++)bS(n[s])&&i.push(s);i.length&&jS(n,i,o)}measureInitialState(){const{element:n,unresolvedKeyframes:o,name:i}=this;if(!n||!n.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Co[i](n.measureViewportBox(),window.getComputedStyle(n.current)),o[0]=this.measuredOrigin;const s=o[o.length-1];s!==void 0&&n.getValue(i,s).jump(s,!1)}measureEndState(){var n;const{element:o,name:i,unresolvedKeyframes:s}=this;if(!o||!o.current)return;const u=o.getValue(i);u&&u.jump(this.measuredOrigin,!1);const c=s.length-1,d=s[c];s[c]=Co[i](o.measureViewportBox(),window.getComputedStyle(o.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),!((n=this.removedTransforms)===null||n===void 0)&&n.length&&this.removedTransforms.forEach(([p,h])=>{o.getValue(p).set(h)}),this.resolveNoneKeyframes()}}const lm=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(mr.test(e)||e==="0")&&!e.startsWith("url("));function qS(e){const n=e[0];if(e.length===1)return!0;for(let o=0;o<e.length;o++)if(e[o]!==n)return!0}function HS(e,n,o,i){const s=e[0];if(s===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],c=lm(s,n),d=lm(u,n);return!c||!d?!1:qS(e)||(o==="spring"||Tf(o))&&i}const WS=e=>e!==null;function Ks(e,{repeat:n,repeatType:o="loop"},i){const s=e.filter(WS),u=n&&o!=="loop"&&n%2===1?0:s.length-1;return!u||i===void 0?s[u]:i}const KS=40;class ev{constructor({autoplay:n=!0,delay:o=0,type:i="keyframes",repeat:s=0,repeatDelay:u=0,repeatType:c="loop",...d}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=kn.now(),this.options={autoplay:n,delay:o,type:i,repeat:s,repeatDelay:u,repeatType:c,...d},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>KS?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&VS(),this._resolved}onKeyframesResolved(n,o){this.resolvedAt=kn.now(),this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:u,delay:c,onComplete:d,onUpdate:p,isGenerator:h}=this.options;if(!h&&!HS(n,i,s,u))if(c)this.options.duration=0;else{p&&p(Ks(n,this.options,o)),d&&d(),this.resolveFinishedPromise();return}const g=this.initPlayback(n,o);g!==!1&&(this._resolved={keyframes:n,finalKeyframe:o,...g},this.onPostResolved())}onPostResolved(){}then(n,o){return this.currentFinishedPromise.then(n,o)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(n=>{this.resolveFinishedPromise=n})}}const et=(e,n,o)=>e+(n-e)*o;function oc(e,n,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+(n-e)*6*o:o<1/2?n:o<2/3?e+(n-e)*(2/3-o)*6:e}function GS({hue:e,saturation:n,lightness:o,alpha:i}){e/=360,n/=100,o/=100;let s=0,u=0,c=0;if(!n)s=u=c=o;else{const d=o<.5?o*(1+n):o+n-o*n,p=2*o-d;s=oc(p,d,e+1/3),u=oc(p,d,e),c=oc(p,d,e-1/3)}return{red:Math.round(s*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:i}}function Ds(e,n){return o=>o>0?n:e}const ic=(e,n,o)=>{const i=e*e,s=o*(n*n-i)+i;return s<0?0:Math.sqrt(s)},XS=[Lc,Nr,wo],YS=e=>XS.find(n=>n.test(e));function um(e){const n=YS(e);if(!n)return!1;let o=n.parse(e);return n===wo&&(o=GS(o)),o}const cm=(e,n)=>{const o=um(e),i=um(n);if(!o||!i)return Ds(e,n);const s={...o};return u=>(s.red=ic(o.red,i.red,u),s.green=ic(o.green,i.green,u),s.blue=ic(o.blue,i.blue,u),s.alpha=et(o.alpha,i.alpha,u),Nr.transform(s))},QS=(e,n)=>o=>n(e(o)),Qi=(...e)=>e.reduce(QS),Ic=new Set(["none","hidden"]);function JS(e,n){return Ic.has(e)?o=>o<=0?e:n:o=>o>=1?n:e}function ZS(e,n){return o=>et(e,n,o)}function zf(e){return typeof e=="number"?ZS:typeof e=="string"?yf(e)?Ds:Et.test(e)?cm:nP:Array.isArray(e)?tv:typeof e=="object"?Et.test(e)?cm:eP:Ds}function tv(e,n){const o=[...e],i=o.length,s=e.map((u,c)=>zf(u)(u,n[c]));return u=>{for(let c=0;c<i;c++)o[c]=s[c](u);return o}}function eP(e,n){const o={...e,...n},i={};for(const s in o)e[s]!==void 0&&n[s]!==void 0&&(i[s]=zf(e[s])(e[s],n[s]));return s=>{for(const u in i)o[u]=i[u](s);return o}}function tP(e,n){var o;const i=[],s={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const c=n.types[u],d=e.indexes[c][s[c]],p=(o=e.values[d])!==null&&o!==void 0?o:0;i[u]=p,s[c]++}return i}const nP=(e,n)=>{const o=mr.createTransformer(n),i=$i(e),s=$i(n);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Ic.has(e)&&!s.values.length||Ic.has(n)&&!i.values.length?JS(e,n):Qi(tv(tP(i,s),s.values),o):Ds(e,n)};function nv(e,n,o){return typeof e=="number"&&typeof n=="number"&&typeof o=="number"?et(e,n,o):zf(e)(e,n)}const rP=5;function rv(e,n,o){const i=Math.max(n-rP,0);return Ay(o-e(i),n-i)}const it={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},fm=.001;function oP({duration:e=it.duration,bounce:n=it.bounce,velocity:o=it.velocity,mass:i=it.mass}){let s,u,c=1-n;c=qn(it.minDamping,it.maxDamping,c),e=qn(it.minDuration,it.maxDuration,Un(e)),c<1?(s=h=>{const g=h*c,y=g*e,v=g-o,S=Fc(h,c),w=Math.exp(-y);return fm-v/S*w},u=h=>{const y=h*c*e,v=y*o+o,S=Math.pow(c,2)*Math.pow(h,2)*e,w=Math.exp(-y),x=Fc(Math.pow(h,2),c);return(-s(h)+fm>0?-1:1)*((v-S)*w)/x}):(s=h=>{const g=Math.exp(-h*e),y=(h-o)*e+1;return-.001+g*y},u=h=>{const g=Math.exp(-h*e),y=(o-h)*(e*e);return g*y});const d=5/e,p=aP(s,u,d);if(e=Bn(e),isNaN(p))return{stiffness:it.stiffness,damping:it.damping,duration:e};{const h=Math.pow(p,2)*i;return{stiffness:h,damping:c*2*Math.sqrt(i*h),duration:e}}}const iP=12;function aP(e,n,o){let i=o;for(let s=1;s<iP;s++)i=i-e(i)/n(i);return i}function Fc(e,n){return e*Math.sqrt(1-n*n)}const sP=["duration","bounce"],lP=["stiffness","damping","mass"];function dm(e,n){return n.some(o=>e[o]!==void 0)}function uP(e){let n={velocity:it.velocity,stiffness:it.stiffness,damping:it.damping,mass:it.mass,isResolvedFromDuration:!1,...e};if(!dm(e,lP)&&dm(e,sP))if(e.visualDuration){const o=e.visualDuration,i=2*Math.PI/(o*1.2),s=i*i,u=2*qn(.05,1,1-(e.bounce||0))*Math.sqrt(s);n={...n,mass:it.mass,stiffness:s,damping:u}}else{const o=oP(e);n={...n,...o,mass:it.mass},n.isResolvedFromDuration=!0}return n}function ov(e=it.visualDuration,n=it.bounce){const o=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:i,restDelta:s}=o;const u=o.keyframes[0],c=o.keyframes[o.keyframes.length-1],d={done:!1,value:u},{stiffness:p,damping:h,mass:g,duration:y,velocity:v,isResolvedFromDuration:S}=uP({...o,velocity:-Un(o.velocity||0)}),w=v||0,x=h/(2*Math.sqrt(p*g)),P=c-u,E=Un(Math.sqrt(p/g)),L=Math.abs(P)<5;i||(i=L?it.restSpeed.granular:it.restSpeed.default),s||(s=L?it.restDelta.granular:it.restDelta.default);let _;if(x<1){const F=Fc(E,x);_=ee=>{const ae=Math.exp(-x*E*ee);return c-ae*((w+x*E*P)/F*Math.sin(F*ee)+P*Math.cos(F*ee))}}else if(x===1)_=F=>c-Math.exp(-E*F)*(P+(w+E*P)*F);else{const F=E*Math.sqrt(x*x-1);_=ee=>{const ae=Math.exp(-x*E*ee),K=Math.min(F*ee,300);return c-ae*((w+x*E*P)*Math.sinh(K)+F*P*Math.cosh(K))/F}}const X={calculatedDuration:S&&y||null,next:F=>{const ee=_(F);if(S)d.done=F>=y;else{let ae=0;x<1&&(ae=F===0?Bn(w):rv(_,F,ee));const K=Math.abs(ae)<=i,J=Math.abs(c-ee)<=s;d.done=K&&J}return d.value=d.done?c:ee,d},toString:()=>{const F=Math.min(Sy(X),_c),ee=Py(ae=>X.next(F*ae).value,F,30);return F+"ms "+ee}};return X}function pm({keyframes:e,velocity:n=0,power:o=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:u=500,modifyTarget:c,min:d,max:p,restDelta:h=.5,restSpeed:g}){const y=e[0],v={done:!1,value:y},S=K=>d!==void 0&&K<d||p!==void 0&&K>p,w=K=>d===void 0?p:p===void 0||Math.abs(d-K)<Math.abs(p-K)?d:p;let x=o*n;const P=y+x,E=c===void 0?P:c(P);E!==P&&(x=E-y);const L=K=>-x*Math.exp(-K/i),_=K=>E+L(K),X=K=>{const J=L(K),be=_(K);v.done=Math.abs(J)<=h,v.value=v.done?E:be};let F,ee;const ae=K=>{S(v.value)&&(F=K,ee=ov({keyframes:[v.value,w(v.value)],velocity:rv(_,K,v.value),damping:s,stiffness:u,restDelta:h,restSpeed:g}))};return ae(0),{calculatedDuration:null,next:K=>{let J=!1;return!ee&&F===void 0&&(J=!0,X(K),ae(K)),F!==void 0&&K>=F?ee.next(K-F):(!J&&X(K),v)}}}const cP=Yi(.42,0,1,1),fP=Yi(0,0,.58,1),iv=Yi(.42,0,.58,1),dP=e=>Array.isArray(e)&&typeof e[0]!="number",pP={linear:qt,easeIn:cP,easeInOut:iv,easeOut:fP,circIn:Df,circInOut:Fy,circOut:Iy,backIn:_f,backInOut:jy,backOut:Ny,anticipate:zy},hm=e=>{if(Ef(e)){ny(e.length===4);const[n,o,i,s]=e;return Yi(n,o,i,s)}else if(typeof e=="string")return pP[e];return e};function hP(e,n,o){const i=[],s=o||nv,u=e.length-1;for(let c=0;c<u;c++){let d=s(e[c],e[c+1]);if(n){const p=Array.isArray(n)?n[c]||qt:n;d=Qi(p,d)}i.push(d)}return i}function mP(e,n,{clamp:o=!0,ease:i,mixer:s}={}){const u=e.length;if(ny(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const c=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const d=hP(n,i,s),p=d.length,h=g=>{if(c&&g<e[0])return n[0];let y=0;if(p>1)for(;y<e.length-2&&!(g<e[y+1]);y++);const v=Eo(e[y],e[y+1],g);return d[y](v)};return o?g=>h(qn(e[0],e[u-1],g)):h}function gP(e,n){const o=e[e.length-1];for(let i=1;i<=n;i++){const s=Eo(0,n,i);e.push(et(o,1,s))}}function yP(e){const n=[0];return gP(n,e.length-1),n}function vP(e,n){return e.map(o=>o*n)}function bP(e,n){return e.map(()=>n||iv).splice(0,e.length-1)}function Ms({duration:e=300,keyframes:n,times:o,ease:i="easeInOut"}){const s=dP(i)?i.map(hm):hm(i),u={done:!1,value:n[0]},c=vP(o&&o.length===n.length?o:yP(n),e),d=mP(c,n,{ease:Array.isArray(s)?s:bP(n,s)});return{calculatedDuration:e,next:p=>(u.value=d(p),u.done=p>=e,u)}}const wP=e=>{const n=({timestamp:o})=>e(o);return{start:()=>Ge.update(n,!0),stop:()=>hr(n),now:()=>xt.isProcessing?xt.timestamp:kn.now()}},xP={decay:pm,inertia:pm,tween:Ms,keyframes:Ms,spring:ov},SP=e=>e/100;class If extends ev{constructor(n){super(n),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:p}=this.options;p&&p()};const{name:o,motionValue:i,element:s,keyframes:u}=this.options,c=(s==null?void 0:s.KeyframeResolver)||jf,d=(p,h)=>this.onKeyframesResolved(p,h);this.resolver=new c(u,d,o,i,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(n){const{type:o="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:u,velocity:c=0}=this.options,d=Tf(o)?o:xP[o]||Ms;let p,h;d!==Ms&&typeof n[0]!="number"&&(p=Qi(SP,nv(n[0],n[1])),n=[0,100]);const g=d({...this.options,keyframes:n});u==="mirror"&&(h=d({...this.options,keyframes:[...n].reverse(),velocity:-c})),g.calculatedDuration===null&&(g.calculatedDuration=Sy(g));const{calculatedDuration:y}=g,v=y+s,S=v*(i+1)-s;return{generator:g,mirroredGenerator:h,mapPercentToKeyframes:p,calculatedDuration:y,resolvedDuration:v,totalDuration:S}}onPostResolved(){const{autoplay:n=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!n?this.pause():this.state=this.pendingPlayState}tick(n,o=!1){const{resolved:i}=this;if(!i){const{keyframes:K}=this.options;return{done:!0,value:K[K.length-1]}}const{finalKeyframe:s,generator:u,mirroredGenerator:c,mapPercentToKeyframes:d,keyframes:p,calculatedDuration:h,totalDuration:g,resolvedDuration:y}=i;if(this.startTime===null)return u.next(0);const{delay:v,repeat:S,repeatType:w,repeatDelay:x,onUpdate:P}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-g/this.speed,this.startTime)),o?this.currentTime=n:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(n-this.startTime)*this.speed;const E=this.currentTime-v*(this.speed>=0?1:-1),L=this.speed>=0?E<0:E>g;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let _=this.currentTime,X=u;if(S){const K=Math.min(this.currentTime,g)/y;let J=Math.floor(K),be=K%1;!be&&K>=1&&(be=1),be===1&&J--,J=Math.min(J,S+1),!!(J%2)&&(w==="reverse"?(be=1-be,x&&(be-=x/y)):w==="mirror"&&(X=c)),_=qn(0,1,be)*y}const F=L?{done:!1,value:p[0]}:X.next(_);d&&(F.value=d(F.value));let{done:ee}=F;!L&&h!==null&&(ee=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const ae=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ee);return ae&&s!==void 0&&(F.value=Ks(p,this.options,s)),P&&P(F.value),ae&&this.finish(),F}get duration(){const{resolved:n}=this;return n?Un(n.calculatedDuration):0}get time(){return Un(this.currentTime)}set time(n){n=Bn(n),this.currentTime=n,this.holdTime!==null||this.speed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.speed)}get speed(){return this.playbackSpeed}set speed(n){const o=this.playbackSpeed!==n;this.playbackSpeed=n,o&&(this.time=Un(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:n=wP,onPlay:o,startTime:i}=this.options;this.driver||(this.driver=n(u=>this.tick(u))),o&&o();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var n;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(n=this.currentTime)!==null&&n!==void 0?n:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:n}=this.options;n&&n()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}}const PP=new Set(["opacity","clipPath","filter","transform"]);function kP(e,n,o,{delay:i=0,duration:s=300,repeat:u=0,repeatType:c="loop",ease:d="easeInOut",times:p}={}){const h={[n]:o};p&&(h.offset=p);const g=Ty(d,s);return Array.isArray(g)&&(h.easing=g),e.animate(h,{delay:i,duration:s,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal"})}const TP=cf(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ls=10,EP=2e4;function OP(e){return Tf(e.type)||e.type==="spring"||!ky(e.ease)}function CP(e,n){const o=new If({...n,keyframes:e,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:e[0]};const s=[];let u=0;for(;!i.done&&u<EP;)i=o.sample(u),s.push(i.value),u+=Ls;return{times:void 0,keyframes:s,duration:u-Ls,ease:"linear"}}const av={anticipate:zy,backInOut:jy,circInOut:Fy};function RP(e){return e in av}class mm extends ev{constructor(n){super(n);const{name:o,motionValue:i,element:s,keyframes:u}=this.options;this.resolver=new Zy(u,(c,d)=>this.onKeyframesResolved(c,d),o,i,s),this.resolver.scheduleResolve()}initPlayback(n,o){let{duration:i=300,times:s,ease:u,type:c,motionValue:d,name:p,startTime:h}=this.options;if(!d.owner||!d.owner.current)return!1;if(typeof u=="string"&&_s()&&RP(u)&&(u=av[u]),OP(this.options)){const{onComplete:y,onUpdate:v,motionValue:S,element:w,...x}=this.options,P=CP(n,x);n=P.keyframes,n.length===1&&(n[1]=n[0]),i=P.duration,s=P.times,u=P.ease,c="keyframes"}const g=kP(d.owner.current,p,n,{...this.options,duration:i,times:s,ease:u});return g.startTime=h??this.calcStartTime(),this.pendingTimeline?(Jh(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:y}=this.options;d.set(Ks(n,this.options,o)),y&&y(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:i,times:s,type:c,ease:u,keyframes:n}}get duration(){const{resolved:n}=this;if(!n)return 0;const{duration:o}=n;return Un(o)}get time(){const{resolved:n}=this;if(!n)return 0;const{animation:o}=n;return Un(o.currentTime||0)}set time(n){const{resolved:o}=this;if(!o)return;const{animation:i}=o;i.currentTime=Bn(n)}get speed(){const{resolved:n}=this;if(!n)return 1;const{animation:o}=n;return o.playbackRate}set speed(n){const{resolved:o}=this;if(!o)return;const{animation:i}=o;i.playbackRate=n}get state(){const{resolved:n}=this;if(!n)return"idle";const{animation:o}=n;return o.playState}get startTime(){const{resolved:n}=this;if(!n)return null;const{animation:o}=n;return o.startTime}attachTimeline(n){if(!this._resolved)this.pendingTimeline=n;else{const{resolved:o}=this;if(!o)return qt;const{animation:i}=o;Jh(i,n)}return qt}play(){if(this.isStopped)return;const{resolved:n}=this;if(!n)return;const{animation:o}=n;o.playState==="finished"&&this.updateFinishedPromise(),o.play()}pause(){const{resolved:n}=this;if(!n)return;const{animation:o}=n;o.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:n}=this;if(!n)return;const{animation:o,keyframes:i,duration:s,type:u,ease:c,times:d}=n;if(o.playState==="idle"||o.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:g,onComplete:y,element:v,...S}=this.options,w=new If({...S,keyframes:i,duration:s,type:u,ease:c,times:d,isGenerator:!0}),x=Bn(this.time);h.setWithVelocity(w.sample(x-Ls).value,w.sample(x).value,Ls)}const{onStop:p}=this.options;p&&p(),this.cancel()}complete(){const{resolved:n}=this;n&&n.animation.finish()}cancel(){const{resolved:n}=this;n&&n.animation.cancel()}static supports(n){const{motionValue:o,name:i,repeatDelay:s,repeatType:u,damping:c,type:d}=n;if(!o||!o.owner||!(o.owner.current instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:h}=o.owner.getProps();return TP()&&i&&PP.has(i)&&!p&&!h&&!s&&u!=="mirror"&&c!==0&&d!=="inertia"}}const AP={type:"spring",stiffness:500,damping:25,restSpeed:10},_P=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),DP={type:"keyframes",duration:.8},MP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},LP=(e,{keyframes:n})=>n.length>2?DP:Ur.has(e)?e.startsWith("scale")?_P(n[1]):AP:MP;function NP({when:e,delay:n,delayChildren:o,staggerChildren:i,staggerDirection:s,repeat:u,repeatType:c,repeatDelay:d,from:p,elapsed:h,...g}){return!!Object.keys(g).length}const Ff=(e,n,o,i={},s,u)=>c=>{const d=kf(i,e)||{},p=d.delay||i.delay||0;let{elapsed:h=0}=i;h=h-Bn(p);let g={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:n.getVelocity(),...d,delay:-h,onUpdate:v=>{n.set(v),d.onUpdate&&d.onUpdate(v)},onComplete:()=>{c(),d.onComplete&&d.onComplete()},name:e,motionValue:n,element:u?void 0:s};NP(d)||(g={...g,...LP(e,g)}),g.duration&&(g.duration=Bn(g.duration)),g.repeatDelay&&(g.repeatDelay=Bn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(y=!0)),y&&!u&&n.get()!==void 0){const v=Ks(g.keyframes,d);if(v!==void 0)return Ge.update(()=>{g.onUpdate(v),g.onComplete()}),new eS([])}return!u&&mm.supports(g)?new mm(g):new If(g)};function jP({protectedKeys:e,needsAnimating:n},o){const i=e.hasOwnProperty(o)&&n[o]!==!0;return n[o]=!1,i}function sv(e,n,{delay:o=0,transitionOverride:i,type:s}={}){var u;let{transition:c=e.getDefaultTransition(),transitionEnd:d,...p}=n;i&&(c=i);const h=[],g=s&&e.animationState&&e.animationState.getState()[s];for(const y in p){const v=e.getValue(y,(u=e.latestValues[y])!==null&&u!==void 0?u:null),S=p[y];if(S===void 0||g&&jP(g,y))continue;const w={delay:o,...kf(c||{},y)};let x=!1;if(window.MotionHandoffAnimation){const E=_y(e);if(E){const L=window.MotionHandoffAnimation(E,y,Ge);L!==null&&(w.startTime=L,x=!0)}}Mc(e,y),v.start(Ff(y,v,S,e.shouldReduceMotion&&Ry.has(y)?{type:!1}:w,e,x));const P=v.animation;P&&h.push(P)}return d&&Promise.all(h).then(()=>{Ge.update(()=>{d&&hS(e,d)})}),h}function Vc(e,n,o={}){var i;const s=Ws(e,n,o.type==="exit"?(i=e.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:u=e.getDefaultTransition()||{}}=s||{};o.transitionOverride&&(u=o.transitionOverride);const c=s?()=>Promise.all(sv(e,s,o)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(h=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:v}=u;return zP(e,n,g+h,y,v,o)}:()=>Promise.resolve(),{when:p}=u;if(p){const[h,g]=p==="beforeChildren"?[c,d]:[d,c];return h().then(()=>g())}else return Promise.all([c(),d(o.delay)])}function zP(e,n,o=0,i=0,s=1,u){const c=[],d=(e.variantChildren.size-1)*i,p=s===1?(h=0)=>h*i:(h=0)=>d-h*i;return Array.from(e.variantChildren).sort(IP).forEach((h,g)=>{h.notify("AnimationStart",n),c.push(Vc(h,n,{...u,delay:o+p(g)}).then(()=>h.notify("AnimationComplete",n)))}),Promise.all(c)}function IP(e,n){return e.sortNodePosition(n)}function FP(e,n,o={}){e.notify("AnimationStart",n);let i;if(Array.isArray(n)){const s=n.map(u=>Vc(e,u,o));i=Promise.all(s)}else if(typeof n=="string")i=Vc(e,n,o);else{const s=typeof n=="function"?Ws(e,n,o.custom):n;i=Promise.all(sv(e,s,o))}return i.then(()=>{e.notify("AnimationComplete",n)})}const VP=df.length;function lv(e){if(!e)return;if(!e.isControllingVariants){const o=e.parent?lv(e.parent)||{}:{};return e.props.initial!==void 0&&(o.initial=e.props.initial),o}const n={};for(let o=0;o<VP;o++){const i=df[o],s=e.props[i];(Vi(s)||s===!1)&&(n[i]=s)}return n}const BP=[...ff].reverse(),UP=ff.length;function $P(e){return n=>Promise.all(n.map(({animation:o,options:i})=>FP(e,o,i)))}function qP(e){let n=$P(e),o=gm(),i=!0;const s=p=>(h,g)=>{var y;const v=Ws(e,g,p==="exit"?(y=e.presenceContext)===null||y===void 0?void 0:y.custom:void 0);if(v){const{transition:S,transitionEnd:w,...x}=v;h={...h,...x,...w}}return h};function u(p){n=p(e)}function c(p){const{props:h}=e,g=lv(e.parent)||{},y=[],v=new Set;let S={},w=1/0;for(let P=0;P<UP;P++){const E=BP[P],L=o[E],_=h[E]!==void 0?h[E]:g[E],X=Vi(_),F=E===p?L.isActive:null;F===!1&&(w=P);let ee=_===g[E]&&_!==h[E]&&X;if(ee&&i&&e.manuallyAnimateOnMount&&(ee=!1),L.protectedKeys={...S},!L.isActive&&F===null||!_&&!L.prevProp||qs(_)||typeof _=="boolean")continue;const ae=HP(L.prevProp,_);let K=ae||E===p&&L.isActive&&!ee&&X||P>w&&X,J=!1;const be=Array.isArray(_)?_:[_];let _e=be.reduce(s(E),{});F===!1&&(_e={});const{prevResolvedValues:De={}}=L,je={...De,..._e},q=z=>{K=!0,v.has(z)&&(J=!0,v.delete(z)),L.needsAnimating[z]=!0;const D=e.getValue(z);D&&(D.liveStyle=!1)};for(const z in je){const D=_e[z],H=De[z];if(S.hasOwnProperty(z))continue;let W=!1;Ac(D)&&Ac(H)?W=!xy(D,H):W=D!==H,W?D!=null?q(z):v.add(z):D!==void 0&&v.has(z)?q(z):L.protectedKeys[z]=!0}L.prevProp=_,L.prevResolvedValues=_e,L.isActive&&(S={...S,..._e}),i&&e.blockInitialAnimation&&(K=!1),K&&(!(ee&&ae)||J)&&y.push(...be.map(z=>({animation:z,options:{type:E}})))}if(v.size){const P={};v.forEach(E=>{const L=e.getBaseTarget(E),_=e.getValue(E);_&&(_.liveStyle=!0),P[E]=L??null}),y.push({animation:P})}let x=!!y.length;return i&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(x=!1),i=!1,x?n(y):Promise.resolve()}function d(p,h){var g;if(o[p].isActive===h)return Promise.resolve();(g=e.variantChildren)===null||g===void 0||g.forEach(v=>{var S;return(S=v.animationState)===null||S===void 0?void 0:S.setActive(p,h)}),o[p].isActive=h;const y=c(p);for(const v in o)o[v].protectedKeys={};return y}return{animateChanges:c,setActive:d,setAnimateFunction:u,getState:()=>o,reset:()=>{o=gm(),i=!0}}}function HP(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!xy(n,e):!1}function Dr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gm(){return{animate:Dr(!0),whileInView:Dr(),whileHover:Dr(),whileTap:Dr(),whileDrag:Dr(),whileFocus:Dr(),exit:Dr()}}class gr{constructor(n){this.isMounted=!1,this.node=n}update(){}}class WP extends gr{constructor(n){super(n),n.animationState||(n.animationState=qP(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();qs(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:o}=this.node.prevProps||{};n!==o&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)===null||n===void 0||n.call(this)}}let KP=0;class GP extends gr{constructor(){super(...arguments),this.id=KP++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:o}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===i)return;const s=this.node.animationState.setActive("exit",!n);o&&!n&&s.then(()=>o(this.id))}mount(){const{register:n}=this.node.presenceContext||{};n&&(this.unmount=n(this.id))}unmount(){}}const XP={animation:{Feature:WP},exit:{Feature:GP}};function qi(e,n,o,i={passive:!0}){return e.addEventListener(n,o,i),()=>e.removeEventListener(n,o)}function Ji(e){return{point:{x:e.pageX,y:e.pageY}}}const YP=e=>n=>Of(n)&&e(n,Ji(n));function ji(e,n,o,i){return qi(e,n,YP(o),i)}const ym=(e,n)=>Math.abs(e-n);function QP(e,n){const o=ym(e.x,n.x),i=ym(e.y,n.y);return Math.sqrt(o**2+i**2)}class uv{constructor(n,o,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=sc(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=QP(y.offset,{x:0,y:0})>=3;if(!v&&!S)return;const{point:w}=y,{timestamp:x}=xt;this.history.push({...w,timestamp:x});const{onStart:P,onMove:E}=this.handlers;v||(P&&P(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,y)},this.handlePointerMove=(y,v)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=ac(v,this.transformPagePoint),Ge.update(this.updatePoint,!0)},this.handlePointerUp=(y,v)=>{this.end();const{onEnd:S,onSessionEnd:w,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const P=sc(y.type==="pointercancel"?this.lastMoveEventInfo:ac(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(y,P),w&&w(y,P)},!Of(n))return;this.dragSnapToOrigin=u,this.handlers=o,this.transformPagePoint=i,this.contextWindow=s||window;const c=Ji(n),d=ac(c,this.transformPagePoint),{point:p}=d,{timestamp:h}=xt;this.history=[{...p,timestamp:h}];const{onSessionStart:g}=o;g&&g(n,sc(d,this.history)),this.removeListeners=Qi(ji(this.contextWindow,"pointermove",this.handlePointerMove),ji(this.contextWindow,"pointerup",this.handlePointerUp),ji(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),hr(this.updatePoint)}}function ac(e,n){return n?{point:n(e.point)}:e}function vm(e,n){return{x:e.x-n.x,y:e.y-n.y}}function sc({point:e},n){return{point:e,delta:vm(e,cv(n)),offset:vm(e,JP(n)),velocity:ZP(n,.1)}}function JP(e){return e[0]}function cv(e){return e[e.length-1]}function ZP(e,n){if(e.length<2)return{x:0,y:0};let o=e.length-1,i=null;const s=cv(e);for(;o>=0&&(i=e[o],!(s.timestamp-i.timestamp>Bn(n)));)o--;if(!i)return{x:0,y:0};const u=Un(s.timestamp-i.timestamp);if(u===0)return{x:0,y:0};const c={x:(s.x-i.x)/u,y:(s.y-i.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const fv=1e-4,ek=1-fv,tk=1+fv,dv=.01,nk=0-dv,rk=0+dv;function Wt(e){return e.max-e.min}function ok(e,n,o){return Math.abs(e-n)<=o}function bm(e,n,o,i=.5){e.origin=i,e.originPoint=et(n.min,n.max,e.origin),e.scale=Wt(o)/Wt(n),e.translate=et(o.min,o.max,e.origin)-e.originPoint,(e.scale>=ek&&e.scale<=tk||isNaN(e.scale))&&(e.scale=1),(e.translate>=nk&&e.translate<=rk||isNaN(e.translate))&&(e.translate=0)}function zi(e,n,o,i){bm(e.x,n.x,o.x,i?i.originX:void 0),bm(e.y,n.y,o.y,i?i.originY:void 0)}function wm(e,n,o){e.min=o.min+n.min,e.max=e.min+Wt(n)}function ik(e,n,o){wm(e.x,n.x,o.x),wm(e.y,n.y,o.y)}function xm(e,n,o){e.min=n.min-o.min,e.max=e.min+Wt(n)}function Ii(e,n,o){xm(e.x,n.x,o.x),xm(e.y,n.y,o.y)}function ak(e,{min:n,max:o},i){return n!==void 0&&e<n?e=i?et(n,e,i.min):Math.max(e,n):o!==void 0&&e>o&&(e=i?et(o,e,i.max):Math.min(e,o)),e}function Sm(e,n,o){return{min:n!==void 0?e.min+n:void 0,max:o!==void 0?e.max+o-(e.max-e.min):void 0}}function sk(e,{top:n,left:o,bottom:i,right:s}){return{x:Sm(e.x,o,s),y:Sm(e.y,n,i)}}function Pm(e,n){let o=n.min-e.min,i=n.max-e.max;return n.max-n.min<e.max-e.min&&([o,i]=[i,o]),{min:o,max:i}}function lk(e,n){return{x:Pm(e.x,n.x),y:Pm(e.y,n.y)}}function uk(e,n){let o=.5;const i=Wt(e),s=Wt(n);return s>i?o=Eo(n.min,n.max-i,e.min):i>s&&(o=Eo(e.min,e.max-s,n.min)),qn(0,1,o)}function ck(e,n){const o={};return n.min!==void 0&&(o.min=n.min-e.min),n.max!==void 0&&(o.max=n.max-e.min),o}const Bc=.35;function fk(e=Bc){return e===!1?e=0:e===!0&&(e=Bc),{x:km(e,"left","right"),y:km(e,"top","bottom")}}function km(e,n,o){return{min:Tm(e,n),max:Tm(e,o)}}function Tm(e,n){return typeof e=="number"?e:e[n]||0}const Em=()=>({translate:0,scale:1,origin:0,originPoint:0}),xo=()=>({x:Em(),y:Em()}),Om=()=>({min:0,max:0}),lt=()=>({x:Om(),y:Om()});function en(e){return[e("x"),e("y")]}function pv({top:e,left:n,right:o,bottom:i}){return{x:{min:n,max:o},y:{min:e,max:i}}}function dk({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function pk(e,n){if(!n)return e;const o=n({x:e.left,y:e.top}),i=n({x:e.right,y:e.bottom});return{top:o.y,left:o.x,bottom:i.y,right:i.x}}function lc(e){return e===void 0||e===1}function Uc({scale:e,scaleX:n,scaleY:o}){return!lc(e)||!lc(n)||!lc(o)}function Mr(e){return Uc(e)||hv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function hv(e){return Cm(e.x)||Cm(e.y)}function Cm(e){return e&&e!=="0%"}function Ns(e,n,o){const i=e-o,s=n*i;return o+s}function Rm(e,n,o,i,s){return s!==void 0&&(e=Ns(e,s,i)),Ns(e,o,i)+n}function $c(e,n=0,o=1,i,s){e.min=Rm(e.min,n,o,i,s),e.max=Rm(e.max,n,o,i,s)}function mv(e,{x:n,y:o}){$c(e.x,n.translate,n.scale,n.originPoint),$c(e.y,o.translate,o.scale,o.originPoint)}const Am=.999999999999,_m=1.0000000000001;function hk(e,n,o,i=!1){const s=o.length;if(!s)return;n.x=n.y=1;let u,c;for(let d=0;d<s;d++){u=o[d],c=u.projectionDelta;const{visualElement:p}=u.options;p&&p.props.style&&p.props.style.display==="contents"||(i&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Po(e,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(n.x*=c.x.scale,n.y*=c.y.scale,mv(e,c)),i&&Mr(u.latestValues)&&Po(e,u.latestValues))}n.x<_m&&n.x>Am&&(n.x=1),n.y<_m&&n.y>Am&&(n.y=1)}function So(e,n){e.min=e.min+n,e.max=e.max+n}function Dm(e,n,o,i,s=.5){const u=et(e.min,e.max,s);$c(e,n,o,u,i)}function Po(e,n){Dm(e.x,n.x,n.scaleX,n.scale,n.originX),Dm(e.y,n.y,n.scaleY,n.scale,n.originY)}function gv(e,n){return pv(pk(e.getBoundingClientRect(),n))}function mk(e,n,o){const i=gv(e,o),{scroll:s}=n;return s&&(So(i.x,s.offset.x),So(i.y,s.offset.y)),i}const yv=({current:e})=>e?e.ownerDocument.defaultView:null,gk=new WeakMap;class yk{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=lt(),this.visualElement=n}start(n,{snapToCursor:o=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=g=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(Ji(g).point)},u=(g,y)=>{const{drag:v,dragPropagation:S,onDragStart:w}=this.getProps();if(v&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=uS(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),en(P=>{let E=this.getAxisMotionValue(P).get()||0;if(Pn.test(E)){const{projection:L}=this.visualElement;if(L&&L.layout){const _=L.layout.layoutBox[P];_&&(E=Wt(_)*(parseFloat(E)/100))}}this.originPoint[P]=E}),w&&Ge.postRender(()=>w(g,y)),Mc(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},c=(g,y)=>{const{dragPropagation:v,dragDirectionLock:S,onDirectionLock:w,onDrag:x}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:P}=y;if(S&&this.currentDirection===null){this.currentDirection=vk(P),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",y.point,P),this.updateAxis("y",y.point,P),this.visualElement.render(),x&&x(g,y)},d=(g,y)=>this.stop(g,y),p=()=>en(g=>{var y;return this.getAnimationState(g)==="paused"&&((y=this.getAxisMotionValue(g).animation)===null||y===void 0?void 0:y.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new uv(n,{onSessionStart:s,onStart:u,onMove:c,onSessionEnd:d,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:yv(this.visualElement)})}stop(n,o){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=o;this.startAnimation(s);const{onDragEnd:u}=this.getProps();u&&Ge.postRender(()=>u(n,o))}cancel(){this.isDragging=!1;const{projection:n,animationState:o}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(n,o,i){const{drag:s}=this.getProps();if(!i||!gs(n,s,this.currentDirection))return;const u=this.getAxisMotionValue(n);let c=this.originPoint[n]+i[n];this.constraints&&this.constraints[n]&&(c=ak(c,this.constraints[n],this.elastic[n])),u.set(c)}resolveConstraints(){var n;const{dragConstraints:o,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(n=this.visualElement.projection)===null||n===void 0?void 0:n.layout,u=this.constraints;o&&bo(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&s?this.constraints=sk(s.layoutBox,o):this.constraints=!1,this.elastic=fk(i),u!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&en(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=ck(s.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:o}=this.getProps();if(!n||!bo(n))return!1;const i=n.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const u=mk(i,s.root,this.visualElement.getTransformPagePoint());let c=lk(s.layout.layoutBox,u);if(o){const d=o(dk(c));this.hasMutatedConstraints=!!d,d&&(c=pv(d))}return c}startAnimation(n){const{drag:o,dragMomentum:i,dragElastic:s,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:d}=this.getProps(),p=this.constraints||{},h=en(g=>{if(!gs(g,o,this.currentDirection))return;let y=p&&p[g]||{};c&&(y={min:0,max:0});const v=s?200:1e6,S=s?40:1e7,w={type:"inertia",velocity:i?n[g]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...y};return this.startAxisValueAnimation(g,w)});return Promise.all(h).then(d)}startAxisValueAnimation(n,o){const i=this.getAxisMotionValue(n);return Mc(this.visualElement,n),i.start(Ff(n,i,0,o,this.visualElement,!1))}stopAnimation(){en(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){en(n=>{var o;return(o=this.getAxisMotionValue(n).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(n){var o;return(o=this.getAxisMotionValue(n).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(n){const o=`_drag${n.toUpperCase()}`,i=this.visualElement.getProps(),s=i[o];return s||this.visualElement.getValue(n,(i.initial?i.initial[n]:void 0)||0)}snapToCursor(n){en(o=>{const{drag:i}=this.getProps();if(!gs(o,i,this.currentDirection))return;const{projection:s}=this.visualElement,u=this.getAxisMotionValue(o);if(s&&s.layout){const{min:c,max:d}=s.layout.layoutBox[o];u.set(n[o]-et(c,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:o}=this.getProps(),{projection:i}=this.visualElement;if(!bo(o)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};en(c=>{const d=this.getAxisMotionValue(c);if(d&&this.constraints!==!1){const p=d.get();s[c]=uk({min:p,max:p},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),en(c=>{if(!gs(c,n,null))return;const d=this.getAxisMotionValue(c),{min:p,max:h}=this.constraints[c];d.set(et(p,h,s[c]))})}addListeners(){if(!this.visualElement.current)return;gk.set(this.visualElement,this);const n=this.visualElement.current,o=ji(n,"pointerdown",p=>{const{drag:h,dragListener:g=!0}=this.getProps();h&&g&&this.start(p)}),i=()=>{const{dragConstraints:p}=this.getProps();bo(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,u=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Ge.read(i);const c=qi(window,"resize",()=>this.scalePositionWithinConstraints()),d=s.addEventListener("didUpdate",({delta:p,hasLayoutChanged:h})=>{this.isDragging&&h&&(en(g=>{const y=this.getAxisMotionValue(g);y&&(this.originPoint[g]+=p[g].translate,y.set(y.get()+p[g].translate))}),this.visualElement.render())});return()=>{c(),o(),u(),d&&d()}}getProps(){const n=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:u=!1,dragElastic:c=Bc,dragMomentum:d=!0}=n;return{...n,drag:o,dragDirectionLock:i,dragPropagation:s,dragConstraints:u,dragElastic:c,dragMomentum:d}}}function gs(e,n,o){return(n===!0||n===e)&&(o===null||o===e)}function vk(e,n=10){let o=null;return Math.abs(e.y)>n?o="y":Math.abs(e.x)>n&&(o="x"),o}class bk extends gr{constructor(n){super(n),this.removeGroupControls=qt,this.removeListeners=qt,this.controls=new yk(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Mm=e=>(n,o)=>{e&&Ge.postRender(()=>e(n,o))};class wk extends gr{constructor(){super(...arguments),this.removePointerDownListener=qt}onPointerDown(n){this.session=new uv(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:yv(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:o,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:Mm(n),onStart:Mm(o),onMove:i,onEnd:(u,c)=>{delete this.session,s&&Ge.postRender(()=>s(u,c))}}}mount(){this.removePointerDownListener=ji(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ks={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Lm(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const Ri={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(we.test(e))e=parseFloat(e);else return e;const o=Lm(e,n.target.x),i=Lm(e,n.target.y);return`${o}% ${i}%`}},xk={correct:(e,{treeScale:n,projectionDelta:o})=>{const i=e,s=mr.parse(e);if(s.length>5)return i;const u=mr.createTransformer(e),c=typeof s[0]!="number"?1:0,d=o.x.scale*n.x,p=o.y.scale*n.y;s[0+c]/=d,s[1+c]/=p;const h=et(d,p,.5);return typeof s[2+c]=="number"&&(s[2+c]/=h),typeof s[3+c]=="number"&&(s[3+c]/=h),u(s)}};class Sk extends R.Component{componentDidMount(){const{visualElement:n,layoutGroup:o,switchLayoutGroup:i,layoutId:s}=this.props,{projection:u}=n;Ux(Pk),u&&(o.group&&o.group.add(u),i&&i.register&&s&&i.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),ks.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:o,visualElement:i,drag:s,isPresent:u}=this.props,c=i.projection;return c&&(c.isPresent=u,s||n.layoutDependency!==o||o===void 0?c.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?c.promote():c.relegate()||Ge.postRender(()=>{const d=c.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),hf.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:o,switchLayoutGroup:i}=this.props,{projection:s}=n;s&&(s.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function vv(e){const[n,o]=ey(),i=R.useContext(af);return Fn.jsx(Sk,{...e,layoutGroup:i,switchLayoutGroup:R.useContext(ly),isPresent:n,safeToRemove:o})}const Pk={borderRadius:{...Ri,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ri,borderTopRightRadius:Ri,borderBottomLeftRadius:Ri,borderBottomRightRadius:Ri,boxShadow:xk};function kk(e,n,o){const i=Ct(e)?e:Ui(e);return i.start(Ff("",i,n,o)),i.animation}function Tk(e){return e instanceof SVGElement&&e.tagName!=="svg"}const Ek=(e,n)=>e.depth-n.depth;class Ok{constructor(){this.children=[],this.isDirty=!1}add(n){Cf(this.children,n),this.isDirty=!0}remove(n){Rf(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(Ek),this.isDirty=!1,this.children.forEach(n)}}function Ck(e,n){const o=kn.now(),i=({timestamp:s})=>{const u=s-o;u>=n&&(hr(i),e(u-n))};return Ge.read(i,!0),()=>hr(i)}const bv=["TopLeft","TopRight","BottomLeft","BottomRight"],Rk=bv.length,Nm=e=>typeof e=="string"?parseFloat(e):e,jm=e=>typeof e=="number"||we.test(e);function Ak(e,n,o,i,s,u){s?(e.opacity=et(0,o.opacity!==void 0?o.opacity:1,_k(i)),e.opacityExit=et(n.opacity!==void 0?n.opacity:1,0,Dk(i))):u&&(e.opacity=et(n.opacity!==void 0?n.opacity:1,o.opacity!==void 0?o.opacity:1,i));for(let c=0;c<Rk;c++){const d=`border${bv[c]}Radius`;let p=zm(n,d),h=zm(o,d);if(p===void 0&&h===void 0)continue;p||(p=0),h||(h=0),p===0||h===0||jm(p)===jm(h)?(e[d]=Math.max(et(Nm(p),Nm(h),i),0),(Pn.test(h)||Pn.test(p))&&(e[d]+="%")):e[d]=h}(n.rotate||o.rotate)&&(e.rotate=et(n.rotate||0,o.rotate||0,i))}function zm(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const _k=wv(0,.5,Iy),Dk=wv(.5,.95,qt);function wv(e,n,o){return i=>i<e?0:i>n?1:o(Eo(e,n,i))}function Im(e,n){e.min=n.min,e.max=n.max}function Zt(e,n){Im(e.x,n.x),Im(e.y,n.y)}function Fm(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}function Vm(e,n,o,i,s){return e-=n,e=Ns(e,1/o,i),s!==void 0&&(e=Ns(e,1/s,i)),e}function Mk(e,n=0,o=1,i=.5,s,u=e,c=e){if(Pn.test(n)&&(n=parseFloat(n),n=et(c.min,c.max,n/100)-c.min),typeof n!="number")return;let d=et(u.min,u.max,i);e===u&&(d-=n),e.min=Vm(e.min,n,o,d,s),e.max=Vm(e.max,n,o,d,s)}function Bm(e,n,[o,i,s],u,c){Mk(e,n[o],n[i],n[s],n.scale,u,c)}const Lk=["x","scaleX","originX"],Nk=["y","scaleY","originY"];function Um(e,n,o,i){Bm(e.x,n,Lk,o?o.x:void 0,i?i.x:void 0),Bm(e.y,n,Nk,o?o.y:void 0,i?i.y:void 0)}function $m(e){return e.translate===0&&e.scale===1}function xv(e){return $m(e.x)&&$m(e.y)}function qm(e,n){return e.min===n.min&&e.max===n.max}function jk(e,n){return qm(e.x,n.x)&&qm(e.y,n.y)}function Hm(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function Sv(e,n){return Hm(e.x,n.x)&&Hm(e.y,n.y)}function Wm(e){return Wt(e.x)/Wt(e.y)}function Km(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}class zk{constructor(){this.members=[]}add(n){Cf(this.members,n),n.scheduleRender()}remove(n){if(Rf(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(n){const o=this.members.findIndex(s=>n===s);if(o===0)return!1;let i;for(let s=o;s>=0;s--){const u=this.members[s];if(u.isPresent!==!1){i=u;break}}return i?(this.promote(i),!0):!1}promote(n,o){const i=this.lead;if(n!==i&&(this.prevLead=i,this.lead=n,n.show(),i)){i.instance&&i.scheduleRender(),n.scheduleRender(),n.resumeFrom=i,o&&(n.resumeFrom.preserveOpacity=!0),i.snapshot&&(n.snapshot=i.snapshot,n.snapshot.latestValues=i.animationValues||i.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:s}=n.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:o,resumingFrom:i}=n;o.onExitComplete&&o.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ik(e,n,o){let i="";const s=e.x.translate/n.x,u=e.y.translate/n.y,c=(o==null?void 0:o.z)||0;if((s||u||c)&&(i=`translate3d(${s}px, ${u}px, ${c}px) `),(n.x!==1||n.y!==1)&&(i+=`scale(${1/n.x}, ${1/n.y}) `),o){const{transformPerspective:h,rotate:g,rotateX:y,rotateY:v,skewX:S,skewY:w}=o;h&&(i=`perspective(${h}px) ${i}`),g&&(i+=`rotate(${g}deg) `),y&&(i+=`rotateX(${y}deg) `),v&&(i+=`rotateY(${v}deg) `),S&&(i+=`skewX(${S}deg) `),w&&(i+=`skewY(${w}deg) `)}const d=e.x.scale*n.x,p=e.y.scale*n.y;return(d!==1||p!==1)&&(i+=`scale(${d}, ${p})`),i||"none"}const Lr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Mi=typeof window<"u"&&window.MotionDebug!==void 0,uc=["","X","Y","Z"],Fk={visibility:"hidden"},Gm=1e3;let Vk=0;function cc(e,n,o,i){const{latestValues:s}=n;s[e]&&(o[e]=s[e],n.setStaticValue(e,0),i&&(i[e]=0))}function Pv(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const o=_y(n);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:s,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(o,"transform",Ge,!(s||u))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&Pv(i)}function kv({attachResizeListener:e,defaultParent:n,measureScroll:o,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(c={},d=n==null?void 0:n()){this.id=Vk++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Mi&&(Lr.totalNodes=Lr.resolvedTargetDeltas=Lr.recalculatedProjection=0),this.nodes.forEach($k),this.nodes.forEach(Gk),this.nodes.forEach(Xk),this.nodes.forEach(qk),Mi&&window.MotionDebug.record(Lr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ok)}addEventListener(c,d){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Af),this.eventHandlers.get(c).add(d)}notifyListeners(c,...d){const p=this.eventHandlers.get(c);p&&p.notify(...d)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,d=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Tk(c),this.instance=c;const{layoutId:p,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),d&&(h||p)&&(this.isLayoutDirty=!0),e){let y;const v=()=>this.root.updateBlockedByResize=!1;e(c,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=Ck(v,250),ks.hasAnimatedSinceResize&&(ks.hasAnimatedSinceResize=!1,this.nodes.forEach(Ym))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||h)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeTargetChanged:S,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||g.getDefaultTransition()||eT,{onLayoutAnimationStart:P,onLayoutAnimationComplete:E}=g.getProps(),L=!this.targetLayout||!Sv(this.targetLayout,w)||S,_=!v&&S;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||_||v&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,_);const X={...kf(x,"layout"),onPlay:P,onComplete:E};(g.shouldReduceMotion||this.options.layoutRoot)&&(X.delay=0,X.type=!1),this.startAnimation(X)}else v||Ym(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,hr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Yk),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Pv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:d,layout:p}=this.options;if(d===void 0&&!p)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Xm);return}this.isUpdating||this.nodes.forEach(Wk),this.isUpdating=!1,this.nodes.forEach(Kk),this.nodes.forEach(Bk),this.nodes.forEach(Uk),this.clearAllSnapshots();const d=kn.now();xt.delta=qn(0,1e3/60,d-xt.timestamp),xt.timestamp=d,xt.isProcessing=!0,tc.update.process(xt),tc.preRender.process(xt),tc.render.process(xt),xt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,hf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Hk),this.sharedNodes.forEach(Qk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ge.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ge.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=lt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(d=!1),d){const p=i(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:p,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!s)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!xv(this.projectionDelta),p=this.getTransformTemplate(),h=p?p(this.latestValues,""):void 0,g=h!==this.prevTransformTemplateValue;c&&(d||Mr(this.latestValues)||g)&&(s(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const d=this.measurePageBox();let p=this.removeElementScroll(d);return c&&(p=this.removeTransform(p)),tT(p),{animationId:this.root.animationId,measuredBox:d,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:d}=this.options;if(!d)return lt();const p=d.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(nT))){const{scroll:g}=this.root;g&&(So(p.x,g.offset.x),So(p.y,g.offset.y))}return p}removeElementScroll(c){var d;const p=lt();if(Zt(p,c),!((d=this.scroll)===null||d===void 0)&&d.wasRoot)return p;for(let h=0;h<this.path.length;h++){const g=this.path[h],{scroll:y,options:v}=g;g!==this.root&&y&&v.layoutScroll&&(y.wasRoot&&Zt(p,c),So(p.x,y.offset.x),So(p.y,y.offset.y))}return p}applyTransform(c,d=!1){const p=lt();Zt(p,c);for(let h=0;h<this.path.length;h++){const g=this.path[h];!d&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Po(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Mr(g.latestValues)&&Po(p,g.latestValues)}return Mr(this.latestValues)&&Po(p,this.latestValues),p}removeTransform(c){const d=lt();Zt(d,c);for(let p=0;p<this.path.length;p++){const h=this.path[p];if(!h.instance||!Mr(h.latestValues))continue;Uc(h.latestValues)&&h.updateSnapshot();const g=lt(),y=h.measurePageBox();Zt(g,y),Um(d,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,g)}return Mr(this.latestValues)&&Um(d,this.latestValues),d}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var d;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=xt.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=lt(),this.relativeTargetOrigin=lt(),Ii(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),Zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=lt(),this.targetWithTransforms=lt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ik(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Zt(this.target,this.layout.layoutBox),mv(this.target,this.targetDelta)):Zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=lt(),this.relativeTargetOrigin=lt(),Ii(this.relativeTargetOrigin,this.target,S.target),Zt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Mi&&Lr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Uc(this.parent.latestValues)||hv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const d=this.getLead(),p=!!this.resumingFrom||this!==d;let h=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===xt.timestamp&&(h=!1),h)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Zt(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,S=this.treeScale.y;hk(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=lt());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Fm(this.prevProjectionDelta.x,this.projectionDelta.x),Fm(this.prevProjectionDelta.y,this.projectionDelta.y)),zi(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==S||!Km(this.projectionDelta.x,this.prevProjectionDelta.x)||!Km(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w)),Mi&&Lr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var d;if((d=this.options.visualElement)===null||d===void 0||d.scheduleRender(),c){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xo(),this.projectionDelta=xo(),this.projectionDeltaWithTransform=xo()}setAnimationOrigin(c,d=!1){const p=this.snapshot,h=p?p.latestValues:{},g={...this.latestValues},y=xo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const v=lt(),S=p?p.source:void 0,w=this.layout?this.layout.source:void 0,x=S!==w,P=this.getStack(),E=!P||P.members.length<=1,L=!!(x&&!E&&this.options.crossfade===!0&&!this.path.some(Zk));this.animationProgress=0;let _;this.mixTargetDelta=X=>{const F=X/1e3;Qm(y.x,c.x,F),Qm(y.y,c.y,F),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ii(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Jk(this.relativeTarget,this.relativeTargetOrigin,v,F),_&&jk(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=lt()),Zt(_,this.relativeTarget)),x&&(this.animationValues=g,Ak(g,h,this.latestValues,F,L,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(hr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ge.update(()=>{ks.hasAnimatedSinceResize=!0,this.currentAnimation=kk(0,Gm,{...c,onUpdate:d=>{this.mixTargetDelta(d),c.onUpdate&&c.onUpdate(d)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Gm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:d,target:p,layout:h,latestValues:g}=c;if(!(!d||!p||!h)){if(this!==c&&this.layout&&h&&Tv(this.options.animationType,this.layout.layoutBox,h.layoutBox)){p=this.target||lt();const y=Wt(this.layout.layoutBox.x);p.x.min=c.target.x.min,p.x.max=p.x.min+y;const v=Wt(this.layout.layoutBox.y);p.y.min=c.target.y.min,p.y.max=p.y.min+v}Zt(d,p),Po(d,g),zi(this.projectionDeltaWithTransform,this.layoutCorrected,d,g)}}registerSharedNode(c,d){this.sharedNodes.has(c)||this.sharedNodes.set(c,new zk),this.sharedNodes.get(c).add(d);const h=d.options.initialPromotionConfig;d.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(d):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:d}=this.options;return d?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:d}=this.options;return d?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:d,preserveFollowOpacity:p}={}){const h=this.getStack();h&&h.promote(this,p),c&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let d=!1;const{latestValues:p}=c;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(d=!0),!d)return;const h={};p.z&&cc("z",c,h,this.animationValues);for(let g=0;g<uc.length;g++)cc(`rotate${uc[g]}`,c,h,this.animationValues),cc(`skew${uc[g]}`,c,h,this.animationValues);c.render();for(const g in h)c.setStaticValue(g,h[g]),this.animationValues&&(this.animationValues[g]=h[g]);c.scheduleRender()}getProjectionStyles(c){var d,p;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Fk;const h={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Ss(c==null?void 0:c.pointerEvents)||"",h.transform=g?g(this.latestValues,""):"none",h;const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Ss(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Mr(this.latestValues)&&(x.transform=g?g({},""):"none",this.hasProjected=!1),x}const v=y.animationValues||y.latestValues;this.applyTransformsToTarget(),h.transform=Ik(this.projectionDeltaWithTransform,this.treeScale,v),g&&(h.transform=g(v,h.transform));const{x:S,y:w}=this.projectionDelta;h.transformOrigin=`${S.origin*100}% ${w.origin*100}% 0`,y.animationValues?h.opacity=y===this?(p=(d=v.opacity)!==null&&d!==void 0?d:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=y===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const x in As){if(v[x]===void 0)continue;const{correct:P,applyTo:E}=As[x],L=h.transform==="none"?v[x]:P(v[x],y);if(E){const _=E.length;for(let X=0;X<_;X++)h[E[X]]=L}else h[x]=L}return this.options.layoutId&&(h.pointerEvents=y===this?Ss(c==null?void 0:c.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var d;return(d=c.currentAnimation)===null||d===void 0?void 0:d.stop()}),this.root.nodes.forEach(Xm),this.root.sharedNodes.clear()}}}function Bk(e){e.updateLayout()}function Uk(e){var n;const o=((n=e.resumeFrom)===null||n===void 0?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&o&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=e.layout,{animationType:u}=e.options,c=o.source!==e.layout.source;u==="size"?en(y=>{const v=c?o.measuredBox[y]:o.layoutBox[y],S=Wt(v);v.min=i[y].min,v.max=v.min+S}):Tv(u,o.layoutBox,i)&&en(y=>{const v=c?o.measuredBox[y]:o.layoutBox[y],S=Wt(i[y]);v.max=v.min+S,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[y].max=e.relativeTarget[y].min+S)});const d=xo();zi(d,i,o.layoutBox);const p=xo();c?zi(p,e.applyTransform(s,!0),o.measuredBox):zi(p,i,o.layoutBox);const h=!xv(d);let g=!1;if(!e.resumeFrom){const y=e.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:v,layout:S}=y;if(v&&S){const w=lt();Ii(w,o.layoutBox,v.layoutBox);const x=lt();Ii(x,i,S.layoutBox),Sv(w,x)||(g=!0),y.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=w,e.relativeParent=y)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:o,delta:p,layoutDelta:d,hasLayoutChanged:h,hasRelativeTargetChanged:g})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function $k(e){Mi&&Lr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function qk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Hk(e){e.clearSnapshot()}function Xm(e){e.clearMeasurements()}function Wk(e){e.isLayoutDirty=!1}function Kk(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ym(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Gk(e){e.resolveTargetDelta()}function Xk(e){e.calcProjection()}function Yk(e){e.resetSkewAndRotation()}function Qk(e){e.removeLeadSnapshot()}function Qm(e,n,o){e.translate=et(n.translate,0,o),e.scale=et(n.scale,1,o),e.origin=n.origin,e.originPoint=n.originPoint}function Jm(e,n,o,i){e.min=et(n.min,o.min,i),e.max=et(n.max,o.max,i)}function Jk(e,n,o,i){Jm(e.x,n.x,o.x,i),Jm(e.y,n.y,o.y,i)}function Zk(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const eT={duration:.45,ease:[.4,0,.1,1]},Zm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),eg=Zm("applewebkit/")&&!Zm("chrome/")?Math.round:qt;function tg(e){e.min=eg(e.min),e.max=eg(e.max)}function tT(e){tg(e.x),tg(e.y)}function Tv(e,n,o){return e==="position"||e==="preserve-aspect"&&!ok(Wm(n),Wm(o),.2)}function nT(e){var n;return e!==e.root&&((n=e.scroll)===null||n===void 0?void 0:n.wasRoot)}const rT=kv({attachResizeListener:(e,n)=>qi(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),fc={current:void 0},Ev=kv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!fc.current){const e=new rT({});e.mount(window),e.setOptions({layoutScroll:!0}),fc.current=e}return fc.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),oT={pan:{Feature:wk},drag:{Feature:bk,ProjectionNode:Ev,MeasureLayout:vv}};function ng(e,n,o){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",o==="Start");const s="onHover"+o,u=i[s];u&&Ge.postRender(()=>u(n,Ji(n)))}class iT extends gr{mount(){const{current:n}=this.node;n&&(this.unmount=oS(n,o=>(ng(this.node,o,"Start"),i=>ng(this.node,i,"End"))))}unmount(){}}class aT extends gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qi(qi(this.node.current,"focus",()=>this.onFocus()),qi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function rg(e,n,o){const{props:i}=e;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",o==="Start");const s="onTap"+(o==="End"?"":o),u=i[s];u&&Ge.postRender(()=>u(n,Ji(n)))}class sT extends gr{mount(){const{current:n}=this.node;n&&(this.unmount=lS(n,o=>(rg(this.node,o,"Start"),(i,{success:s})=>rg(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const qc=new WeakMap,dc=new WeakMap,lT=e=>{const n=qc.get(e.target);n&&n(e)},uT=e=>{e.forEach(lT)};function cT({root:e,...n}){const o=e||document;dc.has(o)||dc.set(o,{});const i=dc.get(o),s=JSON.stringify(n);return i[s]||(i[s]=new IntersectionObserver(uT,{root:e,...n})),i[s]}function fT(e,n,o){const i=cT(n);return qc.set(e,o),i.observe(e),()=>{qc.delete(e),i.unobserve(e)}}const dT={some:0,all:1};class pT extends gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:o,margin:i,amount:s="some",once:u}=n,c={root:o?o.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:dT[s]},d=p=>{const{isIntersecting:h}=p;if(this.isInView===h||(this.isInView=h,u&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),v=h?g:y;v&&v(p)};return fT(this.node.current,c,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:o}=this.node;["amount","margin","root"].some(hT(n,o))&&this.startObserver()}unmount(){}}function hT({viewport:e={}},{viewport:n={}}={}){return o=>e[o]!==n[o]}const mT={inView:{Feature:pT},tap:{Feature:sT},focus:{Feature:aT},hover:{Feature:iT}},gT={layout:{ProjectionNode:Ev,MeasureLayout:vv}},Hc={current:null},Ov={current:!1};function yT(){if(Ov.current=!0,!!uf)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>Hc.current=e.matches;e.addListener(n),n()}else Hc.current=!1}const vT=[...Jy,Et,mr],bT=e=>vT.find(Qy(e)),og=new WeakMap;function wT(e,n,o){for(const i in n){const s=n[i],u=o[i];if(Ct(s))e.addValue(i,s);else if(Ct(u))e.addValue(i,Ui(s,{owner:e}));else if(u!==s)if(e.hasValue(i)){const c=e.getValue(i);c.liveStyle===!0?c.jump(s):c.hasAnimated||c.set(s)}else{const c=e.getStaticValue(i);e.addValue(i,Ui(c!==void 0?c:s,{owner:e}))}}for(const i in o)n[i]===void 0&&e.removeValue(i);return n}const ig=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class xT{scrapeMotionValuesFromProps(n,o,i){return{}}constructor({parent:n,props:o,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:u,visualState:c},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=jf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=kn.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Ge.render(this.render,!1,!0))};const{latestValues:p,renderState:h,onUpdate:g}=c;this.onUpdate=g,this.latestValues=p,this.baseTarget={...p},this.initialValues=o.initial?{...p}:{},this.renderState=h,this.parent=n,this.props=o,this.presenceContext=i,this.depth=n?n.depth+1:0,this.reducedMotionConfig=s,this.options=d,this.blockInitialAnimation=!!u,this.isControllingVariants=Hs(o),this.isVariantNode=ay(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(o,{},this);for(const S in v){const w=v[S];p[S]!==void 0&&Ct(w)&&w.set(p[S],!1)}}mount(n){this.current=n,og.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,i)=>this.bindToMotionValue(i,o)),Ov.current||yT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Hc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){og.delete(this.current),this.projection&&this.projection.unmount(),hr(this.notifyUpdate),hr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const o=this.features[n];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(n,o){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const i=Ur.has(n),s=o.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&Ge.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),u=o.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,n,o)),this.valueSubscriptions.set(n,()=>{s(),u(),c&&c(),o.owner&&o.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Oo){const o=Oo[n];if(!o)continue;const{isEnabled:i,Feature:s}=o;if(!this.features[n]&&s&&i(this.props)&&(this.features[n]=new s(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):lt()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,o){this.latestValues[n]=o}update(n,o){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let i=0;i<ig.length;i++){const s=ig[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const u="on"+s,c=n[u];c&&(this.propEventSubscriptions[s]=this.on(s,c))}this.prevMotionValues=wT(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(n),()=>o.variantChildren.delete(n)}addValue(n,o){const i=this.values.get(n);o!==i&&(i&&this.removeValue(n),this.bindToMotionValue(n,o),this.values.set(n,o),this.latestValues[n]=o.get())}removeValue(n){this.values.delete(n);const o=this.valueSubscriptions.get(n);o&&(o(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,o){if(this.props.values&&this.props.values[n])return this.props.values[n];let i=this.values.get(n);return i===void 0&&o!==void 0&&(i=Ui(o===null?void 0:o,{owner:this}),this.addValue(n,i)),i}readValue(n,o){var i;let s=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(i=this.getBaseTargetFromProps(this.props,n))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,n,this.options);return s!=null&&(typeof s=="string"&&(Xy(s)||Vy(s))?s=parseFloat(s):!bT(s)&&mr.test(o)&&(s=Wy(n,o)),this.setBaseTarget(n,Ct(s)?s.get():s)),Ct(s)?s.get():s}setBaseTarget(n,o){this.baseTarget[n]=o}getBaseTarget(n){var o;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const c=gf(this.props,i,(o=this.presenceContext)===null||o===void 0?void 0:o.custom);c&&(s=c[n])}if(i&&s!==void 0)return s;const u=this.getBaseTargetFromProps(this.props,n);return u!==void 0&&!Ct(u)?u:this.initialValues[n]!==void 0&&s===void 0?void 0:this.baseTarget[n]}on(n,o){return this.events[n]||(this.events[n]=new Af),this.events[n].add(o)}notify(n,...o){this.events[n]&&this.events[n].notify(...o)}}class Cv extends xT{constructor(){super(...arguments),this.KeyframeResolver=Zy}sortInstanceNodePosition(n,o){return n.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(n,o){return n.style?n.style[o]:void 0}removeValueFromRenderState(n,{vars:o,style:i}){delete o[n],delete i[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;Ct(n)&&(this.childSubscription=n.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function ST(e){return window.getComputedStyle(e)}class PT extends Cv{constructor(){super(...arguments),this.type="html",this.renderInstance=my}readValueFromInstance(n,o){if(Ur.has(o)){const i=Nf(o);return i&&i.default||0}else{const i=ST(n),s=(dy(o)?i.getPropertyValue(o):i[o])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(n,{transformPagePoint:o}){return gv(n,o)}build(n,o,i){bf(n,o,i.transformTemplate)}scrapeMotionValuesFromProps(n,o,i){return Pf(n,o,i)}}class kT extends Cv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=lt}getBaseTargetFromProps(n,o){return n[o]}readValueFromInstance(n,o){if(Ur.has(o)){const i=Nf(o);return i&&i.default||0}return o=gy.has(o)?o:pf(o),n.getAttribute(o)}scrapeMotionValuesFromProps(n,o,i){return by(n,o,i)}build(n,o,i){wf(n,o,this.isSVGTag,i.transformTemplate)}renderInstance(n,o,i,s){yy(n,o,i,s)}mount(n){this.isSVGTag=Sf(n.tagName),super.mount(n)}}const TT=(e,n)=>mf(e)?new kT(n):new PT(n,{allowProjection:e!==R.Fragment}),ET=Qx({...XP,...mT,...oT,...gT},TT),qO=dx(ET);var pc={},hc={},mc={},ag;function OT(){return ag||(ag=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];if(typeof window<"u"){var d;typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(d=window).gtag.apply(d,u)}},o=n;e.default=o}(mc)),mc}var gc={},sg;function CT(){return sg||(sg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var n=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function o(d){return d.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(p,h,g){return h>0&&h+p.length!==g.length&&p.search(n)>-1&&g.charAt(h-2)!==":"&&(g.charAt(h+p.length)!=="-"||g.charAt(h-1)==="-")&&g.charAt(h-1).search(/[^\s-]/)<0?p.toLowerCase():p.substr(1).search(/[A-Z]|\../)>-1?p:p.charAt(0).toUpperCase()+p.substr(1)})}function i(d){return typeof d=="string"&&d.indexOf("@")!==-1}var s="REDACTED (Potential Email Address)";function u(d){return i(d)?(console.warn("This arg looks like an email address, redacting."),s):d}function c(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,g=d||"";return p&&(g=o(d)),h&&(g=u(g)),g}}(gc)),gc}var lg;function RT(){return lg||(lg=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.GA4=void 0;var n=c(OT()),o=c(CT()),i=["eventCategory","eventAction","eventLabel","eventValue","hitType"],s=["title","location"],u=["page","hitType"];function c(q){return q&&q.__esModule?q:{default:q}}function d(q,j){if(q==null)return{};var V=p(q,j),z,D;if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(q);for(D=0;D<H.length;D++)z=H[D],!(j.indexOf(z)>=0)&&Object.prototype.propertyIsEnumerable.call(q,z)&&(V[z]=q[z])}return V}function p(q,j){if(q==null)return{};var V={},z=Object.keys(q),D,H;for(H=0;H<z.length;H++)D=z[H],!(j.indexOf(D)>=0)&&(V[D]=q[D]);return V}function h(q){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},h(q)}function g(q){return S(q)||v(q)||L(q)||y()}function y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(q){if(typeof Symbol<"u"&&q[Symbol.iterator]!=null||q["@@iterator"]!=null)return Array.from(q)}function S(q){if(Array.isArray(q))return _(q)}function w(q,j){var V=Object.keys(q);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(q);j&&(z=z.filter(function(D){return Object.getOwnPropertyDescriptor(q,D).enumerable})),V.push.apply(V,z)}return V}function x(q){for(var j=1;j<arguments.length;j++){var V=arguments[j]!=null?arguments[j]:{};j%2?w(Object(V),!0).forEach(function(z){J(q,z,V[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(q,Object.getOwnPropertyDescriptors(V)):w(Object(V)).forEach(function(z){Object.defineProperty(q,z,Object.getOwnPropertyDescriptor(V,z))})}return q}function P(q,j){return F(q)||X(q,j)||L(q,j)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(q,j){if(q){if(typeof q=="string")return _(q,j);var V=Object.prototype.toString.call(q).slice(8,-1);if(V==="Object"&&q.constructor&&(V=q.constructor.name),V==="Map"||V==="Set")return Array.from(q);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return _(q,j)}}function _(q,j){(j==null||j>q.length)&&(j=q.length);for(var V=0,z=new Array(j);V<j;V++)z[V]=q[V];return z}function X(q,j){var V=q==null?null:typeof Symbol<"u"&&q[Symbol.iterator]||q["@@iterator"];if(V!=null){var z,D,H,W,O=[],B=!0,ie=!1;try{if(H=(V=V.call(q)).next,j!==0)for(;!(B=(z=H.call(V)).done)&&(O.push(z.value),O.length!==j);B=!0);}catch(se){ie=!0,D=se}finally{try{if(!B&&V.return!=null&&(W=V.return(),Object(W)!==W))return}finally{if(ie)throw D}}return O}}function F(q){if(Array.isArray(q))return q}function ee(q,j){if(!(q instanceof j))throw new TypeError("Cannot call a class as a function")}function ae(q,j){for(var V=0;V<j.length;V++){var z=j[V];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(q,be(z.key),z)}}function K(q,j,V){return j&&ae(q.prototype,j),Object.defineProperty(q,"prototype",{writable:!1}),q}function J(q,j,V){return j=be(j),j in q?Object.defineProperty(q,j,{value:V,enumerable:!0,configurable:!0,writable:!0}):q[j]=V,q}function be(q){var j=_e(q,"string");return h(j)==="symbol"?j:String(j)}function _e(q,j){if(h(q)!=="object"||q===null)return q;var V=q[Symbol.toPrimitive];if(V!==void 0){var z=V.call(q,j);if(h(z)!=="object")return z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(j==="string"?String:Number)(q)}var De=function(){function q(){var j=this;ee(this,q),J(this,"reset",function(){j.isInitialized=!1,j._testMode=!1,j._currentMeasurementId,j._hasLoadedGA=!1,j._isQueuing=!1,j._queueGtag=[]}),J(this,"_gtag",function(){for(var V=arguments.length,z=new Array(V),D=0;D<V;D++)z[D]=arguments[D];j._testMode||j._isQueuing?j._queueGtag.push(z):n.default.apply(void 0,z)}),J(this,"_loadGA",function(V,z){var D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"https://www.googletagmanager.com/gtag/js";if(!(typeof window>"u"||typeof document>"u")&&!j._hasLoadedGA){var H=document.createElement("script");H.async=!0,H.src="".concat(D,"?id=").concat(V),z&&H.setAttribute("nonce",z),document.body.appendChild(H),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},j._hasLoadedGA=!0}}),J(this,"_toGtagOptions",function(V){if(V){var z={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"},D=Object.entries(V).reduce(function(H,W){var O=P(W,2),B=O[0],ie=O[1];return z[B]?H[z[B]]=ie:H[B]=ie,H},{});return D}}),J(this,"initialize",function(V){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!V)throw new Error("Require GA_MEASUREMENT_ID");var D=typeof V=="string"?[{trackingId:V}]:V;j._currentMeasurementId=D[0].trackingId;var H=z.gaOptions,W=z.gtagOptions,O=z.nonce,B=z.testMode,ie=B===void 0?!1:B,se=z.gtagUrl;if(j._testMode=ie,ie||j._loadGA(j._currentMeasurementId,O,se),j.isInitialized||(j._gtag("js",new Date),D.forEach(function(Me){var Oe=x(x(x({},j._toGtagOptions(x(x({},H),Me.gaOptions))),W),Me.gtagOptions);Object.keys(Oe).length?j._gtag("config",Me.trackingId,Oe):j._gtag("config",Me.trackingId)})),j.isInitialized=!0,!ie){var xe=g(j._queueGtag);for(j._queueGtag=[],j._isQueuing=!1;xe.length;){var Pe=xe.shift();j._gtag.apply(j,g(Pe)),Pe[0]==="get"&&(j._isQueuing=!0)}}}),J(this,"set",function(V){if(!V){console.warn("`fieldsObject` is required in .set()");return}if(h(V)!=="object"){console.warn("Expected `fieldsObject` arg to be an Object");return}Object.keys(V).length===0&&console.warn("empty `fieldsObject` given to .set()"),j._gaCommand("set",V)}),J(this,"_gaCommandSendEvent",function(V,z,D,H,W){j._gtag("event",z,x(x({event_category:V,event_label:D,value:H},W&&{non_interaction:W.nonInteraction}),j._toGtagOptions(W)))}),J(this,"_gaCommandSendEventParameters",function(){for(var V=arguments.length,z=new Array(V),D=0;D<V;D++)z[D]=arguments[D];if(typeof z[0]=="string")j._gaCommandSendEvent.apply(j,g(z.slice(1)));else{var H=z[0],W=H.eventCategory,O=H.eventAction,B=H.eventLabel,ie=H.eventValue;H.hitType;var se=d(H,i);j._gaCommandSendEvent(W,O,B,ie,se)}}),J(this,"_gaCommandSendTiming",function(V,z,D,H){j._gtag("event","timing_complete",{name:z,value:D,event_category:V,event_label:H})}),J(this,"_gaCommandSendPageview",function(V,z){if(z&&Object.keys(z).length){var D=j._toGtagOptions(z),H=D.title,W=D.location,O=d(D,s);j._gtag("event","page_view",x(x(x(x({},V&&{page_path:V}),H&&{page_title:H}),W&&{page_location:W}),O))}else V?j._gtag("event","page_view",{page_path:V}):j._gtag("event","page_view")}),J(this,"_gaCommandSendPageviewParameters",function(){for(var V=arguments.length,z=new Array(V),D=0;D<V;D++)z[D]=arguments[D];if(typeof z[0]=="string")j._gaCommandSendPageview.apply(j,g(z.slice(1)));else{var H=z[0],W=H.page;H.hitType;var O=d(H,u);j._gaCommandSendPageview(W,O)}}),J(this,"_gaCommandSend",function(){for(var V=arguments.length,z=new Array(V),D=0;D<V;D++)z[D]=arguments[D];var H=typeof z[0]=="string"?z[0]:z[0].hitType;switch(H){case"event":j._gaCommandSendEventParameters.apply(j,z);break;case"pageview":j._gaCommandSendPageviewParameters.apply(j,z);break;case"timing":j._gaCommandSendTiming.apply(j,g(z.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(H));break;default:console.warn("Send command doesn't exist: ".concat(H))}}),J(this,"_gaCommandSet",function(){for(var V=arguments.length,z=new Array(V),D=0;D<V;D++)z[D]=arguments[D];typeof z[0]=="string"&&(z[0]=J({},z[0],z[1])),j._gtag("set",j._toGtagOptions(z[0]))}),J(this,"_gaCommand",function(V){for(var z=arguments.length,D=new Array(z>1?z-1:0),H=1;H<z;H++)D[H-1]=arguments[H];switch(V){case"send":j._gaCommandSend.apply(j,D);break;case"set":j._gaCommandSet.apply(j,D);break;default:console.warn("Command doesn't exist: ".concat(V))}}),J(this,"ga",function(){for(var V=arguments.length,z=new Array(V),D=0;D<V;D++)z[D]=arguments[D];if(typeof z[0]=="string")j._gaCommand.apply(j,z);else{var H=z[0];j._gtag("get",j._currentMeasurementId,"client_id",function(W){j._isQueuing=!1;var O=j._queueGtag;for(H({get:function(se){return se==="clientId"?W:se==="trackingId"?j._currentMeasurementId:se==="apiVersion"?"1":void 0}});O.length;){var B=O.shift();j._gtag.apply(j,g(B))}}),j._isQueuing=!0}return j.ga}),J(this,"event",function(V,z){if(typeof V=="string")j._gtag("event",V,j._toGtagOptions(z));else{var D=V.action,H=V.category,W=V.label,O=V.value,B=V.nonInteraction,ie=V.transport;if(!H||!D){console.warn("args.category AND args.action are required in event()");return}var se={hitType:"event",eventCategory:(0,o.default)(H),eventAction:(0,o.default)(D)};W&&(se.eventLabel=(0,o.default)(W)),typeof O<"u"&&(typeof O!="number"?console.warn("Expected `args.value` arg to be a Number."):se.eventValue=O),typeof B<"u"&&(typeof B!="boolean"?console.warn("`args.nonInteraction` must be a boolean."):se.nonInteraction=B),typeof ie<"u"&&(typeof ie!="string"?console.warn("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(ie)===-1&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),se.transport=ie)),j._gaCommand("send",se)}}),J(this,"send",function(V){j._gaCommand("send",V)}),this.reset()}return K(q,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),q}();e.GA4=De;var je=new De;e.default=je}(hc)),hc}var ug;function AT(){return ug||(ug=1,function(e){function n(d){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},n(d)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ReactGAImplementation=void 0;var o=s(RT());function i(d){if(typeof WeakMap!="function")return null;var p=new WeakMap,h=new WeakMap;return(i=function(y){return y?h:p})(d)}function s(d,p){if(d&&d.__esModule)return d;if(d===null||n(d)!=="object"&&typeof d!="function")return{default:d};var h=i(p);if(h&&h.has(d))return h.get(d);var g={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in d)if(v!=="default"&&Object.prototype.hasOwnProperty.call(d,v)){var S=y?Object.getOwnPropertyDescriptor(d,v):null;S&&(S.get||S.set)?Object.defineProperty(g,v,S):g[v]=d[v]}return g.default=d,h&&h.set(d,g),g}var u=o.GA4;e.ReactGAImplementation=u;var c=o.default;e.default=c}(pc)),pc}var _T=AT();const HO=Ro(_T);function Rv(e,n){return function(){return e.apply(n,arguments)}}const{toString:DT}=Object.prototype,{getPrototypeOf:Vf}=Object,Gs=(e=>n=>{const o=DT.call(n);return e[o]||(e[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),hn=e=>(e=e.toLowerCase(),n=>Gs(n)===e),Xs=e=>n=>typeof n===e,{isArray:Lo}=Array,Hi=Xs("undefined");function MT(e){return e!==null&&!Hi(e)&&e.constructor!==null&&!Hi(e.constructor)&&Ht(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Av=hn("ArrayBuffer");function LT(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Av(e.buffer),n}const NT=Xs("string"),Ht=Xs("function"),_v=Xs("number"),Ys=e=>e!==null&&typeof e=="object",jT=e=>e===!0||e===!1,Ts=e=>{if(Gs(e)!=="object")return!1;const n=Vf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},zT=hn("Date"),IT=hn("File"),FT=hn("Blob"),VT=hn("FileList"),BT=e=>Ys(e)&&Ht(e.pipe),UT=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||Ht(e.append)&&((n=Gs(e))==="formdata"||n==="object"&&Ht(e.toString)&&e.toString()==="[object FormData]"))},$T=hn("URLSearchParams"),[qT,HT,WT,KT]=["ReadableStream","Request","Response","Headers"].map(hn),GT=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Zi(e,n,{allOwnKeys:o=!1}={}){if(e===null||typeof e>"u")return;let i,s;if(typeof e!="object"&&(e=[e]),Lo(e))for(i=0,s=e.length;i<s;i++)n.call(null,e[i],i,e);else{const u=o?Object.getOwnPropertyNames(e):Object.keys(e),c=u.length;let d;for(i=0;i<c;i++)d=u[i],n.call(null,e[d],d,e)}}function Dv(e,n){n=n.toLowerCase();const o=Object.keys(e);let i=o.length,s;for(;i-- >0;)if(s=o[i],n===s.toLowerCase())return s;return null}const jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Mv=e=>!Hi(e)&&e!==jr;function Wc(){const{caseless:e}=Mv(this)&&this||{},n={},o=(i,s)=>{const u=e&&Dv(n,s)||s;Ts(n[u])&&Ts(i)?n[u]=Wc(n[u],i):Ts(i)?n[u]=Wc({},i):Lo(i)?n[u]=i.slice():n[u]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Zi(arguments[i],o);return n}const XT=(e,n,o,{allOwnKeys:i}={})=>(Zi(n,(s,u)=>{o&&Ht(s)?e[u]=Rv(s,o):e[u]=s},{allOwnKeys:i}),e),YT=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),QT=(e,n,o,i)=>{e.prototype=Object.create(n.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),o&&Object.assign(e.prototype,o)},JT=(e,n,o,i)=>{let s,u,c;const d={};if(n=n||{},e==null)return n;do{for(s=Object.getOwnPropertyNames(e),u=s.length;u-- >0;)c=s[u],(!i||i(c,e,n))&&!d[c]&&(n[c]=e[c],d[c]=!0);e=o!==!1&&Vf(e)}while(e&&(!o||o(e,n))&&e!==Object.prototype);return n},ZT=(e,n,o)=>{e=String(e),(o===void 0||o>e.length)&&(o=e.length),o-=n.length;const i=e.indexOf(n,o);return i!==-1&&i===o},eE=e=>{if(!e)return null;if(Lo(e))return e;let n=e.length;if(!_v(n))return null;const o=new Array(n);for(;n-- >0;)o[n]=e[n];return o},tE=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Vf(Uint8Array)),nE=(e,n)=>{const i=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=i.next())&&!s.done;){const u=s.value;n.call(e,u[0],u[1])}},rE=(e,n)=>{let o;const i=[];for(;(o=e.exec(n))!==null;)i.push(o);return i},oE=hn("HTMLFormElement"),iE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,i,s){return i.toUpperCase()+s}),cg=(({hasOwnProperty:e})=>(n,o)=>e.call(n,o))(Object.prototype),aE=hn("RegExp"),Lv=(e,n)=>{const o=Object.getOwnPropertyDescriptors(e),i={};Zi(o,(s,u)=>{let c;(c=n(s,u,e))!==!1&&(i[u]=c||s)}),Object.defineProperties(e,i)},sE=e=>{Lv(e,(n,o)=>{if(Ht(e)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const i=e[o];if(Ht(i)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},lE=(e,n)=>{const o={},i=s=>{s.forEach(u=>{o[u]=!0})};return Lo(e)?i(e):i(String(e).split(n)),o},uE=()=>{},cE=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function fE(e){return!!(e&&Ht(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const dE=e=>{const n=new Array(10),o=(i,s)=>{if(Ys(i)){if(n.indexOf(i)>=0)return;if(!("toJSON"in i)){n[s]=i;const u=Lo(i)?[]:{};return Zi(i,(c,d)=>{const p=o(c,s+1);!Hi(p)&&(u[d]=p)}),n[s]=void 0,u}}return i};return o(e,0)},pE=hn("AsyncFunction"),hE=e=>e&&(Ys(e)||Ht(e))&&Ht(e.then)&&Ht(e.catch),Nv=((e,n)=>e?setImmediate:n?((o,i)=>(jr.addEventListener("message",({source:s,data:u})=>{s===jr&&u===o&&i.length&&i.shift()()},!1),s=>{i.push(s),jr.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",Ht(jr.postMessage)),mE=typeof queueMicrotask<"u"?queueMicrotask.bind(jr):typeof process<"u"&&process.nextTick||Nv,U={isArray:Lo,isArrayBuffer:Av,isBuffer:MT,isFormData:UT,isArrayBufferView:LT,isString:NT,isNumber:_v,isBoolean:jT,isObject:Ys,isPlainObject:Ts,isReadableStream:qT,isRequest:HT,isResponse:WT,isHeaders:KT,isUndefined:Hi,isDate:zT,isFile:IT,isBlob:FT,isRegExp:aE,isFunction:Ht,isStream:BT,isURLSearchParams:$T,isTypedArray:tE,isFileList:VT,forEach:Zi,merge:Wc,extend:XT,trim:GT,stripBOM:YT,inherits:QT,toFlatObject:JT,kindOf:Gs,kindOfTest:hn,endsWith:ZT,toArray:eE,forEachEntry:nE,matchAll:rE,isHTMLForm:oE,hasOwnProperty:cg,hasOwnProp:cg,reduceDescriptors:Lv,freezeMethods:sE,toObjectSet:lE,toCamelCase:iE,noop:uE,toFiniteNumber:cE,findKey:Dv,global:jr,isContextDefined:Mv,isSpecCompliantForm:fE,toJSONObject:dE,isAsyncFn:pE,isThenable:hE,setImmediate:Nv,asap:mE};function Ee(e,n,o,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),o&&(this.config=o),i&&(this.request=i),s&&(this.response=s,this.status=s.status?s.status:null)}U.inherits(Ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.status}}});const jv=Ee.prototype,zv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{zv[e]={value:e}});Object.defineProperties(Ee,zv);Object.defineProperty(jv,"isAxiosError",{value:!0});Ee.from=(e,n,o,i,s,u)=>{const c=Object.create(jv);return U.toFlatObject(e,c,function(p){return p!==Error.prototype},d=>d!=="isAxiosError"),Ee.call(c,e.message,n,o,i,s),c.cause=e,c.name=e.name,u&&Object.assign(c,u),c};const gE=null;function Kc(e){return U.isPlainObject(e)||U.isArray(e)}function Iv(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function fg(e,n,o){return e?e.concat(n).map(function(s,u){return s=Iv(s),!o&&u?"["+s+"]":s}).join(o?".":""):n}function yE(e){return U.isArray(e)&&!e.some(Kc)}const vE=U.toFlatObject(U,{},null,function(n){return/^is[A-Z]/.test(n)});function Qs(e,n,o){if(!U.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,o=U.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,P){return!U.isUndefined(P[x])});const i=o.metaTokens,s=o.visitor||g,u=o.dots,c=o.indexes,p=(o.Blob||typeof Blob<"u"&&Blob)&&U.isSpecCompliantForm(n);if(!U.isFunction(s))throw new TypeError("visitor must be a function");function h(w){if(w===null)return"";if(U.isDate(w))return w.toISOString();if(!p&&U.isBlob(w))throw new Ee("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(w)||U.isTypedArray(w)?p&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function g(w,x,P){let E=w;if(w&&!P&&typeof w=="object"){if(U.endsWith(x,"{}"))x=i?x:x.slice(0,-2),w=JSON.stringify(w);else if(U.isArray(w)&&yE(w)||(U.isFileList(w)||U.endsWith(x,"[]"))&&(E=U.toArray(w)))return x=Iv(x),E.forEach(function(_,X){!(U.isUndefined(_)||_===null)&&n.append(c===!0?fg([x],X,u):c===null?x:x+"[]",h(_))}),!1}return Kc(w)?!0:(n.append(fg(P,x,u),h(w)),!1)}const y=[],v=Object.assign(vE,{defaultVisitor:g,convertValue:h,isVisitable:Kc});function S(w,x){if(!U.isUndefined(w)){if(y.indexOf(w)!==-1)throw Error("Circular reference detected in "+x.join("."));y.push(w),U.forEach(w,function(E,L){(!(U.isUndefined(E)||E===null)&&s.call(n,E,U.isString(L)?L.trim():L,x,v))===!0&&S(E,x?x.concat(L):[L])}),y.pop()}}if(!U.isObject(e))throw new TypeError("data must be an object");return S(e),n}function dg(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return n[i]})}function Bf(e,n){this._pairs=[],e&&Qs(e,this,n)}const Fv=Bf.prototype;Fv.append=function(n,o){this._pairs.push([n,o])};Fv.toString=function(n){const o=n?function(i){return n.call(this,i,dg)}:dg;return this._pairs.map(function(s){return o(s[0])+"="+o(s[1])},"").join("&")};function bE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Vv(e,n,o){if(!n)return e;const i=o&&o.encode||bE;U.isFunction(o)&&(o={serialize:o});const s=o&&o.serialize;let u;if(s?u=s(n,o):u=U.isURLSearchParams(n)?n.toString():new Bf(n,o).toString(i),u){const c=e.indexOf("#");c!==-1&&(e=e.slice(0,c)),e+=(e.indexOf("?")===-1?"?":"&")+u}return e}class pg{constructor(){this.handlers=[]}use(n,o,i){return this.handlers.push({fulfilled:n,rejected:o,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){U.forEach(this.handlers,function(i){i!==null&&n(i)})}}const Bv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},wE=typeof URLSearchParams<"u"?URLSearchParams:Bf,xE=typeof FormData<"u"?FormData:null,SE=typeof Blob<"u"?Blob:null,PE={isBrowser:!0,classes:{URLSearchParams:wE,FormData:xE,Blob:SE},protocols:["http","https","file","blob","url","data"]},Uf=typeof window<"u"&&typeof document<"u",Gc=typeof navigator=="object"&&navigator||void 0,kE=Uf&&(!Gc||["ReactNative","NativeScript","NS"].indexOf(Gc.product)<0),TE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",EE=Uf&&window.location.href||"http://localhost",OE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Uf,hasStandardBrowserEnv:kE,hasStandardBrowserWebWorkerEnv:TE,navigator:Gc,origin:EE},Symbol.toStringTag,{value:"Module"})),Ot={...OE,...PE};function CE(e,n){return Qs(e,new Ot.classes.URLSearchParams,Object.assign({visitor:function(o,i,s,u){return Ot.isNode&&U.isBuffer(o)?(this.append(i,o.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},n))}function RE(e){return U.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function AE(e){const n={},o=Object.keys(e);let i;const s=o.length;let u;for(i=0;i<s;i++)u=o[i],n[u]=e[u];return n}function Uv(e){function n(o,i,s,u){let c=o[u++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),p=u>=o.length;return c=!c&&U.isArray(s)?s.length:c,p?(U.hasOwnProp(s,c)?s[c]=[s[c],i]:s[c]=i,!d):((!s[c]||!U.isObject(s[c]))&&(s[c]=[]),n(o,i,s[c],u)&&U.isArray(s[c])&&(s[c]=AE(s[c])),!d)}if(U.isFormData(e)&&U.isFunction(e.entries)){const o={};return U.forEachEntry(e,(i,s)=>{n(RE(i),s,o,0)}),o}return null}function _E(e,n,o){if(U.isString(e))try{return(n||JSON.parse)(e),U.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(o||JSON.stringify)(e)}const ea={transitional:Bv,adapter:["xhr","http","fetch"],transformRequest:[function(n,o){const i=o.getContentType()||"",s=i.indexOf("application/json")>-1,u=U.isObject(n);if(u&&U.isHTMLForm(n)&&(n=new FormData(n)),U.isFormData(n))return s?JSON.stringify(Uv(n)):n;if(U.isArrayBuffer(n)||U.isBuffer(n)||U.isStream(n)||U.isFile(n)||U.isBlob(n)||U.isReadableStream(n))return n;if(U.isArrayBufferView(n))return n.buffer;if(U.isURLSearchParams(n))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let d;if(u){if(i.indexOf("application/x-www-form-urlencoded")>-1)return CE(n,this.formSerializer).toString();if((d=U.isFileList(n))||i.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Qs(d?{"files[]":n}:n,p&&new p,this.formSerializer)}}return u||s?(o.setContentType("application/json",!1),_E(n)):n}],transformResponse:[function(n){const o=this.transitional||ea.transitional,i=o&&o.forcedJSONParsing,s=this.responseType==="json";if(U.isResponse(n)||U.isReadableStream(n))return n;if(n&&U.isString(n)&&(i&&!this.responseType||s)){const c=!(o&&o.silentJSONParsing)&&s;try{return JSON.parse(n)}catch(d){if(c)throw d.name==="SyntaxError"?Ee.from(d,Ee.ERR_BAD_RESPONSE,this,null,this.response):d}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ot.classes.FormData,Blob:Ot.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],e=>{ea.headers[e]={}});const DE=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ME=e=>{const n={};let o,i,s;return e&&e.split(`
`).forEach(function(c){s=c.indexOf(":"),o=c.substring(0,s).trim().toLowerCase(),i=c.substring(s+1).trim(),!(!o||n[o]&&DE[o])&&(o==="set-cookie"?n[o]?n[o].push(i):n[o]=[i]:n[o]=n[o]?n[o]+", "+i:i)}),n},hg=Symbol("internals");function Ai(e){return e&&String(e).trim().toLowerCase()}function Es(e){return e===!1||e==null?e:U.isArray(e)?e.map(Es):String(e)}function LE(e){const n=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=o.exec(e);)n[i[1]]=i[2];return n}const NE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function yc(e,n,o,i,s){if(U.isFunction(i))return i.call(this,n,o);if(s&&(n=o),!!U.isString(n)){if(U.isString(i))return n.indexOf(i)!==-1;if(U.isRegExp(i))return i.test(n)}}function jE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,o,i)=>o.toUpperCase()+i)}function zE(e,n){const o=U.toCamelCase(" "+n);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+o,{value:function(s,u,c){return this[i].call(this,n,s,u,c)},configurable:!0})})}let It=class{constructor(n){n&&this.set(n)}set(n,o,i){const s=this;function u(d,p,h){const g=Ai(p);if(!g)throw new Error("header name must be a non-empty string");const y=U.findKey(s,g);(!y||s[y]===void 0||h===!0||h===void 0&&s[y]!==!1)&&(s[y||p]=Es(d))}const c=(d,p)=>U.forEach(d,(h,g)=>u(h,g,p));if(U.isPlainObject(n)||n instanceof this.constructor)c(n,o);else if(U.isString(n)&&(n=n.trim())&&!NE(n))c(ME(n),o);else if(U.isHeaders(n))for(const[d,p]of n.entries())u(p,d,i);else n!=null&&u(o,n,i);return this}get(n,o){if(n=Ai(n),n){const i=U.findKey(this,n);if(i){const s=this[i];if(!o)return s;if(o===!0)return LE(s);if(U.isFunction(o))return o.call(this,s,i);if(U.isRegExp(o))return o.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,o){if(n=Ai(n),n){const i=U.findKey(this,n);return!!(i&&this[i]!==void 0&&(!o||yc(this,this[i],i,o)))}return!1}delete(n,o){const i=this;let s=!1;function u(c){if(c=Ai(c),c){const d=U.findKey(i,c);d&&(!o||yc(i,i[d],d,o))&&(delete i[d],s=!0)}}return U.isArray(n)?n.forEach(u):u(n),s}clear(n){const o=Object.keys(this);let i=o.length,s=!1;for(;i--;){const u=o[i];(!n||yc(this,this[u],u,n,!0))&&(delete this[u],s=!0)}return s}normalize(n){const o=this,i={};return U.forEach(this,(s,u)=>{const c=U.findKey(i,u);if(c){o[c]=Es(s),delete o[u];return}const d=n?jE(u):String(u).trim();d!==u&&delete o[u],o[d]=Es(s),i[d]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const o=Object.create(null);return U.forEach(this,(i,s)=>{i!=null&&i!==!1&&(o[s]=n&&U.isArray(i)?i.join(", "):i)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,o])=>n+": "+o).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...o){const i=new this(n);return o.forEach(s=>i.set(s)),i}static accessor(n){const i=(this[hg]=this[hg]={accessors:{}}).accessors,s=this.prototype;function u(c){const d=Ai(c);i[d]||(zE(s,c),i[d]=!0)}return U.isArray(n)?n.forEach(u):u(n),this}};It.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.reduceDescriptors(It.prototype,({value:e},n)=>{let o=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(i){this[o]=i}}});U.freezeMethods(It);function vc(e,n){const o=this||ea,i=n||o,s=It.from(i.headers);let u=i.data;return U.forEach(e,function(d){u=d.call(o,u,s.normalize(),n?n.status:void 0)}),s.normalize(),u}function $v(e){return!!(e&&e.__CANCEL__)}function No(e,n,o){Ee.call(this,e??"canceled",Ee.ERR_CANCELED,n,o),this.name="CanceledError"}U.inherits(No,Ee,{__CANCEL__:!0});function qv(e,n,o){const i=o.config.validateStatus;!o.status||!i||i(o.status)?e(o):n(new Ee("Request failed with status code "+o.status,[Ee.ERR_BAD_REQUEST,Ee.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function IE(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function FE(e,n){e=e||10;const o=new Array(e),i=new Array(e);let s=0,u=0,c;return n=n!==void 0?n:1e3,function(p){const h=Date.now(),g=i[u];c||(c=h),o[s]=p,i[s]=h;let y=u,v=0;for(;y!==s;)v+=o[y++],y=y%e;if(s=(s+1)%e,s===u&&(u=(u+1)%e),h-c<n)return;const S=g&&h-g;return S?Math.round(v*1e3/S):void 0}}function VE(e,n){let o=0,i=1e3/n,s,u;const c=(h,g=Date.now())=>{o=g,s=null,u&&(clearTimeout(u),u=null),e.apply(null,h)};return[(...h)=>{const g=Date.now(),y=g-o;y>=i?c(h,g):(s=h,u||(u=setTimeout(()=>{u=null,c(s)},i-y)))},()=>s&&c(s)]}const js=(e,n,o=3)=>{let i=0;const s=FE(50,250);return VE(u=>{const c=u.loaded,d=u.lengthComputable?u.total:void 0,p=c-i,h=s(p),g=c<=d;i=c;const y={loaded:c,total:d,progress:d?c/d:void 0,bytes:p,rate:h||void 0,estimated:h&&d&&g?(d-c)/h:void 0,event:u,lengthComputable:d!=null,[n?"download":"upload"]:!0};e(y)},o)},mg=(e,n)=>{const o=e!=null;return[i=>n[0]({lengthComputable:o,total:e,loaded:i}),n[1]]},gg=e=>(...n)=>U.asap(()=>e(...n)),BE=Ot.hasStandardBrowserEnv?((e,n)=>o=>(o=new URL(o,Ot.origin),e.protocol===o.protocol&&e.host===o.host&&(n||e.port===o.port)))(new URL(Ot.origin),Ot.navigator&&/(msie|trident)/i.test(Ot.navigator.userAgent)):()=>!0,UE=Ot.hasStandardBrowserEnv?{write(e,n,o,i,s,u){const c=[e+"="+encodeURIComponent(n)];U.isNumber(o)&&c.push("expires="+new Date(o).toGMTString()),U.isString(i)&&c.push("path="+i),U.isString(s)&&c.push("domain="+s),u===!0&&c.push("secure"),document.cookie=c.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function $E(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function qE(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function Hv(e,n,o){let i=!$E(n);return e&&(i||o==!1)?qE(e,n):n}const yg=e=>e instanceof It?{...e}:e;function Vr(e,n){n=n||{};const o={};function i(h,g,y,v){return U.isPlainObject(h)&&U.isPlainObject(g)?U.merge.call({caseless:v},h,g):U.isPlainObject(g)?U.merge({},g):U.isArray(g)?g.slice():g}function s(h,g,y,v){if(U.isUndefined(g)){if(!U.isUndefined(h))return i(void 0,h,y,v)}else return i(h,g,y,v)}function u(h,g){if(!U.isUndefined(g))return i(void 0,g)}function c(h,g){if(U.isUndefined(g)){if(!U.isUndefined(h))return i(void 0,h)}else return i(void 0,g)}function d(h,g,y){if(y in n)return i(h,g);if(y in e)return i(void 0,h)}const p={url:u,method:u,data:u,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:d,headers:(h,g,y)=>s(yg(h),yg(g),y,!0)};return U.forEach(Object.keys(Object.assign({},e,n)),function(g){const y=p[g]||s,v=y(e[g],n[g],g);U.isUndefined(v)&&y!==d||(o[g]=v)}),o}const Wv=e=>{const n=Vr({},e);let{data:o,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:u,headers:c,auth:d}=n;n.headers=c=It.from(c),n.url=Vv(Hv(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),d&&c.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let p;if(U.isFormData(o)){if(Ot.hasStandardBrowserEnv||Ot.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if((p=c.getContentType())!==!1){const[h,...g]=p?p.split(";").map(y=>y.trim()).filter(Boolean):[];c.setContentType([h||"multipart/form-data",...g].join("; "))}}if(Ot.hasStandardBrowserEnv&&(i&&U.isFunction(i)&&(i=i(n)),i||i!==!1&&BE(n.url))){const h=s&&u&&UE.read(u);h&&c.set(s,h)}return n},HE=typeof XMLHttpRequest<"u",WE=HE&&function(e){return new Promise(function(o,i){const s=Wv(e);let u=s.data;const c=It.from(s.headers).normalize();let{responseType:d,onUploadProgress:p,onDownloadProgress:h}=s,g,y,v,S,w;function x(){S&&S(),w&&w(),s.cancelToken&&s.cancelToken.unsubscribe(g),s.signal&&s.signal.removeEventListener("abort",g)}let P=new XMLHttpRequest;P.open(s.method.toUpperCase(),s.url,!0),P.timeout=s.timeout;function E(){if(!P)return;const _=It.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),F={data:!d||d==="text"||d==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:_,config:e,request:P};qv(function(ae){o(ae),x()},function(ae){i(ae),x()},F),P=null}"onloadend"in P?P.onloadend=E:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(E)},P.onabort=function(){P&&(i(new Ee("Request aborted",Ee.ECONNABORTED,e,P)),P=null)},P.onerror=function(){i(new Ee("Network Error",Ee.ERR_NETWORK,e,P)),P=null},P.ontimeout=function(){let X=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||Bv;s.timeoutErrorMessage&&(X=s.timeoutErrorMessage),i(new Ee(X,F.clarifyTimeoutError?Ee.ETIMEDOUT:Ee.ECONNABORTED,e,P)),P=null},u===void 0&&c.setContentType(null),"setRequestHeader"in P&&U.forEach(c.toJSON(),function(X,F){P.setRequestHeader(F,X)}),U.isUndefined(s.withCredentials)||(P.withCredentials=!!s.withCredentials),d&&d!=="json"&&(P.responseType=s.responseType),h&&([v,w]=js(h,!0),P.addEventListener("progress",v)),p&&P.upload&&([y,S]=js(p),P.upload.addEventListener("progress",y),P.upload.addEventListener("loadend",S)),(s.cancelToken||s.signal)&&(g=_=>{P&&(i(!_||_.type?new No(null,e,P):_),P.abort(),P=null)},s.cancelToken&&s.cancelToken.subscribe(g),s.signal&&(s.signal.aborted?g():s.signal.addEventListener("abort",g)));const L=IE(s.url);if(L&&Ot.protocols.indexOf(L)===-1){i(new Ee("Unsupported protocol "+L+":",Ee.ERR_BAD_REQUEST,e));return}P.send(u||null)})},KE=(e,n)=>{const{length:o}=e=e?e.filter(Boolean):[];if(n||o){let i=new AbortController,s;const u=function(h){if(!s){s=!0,d();const g=h instanceof Error?h:this.reason;i.abort(g instanceof Ee?g:new No(g instanceof Error?g.message:g))}};let c=n&&setTimeout(()=>{c=null,u(new Ee(`timeout ${n} of ms exceeded`,Ee.ETIMEDOUT))},n);const d=()=>{e&&(c&&clearTimeout(c),c=null,e.forEach(h=>{h.unsubscribe?h.unsubscribe(u):h.removeEventListener("abort",u)}),e=null)};e.forEach(h=>h.addEventListener("abort",u));const{signal:p}=i;return p.unsubscribe=()=>U.asap(d),p}},GE=function*(e,n){let o=e.byteLength;if(o<n){yield e;return}let i=0,s;for(;i<o;)s=i+n,yield e.slice(i,s),i=s},XE=async function*(e,n){for await(const o of YE(e))yield*GE(o,n)},YE=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:o,value:i}=await n.read();if(o)break;yield i}}finally{await n.cancel()}},vg=(e,n,o,i)=>{const s=XE(e,n);let u=0,c,d=p=>{c||(c=!0,i&&i(p))};return new ReadableStream({async pull(p){try{const{done:h,value:g}=await s.next();if(h){d(),p.close();return}let y=g.byteLength;if(o){let v=u+=y;o(v)}p.enqueue(new Uint8Array(g))}catch(h){throw d(h),h}},cancel(p){return d(p),s.return()}},{highWaterMark:2})},Js=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Kv=Js&&typeof ReadableStream=="function",QE=Js&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Gv=(e,...n)=>{try{return!!e(...n)}catch{return!1}},JE=Kv&&Gv(()=>{let e=!1;const n=new Request(Ot.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),bg=64*1024,Xc=Kv&&Gv(()=>U.isReadableStream(new Response("").body)),zs={stream:Xc&&(e=>e.body)};Js&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!zs[n]&&(zs[n]=U.isFunction(e[n])?o=>o[n]():(o,i)=>{throw new Ee(`Response type '${n}' is not supported`,Ee.ERR_NOT_SUPPORT,i)})})})(new Response);const ZE=async e=>{if(e==null)return 0;if(U.isBlob(e))return e.size;if(U.isSpecCompliantForm(e))return(await new Request(Ot.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(U.isArrayBufferView(e)||U.isArrayBuffer(e))return e.byteLength;if(U.isURLSearchParams(e)&&(e=e+""),U.isString(e))return(await QE(e)).byteLength},eO=async(e,n)=>{const o=U.toFiniteNumber(e.getContentLength());return o??ZE(n)},tO=Js&&(async e=>{let{url:n,method:o,data:i,signal:s,cancelToken:u,timeout:c,onDownloadProgress:d,onUploadProgress:p,responseType:h,headers:g,withCredentials:y="same-origin",fetchOptions:v}=Wv(e);h=h?(h+"").toLowerCase():"text";let S=KE([s,u&&u.toAbortSignal()],c),w;const x=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let P;try{if(p&&JE&&o!=="get"&&o!=="head"&&(P=await eO(g,i))!==0){let F=new Request(n,{method:"POST",body:i,duplex:"half"}),ee;if(U.isFormData(i)&&(ee=F.headers.get("content-type"))&&g.setContentType(ee),F.body){const[ae,K]=mg(P,js(gg(p)));i=vg(F.body,bg,ae,K)}}U.isString(y)||(y=y?"include":"omit");const E="credentials"in Request.prototype;w=new Request(n,{...v,signal:S,method:o.toUpperCase(),headers:g.normalize().toJSON(),body:i,duplex:"half",credentials:E?y:void 0});let L=await fetch(w);const _=Xc&&(h==="stream"||h==="response");if(Xc&&(d||_&&x)){const F={};["status","statusText","headers"].forEach(J=>{F[J]=L[J]});const ee=U.toFiniteNumber(L.headers.get("content-length")),[ae,K]=d&&mg(ee,js(gg(d),!0))||[];L=new Response(vg(L.body,bg,ae,()=>{K&&K(),x&&x()}),F)}h=h||"text";let X=await zs[U.findKey(zs,h)||"text"](L,e);return!_&&x&&x(),await new Promise((F,ee)=>{qv(F,ee,{data:X,headers:It.from(L.headers),status:L.status,statusText:L.statusText,config:e,request:w})})}catch(E){throw x&&x(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new Ee("Network Error",Ee.ERR_NETWORK,e,w),{cause:E.cause||E}):Ee.from(E,E&&E.code,e,w)}}),Yc={http:gE,xhr:WE,fetch:tO};U.forEach(Yc,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const wg=e=>`- ${e}`,nO=e=>U.isFunction(e)||e===null||e===!1,Xv={getAdapter:e=>{e=U.isArray(e)?e:[e];const{length:n}=e;let o,i;const s={};for(let u=0;u<n;u++){o=e[u];let c;if(i=o,!nO(o)&&(i=Yc[(c=String(o)).toLowerCase()],i===void 0))throw new Ee(`Unknown adapter '${c}'`);if(i)break;s[c||"#"+u]=i}if(!i){const u=Object.entries(s).map(([d,p])=>`adapter ${d} `+(p===!1?"is not supported by the environment":"is not available in the build"));let c=n?u.length>1?`since :
`+u.map(wg).join(`
`):" "+wg(u[0]):"as no adapter specified";throw new Ee("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return i},adapters:Yc};function bc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new No(null,e)}function xg(e){return bc(e),e.headers=It.from(e.headers),e.data=vc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xv.getAdapter(e.adapter||ea.adapter)(e).then(function(i){return bc(e),i.data=vc.call(e,e.transformResponse,i),i.headers=It.from(i.headers),i},function(i){return $v(i)||(bc(e),i&&i.response&&(i.response.data=vc.call(e,e.transformResponse,i.response),i.response.headers=It.from(i.response.headers))),Promise.reject(i)})}const Yv="1.8.4",Zs={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{Zs[e]=function(i){return typeof i===e||"a"+(n<1?"n ":" ")+e}});const Sg={};Zs.transitional=function(n,o,i){function s(u,c){return"[Axios v"+Yv+"] Transitional option '"+u+"'"+c+(i?". "+i:"")}return(u,c,d)=>{if(n===!1)throw new Ee(s(c," has been removed"+(o?" in "+o:"")),Ee.ERR_DEPRECATED);return o&&!Sg[c]&&(Sg[c]=!0,console.warn(s(c," has been deprecated since v"+o+" and will be removed in the near future"))),n?n(u,c,d):!0}};Zs.spelling=function(n){return(o,i)=>(console.warn(`${i} is likely a misspelling of ${n}`),!0)};function rO(e,n,o){if(typeof e!="object")throw new Ee("options must be an object",Ee.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let s=i.length;for(;s-- >0;){const u=i[s],c=n[u];if(c){const d=e[u],p=d===void 0||c(d,u,e);if(p!==!0)throw new Ee("option "+u+" must be "+p,Ee.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new Ee("Unknown option "+u,Ee.ERR_BAD_OPTION)}}const Os={assertOptions:rO,validators:Zs},Sn=Os.validators;let Fr=class{constructor(n){this.defaults=n,this.interceptors={request:new pg,response:new pg}}async request(n,o){try{return await this._request(n,o)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const u=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?u&&!String(i.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+u):i.stack=u}catch{}}throw i}}_request(n,o){typeof n=="string"?(o=o||{},o.url=n):o=n||{},o=Vr(this.defaults,o);const{transitional:i,paramsSerializer:s,headers:u}=o;i!==void 0&&Os.assertOptions(i,{silentJSONParsing:Sn.transitional(Sn.boolean),forcedJSONParsing:Sn.transitional(Sn.boolean),clarifyTimeoutError:Sn.transitional(Sn.boolean)},!1),s!=null&&(U.isFunction(s)?o.paramsSerializer={serialize:s}:Os.assertOptions(s,{encode:Sn.function,serialize:Sn.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),Os.assertOptions(o,{baseUrl:Sn.spelling("baseURL"),withXsrfToken:Sn.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let c=u&&U.merge(u.common,u[o.method]);u&&U.forEach(["delete","get","head","post","put","patch","common"],w=>{delete u[w]}),o.headers=It.concat(c,u);const d=[];let p=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(o)===!1||(p=p&&x.synchronous,d.unshift(x.fulfilled,x.rejected))});const h=[];this.interceptors.response.forEach(function(x){h.push(x.fulfilled,x.rejected)});let g,y=0,v;if(!p){const w=[xg.bind(this),void 0];for(w.unshift.apply(w,d),w.push.apply(w,h),v=w.length,g=Promise.resolve(o);y<v;)g=g.then(w[y++],w[y++]);return g}v=d.length;let S=o;for(y=0;y<v;){const w=d[y++],x=d[y++];try{S=w(S)}catch(P){x.call(this,P);break}}try{g=xg.call(this,S)}catch(w){return Promise.reject(w)}for(y=0,v=h.length;y<v;)g=g.then(h[y++],h[y++]);return g}getUri(n){n=Vr(this.defaults,n);const o=Hv(n.baseURL,n.url,n.allowAbsoluteUrls);return Vv(o,n.params,n.paramsSerializer)}};U.forEach(["delete","get","head","options"],function(n){Fr.prototype[n]=function(o,i){return this.request(Vr(i||{},{method:n,url:o,data:(i||{}).data}))}});U.forEach(["post","put","patch"],function(n){function o(i){return function(u,c,d){return this.request(Vr(d||{},{method:n,headers:i?{"Content-Type":"multipart/form-data"}:{},url:u,data:c}))}}Fr.prototype[n]=o(),Fr.prototype[n+"Form"]=o(!0)});let oO=class Qv{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(u){o=u});const i=this;this.promise.then(s=>{if(!i._listeners)return;let u=i._listeners.length;for(;u-- >0;)i._listeners[u](s);i._listeners=null}),this.promise.then=s=>{let u;const c=new Promise(d=>{i.subscribe(d),u=d}).then(s);return c.cancel=function(){i.unsubscribe(u)},c},n(function(u,c,d){i.reason||(i.reason=new No(u,c,d),o(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const o=this._listeners.indexOf(n);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const n=new AbortController,o=i=>{n.abort(i)};return this.subscribe(o),n.signal.unsubscribe=()=>this.unsubscribe(o),n.signal}static source(){let n;return{token:new Qv(function(s){n=s}),cancel:n}}};function iO(e){return function(o){return e.apply(null,o)}}function aO(e){return U.isObject(e)&&e.isAxiosError===!0}const Qc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qc).forEach(([e,n])=>{Qc[n]=e});function Jv(e){const n=new Fr(e),o=Rv(Fr.prototype.request,n);return U.extend(o,Fr.prototype,n,{allOwnKeys:!0}),U.extend(o,n,null,{allOwnKeys:!0}),o.create=function(s){return Jv(Vr(e,s))},o}const ct=Jv(ea);ct.Axios=Fr;ct.CanceledError=No;ct.CancelToken=oO;ct.isCancel=$v;ct.VERSION=Yv;ct.toFormData=Qs;ct.AxiosError=Ee;ct.Cancel=ct.CanceledError;ct.all=function(n){return Promise.all(n)};ct.spread=iO;ct.isAxiosError=aO;ct.mergeConfig=Vr;ct.AxiosHeaders=It;ct.formToJSON=e=>Uv(U.isHTMLForm(e)?new FormData(e):e);ct.getAdapter=Xv.getAdapter;ct.HttpStatusCode=Qc;ct.default=ct;const{Axios:GO,AxiosError:XO,CanceledError:YO,isCancel:QO,CancelToken:JO,VERSION:ZO,all:eC,Cancel:tC,isAxiosError:nC,spread:rC,toFormData:oC,AxiosHeaders:iC,HttpStatusCode:aC,formToJSON:sC,getAdapter:lC,mergeConfig:uC}=ct;var wc={exports:{}},Pg;function sO(){return Pg||(Pg=1,function(e,n){(function(o,i){e.exports=i()})(window,function(){return function(o){var i={};function s(u){if(i[u])return i[u].exports;var c=i[u]={i:u,l:!1,exports:{}};return o[u].call(c.exports,c,c.exports,s),c.l=!0,c.exports}return s.m=o,s.c=i,s.d=function(u,c,d){s.o(u,c)||Object.defineProperty(u,c,{enumerable:!0,get:d})},s.r=function(u){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},s.t=function(u,c){if(1&c&&(u=s(u)),8&c||4&c&&typeof u=="object"&&u&&u.__esModule)return u;var d=Object.create(null);if(s.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:u}),2&c&&typeof u!="string")for(var p in u)s.d(d,p,(function(h){return u[h]}).bind(null,p));return d},s.n=function(u){var c=u&&u.__esModule?function(){return u.default}:function(){return u};return s.d(c,"a",c),c},s.o=function(u,c){return Object.prototype.hasOwnProperty.call(u,c)},s.p="",s(s.s=0)}([function(o,i,s){o.exports=s(1)},function(o,i,s){function u(v){return function(S){if(Array.isArray(S)){for(var w=0,x=new Array(S.length);w<S.length;w++)x[w]=S[w];return x}}(v)||function(S){if(Symbol.iterator in Object(S)||Object.prototype.toString.call(S)==="[object Arguments]")return Array.from(S)}(v)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}s.r(i);var c=!!window.fbq,d=!1,p=function(){var v;if(d){for(var S=arguments.length,w=new Array(S),x=0;x<S;x++)w[x]=arguments[x];(v=console).info.apply(v,u(["[react-facebook-pixel]"].concat(w)))}},h=function(){var v;if(d){for(var S=arguments.length,w=new Array(S),x=0;x<S;x++)w[x]=arguments[x];(v=console).info.apply(v,u(["[react-facebook-pixel]"].concat(w)))}},g=function(){return c||p("Pixel not initialized before using call ReactPixel.init with required params"),c},y={autoConfig:!0,debug:!1};i.default={init:function(v){var S,w,x,P,E,L,_=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},X=arguments.length>2&&arguments[2]!==void 0?arguments[2]:y;S=window,w=document,x="script",S.fbq||(P=S.fbq=function(){P.callMethod?P.callMethod.apply(P,arguments):P.queue.push(arguments)},S._fbq||(S._fbq=P),P.push=P,P.loaded=!0,P.version="2.0",P.queue=[],(E=w.createElement(x)).async=!0,E.src="https://connect.facebook.net/en_US/fbevents.js",(L=w.getElementsByTagName(x)[0]).parentNode.insertBefore(E,L)),v?(X.autoConfig===!1&&fbq("set","autoConfig",!1,v),fbq("init",v,_),c=!0,d=X.debug):p("Please insert pixel id for initializing")},pageView:function(){g()&&(fbq("track","PageView"),d&&h("called fbq('track', 'PageView');"))},track:function(v,S){g()&&(fbq("track",v,S),d&&(h("called fbq('track', '".concat(v,"');")),S&&h("with data",S)))},trackSingle:function(v,S,w){g()&&(fbq("trackSingle",v,S,w),d&&(h("called fbq('trackSingle', '".concat(v,"', '").concat(S,"');")),w&&h("with data",w)))},trackCustom:function(v,S){g()&&(fbq("trackCustom",v,S),d&&(h("called fbq('trackCustom', '".concat(v,"');")),S&&h("with data",S)))},trackSingleCustom:function(v,S,w){g()&&(fbq("trackSingle",v,S,w),d&&(h("called fbq('trackSingleCustom', '".concat(v,"', '").concat(S,"');")),w&&h("with data",w)))},grantConsent:function(){g()&&(fbq("consent","grant"),d&&h("called fbq('consent', 'grant');"))},revokeConsent:function(){g()&&(fbq("consent","revoke"),d&&h("called fbq('consent', 'revoke');"))},fbq:function(v){function S(){return v.apply(this,arguments)}return S.toString=function(){return v.toString()},S}(function(){if(g()){for(var v=arguments.length,S=new Array(v),w=0;w<v;w++)S[w]=arguments[w];fbq.apply(void 0,S),d&&(h("called fbq('".concat(S.slice(0,2).join("', '"),"')")),S[2]&&h("with data",S[2]))}})}}])})}(wc)),wc.exports}var lO=sO();const cC=Ro(lO);function mt(e,n){n===void 0&&(n={});var o=n.insertAt;if(e&&typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",o==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}mt(`.react-loading-indicator-normalize,
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
}`);var Be=function(){return Be=Object.assign||function(e){for(var n,o=1,i=arguments.length;o<i;o++)for(var s in n=arguments[o])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e},Be.apply(this,arguments)};function Is(e){return Is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Is(e)}var uO=/^\s+/,cO=/\s+$/;function ge(e,n){if(n=n||{},(e=e||"")instanceof ge)return e;if(!(this instanceof ge))return new ge(e,n);var o=function(i){var s={r:0,g:0,b:0},u=1,c=null,d=null,p=null,h=!1,g=!1;typeof i=="string"&&(i=function(w){w=w.replace(uO,"").replace(cO,"").toLowerCase();var x,P=!1;if(Jc[w])w=Jc[w],P=!0;else if(w=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(x=cn.rgb.exec(w))?{r:x[1],g:x[2],b:x[3]}:(x=cn.rgba.exec(w))?{r:x[1],g:x[2],b:x[3],a:x[4]}:(x=cn.hsl.exec(w))?{h:x[1],s:x[2],l:x[3]}:(x=cn.hsla.exec(w))?{h:x[1],s:x[2],l:x[3],a:x[4]}:(x=cn.hsv.exec(w))?{h:x[1],s:x[2],v:x[3]}:(x=cn.hsva.exec(w))?{h:x[1],s:x[2],v:x[3],a:x[4]}:(x=cn.hex8.exec(w))?{r:$t(x[1]),g:$t(x[2]),b:$t(x[3]),a:Rg(x[4]),format:P?"name":"hex8"}:(x=cn.hex6.exec(w))?{r:$t(x[1]),g:$t(x[2]),b:$t(x[3]),format:P?"name":"hex"}:(x=cn.hex4.exec(w))?{r:$t(x[1]+""+x[1]),g:$t(x[2]+""+x[2]),b:$t(x[3]+""+x[3]),a:Rg(x[4]+""+x[4]),format:P?"name":"hex8"}:(x=cn.hex3.exec(w))?{r:$t(x[1]+""+x[1]),g:$t(x[2]+""+x[2]),b:$t(x[3]+""+x[3]),format:P?"name":"hex"}:!1}(i)),Is(i)=="object"&&(In(i.r)&&In(i.g)&&In(i.b)?(y=i.r,v=i.g,S=i.b,s={r:255*Qe(y,255),g:255*Qe(v,255),b:255*Qe(S,255)},h=!0,g=String(i.r).substr(-1)==="%"?"prgb":"rgb"):In(i.h)&&In(i.s)&&In(i.v)?(c=Li(i.s),d=Li(i.v),s=function(w,x,P){w=6*Qe(w,360),x=Qe(x,100),P=Qe(P,100);var E=Math.floor(w),L=w-E,_=P*(1-x),X=P*(1-L*x),F=P*(1-(1-L)*x),ee=E%6,ae=[P,X,_,_,F,P][ee],K=[F,P,P,X,_,_][ee],J=[_,_,F,P,P,X][ee];return{r:255*ae,g:255*K,b:255*J}}(i.h,c,d),h=!0,g="hsv"):In(i.h)&&In(i.s)&&In(i.l)&&(c=Li(i.s),p=Li(i.l),s=function(w,x,P){var E,L,_;function X(ae,K,J){return J<0&&(J+=1),J>1&&(J-=1),J<1/6?ae+6*(K-ae)*J:J<.5?K:J<2/3?ae+(K-ae)*(2/3-J)*6:ae}if(w=Qe(w,360),x=Qe(x,100),P=Qe(P,100),x===0)E=L=_=P;else{var F=P<.5?P*(1+x):P+x-P*x,ee=2*P-F;E=X(ee,F,w+1/3),L=X(ee,F,w),_=X(ee,F,w-1/3)}return{r:255*E,g:255*L,b:255*_}}(i.h,c,p),h=!0,g="hsl"),i.hasOwnProperty("a")&&(u=i.a));var y,v,S;return u=Zv(u),{ok:h,format:i.format||g,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:u}}(e);this._originalInput=e,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||o.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function kg(e,n,o){e=Qe(e,255),n=Qe(n,255),o=Qe(o,255);var i,s,u=Math.max(e,n,o),c=Math.min(e,n,o),d=(u+c)/2;if(u==c)i=s=0;else{var p=u-c;switch(s=d>.5?p/(2-u-c):p/(u+c),u){case e:i=(n-o)/p+(n<o?6:0);break;case n:i=(o-e)/p+2;break;case o:i=(e-n)/p+4}i/=6}return{h:i,s,l:d}}function Tg(e,n,o){e=Qe(e,255),n=Qe(n,255),o=Qe(o,255);var i,s,u=Math.max(e,n,o),c=Math.min(e,n,o),d=u,p=u-c;if(s=u===0?0:p/u,u==c)i=0;else{switch(u){case e:i=(n-o)/p+(n<o?6:0);break;case n:i=(o-e)/p+2;break;case o:i=(e-n)/p+4}i/=6}return{h:i,s,v:d}}function Eg(e,n,o,i){var s=[pn(Math.round(e).toString(16)),pn(Math.round(n).toString(16)),pn(Math.round(o).toString(16))];return i&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function Og(e,n,o,i){return[pn(e0(i)),pn(Math.round(e).toString(16)),pn(Math.round(n).toString(16)),pn(Math.round(o).toString(16))].join("")}function fO(e,n){n=n===0?0:n||10;var o=ge(e).toHsl();return o.s-=n/100,o.s=el(o.s),ge(o)}function dO(e,n){n=n===0?0:n||10;var o=ge(e).toHsl();return o.s+=n/100,o.s=el(o.s),ge(o)}function pO(e){return ge(e).desaturate(100)}function hO(e,n){n=n===0?0:n||10;var o=ge(e).toHsl();return o.l+=n/100,o.l=el(o.l),ge(o)}function mO(e,n){n=n===0?0:n||10;var o=ge(e).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-n/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-n/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-n/100*255))),ge(o)}function gO(e,n){n=n===0?0:n||10;var o=ge(e).toHsl();return o.l-=n/100,o.l=el(o.l),ge(o)}function yO(e,n){var o=ge(e).toHsl(),i=(o.h+n)%360;return o.h=i<0?360+i:i,ge(o)}function vO(e){var n=ge(e).toHsl();return n.h=(n.h+180)%360,ge(n)}function Cg(e,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var o=ge(e).toHsl(),i=[ge(e)],s=360/n,u=1;u<n;u++)i.push(ge({h:(o.h+u*s)%360,s:o.s,l:o.l}));return i}function bO(e){var n=ge(e).toHsl(),o=n.h;return[ge(e),ge({h:(o+72)%360,s:n.s,l:n.l}),ge({h:(o+216)%360,s:n.s,l:n.l})]}function wO(e,n,o){n=n||6,o=o||30;var i=ge(e).toHsl(),s=360/o,u=[ge(e)];for(i.h=(i.h-(s*n>>1)+720)%360;--n;)i.h=(i.h+s)%360,u.push(ge(i));return u}function xO(e,n){n=n||6;for(var o=ge(e).toHsv(),i=o.h,s=o.s,u=o.v,c=[],d=1/n;n--;)c.push(ge({h:i,s,v:u})),u=(u+d)%1;return c}ge.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,n,o,i=this.toRgb();return e=i.r/255,n=i.g/255,o=i.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(e){return this._a=Zv(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Tg(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Tg(this._r,this._g,this._b),n=Math.round(360*e.h),o=Math.round(100*e.s),i=Math.round(100*e.v);return this._a==1?"hsv("+n+", "+o+"%, "+i+"%)":"hsva("+n+", "+o+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var e=kg(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=kg(this._r,this._g,this._b),n=Math.round(360*e.h),o=Math.round(100*e.s),i=Math.round(100*e.l);return this._a==1?"hsl("+n+", "+o+"%, "+i+"%)":"hsla("+n+", "+o+"%, "+i+"%, "+this._roundA+")"},toHex:function(e){return Eg(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(n,o,i,s,u){var c=[pn(Math.round(n).toString(16)),pn(Math.round(o).toString(16)),pn(Math.round(i).toString(16)),pn(e0(s))];return u&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)&&c[3].charAt(0)==c[3].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0)+c[3].charAt(0):c.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Qe(this._r,255))+"%",g:Math.round(100*Qe(this._g,255))+"%",b:Math.round(100*Qe(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Qe(this._r,255))+"%, "+Math.round(100*Qe(this._g,255))+"%, "+Math.round(100*Qe(this._b,255))+"%)":"rgba("+Math.round(100*Qe(this._r,255))+"%, "+Math.round(100*Qe(this._g,255))+"%, "+Math.round(100*Qe(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(SO[Eg(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var n="#"+Og(this._r,this._g,this._b,this._a),o=n,i=this._gradientType?"GradientType = 1, ":"";if(e){var s=ge(e);o="#"+Og(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+n+",endColorstr="+o+")"},toString:function(e){var n=!!e;e=e||this._format;var o=!1,i=this._a<1&&this._a>=0;return n||!i||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(o=this.toRgbString()),e==="prgb"&&(o=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(o=this.toHexString()),e==="hex3"&&(o=this.toHexString(!0)),e==="hex4"&&(o=this.toHex8String(!0)),e==="hex8"&&(o=this.toHex8String()),e==="name"&&(o=this.toName()),e==="hsl"&&(o=this.toHslString()),e==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ge(this.toString())},_applyModification:function(e,n){var o=e.apply(null,[this].concat([].slice.call(n)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(hO,arguments)},brighten:function(){return this._applyModification(mO,arguments)},darken:function(){return this._applyModification(gO,arguments)},desaturate:function(){return this._applyModification(fO,arguments)},saturate:function(){return this._applyModification(dO,arguments)},greyscale:function(){return this._applyModification(pO,arguments)},spin:function(){return this._applyModification(yO,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(wO,arguments)},complement:function(){return this._applyCombination(vO,arguments)},monochromatic:function(){return this._applyCombination(xO,arguments)},splitcomplement:function(){return this._applyCombination(bO,arguments)},triad:function(){return this._applyCombination(Cg,[3])},tetrad:function(){return this._applyCombination(Cg,[4])}},ge.fromRatio=function(e,n){if(Is(e)=="object"){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=i==="a"?e[i]:Li(e[i]));e=o}return ge(e,n)},ge.equals=function(e,n){return!(!e||!n)&&ge(e).toRgbString()==ge(n).toRgbString()},ge.random=function(){return ge.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ge.mix=function(e,n,o){o=o===0?0:o||50;var i=ge(e).toRgb(),s=ge(n).toRgb(),u=o/100;return ge({r:(s.r-i.r)*u+i.r,g:(s.g-i.g)*u+i.g,b:(s.b-i.b)*u+i.b,a:(s.a-i.a)*u+i.a})},ge.readability=function(e,n){var o=ge(e),i=ge(n);return(Math.max(o.getLuminance(),i.getLuminance())+.05)/(Math.min(o.getLuminance(),i.getLuminance())+.05)},ge.isReadable=function(e,n,o){var i,s,u=ge.readability(e,n);switch(s=!1,(i=function(c){var d,p;return d=((c=c||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(c.size||"small").toLowerCase(),d!=="AA"&&d!=="AAA"&&(d="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:d,size:p}}(o)).level+i.size){case"AAsmall":case"AAAlarge":s=u>=4.5;break;case"AAlarge":s=u>=3;break;case"AAAsmall":s=u>=7}return s},ge.mostReadable=function(e,n,o){var i,s,u,c,d=null,p=0;s=(o=o||{}).includeFallbackColors,u=o.level,c=o.size;for(var h=0;h<n.length;h++)(i=ge.readability(e,n[h]))>p&&(p=i,d=ge(n[h]));return ge.isReadable(e,d,{level:u,size:c})||!s?d:(o.includeFallbackColors=!1,ge.mostReadable(e,["#fff","#000"],o))};var Jc=ge.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},SO=ge.hexNames=function(e){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[e[o]]=o);return n}(Jc);function Zv(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Qe(e,n){(function(i){return typeof i=="string"&&i.indexOf(".")!=-1&&parseFloat(i)===1})(e)&&(e="100%");var o=function(i){return typeof i=="string"&&i.indexOf("%")!=-1}(e);return e=Math.min(n,Math.max(0,parseFloat(e))),o&&(e=parseInt(e*n,10)/100),Math.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function el(e){return Math.min(1,Math.max(0,e))}function $t(e){return parseInt(e,16)}function pn(e){return e.length==1?"0"+e:""+e}function Li(e){return e<=1&&(e=100*e+"%"),e}function e0(e){return Math.round(255*parseFloat(e)).toString(16)}function Rg(e){return $t(e)/255}var dr,ys,vs,cn=(ys="[\\s|\\(]+("+(dr="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+dr+")[,|\\s]+("+dr+")\\s*\\)?",vs="[\\s|\\(]+("+dr+")[,|\\s]+("+dr+")[,|\\s]+("+dr+")[,|\\s]+("+dr+")\\s*\\)?",{CSS_UNIT:new RegExp(dr),rgb:new RegExp("rgb"+ys),rgba:new RegExp("rgba"+vs),hsl:new RegExp("hsl"+ys),hsla:new RegExp("hsla"+vs),hsv:new RegExp("hsv"+ys),hsva:new RegExp("hsva"+vs),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function In(e){return!!cn.CSS_UNIT.exec(e)}var tl=function(e,n){var o=(typeof e=="string"?parseInt(e):e)||0;if(o>=-5&&o<=5){var i=o,s=parseFloat(n),u=s+i*(s/5)*-1;return(u==0||u<=Number.EPSILON)&&(u=.1),{animationPeriod:u+"s"}}return{animationPeriod:n}},nl=function(e,n){var o=e||{},i="";switch(n){case"small":i="12px";break;case"medium":i="16px";break;case"large":i="20px";break;default:i=void 0}var s={};if(o.fontSize){var u=o.fontSize;s=function(c,d){var p={};for(var h in c)Object.prototype.hasOwnProperty.call(c,h)&&d.indexOf(h)<0&&(p[h]=c[h]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(h=Object.getOwnPropertySymbols(c);g<h.length;g++)d.indexOf(h[g])<0&&Object.prototype.propertyIsEnumerable.call(c,h[g])&&(p[h[g]]=c[h[g]])}return p}(o,["fontSize"]),i=u}return{fontSize:i,styles:s}},PO={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},rl=function(e){var n=e.className,o=e.text,i=e.textColor,s=e.staticText,u=e.style;return o?Ae.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:Be(Be(Be({},s&&PO),i&&{color:i,mixBlendMode:"unset"}),u&&u)},typeof o=="string"&&o.length?o:"loading"):null},ta="rgb(50, 205, 50)";function ol(e,n){n===void 0&&(n=0);var o=[];return function i(s,u){return u===void 0&&(u=0),o.push.apply(o,s),o.length<u&&i(o,u),o.slice(0,u)}(e,n)}mt(`.atom-rli-bounding-box {
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
}`);ge(ta).toRgb();Array.from({length:4},function(e,n){return"--atom-phase".concat(n+1,"-rgb")});mt(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--commet-phase".concat(n+1,"-color")});mt(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--OP-annulus-phase".concat(n+1,"-color")});function xc(e){return e&&e.Math===Math&&e}mt(`.OP-dotted-rli-bounding-box {
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
}`);xc(typeof window=="object"&&window)||xc(typeof self=="object"&&self)||xc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(e,n){return"--OP-dotted-phase".concat(n+1,"-color")});mt(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--OP-spokes-phase".concat(n+1,"-color")});mt(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")});mt(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]});mt(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--four-square-phase".concat(n+1,"-color")});mt(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--mosaic-phase".concat(n+1,"-color")});mt(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--riple-phase".concat(n+1,"-color")});mt(`.pulsate-rli-bounding-box {
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
}`);var mo=Array.from({length:4},function(e,n){return"--TD-pulsate-phase".concat(n+1,"-color")}),kO=function(e){var n,o=nl(e==null?void 0:e.style,e==null?void 0:e.size),i=o.styles,s=o.fontSize,u=e==null?void 0:e.easing,c=tl(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,d=function(p){var h={};if(p instanceof Array){for(var g=ol(p,mo.length),y=0;y<g.length&&!(y>=4);y++)h[mo[y]]=g[y];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var v=0;v<mo.length;v++)h[mo[v]]=p}catch(S){for(S instanceof Error?console.warn("[".concat(S.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),v=0;v<mo.length;v++)h[mo[v]]=ta}return h}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:"");return Ae.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:Be(Be(Be(Be(Be({},s&&{fontSize:s}),c&&{"--rli-animation-duration":c}),u&&{"--rli-animation-function":u}),d),i),role:"status","aria-live":"polite","aria-label":"Loading"},Ae.createElement("span",{className:"rli-d-i-b pulsate-indicator"},Ae.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Ae.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Ae.createElement("span",{className:"rli-d-i-b pulsate-dot"})),Ae.createElement(rl,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};mt(`.brick-stack-rli-bounding-box {
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
}`);var go=Array.from({length:4},function(e,n){return"--TD-brick-stack-phase".concat(n+1,"-color")}),TO=function(e){var n,o=nl(e==null?void 0:e.style,e==null?void 0:e.size),i=o.styles,s=o.fontSize,u=e==null?void 0:e.easing,c=tl(e==null?void 0:e.speedPlus,"1s").animationPeriod,d=function(p){var h={};if(p instanceof Array){for(var g=ol(p,go.length),y=0;y<g.length&&!(y>=4);y++)h[go[y]]=g[y];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var v=0;v<go.length;v++)h[go[v]]=p}catch(S){for(S instanceof Error?console.warn("[".concat(S.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),v=0;v<go.length;v++)h[go[v]]=ta}return h}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:"");return Ae.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:Be(Be(Be(Be(Be({},s&&{fontSize:s}),c&&{"--rli-animation-duration":c}),u&&{"--rli-animation-function":u}),d),i),role:"status","aria-live":"polite","aria-label":"Loading"},Ae.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},Ae.createElement("span",{className:"rli-d-i-b brick-stack"})),Ae.createElement(rl,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};mt(`.bob-rli-bounding-box {
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
}`);var yo=Array.from({length:4},function(e,n){return"--TD-bob-phase".concat(n+1,"-color")}),EO=function(e){var n,o=nl(e==null?void 0:e.style,e==null?void 0:e.size),i=o.styles,s=o.fontSize,u=e==null?void 0:e.easing,c=tl(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,d=function(p){var h={};if(p instanceof Array){for(var g=ol(p,yo.length),y=0;y<g.length&&!(y>=4);y++)h[yo[y]]=g[y];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var v=0;v<yo.length;v++)h[yo[v]]=p}catch(S){for(S instanceof Error?console.warn("[".concat(S.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),v=0;v<yo.length;v++)h[yo[v]]=ta}return h}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:"");return Ae.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:Be(Be(Be(Be(Be({},s&&{fontSize:s}),c&&{"--rli-animation-duration":c}),u&&{"--rli-animation-function":u}),d),i),role:"status","aria-live":"polite","aria-label":"Loading"},Ae.createElement("span",{className:"bob-indicator"},Ae.createElement("span",{className:"bobbing"})),Ae.createElement(rl,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};mt(`.bounce-rli-bounding-box {
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
}`);var vo=Array.from({length:4},function(e,n){return"--TD-bounce-phase".concat(n+1,"-color")}),OO=function(e){var n,o=nl(e==null?void 0:e.style,e==null?void 0:e.size),i=o.styles,s=o.fontSize,u=e==null?void 0:e.easing,c=tl(e==null?void 0:e.speedPlus,"0.5s").animationPeriod,d=function(p){var h={};if(p instanceof Array){for(var g=ol(p,vo.length),y=0;y<g.length&&!(y>=4);y++)h[vo[y]]=g[y];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var v=0;v<vo.length;v++)h[vo[v]]=p}catch{for(v=0;v<vo.length;v++)h[vo[v]]=ta}return h}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:"");return Ae.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:Be(Be(Be(Be(Be({},s&&{fontSize:s}),c&&{"--rli-animation-duration":c}),u&&{"--rli-animation-function":u}),d),i)},Ae.createElement("span",{className:"wrapper"},Ae.createElement("span",{className:"group"},Ae.createElement("span",{className:"rli-d-i-b dot"}),Ae.createElement("span",{className:"rli-d-i-b dot"}),Ae.createElement("span",{className:"rli-d-i-b dot"})),Ae.createElement("span",{className:"group"},Ae.createElement("span",{className:"rli-d-i-b shadow"}),Ae.createElement("span",{className:"rli-d-i-b shadow"}),Ae.createElement("span",{className:"rli-d-i-b shadow"}))),Ae.createElement(rl,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor,style:{marginTop:"2px"}}))},fC=function(e){var n=Object(e).variant,o=n===void 0?"pulsate":n;return o==="pulsate"?Ae.createElement(kO,Be({},e)):o==="brick-stack"?Ae.createElement(TO,Be({},e)):o==="bob"?Ae.createElement(EO,Be({},e)):o==="bounce"?Ae.createElement(OO,Be({},e)):null};mt(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--shape-phase".concat(n+1,"-color")});mt(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--trophySpin-phase".concat(n+1,"-color")});mt(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--slab-phase".concat(n+1,"-color")});mt(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(e,n){return"--life-line-phase".concat(n+1,"-color")});/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),t0=(...e)=>e.filter((n,o,i)=>!!n&&n.trim()!==""&&i.indexOf(n)===o).join(" ").trim();/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=R.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:u,iconNode:c,...d},p)=>R.createElement("svg",{ref:p,...RO,width:n,height:n,stroke:e,strokeWidth:i?Number(o)*24/Number(n):o,className:t0("lucide",s),...d},[...c.map(([h,g])=>R.createElement(h,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=(e,n)=>{const o=R.forwardRef(({className:i,...s},u)=>R.createElement(AO,{ref:u,iconNode:n,className:t0(`lucide-${CO(e)}`,i),...s}));return o.displayName=`${e}`,o};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],dC=il("ArrowDownRight",_O);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],pC=il("ArrowUpRight",DO);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],hC=il("Calendar",MO);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],mC=il("X",LO);var Sc={exports:{}},Ag;function NO(){return Ag||(Ag=1,(()=>{var e={296:(s,u,c)=>{var d=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,g=/^0o[0-7]+$/i,y=parseInt,v=typeof c.g=="object"&&c.g&&c.g.Object===Object&&c.g,S=typeof self=="object"&&self&&self.Object===Object&&self,w=v||S||Function("return this")(),x=Object.prototype.toString,P=Math.max,E=Math.min,L=function(){return w.Date.now()};function _(F){var ee=typeof F;return!!F&&(ee=="object"||ee=="function")}function X(F){if(typeof F=="number")return F;if(function(K){return typeof K=="symbol"||function(J){return!!J&&typeof J=="object"}(K)&&x.call(K)=="[object Symbol]"}(F))return NaN;if(_(F)){var ee=typeof F.valueOf=="function"?F.valueOf():F;F=_(ee)?ee+"":ee}if(typeof F!="string")return F===0?F:+F;F=F.replace(d,"");var ae=h.test(F);return ae||g.test(F)?y(F.slice(2),ae?2:8):p.test(F)?NaN:+F}s.exports=function(F,ee,ae){var K,J,be,_e,De,je,q=0,j=!1,V=!1,z=!0;if(typeof F!="function")throw new TypeError("Expected a function");function D(ie){var se=K,xe=J;return K=J=void 0,q=ie,_e=F.apply(xe,se)}function H(ie){var se=ie-je;return je===void 0||se>=ee||se<0||V&&ie-q>=be}function W(){var ie=L();if(H(ie))return O(ie);De=setTimeout(W,function(se){var xe=ee-(se-je);return V?E(xe,be-(se-q)):xe}(ie))}function O(ie){return De=void 0,z&&K?D(ie):(K=J=void 0,_e)}function B(){var ie=L(),se=H(ie);if(K=arguments,J=this,je=ie,se){if(De===void 0)return function(xe){return q=xe,De=setTimeout(W,ee),j?D(xe):_e}(je);if(V)return De=setTimeout(W,ee),D(je)}return De===void 0&&(De=setTimeout(W,ee)),_e}return ee=X(ee)||0,_(ae)&&(j=!!ae.leading,be=(V="maxWait"in ae)?P(X(ae.maxWait)||0,ee):be,z="trailing"in ae?!!ae.trailing:z),B.cancel=function(){De!==void 0&&clearTimeout(De),q=0,K=je=J=De=void 0},B.flush=function(){return De===void 0?_e:O(L())},B}},96:(s,u,c)=>{var d="Expected a function",p=NaN,h="[object Symbol]",g=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,S=/^0o[0-7]+$/i,w=parseInt,x=typeof c.g=="object"&&c.g&&c.g.Object===Object&&c.g,P=typeof self=="object"&&self&&self.Object===Object&&self,E=x||P||Function("return this")(),L=Object.prototype.toString,_=Math.max,X=Math.min,F=function(){return E.Date.now()};function ee(K){var J=typeof K;return!!K&&(J=="object"||J=="function")}function ae(K){if(typeof K=="number")return K;if(function(_e){return typeof _e=="symbol"||function(De){return!!De&&typeof De=="object"}(_e)&&L.call(_e)==h}(K))return p;if(ee(K)){var J=typeof K.valueOf=="function"?K.valueOf():K;K=ee(J)?J+"":J}if(typeof K!="string")return K===0?K:+K;K=K.replace(g,"");var be=v.test(K);return be||S.test(K)?w(K.slice(2),be?2:8):y.test(K)?p:+K}s.exports=function(K,J,be){var _e=!0,De=!0;if(typeof K!="function")throw new TypeError(d);return ee(be)&&(_e="leading"in be?!!be.leading:_e,De="trailing"in be?!!be.trailing:De),function(je,q,j){var V,z,D,H,W,O,B=0,ie=!1,se=!1,xe=!0;if(typeof je!="function")throw new TypeError(d);function Pe(rt){var Rt=V,ft=z;return V=z=void 0,B=rt,H=je.apply(ft,Rt)}function Me(rt){var Rt=rt-O;return O===void 0||Rt>=q||Rt<0||se&&rt-B>=D}function Oe(){var rt=F();if(Me(rt))return Ie(rt);W=setTimeout(Oe,function(Rt){var ft=q-(Rt-O);return se?X(ft,D-(Rt-B)):ft}(rt))}function Ie(rt){return W=void 0,xe&&V?Pe(rt):(V=z=void 0,H)}function nt(){var rt=F(),Rt=Me(rt);if(V=arguments,z=this,O=rt,Rt){if(W===void 0)return function(ft){return B=ft,W=setTimeout(Oe,q),ie?Pe(ft):H}(O);if(se)return W=setTimeout(Oe,q),Pe(O)}return W===void 0&&(W=setTimeout(Oe,q)),H}return q=ae(q)||0,ee(j)&&(ie=!!j.leading,D=(se="maxWait"in j)?_(ae(j.maxWait)||0,q):D,xe="trailing"in j?!!j.trailing:xe),nt.cancel=function(){W!==void 0&&clearTimeout(W),B=0,V=O=z=W=void 0},nt.flush=function(){return W===void 0?H:Ie(F())},nt}(K,J,{leading:_e,maxWait:J,trailing:De})}},703:(s,u,c)=>{var d=c(414);function p(){}function h(){}h.resetWarningCache=p,s.exports=function(){function g(S,w,x,P,E,L){if(L!==d){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}function y(){return g}g.isRequired=g;var v={array:g,bigint:g,bool:g,func:g,number:g,object:g,string:g,symbol:g,any:g,arrayOf:y,element:g,elementType:g,instanceOf:y,node:g,objectOf:y,oneOf:y,oneOfType:y,shape:y,exact:y,checkPropTypes:h,resetWarningCache:p};return v.PropTypes=v,v}},697:(s,u,c)=>{s.exports=c(703)()},414:s=>{s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},n={};function o(s){var u=n[s];if(u!==void 0)return u.exports;var c=n[s]={exports:{}};return e[s](c,c.exports,o),c.exports}o.n=s=>{var u=s&&s.__esModule?()=>s.default:()=>s;return o.d(u,{a:u}),u},o.d=(s,u)=>{for(var c in u)o.o(u,c)&&!o.o(s,c)&&Object.defineProperty(s,c,{enumerable:!0,get:u[c]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(s,u)=>Object.prototype.hasOwnProperty.call(s,u),o.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var i={};(()=>{o.r(i),o.d(i,{LazyLoadComponent:()=>Rt,LazyLoadImage:()=>na,trackWindowScroll:()=>H});const s=Fs();var u=o.n(s),c=o(697);function d(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function p(Z){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},p(Z)}function h(Z,N){var ne=Object.keys(Z);if(Object.getOwnPropertySymbols){var re=Object.getOwnPropertySymbols(Z);N&&(re=re.filter(function(Te){return Object.getOwnPropertyDescriptor(Z,Te).enumerable})),ne.push.apply(ne,re)}return ne}function g(Z,N,ne){return(N=v(N))in Z?Object.defineProperty(Z,N,{value:ne,enumerable:!0,configurable:!0,writable:!0}):Z[N]=ne,Z}function y(Z,N){for(var ne=0;ne<N.length;ne++){var re=N[ne];re.enumerable=re.enumerable||!1,re.configurable=!0,"value"in re&&(re.writable=!0),Object.defineProperty(Z,v(re.key),re)}}function v(Z){var N=function(ne,re){if(p(ne)!=="object"||ne===null)return ne;var Te=ne[Symbol.toPrimitive];if(Te!==void 0){var ke=Te.call(ne,"string");if(p(ke)!=="object")return ke;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(ne)}(Z);return p(N)==="symbol"?N:String(N)}function S(Z,N){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ne,re){return ne.__proto__=re,ne},S(Z,N)}function w(Z){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(N){return N.__proto__||Object.getPrototypeOf(N)},w(Z)}var x=function(Z){Z.forEach(function(N){N.isIntersecting&&N.target.onVisible()})},P={},E=function(Z){(function($,G){if(typeof G!="function"&&G!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(G&&G.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),Object.defineProperty($,"prototype",{writable:!1}),G&&S($,G)})(Le,Z);var N,ne,re,Te,ke=(re=Le,Te=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var $,G=w(re);if(Te){var pe=w(this).constructor;$=Reflect.construct(G,arguments,pe)}else $=G.apply(this,arguments);return function(fe,ue){if(ue&&(p(ue)==="object"||typeof ue=="function"))return ue;if(ue!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(Ce){if(Ce===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Ce}(fe)}(this,$)});function Le($){var G;if(function(fe,ue){if(!(fe instanceof ue))throw new TypeError("Cannot call a class as a function")}(this,Le),(G=ke.call(this,$)).supportsObserver=!$.scrollPosition&&$.useIntersectionObserver&&d(),G.supportsObserver){var pe=$.threshold;G.observer=function(fe){return P[fe]=P[fe]||new IntersectionObserver(x,{rootMargin:fe+"px"}),P[fe]}(pe)}return G}return N=Le,ne=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,G=this.placeholder.getBoundingClientRect(),pe=this.placeholder.style,fe=parseInt(pe.getPropertyValue("margin-left"),10)||0,ue=parseInt(pe.getPropertyValue("margin-top"),10)||0;return{bottom:$.y+G.bottom+ue,left:$.x+G.left+fe,right:$.x+G.right+fe,top:$.y+G.top+ue}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var $=this.props,G=$.scrollPosition,pe=$.threshold,fe=this.getPlaceholderBoundingBox(G),ue=G.y+window.innerHeight,Ce=G.x,Ue=G.x+window.innerWidth,$e=G.y;return $e-pe<=fe.bottom&&ue+pe>=fe.top&&Ce-pe<=fe.right&&Ue+pe>=fe.left}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var $=this,G=this.props,pe=G.className,fe=G.height,ue=G.placeholder,Ce=G.style,Ue=G.width;if(ue&&typeof ue.type!="function")return u().cloneElement(ue,{ref:function(Fe){return $.placeholder=Fe}});var $e=function(Fe){for(var Xe=1;Xe<arguments.length;Xe++){var qe=arguments[Xe]!=null?arguments[Xe]:{};Xe%2?h(Object(qe),!0).forEach(function(dt){g(Fe,dt,qe[dt])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Fe,Object.getOwnPropertyDescriptors(qe)):h(Object(qe)).forEach(function(dt){Object.defineProperty(Fe,dt,Object.getOwnPropertyDescriptor(qe,dt))})}return Fe}({display:"inline-block"},Ce);return Ue!==void 0&&($e.width=Ue),fe!==void 0&&($e.height=fe),u().createElement("span",{className:pe,ref:function(Fe){return $.placeholder=Fe},style:$e},ue)}}],ne&&y(N.prototype,ne),Object.defineProperty(N,"prototype",{writable:!1}),Le}(u().Component);E.propTypes={onVisible:c.PropTypes.func.isRequired,className:c.PropTypes.string,height:c.PropTypes.oneOfType([c.PropTypes.number,c.PropTypes.string]),placeholder:c.PropTypes.element,threshold:c.PropTypes.number,useIntersectionObserver:c.PropTypes.bool,scrollPosition:c.PropTypes.shape({x:c.PropTypes.number.isRequired,y:c.PropTypes.number.isRequired}),width:c.PropTypes.oneOfType([c.PropTypes.number,c.PropTypes.string])},E.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const L=E;var _=o(296),X=o.n(_),F=o(96),ee=o.n(F),ae=function(Z){var N=getComputedStyle(Z,null);return N.getPropertyValue("overflow")+N.getPropertyValue("overflow-y")+N.getPropertyValue("overflow-x")};const K=function(Z){if(!(Z instanceof HTMLElement))return window;for(var N=Z;N&&N instanceof HTMLElement;){if(/(scroll|auto)/.test(ae(N)))return N;N=N.parentNode}return window};function J(Z){return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},J(Z)}var be=["delayMethod","delayTime"];function _e(){return _e=Object.assign?Object.assign.bind():function(Z){for(var N=1;N<arguments.length;N++){var ne=arguments[N];for(var re in ne)Object.prototype.hasOwnProperty.call(ne,re)&&(Z[re]=ne[re])}return Z},_e.apply(this,arguments)}function De(Z,N){for(var ne=0;ne<N.length;ne++){var re=N[ne];re.enumerable=re.enumerable||!1,re.configurable=!0,"value"in re&&(re.writable=!0),Object.defineProperty(Z,(Te=function(ke,Le){if(J(ke)!=="object"||ke===null)return ke;var $=ke[Symbol.toPrimitive];if($!==void 0){var G=$.call(ke,"string");if(J(G)!=="object")return G;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(ke)}(re.key),J(Te)==="symbol"?Te:String(Te)),re)}var Te}function je(Z,N){return je=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ne,re){return ne.__proto__=re,ne},je(Z,N)}function q(Z,N){if(N&&(J(N)==="object"||typeof N=="function"))return N;if(N!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return j(Z)}function j(Z){if(Z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Z}function V(Z){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(N){return N.__proto__||Object.getPrototypeOf(N)},V(Z)}var z=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},D=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const H=function(Z){var N=function(ne){(function(pe,fe){if(typeof fe!="function"&&fe!==null)throw new TypeError("Super expression must either be null or a function");pe.prototype=Object.create(fe&&fe.prototype,{constructor:{value:pe,writable:!0,configurable:!0}}),Object.defineProperty(pe,"prototype",{writable:!1}),fe&&je(pe,fe)})(G,ne);var re,Te,ke,Le,$=(ke=G,Le=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var pe,fe=V(ke);if(Le){var ue=V(this).constructor;pe=Reflect.construct(fe,arguments,ue)}else pe=fe.apply(this,arguments);return q(this,pe)});function G(pe){var fe;if(function(Ce,Ue){if(!(Ce instanceof Ue))throw new TypeError("Cannot call a class as a function")}(this,G),(fe=$.call(this,pe)).useIntersectionObserver=pe.useIntersectionObserver&&d(),fe.useIntersectionObserver)return q(fe);var ue=fe.onChangeScroll.bind(j(fe));return pe.delayMethod==="debounce"?fe.delayedScroll=X()(ue,pe.delayTime):pe.delayMethod==="throttle"&&(fe.delayedScroll=ee()(ue,pe.delayTime)),fe.state={scrollPosition:{x:z(),y:D()}},fe.baseComponentRef=u().createRef(),fe}return re=G,(Te=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||K(this.baseComponentRef.current)!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=K(this.baseComponentRef.current),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:z(),y:D()}})}},{key:"render",value:function(){var pe=this.props,fe=(pe.delayMethod,pe.delayTime,function(Ce,Ue){if(Ce==null)return{};var $e,Fe,Xe=function(dt,Cn){if(dt==null)return{};var gn,vr,Bo={},qr=Object.keys(dt);for(vr=0;vr<qr.length;vr++)gn=qr[vr],Cn.indexOf(gn)>=0||(Bo[gn]=dt[gn]);return Bo}(Ce,Ue);if(Object.getOwnPropertySymbols){var qe=Object.getOwnPropertySymbols(Ce);for(Fe=0;Fe<qe.length;Fe++)$e=qe[Fe],Ue.indexOf($e)>=0||Object.prototype.propertyIsEnumerable.call(Ce,$e)&&(Xe[$e]=Ce[$e])}return Xe}(pe,be)),ue=this.useIntersectionObserver?null:this.state.scrollPosition;return u().createElement(Z,_e({forwardRef:this.baseComponentRef,scrollPosition:ue},fe))}}])&&De(re.prototype,Te),Object.defineProperty(re,"prototype",{writable:!1}),G}(u().Component);return N.propTypes={delayMethod:c.PropTypes.oneOf(["debounce","throttle"]),delayTime:c.PropTypes.number,useIntersectionObserver:c.PropTypes.bool},N.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},N};function W(Z){return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},W(Z)}function O(Z,N){for(var ne=0;ne<N.length;ne++){var re=N[ne];re.enumerable=re.enumerable||!1,re.configurable=!0,"value"in re&&(re.writable=!0),Object.defineProperty(Z,(Te=function(ke,Le){if(W(ke)!=="object"||ke===null)return ke;var $=ke[Symbol.toPrimitive];if($!==void 0){var G=$.call(ke,"string");if(W(G)!=="object")return G;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(ke)}(re.key),W(Te)==="symbol"?Te:String(Te)),re)}var Te}function B(Z,N){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ne,re){return ne.__proto__=re,ne},B(Z,N)}function ie(Z){return ie=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(N){return N.__proto__||Object.getPrototypeOf(N)},ie(Z)}var se=function(Z){(function($,G){if(typeof G!="function"&&G!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(G&&G.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),Object.defineProperty($,"prototype",{writable:!1}),G&&B($,G)})(Le,Z);var N,ne,re,Te,ke=(re=Le,Te=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var $,G=ie(re);if(Te){var pe=ie(this).constructor;$=Reflect.construct(G,arguments,pe)}else $=G.apply(this,arguments);return function(fe,ue){if(ue&&(W(ue)==="object"||typeof ue=="function"))return ue;if(ue!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(Ce){if(Ce===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Ce}(fe)}(this,$)});function Le($){return function(G,pe){if(!(G instanceof pe))throw new TypeError("Cannot call a class as a function")}(this,Le),ke.call(this,$)}return N=Le,(ne=[{key:"render",value:function(){return u().createElement(L,this.props)}}])&&O(N.prototype,ne),Object.defineProperty(N,"prototype",{writable:!1}),Le}(u().Component);const xe=H(se);function Pe(Z){return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},Pe(Z)}function Me(Z,N){for(var ne=0;ne<N.length;ne++){var re=N[ne];re.enumerable=re.enumerable||!1,re.configurable=!0,"value"in re&&(re.writable=!0),Object.defineProperty(Z,(Te=function(ke,Le){if(Pe(ke)!=="object"||ke===null)return ke;var $=ke[Symbol.toPrimitive];if($!==void 0){var G=$.call(ke,"string");if(Pe(G)!=="object")return G;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(ke)}(re.key),Pe(Te)==="symbol"?Te:String(Te)),re)}var Te}function Oe(Z,N){return Oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ne,re){return ne.__proto__=re,ne},Oe(Z,N)}function Ie(Z){if(Z===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Z}function nt(Z){return nt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(N){return N.__proto__||Object.getPrototypeOf(N)},nt(Z)}var rt=function(Z){(function($,G){if(typeof G!="function"&&G!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(G&&G.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),Object.defineProperty($,"prototype",{writable:!1}),G&&Oe($,G)})(Le,Z);var N,ne,re,Te,ke=(re=Le,Te=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var $,G=nt(re);if(Te){var pe=nt(this).constructor;$=Reflect.construct(G,arguments,pe)}else $=G.apply(this,arguments);return function(fe,ue){if(ue&&(Pe(ue)==="object"||typeof ue=="function"))return ue;if(ue!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ie(fe)}(this,$)});function Le($){var G;(function(Ue,$e){if(!(Ue instanceof $e))throw new TypeError("Cannot call a class as a function")})(this,Le),G=ke.call(this,$);var pe=$.afterLoad,fe=$.beforeLoad,ue=$.scrollPosition,Ce=$.visibleByDefault;return G.state={visible:Ce},Ce&&(fe(),pe()),G.onVisible=G.onVisible.bind(Ie(G)),G.isScrollTracked=!!(ue&&Number.isFinite(ue.x)&&ue.x>=0&&Number.isFinite(ue.y)&&ue.y>=0),G}return N=Le,(ne=[{key:"componentDidUpdate",value:function($,G){G.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var $=this.props,G=$.className,pe=$.delayMethod,fe=$.delayTime,ue=$.height,Ce=$.placeholder,Ue=$.scrollPosition,$e=$.style,Fe=$.threshold,Xe=$.useIntersectionObserver,qe=$.width;return this.isScrollTracked||Xe&&d()?u().createElement(L,{className:G,height:ue,onVisible:this.onVisible,placeholder:Ce,scrollPosition:Ue,style:$e,threshold:Fe,useIntersectionObserver:Xe,width:qe}):u().createElement(xe,{className:G,delayMethod:pe,delayTime:fe,height:ue,onVisible:this.onVisible,placeholder:Ce,style:$e,threshold:Fe,width:qe})}}])&&Me(N.prototype,ne),Object.defineProperty(N,"prototype",{writable:!1}),Le}(u().Component);rt.propTypes={afterLoad:c.PropTypes.func,beforeLoad:c.PropTypes.func,useIntersectionObserver:c.PropTypes.bool,visibleByDefault:c.PropTypes.bool},rt.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Rt=rt;function ft(Z){return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N},ft(Z)}var jo=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function zo(Z,N){var ne=Object.keys(Z);if(Object.getOwnPropertySymbols){var re=Object.getOwnPropertySymbols(Z);N&&(re=re.filter(function(Te){return Object.getOwnPropertyDescriptor(Z,Te).enumerable})),ne.push.apply(ne,re)}return ne}function Io(Z){for(var N=1;N<arguments.length;N++){var ne=arguments[N]!=null?arguments[N]:{};N%2?zo(Object(ne),!0).forEach(function(re){Fo(Z,re,ne[re])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Z,Object.getOwnPropertyDescriptors(ne)):zo(Object(ne)).forEach(function(re){Object.defineProperty(Z,re,Object.getOwnPropertyDescriptor(ne,re))})}return Z}function Fo(Z,N,ne){return(N=Hn(N))in Z?Object.defineProperty(Z,N,{value:ne,enumerable:!0,configurable:!0,writable:!0}):Z[N]=ne,Z}function yr(){return yr=Object.assign?Object.assign.bind():function(Z){for(var N=1;N<arguments.length;N++){var ne=arguments[N];for(var re in ne)Object.prototype.hasOwnProperty.call(ne,re)&&(Z[re]=ne[re])}return Z},yr.apply(this,arguments)}function Vo(Z,N){for(var ne=0;ne<N.length;ne++){var re=N[ne];re.enumerable=re.enumerable||!1,re.configurable=!0,"value"in re&&(re.writable=!0),Object.defineProperty(Z,Hn(re.key),re)}}function Hn(Z){var N=function(ne,re){if(ft(ne)!=="object"||ne===null)return ne;var Te=ne[Symbol.toPrimitive];if(Te!==void 0){var ke=Te.call(ne,"string");if(ft(ke)!=="object")return ke;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(ne)}(Z);return ft(N)==="symbol"?N:String(N)}function mn(Z,N){return mn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ne,re){return ne.__proto__=re,ne},mn(Z,N)}function Wn(Z){return Wn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(N){return N.__proto__||Object.getPrototypeOf(N)},Wn(Z)}var $r=function(Z){(function($,G){if(typeof G!="function"&&G!==null)throw new TypeError("Super expression must either be null or a function");$.prototype=Object.create(G&&G.prototype,{constructor:{value:$,writable:!0,configurable:!0}}),Object.defineProperty($,"prototype",{writable:!1}),G&&mn($,G)})(Le,Z);var N,ne,re,Te,ke=(re=Le,Te=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var $,G=Wn(re);if(Te){var pe=Wn(this).constructor;$=Reflect.construct(G,arguments,pe)}else $=G.apply(this,arguments);return function(fe,ue){if(ue&&(ft(ue)==="object"||typeof ue=="function"))return ue;if(ue!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(Ce){if(Ce===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Ce}(fe)}(this,$)});function Le($){var G;return function(pe,fe){if(!(pe instanceof fe))throw new TypeError("Cannot call a class as a function")}(this,Le),(G=ke.call(this,$)).state={loaded:!1},G}return N=Le,(ne=[{key:"onImageLoad",value:function(){var $=this;return this.state.loaded?null:function(G){$.props.onLoad(G),$.props.afterLoad(),$.setState({loaded:!0})}}},{key:"getImg",value:function(){var $=this.props,G=($.afterLoad,$.beforeLoad,$.delayMethod,$.delayTime,$.effect,$.placeholder,$.placeholderSrc,$.scrollPosition,$.threshold,$.useIntersectionObserver,$.visibleByDefault,$.wrapperClassName,$.wrapperProps,function(pe,fe){if(pe==null)return{};var ue,Ce,Ue=function(Fe,Xe){if(Fe==null)return{};var qe,dt,Cn={},gn=Object.keys(Fe);for(dt=0;dt<gn.length;dt++)qe=gn[dt],Xe.indexOf(qe)>=0||(Cn[qe]=Fe[qe]);return Cn}(pe,fe);if(Object.getOwnPropertySymbols){var $e=Object.getOwnPropertySymbols(pe);for(Ce=0;Ce<$e.length;Ce++)ue=$e[Ce],fe.indexOf(ue)>=0||Object.prototype.propertyIsEnumerable.call(pe,ue)&&(Ue[ue]=pe[ue])}return Ue}($,jo));return u().createElement("img",yr({},G,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var $=this.props,G=$.beforeLoad,pe=$.className,fe=$.delayMethod,ue=$.delayTime,Ce=$.height,Ue=$.placeholder,$e=$.scrollPosition,Fe=$.style,Xe=$.threshold,qe=$.useIntersectionObserver,dt=$.visibleByDefault,Cn=$.width;return u().createElement(Rt,{beforeLoad:G,className:pe,delayMethod:fe,delayTime:ue,height:Ce,placeholder:Ue,scrollPosition:$e,style:Fe,threshold:Xe,useIntersectionObserver:qe,visibleByDefault:dt,width:Cn},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function($){var G=this.props,pe=G.effect,fe=G.height,ue=G.placeholderSrc,Ce=G.width,Ue=G.wrapperClassName,$e=G.wrapperProps,Fe=this.state.loaded,Xe=Fe?" lazy-load-image-loaded":"",qe=Fe||!ue?{}:{backgroundImage:"url(".concat(ue,")"),backgroundSize:"100% 100%"};return u().createElement("span",yr({className:Ue+" lazy-load-image-background "+pe+Xe,style:Io(Io({},qe),{},{color:"transparent",display:"inline-block",height:fe,width:Ce})},$e),$)}},{key:"render",value:function(){var $=this.props,G=$.effect,pe=$.placeholderSrc,fe=$.visibleByDefault,ue=$.wrapperClassName,Ce=$.wrapperProps,Ue=this.getLazyLoadImage();return(G||pe)&&!fe||ue||Ce?this.getWrappedLazyLoadImage(Ue):Ue}}])&&Vo(N.prototype,ne),Object.defineProperty(N,"prototype",{writable:!1}),Le}(u().Component);$r.propTypes={onLoad:c.PropTypes.func,afterLoad:c.PropTypes.func,beforeLoad:c.PropTypes.func,delayMethod:c.PropTypes.string,delayTime:c.PropTypes.number,effect:c.PropTypes.string,placeholderSrc:c.PropTypes.string,threshold:c.PropTypes.number,useIntersectionObserver:c.PropTypes.bool,visibleByDefault:c.PropTypes.bool,wrapperClassName:c.PropTypes.string,wrapperProps:c.PropTypes.object},$r.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const na=$r})(),Sc.exports=i})()),Sc.exports}var gC=NO();export{dC as A,VO as B,hC as C,fC as E,BO as H,Wg as L,Ae as R,mC as X,ct as a,HO as b,cC as c,UO as d,L1 as e,pC as f,gC as g,IO as h,Qw as i,Fn as j,FO as k,X1 as l,qO as m,zO as n,R as r,Br as u};
