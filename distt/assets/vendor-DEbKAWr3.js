function To(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mu={exports:{}},vi={},Du={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function i1(){if(Xh)return Ce;Xh=1;var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,k={};function S(O,I,oe){this.props=O,this.context=I,this.refs=k,this.updater=oe||w}S.prototype.isReactComponent={},S.prototype.setState=function(O,I){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,I,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function E(){}E.prototype=S.prototype;function R(O,I,oe){this.props=O,this.context=I,this.refs=k,this.updater=oe||w}var $=R.prototype=new E;$.constructor=R,x($,S.prototype),$.isPureReactComponent=!0;var te=Array.isArray,B=Object.prototype.hasOwnProperty,ne={current:null},ie={key:!0,ref:!0,__self:!0,__source:!0};function Y(O,I,oe){var ae,we={},ke=null,_e=null;if(I!=null)for(ae in I.ref!==void 0&&(_e=I.ref),I.key!==void 0&&(ke=""+I.key),I)B.call(I,ae)&&!ie.hasOwnProperty(ae)&&(we[ae]=I[ae]);var Te=arguments.length-2;if(Te===1)we.children=oe;else if(1<Te){for(var Ne=Array(Te),nt=0;nt<Te;nt++)Ne[nt]=arguments[nt+2];we.children=Ne}if(O&&O.defaultProps)for(ae in Te=O.defaultProps,Te)we[ae]===void 0&&(we[ae]=Te[ae]);return{$$typeof:t,type:O,key:ke,ref:_e,props:we,_owner:ne.current}}function Q(O,I){return{$$typeof:t,type:O.type,key:I,ref:O.ref,props:O.props,_owner:O._owner}}function ve(O){return typeof O=="object"&&O!==null&&O.$$typeof===t}function Me(O){var I={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(oe){return I[oe]})}var De=/\/+/g;function Le(O,I){return typeof O=="object"&&O!==null&&O.key!=null?Me(""+O.key):I.toString(36)}function U(O,I,oe,ae,we){var ke=typeof O;(ke==="undefined"||ke==="boolean")&&(O=null);var _e=!1;if(O===null)_e=!0;else switch(ke){case"string":case"number":_e=!0;break;case"object":switch(O.$$typeof){case t:case n:_e=!0}}if(_e)return _e=O,we=we(_e),O=ae===""?"."+Le(_e,0):ae,te(we)?(oe="",O!=null&&(oe=O.replace(De,"$&/")+"/"),U(we,I,oe,"",function(nt){return nt})):we!=null&&(ve(we)&&(we=Q(we,oe+(!we.key||_e&&_e.key===we.key?"":(""+we.key).replace(De,"$&/")+"/")+O)),I.push(we)),1;if(_e=0,ae=ae===""?".":ae+":",te(O))for(var Te=0;Te<O.length;Te++){ke=O[Te];var Ne=ae+Le(ke,Te);_e+=U(ke,I,oe,Ne,we)}else if(Ne=v(O),typeof Ne=="function")for(O=Ne.call(O),Te=0;!(ke=O.next()).done;)ke=ke.value,Ne=ae+Le(ke,Te++),_e+=U(ke,I,oe,Ne,we);else if(ke==="object")throw I=String(O),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return _e}function j(O,I,oe){if(O==null)return O;var ae=[],we=0;return U(O,ae,"","",function(ke){return I.call(oe,ke,we++)}),ae}function V(O){if(O._status===-1){var I=O._result;I=I(),I.then(function(oe){(O._status===0||O._status===-1)&&(O._status=1,O._result=oe)},function(oe){(O._status===0||O._status===-1)&&(O._status=2,O._result=oe)}),O._status===-1&&(O._status=0,O._result=I)}if(O._status===1)return O._result.default;throw O._result}var N={current:null},_={transition:null},q={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:_,ReactCurrentOwner:ne};function W(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:j,forEach:function(O,I,oe){j(O,function(){I.apply(this,arguments)},oe)},count:function(O){var I=0;return j(O,function(){I++}),I},toArray:function(O){return j(O,function(I){return I})||[]},only:function(O){if(!ve(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ce.Component=S,Ce.Fragment=o,Ce.Profiler=s,Ce.PureComponent=R,Ce.StrictMode=a,Ce.Suspense=h,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,Ce.act=W,Ce.cloneElement=function(O,I,oe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ae=x({},O.props),we=O.key,ke=O.ref,_e=O._owner;if(I!=null){if(I.ref!==void 0&&(ke=I.ref,_e=ne.current),I.key!==void 0&&(we=""+I.key),O.type&&O.type.defaultProps)var Te=O.type.defaultProps;for(Ne in I)B.call(I,Ne)&&!ie.hasOwnProperty(Ne)&&(ae[Ne]=I[Ne]===void 0&&Te!==void 0?Te[Ne]:I[Ne])}var Ne=arguments.length-2;if(Ne===1)ae.children=oe;else if(1<Ne){Te=Array(Ne);for(var nt=0;nt<Ne;nt++)Te[nt]=arguments[nt+2];ae.children=Te}return{$$typeof:t,type:O.type,key:we,ref:ke,props:ae,_owner:_e}},Ce.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ce.createElement=Y,Ce.createFactory=function(O){var I=Y.bind(null,O);return I.type=O,I},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(O){return{$$typeof:d,render:O}},Ce.isValidElement=ve,Ce.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:V}},Ce.memo=function(O,I){return{$$typeof:m,type:O,compare:I===void 0?null:I}},Ce.startTransition=function(O){var I=_.transition;_.transition={};try{O()}finally{_.transition=I}},Ce.unstable_act=W,Ce.useCallback=function(O,I){return N.current.useCallback(O,I)},Ce.useContext=function(O){return N.current.useContext(O)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(O){return N.current.useDeferredValue(O)},Ce.useEffect=function(O,I){return N.current.useEffect(O,I)},Ce.useId=function(){return N.current.useId()},Ce.useImperativeHandle=function(O,I,oe){return N.current.useImperativeHandle(O,I,oe)},Ce.useInsertionEffect=function(O,I){return N.current.useInsertionEffect(O,I)},Ce.useLayoutEffect=function(O,I){return N.current.useLayoutEffect(O,I)},Ce.useMemo=function(O,I){return N.current.useMemo(O,I)},Ce.useReducer=function(O,I,oe){return N.current.useReducer(O,I,oe)},Ce.useRef=function(O){return N.current.useRef(O)},Ce.useState=function(O){return N.current.useState(O)},Ce.useSyncExternalStore=function(O,I,oe){return N.current.useSyncExternalStore(O,I,oe)},Ce.useTransition=function(){return N.current.useTransition()},Ce.version="18.3.1",Ce}var Qh;function As(){return Qh||(Qh=1,Du.exports=i1()),Du.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function a1(){if(Zh)return vi;Zh=1;var t=As(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var g,b={},v=null,w=null;m!==void 0&&(v=""+m),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(w=h.ref);for(g in h)a.call(h,g)&&!u.hasOwnProperty(g)&&(b[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)b[g]===void 0&&(b[g]=h[g]);return{$$typeof:n,type:d,key:v,ref:w,props:b,_owner:s.current}}return vi.Fragment=o,vi.jsx=c,vi.jsxs=c,vi}var Jh;function s1(){return Jh||(Jh=1,Mu.exports=a1()),Mu.exports}var jn=s1(),M=As();const Ee=To(M);var rs={},_u={exports:{}},jt={},Au={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function l1(){return ep||(ep=1,function(t){function n(_,q){var W=_.length;_.push(q);e:for(;0<W;){var O=W-1>>>1,I=_[O];if(0<s(I,q))_[O]=q,_[W]=I,W=O;else break e}}function o(_){return _.length===0?null:_[0]}function a(_){if(_.length===0)return null;var q=_[0],W=_.pop();if(W!==q){_[0]=W;e:for(var O=0,I=_.length,oe=I>>>1;O<oe;){var ae=2*(O+1)-1,we=_[ae],ke=ae+1,_e=_[ke];if(0>s(we,W))ke<I&&0>s(_e,we)?(_[O]=_e,_[ke]=W,O=ke):(_[O]=we,_[ae]=W,O=ae);else if(ke<I&&0>s(_e,W))_[O]=_e,_[ke]=W,O=ke;else break e}}return q}function s(_,q){var W=_.sortIndex-q.sortIndex;return W!==0?W:_.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var h=[],m=[],g=1,b=null,v=3,w=!1,x=!1,k=!1,S=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(_){for(var q=o(m);q!==null;){if(q.callback===null)a(m);else if(q.startTime<=_)a(m),q.sortIndex=q.expirationTime,n(h,q);else break;q=o(m)}}function te(_){if(k=!1,$(_),!x)if(o(h)!==null)x=!0,V(B);else{var q=o(m);q!==null&&N(te,q.startTime-_)}}function B(_,q){x=!1,k&&(k=!1,E(Y),Y=-1),w=!0;var W=v;try{for($(q),b=o(h);b!==null&&(!(b.expirationTime>q)||_&&!Me());){var O=b.callback;if(typeof O=="function"){b.callback=null,v=b.priorityLevel;var I=O(b.expirationTime<=q);q=t.unstable_now(),typeof I=="function"?b.callback=I:b===o(h)&&a(h),$(q)}else a(h);b=o(h)}if(b!==null)var oe=!0;else{var ae=o(m);ae!==null&&N(te,ae.startTime-q),oe=!1}return oe}finally{b=null,v=W,w=!1}}var ne=!1,ie=null,Y=-1,Q=5,ve=-1;function Me(){return!(t.unstable_now()-ve<Q)}function De(){if(ie!==null){var _=t.unstable_now();ve=_;var q=!0;try{q=ie(!0,_)}finally{q?Le():(ne=!1,ie=null)}}else ne=!1}var Le;if(typeof R=="function")Le=function(){R(De)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,j=U.port2;U.port1.onmessage=De,Le=function(){j.postMessage(null)}}else Le=function(){S(De,0)};function V(_){ie=_,ne||(ne=!0,Le())}function N(_,q){Y=S(function(){_(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(_){_.callback=null},t.unstable_continueExecution=function(){x||w||(x=!0,V(B))},t.unstable_forceFrameRate=function(_){0>_||125<_||(Q=0<_?Math.floor(1e3/_):5)},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return o(h)},t.unstable_next=function(_){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var W=v;v=q;try{return _()}finally{v=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(_,q){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var W=v;v=_;try{return q()}finally{v=W}},t.unstable_scheduleCallback=function(_,q,W){var O=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?O+W:O):W=O,_){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=W+I,_={id:g++,callback:q,priorityLevel:_,startTime:W,expirationTime:I,sortIndex:-1},W>O?(_.sortIndex=W,n(m,_),o(h)===null&&_===o(m)&&(k?(E(Y),Y=-1):k=!0,N(te,W-O))):(_.sortIndex=I,n(h,_),x||w||(x=!0,V(B))),_},t.unstable_shouldYield=Me,t.unstable_wrapCallback=function(_){var q=v;return function(){var W=v;v=q;try{return _.apply(this,arguments)}finally{v=W}}}}(Ru)),Ru}var tp;function u1(){return tp||(tp=1,Au.exports=l1()),Au.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function c1(){if(np)return jt;np=1;var t=As(),n=u1();function o(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)r+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function u(e,r){c(e,r),c(e+"Capture",r)}function c(e,r){for(s[e]=r,e=0;e<r.length;e++)a.add(r[e])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},b={};function v(e){return h.call(b,e)?!0:h.call(g,e)?!1:m.test(e)?b[e]=!0:(g[e]=!0,!1)}function w(e,r,i,l){if(i!==null&&i.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function x(e,r,i,l){if(r===null||typeof r>"u"||w(e,r,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function k(e,r,i,l,f,p,y){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=i,this.propertyName=e,this.type=r,this.sanitizeURL=p,this.removeEmptyString=y}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];S[r]=new k(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(E,R);S[r]=new k(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(E,R);S[r]=new k(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(E,R);S[r]=new k(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});function $(e,r,i,l){var f=S.hasOwnProperty(r)?S[r]:null;(f!==null?f.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(x(r,i,f,l)&&(i=null),l||f===null?v(r)&&(i===null?e.removeAttribute(r):e.setAttribute(r,""+i)):f.mustUseProperty?e[f.propertyName]=i===null?f.type===3?!1:"":i:(r=f.attributeName,l=f.attributeNamespace,i===null?e.removeAttribute(r):(f=f.type,i=f===3||f===4&&i===!0?"":""+i,l?e.setAttributeNS(l,r,i):e.setAttribute(r,i))))}var te=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),ne=Symbol.for("react.portal"),ie=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),Me=Symbol.for("react.context"),De=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),_=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,O;function I(e){if(O===void 0)try{throw Error()}catch(i){var r=i.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+e}var oe=!1;function ae(e,r){if(!e||oe)return"";oe=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(z){var l=z}Reflect.construct(e,[],r)}else{try{r.call()}catch(z){l=z}e.call(r.prototype)}else{try{throw Error()}catch(z){l=z}e()}}catch(z){if(z&&l&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),p=l.stack.split(`
`),y=f.length-1,P=p.length-1;1<=y&&0<=P&&f[y]!==p[P];)P--;for(;1<=y&&0<=P;y--,P--)if(f[y]!==p[P]){if(y!==1||P!==1)do if(y--,P--,0>P||f[y]!==p[P]){var T=`
`+f[y].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=y&&0<=P);break}}}finally{oe=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?I(e):""}function we(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ie:return"Fragment";case ne:return"Portal";case Q:return"Profiler";case Y:return"StrictMode";case Le:return"Suspense";case U:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Me:return(e.displayName||"Context")+".Consumer";case ve:return(e._context.displayName||"Context")+".Provider";case De:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return r=e.displayName||null,r!==null?r:ke(e.type)||"Memo";case V:r=e._payload,e=e._init;try{return ke(e(r))}catch{}}return null}function _e(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function nt(e){var r=Ne(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r];if(!e.hasOwnProperty(r)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var f=i.get,p=i.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return f.call(this)},set:function(y){l=""+y,p.call(this,y)}}),Object.defineProperty(e,r,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function rt(e){e._valueTracker||(e._valueTracker=nt(e))}function Ct(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var i=r.getValue(),l="";return e&&(l=Ne(e)?e.checked?"true":"false":e.value),e=l,e!==i?(r.setValue(e),!0):!1}function ct(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Do(e,r){var i=r.checked;return W({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function _o(e,r){var i=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;i=Te(r.value!=null?r.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ao(e,r){r=r.checked,r!=null&&$(e,"checked",r,!1)}function Ro(e,r){Ao(e,r);var i=Te(r.value),l=r.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Lo(e,r.type,i):r.hasOwnProperty("defaultValue")&&Lo(e,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function pr(e,r,i){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,i||r===e.value||(e.value=r),e.defaultValue=r}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Lo(e,r,i){(r!=="number"||ct(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Bn=Array.isArray;function fn(e,r,i,l){if(e=e.options,r){r={};for(var f=0;f<i.length;f++)r["$"+i[f]]=!0;for(i=0;i<e.length;i++)f=r.hasOwnProperty("$"+e[i].value),e[i].selected!==f&&(e[i].selected=f),f&&l&&(e[i].defaultSelected=!0)}else{for(i=""+Te(i),r=null,f=0;f<e.length;f++){if(e[f].value===i){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}r!==null||e[f].disabled||(r=e[f])}r!==null&&(r.selected=!0)}}function $n(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(o(91));return W({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zr(e,r){var i=r.value;if(i==null){if(i=r.children,r=r.defaultValue,i!=null){if(r!=null)throw Error(o(92));if(Bn(i)){if(1<i.length)throw Error(o(93));i=i[0]}r=i}r==null&&(r=""),i=r}e._wrapperState={initialValue:Te(i)}}function Gi(e,r){var i=Te(r.value),l=Te(r.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),r.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function X(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function L(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function J(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?L(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ee,Se=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,i,l,f){MSApp.execUnsafeLocalFunction(function(){return e(r,i,l,f)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ee.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Pe(e,r){if(r){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=r;return}}e.textContent=r}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(e){F.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Ae[r]=Ae[e]})});function H(e,r,i){return r==null||typeof r=="boolean"||r===""?"":i||typeof r!="number"||r===0||Ae.hasOwnProperty(e)&&Ae[e]?(""+r).trim():r+"px"}function de(e,r){e=e.style;for(var i in r)if(r.hasOwnProperty(i)){var l=i.indexOf("--")===0,f=H(i,r[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,f):e[i]=f}}var ce=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function le(e,r){if(r){if(ce[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(o(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(o(61))}if(r.style!=null&&typeof r.style!="object")throw Error(o(62))}}function Oe(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Be=null;function $e(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ze=null,Ke=null,Ue=null;function ft(e){if(e=ri(e)){if(typeof ze!="function")throw Error(o(280));var r=e.stateNode;r&&(r=va(r),ze(e.stateNode,e.type,r))}}function Tn(e){Ke?Ue?Ue.push(e):Ue=[e]:Ke=e}function dn(){if(Ke){var e=Ke,r=Ue;if(Ue=Ke=null,ft(e),r)for(e=0;e<r.length;e++)ft(r[e])}}function mr(e,r){return e(r)}function jo(){}var Ir=!1;function vf(e,r,i){if(Ir)return e(r,i);Ir=!0;try{return mr(e,r,i)}finally{Ir=!1,(Ke!==null||Ue!==null)&&(jo(),dn())}}function No(e,r){var i=e.stateNode;if(i===null)return null;var l=va(i);if(l===null)return null;i=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,r,typeof i));return i}var Ks=!1;if(d)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{Ks=!1}function fv(e,r,i,l,f,p,y,P,T){var z=Array.prototype.slice.call(arguments,3);try{r.apply(i,z)}catch(G){this.onError(G)}}var Io=!1,Xi=null,Qi=!1,Gs=null,dv={onError:function(e){Io=!0,Xi=e}};function hv(e,r,i,l,f,p,y,P,T){Io=!1,Xi=null,fv.apply(dv,arguments)}function pv(e,r,i,l,f,p,y,P,T){if(hv.apply(this,arguments),Io){if(Io){var z=Xi;Io=!1,Xi=null}else throw Error(o(198));Qi||(Qi=!0,Gs=z)}}function gr(e){var r=e,i=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(i=r.return),e=r.return;while(e)}return r.tag===3?i:null}function bf(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function wf(e){if(gr(e)!==e)throw Error(o(188))}function mv(e){var r=e.alternate;if(!r){if(r=gr(e),r===null)throw Error(o(188));return r!==e?null:e}for(var i=e,l=r;;){var f=i.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){i=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===i)return wf(f),e;if(p===l)return wf(f),r;p=p.sibling}throw Error(o(188))}if(i.return!==l.return)i=f,l=p;else{for(var y=!1,P=f.child;P;){if(P===i){y=!0,i=f,l=p;break}if(P===l){y=!0,l=f,i=p;break}P=P.sibling}if(!y){for(P=p.child;P;){if(P===i){y=!0,i=p,l=f;break}if(P===l){y=!0,l=p,i=f;break}P=P.sibling}if(!y)throw Error(o(189))}}if(i.alternate!==l)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:r}function xf(e){return e=mv(e),e!==null?kf(e):null}function kf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=kf(e);if(r!==null)return r;e=e.sibling}return null}var Pf=n.unstable_scheduleCallback,Sf=n.unstable_cancelCallback,gv=n.unstable_shouldYield,yv=n.unstable_requestPaint,at=n.unstable_now,vv=n.unstable_getCurrentPriorityLevel,Xs=n.unstable_ImmediatePriority,Tf=n.unstable_UserBlockingPriority,Zi=n.unstable_NormalPriority,bv=n.unstable_LowPriority,Of=n.unstable_IdlePriority,Ji=null,hn=null;function wv(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:Pv,xv=Math.log,kv=Math.LN2;function Pv(e){return e>>>=0,e===0?32:31-(xv(e)/kv|0)|0}var ea=64,ta=4194304;function Vo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function na(e,r){var i=e.pendingLanes;if(i===0)return 0;var l=0,f=e.suspendedLanes,p=e.pingedLanes,y=i&268435455;if(y!==0){var P=y&~f;P!==0?l=Vo(P):(p&=y,p!==0&&(l=Vo(p)))}else y=i&~f,y!==0?l=Vo(y):p!==0&&(l=Vo(p));if(l===0)return 0;if(r!==0&&r!==l&&(r&f)===0&&(f=l&-l,p=r&-r,f>=p||f===16&&(p&4194240)!==0))return r;if((l&4)!==0&&(l|=i&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=l;0<r;)i=31-Zt(r),f=1<<i,l|=e[i],r&=~f;return l}function Sv(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tv(e,r){for(var i=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,p=e.pendingLanes;0<p;){var y=31-Zt(p),P=1<<y,T=f[y];T===-1?((P&i)===0||(P&l)!==0)&&(f[y]=Sv(P,r)):T<=r&&(e.expiredLanes|=P),p&=~P}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cf(){var e=ea;return ea<<=1,(ea&4194240)===0&&(ea=64),e}function Zs(e){for(var r=[],i=0;31>i;i++)r.push(e);return r}function Fo(e,r,i){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Zt(r),e[r]=i}function Ov(e,r){var i=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var f=31-Zt(i),p=1<<f;r[f]=0,l[f]=-1,e[f]=-1,i&=~p}}function Js(e,r){var i=e.entangledLanes|=r;for(e=e.entanglements;i;){var l=31-Zt(i),f=1<<l;f&r|e[l]&r&&(e[l]|=r),i&=~f}}var Ie=0;function Ef(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Mf,el,Df,_f,Af,tl=!1,ra=[],Un=null,Wn=null,qn=null,Bo=new Map,$o=new Map,Hn=[],Cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rf(e,r){switch(e){case"focusin":case"focusout":Un=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Bo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(r.pointerId)}}function Uo(e,r,i,l,f,p){return e===null||e.nativeEvent!==p?(e={blockedOn:r,domEventName:i,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},r!==null&&(r=ri(r),r!==null&&el(r)),e):(e.eventSystemFlags|=l,r=e.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),e)}function Ev(e,r,i,l,f){switch(r){case"focusin":return Un=Uo(Un,e,r,i,l,f),!0;case"dragenter":return Wn=Uo(Wn,e,r,i,l,f),!0;case"mouseover":return qn=Uo(qn,e,r,i,l,f),!0;case"pointerover":var p=f.pointerId;return Bo.set(p,Uo(Bo.get(p)||null,e,r,i,l,f)),!0;case"gotpointercapture":return p=f.pointerId,$o.set(p,Uo($o.get(p)||null,e,r,i,l,f)),!0}return!1}function Lf(e){var r=yr(e.target);if(r!==null){var i=gr(r);if(i!==null){if(r=i.tag,r===13){if(r=bf(i),r!==null){e.blockedOn=r,Af(e.priority,function(){Df(i)});return}}else if(r===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oa(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var i=rl(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);Be=l,i.target.dispatchEvent(l),Be=null}else return r=ri(i),r!==null&&el(r),e.blockedOn=i,!1;r.shift()}return!0}function jf(e,r,i){oa(e)&&i.delete(r)}function Mv(){tl=!1,Un!==null&&oa(Un)&&(Un=null),Wn!==null&&oa(Wn)&&(Wn=null),qn!==null&&oa(qn)&&(qn=null),Bo.forEach(jf),$o.forEach(jf)}function Wo(e,r){e.blockedOn===r&&(e.blockedOn=null,tl||(tl=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Mv)))}function qo(e){function r(f){return Wo(f,e)}if(0<ra.length){Wo(ra[0],e);for(var i=1;i<ra.length;i++){var l=ra[i];l.blockedOn===e&&(l.blockedOn=null)}}for(Un!==null&&Wo(Un,e),Wn!==null&&Wo(Wn,e),qn!==null&&Wo(qn,e),Bo.forEach(r),$o.forEach(r),i=0;i<Hn.length;i++)l=Hn[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<Hn.length&&(i=Hn[0],i.blockedOn===null);)Lf(i),i.blockedOn===null&&Hn.shift()}var Vr=te.ReactCurrentBatchConfig,ia=!0;function Dv(e,r,i,l){var f=Ie,p=Vr.transition;Vr.transition=null;try{Ie=1,nl(e,r,i,l)}finally{Ie=f,Vr.transition=p}}function _v(e,r,i,l){var f=Ie,p=Vr.transition;Vr.transition=null;try{Ie=4,nl(e,r,i,l)}finally{Ie=f,Vr.transition=p}}function nl(e,r,i,l){if(ia){var f=rl(e,r,i,l);if(f===null)wl(e,r,l,aa,i),Rf(e,l);else if(Ev(f,e,r,i,l))l.stopPropagation();else if(Rf(e,l),r&4&&-1<Cv.indexOf(e)){for(;f!==null;){var p=ri(f);if(p!==null&&Mf(p),p=rl(e,r,i,l),p===null&&wl(e,r,l,aa,i),p===f)break;f=p}f!==null&&l.stopPropagation()}else wl(e,r,l,null,i)}}var aa=null;function rl(e,r,i,l){if(aa=null,e=$e(l),e=yr(e),e!==null)if(r=gr(e),r===null)e=null;else if(i=r.tag,i===13){if(e=bf(r),e!==null)return e;e=null}else if(i===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return aa=e,null}function Nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vv()){case Xs:return 1;case Tf:return 4;case Zi:case bv:return 16;case Of:return 536870912;default:return 16}default:return 16}}var Yn=null,ol=null,sa=null;function zf(){if(sa)return sa;var e,r=ol,i=r.length,l,f="value"in Yn?Yn.value:Yn.textContent,p=f.length;for(e=0;e<i&&r[e]===f[e];e++);var y=i-e;for(l=1;l<=y&&r[i-l]===f[p-l];l++);return sa=f.slice(e,1<l?1-l:void 0)}function la(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ua(){return!0}function If(){return!1}function Nt(e){function r(i,l,f,p,y){this._reactName=i,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var P in e)e.hasOwnProperty(P)&&(i=e[P],this[P]=i?i(p):p[P]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ua:If,this.isPropagationStopped=If,this}return W(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),r}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Nt(Fr),Ho=W({},Fr,{view:0,detail:0}),Av=Nt(Ho),al,sl,Yo,ca=W({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ul,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yo&&(Yo&&e.type==="mousemove"?(al=e.screenX-Yo.screenX,sl=e.screenY-Yo.screenY):sl=al=0,Yo=e),al)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),Vf=Nt(ca),Rv=W({},ca,{dataTransfer:0}),Lv=Nt(Rv),jv=W({},Ho,{relatedTarget:0}),ll=Nt(jv),Nv=W({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=Nt(Nv),Iv=W({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vv=Nt(Iv),Fv=W({},Fr,{data:0}),Ff=Nt(Fv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wv(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Uv[e])?!!r[e]:!1}function ul(){return Wv}var qv=W({},Ho,{key:function(e){if(e.key){var r=Bv[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=la(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$v[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ul,charCode:function(e){return e.type==="keypress"?la(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?la(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hv=Nt(qv),Yv=W({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=Nt(Yv),Kv=W({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ul}),Gv=Nt(Kv),Xv=W({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=Nt(Xv),Zv=W({},ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=Nt(Zv),e0=[9,13,27,32],cl=d&&"CompositionEvent"in window,Ko=null;d&&"documentMode"in document&&(Ko=document.documentMode);var t0=d&&"TextEvent"in window&&!Ko,$f=d&&(!cl||Ko&&8<Ko&&11>=Ko),Uf=" ",Wf=!1;function qf(e,r){switch(e){case"keyup":return e0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function n0(e,r){switch(e){case"compositionend":return Hf(r);case"keypress":return r.which!==32?null:(Wf=!0,Uf);case"textInput":return e=r.data,e===Uf&&Wf?null:e;default:return null}}function r0(e,r){if(Br)return e==="compositionend"||!cl&&qf(e,r)?(e=zf(),sa=ol=Yn=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return $f&&r.locale!=="ko"?null:r.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!o0[e.type]:r==="textarea"}function Kf(e,r,i,l){Tn(l),r=ma(r,"onChange"),0<r.length&&(i=new il("onChange","change",null,i,l),e.push({event:i,listeners:r}))}var Go=null,Xo=null;function i0(e){dd(e,0)}function fa(e){var r=Hr(e);if(Ct(r))return e}function a0(e,r){if(e==="change")return r}var Gf=!1;if(d){var fl;if(d){var dl="oninput"in document;if(!dl){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),dl=typeof Xf.oninput=="function"}fl=dl}else fl=!1;Gf=fl&&(!document.documentMode||9<document.documentMode)}function Qf(){Go&&(Go.detachEvent("onpropertychange",Zf),Xo=Go=null)}function Zf(e){if(e.propertyName==="value"&&fa(Xo)){var r=[];Kf(r,Xo,e,$e(e)),vf(i0,r)}}function s0(e,r,i){e==="focusin"?(Qf(),Go=r,Xo=i,Go.attachEvent("onpropertychange",Zf)):e==="focusout"&&Qf()}function l0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fa(Xo)}function u0(e,r){if(e==="click")return fa(r)}function c0(e,r){if(e==="input"||e==="change")return fa(r)}function f0(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Jt=typeof Object.is=="function"?Object.is:f0;function Qo(e,r){if(Jt(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var i=Object.keys(e),l=Object.keys(r);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var f=i[l];if(!h.call(r,f)||!Jt(e[f],r[f]))return!1}return!0}function Jf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,r){var i=Jf(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=r&&l>=r)return{node:i,offset:r-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Jf(i)}}function td(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?td(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function nd(){for(var e=window,r=ct();r instanceof e.HTMLIFrameElement;){try{var i=typeof r.contentWindow.location.href=="string"}catch{i=!1}if(i)e=r.contentWindow;else break;r=ct(e.document)}return r}function hl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function d0(e){var r=nd(),i=e.focusedElem,l=e.selectionRange;if(r!==i&&i&&i.ownerDocument&&td(i.ownerDocument.documentElement,i)){if(l!==null&&hl(i)){if(r=l.start,e=l.end,e===void 0&&(e=r),"selectionStart"in i)i.selectionStart=r,i.selectionEnd=Math.min(e,i.value.length);else if(e=(r=i.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var f=i.textContent.length,p=Math.min(l.start,f);l=l.end===void 0?p:Math.min(l.end,f),!e.extend&&p>l&&(f=l,l=p,p=f),f=ed(i,p);var y=ed(i,l);f&&y&&(e.rangeCount!==1||e.anchorNode!==f.node||e.anchorOffset!==f.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),e.removeAllRanges(),p>l?(e.addRange(r),e.extend(y.node,y.offset)):(r.setEnd(y.node,y.offset),e.addRange(r)))}}for(r=[],e=i;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<r.length;i++)e=r[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var h0=d&&"documentMode"in document&&11>=document.documentMode,$r=null,pl=null,Zo=null,ml=!1;function rd(e,r,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ml||$r==null||$r!==ct(l)||(l=$r,"selectionStart"in l&&hl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Zo&&Qo(Zo,l)||(Zo=l,l=ma(pl,"onSelect"),0<l.length&&(r=new il("onSelect","select",null,r,i),e.push({event:r,listeners:l}),r.target=$r)))}function da(e,r){var i={};return i[e.toLowerCase()]=r.toLowerCase(),i["Webkit"+e]="webkit"+r,i["Moz"+e]="moz"+r,i}var Ur={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},gl={},od={};d&&(od=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function ha(e){if(gl[e])return gl[e];if(!Ur[e])return e;var r=Ur[e],i;for(i in r)if(r.hasOwnProperty(i)&&i in od)return gl[e]=r[i];return e}var id=ha("animationend"),ad=ha("animationiteration"),sd=ha("animationstart"),ld=ha("transitionend"),ud=new Map,cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,r){ud.set(e,r),u(r,[e])}for(var yl=0;yl<cd.length;yl++){var vl=cd[yl],p0=vl.toLowerCase(),m0=vl[0].toUpperCase()+vl.slice(1);Kn(p0,"on"+m0)}Kn(id,"onAnimationEnd"),Kn(ad,"onAnimationIteration"),Kn(sd,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(ld,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function fd(e,r,i){var l=e.type||"unknown-event";e.currentTarget=i,pv(l,r,void 0,e),e.currentTarget=null}function dd(e,r){r=(r&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],f=l.event;l=l.listeners;e:{var p=void 0;if(r)for(var y=l.length-1;0<=y;y--){var P=l[y],T=P.instance,z=P.currentTarget;if(P=P.listener,T!==p&&f.isPropagationStopped())break e;fd(f,P,z),p=T}else for(y=0;y<l.length;y++){if(P=l[y],T=P.instance,z=P.currentTarget,P=P.listener,T!==p&&f.isPropagationStopped())break e;fd(f,P,z),p=T}}}if(Qi)throw e=Gs,Qi=!1,Gs=null,e}function qe(e,r){var i=r[Ol];i===void 0&&(i=r[Ol]=new Set);var l=e+"__bubble";i.has(l)||(hd(r,e,2,!1),i.add(l))}function bl(e,r,i){var l=0;r&&(l|=4),hd(i,e,l,r)}var pa="_reactListening"+Math.random().toString(36).slice(2);function ei(e){if(!e[pa]){e[pa]=!0,a.forEach(function(i){i!=="selectionchange"&&(g0.has(i)||bl(i,!1,e),bl(i,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[pa]||(r[pa]=!0,bl("selectionchange",!1,r))}}function hd(e,r,i,l){switch(Nf(r)){case 1:var f=Dv;break;case 4:f=_v;break;default:f=nl}i=f.bind(null,r,i,e),f=void 0,!Ks||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(r,i,{capture:!0,passive:f}):e.addEventListener(r,i,!0):f!==void 0?e.addEventListener(r,i,{passive:f}):e.addEventListener(r,i,!1)}function wl(e,r,i,l,f){var p=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var P=l.stateNode.containerInfo;if(P===f||P.nodeType===8&&P.parentNode===f)break;if(y===4)for(y=l.return;y!==null;){var T=y.tag;if((T===3||T===4)&&(T=y.stateNode.containerInfo,T===f||T.nodeType===8&&T.parentNode===f))return;y=y.return}for(;P!==null;){if(y=yr(P),y===null)return;if(T=y.tag,T===5||T===6){l=p=y;continue e}P=P.parentNode}}l=l.return}vf(function(){var z=p,G=$e(i),Z=[];e:{var K=ud.get(e);if(K!==void 0){var se=il,fe=e;switch(e){case"keypress":if(la(i)===0)break e;case"keydown":case"keyup":se=Hv;break;case"focusin":fe="focus",se=ll;break;case"focusout":fe="blur",se=ll;break;case"beforeblur":case"afterblur":se=ll;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=Gv;break;case id:case ad:case sd:se=zv;break;case ld:se=Qv;break;case"scroll":se=Av;break;case"wheel":se=Jv;break;case"copy":case"cut":case"paste":se=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Bf}var he=(r&4)!==0,st=!he&&e==="scroll",D=he?K!==null?K+"Capture":null:K;he=[];for(var C=z,A;C!==null;){A=C;var re=A.stateNode;if(A.tag===5&&re!==null&&(A=re,D!==null&&(re=No(C,D),re!=null&&he.push(ti(C,re,A)))),st)break;C=C.return}0<he.length&&(K=new se(K,fe,null,i,G),Z.push({event:K,listeners:he}))}}if((r&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",K&&i!==Be&&(fe=i.relatedTarget||i.fromElement)&&(yr(fe)||fe[On]))break e;if((se||K)&&(K=G.window===G?G:(K=G.ownerDocument)?K.defaultView||K.parentWindow:window,se?(fe=i.relatedTarget||i.toElement,se=z,fe=fe?yr(fe):null,fe!==null&&(st=gr(fe),fe!==st||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(se=null,fe=z),se!==fe)){if(he=Vf,re="onMouseLeave",D="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(he=Bf,re="onPointerLeave",D="onPointerEnter",C="pointer"),st=se==null?K:Hr(se),A=fe==null?K:Hr(fe),K=new he(re,C+"leave",se,i,G),K.target=st,K.relatedTarget=A,re=null,yr(G)===z&&(he=new he(D,C+"enter",fe,i,G),he.target=A,he.relatedTarget=st,re=he),st=re,se&&fe)t:{for(he=se,D=fe,C=0,A=he;A;A=Wr(A))C++;for(A=0,re=D;re;re=Wr(re))A++;for(;0<C-A;)he=Wr(he),C--;for(;0<A-C;)D=Wr(D),A--;for(;C--;){if(he===D||D!==null&&he===D.alternate)break t;he=Wr(he),D=Wr(D)}he=null}else he=null;se!==null&&pd(Z,K,se,he,!1),fe!==null&&st!==null&&pd(Z,st,fe,he,!0)}}e:{if(K=z?Hr(z):window,se=K.nodeName&&K.nodeName.toLowerCase(),se==="select"||se==="input"&&K.type==="file")var pe=a0;else if(Yf(K))if(Gf)pe=c0;else{pe=l0;var ge=s0}else(se=K.nodeName)&&se.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(pe=u0);if(pe&&(pe=pe(e,z))){Kf(Z,pe,i,G);break e}ge&&ge(e,K,z),e==="focusout"&&(ge=K._wrapperState)&&ge.controlled&&K.type==="number"&&Lo(K,"number",K.value)}switch(ge=z?Hr(z):window,e){case"focusin":(Yf(ge)||ge.contentEditable==="true")&&($r=ge,pl=z,Zo=null);break;case"focusout":Zo=pl=$r=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,rd(Z,i,G);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":rd(Z,i,G)}var ye;if(cl)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Br?qf(e,i)&&(xe="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(xe="onCompositionStart");xe&&($f&&i.locale!=="ko"&&(Br||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Br&&(ye=zf()):(Yn=G,ol="value"in Yn?Yn.value:Yn.textContent,Br=!0)),ge=ma(z,xe),0<ge.length&&(xe=new Ff(xe,e,null,i,G),Z.push({event:xe,listeners:ge}),ye?xe.data=ye:(ye=Hf(i),ye!==null&&(xe.data=ye)))),(ye=t0?n0(e,i):r0(e,i))&&(z=ma(z,"onBeforeInput"),0<z.length&&(G=new Ff("onBeforeInput","beforeinput",null,i,G),Z.push({event:G,listeners:z}),G.data=ye))}dd(Z,r)})}function ti(e,r,i){return{instance:e,listener:r,currentTarget:i}}function ma(e,r){for(var i=r+"Capture",l=[];e!==null;){var f=e,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=No(e,i),p!=null&&l.unshift(ti(e,p,f)),p=No(e,r),p!=null&&l.push(ti(e,p,f))),e=e.return}return l}function Wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pd(e,r,i,l,f){for(var p=r._reactName,y=[];i!==null&&i!==l;){var P=i,T=P.alternate,z=P.stateNode;if(T!==null&&T===l)break;P.tag===5&&z!==null&&(P=z,f?(T=No(i,p),T!=null&&y.unshift(ti(i,T,P))):f||(T=No(i,p),T!=null&&y.push(ti(i,T,P)))),i=i.return}y.length!==0&&e.push({event:r,listeners:y})}var y0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function md(e){return(typeof e=="string"?e:""+e).replace(y0,`
`).replace(v0,"")}function ga(e,r,i){if(r=md(r),md(e)!==r&&i)throw Error(o(425))}function ya(){}var xl=null,kl=null;function Pl(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,gd=typeof Promise=="function"?Promise:void 0,w0=typeof queueMicrotask=="function"?queueMicrotask:typeof gd<"u"?function(e){return gd.resolve(null).then(e).catch(x0)}:Sl;function x0(e){setTimeout(function(){throw e})}function Tl(e,r){var i=r,l=0;do{var f=i.nextSibling;if(e.removeChild(i),f&&f.nodeType===8)if(i=f.data,i==="/$"){if(l===0){e.removeChild(f),qo(r);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=f}while(i);qo(r)}function Gn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function yd(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(r===0)return e;r--}else i==="/$"&&r++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),pn="__reactFiber$"+qr,ni="__reactProps$"+qr,On="__reactContainer$"+qr,Ol="__reactEvents$"+qr,k0="__reactListeners$"+qr,P0="__reactHandles$"+qr;function yr(e){var r=e[pn];if(r)return r;for(var i=e.parentNode;i;){if(r=i[On]||i[pn]){if(i=r.alternate,r.child!==null||i!==null&&i.child!==null)for(e=yd(e);e!==null;){if(i=e[pn])return i;e=yd(e)}return r}e=i,i=e.parentNode}return null}function ri(e){return e=e[pn]||e[On],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function va(e){return e[ni]||null}var Cl=[],Yr=-1;function Xn(e){return{current:e}}function He(e){0>Yr||(e.current=Cl[Yr],Cl[Yr]=null,Yr--)}function We(e,r){Yr++,Cl[Yr]=e.current,e.current=r}var Qn={},xt=Xn(Qn),Dt=Xn(!1),vr=Qn;function Kr(e,r){var i=e.type.contextTypes;if(!i)return Qn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in i)f[p]=r[p];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=f),f}function _t(e){return e=e.childContextTypes,e!=null}function ba(){He(Dt),He(xt)}function vd(e,r,i){if(xt.current!==Qn)throw Error(o(168));We(xt,r),We(Dt,i)}function bd(e,r,i){var l=e.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var f in l)if(!(f in r))throw Error(o(108,_e(e)||"Unknown",f));return W({},i,l)}function wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,vr=xt.current,We(xt,e),We(Dt,Dt.current),!0}function wd(e,r,i){var l=e.stateNode;if(!l)throw Error(o(169));i?(e=bd(e,r,vr),l.__reactInternalMemoizedMergedChildContext=e,He(Dt),He(xt),We(xt,e)):He(Dt),We(Dt,i)}var Cn=null,xa=!1,El=!1;function xd(e){Cn===null?Cn=[e]:Cn.push(e)}function S0(e){xa=!0,xd(e)}function Zn(){if(!El&&Cn!==null){El=!0;var e=0,r=Ie;try{var i=Cn;for(Ie=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Cn=null,xa=!1}catch(f){throw Cn!==null&&(Cn=Cn.slice(e+1)),Pf(Xs,Zn),f}finally{Ie=r,El=!1}}return null}var Gr=[],Xr=0,ka=null,Pa=0,Ut=[],Wt=0,br=null,En=1,Mn="";function wr(e,r){Gr[Xr++]=Pa,Gr[Xr++]=ka,ka=e,Pa=r}function kd(e,r,i){Ut[Wt++]=En,Ut[Wt++]=Mn,Ut[Wt++]=br,br=e;var l=En;e=Mn;var f=32-Zt(l)-1;l&=~(1<<f),i+=1;var p=32-Zt(r)+f;if(30<p){var y=f-f%5;p=(l&(1<<y)-1).toString(32),l>>=y,f-=y,En=1<<32-Zt(r)+f|i<<f|l,Mn=p+e}else En=1<<p|i<<f|l,Mn=e}function Ml(e){e.return!==null&&(wr(e,1),kd(e,1,0))}function Dl(e){for(;e===ka;)ka=Gr[--Xr],Gr[Xr]=null,Pa=Gr[--Xr],Gr[Xr]=null;for(;e===br;)br=Ut[--Wt],Ut[Wt]=null,Mn=Ut[--Wt],Ut[Wt]=null,En=Ut[--Wt],Ut[Wt]=null}var zt=null,It=null,Ge=!1,en=null;function Pd(e,r){var i=Kt(5,null,null,0);i.elementType="DELETED",i.stateNode=r,i.return=e,r=e.deletions,r===null?(e.deletions=[i],e.flags|=16):r.push(i)}function Sd(e,r){switch(e.tag){case 5:var i=e.type;return r=r.nodeType!==1||i.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,zt=e,It=Gn(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,zt=e,It=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(i=br!==null?{id:En,overflow:Mn}:null,e.memoizedState={dehydrated:r,treeContext:i,retryLane:1073741824},i=Kt(18,null,null,0),i.stateNode=r,i.return=e,e.child=i,zt=e,It=null,!0):!1;default:return!1}}function _l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Al(e){if(Ge){var r=It;if(r){var i=r;if(!Sd(e,r)){if(_l(e))throw Error(o(418));r=Gn(i.nextSibling);var l=zt;r&&Sd(e,r)?Pd(l,i):(e.flags=e.flags&-4097|2,Ge=!1,zt=e)}}else{if(_l(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ge=!1,zt=e}}}function Td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function Sa(e){if(e!==zt)return!1;if(!Ge)return Td(e),Ge=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Pl(e.type,e.memoizedProps)),r&&(r=It)){if(_l(e))throw Od(),Error(o(418));for(;r;)Pd(e,r),r=Gn(r.nextSibling)}if(Td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(r===0){It=Gn(e.nextSibling);break e}r--}else i!=="$"&&i!=="$!"&&i!=="$?"||r++}e=e.nextSibling}It=null}}else It=zt?Gn(e.stateNode.nextSibling):null;return!0}function Od(){for(var e=It;e;)e=Gn(e.nextSibling)}function Qr(){It=zt=null,Ge=!1}function Rl(e){en===null?en=[e]:en.push(e)}var T0=te.ReactCurrentBatchConfig;function oi(e,r,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var l=i.stateNode}if(!l)throw Error(o(147,e));var f=l,p=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(y){var P=f.refs;y===null?delete P[p]:P[p]=y},r._stringRef=p,r)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function Ta(e,r){throw e=Object.prototype.toString.call(r),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Cd(e){var r=e._init;return r(e._payload)}function Ed(e){function r(D,C){if(e){var A=D.deletions;A===null?(D.deletions=[C],D.flags|=16):A.push(C)}}function i(D,C){if(!e)return null;for(;C!==null;)r(D,C),C=C.sibling;return null}function l(D,C){for(D=new Map;C!==null;)C.key!==null?D.set(C.key,C):D.set(C.index,C),C=C.sibling;return D}function f(D,C){return D=ar(D,C),D.index=0,D.sibling=null,D}function p(D,C,A){return D.index=A,e?(A=D.alternate,A!==null?(A=A.index,A<C?(D.flags|=2,C):A):(D.flags|=2,C)):(D.flags|=1048576,C)}function y(D){return e&&D.alternate===null&&(D.flags|=2),D}function P(D,C,A,re){return C===null||C.tag!==6?(C=Pu(A,D.mode,re),C.return=D,C):(C=f(C,A),C.return=D,C)}function T(D,C,A,re){var pe=A.type;return pe===ie?G(D,C,A.props.children,re,A.key):C!==null&&(C.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===V&&Cd(pe)===C.type)?(re=f(C,A.props),re.ref=oi(D,C,A),re.return=D,re):(re=Ga(A.type,A.key,A.props,null,D.mode,re),re.ref=oi(D,C,A),re.return=D,re)}function z(D,C,A,re){return C===null||C.tag!==4||C.stateNode.containerInfo!==A.containerInfo||C.stateNode.implementation!==A.implementation?(C=Su(A,D.mode,re),C.return=D,C):(C=f(C,A.children||[]),C.return=D,C)}function G(D,C,A,re,pe){return C===null||C.tag!==7?(C=Er(A,D.mode,re,pe),C.return=D,C):(C=f(C,A),C.return=D,C)}function Z(D,C,A){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Pu(""+C,D.mode,A),C.return=D,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case B:return A=Ga(C.type,C.key,C.props,null,D.mode,A),A.ref=oi(D,null,C),A.return=D,A;case ne:return C=Su(C,D.mode,A),C.return=D,C;case V:var re=C._init;return Z(D,re(C._payload),A)}if(Bn(C)||q(C))return C=Er(C,D.mode,A,null),C.return=D,C;Ta(D,C)}return null}function K(D,C,A,re){var pe=C!==null?C.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return pe!==null?null:P(D,C,""+A,re);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case B:return A.key===pe?T(D,C,A,re):null;case ne:return A.key===pe?z(D,C,A,re):null;case V:return pe=A._init,K(D,C,pe(A._payload),re)}if(Bn(A)||q(A))return pe!==null?null:G(D,C,A,re,null);Ta(D,A)}return null}function se(D,C,A,re,pe){if(typeof re=="string"&&re!==""||typeof re=="number")return D=D.get(A)||null,P(C,D,""+re,pe);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case B:return D=D.get(re.key===null?A:re.key)||null,T(C,D,re,pe);case ne:return D=D.get(re.key===null?A:re.key)||null,z(C,D,re,pe);case V:var ge=re._init;return se(D,C,A,ge(re._payload),pe)}if(Bn(re)||q(re))return D=D.get(A)||null,G(C,D,re,pe,null);Ta(C,re)}return null}function fe(D,C,A,re){for(var pe=null,ge=null,ye=C,xe=C=0,yt=null;ye!==null&&xe<A.length;xe++){ye.index>xe?(yt=ye,ye=null):yt=ye.sibling;var je=K(D,ye,A[xe],re);if(je===null){ye===null&&(ye=yt);break}e&&ye&&je.alternate===null&&r(D,ye),C=p(je,C,xe),ge===null?pe=je:ge.sibling=je,ge=je,ye=yt}if(xe===A.length)return i(D,ye),Ge&&wr(D,xe),pe;if(ye===null){for(;xe<A.length;xe++)ye=Z(D,A[xe],re),ye!==null&&(C=p(ye,C,xe),ge===null?pe=ye:ge.sibling=ye,ge=ye);return Ge&&wr(D,xe),pe}for(ye=l(D,ye);xe<A.length;xe++)yt=se(ye,D,xe,A[xe],re),yt!==null&&(e&&yt.alternate!==null&&ye.delete(yt.key===null?xe:yt.key),C=p(yt,C,xe),ge===null?pe=yt:ge.sibling=yt,ge=yt);return e&&ye.forEach(function(sr){return r(D,sr)}),Ge&&wr(D,xe),pe}function he(D,C,A,re){var pe=q(A);if(typeof pe!="function")throw Error(o(150));if(A=pe.call(A),A==null)throw Error(o(151));for(var ge=pe=null,ye=C,xe=C=0,yt=null,je=A.next();ye!==null&&!je.done;xe++,je=A.next()){ye.index>xe?(yt=ye,ye=null):yt=ye.sibling;var sr=K(D,ye,je.value,re);if(sr===null){ye===null&&(ye=yt);break}e&&ye&&sr.alternate===null&&r(D,ye),C=p(sr,C,xe),ge===null?pe=sr:ge.sibling=sr,ge=sr,ye=yt}if(je.done)return i(D,ye),Ge&&wr(D,xe),pe;if(ye===null){for(;!je.done;xe++,je=A.next())je=Z(D,je.value,re),je!==null&&(C=p(je,C,xe),ge===null?pe=je:ge.sibling=je,ge=je);return Ge&&wr(D,xe),pe}for(ye=l(D,ye);!je.done;xe++,je=A.next())je=se(ye,D,xe,je.value,re),je!==null&&(e&&je.alternate!==null&&ye.delete(je.key===null?xe:je.key),C=p(je,C,xe),ge===null?pe=je:ge.sibling=je,ge=je);return e&&ye.forEach(function(o1){return r(D,o1)}),Ge&&wr(D,xe),pe}function st(D,C,A,re){if(typeof A=="object"&&A!==null&&A.type===ie&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case B:e:{for(var pe=A.key,ge=C;ge!==null;){if(ge.key===pe){if(pe=A.type,pe===ie){if(ge.tag===7){i(D,ge.sibling),C=f(ge,A.props.children),C.return=D,D=C;break e}}else if(ge.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===V&&Cd(pe)===ge.type){i(D,ge.sibling),C=f(ge,A.props),C.ref=oi(D,ge,A),C.return=D,D=C;break e}i(D,ge);break}else r(D,ge);ge=ge.sibling}A.type===ie?(C=Er(A.props.children,D.mode,re,A.key),C.return=D,D=C):(re=Ga(A.type,A.key,A.props,null,D.mode,re),re.ref=oi(D,C,A),re.return=D,D=re)}return y(D);case ne:e:{for(ge=A.key;C!==null;){if(C.key===ge)if(C.tag===4&&C.stateNode.containerInfo===A.containerInfo&&C.stateNode.implementation===A.implementation){i(D,C.sibling),C=f(C,A.children||[]),C.return=D,D=C;break e}else{i(D,C);break}else r(D,C);C=C.sibling}C=Su(A,D.mode,re),C.return=D,D=C}return y(D);case V:return ge=A._init,st(D,C,ge(A._payload),re)}if(Bn(A))return fe(D,C,A,re);if(q(A))return he(D,C,A,re);Ta(D,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,C!==null&&C.tag===6?(i(D,C.sibling),C=f(C,A),C.return=D,D=C):(i(D,C),C=Pu(A,D.mode,re),C.return=D,D=C),y(D)):i(D,C)}return st}var Zr=Ed(!0),Md=Ed(!1),Oa=Xn(null),Ca=null,Jr=null,Ll=null;function jl(){Ll=Jr=Ca=null}function Nl(e){var r=Oa.current;He(Oa),e._currentValue=r}function zl(e,r,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),e===i)break;e=e.return}}function eo(e,r){Ca=e,Ll=Jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(At=!0),e.firstContext=null)}function qt(e){var r=e._currentValue;if(Ll!==e)if(e={context:e,memoizedValue:r,next:null},Jr===null){if(Ca===null)throw Error(o(308));Jr=e,Ca.dependencies={lanes:0,firstContext:e}}else Jr=Jr.next=e;return r}var xr=null;function Il(e){xr===null?xr=[e]:xr.push(e)}function Dd(e,r,i,l){var f=r.interleaved;return f===null?(i.next=i,Il(r)):(i.next=f.next,f.next=i),r.interleaved=i,Dn(e,l)}function Dn(e,r){e.lanes|=r;var i=e.alternate;for(i!==null&&(i.lanes|=r),i=e,e=e.return;e!==null;)e.childLanes|=r,i=e.alternate,i!==null&&(i.childLanes|=r),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Jn=!1;function Vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _d(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _n(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function er(e,r,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Re&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,Dn(e,i)}return f=l.interleaved,f===null?(r.next=r,Il(l)):(r.next=f.next,f.next=r),l.interleaved=r,Dn(e,i)}function Ea(e,r,i){if(r=r.updateQueue,r!==null&&(r=r.shared,(i&4194240)!==0)){var l=r.lanes;l&=e.pendingLanes,i|=l,r.lanes=i,Js(e,i)}}function Ad(e,r){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var f=null,p=null;if(i=i.firstBaseUpdate,i!==null){do{var y={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};p===null?f=p=y:p=p.next=y,i=i.next}while(i!==null);p===null?f=p=r:p=p.next=r}else f=p=r;i={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=r:e.next=r,i.lastBaseUpdate=r}function Ma(e,r,i,l){var f=e.updateQueue;Jn=!1;var p=f.firstBaseUpdate,y=f.lastBaseUpdate,P=f.shared.pending;if(P!==null){f.shared.pending=null;var T=P,z=T.next;T.next=null,y===null?p=z:y.next=z,y=T;var G=e.alternate;G!==null&&(G=G.updateQueue,P=G.lastBaseUpdate,P!==y&&(P===null?G.firstBaseUpdate=z:P.next=z,G.lastBaseUpdate=T))}if(p!==null){var Z=f.baseState;y=0,G=z=T=null,P=p;do{var K=P.lane,se=P.eventTime;if((l&K)===K){G!==null&&(G=G.next={eventTime:se,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var fe=e,he=P;switch(K=r,se=i,he.tag){case 1:if(fe=he.payload,typeof fe=="function"){Z=fe.call(se,Z,K);break e}Z=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=he.payload,K=typeof fe=="function"?fe.call(se,Z,K):fe,K==null)break e;Z=W({},Z,K);break e;case 2:Jn=!0}}P.callback!==null&&P.lane!==0&&(e.flags|=64,K=f.effects,K===null?f.effects=[P]:K.push(P))}else se={eventTime:se,lane:K,tag:P.tag,payload:P.payload,callback:P.callback,next:null},G===null?(z=G=se,T=Z):G=G.next=se,y|=K;if(P=P.next,P===null){if(P=f.shared.pending,P===null)break;K=P,P=K.next,K.next=null,f.lastBaseUpdate=K,f.shared.pending=null}}while(!0);if(G===null&&(T=Z),f.baseState=T,f.firstBaseUpdate=z,f.lastBaseUpdate=G,r=f.shared.interleaved,r!==null){f=r;do y|=f.lane,f=f.next;while(f!==r)}else p===null&&(f.shared.lanes=0);Sr|=y,e.lanes=y,e.memoizedState=Z}}function Rd(e,r,i){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var l=e[r],f=l.callback;if(f!==null){if(l.callback=null,l=i,typeof f!="function")throw Error(o(191,f));f.call(l)}}}var ii={},mn=Xn(ii),ai=Xn(ii),si=Xn(ii);function kr(e){if(e===ii)throw Error(o(174));return e}function Fl(e,r){switch(We(si,r),We(ai,e),We(mn,ii),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:J(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=J(r,e)}He(mn),We(mn,r)}function to(){He(mn),He(ai),He(si)}function Ld(e){kr(si.current);var r=kr(mn.current),i=J(r,e.type);r!==i&&(We(ai,e),We(mn,i))}function Bl(e){ai.current===e&&(He(mn),He(ai))}var Qe=Xn(0);function Da(e){for(var r=e;r!==null;){if(r.tag===13){var i=r.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var $l=[];function Ul(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var _a=te.ReactCurrentDispatcher,Wl=te.ReactCurrentBatchConfig,Pr=0,Ze=null,dt=null,mt=null,Aa=!1,li=!1,ui=0,O0=0;function kt(){throw Error(o(321))}function ql(e,r){if(r===null)return!1;for(var i=0;i<r.length&&i<e.length;i++)if(!Jt(e[i],r[i]))return!1;return!0}function Hl(e,r,i,l,f,p){if(Pr=p,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,_a.current=e===null||e.memoizedState===null?D0:_0,e=i(l,f),li){p=0;do{if(li=!1,ui=0,25<=p)throw Error(o(301));p+=1,mt=dt=null,r.updateQueue=null,_a.current=A0,e=i(l,f)}while(li)}if(_a.current=ja,r=dt!==null&&dt.next!==null,Pr=0,mt=dt=Ze=null,Aa=!1,r)throw Error(o(300));return e}function Yl(){var e=ui!==0;return ui=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Ze.memoizedState=mt=e:mt=mt.next=e,mt}function Ht(){if(dt===null){var e=Ze.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var r=mt===null?Ze.memoizedState:mt.next;if(r!==null)mt=r,dt=e;else{if(e===null)throw Error(o(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},mt===null?Ze.memoizedState=mt=e:mt=mt.next=e}return mt}function ci(e,r){return typeof r=="function"?r(e):r}function Kl(e){var r=Ht(),i=r.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var l=dt,f=l.baseQueue,p=i.pending;if(p!==null){if(f!==null){var y=f.next;f.next=p.next,p.next=y}l.baseQueue=f=p,i.pending=null}if(f!==null){p=f.next,l=l.baseState;var P=y=null,T=null,z=p;do{var G=z.lane;if((Pr&G)===G)T!==null&&(T=T.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),l=z.hasEagerState?z.eagerState:e(l,z.action);else{var Z={lane:G,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};T===null?(P=T=Z,y=l):T=T.next=Z,Ze.lanes|=G,Sr|=G}z=z.next}while(z!==null&&z!==p);T===null?y=l:T.next=P,Jt(l,r.memoizedState)||(At=!0),r.memoizedState=l,r.baseState=y,r.baseQueue=T,i.lastRenderedState=l}if(e=i.interleaved,e!==null){f=e;do p=f.lane,Ze.lanes|=p,Sr|=p,f=f.next;while(f!==e)}else f===null&&(i.lanes=0);return[r.memoizedState,i.dispatch]}function Gl(e){var r=Ht(),i=r.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var l=i.dispatch,f=i.pending,p=r.memoizedState;if(f!==null){i.pending=null;var y=f=f.next;do p=e(p,y.action),y=y.next;while(y!==f);Jt(p,r.memoizedState)||(At=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),i.lastRenderedState=p}return[p,l]}function jd(){}function Nd(e,r){var i=Ze,l=Ht(),f=r(),p=!Jt(l.memoizedState,f);if(p&&(l.memoizedState=f,At=!0),l=l.queue,Xl(Vd.bind(null,i,l,e),[e]),l.getSnapshot!==r||p||mt!==null&&mt.memoizedState.tag&1){if(i.flags|=2048,fi(9,Id.bind(null,i,l,f,r),void 0,null),gt===null)throw Error(o(349));(Pr&30)!==0||zd(i,r,f)}return f}function zd(e,r,i){e.flags|=16384,e={getSnapshot:r,value:i},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[e]):(i=r.stores,i===null?r.stores=[e]:i.push(e))}function Id(e,r,i,l){r.value=i,r.getSnapshot=l,Fd(r)&&Bd(e)}function Vd(e,r,i){return i(function(){Fd(r)&&Bd(e)})}function Fd(e){var r=e.getSnapshot;e=e.value;try{var i=r();return!Jt(e,i)}catch{return!0}}function Bd(e){var r=Dn(e,1);r!==null&&on(r,e,1,-1)}function $d(e){var r=gn();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},r.queue=e,e=e.dispatch=M0.bind(null,Ze,e),[r.memoizedState,e]}function fi(e,r,i,l){return e={tag:e,create:r,destroy:i,deps:l,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=e.next=e):(i=r.lastEffect,i===null?r.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,r.lastEffect=e)),e}function Ud(){return Ht().memoizedState}function Ra(e,r,i,l){var f=gn();Ze.flags|=e,f.memoizedState=fi(1|r,i,void 0,l===void 0?null:l)}function La(e,r,i,l){var f=Ht();l=l===void 0?null:l;var p=void 0;if(dt!==null){var y=dt.memoizedState;if(p=y.destroy,l!==null&&ql(l,y.deps)){f.memoizedState=fi(r,i,p,l);return}}Ze.flags|=e,f.memoizedState=fi(1|r,i,p,l)}function Wd(e,r){return Ra(8390656,8,e,r)}function Xl(e,r){return La(2048,8,e,r)}function qd(e,r){return La(4,2,e,r)}function Hd(e,r){return La(4,4,e,r)}function Yd(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Kd(e,r,i){return i=i!=null?i.concat([e]):null,La(4,4,Yd.bind(null,r,e),i)}function Ql(){}function Gd(e,r){var i=Ht();r=r===void 0?null:r;var l=i.memoizedState;return l!==null&&r!==null&&ql(r,l[1])?l[0]:(i.memoizedState=[e,r],e)}function Xd(e,r){var i=Ht();r=r===void 0?null:r;var l=i.memoizedState;return l!==null&&r!==null&&ql(r,l[1])?l[0]:(e=e(),i.memoizedState=[e,r],e)}function Qd(e,r,i){return(Pr&21)===0?(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=i):(Jt(i,r)||(i=Cf(),Ze.lanes|=i,Sr|=i,e.baseState=!0),r)}function C0(e,r){var i=Ie;Ie=i!==0&&4>i?i:4,e(!0);var l=Wl.transition;Wl.transition={};try{e(!1),r()}finally{Ie=i,Wl.transition=l}}function Zd(){return Ht().memoizedState}function E0(e,r,i){var l=or(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Jd(e))eh(r,i);else if(i=Dd(e,r,i,l),i!==null){var f=Mt();on(i,e,l,f),th(i,r,l)}}function M0(e,r,i){var l=or(e),f={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Jd(e))eh(r,f);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var y=r.lastRenderedState,P=p(y,i);if(f.hasEagerState=!0,f.eagerState=P,Jt(P,y)){var T=r.interleaved;T===null?(f.next=f,Il(r)):(f.next=T.next,T.next=f),r.interleaved=f;return}}catch{}finally{}i=Dd(e,r,f,l),i!==null&&(f=Mt(),on(i,e,l,f),th(i,r,l))}}function Jd(e){var r=e.alternate;return e===Ze||r!==null&&r===Ze}function eh(e,r){li=Aa=!0;var i=e.pending;i===null?r.next=r:(r.next=i.next,i.next=r),e.pending=r}function th(e,r,i){if((i&4194240)!==0){var l=r.lanes;l&=e.pendingLanes,i|=l,r.lanes=i,Js(e,i)}}var ja={readContext:qt,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},D0={readContext:qt,useCallback:function(e,r){return gn().memoizedState=[e,r===void 0?null:r],e},useContext:qt,useEffect:Wd,useImperativeHandle:function(e,r,i){return i=i!=null?i.concat([e]):null,Ra(4194308,4,Yd.bind(null,r,e),i)},useLayoutEffect:function(e,r){return Ra(4194308,4,e,r)},useInsertionEffect:function(e,r){return Ra(4,2,e,r)},useMemo:function(e,r){var i=gn();return r=r===void 0?null:r,e=e(),i.memoizedState=[e,r],e},useReducer:function(e,r,i){var l=gn();return r=i!==void 0?i(r):r,l.memoizedState=l.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=E0.bind(null,Ze,e),[l.memoizedState,e]},useRef:function(e){var r=gn();return e={current:e},r.memoizedState=e},useState:$d,useDebugValue:Ql,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=$d(!1),r=e[0];return e=C0.bind(null,e[1]),gn().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,i){var l=Ze,f=gn();if(Ge){if(i===void 0)throw Error(o(407));i=i()}else{if(i=r(),gt===null)throw Error(o(349));(Pr&30)!==0||zd(l,r,i)}f.memoizedState=i;var p={value:i,getSnapshot:r};return f.queue=p,Wd(Vd.bind(null,l,p,e),[e]),l.flags|=2048,fi(9,Id.bind(null,l,p,i,r),void 0,null),i},useId:function(){var e=gn(),r=gt.identifierPrefix;if(Ge){var i=Mn,l=En;i=(l&~(1<<32-Zt(l)-1)).toString(32)+i,r=":"+r+"R"+i,i=ui++,0<i&&(r+="H"+i.toString(32)),r+=":"}else i=O0++,r=":"+r+"r"+i.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},_0={readContext:qt,useCallback:Gd,useContext:qt,useEffect:Xl,useImperativeHandle:Kd,useInsertionEffect:qd,useLayoutEffect:Hd,useMemo:Xd,useReducer:Kl,useRef:Ud,useState:function(){return Kl(ci)},useDebugValue:Ql,useDeferredValue:function(e){var r=Ht();return Qd(r,dt.memoizedState,e)},useTransition:function(){var e=Kl(ci)[0],r=Ht().memoizedState;return[e,r]},useMutableSource:jd,useSyncExternalStore:Nd,useId:Zd,unstable_isNewReconciler:!1},A0={readContext:qt,useCallback:Gd,useContext:qt,useEffect:Xl,useImperativeHandle:Kd,useInsertionEffect:qd,useLayoutEffect:Hd,useMemo:Xd,useReducer:Gl,useRef:Ud,useState:function(){return Gl(ci)},useDebugValue:Ql,useDeferredValue:function(e){var r=Ht();return dt===null?r.memoizedState=e:Qd(r,dt.memoizedState,e)},useTransition:function(){var e=Gl(ci)[0],r=Ht().memoizedState;return[e,r]},useMutableSource:jd,useSyncExternalStore:Nd,useId:Zd,unstable_isNewReconciler:!1};function tn(e,r){if(e&&e.defaultProps){r=W({},r),e=e.defaultProps;for(var i in e)r[i]===void 0&&(r[i]=e[i]);return r}return r}function Zl(e,r,i,l){r=e.memoizedState,i=i(l,r),i=i==null?r:W({},r,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Na={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,r,i){e=e._reactInternals;var l=Mt(),f=or(e),p=_n(l,f);p.payload=r,i!=null&&(p.callback=i),r=er(e,p,f),r!==null&&(on(r,e,f,l),Ea(r,e,f))},enqueueReplaceState:function(e,r,i){e=e._reactInternals;var l=Mt(),f=or(e),p=_n(l,f);p.tag=1,p.payload=r,i!=null&&(p.callback=i),r=er(e,p,f),r!==null&&(on(r,e,f,l),Ea(r,e,f))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var i=Mt(),l=or(e),f=_n(i,l);f.tag=2,r!=null&&(f.callback=r),r=er(e,f,l),r!==null&&(on(r,e,l,i),Ea(r,e,l))}};function nh(e,r,i,l,f,p,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,y):r.prototype&&r.prototype.isPureReactComponent?!Qo(i,l)||!Qo(f,p):!0}function rh(e,r,i){var l=!1,f=Qn,p=r.contextType;return typeof p=="object"&&p!==null?p=qt(p):(f=_t(r)?vr:xt.current,l=r.contextTypes,p=(l=l!=null)?Kr(e,f):Qn),r=new r(i,p),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Na,e.stateNode=r,r._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=f,e.__reactInternalMemoizedMaskedChildContext=p),r}function oh(e,r,i,l){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(i,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(i,l),r.state!==e&&Na.enqueueReplaceState(r,r.state,null)}function Jl(e,r,i,l){var f=e.stateNode;f.props=i,f.state=e.memoizedState,f.refs={},Vl(e);var p=r.contextType;typeof p=="object"&&p!==null?f.context=qt(p):(p=_t(r)?vr:xt.current,f.context=Kr(e,p)),f.state=e.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Zl(e,r,p,i),f.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Na.enqueueReplaceState(f,f.state,null),Ma(e,i,f,l),f.state=e.memoizedState),typeof f.componentDidMount=="function"&&(e.flags|=4194308)}function no(e,r){try{var i="",l=r;do i+=we(l),l=l.return;while(l);var f=i}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:r,stack:f,digest:null}}function eu(e,r,i){return{value:e,source:null,stack:i??null,digest:r??null}}function v2(e,r){}var R0=typeof WeakMap=="function"?WeakMap:Map;function ih(e,r,i){i=_n(-1,i),i.tag=3,i.payload={element:null};var l=r.value;return i.callback=function(){Ua||(Ua=!0,mu=l)},i}function ah(e,r,i){i=_n(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var f=r.value;i.payload=function(){return l(f)},i.callback=function(){}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(i.callback=function(){typeof l!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})}),i}function sh(e,r,i){var l=e.pingCache;if(l===null){l=e.pingCache=new R0;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(i)||(f.add(i),e=Y0.bind(null,e,r,i),r.then(e,e))}function lh(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function uh(e,r,i,l,f){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(r=_n(-1,1),r.tag=2,er(i,r,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=f,e)}var L0=te.ReactCurrentOwner,At=!1;function Et(e,r,i,l){r.child=e===null?Md(r,null,i,l):Zr(r,e.child,i,l)}function ch(e,r,i,l,f){i=i.render;var p=r.ref;return eo(r,f),l=Hl(e,r,i,l,p,f),i=Yl(),e!==null&&!At?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~f,An(e,r,f)):(Ge&&i&&Ml(r),r.flags|=1,Et(e,r,l,f),r.child)}function fh(e,r,i,l,f){if(e===null){var p=i.type;return typeof p=="function"&&!ku(p)&&p.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(r.tag=15,r.type=p,dh(e,r,p,l,f)):(e=Ga(i.type,null,l,r,r.mode,f),e.ref=r.ref,e.return=r,r.child=e)}if(p=e.child,(e.lanes&f)===0){var y=p.memoizedProps;if(i=i.compare,i=i!==null?i:Qo,i(y,l)&&e.ref===r.ref)return An(e,r,f)}return r.flags|=1,e=ar(p,l),e.ref=r.ref,e.return=r,r.child=e}function dh(e,r,i,l,f){if(e!==null){var p=e.memoizedProps;if(Qo(p,l)&&e.ref===r.ref)if(At=!1,r.pendingProps=l=p,(e.lanes&f)!==0)(e.flags&131072)!==0&&(At=!0);else return r.lanes=e.lanes,An(e,r,f)}return tu(e,r,i,l,f)}function hh(e,r,i){var l=r.pendingProps,f=l.children,p=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(oo,Vt),Vt|=i;else{if((i&1073741824)===0)return e=p!==null?p.baseLanes|i:i,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,We(oo,Vt),Vt|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:i,We(oo,Vt),Vt|=l}else p!==null?(l=p.baseLanes|i,r.memoizedState=null):l=i,We(oo,Vt),Vt|=l;return Et(e,r,f,i),r.child}function ph(e,r){var i=r.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(r.flags|=512,r.flags|=2097152)}function tu(e,r,i,l,f){var p=_t(i)?vr:xt.current;return p=Kr(r,p),eo(r,f),i=Hl(e,r,i,l,p,f),l=Yl(),e!==null&&!At?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~f,An(e,r,f)):(Ge&&l&&Ml(r),r.flags|=1,Et(e,r,i,f),r.child)}function mh(e,r,i,l,f){if(_t(i)){var p=!0;wa(r)}else p=!1;if(eo(r,f),r.stateNode===null)Ia(e,r),rh(r,i,l),Jl(r,i,l,f),l=!0;else if(e===null){var y=r.stateNode,P=r.memoizedProps;y.props=P;var T=y.context,z=i.contextType;typeof z=="object"&&z!==null?z=qt(z):(z=_t(i)?vr:xt.current,z=Kr(r,z));var G=i.getDerivedStateFromProps,Z=typeof G=="function"||typeof y.getSnapshotBeforeUpdate=="function";Z||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(P!==l||T!==z)&&oh(r,y,l,z),Jn=!1;var K=r.memoizedState;y.state=K,Ma(r,l,y,f),T=r.memoizedState,P!==l||K!==T||Dt.current||Jn?(typeof G=="function"&&(Zl(r,i,G,l),T=r.memoizedState),(P=Jn||nh(r,i,P,l,K,T,z))?(Z||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(r.flags|=4194308)):(typeof y.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=T),y.props=l,y.state=T,y.context=z,l=P):(typeof y.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{y=r.stateNode,_d(e,r),P=r.memoizedProps,z=r.type===r.elementType?P:tn(r.type,P),y.props=z,Z=r.pendingProps,K=y.context,T=i.contextType,typeof T=="object"&&T!==null?T=qt(T):(T=_t(i)?vr:xt.current,T=Kr(r,T));var se=i.getDerivedStateFromProps;(G=typeof se=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(P!==Z||K!==T)&&oh(r,y,l,T),Jn=!1,K=r.memoizedState,y.state=K,Ma(r,l,y,f);var fe=r.memoizedState;P!==Z||K!==fe||Dt.current||Jn?(typeof se=="function"&&(Zl(r,i,se,l),fe=r.memoizedState),(z=Jn||nh(r,i,z,l,K,fe,T)||!1)?(G||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(l,fe,T),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(l,fe,T)),typeof y.componentDidUpdate=="function"&&(r.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof y.componentDidUpdate!="function"||P===e.memoizedProps&&K===e.memoizedState||(r.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&K===e.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=fe),y.props=l,y.state=fe,y.context=T,l=z):(typeof y.componentDidUpdate!="function"||P===e.memoizedProps&&K===e.memoizedState||(r.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&K===e.memoizedState||(r.flags|=1024),l=!1)}return nu(e,r,i,l,p,f)}function nu(e,r,i,l,f,p){ph(e,r);var y=(r.flags&128)!==0;if(!l&&!y)return f&&wd(r,i,!1),An(e,r,p);l=r.stateNode,L0.current=r;var P=y&&typeof i.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,e!==null&&y?(r.child=Zr(r,e.child,null,p),r.child=Zr(r,null,P,p)):Et(e,r,P,p),r.memoizedState=l.state,f&&wd(r,i,!0),r.child}function gh(e){var r=e.stateNode;r.pendingContext?vd(e,r.pendingContext,r.pendingContext!==r.context):r.context&&vd(e,r.context,!1),Fl(e,r.containerInfo)}function yh(e,r,i,l,f){return Qr(),Rl(f),r.flags|=256,Et(e,r,i,l),r.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function ou(e){return{baseLanes:e,cachePool:null,transitions:null}}function vh(e,r,i){var l=r.pendingProps,f=Qe.current,p=!1,y=(r.flags&128)!==0,P;if((P=y)||(P=e!==null&&e.memoizedState===null?!1:(f&2)!==0),P?(p=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(f|=1),We(Qe,f&1),e===null)return Al(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(y=l.children,e=l.fallback,p?(l=r.mode,p=r.child,y={mode:"hidden",children:y},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=y):p=Xa(y,l,0,null),e=Er(e,l,i,null),p.return=r,e.return=r,p.sibling=e,r.child=p,r.child.memoizedState=ou(i),r.memoizedState=ru,e):iu(r,y));if(f=e.memoizedState,f!==null&&(P=f.dehydrated,P!==null))return j0(e,r,y,l,P,f,i);if(p){p=l.fallback,y=r.mode,f=e.child,P=f.sibling;var T={mode:"hidden",children:l.children};return(y&1)===0&&r.child!==f?(l=r.child,l.childLanes=0,l.pendingProps=T,r.deletions=null):(l=ar(f,T),l.subtreeFlags=f.subtreeFlags&14680064),P!==null?p=ar(P,p):(p=Er(p,y,i,null),p.flags|=2),p.return=r,l.return=r,l.sibling=p,r.child=l,l=p,p=r.child,y=e.child.memoizedState,y=y===null?ou(i):{baseLanes:y.baseLanes|i,cachePool:null,transitions:y.transitions},p.memoizedState=y,p.childLanes=e.childLanes&~i,r.memoizedState=ru,l}return p=e.child,e=p.sibling,l=ar(p,{mode:"visible",children:l.children}),(r.mode&1)===0&&(l.lanes=i),l.return=r,l.sibling=null,e!==null&&(i=r.deletions,i===null?(r.deletions=[e],r.flags|=16):i.push(e)),r.child=l,r.memoizedState=null,l}function iu(e,r){return r=Xa({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function za(e,r,i,l){return l!==null&&Rl(l),Zr(r,e.child,null,i),e=iu(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function j0(e,r,i,l,f,p,y){if(i)return r.flags&256?(r.flags&=-257,l=eu(Error(o(422))),za(e,r,y,l)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(p=l.fallback,f=r.mode,l=Xa({mode:"visible",children:l.children},f,0,null),p=Er(p,f,y,null),p.flags|=2,l.return=r,p.return=r,l.sibling=p,r.child=l,(r.mode&1)!==0&&Zr(r,e.child,null,y),r.child.memoizedState=ou(y),r.memoizedState=ru,p);if((r.mode&1)===0)return za(e,r,y,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var P=l.dgst;return l=P,p=Error(o(419)),l=eu(p,l,void 0),za(e,r,y,l)}if(P=(y&e.childLanes)!==0,At||P){if(l=gt,l!==null){switch(y&-y){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|y))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Dn(e,f),on(l,e,f,-1))}return xu(),l=eu(Error(o(421))),za(e,r,y,l)}return f.data==="$?"?(r.flags|=128,r.child=e.child,r=K0.bind(null,e),f._reactRetry=r,null):(e=p.treeContext,It=Gn(f.nextSibling),zt=r,Ge=!0,en=null,e!==null&&(Ut[Wt++]=En,Ut[Wt++]=Mn,Ut[Wt++]=br,En=e.id,Mn=e.overflow,br=r),r=iu(r,l.children),r.flags|=4096,r)}function bh(e,r,i){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r),zl(e.return,r,i)}function au(e,r,i,l,f){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:f}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=i,p.tailMode=f)}function wh(e,r,i){var l=r.pendingProps,f=l.revealOrder,p=l.tail;if(Et(e,r,l.children,i),l=Qe.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bh(e,i,r);else if(e.tag===19)bh(e,i,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(We(Qe,l),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(i=r.child,f=null;i!==null;)e=i.alternate,e!==null&&Da(e)===null&&(f=i),i=i.sibling;i=f,i===null?(f=r.child,r.child=null):(f=i.sibling,i.sibling=null),au(r,!1,f,i,p);break;case"backwards":for(i=null,f=r.child,r.child=null;f!==null;){if(e=f.alternate,e!==null&&Da(e)===null){r.child=f;break}e=f.sibling,f.sibling=i,i=f,f=e}au(r,!0,i,null,p);break;case"together":au(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ia(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function An(e,r,i){if(e!==null&&(r.dependencies=e.dependencies),Sr|=r.lanes,(i&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(o(153));if(r.child!==null){for(e=r.child,i=ar(e,e.pendingProps),r.child=i,i.return=r;e.sibling!==null;)e=e.sibling,i=i.sibling=ar(e,e.pendingProps),i.return=r;i.sibling=null}return r.child}function N0(e,r,i){switch(r.tag){case 3:gh(r),Qr();break;case 5:Ld(r);break;case 1:_t(r.type)&&wa(r);break;case 4:Fl(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,f=r.memoizedProps.value;We(Oa,l._currentValue),l._currentValue=f;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(We(Qe,Qe.current&1),r.flags|=128,null):(i&r.child.childLanes)!==0?vh(e,r,i):(We(Qe,Qe.current&1),e=An(e,r,i),e!==null?e.sibling:null);We(Qe,Qe.current&1);break;case 19:if(l=(i&r.childLanes)!==0,(e.flags&128)!==0){if(l)return wh(e,r,i);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),We(Qe,Qe.current),l)break;return null;case 22:case 23:return r.lanes=0,hh(e,r,i)}return An(e,r,i)}var xh,su,kh,Ph;xh=function(e,r){for(var i=r.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},su=function(){},kh=function(e,r,i,l){var f=e.memoizedProps;if(f!==l){e=r.stateNode,kr(mn.current);var p=null;switch(i){case"input":f=Do(e,f),l=Do(e,l),p=[];break;case"select":f=W({},f,{value:void 0}),l=W({},l,{value:void 0}),p=[];break;case"textarea":f=$n(e,f),l=$n(e,l),p=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=ya)}le(i,l);var y;i=null;for(z in f)if(!l.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var P=f[z];for(y in P)P.hasOwnProperty(y)&&(i||(i={}),i[y]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(s.hasOwnProperty(z)?p||(p=[]):(p=p||[]).push(z,null));for(z in l){var T=l[z];if(P=f?.[z],l.hasOwnProperty(z)&&T!==P&&(T!=null||P!=null))if(z==="style")if(P){for(y in P)!P.hasOwnProperty(y)||T&&T.hasOwnProperty(y)||(i||(i={}),i[y]="");for(y in T)T.hasOwnProperty(y)&&P[y]!==T[y]&&(i||(i={}),i[y]=T[y])}else i||(p||(p=[]),p.push(z,i)),i=T;else z==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,P=P?P.__html:void 0,T!=null&&P!==T&&(p=p||[]).push(z,T)):z==="children"?typeof T!="string"&&typeof T!="number"||(p=p||[]).push(z,""+T):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(s.hasOwnProperty(z)?(T!=null&&z==="onScroll"&&qe("scroll",e),p||P===T||(p=[])):(p=p||[]).push(z,T))}i&&(p=p||[]).push("style",i);var z=p;(r.updateQueue=z)&&(r.flags|=4)}},Ph=function(e,r,i,l){i!==l&&(r.flags|=4)};function di(e,r){if(!Ge)switch(e.tailMode){case"hidden":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Pt(e){var r=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(r)for(var f=e.child;f!==null;)i|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)i|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=i,r}function z0(e,r,i){var l=r.pendingProps;switch(Dl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(r),null;case 1:return _t(r.type)&&ba(),Pt(r),null;case 3:return l=r.stateNode,to(),He(Dt),He(xt),Ul(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Sa(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,en!==null&&(vu(en),en=null))),su(e,r),Pt(r),null;case 5:Bl(r);var f=kr(si.current);if(i=r.type,e!==null&&r.stateNode!=null)kh(e,r,i,l,f),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(o(166));return Pt(r),null}if(e=kr(mn.current),Sa(r)){l=r.stateNode,i=r.type;var p=r.memoizedProps;switch(l[pn]=r,l[ni]=p,e=(r.mode&1)!==0,i){case"dialog":qe("cancel",l),qe("close",l);break;case"iframe":case"object":case"embed":qe("load",l);break;case"video":case"audio":for(f=0;f<Jo.length;f++)qe(Jo[f],l);break;case"source":qe("error",l);break;case"img":case"image":case"link":qe("error",l),qe("load",l);break;case"details":qe("toggle",l);break;case"input":_o(l,p),qe("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},qe("invalid",l);break;case"textarea":zr(l,p),qe("invalid",l)}le(i,p),f=null;for(var y in p)if(p.hasOwnProperty(y)){var P=p[y];y==="children"?typeof P=="string"?l.textContent!==P&&(p.suppressHydrationWarning!==!0&&ga(l.textContent,P,e),f=["children",P]):typeof P=="number"&&l.textContent!==""+P&&(p.suppressHydrationWarning!==!0&&ga(l.textContent,P,e),f=["children",""+P]):s.hasOwnProperty(y)&&P!=null&&y==="onScroll"&&qe("scroll",l)}switch(i){case"input":rt(l),pr(l,p,!0);break;case"textarea":rt(l),X(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=ya)}l=f,r.updateQueue=l,l!==null&&(r.flags|=4)}else{y=f.nodeType===9?f:f.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=L(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=y.createElement(i,{is:l.is}):(e=y.createElement(i),i==="select"&&(y=e,l.multiple?y.multiple=!0:l.size&&(y.size=l.size))):e=y.createElementNS(e,i),e[pn]=r,e[ni]=l,xh(e,r,!1,!1),r.stateNode=e;e:{switch(y=Oe(i,l),i){case"dialog":qe("cancel",e),qe("close",e),f=l;break;case"iframe":case"object":case"embed":qe("load",e),f=l;break;case"video":case"audio":for(f=0;f<Jo.length;f++)qe(Jo[f],e);f=l;break;case"source":qe("error",e),f=l;break;case"img":case"image":case"link":qe("error",e),qe("load",e),f=l;break;case"details":qe("toggle",e),f=l;break;case"input":_o(e,l),f=Do(e,l),qe("invalid",e);break;case"option":f=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},f=W({},l,{value:void 0}),qe("invalid",e);break;case"textarea":zr(e,l),f=$n(e,l),qe("invalid",e);break;default:f=l}le(i,f),P=f;for(p in P)if(P.hasOwnProperty(p)){var T=P[p];p==="style"?de(e,T):p==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&Se(e,T)):p==="children"?typeof T=="string"?(i!=="textarea"||T!=="")&&Pe(e,T):typeof T=="number"&&Pe(e,""+T):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(s.hasOwnProperty(p)?T!=null&&p==="onScroll"&&qe("scroll",e):T!=null&&$(e,p,T,y))}switch(i){case"input":rt(e),pr(e,l,!1);break;case"textarea":rt(e),X(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Te(l.value));break;case"select":e.multiple=!!l.multiple,p=l.value,p!=null?fn(e,!!l.multiple,p,!1):l.defaultValue!=null&&fn(e,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(e.onclick=ya)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Pt(r),null;case 6:if(e&&r.stateNode!=null)Ph(e,r,e.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(o(166));if(i=kr(si.current),kr(mn.current),Sa(r)){if(l=r.stateNode,i=r.memoizedProps,l[pn]=r,(p=l.nodeValue!==i)&&(e=zt,e!==null))switch(e.tag){case 3:ga(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ga(l.nodeValue,i,(e.mode&1)!==0)}p&&(r.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[pn]=r,r.stateNode=l}return Pt(r),null;case 13:if(He(Qe),l=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ge&&It!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Od(),Qr(),r.flags|=98560,p=!1;else if(p=Sa(r),l!==null&&l.dehydrated!==null){if(e===null){if(!p)throw Error(o(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(o(317));p[pn]=r}else Qr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Pt(r),p=!1}else en!==null&&(vu(en),en=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=i,r):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Qe.current&1)!==0?ht===0&&(ht=3):xu())),r.updateQueue!==null&&(r.flags|=4),Pt(r),null);case 4:return to(),su(e,r),e===null&&ei(r.stateNode.containerInfo),Pt(r),null;case 10:return Nl(r.type._context),Pt(r),null;case 17:return _t(r.type)&&ba(),Pt(r),null;case 19:if(He(Qe),p=r.memoizedState,p===null)return Pt(r),null;if(l=(r.flags&128)!==0,y=p.rendering,y===null)if(l)di(p,!1);else{if(ht!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(y=Da(e),y!==null){for(r.flags|=128,di(p,!1),l=y.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=i,i=r.child;i!==null;)p=i,e=l,p.flags&=14680066,y=p.alternate,y===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=y.childLanes,p.lanes=y.lanes,p.child=y.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=y.memoizedProps,p.memoizedState=y.memoizedState,p.updateQueue=y.updateQueue,p.type=y.type,e=y.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return We(Qe,Qe.current&1|2),r.child}e=e.sibling}p.tail!==null&&at()>io&&(r.flags|=128,l=!0,di(p,!1),r.lanes=4194304)}else{if(!l)if(e=Da(y),e!==null){if(r.flags|=128,l=!0,i=e.updateQueue,i!==null&&(r.updateQueue=i,r.flags|=4),di(p,!0),p.tail===null&&p.tailMode==="hidden"&&!y.alternate&&!Ge)return Pt(r),null}else 2*at()-p.renderingStartTime>io&&i!==1073741824&&(r.flags|=128,l=!0,di(p,!1),r.lanes=4194304);p.isBackwards?(y.sibling=r.child,r.child=y):(i=p.last,i!==null?i.sibling=y:r.child=y,p.last=y)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=at(),r.sibling=null,i=Qe.current,We(Qe,l?i&1|2:i&1),r):(Pt(r),null);case 22:case 23:return wu(),l=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(r.flags|=8192),l&&(r.mode&1)!==0?(Vt&1073741824)!==0&&(Pt(r),r.subtreeFlags&6&&(r.flags|=8192)):Pt(r),null;case 24:return null;case 25:return null}throw Error(o(156,r.tag))}function I0(e,r){switch(Dl(r),r.tag){case 1:return _t(r.type)&&ba(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return to(),He(Dt),He(xt),Ul(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Bl(r),null;case 13:if(He(Qe),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(o(340));Qr()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return He(Qe),null;case 4:return to(),null;case 10:return Nl(r.type._context),null;case 22:case 23:return wu(),null;case 24:return null;default:return null}}var Va=!1,St=!1,V0=typeof WeakSet=="function"?WeakSet:Set,ue=null;function ro(e,r){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){ot(e,r,l)}else i.current=null}function lu(e,r,i){try{i()}catch(l){ot(e,r,l)}}var Sh=!1;function F0(e,r){if(xl=ia,e=nd(),hl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break e}var y=0,P=-1,T=-1,z=0,G=0,Z=e,K=null;t:for(;;){for(var se;Z!==i||f!==0&&Z.nodeType!==3||(P=y+f),Z!==p||l!==0&&Z.nodeType!==3||(T=y+l),Z.nodeType===3&&(y+=Z.nodeValue.length),(se=Z.firstChild)!==null;)K=Z,Z=se;for(;;){if(Z===e)break t;if(K===i&&++z===f&&(P=y),K===p&&++G===l&&(T=y),(se=Z.nextSibling)!==null)break;Z=K,K=Z.parentNode}Z=se}i=P===-1||T===-1?null:{start:P,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(kl={focusedElem:e,selectionRange:i},ia=!1,ue=r;ue!==null;)if(r=ue,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,ue=e;else for(;ue!==null;){r=ue;try{var fe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var he=fe.memoizedProps,st=fe.memoizedState,D=r.stateNode,C=D.getSnapshotBeforeUpdate(r.elementType===r.type?he:tn(r.type,he),st);D.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var A=r.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(re){ot(r,r.return,re)}if(e=r.sibling,e!==null){e.return=r.return,ue=e;break}ue=r.return}return fe=Sh,Sh=!1,fe}function hi(e,r,i){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&e)===e){var p=f.destroy;f.destroy=void 0,p!==void 0&&lu(r,i,p)}f=f.next}while(f!==l)}}function Fa(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==r)}}function uu(e){var r=e.ref;if(r!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof r=="function"?r(e):r.current=e}}function Th(e){var r=e.alternate;r!==null&&(e.alternate=null,Th(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[pn],delete r[ni],delete r[Ol],delete r[k0],delete r[P0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oh(e){return e.tag===5||e.tag===3||e.tag===4}function Ch(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cu(e,r,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?i.nodeType===8?i.parentNode.insertBefore(e,r):i.insertBefore(e,r):(i.nodeType===8?(r=i.parentNode,r.insertBefore(e,i)):(r=i,r.appendChild(e)),i=i._reactRootContainer,i!=null||r.onclick!==null||(r.onclick=ya));else if(l!==4&&(e=e.child,e!==null))for(cu(e,r,i),e=e.sibling;e!==null;)cu(e,r,i),e=e.sibling}function fu(e,r,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?i.insertBefore(e,r):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(fu(e,r,i),e=e.sibling;e!==null;)fu(e,r,i),e=e.sibling}var vt=null,nn=!1;function tr(e,r,i){for(i=i.child;i!==null;)Eh(e,r,i),i=i.sibling}function Eh(e,r,i){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Ji,i)}catch{}switch(i.tag){case 5:St||ro(i,r);case 6:var l=vt,f=nn;vt=null,tr(e,r,i),vt=l,nn=f,vt!==null&&(nn?(e=vt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):vt.removeChild(i.stateNode));break;case 18:vt!==null&&(nn?(e=vt,i=i.stateNode,e.nodeType===8?Tl(e.parentNode,i):e.nodeType===1&&Tl(e,i),qo(e)):Tl(vt,i.stateNode));break;case 4:l=vt,f=nn,vt=i.stateNode.containerInfo,nn=!0,tr(e,r,i),vt=l,nn=f;break;case 0:case 11:case 14:case 15:if(!St&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var p=f,y=p.destroy;p=p.tag,y!==void 0&&((p&2)!==0||(p&4)!==0)&&lu(i,r,y),f=f.next}while(f!==l)}tr(e,r,i);break;case 1:if(!St&&(ro(i,r),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(P){ot(i,r,P)}tr(e,r,i);break;case 21:tr(e,r,i);break;case 22:i.mode&1?(St=(l=St)||i.memoizedState!==null,tr(e,r,i),St=l):tr(e,r,i);break;default:tr(e,r,i)}}function Mh(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new V0),r.forEach(function(l){var f=G0.bind(null,e,l);i.has(l)||(i.add(l),l.then(f,f))})}}function rn(e,r){var i=r.deletions;if(i!==null)for(var l=0;l<i.length;l++){var f=i[l];try{var p=e,y=r,P=y;e:for(;P!==null;){switch(P.tag){case 5:vt=P.stateNode,nn=!1;break e;case 3:vt=P.stateNode.containerInfo,nn=!0;break e;case 4:vt=P.stateNode.containerInfo,nn=!0;break e}P=P.return}if(vt===null)throw Error(o(160));Eh(p,y,f),vt=null,nn=!1;var T=f.alternate;T!==null&&(T.return=null),f.return=null}catch(z){ot(f,r,z)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Dh(r,e),r=r.sibling}function Dh(e,r){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rn(r,e),yn(e),l&4){try{hi(3,e,e.return),Fa(3,e)}catch(he){ot(e,e.return,he)}try{hi(5,e,e.return)}catch(he){ot(e,e.return,he)}}break;case 1:rn(r,e),yn(e),l&512&&i!==null&&ro(i,i.return);break;case 5:if(rn(r,e),yn(e),l&512&&i!==null&&ro(i,i.return),e.flags&32){var f=e.stateNode;try{Pe(f,"")}catch(he){ot(e,e.return,he)}}if(l&4&&(f=e.stateNode,f!=null)){var p=e.memoizedProps,y=i!==null?i.memoizedProps:p,P=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{P==="input"&&p.type==="radio"&&p.name!=null&&Ao(f,p),Oe(P,y);var z=Oe(P,p);for(y=0;y<T.length;y+=2){var G=T[y],Z=T[y+1];G==="style"?de(f,Z):G==="dangerouslySetInnerHTML"?Se(f,Z):G==="children"?Pe(f,Z):$(f,G,Z,z)}switch(P){case"input":Ro(f,p);break;case"textarea":Gi(f,p);break;case"select":var K=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var se=p.value;se!=null?fn(f,!!p.multiple,se,!1):K!==!!p.multiple&&(p.defaultValue!=null?fn(f,!!p.multiple,p.defaultValue,!0):fn(f,!!p.multiple,p.multiple?[]:"",!1))}f[ni]=p}catch(he){ot(e,e.return,he)}}break;case 6:if(rn(r,e),yn(e),l&4){if(e.stateNode===null)throw Error(o(162));f=e.stateNode,p=e.memoizedProps;try{f.nodeValue=p}catch(he){ot(e,e.return,he)}}break;case 3:if(rn(r,e),yn(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{qo(r.containerInfo)}catch(he){ot(e,e.return,he)}break;case 4:rn(r,e),yn(e);break;case 13:rn(r,e),yn(e),f=e.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(pu=at())),l&4&&Mh(e);break;case 22:if(G=i!==null&&i.memoizedState!==null,e.mode&1?(St=(z=St)||G,rn(r,e),St=z):rn(r,e),yn(e),l&8192){if(z=e.memoizedState!==null,(e.stateNode.isHidden=z)&&!G&&(e.mode&1)!==0)for(ue=e,G=e.child;G!==null;){for(Z=ue=G;ue!==null;){switch(K=ue,se=K.child,K.tag){case 0:case 11:case 14:case 15:hi(4,K,K.return);break;case 1:ro(K,K.return);var fe=K.stateNode;if(typeof fe.componentWillUnmount=="function"){l=K,i=K.return;try{r=l,fe.props=r.memoizedProps,fe.state=r.memoizedState,fe.componentWillUnmount()}catch(he){ot(l,i,he)}}break;case 5:ro(K,K.return);break;case 22:if(K.memoizedState!==null){Rh(Z);continue}}se!==null?(se.return=K,ue=se):Rh(Z)}G=G.sibling}e:for(G=null,Z=e;;){if(Z.tag===5){if(G===null){G=Z;try{f=Z.stateNode,z?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(P=Z.stateNode,T=Z.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null,P.style.display=H("display",y))}catch(he){ot(e,e.return,he)}}}else if(Z.tag===6){if(G===null)try{Z.stateNode.nodeValue=z?"":Z.memoizedProps}catch(he){ot(e,e.return,he)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===e)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===e)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===e)break e;G===Z&&(G=null),Z=Z.return}G===Z&&(G=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:rn(r,e),yn(e),l&4&&Mh(e);break;case 21:break;default:rn(r,e),yn(e)}}function yn(e){var r=e.flags;if(r&2){try{e:{for(var i=e.return;i!==null;){if(Oh(i)){var l=i;break e}i=i.return}throw Error(o(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Pe(f,""),l.flags&=-33);var p=Ch(e);fu(e,p,f);break;case 3:case 4:var y=l.stateNode.containerInfo,P=Ch(e);cu(e,P,y);break;default:throw Error(o(161))}}catch(T){ot(e,e.return,T)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function B0(e,r,i){ue=e,_h(e)}function _h(e,r,i){for(var l=(e.mode&1)!==0;ue!==null;){var f=ue,p=f.child;if(f.tag===22&&l){var y=f.memoizedState!==null||Va;if(!y){var P=f.alternate,T=P!==null&&P.memoizedState!==null||St;P=Va;var z=St;if(Va=y,(St=T)&&!z)for(ue=f;ue!==null;)y=ue,T=y.child,y.tag===22&&y.memoizedState!==null?Lh(f):T!==null?(T.return=y,ue=T):Lh(f);for(;p!==null;)ue=p,_h(p),p=p.sibling;ue=f,Va=P,St=z}Ah(e)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,ue=p):Ah(e)}}function Ah(e){for(;ue!==null;){var r=ue;if((r.flags&8772)!==0){var i=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:St||Fa(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!St)if(i===null)l.componentDidMount();else{var f=r.elementType===r.type?i.memoizedProps:tn(r.type,i.memoizedProps);l.componentDidUpdate(f,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Rd(r,p,l);break;case 3:var y=r.updateQueue;if(y!==null){if(i=null,r.child!==null)switch(r.child.tag){case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}Rd(r,y,i)}break;case 5:var P=r.stateNode;if(i===null&&r.flags&4){i=P;var T=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&i.focus();break;case"img":T.src&&(i.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var z=r.alternate;if(z!==null){var G=z.memoizedState;if(G!==null){var Z=G.dehydrated;Z!==null&&qo(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}St||r.flags&512&&uu(r)}catch(K){ot(r,r.return,K)}}if(r===e){ue=null;break}if(i=r.sibling,i!==null){i.return=r.return,ue=i;break}ue=r.return}}function Rh(e){for(;ue!==null;){var r=ue;if(r===e){ue=null;break}var i=r.sibling;if(i!==null){i.return=r.return,ue=i;break}ue=r.return}}function Lh(e){for(;ue!==null;){var r=ue;try{switch(r.tag){case 0:case 11:case 15:var i=r.return;try{Fa(4,r)}catch(T){ot(r,i,T)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var f=r.return;try{l.componentDidMount()}catch(T){ot(r,f,T)}}var p=r.return;try{uu(r)}catch(T){ot(r,p,T)}break;case 5:var y=r.return;try{uu(r)}catch(T){ot(r,y,T)}}}catch(T){ot(r,r.return,T)}if(r===e){ue=null;break}var P=r.sibling;if(P!==null){P.return=r.return,ue=P;break}ue=r.return}}var $0=Math.ceil,Ba=te.ReactCurrentDispatcher,du=te.ReactCurrentOwner,Yt=te.ReactCurrentBatchConfig,Re=0,gt=null,ut=null,bt=0,Vt=0,oo=Xn(0),ht=0,pi=null,Sr=0,$a=0,hu=0,mi=null,Rt=null,pu=0,io=1/0,Rn=null,Ua=!1,mu=null,nr=null,Wa=!1,rr=null,qa=0,gi=0,gu=null,Ha=-1,Ya=0;function Mt(){return(Re&6)!==0?at():Ha!==-1?Ha:Ha=at()}function or(e){return(e.mode&1)===0?1:(Re&2)!==0&&bt!==0?bt&-bt:T0.transition!==null?(Ya===0&&(Ya=Cf()),Ya):(e=Ie,e!==0||(e=window.event,e=e===void 0?16:Nf(e.type)),e)}function on(e,r,i,l){if(50<gi)throw gi=0,gu=null,Error(o(185));Fo(e,i,l),((Re&2)===0||e!==gt)&&(e===gt&&((Re&2)===0&&($a|=i),ht===4&&ir(e,bt)),Lt(e,l),i===1&&Re===0&&(r.mode&1)===0&&(io=at()+500,xa&&Zn()))}function Lt(e,r){var i=e.callbackNode;Tv(e,r);var l=na(e,e===gt?bt:0);if(l===0)i!==null&&Sf(i),e.callbackNode=null,e.callbackPriority=0;else if(r=l&-l,e.callbackPriority!==r){if(i!=null&&Sf(i),r===1)e.tag===0?S0(Nh.bind(null,e)):xd(Nh.bind(null,e)),w0(function(){(Re&6)===0&&Zn()}),i=null;else{switch(Ef(l)){case 1:i=Xs;break;case 4:i=Tf;break;case 16:i=Zi;break;case 536870912:i=Of;break;default:i=Zi}i=Wh(i,jh.bind(null,e))}e.callbackPriority=r,e.callbackNode=i}}function jh(e,r){if(Ha=-1,Ya=0,(Re&6)!==0)throw Error(o(327));var i=e.callbackNode;if(ao()&&e.callbackNode!==i)return null;var l=na(e,e===gt?bt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||r)r=Ka(e,l);else{r=l;var f=Re;Re|=2;var p=Ih();(gt!==e||bt!==r)&&(Rn=null,io=at()+500,Or(e,r));do try{q0();break}catch(P){zh(e,P)}while(!0);jl(),Ba.current=p,Re=f,ut!==null?r=0:(gt=null,bt=0,r=ht)}if(r!==0){if(r===2&&(f=Qs(e),f!==0&&(l=f,r=yu(e,f))),r===1)throw i=pi,Or(e,0),ir(e,l),Lt(e,at()),i;if(r===6)ir(e,l);else{if(f=e.current.alternate,(l&30)===0&&!U0(f)&&(r=Ka(e,l),r===2&&(p=Qs(e),p!==0&&(l=p,r=yu(e,p))),r===1))throw i=pi,Or(e,0),ir(e,l),Lt(e,at()),i;switch(e.finishedWork=f,e.finishedLanes=l,r){case 0:case 1:throw Error(o(345));case 2:Cr(e,Rt,Rn);break;case 3:if(ir(e,l),(l&130023424)===l&&(r=pu+500-at(),10<r)){if(na(e,0)!==0)break;if(f=e.suspendedLanes,(f&l)!==l){Mt(),e.pingedLanes|=e.suspendedLanes&f;break}e.timeoutHandle=Sl(Cr.bind(null,e,Rt,Rn),r);break}Cr(e,Rt,Rn);break;case 4:if(ir(e,l),(l&4194240)===l)break;for(r=e.eventTimes,f=-1;0<l;){var y=31-Zt(l);p=1<<y,y=r[y],y>f&&(f=y),l&=~p}if(l=f,l=at()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*$0(l/1960))-l,10<l){e.timeoutHandle=Sl(Cr.bind(null,e,Rt,Rn),l);break}Cr(e,Rt,Rn);break;case 5:Cr(e,Rt,Rn);break;default:throw Error(o(329))}}}return Lt(e,at()),e.callbackNode===i?jh.bind(null,e):null}function yu(e,r){var i=mi;return e.current.memoizedState.isDehydrated&&(Or(e,r).flags|=256),e=Ka(e,r),e!==2&&(r=Rt,Rt=i,r!==null&&vu(r)),e}function vu(e){Rt===null?Rt=e:Rt.push.apply(Rt,e)}function U0(e){for(var r=e;;){if(r.flags&16384){var i=r.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var f=i[l],p=f.getSnapshot;f=f.value;try{if(!Jt(p(),f))return!1}catch{return!1}}}if(i=r.child,r.subtreeFlags&16384&&i!==null)i.return=r,r=i;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ir(e,r){for(r&=~hu,r&=~$a,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var i=31-Zt(r),l=1<<i;e[i]=-1,r&=~l}}function Nh(e){if((Re&6)!==0)throw Error(o(327));ao();var r=na(e,0);if((r&1)===0)return Lt(e,at()),null;var i=Ka(e,r);if(e.tag!==0&&i===2){var l=Qs(e);l!==0&&(r=l,i=yu(e,l))}if(i===1)throw i=pi,Or(e,0),ir(e,r),Lt(e,at()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Cr(e,Rt,Rn),Lt(e,at()),null}function bu(e,r){var i=Re;Re|=1;try{return e(r)}finally{Re=i,Re===0&&(io=at()+500,xa&&Zn())}}function Tr(e){rr!==null&&rr.tag===0&&(Re&6)===0&&ao();var r=Re;Re|=1;var i=Yt.transition,l=Ie;try{if(Yt.transition=null,Ie=1,e)return e()}finally{Ie=l,Yt.transition=i,Re=r,(Re&6)===0&&Zn()}}function wu(){Vt=oo.current,He(oo)}function Or(e,r){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,b0(i)),ut!==null)for(i=ut.return;i!==null;){var l=i;switch(Dl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ba();break;case 3:to(),He(Dt),He(xt),Ul();break;case 5:Bl(l);break;case 4:to();break;case 13:He(Qe);break;case 19:He(Qe);break;case 10:Nl(l.type._context);break;case 22:case 23:wu()}i=i.return}if(gt=e,ut=e=ar(e.current,null),bt=Vt=r,ht=0,pi=null,hu=$a=Sr=0,Rt=mi=null,xr!==null){for(r=0;r<xr.length;r++)if(i=xr[r],l=i.interleaved,l!==null){i.interleaved=null;var f=l.next,p=i.pending;if(p!==null){var y=p.next;p.next=f,l.next=y}i.pending=l}xr=null}return e}function zh(e,r){do{var i=ut;try{if(jl(),_a.current=ja,Aa){for(var l=Ze.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Aa=!1}if(Pr=0,mt=dt=Ze=null,li=!1,ui=0,du.current=null,i===null||i.return===null){ht=1,pi=r,ut=null;break}e:{var p=e,y=i.return,P=i,T=r;if(r=bt,P.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var z=T,G=P,Z=G.tag;if((G.mode&1)===0&&(Z===0||Z===11||Z===15)){var K=G.alternate;K?(G.updateQueue=K.updateQueue,G.memoizedState=K.memoizedState,G.lanes=K.lanes):(G.updateQueue=null,G.memoizedState=null)}var se=lh(y);if(se!==null){se.flags&=-257,uh(se,y,P,p,r),se.mode&1&&sh(p,z,r),r=se,T=z;var fe=r.updateQueue;if(fe===null){var he=new Set;he.add(T),r.updateQueue=he}else fe.add(T);break e}else{if((r&1)===0){sh(p,z,r),xu();break e}T=Error(o(426))}}else if(Ge&&P.mode&1){var st=lh(y);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),uh(st,y,P,p,r),Rl(no(T,P));break e}}p=T=no(T,P),ht!==4&&(ht=2),mi===null?mi=[p]:mi.push(p),p=y;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var D=ih(p,T,r);Ad(p,D);break e;case 1:P=T;var C=p.type,A=p.stateNode;if((p.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(nr===null||!nr.has(A)))){p.flags|=65536,r&=-r,p.lanes|=r;var re=ah(p,P,r);Ad(p,re);break e}}p=p.return}while(p!==null)}Fh(i)}catch(pe){r=pe,ut===i&&i!==null&&(ut=i=i.return);continue}break}while(!0)}function Ih(){var e=Ba.current;return Ba.current=ja,e===null?ja:e}function xu(){(ht===0||ht===3||ht===2)&&(ht=4),gt===null||(Sr&268435455)===0&&($a&268435455)===0||ir(gt,bt)}function Ka(e,r){var i=Re;Re|=2;var l=Ih();(gt!==e||bt!==r)&&(Rn=null,Or(e,r));do try{W0();break}catch(f){zh(e,f)}while(!0);if(jl(),Re=i,Ba.current=l,ut!==null)throw Error(o(261));return gt=null,bt=0,ht}function W0(){for(;ut!==null;)Vh(ut)}function q0(){for(;ut!==null&&!gv();)Vh(ut)}function Vh(e){var r=Uh(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,r===null?Fh(e):ut=r,du.current=null}function Fh(e){var r=e;do{var i=r.alternate;if(e=r.return,(r.flags&32768)===0){if(i=z0(i,r,Vt),i!==null){ut=i;return}}else{if(i=I0(i,r),i!==null){i.flags&=32767,ut=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ht=6,ut=null;return}}if(r=r.sibling,r!==null){ut=r;return}ut=r=e}while(r!==null);ht===0&&(ht=5)}function Cr(e,r,i){var l=Ie,f=Yt.transition;try{Yt.transition=null,Ie=1,H0(e,r,i,l)}finally{Yt.transition=f,Ie=l}return null}function H0(e,r,i,l){do ao();while(rr!==null);if((Re&6)!==0)throw Error(o(327));i=e.finishedWork;var f=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var p=i.lanes|i.childLanes;if(Ov(e,p),e===gt&&(ut=gt=null,bt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Wa||(Wa=!0,Wh(Zi,function(){return ao(),null})),p=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||p){p=Yt.transition,Yt.transition=null;var y=Ie;Ie=1;var P=Re;Re|=4,du.current=null,F0(e,i),Dh(i,e),d0(kl),ia=!!xl,kl=xl=null,e.current=i,B0(i),yv(),Re=P,Ie=y,Yt.transition=p}else e.current=i;if(Wa&&(Wa=!1,rr=e,qa=f),p=e.pendingLanes,p===0&&(nr=null),wv(i.stateNode),Lt(e,at()),r!==null)for(l=e.onRecoverableError,i=0;i<r.length;i++)f=r[i],l(f.value,{componentStack:f.stack,digest:f.digest});if(Ua)throw Ua=!1,e=mu,mu=null,e;return(qa&1)!==0&&e.tag!==0&&ao(),p=e.pendingLanes,(p&1)!==0?e===gu?gi++:(gi=0,gu=e):gi=0,Zn(),null}function ao(){if(rr!==null){var e=Ef(qa),r=Yt.transition,i=Ie;try{if(Yt.transition=null,Ie=16>e?16:e,rr===null)var l=!1;else{if(e=rr,rr=null,qa=0,(Re&6)!==0)throw Error(o(331));var f=Re;for(Re|=4,ue=e.current;ue!==null;){var p=ue,y=p.child;if((ue.flags&16)!==0){var P=p.deletions;if(P!==null){for(var T=0;T<P.length;T++){var z=P[T];for(ue=z;ue!==null;){var G=ue;switch(G.tag){case 0:case 11:case 15:hi(8,G,p)}var Z=G.child;if(Z!==null)Z.return=G,ue=Z;else for(;ue!==null;){G=ue;var K=G.sibling,se=G.return;if(Th(G),G===z){ue=null;break}if(K!==null){K.return=se,ue=K;break}ue=se}}}var fe=p.alternate;if(fe!==null){var he=fe.child;if(he!==null){fe.child=null;do{var st=he.sibling;he.sibling=null,he=st}while(he!==null)}}ue=p}}if((p.subtreeFlags&2064)!==0&&y!==null)y.return=p,ue=y;else e:for(;ue!==null;){if(p=ue,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:hi(9,p,p.return)}var D=p.sibling;if(D!==null){D.return=p.return,ue=D;break e}ue=p.return}}var C=e.current;for(ue=C;ue!==null;){y=ue;var A=y.child;if((y.subtreeFlags&2064)!==0&&A!==null)A.return=y,ue=A;else e:for(y=C;ue!==null;){if(P=ue,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:Fa(9,P)}}catch(pe){ot(P,P.return,pe)}if(P===y){ue=null;break e}var re=P.sibling;if(re!==null){re.return=P.return,ue=re;break e}ue=P.return}}if(Re=f,Zn(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Ji,e)}catch{}l=!0}return l}finally{Ie=i,Yt.transition=r}}return!1}function Bh(e,r,i){r=no(i,r),r=ih(e,r,1),e=er(e,r,1),r=Mt(),e!==null&&(Fo(e,1,r),Lt(e,r))}function ot(e,r,i){if(e.tag===3)Bh(e,e,i);else for(;r!==null;){if(r.tag===3){Bh(r,e,i);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(nr===null||!nr.has(l))){e=no(i,e),e=ah(r,e,1),r=er(r,e,1),e=Mt(),r!==null&&(Fo(r,1,e),Lt(r,e));break}}r=r.return}}function Y0(e,r,i){var l=e.pingCache;l!==null&&l.delete(r),r=Mt(),e.pingedLanes|=e.suspendedLanes&i,gt===e&&(bt&i)===i&&(ht===4||ht===3&&(bt&130023424)===bt&&500>at()-pu?Or(e,0):hu|=i),Lt(e,r)}function $h(e,r){r===0&&((e.mode&1)===0?r=1:(r=ta,ta<<=1,(ta&130023424)===0&&(ta=4194304)));var i=Mt();e=Dn(e,r),e!==null&&(Fo(e,r,i),Lt(e,i))}function K0(e){var r=e.memoizedState,i=0;r!==null&&(i=r.retryLane),$h(e,i)}function G0(e,r){var i=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(i=f.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(o(314))}l!==null&&l.delete(r),$h(e,i)}var Uh;Uh=function(e,r,i){if(e!==null)if(e.memoizedProps!==r.pendingProps||Dt.current)At=!0;else{if((e.lanes&i)===0&&(r.flags&128)===0)return At=!1,N0(e,r,i);At=(e.flags&131072)!==0}else At=!1,Ge&&(r.flags&1048576)!==0&&kd(r,Pa,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;Ia(e,r),e=r.pendingProps;var f=Kr(r,xt.current);eo(r,i),f=Hl(null,r,l,e,f,i);var p=Yl();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,_t(l)?(p=!0,wa(r)):p=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Vl(r),f.updater=Na,r.stateNode=f,f._reactInternals=r,Jl(r,l,e,i),r=nu(null,r,l,!0,p,i)):(r.tag=0,Ge&&p&&Ml(r),Et(null,r,f,i),r=r.child),r;case 16:l=r.elementType;e:{switch(Ia(e,r),e=r.pendingProps,f=l._init,l=f(l._payload),r.type=l,f=r.tag=Q0(l),e=tn(l,e),f){case 0:r=tu(null,r,l,e,i);break e;case 1:r=mh(null,r,l,e,i);break e;case 11:r=ch(null,r,l,e,i);break e;case 14:r=fh(null,r,l,tn(l.type,e),i);break e}throw Error(o(306,l,""))}return r;case 0:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:tn(l,f),tu(e,r,l,f,i);case 1:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:tn(l,f),mh(e,r,l,f,i);case 3:e:{if(gh(r),e===null)throw Error(o(387));l=r.pendingProps,p=r.memoizedState,f=p.element,_d(e,r),Ma(r,l,null,i);var y=r.memoizedState;if(l=y.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){f=no(Error(o(423)),r),r=yh(e,r,l,i,f);break e}else if(l!==f){f=no(Error(o(424)),r),r=yh(e,r,l,i,f);break e}else for(It=Gn(r.stateNode.containerInfo.firstChild),zt=r,Ge=!0,en=null,i=Md(r,null,l,i),r.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Qr(),l===f){r=An(e,r,i);break e}Et(e,r,l,i)}r=r.child}return r;case 5:return Ld(r),e===null&&Al(r),l=r.type,f=r.pendingProps,p=e!==null?e.memoizedProps:null,y=f.children,Pl(l,f)?y=null:p!==null&&Pl(l,p)&&(r.flags|=32),ph(e,r),Et(e,r,y,i),r.child;case 6:return e===null&&Al(r),null;case 13:return vh(e,r,i);case 4:return Fl(r,r.stateNode.containerInfo),l=r.pendingProps,e===null?r.child=Zr(r,null,l,i):Et(e,r,l,i),r.child;case 11:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:tn(l,f),ch(e,r,l,f,i);case 7:return Et(e,r,r.pendingProps,i),r.child;case 8:return Et(e,r,r.pendingProps.children,i),r.child;case 12:return Et(e,r,r.pendingProps.children,i),r.child;case 10:e:{if(l=r.type._context,f=r.pendingProps,p=r.memoizedProps,y=f.value,We(Oa,l._currentValue),l._currentValue=y,p!==null)if(Jt(p.value,y)){if(p.children===f.children&&!Dt.current){r=An(e,r,i);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var P=p.dependencies;if(P!==null){y=p.child;for(var T=P.firstContext;T!==null;){if(T.context===l){if(p.tag===1){T=_n(-1,i&-i),T.tag=2;var z=p.updateQueue;if(z!==null){z=z.shared;var G=z.pending;G===null?T.next=T:(T.next=G.next,G.next=T),z.pending=T}}p.lanes|=i,T=p.alternate,T!==null&&(T.lanes|=i),zl(p.return,i,r),P.lanes|=i;break}T=T.next}}else if(p.tag===10)y=p.type===r.type?null:p.child;else if(p.tag===18){if(y=p.return,y===null)throw Error(o(341));y.lanes|=i,P=y.alternate,P!==null&&(P.lanes|=i),zl(y,i,r),y=p.sibling}else y=p.child;if(y!==null)y.return=p;else for(y=p;y!==null;){if(y===r){y=null;break}if(p=y.sibling,p!==null){p.return=y.return,y=p;break}y=y.return}p=y}Et(e,r,f.children,i),r=r.child}return r;case 9:return f=r.type,l=r.pendingProps.children,eo(r,i),f=qt(f),l=l(f),r.flags|=1,Et(e,r,l,i),r.child;case 14:return l=r.type,f=tn(l,r.pendingProps),f=tn(l.type,f),fh(e,r,l,f,i);case 15:return dh(e,r,r.type,r.pendingProps,i);case 17:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:tn(l,f),Ia(e,r),r.tag=1,_t(l)?(e=!0,wa(r)):e=!1,eo(r,i),rh(r,l,f),Jl(r,l,f,i),nu(null,r,l,!0,e,i);case 19:return wh(e,r,i);case 22:return hh(e,r,i)}throw Error(o(156,r.tag))};function Wh(e,r){return Pf(e,r)}function X0(e,r,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(e,r,i,l){return new X0(e,r,i,l)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Q0(e){if(typeof e=="function")return ku(e)?1:0;if(e!=null){if(e=e.$$typeof,e===De)return 11;if(e===j)return 14}return 2}function ar(e,r){var i=e.alternate;return i===null?(i=Kt(e.tag,r,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=r,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,r=e.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Ga(e,r,i,l,f,p){var y=2;if(l=e,typeof e=="function")ku(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case ie:return Er(i.children,f,p,r);case Y:y=8,f|=8;break;case Q:return e=Kt(12,i,r,f|2),e.elementType=Q,e.lanes=p,e;case Le:return e=Kt(13,i,r,f),e.elementType=Le,e.lanes=p,e;case U:return e=Kt(19,i,r,f),e.elementType=U,e.lanes=p,e;case N:return Xa(i,f,p,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ve:y=10;break e;case Me:y=9;break e;case De:y=11;break e;case j:y=14;break e;case V:y=16,l=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return r=Kt(y,i,r,f),r.elementType=e,r.type=l,r.lanes=p,r}function Er(e,r,i,l){return e=Kt(7,e,l,r),e.lanes=i,e}function Xa(e,r,i,l){return e=Kt(22,e,l,r),e.elementType=N,e.lanes=i,e.stateNode={isHidden:!1},e}function Pu(e,r,i){return e=Kt(6,e,null,r),e.lanes=i,e}function Su(e,r,i){return r=Kt(4,e.children!==null?e.children:[],e.key,r),r.lanes=i,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Z0(e,r,i,l,f){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Tu(e,r,i,l,f,p,y,P,T){return e=new Z0(e,r,i,P,T),r===1?(r=1,p===!0&&(r|=8)):r=0,p=Kt(3,null,null,r),e.current=p,p.stateNode=e,p.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vl(p),e}function J0(e,r,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:l==null?null:""+l,children:e,containerInfo:r,implementation:i}}function qh(e){if(!e)return Qn;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(o(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(_t(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(_t(i))return bd(e,i,r)}return r}function Hh(e,r,i,l,f,p,y,P,T){return e=Tu(i,l,!0,e,f,p,y,P,T),e.context=qh(null),i=e.current,l=Mt(),f=or(i),p=_n(l,f),p.callback=r??null,er(i,p,f),e.current.lanes=f,Fo(e,f,l),Lt(e,l),e}function Qa(e,r,i,l){var f=r.current,p=Mt(),y=or(f);return i=qh(i),r.context===null?r.context=i:r.pendingContext=i,r=_n(p,y),r.payload={element:e},l=l===void 0?null:l,l!==null&&(r.callback=l),e=er(f,r,y),e!==null&&(on(e,f,y,p),Ea(e,f,y)),y}function Za(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yh(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<r?i:r}}function Ou(e,r){Yh(e,r),(e=e.alternate)&&Yh(e,r)}function e1(){return null}var Kh=typeof reportError=="function"?reportError:function(e){};function Cu(e){this._internalRoot=e}Ja.prototype.render=Cu.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(o(409));Qa(e,r,null,null)},Ja.prototype.unmount=Cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Tr(function(){Qa(null,e,null,null)}),r[On]=null}};function Ja(e){this._internalRoot=e}Ja.prototype.unstable_scheduleHydration=function(e){if(e){var r=_f();e={blockedOn:null,target:e,priority:r};for(var i=0;i<Hn.length&&r!==0&&r<Hn[i].priority;i++);Hn.splice(i,0,e),i===0&&Lf(e)}};function Eu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gh(){}function t1(e,r,i,l,f){if(f){if(typeof l=="function"){var p=l;l=function(){var z=Za(y);p.call(z)}}var y=Hh(r,l,e,0,null,!1,!1,"",Gh);return e._reactRootContainer=y,e[On]=y.current,ei(e.nodeType===8?e.parentNode:e),Tr(),y}for(;f=e.lastChild;)e.removeChild(f);if(typeof l=="function"){var P=l;l=function(){var z=Za(T);P.call(z)}}var T=Tu(e,0,!1,null,null,!1,!1,"",Gh);return e._reactRootContainer=T,e[On]=T.current,ei(e.nodeType===8?e.parentNode:e),Tr(function(){Qa(r,T,i,l)}),T}function ts(e,r,i,l,f){var p=i._reactRootContainer;if(p){var y=p;if(typeof f=="function"){var P=f;f=function(){var T=Za(y);P.call(T)}}Qa(r,y,e,f)}else y=t1(i,r,e,f,l);return Za(y)}Mf=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var i=Vo(r.pendingLanes);i!==0&&(Js(r,i|1),Lt(r,at()),(Re&6)===0&&(io=at()+500,Zn()))}break;case 13:Tr(function(){var l=Dn(e,1);if(l!==null){var f=Mt();on(l,e,1,f)}}),Ou(e,1)}},el=function(e){if(e.tag===13){var r=Dn(e,134217728);if(r!==null){var i=Mt();on(r,e,134217728,i)}Ou(e,134217728)}},Df=function(e){if(e.tag===13){var r=or(e),i=Dn(e,r);if(i!==null){var l=Mt();on(i,e,r,l)}Ou(e,r)}},_f=function(){return Ie},Af=function(e,r){var i=Ie;try{return Ie=e,r()}finally{Ie=i}},ze=function(e,r,i){switch(r){case"input":if(Ro(e,i),r=i.name,i.type==="radio"&&r!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<i.length;r++){var l=i[r];if(l!==e&&l.form===e.form){var f=va(l);if(!f)throw Error(o(90));Ct(l),Ro(l,f)}}}break;case"textarea":Gi(e,i);break;case"select":r=i.value,r!=null&&fn(e,!!i.multiple,r,!1)}},mr=bu,jo=Tr;var n1={usingClientEntryPoint:!1,Events:[ri,Hr,va,Tn,dn,bu]},yi={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r1={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xf(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||e1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ns.isDisabled&&ns.supportsFiber)try{Ji=ns.inject(r1),hn=ns}catch{}}return jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n1,jt.createPortal=function(e,r){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eu(r))throw Error(o(200));return J0(e,r,null,i)},jt.createRoot=function(e,r){if(!Eu(e))throw Error(o(299));var i=!1,l="",f=Kh;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=Tu(e,1,!1,null,null,i,!1,l,f),e[On]=r.current,ei(e.nodeType===8?e.parentNode:e),new Cu(r)},jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=xf(r),e=e===null?null:e.stateNode,e},jt.flushSync=function(e){return Tr(e)},jt.hydrate=function(e,r,i){if(!es(r))throw Error(o(200));return ts(null,e,r,!0,i)},jt.hydrateRoot=function(e,r,i){if(!Eu(e))throw Error(o(405));var l=i!=null&&i.hydratedSources||null,f=!1,p="",y=Kh;if(i!=null&&(i.unstable_strictMode===!0&&(f=!0),i.identifierPrefix!==void 0&&(p=i.identifierPrefix),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),r=Hh(r,null,e,1,i??null,f,!1,p,y),e[On]=r.current,ei(e),l)for(e=0;e<l.length;e++)i=l[e],f=i._getVersion,f=f(i._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[i,f]:r.mutableSourceEagerHydrationData.push(i,f);return new Ja(r)},jt.render=function(e,r,i){if(!es(r))throw Error(o(200));return ts(null,e,r,!1,i)},jt.unmountComponentAtNode=function(e){if(!es(e))throw Error(o(40));return e._reactRootContainer?(Tr(function(){ts(null,null,e,!1,function(){e._reactRootContainer=null,e[On]=null})}),!0):!1},jt.unstable_batchedUpdates=bu,jt.unstable_renderSubtreeIntoContainer=function(e,r,i,l){if(!es(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return ts(e,r,i,!1,l)},jt.version="18.3.1-next-f1338f8080-20240426",jt}var rp;function f1(){if(rp)return _u.exports;rp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch{}}return t(),_u.exports=c1(),_u.exports}var op;function d1(){if(op)return rs;op=1;var t=f1();return rs.createRoot=t.createRoot,rs.hydrateRoot=t.hydrateRoot,rs}var b2=d1(),bi={},ip;function h1(){if(ip)return bi;ip=1,Object.defineProperty(bi,"__esModule",{value:!0}),bi.parse=c,bi.serialize=m;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,n=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function c(v,w){const x=new u,k=v.length;if(k<2)return x;const S=w?.decode||g;let E=0;do{const R=v.indexOf("=",E);if(R===-1)break;const $=v.indexOf(";",E),te=$===-1?k:$;if(R>te){E=v.lastIndexOf(";",R-1)+1;continue}const B=d(v,E,R),ne=h(v,R,B),ie=v.slice(B,ne);if(x[ie]===void 0){let Y=d(v,R+1,te),Q=h(v,te,Y);const ve=S(v.slice(Y,Q));x[ie]=ve}E=te+1}while(E<k);return x}function d(v,w,x){do{const k=v.charCodeAt(w);if(k!==32&&k!==9)return w}while(++w<x);return x}function h(v,w,x){for(;w>x;){const k=v.charCodeAt(--w);if(k!==32&&k!==9)return w+1}return x}function m(v,w,x){const k=x?.encode||encodeURIComponent;if(!t.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=k(w);if(!n.test(S))throw new TypeError(`argument val is invalid: ${w}`);let E=v+"="+S;if(!x)return E;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);E+="; Max-Age="+x.maxAge}if(x.domain){if(!o.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);E+="; Domain="+x.domain}if(x.path){if(!a.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);E+="; Path="+x.path}if(x.expires){if(!b(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);E+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(E+="; HttpOnly"),x.secure&&(E+="; Secure"),x.partitioned&&(E+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":E+="; Priority=Low";break;case"medium":E+="; Priority=Medium";break;case"high":E+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":E+="; SameSite=Strict";break;case"lax":E+="; SameSite=Lax";break;case"none":E+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return E}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function b(v){return s.call(v)==="[object Date]"}return bi}h1();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ap="popstate";function p1(t={}){function n(a,s){let{pathname:u,search:c,hash:d}=a.location;return lc("",{pathname:u,search:c,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function o(a,s){return typeof s=="string"?s:Ri(s)}return g1(n,o,null,t)}function et(t,n){if(t===!1||t===null||typeof t>"u")throw new Error(n)}function kn(t,n){if(!t)try{throw new Error(n)}catch{}}function m1(){return Math.random().toString(36).substring(2,10)}function sp(t,n){return{usr:t.state,key:t.key,idx:n}}function lc(t,n,o=null,a){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof n=="string"?Oo(n):n,state:o,key:n&&n.key||a||m1()}}function Ri({pathname:t="/",search:n="",hash:o=""}){return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Oo(t){let n={};if(t){let o=t.indexOf("#");o>=0&&(n.hash=t.substring(o),t=t.substring(0,o));let a=t.indexOf("?");a>=0&&(n.search=t.substring(a),t=t.substring(0,a)),t&&(n.pathname=t)}return n}function g1(t,n,o,a={}){let{window:s=document.defaultView,v5Compat:u=!1}=a,c=s.history,d="POP",h=null,m=g();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function g(){return(c.state||{idx:null}).idx}function b(){d="POP";let S=g(),E=S==null?null:S-m;m=S,h&&h({action:d,location:k.location,delta:E})}function v(S,E){d="PUSH";let R=lc(k.location,S,E);m=g()+1;let $=sp(R,m),te=k.createHref(R);try{c.pushState($,"",te)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;s.location.assign(te)}u&&h&&h({action:d,location:k.location,delta:1})}function w(S,E){d="REPLACE";let R=lc(k.location,S,E);m=g();let $=sp(R,m),te=k.createHref(R);c.replaceState($,"",te),u&&h&&h({action:d,location:k.location,delta:0})}function x(S){let E=s.location.origin!=="null"?s.location.origin:s.location.href,R=typeof S=="string"?S:Ri(S);return R=R.replace(/ $/,"%20"),et(E,`No window.location.(origin|href) available to create URL for href: ${R}`),new URL(R,E)}let k={get action(){return d},get location(){return t(s,c)},listen(S){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(ap,b),h=S,()=>{s.removeEventListener(ap,b),h=null}},createHref(S){return n(s,S)},createURL:x,encodeLocation(S){let E=x(S);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:v,replace:w,go(S){return c.go(S)}};return k}function eg(t,n,o="/"){return y1(t,n,o,!1)}function y1(t,n,o,a){let s=typeof n=="string"?Oo(n):n,u=Vn(s.pathname||"/",o);if(u==null)return null;let c=tg(t);v1(c);let d=null;for(let h=0;d==null&&h<c.length;++h){let m=M1(u);d=C1(c[h],m,a)}return d}function tg(t,n=[],o=[],a=""){let s=(u,c,d)=>{let h={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};h.relativePath.startsWith("/")&&(et(h.relativePath.startsWith(a),`Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(a.length));let m=Nn([a,h.relativePath]),g=o.concat(h);u.children&&u.children.length>0&&(et(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),tg(u.children,n,g,m)),!(u.path==null&&!u.index)&&n.push({path:m,score:T1(m,u.index),routesMeta:g})};return t.forEach((u,c)=>{if(u.path===""||!u.path?.includes("?"))s(u,c);else for(let d of ng(u.path))s(u,c,d)}),n}function ng(t){let n=t.split("/");if(n.length===0)return[];let[o,...a]=n,s=o.endsWith("?"),u=o.replace(/\?$/,"");if(a.length===0)return s?[u,""]:[u];let c=ng(a.join("/")),d=[];return d.push(...c.map(h=>h===""?u:[u,h].join("/"))),s&&d.push(...c),d.map(h=>t.startsWith("/")&&h===""?"/":h)}function v1(t){t.sort((n,o)=>n.score!==o.score?o.score-n.score:O1(n.routesMeta.map(a=>a.childrenIndex),o.routesMeta.map(a=>a.childrenIndex)))}var b1=/^:[\w-]+$/,w1=3,x1=2,k1=1,P1=10,S1=-2,lp=t=>t==="*";function T1(t,n){let o=t.split("/"),a=o.length;return o.some(lp)&&(a+=S1),n&&(a+=x1),o.filter(s=>!lp(s)).reduce((s,u)=>s+(b1.test(u)?w1:u===""?k1:P1),a)}function O1(t,n){return t.length===n.length&&t.slice(0,-1).every((a,s)=>a===n[s])?t[t.length-1]-n[n.length-1]:0}function C1(t,n,o=!1){let{routesMeta:a}=t,s={},u="/",c=[];for(let d=0;d<a.length;++d){let h=a[d],m=d===a.length-1,g=u==="/"?n:n.slice(u.length)||"/",b=xs({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},g),v=h.route;if(!b&&m&&o&&!a[a.length-1].route.index&&(b=xs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!b)return null;Object.assign(s,b.params),c.push({params:s,pathname:Nn([u,b.pathname]),pathnameBase:R1(Nn([u,b.pathnameBase])),route:v}),b.pathnameBase!=="/"&&(u=Nn([u,b.pathnameBase]))}return c}function xs(t,n){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[o,a]=E1(t.path,t.caseSensitive,t.end),s=n.match(o);if(!s)return null;let u=s[0],c=u.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:b},v)=>{if(g==="*"){let x=d[v]||"";c=u.slice(0,u.length-x.length).replace(/(.)\/+$/,"$1")}const w=d[v];return b&&!w?m[g]=void 0:m[g]=(w||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:c,pattern:t}}function E1(t,n=!1,o=!0){kn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let a=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,h)=>(a.push({paramName:d,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(a.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),a]}function M1(t){try{return t.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return kn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),t}}function Vn(t,n){if(n==="/")return t;if(!t.toLowerCase().startsWith(n.toLowerCase()))return null;let o=n.endsWith("/")?n.length-1:n.length,a=t.charAt(o);return a&&a!=="/"?null:t.slice(o)||"/"}function D1(t,n="/"){let{pathname:o,search:a="",hash:s=""}=typeof t=="string"?Oo(t):t;return{pathname:o?o.startsWith("/")?o:_1(o,n):n,search:L1(a),hash:j1(s)}}function _1(t,n){let o=n.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?o.length>1&&o.pop():s!=="."&&o.push(s)}),o.length>1?o.join("/"):"/"}function Lu(t,n,o,a){return`Cannot include a '${t}' character in a manually specified \`to.${n}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function A1(t){return t.filter((n,o)=>o===0||n.route.path&&n.route.path.length>0)}function rg(t){let n=A1(t);return n.map((o,a)=>a===n.length-1?o.pathname:o.pathnameBase)}function og(t,n,o,a=!1){let s;typeof t=="string"?s=Oo(t):(s={...t},et(!s.pathname||!s.pathname.includes("?"),Lu("?","pathname","search",s)),et(!s.pathname||!s.pathname.includes("#"),Lu("#","pathname","hash",s)),et(!s.search||!s.search.includes("#"),Lu("#","search","hash",s)));let u=t===""||s.pathname==="",c=u?"/":s.pathname,d;if(c==null)d=o;else{let b=n.length-1;if(!a&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),b-=1;s.pathname=v.join("/")}d=b>=0?n[b]:"/"}let h=D1(s,d),m=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(m||g)&&(h.pathname+="/"),h}var Nn=t=>t.join("/").replace(/\/\/+/g,"/"),R1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),L1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,j1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function N1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var ig=["POST","PUT","PATCH","DELETE"];new Set(ig);var z1=["GET",...ig];new Set(z1);var Co=M.createContext(null);Co.displayName="DataRouter";var Rs=M.createContext(null);Rs.displayName="DataRouterState";var ag=M.createContext({isTransitioning:!1});ag.displayName="ViewTransition";var I1=M.createContext(new Map);I1.displayName="Fetchers";var V1=M.createContext(null);V1.displayName="Await";var Pn=M.createContext(null);Pn.displayName="Navigation";var Fi=M.createContext(null);Fi.displayName="Location";var Sn=M.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var _c=M.createContext(null);_c.displayName="RouteError";function F1(t,{relative:n}={}){et(Bi(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:a}=M.useContext(Pn),{hash:s,pathname:u,search:c}=$i(t,{relative:n}),d=u;return o!=="/"&&(d=u==="/"?o:Nn([o,u])),a.createHref({pathname:d,search:c,hash:s})}function Bi(){return M.useContext(Fi)!=null}function jr(){return et(Bi(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Fi).location}var sg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function lg(t){M.useContext(Pn).static||M.useLayoutEffect(t)}function B1(){let{isDataRoute:t}=M.useContext(Sn);return t?eb():$1()}function $1(){et(Bi(),"useNavigate() may be used only in the context of a <Router> component.");let t=M.useContext(Co),{basename:n,navigator:o}=M.useContext(Pn),{matches:a}=M.useContext(Sn),{pathname:s}=jr(),u=JSON.stringify(rg(a)),c=M.useRef(!1);return lg(()=>{c.current=!0}),M.useCallback((h,m={})=>{if(kn(c.current,sg),!c.current)return;if(typeof h=="number"){o.go(h);return}let g=og(h,JSON.parse(u),s,m.relative==="path");t==null&&n!=="/"&&(g.pathname=g.pathname==="/"?n:Nn([n,g.pathname])),(m.replace?o.replace:o.push)(g,m.state,m)},[n,o,u,s,t])}M.createContext(null);function w2(){let{matches:t}=M.useContext(Sn),n=t[t.length-1];return n?n.params:{}}function $i(t,{relative:n}={}){let{matches:o}=M.useContext(Sn),{pathname:a}=jr(),s=JSON.stringify(rg(o));return M.useMemo(()=>og(t,JSON.parse(s),a,n==="path"),[t,s,a,n])}function U1(t,n){return ug(t,n)}function ug(t,n,o,a){et(Bi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:u}=M.useContext(Pn),{matches:c}=M.useContext(Sn),d=c[c.length-1],h=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",b=d&&d.route;{let R=b&&b.path||"";cg(m,!b||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=jr(),w;if(n){let R=typeof n=="string"?Oo(n):n;et(g==="/"||R.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),w=R}else w=v;let x=w.pathname||"/",k=x;if(g!=="/"){let R=g.replace(/^\//,"").split("/");k="/"+x.replace(/^\//,"").split("/").slice(R.length).join("/")}let S=!u&&o&&o.matches&&o.matches.length>0?o.matches:eg(t,{pathname:k});kn(b||S!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),kn(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=K1(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},h,R.params),pathname:Nn([g,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:Nn([g,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),c,o,a);return n&&E?M.createElement(Fi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},E):E}function W1(){let t=J1(),n=N1(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),o=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return c=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:u},"ErrorBoundary")," or"," ",M.createElement("code",{style:u},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},n),o?M.createElement("pre",{style:s},o):null,c)}var q1=M.createElement(W1,null),H1=class extends M.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){}render(){return this.state.error!==void 0?M.createElement(Sn.Provider,{value:this.props.routeContext},M.createElement(_c.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Y1({routeContext:t,match:n,children:o}){let a=M.useContext(Co);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Sn.Provider,{value:t},o)}function K1(t,n=[],o=null,a=null){if(t==null){if(!o)return null;if(o.errors)t=o.matches;else if(n.length===0&&!o.initialized&&o.matches.length>0)t=o.matches;else return null}let s=t,u=o?.errors;if(u!=null){let h=s.findIndex(m=>m.route.id&&u?.[m.route.id]!==void 0);et(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),s=s.slice(0,Math.min(s.length,h+1))}let c=!1,d=-1;if(o)for(let h=0;h<s.length;h++){let m=s[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=h),m.route.id){let{loaderData:g,errors:b}=o,v=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!b||b[m.route.id]===void 0);if(m.route.lazy||v){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((h,m,g)=>{let b,v=!1,w=null,x=null;o&&(b=u&&m.route.id?u[m.route.id]:void 0,w=m.route.errorElement||q1,c&&(d<0&&g===0?(cg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,x=null):d===g&&(v=!0,x=m.route.hydrateFallbackElement||null)));let k=n.concat(s.slice(0,g+1)),S=()=>{let E;return b?E=w:v?E=x:m.route.Component?E=M.createElement(m.route.Component,null):m.route.element?E=m.route.element:E=h,M.createElement(Y1,{match:m,routeContext:{outlet:h,matches:k,isDataRoute:o!=null},children:E})};return o&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?M.createElement(H1,{location:o.location,revalidation:o.revalidation,component:w,error:b,children:S(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):S()},null)}function Ac(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function G1(t){let n=M.useContext(Co);return et(n,Ac(t)),n}function X1(t){let n=M.useContext(Rs);return et(n,Ac(t)),n}function Q1(t){let n=M.useContext(Sn);return et(n,Ac(t)),n}function Rc(t){let n=Q1(t),o=n.matches[n.matches.length-1];return et(o.route.id,`${t} can only be used on routes that contain a unique "id"`),o.route.id}function Z1(){return Rc("useRouteId")}function J1(){let t=M.useContext(_c),n=X1("useRouteError"),o=Rc("useRouteError");return t!==void 0?t:n.errors?.[o]}function eb(){let{router:t}=G1("useNavigate"),n=Rc("useNavigate"),o=M.useRef(!1);return lg(()=>{o.current=!0}),M.useCallback(async(s,u={})=>{kn(o.current,sg),o.current&&(typeof s=="number"?t.navigate(s):await t.navigate(s,{fromRouteId:n,...u}))},[t,n])}var up={};function cg(t,n,o){!n&&!up[t]&&(up[t]=!0,kn(!1,o))}M.memo(tb);function tb({routes:t,future:n,state:o}){return ug(t,void 0,o,n)}function nb(t){et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rb({basename:t="/",children:n=null,location:o,navigationType:a="POP",navigator:s,static:u=!1}){et(!Bi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),d=M.useMemo(()=>({basename:c,navigator:s,static:u,future:{}}),[c,s,u]);typeof o=="string"&&(o=Oo(o));let{pathname:h="/",search:m="",hash:g="",state:b=null,key:v="default"}=o,w=M.useMemo(()=>{let x=Vn(h,c);return x==null?null:{location:{pathname:x,search:m,hash:g,state:b,key:v},navigationType:a}},[c,h,m,g,b,v,a]);return kn(w!=null,`<Router basename="${c}"> is not able to match the URL "${h}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:M.createElement(Pn.Provider,{value:d},M.createElement(Fi.Provider,{children:n,value:w}))}function x2({children:t,location:n}){return U1(uc(t),n)}function uc(t,n=[]){let o=[];return M.Children.forEach(t,(a,s)=>{if(!M.isValidElement(a))return;let u=[...n,s];if(a.type===M.Fragment){o.push.apply(o,uc(a.props.children,u));return}et(a.type===nb,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),et(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=uc(a.props.children,u)),o.push(c)}),o}var ps="get",ms="application/x-www-form-urlencoded";function Ls(t){return t!=null&&typeof t.tagName=="string"}function ob(t){return Ls(t)&&t.tagName.toLowerCase()==="button"}function ib(t){return Ls(t)&&t.tagName.toLowerCase()==="form"}function ab(t){return Ls(t)&&t.tagName.toLowerCase()==="input"}function sb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lb(t,n){return t.button===0&&(!n||n==="_self")&&!sb(t)}var os=null;function ub(){if(os===null)try{new FormData(document.createElement("form"),0),os=!1}catch{os=!0}return os}var cb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ju(t){return t!=null&&!cb.has(t)?(kn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ms}"`),null):t}function fb(t,n){let o,a,s,u,c;if(ib(t)){let d=t.getAttribute("action");a=d?Vn(d,n):null,o=t.getAttribute("method")||ps,s=ju(t.getAttribute("enctype"))||ms,u=new FormData(t)}else if(ob(t)||ab(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=t.getAttribute("formaction")||d.getAttribute("action");if(a=h?Vn(h,n):null,o=t.getAttribute("formmethod")||d.getAttribute("method")||ps,s=ju(t.getAttribute("formenctype"))||ju(d.getAttribute("enctype"))||ms,u=new FormData(d,t),!ub()){let{name:m,type:g,value:b}=t;if(g==="image"){let v=m?`${m}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else m&&u.append(m,b)}}else{if(Ls(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=ps,a=null,s=ms,c=t}return u&&s==="text/plain"&&(c=u,u=void 0),{action:a,method:o.toLowerCase(),encType:s,formData:u,body:c}}function Lc(t,n){if(t===!1||t===null||typeof t>"u")throw new Error(n)}async function db(t,n){if(t.id in n)return n[t.id];try{let o=await import(t.module);return n[t.id]=o,o}catch{return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hb(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function pb(t,n,o){let a=await Promise.all(t.map(async s=>{let u=n.routes[s.route.id];if(u){let c=await db(u,o);return c.links?c.links():[]}return[]}));return vb(a.flat(1).filter(hb).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function cp(t,n,o,a,s,u){let c=(h,m)=>o[m]?h.route.id!==o[m].route.id:!0,d=(h,m)=>o[m].pathname!==h.pathname||o[m].route.path?.endsWith("*")&&o[m].params["*"]!==h.params["*"];return u==="assets"?n.filter((h,m)=>c(h,m)||d(h,m)):u==="data"?n.filter((h,m)=>{let g=a.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(c(h,m)||d(h,m))return!0;if(h.route.shouldRevalidate){let b=h.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function mb(t,n,{includeHydrateFallback:o}={}){return gb(t.map(a=>{let s=n.routes[a.route.id];if(!s)return[];let u=[s.module];return s.clientActionModule&&(u=u.concat(s.clientActionModule)),s.clientLoaderModule&&(u=u.concat(s.clientLoaderModule)),o&&s.hydrateFallbackModule&&(u=u.concat(s.hydrateFallbackModule)),s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function gb(t){return[...new Set(t)]}function yb(t){let n={},o=Object.keys(t).sort();for(let a of o)n[a]=t[a];return n}function vb(t,n){let o=new Set;return new Set(n),t.reduce((a,s)=>{let u=JSON.stringify(yb(s));return o.has(u)||(o.add(u),a.push({key:u,link:s})),a},[])}function bb(t,n){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return o.pathname==="/"?o.pathname="_root.data":n&&Vn(o.pathname,n)==="/"?o.pathname=`${n.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function fg(){let t=M.useContext(Co);return Lc(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function wb(){let t=M.useContext(Rs);return Lc(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var jc=M.createContext(void 0);jc.displayName="FrameworkContext";function dg(){let t=M.useContext(jc);return Lc(t,"You must render this element inside a <HydratedRouter> element"),t}function xb(t,n){let o=M.useContext(jc),[a,s]=M.useState(!1),[u,c]=M.useState(!1),{onFocus:d,onBlur:h,onMouseEnter:m,onMouseLeave:g,onTouchStart:b}=n,v=M.useRef(null);M.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let k=E=>{E.forEach(R=>{c(R.isIntersecting)})},S=new IntersectionObserver(k,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[t]),M.useEffect(()=>{if(a){let k=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(k)}}},[a]);let w=()=>{s(!0)},x=()=>{s(!1),c(!1)};return o?t!=="intent"?[u,v,{}]:[u,v,{onFocus:wi(d,w),onBlur:wi(h,x),onMouseEnter:wi(m,w),onMouseLeave:wi(g,x),onTouchStart:wi(b,w)}]:[!1,v,{}]}function wi(t,n){return o=>{t&&t(o),o.defaultPrevented||n(o)}}function kb({page:t,...n}){let{router:o}=fg(),a=M.useMemo(()=>eg(o.routes,t,o.basename),[o.routes,t,o.basename]);return a?M.createElement(Sb,{page:t,matches:a,...n}):null}function Pb(t){let{manifest:n,routeModules:o}=dg(),[a,s]=M.useState([]);return M.useEffect(()=>{let u=!1;return pb(t,n,o).then(c=>{u||s(c)}),()=>{u=!0}},[t,n,o]),a}function Sb({page:t,matches:n,...o}){let a=jr(),{manifest:s,routeModules:u}=dg(),{basename:c}=fg(),{loaderData:d,matches:h}=wb(),m=M.useMemo(()=>cp(t,n,h,s,a,"data"),[t,n,h,s,a]),g=M.useMemo(()=>cp(t,n,h,s,a,"assets"),[t,n,h,s,a]),b=M.useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let x=new Set,k=!1;if(n.forEach(E=>{let R=s.routes[E.route.id];!R||!R.hasLoader||(!m.some($=>$.route.id===E.route.id)&&E.route.id in d&&u[E.route.id]?.shouldRevalidate||R.hasClientLoader?k=!0:x.add(E.route.id))}),x.size===0)return[];let S=bb(t,c);return k&&x.size>0&&S.searchParams.set("_routes",n.filter(E=>x.has(E.route.id)).map(E=>E.route.id).join(",")),[S.pathname+S.search]},[c,d,a,s,m,n,t,u]),v=M.useMemo(()=>mb(g,s),[g,s]),w=Pb(g);return M.createElement(M.Fragment,null,b.map(x=>M.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...o})),v.map(x=>M.createElement("link",{key:x,rel:"modulepreload",href:x,...o})),w.map(({key:x,link:k})=>M.createElement("link",{key:x,...k})))}function Tb(...t){return n=>{t.forEach(o=>{typeof o=="function"?o(n):o!=null&&(o.current=n)})}}var hg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{hg&&(window.__reactRouterVersion="7.3.0")}catch{}function k2({basename:t,children:n,window:o}){let a=M.useRef();a.current==null&&(a.current=p1({window:o,v5Compat:!0}));let s=a.current,[u,c]=M.useState({action:s.action,location:s.location}),d=M.useCallback(h=>{M.startTransition(()=>c(h))},[c]);return M.useLayoutEffect(()=>s.listen(d),[s,d]),M.createElement(rb,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:s})}var pg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mg=M.forwardRef(function({onClick:n,discover:o="render",prefetch:a="none",relative:s,reloadDocument:u,replace:c,state:d,target:h,to:m,preventScrollReset:g,viewTransition:b,...v},w){let{basename:x}=M.useContext(Pn),k=typeof m=="string"&&pg.test(m),S,E=!1;if(typeof m=="string"&&k&&(S=m,hg))try{let Q=new URL(window.location.href),ve=m.startsWith("//")?new URL(Q.protocol+m):new URL(m),Me=Vn(ve.pathname,x);ve.origin===Q.origin&&Me!=null?m=Me+ve.search+ve.hash:E=!0}catch{kn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=F1(m,{relative:s}),[$,te,B]=xb(a,v),ne=Mb(m,{replace:c,state:d,target:h,preventScrollReset:g,relative:s,viewTransition:b});function ie(Q){n&&n(Q),Q.defaultPrevented||ne(Q)}let Y=M.createElement("a",{...v,...B,href:S||R,onClick:E||u?n:ie,ref:Tb(w,te),target:h,"data-discover":!k&&o==="render"?"true":void 0});return $&&!k?M.createElement(M.Fragment,null,Y,M.createElement(kb,{page:R})):Y});mg.displayName="Link";var Ob=M.forwardRef(function({"aria-current":n="page",caseSensitive:o=!1,className:a="",end:s=!1,style:u,to:c,viewTransition:d,children:h,...m},g){let b=$i(c,{relative:m.relative}),v=jr(),w=M.useContext(Rs),{navigator:x,basename:k}=M.useContext(Pn),S=w!=null&&Lb(b)&&d===!0,E=x.encodeLocation?x.encodeLocation(b).pathname:b.pathname,R=v.pathname,$=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;o||(R=R.toLowerCase(),$=$?$.toLowerCase():null,E=E.toLowerCase()),$&&k&&($=Vn($,k)||$);const te=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let B=R===E||!s&&R.startsWith(E)&&R.charAt(te)==="/",ne=$!=null&&($===E||!s&&$.startsWith(E)&&$.charAt(E.length)==="/"),ie={isActive:B,isPending:ne,isTransitioning:S},Y=B?n:void 0,Q;typeof a=="function"?Q=a(ie):Q=[a,B?"active":null,ne?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let ve=typeof u=="function"?u(ie):u;return M.createElement(mg,{...m,"aria-current":Y,className:Q,ref:g,style:ve,to:c,viewTransition:d},typeof h=="function"?h(ie):h)});Ob.displayName="NavLink";var Cb=M.forwardRef(({discover:t="render",fetcherKey:n,navigate:o,reloadDocument:a,replace:s,state:u,method:c=ps,action:d,onSubmit:h,relative:m,preventScrollReset:g,viewTransition:b,...v},w)=>{let x=Ab(),k=Rb(d,{relative:m}),S=c.toLowerCase()==="get"?"get":"post",E=typeof d=="string"&&pg.test(d),R=$=>{if(h&&h($),$.defaultPrevented)return;$.preventDefault();let te=$.nativeEvent.submitter,B=te?.getAttribute("formmethod")||c;x(te||$.currentTarget,{fetcherKey:n,method:B,navigate:o,replace:s,state:u,relative:m,preventScrollReset:g,viewTransition:b})};return M.createElement("form",{ref:w,method:S,action:k,onSubmit:a?h:R,...v,"data-discover":!E&&t==="render"?"true":void 0})});Cb.displayName="Form";function Eb(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gg(t){let n=M.useContext(Co);return et(n,Eb(t)),n}function Mb(t,{target:n,replace:o,state:a,preventScrollReset:s,relative:u,viewTransition:c}={}){let d=B1(),h=jr(),m=$i(t,{relative:u});return M.useCallback(g=>{if(lb(g,n)){g.preventDefault();let b=o!==void 0?o:Ri(h)===Ri(m);d(t,{replace:b,state:a,preventScrollReset:s,relative:u,viewTransition:c})}},[h,d,m,o,a,n,t,s,u,c])}var Db=0,_b=()=>`__${String(++Db)}__`;function Ab(){let{router:t}=gg("useSubmit"),{basename:n}=M.useContext(Pn),o=Z1();return M.useCallback(async(a,s={})=>{let{action:u,method:c,encType:d,formData:h,body:m}=fb(a,n);if(s.navigate===!1){let g=s.fetcherKey||_b();await t.fetch(g,o,s.action||u,{preventScrollReset:s.preventScrollReset,formData:h,body:m,formMethod:s.method||c,formEncType:s.encType||d,flushSync:s.flushSync})}else await t.navigate(s.action||u,{preventScrollReset:s.preventScrollReset,formData:h,body:m,formMethod:s.method||c,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:o,flushSync:s.flushSync,viewTransition:s.viewTransition})},[t,n,o])}function Rb(t,{relative:n}={}){let{basename:o}=M.useContext(Pn),a=M.useContext(Sn);et(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),u={...$i(t||".",{relative:n})},c=jr();if(t==null){u.search=c.search;let d=new URLSearchParams(u.search),h=d.getAll("index");if(h.some(g=>g==="")){d.delete("index"),h.filter(b=>b).forEach(b=>d.append("index",b));let g=d.toString();u.search=g?`?${g}`:""}}return(!t||t===".")&&s.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:Nn([o,u.pathname])),Ri(u)}function Lb(t,n={}){let o=M.useContext(ag);et(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=gg("useViewTransitionState"),s=$i(t,{relative:n.relative});if(!o.isTransitioning)return!1;let u=Vn(o.currentLocation.pathname,a)||o.currentLocation.pathname,c=Vn(o.nextLocation.pathname,a)||o.nextLocation.pathname;return xs(s.pathname,c)!=null||xs(s.pathname,u)!=null}new TextEncoder;var Nu,fp;function jb(){if(fp)return Nu;fp=1;var t=typeof Element<"u",n=typeof Map=="function",o=typeof Set=="function",a=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function s(u,c){if(u===c)return!0;if(u&&c&&typeof u=="object"&&typeof c=="object"){if(u.constructor!==c.constructor)return!1;var d,h,m;if(Array.isArray(u)){if(d=u.length,d!=c.length)return!1;for(h=d;h--!==0;)if(!s(u[h],c[h]))return!1;return!0}var g;if(n&&u instanceof Map&&c instanceof Map){if(u.size!==c.size)return!1;for(g=u.entries();!(h=g.next()).done;)if(!c.has(h.value[0]))return!1;for(g=u.entries();!(h=g.next()).done;)if(!s(h.value[1],c.get(h.value[0])))return!1;return!0}if(o&&u instanceof Set&&c instanceof Set){if(u.size!==c.size)return!1;for(g=u.entries();!(h=g.next()).done;)if(!c.has(h.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(u)&&ArrayBuffer.isView(c)){if(d=u.length,d!=c.length)return!1;for(h=d;h--!==0;)if(u[h]!==c[h])return!1;return!0}if(u.constructor===RegExp)return u.source===c.source&&u.flags===c.flags;if(u.valueOf!==Object.prototype.valueOf&&typeof u.valueOf=="function"&&typeof c.valueOf=="function")return u.valueOf()===c.valueOf();if(u.toString!==Object.prototype.toString&&typeof u.toString=="function"&&typeof c.toString=="function")return u.toString()===c.toString();if(m=Object.keys(u),d=m.length,d!==Object.keys(c).length)return!1;for(h=d;h--!==0;)if(!Object.prototype.hasOwnProperty.call(c,m[h]))return!1;if(t&&u instanceof Element)return!1;for(h=d;h--!==0;)if(!((m[h]==="_owner"||m[h]==="__v"||m[h]==="__o")&&u.$$typeof)&&!s(u[m[h]],c[m[h]]))return!1;return!0}return u!==u&&c!==c}return Nu=function(c,d){try{return s(c,d)}catch(h){if((h.message||"").match(/stack|recursion/i))return!1;throw h}},Nu}var Nb=jb();const zb=To(Nb);var zu,dp;function Ib(){if(dp)return zu;dp=1;var t=function(n,o,a,s,u,c,d,h){if(!n){var m;if(o===void 0)m=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var g=[a,s,u,c,d,h],b=0;m=new Error(o.replace(/%s/g,function(){return g[b++]})),m.name="Invariant Violation"}throw m.framesToPop=1,m}};return zu=t,zu}var Vb=Ib();const hp=To(Vb);var Iu,pp;function Fb(){return pp||(pp=1,Iu=function(n,o,a,s){var u=a?a.call(s,n,o):void 0;if(u!==void 0)return!!u;if(n===o)return!0;if(typeof n!="object"||!n||typeof o!="object"||!o)return!1;var c=Object.keys(n),d=Object.keys(o);if(c.length!==d.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(o),m=0;m<c.length;m++){var g=c[m];if(!h(g))return!1;var b=n[g],v=o[g];if(u=a?a.call(s,b,v,g):void 0,u===!1||u===void 0&&b!==v)return!1}return!0}),Iu}var Bb=Fb();const $b=To(Bb);var yg=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(yg||{}),Vu={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},mp=Object.values(yg),Nc={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Ub=Object.entries(Nc).reduce((t,[n,o])=>(t[o]=n,t),{}),ln="data-rh",bo={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},wo=(t,n)=>{for(let o=t.length-1;o>=0;o-=1){const a=t[o];if(Object.prototype.hasOwnProperty.call(a,n))return a[n]}return null},Wb=t=>{let n=wo(t,"title");const o=wo(t,bo.TITLE_TEMPLATE);if(Array.isArray(n)&&(n=n.join("")),o&&n)return o.replace(/%s/g,()=>n);const a=wo(t,bo.DEFAULT_TITLE);return n||a||void 0},qb=t=>wo(t,bo.ON_CHANGE_CLIENT_STATE)||(()=>{}),Fu=(t,n)=>n.filter(o=>typeof o[t]<"u").map(o=>o[t]).reduce((o,a)=>({...o,...a}),{}),Hb=(t,n)=>n.filter(o=>typeof o.base<"u").map(o=>o.base).reverse().reduce((o,a)=>{if(!o.length){const s=Object.keys(a);for(let u=0;u<s.length;u+=1){const d=s[u].toLowerCase();if(t.indexOf(d)!==-1&&a[d])return o.concat(a)}}return o},[]),Yb=t=>console&&typeof console.warn=="function"&&void 0,xi=(t,n,o)=>{const a={};return o.filter(s=>Array.isArray(s[t])?!0:(typeof s[t]<"u"&&Yb(`Helmet: ${t} should be of type "Array". Instead found type "${typeof s[t]}"`),!1)).map(s=>s[t]).reverse().reduce((s,u)=>{const c={};u.filter(h=>{let m;const g=Object.keys(h);for(let v=0;v<g.length;v+=1){const w=g[v],x=w.toLowerCase();n.indexOf(x)!==-1&&!(m==="rel"&&h[m].toLowerCase()==="canonical")&&!(x==="rel"&&h[x].toLowerCase()==="stylesheet")&&(m=x),n.indexOf(w)!==-1&&(w==="innerHTML"||w==="cssText"||w==="itemprop")&&(m=w)}if(!m||!h[m])return!1;const b=h[m].toLowerCase();return a[m]||(a[m]={}),c[m]||(c[m]={}),a[m][b]?!1:(c[m][b]=!0,!0)}).reverse().forEach(h=>s.push(h));const d=Object.keys(c);for(let h=0;h<d.length;h+=1){const m=d[h],g={...a[m],...c[m]};a[m]=g}return s},[]).reverse()},Kb=(t,n)=>{if(Array.isArray(t)&&t.length){for(let o=0;o<t.length;o+=1)if(t[o][n])return!0}return!1},Gb=t=>({baseTag:Hb(["href"],t),bodyAttributes:Fu("bodyAttributes",t),defer:wo(t,bo.DEFER),encode:wo(t,bo.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Fu("htmlAttributes",t),linkTags:xi("link",["rel","href"],t),metaTags:xi("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:xi("noscript",["innerHTML"],t),onChangeClientState:qb(t),scriptTags:xi("script",["src","innerHTML"],t),styleTags:xi("style",["cssText"],t),title:Wb(t),titleAttributes:Fu("titleAttributes",t),prioritizeSeoTags:Kb(t,bo.PRIORITIZE_SEO_TAGS)}),vg=t=>Array.isArray(t)?t.join(""):t,Xb=(t,n)=>{const o=Object.keys(t);for(let a=0;a<o.length;a+=1)if(n[o[a]]&&n[o[a]].includes(t[o[a]]))return!0;return!1},Bu=(t,n)=>Array.isArray(t)?t.reduce((o,a)=>(Xb(a,n)?o.priority.push(a):o.default.push(a),o),{priority:[],default:[]}):{default:t,priority:[]},gp=(t,n)=>({...t,[n]:void 0}),Qb=["noscript","script","style"],cc=(t,n=!0)=>n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),bg=t=>Object.keys(t).reduce((n,o)=>{const a=typeof t[o]<"u"?`${o}="${t[o]}"`:`${o}`;return n?`${n} ${a}`:a},""),Zb=(t,n,o,a)=>{const s=bg(o),u=vg(n);return s?`<${t} ${ln}="true" ${s}>${cc(u,a)}</${t}>`:`<${t} ${ln}="true">${cc(u,a)}</${t}>`},Jb=(t,n,o=!0)=>n.reduce((a,s)=>{const u=s,c=Object.keys(u).filter(m=>!(m==="innerHTML"||m==="cssText")).reduce((m,g)=>{const b=typeof u[g]>"u"?g:`${g}="${cc(u[g],o)}"`;return m?`${m} ${b}`:b},""),d=u.innerHTML||u.cssText||"",h=Qb.indexOf(t)===-1;return`${a}<${t} ${ln}="true" ${c}${h?"/>":`>${d}</${t}>`}`},""),wg=(t,n={})=>Object.keys(t).reduce((o,a)=>{const s=Nc[a];return o[s||a]=t[a],o},n),ew=(t,n,o)=>{const a={key:n,[ln]:!0},s=wg(o,a);return[Ee.createElement("title",s,n)]},gs=(t,n)=>n.map((o,a)=>{const s={key:a,[ln]:!0};return Object.keys(o).forEach(u=>{const d=Nc[u]||u;if(d==="innerHTML"||d==="cssText"){const h=o.innerHTML||o.cssText;s.dangerouslySetInnerHTML={__html:h}}else s[d]=o[u]}),Ee.createElement(t,s)}),Qt=(t,n,o=!0)=>{switch(t){case"title":return{toComponent:()=>ew(t,n.title,n.titleAttributes),toString:()=>Zb(t,n.title,n.titleAttributes,o)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>wg(n),toString:()=>bg(n)};default:return{toComponent:()=>gs(t,n),toString:()=>Jb(t,n,o)}}},tw=({metaTags:t,linkTags:n,scriptTags:o,encode:a})=>{const s=Bu(t,Vu.meta),u=Bu(n,Vu.link),c=Bu(o,Vu.script);return{priorityMethods:{toComponent:()=>[...gs("meta",s.priority),...gs("link",u.priority),...gs("script",c.priority)],toString:()=>`${Qt("meta",s.priority,a)} ${Qt("link",u.priority,a)} ${Qt("script",c.priority,a)}`},metaTags:s.default,linkTags:u.default,scriptTags:c.default}},nw=t=>{const{baseTag:n,bodyAttributes:o,encode:a=!0,htmlAttributes:s,noscriptTags:u,styleTags:c,title:d="",titleAttributes:h,prioritizeSeoTags:m}=t;let{linkTags:g,metaTags:b,scriptTags:v}=t,w={toComponent:()=>{},toString:()=>""};return m&&({priorityMethods:w,linkTags:g,metaTags:b,scriptTags:v}=tw(t)),{priority:w,base:Qt("base",n,a),bodyAttributes:Qt("bodyAttributes",o,a),htmlAttributes:Qt("htmlAttributes",s,a),link:Qt("link",g,a),meta:Qt("meta",b,a),noscript:Qt("noscript",u,a),script:Qt("script",v,a),style:Qt("style",c,a),title:Qt("title",{title:d,titleAttributes:h},a)}},fc=nw,is=[],xg=!!(typeof window<"u"&&window.document&&window.document.createElement),dc=class{instances=[];canUseDOM=xg;context;value={setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?is:this.instances,add:t=>{(this.canUseDOM?is:this.instances).push(t)},remove:t=>{const n=(this.canUseDOM?is:this.instances).indexOf(t);(this.canUseDOM?is:this.instances).splice(n,1)}}};constructor(t,n){this.context=t,this.canUseDOM=n||!1,n||(t.helmet=fc({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},rw={},kg=Ee.createContext(rw),ow=class Pg extends M.Component{static canUseDOM=xg;helmetData;constructor(n){super(n),this.helmetData=new dc(this.props.context||{},Pg.canUseDOM)}render(){return Ee.createElement(kg.Provider,{value:this.helmetData.value},this.props.children)}},so=(t,n)=>{const o=document.head||document.querySelector("head"),a=o.querySelectorAll(`${t}[${ln}]`),s=[].slice.call(a),u=[];let c;return n&&n.length&&n.forEach(d=>{const h=document.createElement(t);for(const m in d)if(Object.prototype.hasOwnProperty.call(d,m))if(m==="innerHTML")h.innerHTML=d.innerHTML;else if(m==="cssText")h.styleSheet?h.styleSheet.cssText=d.cssText:h.appendChild(document.createTextNode(d.cssText));else{const g=m,b=typeof d[g]>"u"?"":d[g];h.setAttribute(m,b)}h.setAttribute(ln,"true"),s.some((m,g)=>(c=g,h.isEqualNode(m)))?s.splice(c,1):u.push(h)}),s.forEach(d=>d.parentNode?.removeChild(d)),u.forEach(d=>o.appendChild(d)),{oldTags:s,newTags:u}},hc=(t,n)=>{const o=document.getElementsByTagName(t)[0];if(!o)return;const a=o.getAttribute(ln),s=a?a.split(","):[],u=[...s],c=Object.keys(n);for(const d of c){const h=n[d]||"";o.getAttribute(d)!==h&&o.setAttribute(d,h),s.indexOf(d)===-1&&s.push(d);const m=u.indexOf(d);m!==-1&&u.splice(m,1)}for(let d=u.length-1;d>=0;d-=1)o.removeAttribute(u[d]);s.length===u.length?o.removeAttribute(ln):o.getAttribute(ln)!==c.join(",")&&o.setAttribute(ln,c.join(","))},iw=(t,n)=>{typeof t<"u"&&document.title!==t&&(document.title=vg(t)),hc("title",n)},yp=(t,n)=>{const{baseTag:o,bodyAttributes:a,htmlAttributes:s,linkTags:u,metaTags:c,noscriptTags:d,onChangeClientState:h,scriptTags:m,styleTags:g,title:b,titleAttributes:v}=t;hc("body",a),hc("html",s),iw(b,v);const w={baseTag:so("base",o),linkTags:so("link",u),metaTags:so("meta",c),noscriptTags:so("noscript",d),scriptTags:so("script",m),styleTags:so("style",g)},x={},k={};Object.keys(w).forEach(S=>{const{newTags:E,oldTags:R}=w[S];E.length&&(x[S]=E),R.length&&(k[S]=w[S].oldTags)}),n&&n(),h(t,x,k)},ki=null,aw=t=>{ki&&cancelAnimationFrame(ki),t.defer?ki=requestAnimationFrame(()=>{yp(t,()=>{ki=null})}):(yp(t),ki=null)},sw=aw,vp=class extends M.Component{rendered=!1;shouldComponentUpdate(t){return!$b(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let o=null;const a=Gb(t.get().map(s=>{const u={...s.props};return delete u.context,u}));ow.canUseDOM?sw(a):fc&&(o=fc(a)),n(o)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},P2=class extends M.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(t){return!zb(gp(this.props,"helmetData"),gp(t,"helmetData"))}mapNestedChildrenToProps(t,n){if(!n)return null;switch(t.type){case"script":case"noscript":return{innerHTML:n};case"style":return{cssText:n};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,n,o,a){return{...n,[t.type]:[...n[t.type]||[],{...o,...this.mapNestedChildrenToProps(t,a)}]}}mapObjectTypeChildren(t,n,o,a){switch(t.type){case"title":return{...n,[t.type]:a,titleAttributes:{...o}};case"body":return{...n,bodyAttributes:{...o}};case"html":return{...n,htmlAttributes:{...o}};default:return{...n,[t.type]:{...o}}}}mapArrayTypeChildrenToProps(t,n){let o={...n};return Object.keys(t).forEach(a=>{o={...o,[a]:t[a]}}),o}warnOnInvalidChildren(t,n){return hp(mp.some(o=>t.type===o),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${mp.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),hp(!n||typeof n=="string"||Array.isArray(n)&&!n.some(o=>typeof o!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,n){let o={};return Ee.Children.forEach(t,a=>{if(!a||!a.props)return;const{children:s,...u}=a.props,c=Object.keys(u).reduce((h,m)=>(h[Ub[m]||m]=u[m],h),{});let{type:d}=a;switch(typeof d=="symbol"?d=d.toString():this.warnOnInvalidChildren(a,s),d){case"Symbol(react.fragment)":n=this.mapChildrenToProps(s,n);break;case"link":case"meta":case"noscript":case"script":case"style":o=this.flattenArrayTypeChildren(a,o,c,s);break;default:n=this.mapObjectTypeChildren(a,n,c,s);break}}),this.mapArrayTypeChildrenToProps(o,n)}render(){const{children:t,...n}=this.props;let o={...n},{helmetData:a}=n;if(t&&(o=this.mapChildrenToProps(t,o)),a&&!(a instanceof dc)){const s=a;a=new dc(s.context,!0),delete o.helmetData}return a?Ee.createElement(vp,{...o,context:a.value}):Ee.createElement(kg.Consumer,null,s=>Ee.createElement(vp,{...o,context:s}))}};const zc=M.createContext({});function Ic(t){const n=M.useRef(null);return n.current===null&&(n.current=t()),n.current}const js=M.createContext(null),Vc=M.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class lw extends M.Component{getSnapshotBeforeUpdate(n){const o=this.props.childRef.current;if(o&&n.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=o.offsetHeight||0,a.width=o.offsetWidth||0,a.top=o.offsetTop,a.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function uw({children:t,isPresent:n}){const o=M.useId(),a=M.useRef(null),s=M.useRef({width:0,height:0,top:0,left:0}),{nonce:u}=M.useContext(Vc);return M.useInsertionEffect(()=>{const{width:c,height:d,top:h,left:m}=s.current;if(n||!a.current||!c||!d)return;a.current.dataset.motionPopId=o;const g=document.createElement("style");return u&&(g.nonce=u),document.head.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            top: ${h}px !important;
            left: ${m}px !important;
          }
        `),()=>{document.head.removeChild(g)}},[n]),jn.jsx(lw,{isPresent:n,childRef:a,sizeRef:s,children:M.cloneElement(t,{ref:a})})}const cw=({children:t,initial:n,isPresent:o,onExitComplete:a,custom:s,presenceAffectsLayout:u,mode:c})=>{const d=Ic(fw),h=M.useId(),m=M.useCallback(b=>{d.set(b,!0);for(const v of d.values())if(!v)return;a&&a()},[d,a]),g=M.useMemo(()=>({id:h,initial:n,isPresent:o,custom:s,onExitComplete:m,register:b=>(d.set(b,!1),()=>d.delete(b))}),u?[Math.random(),m]:[o,m]);return M.useMemo(()=>{d.forEach((b,v)=>d.set(v,!1))},[o]),M.useEffect(()=>{!o&&!d.size&&a&&a()},[o]),c==="popLayout"&&(t=jn.jsx(uw,{isPresent:o,children:t})),jn.jsx(js.Provider,{value:g,children:t})};function fw(){return new Map}function Sg(t=!0){const n=M.useContext(js);if(n===null)return[!0,null];const{isPresent:o,onExitComplete:a,register:s}=n,u=M.useId();M.useEffect(()=>{t&&s(u)},[t]);const c=M.useCallback(()=>t&&a&&a(u),[u,a,t]);return!o&&a?[!1,c]:[!0]}const as=t=>t.key||"";function bp(t){const n=[];return M.Children.forEach(t,o=>{M.isValidElement(o)&&n.push(o)}),n}const Fc=typeof window<"u",Tg=Fc?M.useLayoutEffect:M.useEffect,S2=({children:t,custom:n,initial:o=!0,onExitComplete:a,presenceAffectsLayout:s=!0,mode:u="sync",propagate:c=!1})=>{const[d,h]=Sg(c),m=M.useMemo(()=>bp(t),[t]),g=c&&!d?[]:m.map(as),b=M.useRef(!0),v=M.useRef(m),w=Ic(()=>new Map),[x,k]=M.useState(m),[S,E]=M.useState(m);Tg(()=>{b.current=!1,v.current=m;for(let te=0;te<S.length;te++){const B=as(S[te]);g.includes(B)?w.delete(B):w.get(B)!==!0&&w.set(B,!1)}},[S,g.length,g.join("-")]);const R=[];if(m!==x){let te=[...m];for(let B=0;B<S.length;B++){const ne=S[B],ie=as(ne);g.includes(ie)||(te.splice(B,0,ne),R.push(ne))}u==="wait"&&R.length&&(te=R),E(bp(te)),k(m);return}const{forceRender:$}=M.useContext(zc);return jn.jsx(jn.Fragment,{children:S.map(te=>{const B=as(te),ne=c&&!d?!1:m===S||g.includes(B),ie=()=>{if(w.has(B))w.set(B,!0);else return;let Y=!0;w.forEach(Q=>{Q||(Y=!1)}),Y&&($?.(),E(v.current),c&&h?.(),a&&a())};return jn.jsx(cw,{isPresent:ne,initial:!b.current||o?void 0:!1,custom:ne?void 0:n,presenceAffectsLayout:s,mode:u,onExitComplete:ne?void 0:ie,children:te},B)})})},Bt=t=>t;let Og=Bt;function Bc(t){let n;return()=>(n===void 0&&(n=t()),n)}const ko=(t,n,o)=>{const a=n-t;return a===0?1:(o-t)/a},zn=t=>t*1e3,In=t=>t/1e3,dw={useManualTiming:!1};function hw(t){let n=new Set,o=new Set,a=!1,s=!1;const u=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function d(m){u.has(m)&&(h.schedule(m),t()),m(c)}const h={schedule:(m,g=!1,b=!1)=>{const w=b&&a?n:o;return g&&u.add(m),w.has(m)||w.add(m),m},cancel:m=>{o.delete(m),u.delete(m)},process:m=>{if(c=m,a){s=!0;return}a=!0,[n,o]=[o,n],n.forEach(d),n.clear(),a=!1,s&&(s=!1,h.process(m))}};return h}const ss=["read","resolveKeyframes","update","preRender","render","postRender"],pw=40;function Cg(t,n){let o=!1,a=!0;const s={delta:0,timestamp:0,isProcessing:!1},u=()=>o=!0,c=ss.reduce((E,R)=>(E[R]=hw(u),E),{}),{read:d,resolveKeyframes:h,update:m,preRender:g,render:b,postRender:v}=c,w=()=>{const E=performance.now();o=!1,s.delta=a?1e3/60:Math.max(Math.min(E-s.timestamp,pw),1),s.timestamp=E,s.isProcessing=!0,d.process(s),h.process(s),m.process(s),g.process(s),b.process(s),v.process(s),s.isProcessing=!1,o&&n&&(a=!1,t(w))},x=()=>{o=!0,a=!0,s.isProcessing||t(w)};return{schedule:ss.reduce((E,R)=>{const $=c[R];return E[R]=(te,B=!1,ne=!1)=>(o||x(),$.schedule(te,B,ne)),E},{}),cancel:E=>{for(let R=0;R<ss.length;R++)c[ss[R]].cancel(E)},state:s,steps:c}}const{schedule:Ye,cancel:fr,state:wt,steps:$u}=Cg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Bt,!0),Eg=M.createContext({strict:!1}),wp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Po={};for(const t in wp)Po[t]={isEnabled:n=>wp[t].some(o=>!!n[o])};function mw(t){for(const n in t)Po[n]={...Po[n],...t[n]}}const gw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ks(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||gw.has(t)}let Mg=t=>!ks(t);function yw(t){t&&(Mg=n=>n.startsWith("on")?!ks(n):t(n))}try{yw(require("@emotion/is-prop-valid").default)}catch{}function vw(t,n,o){const a={};for(const s in t)s==="values"&&typeof t.values=="object"||(Mg(s)||o===!0&&ks(s)||!n&&!ks(s)||t.draggable&&s.startsWith("onDrag"))&&(a[s]=t[s]);return a}function bw(t){if(typeof Proxy>"u")return t;const n=new Map,o=(...a)=>t(...a);return new Proxy(o,{get:(a,s)=>s==="create"?t:(n.has(s)||n.set(s,t(s)),n.get(s))})}const Ns=M.createContext({});function Li(t){return typeof t=="string"||Array.isArray(t)}function zs(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const $c=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Uc=["initial",...$c];function Is(t){return zs(t.animate)||Uc.some(n=>Li(t[n]))}function Dg(t){return!!(Is(t)||t.variants)}function ww(t,n){if(Is(t)){const{initial:o,animate:a}=t;return{initial:o===!1||Li(o)?o:void 0,animate:Li(a)?a:void 0}}return t.inherit!==!1?n:{}}function xw(t){const{initial:n,animate:o}=ww(t,M.useContext(Ns));return M.useMemo(()=>({initial:n,animate:o}),[xp(n),xp(o)])}function xp(t){return Array.isArray(t)?t.join(" "):t}const kw=Symbol.for("motionComponentSymbol");function po(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Pw(t,n,o){return M.useCallback(a=>{a&&t.onMount&&t.onMount(a),n&&(a?n.mount(a):n.unmount()),o&&(typeof o=="function"?o(a):po(o)&&(o.current=a))},[n])}const Wc=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Sw="framerAppearId",_g="data-"+Wc(Sw),{schedule:qc}=Cg(queueMicrotask,!1),Ag=M.createContext({});function Tw(t,n,o,a,s){var u,c;const{visualElement:d}=M.useContext(Ns),h=M.useContext(Eg),m=M.useContext(js),g=M.useContext(Vc).reducedMotion,b=M.useRef(null);a=a||h.renderer,!b.current&&a&&(b.current=a(t,{visualState:n,parent:d,props:o,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:g}));const v=b.current,w=M.useContext(Ag);v&&!v.projection&&s&&(v.type==="html"||v.type==="svg")&&Ow(b.current,o,s,w);const x=M.useRef(!1);M.useInsertionEffect(()=>{v&&x.current&&v.update(o,m)});const k=o[_g],S=M.useRef(!!k&&!(!((u=window.MotionHandoffIsComplete)===null||u===void 0)&&u.call(window,k))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,k)));return Tg(()=>{v&&(x.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),qc.render(v.render),S.current&&v.animationState&&v.animationState.animateChanges())}),M.useEffect(()=>{v&&(!S.current&&v.animationState&&v.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)===null||E===void 0||E.call(window,k)}),S.current=!1))}),v}function Ow(t,n,o,a){const{layoutId:s,layout:u,drag:c,dragConstraints:d,layoutScroll:h,layoutRoot:m}=n;t.projection=new o(t.latestValues,n["data-framer-portal-id"]?void 0:Rg(t.parent)),t.projection.setOptions({layoutId:s,layout:u,alwaysMeasureLayout:!!c||d&&po(d),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,layoutScroll:h,layoutRoot:m})}function Rg(t){if(t)return t.options.allowProjection!==!1?t.projection:Rg(t.parent)}function Cw({preloadedFeatures:t,createVisualElement:n,useRender:o,useVisualState:a,Component:s}){var u,c;t&&mw(t);function d(m,g){let b;const v={...M.useContext(Vc),...m,layoutId:Ew(m)},{isStatic:w}=v,x=xw(m),k=a(m,w);if(!w&&Fc){Mw();const S=Dw(v);b=S.MeasureLayout,x.visualElement=Tw(s,k,v,n,S.ProjectionNode)}return jn.jsxs(Ns.Provider,{value:x,children:[b&&x.visualElement?jn.jsx(b,{visualElement:x.visualElement,...v}):null,o(s,m,Pw(k,x.visualElement,g),k,w,x.visualElement)]})}d.displayName=`motion.${typeof s=="string"?s:`create(${(c=(u=s.displayName)!==null&&u!==void 0?u:s.name)!==null&&c!==void 0?c:""})`}`;const h=M.forwardRef(d);return h[kw]=s,h}function Ew({layoutId:t}){const n=M.useContext(zc).id;return n&&t!==void 0?n+"-"+t:t}function Mw(t,n){M.useContext(Eg).strict}function Dw(t){const{drag:n,layout:o}=Po;if(!n&&!o)return{};const a={...n,...o};return{MeasureLayout:n?.isEnabled(t)||o?.isEnabled(t)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const _w=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Hc(t){return typeof t!="string"||t.includes("-")?!1:!!(_w.indexOf(t)>-1||/[A-Z]/u.test(t))}function kp(t){const n=[{},{}];return t?.values.forEach((o,a)=>{n[0][a]=o.get(),n[1][a]=o.getVelocity()}),n}function Yc(t,n,o,a){if(typeof n=="function"){const[s,u]=kp(a);n=n(o!==void 0?o:t.custom,s,u)}if(typeof n=="string"&&(n=t.variants&&t.variants[n]),typeof n=="function"){const[s,u]=kp(a);n=n(o!==void 0?o:t.custom,s,u)}return n}const pc=t=>Array.isArray(t),Aw=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Rw=t=>pc(t)?t[t.length-1]||0:t,Ot=t=>!!(t&&t.getVelocity);function ys(t){const n=Ot(t)?t.get():t;return Aw(n)?n.toValue():n}function Lw({scrapeMotionValuesFromProps:t,createRenderState:n,onUpdate:o},a,s,u){const c={latestValues:jw(a,s,u,t),renderState:n()};return o&&(c.onMount=d=>o({props:a,current:d,...c}),c.onUpdate=d=>o(d)),c}const Lg=t=>(n,o)=>{const a=M.useContext(Ns),s=M.useContext(js),u=()=>Lw(t,n,a,s);return o?u():Ic(u)};function jw(t,n,o,a){const s={},u=a(t,{});for(const v in u)s[v]=ys(u[v]);let{initial:c,animate:d}=t;const h=Is(t),m=Dg(t);n&&m&&!h&&t.inherit!==!1&&(c===void 0&&(c=n.initial),d===void 0&&(d=n.animate));let g=o?o.initial===!1:!1;g=g||c===!1;const b=g?d:c;if(b&&typeof b!="boolean"&&!zs(b)){const v=Array.isArray(b)?b:[b];for(let w=0;w<v.length;w++){const x=Yc(t,v[w]);if(x){const{transitionEnd:k,transition:S,...E}=x;for(const R in E){let $=E[R];if(Array.isArray($)){const te=g?$.length-1:0;$=$[te]}$!==null&&(s[R]=$)}for(const R in k)s[R]=k[R]}}}return s}const Eo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Nr=new Set(Eo),jg=t=>n=>typeof n=="string"&&n.startsWith(t),Ng=jg("--"),Nw=jg("var(--"),Kc=t=>Nw(t)?zw.test(t.split("/*")[0].trim()):!1,zw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,zg=(t,n)=>n&&typeof t=="number"?n.transform(t):t,Fn=(t,n,o)=>o>n?n:o<t?t:o,Mo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ji={...Mo,transform:t=>Fn(0,1,t)},ls={...Mo,default:1},Ui=t=>({test:n=>typeof n=="string"&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),cr=Ui("deg"),wn=Ui("%"),be=Ui("px"),Iw=Ui("vh"),Vw=Ui("vw"),Pp={...wn,parse:t=>wn.parse(t)/100,transform:t=>wn.transform(t*100)},Fw={borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,backgroundPositionX:be,backgroundPositionY:be},Bw={rotate:cr,rotateX:cr,rotateY:cr,rotateZ:cr,scale:ls,scaleX:ls,scaleY:ls,scaleZ:ls,skew:cr,skewX:cr,skewY:cr,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:ji,originX:Pp,originY:Pp,originZ:be},Sp={...Mo,transform:Math.round},Gc={...Fw,...Bw,zIndex:Sp,size:be,fillOpacity:ji,strokeOpacity:ji,numOctaves:Sp},$w={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Uw=Eo.length;function Ww(t,n,o){let a="",s=!0;for(let u=0;u<Uw;u++){const c=Eo[u],d=t[c];if(d===void 0)continue;let h=!0;if(typeof d=="number"?h=d===(c.startsWith("scale")?1:0):h=parseFloat(d)===0,!h||o){const m=zg(d,Gc[c]);if(!h){s=!1;const g=$w[c]||c;a+=`${g}(${m}) `}o&&(n[c]=m)}}return a=a.trim(),o?a=o(n,s?"":a):s&&(a="none"),a}function Xc(t,n,o){const{style:a,vars:s,transformOrigin:u}=t;let c=!1,d=!1;for(const h in n){const m=n[h];if(Nr.has(h)){c=!0;continue}else if(Ng(h)){s[h]=m;continue}else{const g=zg(m,Gc[h]);h.startsWith("origin")?(d=!0,u[h]=g):a[h]=g}}if(n.transform||(c||o?a.transform=Ww(n,t.transform,o):a.transform&&(a.transform="none")),d){const{originX:h="50%",originY:m="50%",originZ:g=0}=u;a.transformOrigin=`${h} ${m} ${g}`}}const qw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Hw={offset:"strokeDashoffset",array:"strokeDasharray"};function Yw(t,n,o=1,a=0,s=!0){t.pathLength=1;const u=s?qw:Hw;t[u.offset]=be.transform(-a);const c=be.transform(n),d=be.transform(o);t[u.array]=`${c} ${d}`}function Tp(t,n,o){return typeof t=="string"?t:be.transform(n+o*t)}function Kw(t,n,o){const a=Tp(n,t.x,t.width),s=Tp(o,t.y,t.height);return`${a} ${s}`}function Qc(t,{attrX:n,attrY:o,attrScale:a,originX:s,originY:u,pathLength:c,pathSpacing:d=1,pathOffset:h=0,...m},g,b){if(Xc(t,m,b),g){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:v,style:w,dimensions:x}=t;v.transform&&(x&&(w.transform=v.transform),delete v.transform),x&&(s!==void 0||u!==void 0||w.transform)&&(w.transformOrigin=Kw(x,s!==void 0?s:.5,u!==void 0?u:.5)),n!==void 0&&(v.x=n),o!==void 0&&(v.y=o),a!==void 0&&(v.scale=a),c!==void 0&&Yw(v,c,d,h,!1)}const Zc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Ig=()=>({...Zc(),attrs:{}}),Jc=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Vg(t,{style:n,vars:o},a,s){Object.assign(t.style,n,s&&s.getProjectionStyles(a));for(const u in o)t.style.setProperty(u,o[u])}const Fg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Bg(t,n,o,a){Vg(t,n,void 0,a);for(const s in n.attrs)t.setAttribute(Fg.has(s)?s:Wc(s),n.attrs[s])}const Ps={};function Gw(t){Object.assign(Ps,t)}function $g(t,{layout:n,layoutId:o}){return Nr.has(t)||t.startsWith("origin")||(n||o!==void 0)&&(!!Ps[t]||t==="opacity")}function ef(t,n,o){var a;const{style:s}=t,u={};for(const c in s)(Ot(s[c])||n.style&&Ot(n.style[c])||$g(c,t)||((a=o?.getValue(c))===null||a===void 0?void 0:a.liveStyle)!==void 0)&&(u[c]=s[c]);return u}function Ug(t,n,o){const a=ef(t,n,o);for(const s in t)if(Ot(t[s])||Ot(n[s])){const u=Eo.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;a[u]=t[s]}return a}function Xw(t,n){try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}const Op=["x","y","width","height","cx","cy","r"],Qw={useVisualState:Lg({scrapeMotionValuesFromProps:Ug,createRenderState:Ig,onUpdate:({props:t,prevProps:n,current:o,renderState:a,latestValues:s})=>{if(!o)return;let u=!!t.drag;if(!u){for(const d in s)if(Nr.has(d)){u=!0;break}}if(!u)return;let c=!n;if(n)for(let d=0;d<Op.length;d++){const h=Op[d];t[h]!==n[h]&&(c=!0)}c&&Ye.read(()=>{Xw(o,a),Ye.render(()=>{Qc(a,s,Jc(o.tagName),t.transformTemplate),Bg(o,a)})})}})},Zw={useVisualState:Lg({scrapeMotionValuesFromProps:ef,createRenderState:Zc})};function Wg(t,n,o){for(const a in n)!Ot(n[a])&&!$g(a,o)&&(t[a]=n[a])}function Jw({transformTemplate:t},n){return M.useMemo(()=>{const o=Zc();return Xc(o,n,t),Object.assign({},o.vars,o.style)},[n])}function ex(t,n){const o=t.style||{},a={};return Wg(a,o,t),Object.assign(a,Jw(t,n)),a}function tx(t,n){const o={},a=ex(t,n);return t.drag&&t.dragListener!==!1&&(o.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(o.tabIndex=0),o.style=a,o}function nx(t,n,o,a){const s=M.useMemo(()=>{const u=Ig();return Qc(u,n,Jc(a),t.transformTemplate),{...u.attrs,style:{...u.style}}},[n]);if(t.style){const u={};Wg(u,t.style,t),s.style={...u,...s.style}}return s}function rx(t=!1){return(o,a,s,{latestValues:u},c)=>{const h=(Hc(o)?nx:tx)(a,u,c,o),m=vw(a,typeof o=="string",t),g=o!==M.Fragment?{...m,...h,ref:s}:{},{children:b}=a,v=M.useMemo(()=>Ot(b)?b.get():b,[b]);return M.createElement(o,{...g,children:v})}}function ox(t,n){return function(a,{forwardMotionProps:s}={forwardMotionProps:!1}){const c={...Hc(a)?Qw:Zw,preloadedFeatures:t,useRender:rx(s),createVisualElement:n,Component:a};return Cw(c)}}function qg(t,n){if(!Array.isArray(n))return!1;const o=n.length;if(o!==t.length)return!1;for(let a=0;a<o;a++)if(n[a]!==t[a])return!1;return!0}function Vs(t,n,o){const a=t.getProps();return Yc(a,n,o!==void 0?o:a.custom,t)}const ix=Bc(()=>window.ScrollTimeline!==void 0);class ax{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>"finished"in n?n.finished:n))}getAll(n){return this.animations[0][n]}setAll(n,o){for(let a=0;a<this.animations.length;a++)this.animations[a][n]=o}attachTimeline(n,o){const a=this.animations.map(s=>{if(ix()&&s.attachTimeline)return s.attachTimeline(n);if(typeof o=="function")return o(s)});return()=>{a.forEach((s,u)=>{s&&s(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get startTime(){return this.getAll("startTime")}get duration(){let n=0;for(let o=0;o<this.animations.length;o++)n=Math.max(n,this.animations[o].duration);return n}runAll(n){this.animations.forEach(o=>o[n]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class sx extends ax{then(n,o){return Promise.all(this.animations).then(n).catch(o)}}function tf(t,n){return t?t[n]||t.default||t:void 0}const mc=2e4;function Hg(t){let n=0;const o=50;let a=t.next(n);for(;!a.done&&n<mc;)n+=o,a=t.next(n);return n>=mc?1/0:n}function nf(t){return typeof t=="function"}function Cp(t,n){t.timeline=n,t.onfinish=null}const rf=t=>Array.isArray(t)&&typeof t[0]=="number",lx={linearEasing:void 0};function ux(t,n){const o=Bc(t);return()=>{var a;return(a=lx[n])!==null&&a!==void 0?a:o()}}const Ss=ux(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Yg=(t,n,o=10)=>{let a="";const s=Math.max(Math.round(n/o),2);for(let u=0;u<s;u++)a+=t(ko(0,s-1,u))+", ";return`linear(${a.substring(0,a.length-2)})`};function Kg(t){return!!(typeof t=="function"&&Ss()||!t||typeof t=="string"&&(t in gc||Ss())||rf(t)||Array.isArray(t)&&t.every(Kg))}const Ti=([t,n,o,a])=>`cubic-bezier(${t}, ${n}, ${o}, ${a})`,gc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ti([0,.65,.55,1]),circOut:Ti([.55,0,1,.45]),backIn:Ti([.31,.01,.66,-.59]),backOut:Ti([.33,1.53,.69,.99])};function Gg(t,n){if(t)return typeof t=="function"&&Ss()?Yg(t,n):rf(t)?Ti(t):Array.isArray(t)?t.map(o=>Gg(o,n)||gc.easeOut):gc[t]}const sn={x:!1,y:!1};function Xg(){return sn.x||sn.y}function cx(t,n,o){var a;if(t instanceof Element)return[t];if(typeof t=="string"){let s=document;const u=(a=void 0)!==null&&a!==void 0?a:s.querySelectorAll(t);return u?Array.from(u):[]}return Array.from(t)}function Qg(t,n){const o=cx(t),a=new AbortController,s={passive:!0,...n,signal:a.signal};return[o,s,()=>a.abort()]}function Ep(t){return n=>{n.pointerType==="touch"||Xg()||t(n)}}function fx(t,n,o={}){const[a,s,u]=Qg(t,o),c=Ep(d=>{const{target:h}=d,m=n(d);if(typeof m!="function"||!h)return;const g=Ep(b=>{m(b),h.removeEventListener("pointerleave",g)});h.addEventListener("pointerleave",g,s)});return a.forEach(d=>{d.addEventListener("pointerenter",c,s)}),u}const Zg=(t,n)=>n?t===n?!0:Zg(t,n.parentElement):!1,of=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,dx=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function hx(t){return dx.has(t.tagName)||t.tabIndex!==-1}const Oi=new WeakSet;function Mp(t){return n=>{n.key==="Enter"&&t(n)}}function Uu(t,n){t.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const px=(t,n)=>{const o=t.currentTarget;if(!o)return;const a=Mp(()=>{if(Oi.has(o))return;Uu(o,"down");const s=Mp(()=>{Uu(o,"up")}),u=()=>Uu(o,"cancel");o.addEventListener("keyup",s,n),o.addEventListener("blur",u,n)});o.addEventListener("keydown",a,n),o.addEventListener("blur",()=>o.removeEventListener("keydown",a),n)};function Dp(t){return of(t)&&!Xg()}function mx(t,n,o={}){const[a,s,u]=Qg(t,o),c=d=>{const h=d.currentTarget;if(!Dp(d)||Oi.has(h))return;Oi.add(h);const m=n(d),g=(w,x)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",v),!(!Dp(w)||!Oi.has(h))&&(Oi.delete(h),typeof m=="function"&&m(w,{success:x}))},b=w=>{g(w,o.useGlobalTarget||Zg(h,w.target))},v=w=>{g(w,!1)};window.addEventListener("pointerup",b,s),window.addEventListener("pointercancel",v,s)};return a.forEach(d=>{!hx(d)&&d.getAttribute("tabindex")===null&&(d.tabIndex=0),(o.useGlobalTarget?window:d).addEventListener("pointerdown",c,s),d.addEventListener("focus",m=>px(m,s),s)}),u}function gx(t){return t==="x"||t==="y"?sn[t]?null:(sn[t]=!0,()=>{sn[t]=!1}):sn.x||sn.y?null:(sn.x=sn.y=!0,()=>{sn.x=sn.y=!1})}const Jg=new Set(["width","height","top","left","right","bottom",...Eo]);let vs;function yx(){vs=void 0}const xn={now:()=>(vs===void 0&&xn.set(wt.isProcessing||dw.useManualTiming?wt.timestamp:performance.now()),vs),set:t=>{vs=t,queueMicrotask(yx)}};function af(t,n){t.indexOf(n)===-1&&t.push(n)}function sf(t,n){const o=t.indexOf(n);o>-1&&t.splice(o,1)}class lf{constructor(){this.subscriptions=[]}add(n){return af(this.subscriptions,n),()=>sf(this.subscriptions,n)}notify(n,o,a){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](n,o,a);else for(let u=0;u<s;u++){const c=this.subscriptions[u];c&&c(n,o,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function ey(t,n){return n?t*(1e3/n):0}const _p=30,vx=t=>!isNaN(parseFloat(t));class bx{constructor(n,o={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,s=!0)=>{const u=xn.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(n),this.owner=o.owner}setCurrent(n){this.current=n,this.updatedAt=xn.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=vx(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,o){this.events[n]||(this.events[n]=new lf);const a=this.events[n].add(o);return n==="change"?()=>{a(),Ye.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,o){this.passiveEffect=n,this.stopPassiveEffect=o}set(n,o=!0){!o||!this.passiveEffect?this.updateAndNotify(n,o):this.passiveEffect(n,this.updateAndNotify)}setWithVelocity(n,o,a){this.set(o),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-a}jump(n,o=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=xn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>_p)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,_p);return ey(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(n){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=n(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ni(t,n){return new bx(t,n)}function wx(t,n,o){t.hasValue(n)?t.getValue(n).set(o):t.addValue(n,Ni(o))}function xx(t,n){const o=Vs(t,n);let{transitionEnd:a={},transition:s={},...u}=o||{};u={...u,...a};for(const c in u){const d=Rw(u[c]);wx(t,c,d)}}function kx(t){return!!(Ot(t)&&t.add)}function yc(t,n){const o=t.getValue("willChange");if(kx(o))return o.add(n)}function ty(t){return t.props[_g]}const ny=(t,n,o)=>(((1-3*o+3*n)*t+(3*o-6*n))*t+3*n)*t,Px=1e-7,Sx=12;function Tx(t,n,o,a,s){let u,c,d=0;do c=n+(o-n)/2,u=ny(c,a,s)-t,u>0?o=c:n=c;while(Math.abs(u)>Px&&++d<Sx);return c}function Wi(t,n,o,a){if(t===n&&o===a)return Bt;const s=u=>Tx(u,0,1,t,o);return u=>u===0||u===1?u:ny(s(u),n,a)}const ry=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,oy=t=>n=>1-t(1-n),iy=Wi(.33,1.53,.69,.99),uf=oy(iy),ay=ry(uf),sy=t=>(t*=2)<1?.5*uf(t):.5*(2-Math.pow(2,-10*(t-1))),cf=t=>1-Math.sin(Math.acos(t)),ly=oy(cf),uy=ry(cf),cy=t=>/^0[^.\s]+$/u.test(t);function Ox(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||cy(t):!0}const Mi=t=>Math.round(t*1e5)/1e5,ff=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Cx(t){return t==null}const Ex=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,df=(t,n)=>o=>!!(typeof o=="string"&&Ex.test(o)&&o.startsWith(t)||n&&!Cx(o)&&Object.prototype.hasOwnProperty.call(o,n)),fy=(t,n,o)=>a=>{if(typeof a!="string")return a;const[s,u,c,d]=a.match(ff);return{[t]:parseFloat(s),[n]:parseFloat(u),[o]:parseFloat(c),alpha:d!==void 0?parseFloat(d):1}},Mx=t=>Fn(0,255,t),Wu={...Mo,transform:t=>Math.round(Mx(t))},Rr={test:df("rgb","red"),parse:fy("red","green","blue"),transform:({red:t,green:n,blue:o,alpha:a=1})=>"rgba("+Wu.transform(t)+", "+Wu.transform(n)+", "+Wu.transform(o)+", "+Mi(ji.transform(a))+")"};function Dx(t){let n="",o="",a="",s="";return t.length>5?(n=t.substring(1,3),o=t.substring(3,5),a=t.substring(5,7),s=t.substring(7,9)):(n=t.substring(1,2),o=t.substring(2,3),a=t.substring(3,4),s=t.substring(4,5),n+=n,o+=o,a+=a,s+=s),{red:parseInt(n,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:s?parseInt(s,16)/255:1}}const vc={test:df("#"),parse:Dx,transform:Rr.transform},mo={test:df("hsl","hue"),parse:fy("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:o,alpha:a=1})=>"hsla("+Math.round(t)+", "+wn.transform(Mi(n))+", "+wn.transform(Mi(o))+", "+Mi(ji.transform(a))+")"},Tt={test:t=>Rr.test(t)||vc.test(t)||mo.test(t),parse:t=>Rr.test(t)?Rr.parse(t):mo.test(t)?mo.parse(t):vc.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Rr.transform(t):mo.transform(t)},_x=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ax(t){var n,o;return isNaN(t)&&typeof t=="string"&&(((n=t.match(ff))===null||n===void 0?void 0:n.length)||0)+(((o=t.match(_x))===null||o===void 0?void 0:o.length)||0)>0}const dy="number",hy="color",Rx="var",Lx="var(",Ap="${}",jx=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function zi(t){const n=t.toString(),o=[],a={color:[],number:[],var:[]},s=[];let u=0;const d=n.replace(jx,h=>(Tt.test(h)?(a.color.push(u),s.push(hy),o.push(Tt.parse(h))):h.startsWith(Lx)?(a.var.push(u),s.push(Rx),o.push(h)):(a.number.push(u),s.push(dy),o.push(parseFloat(h))),++u,Ap)).split(Ap);return{values:o,split:d,indexes:a,types:s}}function py(t){return zi(t).values}function my(t){const{split:n,types:o}=zi(t),a=n.length;return s=>{let u="";for(let c=0;c<a;c++)if(u+=n[c],s[c]!==void 0){const d=o[c];d===dy?u+=Mi(s[c]):d===hy?u+=Tt.transform(s[c]):u+=s[c]}return u}}const Nx=t=>typeof t=="number"?0:t;function zx(t){const n=py(t);return my(t)(n.map(Nx))}const dr={test:Ax,parse:py,createTransformer:my,getAnimatableNone:zx},Ix=new Set(["brightness","contrast","saturate","opacity"]);function Vx(t){const[n,o]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[a]=o.match(ff)||[];if(!a)return t;const s=o.replace(a,"");let u=Ix.has(n)?1:0;return a!==o&&(u*=100),n+"("+u+s+")"}const Fx=/\b([a-z-]*)\(.*?\)/gu,bc={...dr,getAnimatableNone:t=>{const n=t.match(Fx);return n?n.map(Vx).join(" "):t}},Bx={...Gc,color:Tt,backgroundColor:Tt,outlineColor:Tt,fill:Tt,stroke:Tt,borderColor:Tt,borderTopColor:Tt,borderRightColor:Tt,borderBottomColor:Tt,borderLeftColor:Tt,filter:bc,WebkitFilter:bc},hf=t=>Bx[t];function gy(t,n){let o=hf(t);return o!==bc&&(o=dr),o.getAnimatableNone?o.getAnimatableNone(n):void 0}const $x=new Set(["auto","none","0"]);function Ux(t,n,o){let a=0,s;for(;a<t.length&&!s;){const u=t[a];typeof u=="string"&&!$x.has(u)&&zi(u).values.length&&(s=t[a]),a++}if(s&&o)for(const u of n)t[u]=gy(o,s)}const Rp=t=>t===Mo||t===be,Lp=(t,n)=>parseFloat(t.split(", ")[n]),jp=(t,n)=>(o,{transform:a})=>{if(a==="none"||!a)return 0;const s=a.match(/^matrix3d\((.+)\)$/u);if(s)return Lp(s[1],n);{const u=a.match(/^matrix\((.+)\)$/u);return u?Lp(u[1],t):0}},Wx=new Set(["x","y","z"]),qx=Eo.filter(t=>!Wx.has(t));function Hx(t){const n=[];return qx.forEach(o=>{const a=t.getValue(o);a!==void 0&&(n.push([o,a.get()]),a.set(o.startsWith("scale")?1:0))}),n}const So={width:({x:t},{paddingLeft:n="0",paddingRight:o="0"})=>t.max-t.min-parseFloat(n)-parseFloat(o),height:({y:t},{paddingTop:n="0",paddingBottom:o="0"})=>t.max-t.min-parseFloat(n)-parseFloat(o),top:(t,{top:n})=>parseFloat(n),left:(t,{left:n})=>parseFloat(n),bottom:({y:t},{top:n})=>parseFloat(n)+(t.max-t.min),right:({x:t},{left:n})=>parseFloat(n)+(t.max-t.min),x:jp(4,13),y:jp(5,14)};So.translateX=So.x;So.translateY=So.y;const Lr=new Set;let wc=!1,xc=!1;function yy(){if(xc){const t=Array.from(Lr).filter(a=>a.needsMeasurement),n=new Set(t.map(a=>a.element)),o=new Map;n.forEach(a=>{const s=Hx(a);s.length&&(o.set(a,s),a.render())}),t.forEach(a=>a.measureInitialState()),n.forEach(a=>{a.render();const s=o.get(a);s&&s.forEach(([u,c])=>{var d;(d=a.getValue(u))===null||d===void 0||d.set(c)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}xc=!1,wc=!1,Lr.forEach(t=>t.complete()),Lr.clear()}function vy(){Lr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(xc=!0)})}function Yx(){vy(),yy()}class pf{constructor(n,o,a,s,u,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...n],this.onComplete=o,this.name=a,this.motionValue=s,this.element=u,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Lr.add(this),wc||(wc=!0,Ye.read(vy),Ye.resolveKeyframes(yy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:o,element:a,motionValue:s}=this;for(let u=0;u<n.length;u++)if(n[u]===null)if(u===0){const c=s?.get(),d=n[n.length-1];if(c!==void 0)n[0]=c;else if(a&&o){const h=a.readValue(o,d);h!=null&&(n[0]=h)}n[0]===void 0&&(n[0]=d),s&&c===void 0&&s.set(n[0])}else n[u]=n[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Lr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Lr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const by=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Kx=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Gx(t){const n=Kx.exec(t);if(!n)return[,];const[,o,a,s]=n;return[`--${o??a}`,s]}function wy(t,n,o=1){const[a,s]=Gx(t);if(!a)return;const u=window.getComputedStyle(n).getPropertyValue(a);if(u){const c=u.trim();return by(c)?parseFloat(c):c}return Kc(s)?wy(s,n,o+1):s}const xy=t=>n=>n.test(t),Xx={test:t=>t==="auto",parse:t=>t},ky=[Mo,be,wn,cr,Vw,Iw,Xx],Np=t=>ky.find(xy(t));class Py extends pf{constructor(n,o,a,s,u){super(n,o,a,s,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:o,name:a}=this;if(!o||!o.current)return;super.readKeyframes();for(let h=0;h<n.length;h++){let m=n[h];if(typeof m=="string"&&(m=m.trim(),Kc(m))){const g=wy(m,o.current);g!==void 0&&(n[h]=g),h===n.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!Jg.has(a)||n.length!==2)return;const[s,u]=n,c=Np(s),d=Np(u);if(c!==d)if(Rp(c)&&Rp(d))for(let h=0;h<n.length;h++){const m=n[h];typeof m=="string"&&(n[h]=parseFloat(m))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:o}=this,a=[];for(let s=0;s<n.length;s++)Ox(n[s])&&a.push(s);a.length&&Ux(n,a,o)}measureInitialState(){const{element:n,unresolvedKeyframes:o,name:a}=this;if(!n||!n.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=So[a](n.measureViewportBox(),window.getComputedStyle(n.current)),o[0]=this.measuredOrigin;const s=o[o.length-1];s!==void 0&&n.getValue(a,s).jump(s,!1)}measureEndState(){var n;const{element:o,name:a,unresolvedKeyframes:s}=this;if(!o||!o.current)return;const u=o.getValue(a);u&&u.jump(this.measuredOrigin,!1);const c=s.length-1,d=s[c];s[c]=So[a](o.measureViewportBox(),window.getComputedStyle(o.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),!((n=this.removedTransforms)===null||n===void 0)&&n.length&&this.removedTransforms.forEach(([h,m])=>{o.getValue(h).set(m)}),this.resolveNoneKeyframes()}}const zp=(t,n)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(dr.test(t)||t==="0")&&!t.startsWith("url("));function Qx(t){const n=t[0];if(t.length===1)return!0;for(let o=0;o<t.length;o++)if(t[o]!==n)return!0}function Zx(t,n,o,a){const s=t[0];if(s===null)return!1;if(n==="display"||n==="visibility")return!0;const u=t[t.length-1],c=zp(s,n),d=zp(u,n);return!c||!d?!1:Qx(t)||(o==="spring"||nf(o))&&a}const Jx=t=>t!==null;function Fs(t,{repeat:n,repeatType:o="loop"},a){const s=t.filter(Jx),u=n&&o!=="loop"&&n%2===1?0:s.length-1;return!u||a===void 0?s[u]:a}const ek=40;class Sy{constructor({autoplay:n=!0,delay:o=0,type:a="keyframes",repeat:s=0,repeatDelay:u=0,repeatType:c="loop",...d}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=xn.now(),this.options={autoplay:n,delay:o,type:a,repeat:s,repeatDelay:u,repeatType:c,...d},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>ek?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Yx(),this._resolved}onKeyframesResolved(n,o){this.resolvedAt=xn.now(),this.hasAttemptedResolve=!0;const{name:a,type:s,velocity:u,delay:c,onComplete:d,onUpdate:h,isGenerator:m}=this.options;if(!m&&!Zx(n,a,s,u))if(c)this.options.duration=0;else{h&&h(Fs(n,this.options,o)),d&&d(),this.resolveFinishedPromise();return}const g=this.initPlayback(n,o);g!==!1&&(this._resolved={keyframes:n,finalKeyframe:o,...g},this.onPostResolved())}onPostResolved(){}then(n,o){return this.currentFinishedPromise.then(n,o)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(n=>{this.resolveFinishedPromise=n})}}const Je=(t,n,o)=>t+(n-t)*o;function qu(t,n,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(n-t)*6*o:o<1/2?n:o<2/3?t+(n-t)*(2/3-o)*6:t}function tk({hue:t,saturation:n,lightness:o,alpha:a}){t/=360,n/=100,o/=100;let s=0,u=0,c=0;if(!n)s=u=c=o;else{const d=o<.5?o*(1+n):o+n-o*n,h=2*o-d;s=qu(h,d,t+1/3),u=qu(h,d,t),c=qu(h,d,t-1/3)}return{red:Math.round(s*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:a}}function Ts(t,n){return o=>o>0?n:t}const Hu=(t,n,o)=>{const a=t*t,s=o*(n*n-a)+a;return s<0?0:Math.sqrt(s)},nk=[vc,Rr,mo],rk=t=>nk.find(n=>n.test(t));function Ip(t){const n=rk(t);if(!n)return!1;let o=n.parse(t);return n===mo&&(o=tk(o)),o}const Vp=(t,n)=>{const o=Ip(t),a=Ip(n);if(!o||!a)return Ts(t,n);const s={...o};return u=>(s.red=Hu(o.red,a.red,u),s.green=Hu(o.green,a.green,u),s.blue=Hu(o.blue,a.blue,u),s.alpha=Je(o.alpha,a.alpha,u),Rr.transform(s))},ok=(t,n)=>o=>n(t(o)),qi=(...t)=>t.reduce(ok),kc=new Set(["none","hidden"]);function ik(t,n){return kc.has(t)?o=>o<=0?t:n:o=>o>=1?n:t}function ak(t,n){return o=>Je(t,n,o)}function mf(t){return typeof t=="number"?ak:typeof t=="string"?Kc(t)?Ts:Tt.test(t)?Vp:uk:Array.isArray(t)?Ty:typeof t=="object"?Tt.test(t)?Vp:sk:Ts}function Ty(t,n){const o=[...t],a=o.length,s=t.map((u,c)=>mf(u)(u,n[c]));return u=>{for(let c=0;c<a;c++)o[c]=s[c](u);return o}}function sk(t,n){const o={...t,...n},a={};for(const s in o)t[s]!==void 0&&n[s]!==void 0&&(a[s]=mf(t[s])(t[s],n[s]));return s=>{for(const u in a)o[u]=a[u](s);return o}}function lk(t,n){var o;const a=[],s={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const c=n.types[u],d=t.indexes[c][s[c]],h=(o=t.values[d])!==null&&o!==void 0?o:0;a[u]=h,s[c]++}return a}const uk=(t,n)=>{const o=dr.createTransformer(n),a=zi(t),s=zi(n);return a.indexes.var.length===s.indexes.var.length&&a.indexes.color.length===s.indexes.color.length&&a.indexes.number.length>=s.indexes.number.length?kc.has(t)&&!s.values.length||kc.has(n)&&!a.values.length?ik(t,n):qi(Ty(lk(a,s),s.values),o):Ts(t,n)};function Oy(t,n,o){return typeof t=="number"&&typeof n=="number"&&typeof o=="number"?Je(t,n,o):mf(t)(t,n)}const ck=5;function Cy(t,n,o){const a=Math.max(n-ck,0);return ey(o-t(a),n-a)}const it={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Fp=.001;function fk({duration:t=it.duration,bounce:n=it.bounce,velocity:o=it.velocity,mass:a=it.mass}){let s,u,c=1-n;c=Fn(it.minDamping,it.maxDamping,c),t=Fn(it.minDuration,it.maxDuration,In(t)),c<1?(s=m=>{const g=m*c,b=g*t,v=g-o,w=Pc(m,c),x=Math.exp(-b);return Fp-v/w*x},u=m=>{const b=m*c*t,v=b*o+o,w=Math.pow(c,2)*Math.pow(m,2)*t,x=Math.exp(-b),k=Pc(Math.pow(m,2),c);return(-s(m)+Fp>0?-1:1)*((v-w)*x)/k}):(s=m=>{const g=Math.exp(-m*t),b=(m-o)*t+1;return-.001+g*b},u=m=>{const g=Math.exp(-m*t),b=(o-m)*(t*t);return g*b});const d=5/t,h=hk(s,u,d);if(t=zn(t),isNaN(h))return{stiffness:it.stiffness,damping:it.damping,duration:t};{const m=Math.pow(h,2)*a;return{stiffness:m,damping:c*2*Math.sqrt(a*m),duration:t}}}const dk=12;function hk(t,n,o){let a=o;for(let s=1;s<dk;s++)a=a-t(a)/n(a);return a}function Pc(t,n){return t*Math.sqrt(1-n*n)}const pk=["duration","bounce"],mk=["stiffness","damping","mass"];function Bp(t,n){return n.some(o=>t[o]!==void 0)}function gk(t){let n={velocity:it.velocity,stiffness:it.stiffness,damping:it.damping,mass:it.mass,isResolvedFromDuration:!1,...t};if(!Bp(t,mk)&&Bp(t,pk))if(t.visualDuration){const o=t.visualDuration,a=2*Math.PI/(o*1.2),s=a*a,u=2*Fn(.05,1,1-(t.bounce||0))*Math.sqrt(s);n={...n,mass:it.mass,stiffness:s,damping:u}}else{const o=fk(t);n={...n,...o,mass:it.mass},n.isResolvedFromDuration=!0}return n}function Ey(t=it.visualDuration,n=it.bounce){const o=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:n}:t;let{restSpeed:a,restDelta:s}=o;const u=o.keyframes[0],c=o.keyframes[o.keyframes.length-1],d={done:!1,value:u},{stiffness:h,damping:m,mass:g,duration:b,velocity:v,isResolvedFromDuration:w}=gk({...o,velocity:-In(o.velocity||0)}),x=v||0,k=m/(2*Math.sqrt(h*g)),S=c-u,E=In(Math.sqrt(h/g)),R=Math.abs(S)<5;a||(a=R?it.restSpeed.granular:it.restSpeed.default),s||(s=R?it.restDelta.granular:it.restDelta.default);let $;if(k<1){const B=Pc(E,k);$=ne=>{const ie=Math.exp(-k*E*ne);return c-ie*((x+k*E*S)/B*Math.sin(B*ne)+S*Math.cos(B*ne))}}else if(k===1)$=B=>c-Math.exp(-E*B)*(S+(x+E*S)*B);else{const B=E*Math.sqrt(k*k-1);$=ne=>{const ie=Math.exp(-k*E*ne),Y=Math.min(B*ne,300);return c-ie*((x+k*E*S)*Math.sinh(Y)+B*S*Math.cosh(Y))/B}}const te={calculatedDuration:w&&b||null,next:B=>{const ne=$(B);if(w)d.done=B>=b;else{let ie=0;k<1&&(ie=B===0?zn(x):Cy($,B,ne));const Y=Math.abs(ie)<=a,Q=Math.abs(c-ne)<=s;d.done=Y&&Q}return d.value=d.done?c:ne,d},toString:()=>{const B=Math.min(Hg(te),mc),ne=Yg(ie=>te.next(B*ie).value,B,30);return B+"ms "+ne}};return te}function $p({keyframes:t,velocity:n=0,power:o=.8,timeConstant:a=325,bounceDamping:s=10,bounceStiffness:u=500,modifyTarget:c,min:d,max:h,restDelta:m=.5,restSpeed:g}){const b=t[0],v={done:!1,value:b},w=Y=>d!==void 0&&Y<d||h!==void 0&&Y>h,x=Y=>d===void 0?h:h===void 0||Math.abs(d-Y)<Math.abs(h-Y)?d:h;let k=o*n;const S=b+k,E=c===void 0?S:c(S);E!==S&&(k=E-b);const R=Y=>-k*Math.exp(-Y/a),$=Y=>E+R(Y),te=Y=>{const Q=R(Y),ve=$(Y);v.done=Math.abs(Q)<=m,v.value=v.done?E:ve};let B,ne;const ie=Y=>{w(v.value)&&(B=Y,ne=Ey({keyframes:[v.value,x(v.value)],velocity:Cy($,Y,v.value),damping:s,stiffness:u,restDelta:m,restSpeed:g}))};return ie(0),{calculatedDuration:null,next:Y=>{let Q=!1;return!ne&&B===void 0&&(Q=!0,te(Y),ie(Y)),B!==void 0&&Y>=B?ne.next(Y-B):(!Q&&te(Y),v)}}}const yk=Wi(.42,0,1,1),vk=Wi(0,0,.58,1),My=Wi(.42,0,.58,1),bk=t=>Array.isArray(t)&&typeof t[0]!="number",wk={linear:Bt,easeIn:yk,easeInOut:My,easeOut:vk,circIn:cf,circInOut:uy,circOut:ly,backIn:uf,backInOut:ay,backOut:iy,anticipate:sy},Up=t=>{if(rf(t)){Og(t.length===4);const[n,o,a,s]=t;return Wi(n,o,a,s)}else if(typeof t=="string")return wk[t];return t};function xk(t,n,o){const a=[],s=o||Oy,u=t.length-1;for(let c=0;c<u;c++){let d=s(t[c],t[c+1]);if(n){const h=Array.isArray(n)?n[c]||Bt:n;d=qi(h,d)}a.push(d)}return a}function kk(t,n,{clamp:o=!0,ease:a,mixer:s}={}){const u=t.length;if(Og(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const c=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),n=[...n].reverse());const d=xk(n,a,s),h=d.length,m=g=>{if(c&&g<t[0])return n[0];let b=0;if(h>1)for(;b<t.length-2&&!(g<t[b+1]);b++);const v=ko(t[b],t[b+1],g);return d[b](v)};return o?g=>m(Fn(t[0],t[u-1],g)):m}function Pk(t,n){const o=t[t.length-1];for(let a=1;a<=n;a++){const s=ko(0,n,a);t.push(Je(o,1,s))}}function Sk(t){const n=[0];return Pk(n,t.length-1),n}function Tk(t,n){return t.map(o=>o*n)}function Ok(t,n){return t.map(()=>n||My).splice(0,t.length-1)}function Os({duration:t=300,keyframes:n,times:o,ease:a="easeInOut"}){const s=bk(a)?a.map(Up):Up(a),u={done:!1,value:n[0]},c=Tk(o&&o.length===n.length?o:Sk(n),t),d=kk(c,n,{ease:Array.isArray(s)?s:Ok(n,s)});return{calculatedDuration:t,next:h=>(u.value=d(h),u.done=h>=t,u)}}const Ck=t=>{const n=({timestamp:o})=>t(o);return{start:()=>Ye.update(n,!0),stop:()=>fr(n),now:()=>wt.isProcessing?wt.timestamp:xn.now()}},Ek={decay:$p,inertia:$p,tween:Os,keyframes:Os,spring:Ey},Mk=t=>t/100;class gf extends Sy{constructor(n){super(n),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:o,motionValue:a,element:s,keyframes:u}=this.options,c=s?.KeyframeResolver||pf,d=(h,m)=>this.onKeyframesResolved(h,m);this.resolver=new c(u,d,o,a,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(n){const{type:o="keyframes",repeat:a=0,repeatDelay:s=0,repeatType:u,velocity:c=0}=this.options,d=nf(o)?o:Ek[o]||Os;let h,m;d!==Os&&typeof n[0]!="number"&&(h=qi(Mk,Oy(n[0],n[1])),n=[0,100]);const g=d({...this.options,keyframes:n});u==="mirror"&&(m=d({...this.options,keyframes:[...n].reverse(),velocity:-c})),g.calculatedDuration===null&&(g.calculatedDuration=Hg(g));const{calculatedDuration:b}=g,v=b+s,w=v*(a+1)-s;return{generator:g,mirroredGenerator:m,mapPercentToKeyframes:h,calculatedDuration:b,resolvedDuration:v,totalDuration:w}}onPostResolved(){const{autoplay:n=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!n?this.pause():this.state=this.pendingPlayState}tick(n,o=!1){const{resolved:a}=this;if(!a){const{keyframes:Y}=this.options;return{done:!0,value:Y[Y.length-1]}}const{finalKeyframe:s,generator:u,mirroredGenerator:c,mapPercentToKeyframes:d,keyframes:h,calculatedDuration:m,totalDuration:g,resolvedDuration:b}=a;if(this.startTime===null)return u.next(0);const{delay:v,repeat:w,repeatType:x,repeatDelay:k,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-g/this.speed,this.startTime)),o?this.currentTime=n:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(n-this.startTime)*this.speed;const E=this.currentTime-v*(this.speed>=0?1:-1),R=this.speed>=0?E<0:E>g;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let $=this.currentTime,te=u;if(w){const Y=Math.min(this.currentTime,g)/b;let Q=Math.floor(Y),ve=Y%1;!ve&&Y>=1&&(ve=1),ve===1&&Q--,Q=Math.min(Q,w+1),!!(Q%2)&&(x==="reverse"?(ve=1-ve,k&&(ve-=k/b)):x==="mirror"&&(te=c)),$=Fn(0,1,ve)*b}const B=R?{done:!1,value:h[0]}:te.next($);d&&(B.value=d(B.value));let{done:ne}=B;!R&&m!==null&&(ne=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const ie=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ne);return ie&&s!==void 0&&(B.value=Fs(h,this.options,s)),S&&S(B.value),ie&&this.finish(),B}get duration(){const{resolved:n}=this;return n?In(n.calculatedDuration):0}get time(){return In(this.currentTime)}set time(n){n=zn(n),this.currentTime=n,this.holdTime!==null||this.speed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.speed)}get speed(){return this.playbackSpeed}set speed(n){const o=this.playbackSpeed!==n;this.playbackSpeed=n,o&&(this.time=In(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:n=Ck,onPlay:o,startTime:a}=this.options;this.driver||(this.driver=n(u=>this.tick(u))),o&&o();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var n;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(n=this.currentTime)!==null&&n!==void 0?n:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:n}=this.options;n&&n()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}}const Dk=new Set(["opacity","clipPath","filter","transform"]);function _k(t,n,o,{delay:a=0,duration:s=300,repeat:u=0,repeatType:c="loop",ease:d="easeInOut",times:h}={}){const m={[n]:o};h&&(m.offset=h);const g=Gg(d,s);return Array.isArray(g)&&(m.easing=g),t.animate(m,{delay:a,duration:s,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal"})}const Ak=Bc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Cs=10,Rk=2e4;function Lk(t){return nf(t.type)||t.type==="spring"||!Kg(t.ease)}function jk(t,n){const o=new gf({...n,keyframes:t,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:t[0]};const s=[];let u=0;for(;!a.done&&u<Rk;)a=o.sample(u),s.push(a.value),u+=Cs;return{times:void 0,keyframes:s,duration:u-Cs,ease:"linear"}}const Dy={anticipate:sy,backInOut:ay,circInOut:uy};function Nk(t){return t in Dy}class Wp extends Sy{constructor(n){super(n);const{name:o,motionValue:a,element:s,keyframes:u}=this.options;this.resolver=new Py(u,(c,d)=>this.onKeyframesResolved(c,d),o,a,s),this.resolver.scheduleResolve()}initPlayback(n,o){let{duration:a=300,times:s,ease:u,type:c,motionValue:d,name:h,startTime:m}=this.options;if(!d.owner||!d.owner.current)return!1;if(typeof u=="string"&&Ss()&&Nk(u)&&(u=Dy[u]),Lk(this.options)){const{onComplete:b,onUpdate:v,motionValue:w,element:x,...k}=this.options,S=jk(n,k);n=S.keyframes,n.length===1&&(n[1]=n[0]),a=S.duration,s=S.times,u=S.ease,c="keyframes"}const g=_k(d.owner.current,h,n,{...this.options,duration:a,times:s,ease:u});return g.startTime=m??this.calcStartTime(),this.pendingTimeline?(Cp(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:b}=this.options;d.set(Fs(n,this.options,o)),b&&b(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:a,times:s,type:c,ease:u,keyframes:n}}get duration(){const{resolved:n}=this;if(!n)return 0;const{duration:o}=n;return In(o)}get time(){const{resolved:n}=this;if(!n)return 0;const{animation:o}=n;return In(o.currentTime||0)}set time(n){const{resolved:o}=this;if(!o)return;const{animation:a}=o;a.currentTime=zn(n)}get speed(){const{resolved:n}=this;if(!n)return 1;const{animation:o}=n;return o.playbackRate}set speed(n){const{resolved:o}=this;if(!o)return;const{animation:a}=o;a.playbackRate=n}get state(){const{resolved:n}=this;if(!n)return"idle";const{animation:o}=n;return o.playState}get startTime(){const{resolved:n}=this;if(!n)return null;const{animation:o}=n;return o.startTime}attachTimeline(n){if(!this._resolved)this.pendingTimeline=n;else{const{resolved:o}=this;if(!o)return Bt;const{animation:a}=o;Cp(a,n)}return Bt}play(){if(this.isStopped)return;const{resolved:n}=this;if(!n)return;const{animation:o}=n;o.playState==="finished"&&this.updateFinishedPromise(),o.play()}pause(){const{resolved:n}=this;if(!n)return;const{animation:o}=n;o.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:n}=this;if(!n)return;const{animation:o,keyframes:a,duration:s,type:u,ease:c,times:d}=n;if(o.playState==="idle"||o.playState==="finished")return;if(this.time){const{motionValue:m,onUpdate:g,onComplete:b,element:v,...w}=this.options,x=new gf({...w,keyframes:a,duration:s,type:u,ease:c,times:d,isGenerator:!0}),k=zn(this.time);m.setWithVelocity(x.sample(k-Cs).value,x.sample(k).value,Cs)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:n}=this;n&&n.animation.finish()}cancel(){const{resolved:n}=this;n&&n.animation.cancel()}static supports(n){const{motionValue:o,name:a,repeatDelay:s,repeatType:u,damping:c,type:d}=n;if(!o||!o.owner||!(o.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=o.owner.getProps();return Ak()&&a&&Dk.has(a)&&!h&&!m&&!s&&u!=="mirror"&&c!==0&&d!=="inertia"}}const zk={type:"spring",stiffness:500,damping:25,restSpeed:10},Ik=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Vk={type:"keyframes",duration:.8},Fk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Bk=(t,{keyframes:n})=>n.length>2?Vk:Nr.has(t)?t.startsWith("scale")?Ik(n[1]):zk:Fk;function $k({when:t,delay:n,delayChildren:o,staggerChildren:a,staggerDirection:s,repeat:u,repeatType:c,repeatDelay:d,from:h,elapsed:m,...g}){return!!Object.keys(g).length}const yf=(t,n,o,a={},s,u)=>c=>{const d=tf(a,t)||{},h=d.delay||a.delay||0;let{elapsed:m=0}=a;m=m-zn(h);let g={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:n.getVelocity(),...d,delay:-m,onUpdate:v=>{n.set(v),d.onUpdate&&d.onUpdate(v)},onComplete:()=>{c(),d.onComplete&&d.onComplete()},name:t,motionValue:n,element:u?void 0:s};$k(d)||(g={...g,...Bk(t,g)}),g.duration&&(g.duration=zn(g.duration)),g.repeatDelay&&(g.repeatDelay=zn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let b=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(b=!0)),b&&!u&&n.get()!==void 0){const v=Fs(g.keyframes,d);if(v!==void 0)return Ye.update(()=>{g.onUpdate(v),g.onComplete()}),new sx([])}return!u&&Wp.supports(g)?new Wp(g):new gf(g)};function Uk({protectedKeys:t,needsAnimating:n},o){const a=t.hasOwnProperty(o)&&n[o]!==!0;return n[o]=!1,a}function _y(t,n,{delay:o=0,transitionOverride:a,type:s}={}){var u;let{transition:c=t.getDefaultTransition(),transitionEnd:d,...h}=n;a&&(c=a);const m=[],g=s&&t.animationState&&t.animationState.getState()[s];for(const b in h){const v=t.getValue(b,(u=t.latestValues[b])!==null&&u!==void 0?u:null),w=h[b];if(w===void 0||g&&Uk(g,b))continue;const x={delay:o,...tf(c||{},b)};let k=!1;if(window.MotionHandoffAnimation){const E=ty(t);if(E){const R=window.MotionHandoffAnimation(E,b,Ye);R!==null&&(x.startTime=R,k=!0)}}yc(t,b),v.start(yf(b,v,w,t.shouldReduceMotion&&Jg.has(b)?{type:!1}:x,t,k));const S=v.animation;S&&m.push(S)}return d&&Promise.all(m).then(()=>{Ye.update(()=>{d&&xx(t,d)})}),m}function Sc(t,n,o={}){var a;const s=Vs(t,n,o.type==="exit"?(a=t.presenceContext)===null||a===void 0?void 0:a.custom:void 0);let{transition:u=t.getDefaultTransition()||{}}=s||{};o.transitionOverride&&(u=o.transitionOverride);const c=s?()=>Promise.all(_y(t,s,o)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:b,staggerDirection:v}=u;return Wk(t,n,g+m,b,v,o)}:()=>Promise.resolve(),{when:h}=u;if(h){const[m,g]=h==="beforeChildren"?[c,d]:[d,c];return m().then(()=>g())}else return Promise.all([c(),d(o.delay)])}function Wk(t,n,o=0,a=0,s=1,u){const c=[],d=(t.variantChildren.size-1)*a,h=s===1?(m=0)=>m*a:(m=0)=>d-m*a;return Array.from(t.variantChildren).sort(qk).forEach((m,g)=>{m.notify("AnimationStart",n),c.push(Sc(m,n,{...u,delay:o+h(g)}).then(()=>m.notify("AnimationComplete",n)))}),Promise.all(c)}function qk(t,n){return t.sortNodePosition(n)}function Hk(t,n,o={}){t.notify("AnimationStart",n);let a;if(Array.isArray(n)){const s=n.map(u=>Sc(t,u,o));a=Promise.all(s)}else if(typeof n=="string")a=Sc(t,n,o);else{const s=typeof n=="function"?Vs(t,n,o.custom):n;a=Promise.all(_y(t,s,o))}return a.then(()=>{t.notify("AnimationComplete",n)})}const Yk=Uc.length;function Ay(t){if(!t)return;if(!t.isControllingVariants){const o=t.parent?Ay(t.parent)||{}:{};return t.props.initial!==void 0&&(o.initial=t.props.initial),o}const n={};for(let o=0;o<Yk;o++){const a=Uc[o],s=t.props[a];(Li(s)||s===!1)&&(n[a]=s)}return n}const Kk=[...$c].reverse(),Gk=$c.length;function Xk(t){return n=>Promise.all(n.map(({animation:o,options:a})=>Hk(t,o,a)))}function Qk(t){let n=Xk(t),o=qp(),a=!0;const s=h=>(m,g)=>{var b;const v=Vs(t,g,h==="exit"?(b=t.presenceContext)===null||b===void 0?void 0:b.custom:void 0);if(v){const{transition:w,transitionEnd:x,...k}=v;m={...m,...k,...x}}return m};function u(h){n=h(t)}function c(h){const{props:m}=t,g=Ay(t.parent)||{},b=[],v=new Set;let w={},x=1/0;for(let S=0;S<Gk;S++){const E=Kk[S],R=o[E],$=m[E]!==void 0?m[E]:g[E],te=Li($),B=E===h?R.isActive:null;B===!1&&(x=S);let ne=$===g[E]&&$!==m[E]&&te;if(ne&&a&&t.manuallyAnimateOnMount&&(ne=!1),R.protectedKeys={...w},!R.isActive&&B===null||!$&&!R.prevProp||zs($)||typeof $=="boolean")continue;const ie=Zk(R.prevProp,$);let Y=ie||E===h&&R.isActive&&!ne&&te||S>x&&te,Q=!1;const ve=Array.isArray($)?$:[$];let Me=ve.reduce(s(E),{});B===!1&&(Me={});const{prevResolvedValues:De={}}=R,Le={...De,...Me},U=N=>{Y=!0,v.has(N)&&(Q=!0,v.delete(N)),R.needsAnimating[N]=!0;const _=t.getValue(N);_&&(_.liveStyle=!1)};for(const N in Le){const _=Me[N],q=De[N];if(w.hasOwnProperty(N))continue;let W=!1;pc(_)&&pc(q)?W=!qg(_,q):W=_!==q,W?_!=null?U(N):v.add(N):_!==void 0&&v.has(N)?U(N):R.protectedKeys[N]=!0}R.prevProp=$,R.prevResolvedValues=Me,R.isActive&&(w={...w,...Me}),a&&t.blockInitialAnimation&&(Y=!1),Y&&(!(ne&&ie)||Q)&&b.push(...ve.map(N=>({animation:N,options:{type:E}})))}if(v.size){const S={};v.forEach(E=>{const R=t.getBaseTarget(E),$=t.getValue(E);$&&($.liveStyle=!0),S[E]=R??null}),b.push({animation:S})}let k=!!b.length;return a&&(m.initial===!1||m.initial===m.animate)&&!t.manuallyAnimateOnMount&&(k=!1),a=!1,k?n(b):Promise.resolve()}function d(h,m){var g;if(o[h].isActive===m)return Promise.resolve();(g=t.variantChildren)===null||g===void 0||g.forEach(v=>{var w;return(w=v.animationState)===null||w===void 0?void 0:w.setActive(h,m)}),o[h].isActive=m;const b=c(h);for(const v in o)o[v].protectedKeys={};return b}return{animateChanges:c,setActive:d,setAnimateFunction:u,getState:()=>o,reset:()=>{o=qp(),a=!0}}}function Zk(t,n){return typeof n=="string"?n!==t:Array.isArray(n)?!qg(n,t):!1}function Mr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function qp(){return{animate:Mr(!0),whileInView:Mr(),whileHover:Mr(),whileTap:Mr(),whileDrag:Mr(),whileFocus:Mr(),exit:Mr()}}class hr{constructor(n){this.isMounted=!1,this.node=n}update(){}}class Jk extends hr{constructor(n){super(n),n.animationState||(n.animationState=Qk(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();zs(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:o}=this.node.prevProps||{};n!==o&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)===null||n===void 0||n.call(this)}}let eP=0;class tP extends hr{constructor(){super(...arguments),this.id=eP++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:o}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===a)return;const s=this.node.animationState.setActive("exit",!n);o&&!n&&s.then(()=>o(this.id))}mount(){const{register:n}=this.node.presenceContext||{};n&&(this.unmount=n(this.id))}unmount(){}}const nP={animation:{Feature:Jk},exit:{Feature:tP}};function Ii(t,n,o,a={passive:!0}){return t.addEventListener(n,o,a),()=>t.removeEventListener(n,o)}function Hi(t){return{point:{x:t.pageX,y:t.pageY}}}const rP=t=>n=>of(n)&&t(n,Hi(n));function Di(t,n,o,a){return Ii(t,n,rP(o),a)}const Hp=(t,n)=>Math.abs(t-n);function oP(t,n){const o=Hp(t.x,n.x),a=Hp(t.y,n.y);return Math.sqrt(o**2+a**2)}class Ry{constructor(n,o,{transformPagePoint:a,contextWindow:s,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Ku(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,w=oP(b.offset,{x:0,y:0})>=3;if(!v&&!w)return;const{point:x}=b,{timestamp:k}=wt;this.history.push({...x,timestamp:k});const{onStart:S,onMove:E}=this.handlers;v||(S&&S(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,b)},this.handlePointerMove=(b,v)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=Yu(v,this.transformPagePoint),Ye.update(this.updatePoint,!0)},this.handlePointerUp=(b,v)=>{this.end();const{onEnd:w,onSessionEnd:x,resumeAnimation:k}=this.handlers;if(this.dragSnapToOrigin&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Ku(b.type==="pointercancel"?this.lastMoveEventInfo:Yu(v,this.transformPagePoint),this.history);this.startEvent&&w&&w(b,S),x&&x(b,S)},!of(n))return;this.dragSnapToOrigin=u,this.handlers=o,this.transformPagePoint=a,this.contextWindow=s||window;const c=Hi(n),d=Yu(c,this.transformPagePoint),{point:h}=d,{timestamp:m}=wt;this.history=[{...h,timestamp:m}];const{onSessionStart:g}=o;g&&g(n,Ku(d,this.history)),this.removeListeners=qi(Di(this.contextWindow,"pointermove",this.handlePointerMove),Di(this.contextWindow,"pointerup",this.handlePointerUp),Di(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),fr(this.updatePoint)}}function Yu(t,n){return n?{point:n(t.point)}:t}function Yp(t,n){return{x:t.x-n.x,y:t.y-n.y}}function Ku({point:t},n){return{point:t,delta:Yp(t,Ly(n)),offset:Yp(t,iP(n)),velocity:aP(n,.1)}}function iP(t){return t[0]}function Ly(t){return t[t.length-1]}function aP(t,n){if(t.length<2)return{x:0,y:0};let o=t.length-1,a=null;const s=Ly(t);for(;o>=0&&(a=t[o],!(s.timestamp-a.timestamp>zn(n)));)o--;if(!a)return{x:0,y:0};const u=In(s.timestamp-a.timestamp);if(u===0)return{x:0,y:0};const c={x:(s.x-a.x)/u,y:(s.y-a.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const jy=1e-4,sP=1-jy,lP=1+jy,Ny=.01,uP=0-Ny,cP=0+Ny;function $t(t){return t.max-t.min}function fP(t,n,o){return Math.abs(t-n)<=o}function Kp(t,n,o,a=.5){t.origin=a,t.originPoint=Je(n.min,n.max,t.origin),t.scale=$t(o)/$t(n),t.translate=Je(o.min,o.max,t.origin)-t.originPoint,(t.scale>=sP&&t.scale<=lP||isNaN(t.scale))&&(t.scale=1),(t.translate>=uP&&t.translate<=cP||isNaN(t.translate))&&(t.translate=0)}function _i(t,n,o,a){Kp(t.x,n.x,o.x,a?a.originX:void 0),Kp(t.y,n.y,o.y,a?a.originY:void 0)}function Gp(t,n,o){t.min=o.min+n.min,t.max=t.min+$t(n)}function dP(t,n,o){Gp(t.x,n.x,o.x),Gp(t.y,n.y,o.y)}function Xp(t,n,o){t.min=n.min-o.min,t.max=t.min+$t(n)}function Ai(t,n,o){Xp(t.x,n.x,o.x),Xp(t.y,n.y,o.y)}function hP(t,{min:n,max:o},a){return n!==void 0&&t<n?t=a?Je(n,t,a.min):Math.max(t,n):o!==void 0&&t>o&&(t=a?Je(o,t,a.max):Math.min(t,o)),t}function Qp(t,n,o){return{min:n!==void 0?t.min+n:void 0,max:o!==void 0?t.max+o-(t.max-t.min):void 0}}function pP(t,{top:n,left:o,bottom:a,right:s}){return{x:Qp(t.x,o,s),y:Qp(t.y,n,a)}}function Zp(t,n){let o=n.min-t.min,a=n.max-t.max;return n.max-n.min<t.max-t.min&&([o,a]=[a,o]),{min:o,max:a}}function mP(t,n){return{x:Zp(t.x,n.x),y:Zp(t.y,n.y)}}function gP(t,n){let o=.5;const a=$t(t),s=$t(n);return s>a?o=ko(n.min,n.max-a,t.min):a>s&&(o=ko(t.min,t.max-s,n.min)),Fn(0,1,o)}function yP(t,n){const o={};return n.min!==void 0&&(o.min=n.min-t.min),n.max!==void 0&&(o.max=n.max-t.min),o}const Tc=.35;function vP(t=Tc){return t===!1?t=0:t===!0&&(t=Tc),{x:Jp(t,"left","right"),y:Jp(t,"top","bottom")}}function Jp(t,n,o){return{min:em(t,n),max:em(t,o)}}function em(t,n){return typeof t=="number"?t:t[n]||0}const tm=()=>({translate:0,scale:1,origin:0,originPoint:0}),go=()=>({x:tm(),y:tm()}),nm=()=>({min:0,max:0}),lt=()=>({x:nm(),y:nm()});function Xt(t){return[t("x"),t("y")]}function zy({top:t,left:n,right:o,bottom:a}){return{x:{min:n,max:o},y:{min:t,max:a}}}function bP({x:t,y:n}){return{top:n.min,right:t.max,bottom:n.max,left:t.min}}function wP(t,n){if(!n)return t;const o=n({x:t.left,y:t.top}),a=n({x:t.right,y:t.bottom});return{top:o.y,left:o.x,bottom:a.y,right:a.x}}function Gu(t){return t===void 0||t===1}function Oc({scale:t,scaleX:n,scaleY:o}){return!Gu(t)||!Gu(n)||!Gu(o)}function Dr(t){return Oc(t)||Iy(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Iy(t){return rm(t.x)||rm(t.y)}function rm(t){return t&&t!=="0%"}function Es(t,n,o){const a=t-o,s=n*a;return o+s}function om(t,n,o,a,s){return s!==void 0&&(t=Es(t,s,a)),Es(t,o,a)+n}function Cc(t,n=0,o=1,a,s){t.min=om(t.min,n,o,a,s),t.max=om(t.max,n,o,a,s)}function Vy(t,{x:n,y:o}){Cc(t.x,n.translate,n.scale,n.originPoint),Cc(t.y,o.translate,o.scale,o.originPoint)}const im=.999999999999,am=1.0000000000001;function xP(t,n,o,a=!1){const s=o.length;if(!s)return;n.x=n.y=1;let u,c;for(let d=0;d<s;d++){u=o[d],c=u.projectionDelta;const{visualElement:h}=u.options;h&&h.props.style&&h.props.style.display==="contents"||(a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&vo(t,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(n.x*=c.x.scale,n.y*=c.y.scale,Vy(t,c)),a&&Dr(u.latestValues)&&vo(t,u.latestValues))}n.x<am&&n.x>im&&(n.x=1),n.y<am&&n.y>im&&(n.y=1)}function yo(t,n){t.min=t.min+n,t.max=t.max+n}function sm(t,n,o,a,s=.5){const u=Je(t.min,t.max,s);Cc(t,n,o,u,a)}function vo(t,n){sm(t.x,n.x,n.scaleX,n.scale,n.originX),sm(t.y,n.y,n.scaleY,n.scale,n.originY)}function Fy(t,n){return zy(wP(t.getBoundingClientRect(),n))}function kP(t,n,o){const a=Fy(t,o),{scroll:s}=n;return s&&(yo(a.x,s.offset.x),yo(a.y,s.offset.y)),a}const By=({current:t})=>t?t.ownerDocument.defaultView:null,PP=new WeakMap;class SP{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=lt(),this.visualElement=n}start(n,{snapToCursor:o=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const s=g=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(Hi(g).point)},u=(g,b)=>{const{drag:v,dragPropagation:w,onDragStart:x}=this.getProps();if(v&&!w&&(this.openDragLock&&this.openDragLock(),this.openDragLock=gx(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xt(S=>{let E=this.getAxisMotionValue(S).get()||0;if(wn.test(E)){const{projection:R}=this.visualElement;if(R&&R.layout){const $=R.layout.layoutBox[S];$&&(E=$t($)*(parseFloat(E)/100))}}this.originPoint[S]=E}),x&&Ye.postRender(()=>x(g,b)),yc(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},c=(g,b)=>{const{dragPropagation:v,dragDirectionLock:w,onDirectionLock:x,onDrag:k}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:S}=b;if(w&&this.currentDirection===null){this.currentDirection=TP(S),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",b.point,S),this.updateAxis("y",b.point,S),this.visualElement.render(),k&&k(g,b)},d=(g,b)=>this.stop(g,b),h=()=>Xt(g=>{var b;return this.getAnimationState(g)==="paused"&&((b=this.getAxisMotionValue(g).animation)===null||b===void 0?void 0:b.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Ry(n,{onSessionStart:s,onStart:u,onMove:c,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:By(this.visualElement)})}stop(n,o){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:s}=o;this.startAnimation(s);const{onDragEnd:u}=this.getProps();u&&Ye.postRender(()=>u(n,o))}cancel(){this.isDragging=!1;const{projection:n,animationState:o}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(n,o,a){const{drag:s}=this.getProps();if(!a||!us(n,s,this.currentDirection))return;const u=this.getAxisMotionValue(n);let c=this.originPoint[n]+a[n];this.constraints&&this.constraints[n]&&(c=hP(c,this.constraints[n],this.elastic[n])),u.set(c)}resolveConstraints(){var n;const{dragConstraints:o,dragElastic:a}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(n=this.visualElement.projection)===null||n===void 0?void 0:n.layout,u=this.constraints;o&&po(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&s?this.constraints=pP(s.layoutBox,o):this.constraints=!1,this.elastic=vP(a),u!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Xt(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=yP(s.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:o}=this.getProps();if(!n||!po(n))return!1;const a=n.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const u=kP(a,s.root,this.visualElement.getTransformPagePoint());let c=mP(s.layout.layoutBox,u);if(o){const d=o(bP(c));this.hasMutatedConstraints=!!d,d&&(c=zy(d))}return c}startAnimation(n){const{drag:o,dragMomentum:a,dragElastic:s,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:d}=this.getProps(),h=this.constraints||{},m=Xt(g=>{if(!us(g,o,this.currentDirection))return;let b=h&&h[g]||{};c&&(b={min:0,max:0});const v=s?200:1e6,w=s?40:1e7,x={type:"inertia",velocity:a?n[g]:0,bounceStiffness:v,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...b};return this.startAxisValueAnimation(g,x)});return Promise.all(m).then(d)}startAxisValueAnimation(n,o){const a=this.getAxisMotionValue(n);return yc(this.visualElement,n),a.start(yf(n,a,0,o,this.visualElement,!1))}stopAnimation(){Xt(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){Xt(n=>{var o;return(o=this.getAxisMotionValue(n).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(n){var o;return(o=this.getAxisMotionValue(n).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(n){const o=`_drag${n.toUpperCase()}`,a=this.visualElement.getProps(),s=a[o];return s||this.visualElement.getValue(n,(a.initial?a.initial[n]:void 0)||0)}snapToCursor(n){Xt(o=>{const{drag:a}=this.getProps();if(!us(o,a,this.currentDirection))return;const{projection:s}=this.visualElement,u=this.getAxisMotionValue(o);if(s&&s.layout){const{min:c,max:d}=s.layout.layoutBox[o];u.set(n[o]-Je(c,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:o}=this.getProps(),{projection:a}=this.visualElement;if(!po(o)||!a||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Xt(c=>{const d=this.getAxisMotionValue(c);if(d&&this.constraints!==!1){const h=d.get();s[c]=gP({min:h,max:h},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Xt(c=>{if(!us(c,n,null))return;const d=this.getAxisMotionValue(c),{min:h,max:m}=this.constraints[c];d.set(Je(h,m,s[c]))})}addListeners(){if(!this.visualElement.current)return;PP.set(this.visualElement,this);const n=this.visualElement.current,o=Di(n,"pointerdown",h=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(h)}),a=()=>{const{dragConstraints:h}=this.getProps();po(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,u=s.addEventListener("measure",a);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),Ye.read(a);const c=Ii(window,"resize",()=>this.scalePositionWithinConstraints()),d=s.addEventListener("didUpdate",({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(Xt(g=>{const b=this.getAxisMotionValue(g);b&&(this.originPoint[g]+=h[g].translate,b.set(b.get()+h[g].translate))}),this.visualElement.render())});return()=>{c(),o(),u(),d&&d()}}getProps(){const n=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:a=!1,dragPropagation:s=!1,dragConstraints:u=!1,dragElastic:c=Tc,dragMomentum:d=!0}=n;return{...n,drag:o,dragDirectionLock:a,dragPropagation:s,dragConstraints:u,dragElastic:c,dragMomentum:d}}}function us(t,n,o){return(n===!0||n===t)&&(o===null||o===t)}function TP(t,n=10){let o=null;return Math.abs(t.y)>n?o="y":Math.abs(t.x)>n&&(o="x"),o}class OP extends hr{constructor(n){super(n),this.removeGroupControls=Bt,this.removeListeners=Bt,this.controls=new SP(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Bt}unmount(){this.removeGroupControls(),this.removeListeners()}}const lm=t=>(n,o)=>{t&&Ye.postRender(()=>t(n,o))};class CP extends hr{constructor(){super(...arguments),this.removePointerDownListener=Bt}onPointerDown(n){this.session=new Ry(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:By(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:o,onPan:a,onPanEnd:s}=this.node.getProps();return{onSessionStart:lm(n),onStart:lm(o),onMove:a,onEnd:(u,c)=>{delete this.session,s&&Ye.postRender(()=>s(u,c))}}}mount(){this.removePointerDownListener=Di(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const bs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function um(t,n){return n.max===n.min?0:t/(n.max-n.min)*100}const Pi={correct:(t,n)=>{if(!n.target)return t;if(typeof t=="string")if(be.test(t))t=parseFloat(t);else return t;const o=um(t,n.target.x),a=um(t,n.target.y);return`${o}% ${a}%`}},EP={correct:(t,{treeScale:n,projectionDelta:o})=>{const a=t,s=dr.parse(t);if(s.length>5)return a;const u=dr.createTransformer(t),c=typeof s[0]!="number"?1:0,d=o.x.scale*n.x,h=o.y.scale*n.y;s[0+c]/=d,s[1+c]/=h;const m=Je(d,h,.5);return typeof s[2+c]=="number"&&(s[2+c]/=m),typeof s[3+c]=="number"&&(s[3+c]/=m),u(s)}};class MP extends M.Component{componentDidMount(){const{visualElement:n,layoutGroup:o,switchLayoutGroup:a,layoutId:s}=this.props,{projection:u}=n;Gw(DP),u&&(o.group&&o.group.add(u),a&&a.register&&s&&a.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),bs.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:o,visualElement:a,drag:s,isPresent:u}=this.props,c=a.projection;return c&&(c.isPresent=u,s||n.layoutDependency!==o||o===void 0?c.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?c.promote():c.relegate()||Ye.postRender(()=>{const d=c.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),qc.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:o,switchLayoutGroup:a}=this.props,{projection:s}=n;s&&(s.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(s),a&&a.deregister&&a.deregister(s))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function $y(t){const[n,o]=Sg(),a=M.useContext(zc);return jn.jsx(MP,{...t,layoutGroup:a,switchLayoutGroup:M.useContext(Ag),isPresent:n,safeToRemove:o})}const DP={borderRadius:{...Pi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Pi,borderTopRightRadius:Pi,borderBottomLeftRadius:Pi,borderBottomRightRadius:Pi,boxShadow:EP};function _P(t,n,o){const a=Ot(t)?t:Ni(t);return a.start(yf("",a,n,o)),a.animation}function AP(t){return t instanceof SVGElement&&t.tagName!=="svg"}const RP=(t,n)=>t.depth-n.depth;class LP{constructor(){this.children=[],this.isDirty=!1}add(n){af(this.children,n),this.isDirty=!0}remove(n){sf(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(RP),this.isDirty=!1,this.children.forEach(n)}}function jP(t,n){const o=xn.now(),a=({timestamp:s})=>{const u=s-o;u>=n&&(fr(a),t(u-n))};return Ye.read(a,!0),()=>fr(a)}const Uy=["TopLeft","TopRight","BottomLeft","BottomRight"],NP=Uy.length,cm=t=>typeof t=="string"?parseFloat(t):t,fm=t=>typeof t=="number"||be.test(t);function zP(t,n,o,a,s,u){s?(t.opacity=Je(0,o.opacity!==void 0?o.opacity:1,IP(a)),t.opacityExit=Je(n.opacity!==void 0?n.opacity:1,0,VP(a))):u&&(t.opacity=Je(n.opacity!==void 0?n.opacity:1,o.opacity!==void 0?o.opacity:1,a));for(let c=0;c<NP;c++){const d=`border${Uy[c]}Radius`;let h=dm(n,d),m=dm(o,d);if(h===void 0&&m===void 0)continue;h||(h=0),m||(m=0),h===0||m===0||fm(h)===fm(m)?(t[d]=Math.max(Je(cm(h),cm(m),a),0),(wn.test(m)||wn.test(h))&&(t[d]+="%")):t[d]=m}(n.rotate||o.rotate)&&(t.rotate=Je(n.rotate||0,o.rotate||0,a))}function dm(t,n){return t[n]!==void 0?t[n]:t.borderRadius}const IP=Wy(0,.5,ly),VP=Wy(.5,.95,Bt);function Wy(t,n,o){return a=>a<t?0:a>n?1:o(ko(t,n,a))}function hm(t,n){t.min=n.min,t.max=n.max}function Gt(t,n){hm(t.x,n.x),hm(t.y,n.y)}function pm(t,n){t.translate=n.translate,t.scale=n.scale,t.originPoint=n.originPoint,t.origin=n.origin}function mm(t,n,o,a,s){return t-=n,t=Es(t,1/o,a),s!==void 0&&(t=Es(t,1/s,a)),t}function FP(t,n=0,o=1,a=.5,s,u=t,c=t){if(wn.test(n)&&(n=parseFloat(n),n=Je(c.min,c.max,n/100)-c.min),typeof n!="number")return;let d=Je(u.min,u.max,a);t===u&&(d-=n),t.min=mm(t.min,n,o,d,s),t.max=mm(t.max,n,o,d,s)}function gm(t,n,[o,a,s],u,c){FP(t,n[o],n[a],n[s],n.scale,u,c)}const BP=["x","scaleX","originX"],$P=["y","scaleY","originY"];function ym(t,n,o,a){gm(t.x,n,BP,o?o.x:void 0,a?a.x:void 0),gm(t.y,n,$P,o?o.y:void 0,a?a.y:void 0)}function vm(t){return t.translate===0&&t.scale===1}function qy(t){return vm(t.x)&&vm(t.y)}function bm(t,n){return t.min===n.min&&t.max===n.max}function UP(t,n){return bm(t.x,n.x)&&bm(t.y,n.y)}function wm(t,n){return Math.round(t.min)===Math.round(n.min)&&Math.round(t.max)===Math.round(n.max)}function Hy(t,n){return wm(t.x,n.x)&&wm(t.y,n.y)}function xm(t){return $t(t.x)/$t(t.y)}function km(t,n){return t.translate===n.translate&&t.scale===n.scale&&t.originPoint===n.originPoint}class WP{constructor(){this.members=[]}add(n){af(this.members,n),n.scheduleRender()}remove(n){if(sf(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(n){const o=this.members.findIndex(s=>n===s);if(o===0)return!1;let a;for(let s=o;s>=0;s--){const u=this.members[s];if(u.isPresent!==!1){a=u;break}}return a?(this.promote(a),!0):!1}promote(n,o){const a=this.lead;if(n!==a&&(this.prevLead=a,this.lead=n,n.show(),a)){a.instance&&a.scheduleRender(),n.scheduleRender(),n.resumeFrom=a,o&&(n.resumeFrom.preserveOpacity=!0),a.snapshot&&(n.snapshot=a.snapshot,n.snapshot.latestValues=a.animationValues||a.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:s}=n.options;s===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:o,resumingFrom:a}=n;o.onExitComplete&&o.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function qP(t,n,o){let a="";const s=t.x.translate/n.x,u=t.y.translate/n.y,c=o?.z||0;if((s||u||c)&&(a=`translate3d(${s}px, ${u}px, ${c}px) `),(n.x!==1||n.y!==1)&&(a+=`scale(${1/n.x}, ${1/n.y}) `),o){const{transformPerspective:m,rotate:g,rotateX:b,rotateY:v,skewX:w,skewY:x}=o;m&&(a=`perspective(${m}px) ${a}`),g&&(a+=`rotate(${g}deg) `),b&&(a+=`rotateX(${b}deg) `),v&&(a+=`rotateY(${v}deg) `),w&&(a+=`skewX(${w}deg) `),x&&(a+=`skewY(${x}deg) `)}const d=t.x.scale*n.x,h=t.y.scale*n.y;return(d!==1||h!==1)&&(a+=`scale(${d}, ${h})`),a||"none"}const _r={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ci=typeof window<"u"&&window.MotionDebug!==void 0,Xu=["","X","Y","Z"],HP={visibility:"hidden"},Pm=1e3;let YP=0;function Qu(t,n,o,a){const{latestValues:s}=n;s[t]&&(o[t]=s[t],n.setStaticValue(t,0),a&&(a[t]=0))}function Yy(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:n}=t.options;if(!n)return;const o=ty(n);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:s,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(o,"transform",Ye,!(s||u))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&Yy(a)}function Ky({attachResizeListener:t,defaultParent:n,measureScroll:o,checkIsScrollRoot:a,resetTransform:s}){return class{constructor(c={},d=n?.()){this.id=YP++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ci&&(_r.totalNodes=_r.resolvedTargetDeltas=_r.recalculatedProjection=0),this.nodes.forEach(XP),this.nodes.forEach(tS),this.nodes.forEach(nS),this.nodes.forEach(QP),Ci&&window.MotionDebug.record(_r)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new LP)}addEventListener(c,d){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new lf),this.eventHandlers.get(c).add(d)}notifyListeners(c,...d){const h=this.eventHandlers.get(c);h&&h.notify(...d)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,d=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=AP(c),this.instance=c;const{layoutId:h,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),d&&(m||h)&&(this.isLayoutDirty=!0),t){let b;const v=()=>this.root.updateBlockedByResize=!1;t(c,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=jP(v,250),bs.hasAnimatedSinceResize&&(bs.hasAnimatedSinceResize=!1,this.nodes.forEach(Tm))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||m)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:v,hasRelativeTargetChanged:w,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const k=this.options.transition||g.getDefaultTransition()||sS,{onLayoutAnimationStart:S,onLayoutAnimationComplete:E}=g.getProps(),R=!this.targetLayout||!Hy(this.targetLayout,x)||w,$=!v&&w;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||$||v&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,$);const te={...tf(k,"layout"),onPlay:S,onComplete:E};(g.shouldReduceMotion||this.options.layoutRoot)&&(te.delay=0,te.type=!1),this.startAnimation(te)}else v||Tm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,fr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rS),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Yy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const b=this.path[g];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:d,layout:h}=this.options;if(d===void 0&&!h)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Sm);return}this.isUpdating||this.nodes.forEach(JP),this.isUpdating=!1,this.nodes.forEach(eS),this.nodes.forEach(KP),this.nodes.forEach(GP),this.clearAllSnapshots();const d=xn.now();wt.delta=Fn(0,1e3/60,d-wt.timestamp),wt.timestamp=d,wt.isProcessing=!0,$u.update.process(wt),$u.preRender.process(wt),$u.render.process(wt),wt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ZP),this.sharedNodes.forEach(oS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ye.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ye.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=lt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(d=!1),d){const h=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!s)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!qy(this.projectionDelta),h=this.getTransformTemplate(),m=h?h(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;c&&(d||Dr(this.latestValues)||g)&&(s(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const d=this.measurePageBox();let h=this.removeElementScroll(d);return c&&(h=this.removeTransform(h)),lS(h),{animationId:this.root.animationId,measuredBox:d,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:d}=this.options;if(!d)return lt();const h=d.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(uS))){const{scroll:g}=this.root;g&&(yo(h.x,g.offset.x),yo(h.y,g.offset.y))}return h}removeElementScroll(c){var d;const h=lt();if(Gt(h,c),!((d=this.scroll)===null||d===void 0)&&d.wasRoot)return h;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:b,options:v}=g;g!==this.root&&b&&v.layoutScroll&&(b.wasRoot&&Gt(h,c),yo(h.x,b.offset.x),yo(h.y,b.offset.y))}return h}applyTransform(c,d=!1){const h=lt();Gt(h,c);for(let m=0;m<this.path.length;m++){const g=this.path[m];!d&&g.options.layoutScroll&&g.scroll&&g!==g.root&&vo(h,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Dr(g.latestValues)&&vo(h,g.latestValues)}return Dr(this.latestValues)&&vo(h,this.latestValues),h}removeTransform(c){const d=lt();Gt(d,c);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!m.instance||!Dr(m.latestValues))continue;Oc(m.latestValues)&&m.updateSnapshot();const g=lt(),b=m.measurePageBox();Gt(g,b),ym(d,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return Dr(this.latestValues)&&ym(d,this.latestValues),d}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==wt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var d;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(c||m&&this.isSharedProjectionDirty||this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:v}=this.options;if(!(!this.layout||!(b||v))){if(this.resolvedRelativeTargetAt=wt.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=lt(),this.relativeTargetOrigin=lt(),Ai(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),Gt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=lt(),this.targetWithTransforms=lt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),dP(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Gt(this.target,this.layout.layoutBox),Vy(this.target,this.targetDelta)):Gt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=lt(),this.relativeTargetOrigin=lt(),Ai(this.relativeTargetOrigin,this.target,w.target),Gt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ci&&_r.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Oc(this.parent.latestValues)||Iy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let m=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===wt.timestamp&&(m=!1),m)return;const{layout:g,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||b))return;Gt(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,w=this.treeScale.y;xP(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=lt());const{target:x}=d;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(pm(this.prevProjectionDelta.x,this.projectionDelta.x),pm(this.prevProjectionDelta.y,this.projectionDelta.y)),_i(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==w||!km(this.projectionDelta.x,this.prevProjectionDelta.x)||!km(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),Ci&&_r.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var d;if((d=this.options.visualElement)===null||d===void 0||d.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=go(),this.projectionDelta=go(),this.projectionDeltaWithTransform=go()}setAnimationOrigin(c,d=!1){const h=this.snapshot,m=h?h.latestValues:{},g={...this.latestValues},b=go();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const v=lt(),w=h?h.source:void 0,x=this.layout?this.layout.source:void 0,k=w!==x,S=this.getStack(),E=!S||S.members.length<=1,R=!!(k&&!E&&this.options.crossfade===!0&&!this.path.some(aS));this.animationProgress=0;let $;this.mixTargetDelta=te=>{const B=te/1e3;Om(b.x,c.x,B),Om(b.y,c.y,B),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ai(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),iS(this.relativeTarget,this.relativeTargetOrigin,v,B),$&&UP(this.relativeTarget,$)&&(this.isProjectionDirty=!1),$||($=lt()),Gt($,this.relativeTarget)),k&&(this.animationValues=g,zP(g,m,this.latestValues,B,R,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=B},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(fr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ye.update(()=>{bs.hasAnimatedSinceResize=!0,this.currentAnimation=_P(0,Pm,{...c,onUpdate:d=>{this.mixTargetDelta(d),c.onUpdate&&c.onUpdate(d)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Pm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:d,target:h,layout:m,latestValues:g}=c;if(!(!d||!h||!m)){if(this!==c&&this.layout&&m&&Gy(this.options.animationType,this.layout.layoutBox,m.layoutBox)){h=this.target||lt();const b=$t(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+b;const v=$t(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+v}Gt(d,h),vo(d,g),_i(this.projectionDeltaWithTransform,this.layoutCorrected,d,g)}}registerSharedNode(c,d){this.sharedNodes.has(c)||this.sharedNodes.set(c,new WP),this.sharedNodes.get(c).add(d);const m=d.options.initialPromotionConfig;d.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(d):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:d}=this.options;return d?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:d}=this.options;return d?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:d,preserveFollowOpacity:h}={}){const m=this.getStack();m&&m.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let d=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(d=!0),!d)return;const m={};h.z&&Qu("z",c,m,this.animationValues);for(let g=0;g<Xu.length;g++)Qu(`rotate${Xu[g]}`,c,m,this.animationValues),Qu(`skew${Xu[g]}`,c,m,this.animationValues);c.render();for(const g in m)c.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);c.scheduleRender()}getProjectionStyles(c){var d,h;if(!this.instance||this.isSVG)return;if(!this.isVisible)return HP;const m={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,m.opacity="",m.pointerEvents=ys(c?.pointerEvents)||"",m.transform=g?g(this.latestValues,""):"none",m;const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){const k={};return this.options.layoutId&&(k.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,k.pointerEvents=ys(c?.pointerEvents)||""),this.hasProjected&&!Dr(this.latestValues)&&(k.transform=g?g({},""):"none",this.hasProjected=!1),k}const v=b.animationValues||b.latestValues;this.applyTransformsToTarget(),m.transform=qP(this.projectionDeltaWithTransform,this.treeScale,v),g&&(m.transform=g(v,m.transform));const{x:w,y:x}=this.projectionDelta;m.transformOrigin=`${w.origin*100}% ${x.origin*100}% 0`,b.animationValues?m.opacity=b===this?(h=(d=v.opacity)!==null&&d!==void 0?d:this.latestValues.opacity)!==null&&h!==void 0?h:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:m.opacity=b===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const k in Ps){if(v[k]===void 0)continue;const{correct:S,applyTo:E}=Ps[k],R=m.transform==="none"?v[k]:S(v[k],b);if(E){const $=E.length;for(let te=0;te<$;te++)m[E[te]]=R}else m[k]=R}return this.options.layoutId&&(m.pointerEvents=b===this?ys(c?.pointerEvents)||"":"none"),m}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var d;return(d=c.currentAnimation)===null||d===void 0?void 0:d.stop()}),this.root.nodes.forEach(Sm),this.root.sharedNodes.clear()}}}function KP(t){t.updateLayout()}function GP(t){var n;const o=((n=t.resumeFrom)===null||n===void 0?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&o&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:s}=t.layout,{animationType:u}=t.options,c=o.source!==t.layout.source;u==="size"?Xt(b=>{const v=c?o.measuredBox[b]:o.layoutBox[b],w=$t(v);v.min=a[b].min,v.max=v.min+w}):Gy(u,o.layoutBox,a)&&Xt(b=>{const v=c?o.measuredBox[b]:o.layoutBox[b],w=$t(a[b]);v.max=v.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[b].max=t.relativeTarget[b].min+w)});const d=go();_i(d,a,o.layoutBox);const h=go();c?_i(h,t.applyTransform(s,!0),o.measuredBox):_i(h,a,o.layoutBox);const m=!qy(d);let g=!1;if(!t.resumeFrom){const b=t.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:v,layout:w}=b;if(v&&w){const x=lt();Ai(x,o.layoutBox,v.layoutBox);const k=lt();Ai(k,a,w.layoutBox),Hy(x,k)||(g=!0),b.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=x,t.relativeParent=b)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:h,layoutDelta:d,hasLayoutChanged:m,hasRelativeTargetChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function XP(t){Ci&&_r.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function QP(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function ZP(t){t.clearSnapshot()}function Sm(t){t.clearMeasurements()}function JP(t){t.isLayoutDirty=!1}function eS(t){const{visualElement:n}=t.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),t.resetTransform()}function Tm(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function tS(t){t.resolveTargetDelta()}function nS(t){t.calcProjection()}function rS(t){t.resetSkewAndRotation()}function oS(t){t.removeLeadSnapshot()}function Om(t,n,o){t.translate=Je(n.translate,0,o),t.scale=Je(n.scale,1,o),t.origin=n.origin,t.originPoint=n.originPoint}function Cm(t,n,o,a){t.min=Je(n.min,o.min,a),t.max=Je(n.max,o.max,a)}function iS(t,n,o,a){Cm(t.x,n.x,o.x,a),Cm(t.y,n.y,o.y,a)}function aS(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const sS={duration:.45,ease:[.4,0,.1,1]},Em=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Mm=Em("applewebkit/")&&!Em("chrome/")?Math.round:Bt;function Dm(t){t.min=Mm(t.min),t.max=Mm(t.max)}function lS(t){Dm(t.x),Dm(t.y)}function Gy(t,n,o){return t==="position"||t==="preserve-aspect"&&!fP(xm(n),xm(o),.2)}function uS(t){var n;return t!==t.root&&((n=t.scroll)===null||n===void 0?void 0:n.wasRoot)}const cS=Ky({attachResizeListener:(t,n)=>Ii(t,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Zu={current:void 0},Xy=Ky({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Zu.current){const t=new cS({});t.mount(window),t.setOptions({layoutScroll:!0}),Zu.current=t}return Zu.current},resetTransform:(t,n)=>{t.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),fS={pan:{Feature:CP},drag:{Feature:OP,ProjectionNode:Xy,MeasureLayout:$y}};function _m(t,n,o){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",o==="Start");const s="onHover"+o,u=a[s];u&&Ye.postRender(()=>u(n,Hi(n)))}class dS extends hr{mount(){const{current:n}=this.node;n&&(this.unmount=fx(n,o=>(_m(this.node,o,"Start"),a=>_m(this.node,a,"End"))))}unmount(){}}class hS extends hr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=qi(Ii(this.node.current,"focus",()=>this.onFocus()),Ii(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Am(t,n,o){const{props:a}=t;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",o==="Start");const s="onTap"+(o==="End"?"":o),u=a[s];u&&Ye.postRender(()=>u(n,Hi(n)))}class pS extends hr{mount(){const{current:n}=this.node;n&&(this.unmount=mx(n,o=>(Am(this.node,o,"Start"),(a,{success:s})=>Am(this.node,a,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ec=new WeakMap,Ju=new WeakMap,mS=t=>{const n=Ec.get(t.target);n&&n(t)},gS=t=>{t.forEach(mS)};function yS({root:t,...n}){const o=t||document;Ju.has(o)||Ju.set(o,{});const a=Ju.get(o),s=JSON.stringify(n);return a[s]||(a[s]=new IntersectionObserver(gS,{root:t,...n})),a[s]}function vS(t,n,o){const a=yS(n);return Ec.set(t,o),a.observe(t),()=>{Ec.delete(t),a.unobserve(t)}}const bS={some:0,all:1};class wS extends hr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:o,margin:a,amount:s="some",once:u}=n,c={root:o?o.current:void 0,rootMargin:a,threshold:typeof s=="number"?s:bS[s]},d=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,u&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:b}=this.node.getProps(),v=m?g:b;v&&v(h)};return vS(this.node.current,c,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:o}=this.node;["amount","margin","root"].some(xS(n,o))&&this.startObserver()}unmount(){}}function xS({viewport:t={}},{viewport:n={}}={}){return o=>t[o]!==n[o]}const kS={inView:{Feature:wS},tap:{Feature:pS},focus:{Feature:hS},hover:{Feature:dS}},PS={layout:{ProjectionNode:Xy,MeasureLayout:$y}},Mc={current:null},Qy={current:!1};function SS(){if(Qy.current=!0,!!Fc)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),n=()=>Mc.current=t.matches;t.addListener(n),n()}else Mc.current=!1}const TS=[...ky,Tt,dr],OS=t=>TS.find(xy(t)),Rm=new WeakMap;function CS(t,n,o){for(const a in n){const s=n[a],u=o[a];if(Ot(s))t.addValue(a,s);else if(Ot(u))t.addValue(a,Ni(s,{owner:t}));else if(u!==s)if(t.hasValue(a)){const c=t.getValue(a);c.liveStyle===!0?c.jump(s):c.hasAnimated||c.set(s)}else{const c=t.getStaticValue(a);t.addValue(a,Ni(c!==void 0?c:s,{owner:t}))}}for(const a in o)n[a]===void 0&&t.removeValue(a);return n}const Lm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class ES{scrapeMotionValuesFromProps(n,o,a){return{}}constructor({parent:n,props:o,presenceContext:a,reducedMotionConfig:s,blockInitialAnimation:u,visualState:c},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=pf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=xn.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Ye.render(this.render,!1,!0))};const{latestValues:h,renderState:m,onUpdate:g}=c;this.onUpdate=g,this.latestValues=h,this.baseTarget={...h},this.initialValues=o.initial?{...h}:{},this.renderState=m,this.parent=n,this.props=o,this.presenceContext=a,this.depth=n?n.depth+1:0,this.reducedMotionConfig=s,this.options=d,this.blockInitialAnimation=!!u,this.isControllingVariants=Is(o),this.isVariantNode=Dg(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:b,...v}=this.scrapeMotionValuesFromProps(o,{},this);for(const w in v){const x=v[w];h[w]!==void 0&&Ot(x)&&x.set(h[w],!1)}}mount(n){this.current=n,Rm.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),Qy.current||SS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Mc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Rm.delete(this.current),this.projection&&this.projection.unmount(),fr(this.notifyUpdate),fr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const o=this.features[n];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(n,o){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const a=Nr.has(n),s=o.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&Ye.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),u=o.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,n,o)),this.valueSubscriptions.set(n,()=>{s(),u(),c&&c(),o.owner&&o.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Po){const o=Po[n];if(!o)continue;const{isEnabled:a,Feature:s}=o;if(!this.features[n]&&s&&a(this.props)&&(this.features[n]=new s(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):lt()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,o){this.latestValues[n]=o}update(n,o){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let a=0;a<Lm.length;a++){const s=Lm[a];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const u="on"+s,c=n[u];c&&(this.propEventSubscriptions[s]=this.on(s,c))}this.prevMotionValues=CS(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(n),()=>o.variantChildren.delete(n)}addValue(n,o){const a=this.values.get(n);o!==a&&(a&&this.removeValue(n),this.bindToMotionValue(n,o),this.values.set(n,o),this.latestValues[n]=o.get())}removeValue(n){this.values.delete(n);const o=this.valueSubscriptions.get(n);o&&(o(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,o){if(this.props.values&&this.props.values[n])return this.props.values[n];let a=this.values.get(n);return a===void 0&&o!==void 0&&(a=Ni(o===null?void 0:o,{owner:this}),this.addValue(n,a)),a}readValue(n,o){var a;let s=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(a=this.getBaseTargetFromProps(this.props,n))!==null&&a!==void 0?a:this.readValueFromInstance(this.current,n,this.options);return s!=null&&(typeof s=="string"&&(by(s)||cy(s))?s=parseFloat(s):!OS(s)&&dr.test(o)&&(s=gy(n,o)),this.setBaseTarget(n,Ot(s)?s.get():s)),Ot(s)?s.get():s}setBaseTarget(n,o){this.baseTarget[n]=o}getBaseTarget(n){var o;const{initial:a}=this.props;let s;if(typeof a=="string"||typeof a=="object"){const c=Yc(this.props,a,(o=this.presenceContext)===null||o===void 0?void 0:o.custom);c&&(s=c[n])}if(a&&s!==void 0)return s;const u=this.getBaseTargetFromProps(this.props,n);return u!==void 0&&!Ot(u)?u:this.initialValues[n]!==void 0&&s===void 0?void 0:this.baseTarget[n]}on(n,o){return this.events[n]||(this.events[n]=new lf),this.events[n].add(o)}notify(n,...o){this.events[n]&&this.events[n].notify(...o)}}class Zy extends ES{constructor(){super(...arguments),this.KeyframeResolver=Py}sortInstanceNodePosition(n,o){return n.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(n,o){return n.style?n.style[o]:void 0}removeValueFromRenderState(n,{vars:o,style:a}){delete o[n],delete a[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;Ot(n)&&(this.childSubscription=n.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function MS(t){return window.getComputedStyle(t)}class DS extends Zy{constructor(){super(...arguments),this.type="html",this.renderInstance=Vg}readValueFromInstance(n,o){if(Nr.has(o)){const a=hf(o);return a&&a.default||0}else{const a=MS(n),s=(Ng(o)?a.getPropertyValue(o):a[o])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(n,{transformPagePoint:o}){return Fy(n,o)}build(n,o,a){Xc(n,o,a.transformTemplate)}scrapeMotionValuesFromProps(n,o,a){return ef(n,o,a)}}class _S extends Zy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=lt}getBaseTargetFromProps(n,o){return n[o]}readValueFromInstance(n,o){if(Nr.has(o)){const a=hf(o);return a&&a.default||0}return o=Fg.has(o)?o:Wc(o),n.getAttribute(o)}scrapeMotionValuesFromProps(n,o,a){return Ug(n,o,a)}build(n,o,a){Qc(n,o,this.isSVGTag,a.transformTemplate)}renderInstance(n,o,a,s){Bg(n,o,a,s)}mount(n){this.isSVGTag=Jc(n.tagName),super.mount(n)}}const AS=(t,n)=>Hc(t)?new _S(n):new DS(n,{allowProjection:t!==M.Fragment}),RS=ox({...nP,...kS,...fS,...PS},AS),O2=bw(RS);var ec={},tc={},nc={},jm;function LS(){return jm||(jm=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];if(typeof window<"u"){var d;typeof window.gtag>"u"&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(d=window).gtag.apply(d,u)}},o=n;t.default=o}(nc)),nc}var rc={},Nm;function jS(){return Nm||(Nm=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var n=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function o(d){return d.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(h,m,g){return m>0&&m+h.length!==g.length&&h.search(n)>-1&&g.charAt(m-2)!==":"&&(g.charAt(m+h.length)!=="-"||g.charAt(m-1)==="-")&&g.charAt(m-1).search(/[^\s-]/)<0?h.toLowerCase():h.substr(1).search(/[A-Z]|\../)>-1?h:h.charAt(0).toUpperCase()+h.substr(1)})}function a(d){return typeof d=="string"&&d.indexOf("@")!==-1}var s="REDACTED (Potential Email Address)";function u(d){return a(d)?s:d}function c(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,g=d||"";return h&&(g=o(d)),m&&(g=u(g)),g}}(rc)),rc}var zm;function NS(){return zm||(zm=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GA4=void 0;var n=c(LS()),o=c(jS()),a=["eventCategory","eventAction","eventLabel","eventValue","hitType"],s=["title","location"],u=["page","hitType"];function c(U){return U&&U.__esModule?U:{default:U}}function d(U,j){if(U==null)return{};var V=h(U,j),N,_;if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(U);for(_=0;_<q.length;_++)N=q[_],!(j.indexOf(N)>=0)&&Object.prototype.propertyIsEnumerable.call(U,N)&&(V[N]=U[N])}return V}function h(U,j){if(U==null)return{};var V={},N=Object.keys(U),_,q;for(q=0;q<N.length;q++)_=N[q],!(j.indexOf(_)>=0)&&(V[_]=U[_]);return V}function m(U){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},m(U)}function g(U){return w(U)||v(U)||R(U)||b()}function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(U){if(typeof Symbol<"u"&&U[Symbol.iterator]!=null||U["@@iterator"]!=null)return Array.from(U)}function w(U){if(Array.isArray(U))return $(U)}function x(U,j){var V=Object.keys(U);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(U);j&&(N=N.filter(function(_){return Object.getOwnPropertyDescriptor(U,_).enumerable})),V.push.apply(V,N)}return V}function k(U){for(var j=1;j<arguments.length;j++){var V=arguments[j]!=null?arguments[j]:{};j%2?x(Object(V),!0).forEach(function(N){Q(U,N,V[N])}):Object.getOwnPropertyDescriptors?Object.defineProperties(U,Object.getOwnPropertyDescriptors(V)):x(Object(V)).forEach(function(N){Object.defineProperty(U,N,Object.getOwnPropertyDescriptor(V,N))})}return U}function S(U,j){return B(U)||te(U,j)||R(U,j)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(U,j){if(U){if(typeof U=="string")return $(U,j);var V=Object.prototype.toString.call(U).slice(8,-1);if(V==="Object"&&U.constructor&&(V=U.constructor.name),V==="Map"||V==="Set")return Array.from(U);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return $(U,j)}}function $(U,j){(j==null||j>U.length)&&(j=U.length);for(var V=0,N=new Array(j);V<j;V++)N[V]=U[V];return N}function te(U,j){var V=U==null?null:typeof Symbol<"u"&&U[Symbol.iterator]||U["@@iterator"];if(V!=null){var N,_,q,W,O=[],I=!0,oe=!1;try{if(q=(V=V.call(U)).next,j!==0)for(;!(I=(N=q.call(V)).done)&&(O.push(N.value),O.length!==j);I=!0);}catch(ae){oe=!0,_=ae}finally{try{if(!I&&V.return!=null&&(W=V.return(),Object(W)!==W))return}finally{if(oe)throw _}}return O}}function B(U){if(Array.isArray(U))return U}function ne(U,j){if(!(U instanceof j))throw new TypeError("Cannot call a class as a function")}function ie(U,j){for(var V=0;V<j.length;V++){var N=j[V];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(U,ve(N.key),N)}}function Y(U,j,V){return j&&ie(U.prototype,j),Object.defineProperty(U,"prototype",{writable:!1}),U}function Q(U,j,V){return j=ve(j),j in U?Object.defineProperty(U,j,{value:V,enumerable:!0,configurable:!0,writable:!0}):U[j]=V,U}function ve(U){var j=Me(U,"string");return m(j)==="symbol"?j:String(j)}function Me(U,j){if(m(U)!=="object"||U===null)return U;var V=U[Symbol.toPrimitive];if(V!==void 0){var N=V.call(U,j);if(m(N)!=="object")return N;throw new TypeError("@@toPrimitive must return a primitive value.")}return(j==="string"?String:Number)(U)}var De=function(){function U(){var j=this;ne(this,U),Q(this,"reset",function(){j.isInitialized=!1,j._testMode=!1,j._currentMeasurementId,j._hasLoadedGA=!1,j._isQueuing=!1,j._queueGtag=[]}),Q(this,"_gtag",function(){for(var V=arguments.length,N=new Array(V),_=0;_<V;_++)N[_]=arguments[_];j._testMode||j._isQueuing?j._queueGtag.push(N):n.default.apply(void 0,N)}),Q(this,"_loadGA",function(V,N){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"https://www.googletagmanager.com/gtag/js";if(!(typeof window>"u"||typeof document>"u")&&!j._hasLoadedGA){var q=document.createElement("script");q.async=!0,q.src="".concat(_,"?id=").concat(V),N&&q.setAttribute("nonce",N),document.body.appendChild(q),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},j._hasLoadedGA=!0}}),Q(this,"_toGtagOptions",function(V){if(V){var N={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"},_=Object.entries(V).reduce(function(q,W){var O=S(W,2),I=O[0],oe=O[1];return N[I]?q[N[I]]=oe:q[I]=oe,q},{});return _}}),Q(this,"initialize",function(V){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!V)throw new Error("Require GA_MEASUREMENT_ID");var _=typeof V=="string"?[{trackingId:V}]:V;j._currentMeasurementId=_[0].trackingId;var q=N.gaOptions,W=N.gtagOptions,O=N.nonce,I=N.testMode,oe=I===void 0?!1:I,ae=N.gtagUrl;if(j._testMode=oe,oe||j._loadGA(j._currentMeasurementId,O,ae),j.isInitialized||(j._gtag("js",new Date),_.forEach(function(_e){var Te=k(k(k({},j._toGtagOptions(k(k({},q),_e.gaOptions))),W),_e.gtagOptions);Object.keys(Te).length?j._gtag("config",_e.trackingId,Te):j._gtag("config",_e.trackingId)})),j.isInitialized=!0,!oe){var we=g(j._queueGtag);for(j._queueGtag=[],j._isQueuing=!1;we.length;){var ke=we.shift();j._gtag.apply(j,g(ke)),ke[0]==="get"&&(j._isQueuing=!0)}}}),Q(this,"set",function(V){V&&m(V)==="object"&&(Object.keys(V).length,j._gaCommand("set",V))}),Q(this,"_gaCommandSendEvent",function(V,N,_,q,W){j._gtag("event",N,k(k({event_category:V,event_label:_,value:q},W&&{non_interaction:W.nonInteraction}),j._toGtagOptions(W)))}),Q(this,"_gaCommandSendEventParameters",function(){for(var V=arguments.length,N=new Array(V),_=0;_<V;_++)N[_]=arguments[_];if(typeof N[0]=="string")j._gaCommandSendEvent.apply(j,g(N.slice(1)));else{var q=N[0],W=q.eventCategory,O=q.eventAction,I=q.eventLabel,oe=q.eventValue;q.hitType;var ae=d(q,a);j._gaCommandSendEvent(W,O,I,oe,ae)}}),Q(this,"_gaCommandSendTiming",function(V,N,_,q){j._gtag("event","timing_complete",{name:N,value:_,event_category:V,event_label:q})}),Q(this,"_gaCommandSendPageview",function(V,N){if(N&&Object.keys(N).length){var _=j._toGtagOptions(N),q=_.title,W=_.location,O=d(_,s);j._gtag("event","page_view",k(k(k(k({},V&&{page_path:V}),q&&{page_title:q}),W&&{page_location:W}),O))}else V?j._gtag("event","page_view",{page_path:V}):j._gtag("event","page_view")}),Q(this,"_gaCommandSendPageviewParameters",function(){for(var V=arguments.length,N=new Array(V),_=0;_<V;_++)N[_]=arguments[_];if(typeof N[0]=="string")j._gaCommandSendPageview.apply(j,g(N.slice(1)));else{var q=N[0],W=q.page;q.hitType;var O=d(q,u);j._gaCommandSendPageview(W,O)}}),Q(this,"_gaCommandSend",function(){for(var V=arguments.length,N=new Array(V),_=0;_<V;_++)N[_]=arguments[_];var q=typeof N[0]=="string"?N[0]:N[0].hitType;switch(q){case"event":j._gaCommandSendEventParameters.apply(j,N);break;case"pageview":j._gaCommandSendPageviewParameters.apply(j,N);break;case"timing":j._gaCommandSendTiming.apply(j,g(N.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":break;default:}}),Q(this,"_gaCommandSet",function(){for(var V=arguments.length,N=new Array(V),_=0;_<V;_++)N[_]=arguments[_];typeof N[0]=="string"&&(N[0]=Q({},N[0],N[1])),j._gtag("set",j._toGtagOptions(N[0]))}),Q(this,"_gaCommand",function(V){for(var N=arguments.length,_=new Array(N>1?N-1:0),q=1;q<N;q++)_[q-1]=arguments[q];switch(V){case"send":j._gaCommandSend.apply(j,_);break;case"set":j._gaCommandSet.apply(j,_);break;default:}}),Q(this,"ga",function(){for(var V=arguments.length,N=new Array(V),_=0;_<V;_++)N[_]=arguments[_];if(typeof N[0]=="string")j._gaCommand.apply(j,N);else{var q=N[0];j._gtag("get",j._currentMeasurementId,"client_id",function(W){j._isQueuing=!1;var O=j._queueGtag;for(q({get:function(ae){return ae==="clientId"?W:ae==="trackingId"?j._currentMeasurementId:ae==="apiVersion"?"1":void 0}});O.length;){var I=O.shift();j._gtag.apply(j,g(I))}}),j._isQueuing=!0}return j.ga}),Q(this,"event",function(V,N){if(typeof V=="string")j._gtag("event",V,j._toGtagOptions(N));else{var _=V.action,q=V.category,W=V.label,O=V.value,I=V.nonInteraction,oe=V.transport;if(!q||!_)return;var ae={hitType:"event",eventCategory:(0,o.default)(q),eventAction:(0,o.default)(_)};W&&(ae.eventLabel=(0,o.default)(W)),typeof O<"u"&&(typeof O!="number"||(ae.eventValue=O)),typeof I<"u"&&(typeof I!="boolean"||(ae.nonInteraction=I)),typeof oe<"u"&&(typeof oe!="string"||(["beacon","xhr","image"].indexOf(oe),ae.transport=oe)),j._gaCommand("send",ae)}}),Q(this,"send",function(V){j._gaCommand("send",V)}),this.reset()}return Y(U,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),U}();t.GA4=De;var Le=new De;t.default=Le}(tc)),tc}var Im;function zS(){return Im||(Im=1,function(t){function n(d){"@babel/helpers - typeof";return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},n(d)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ReactGAImplementation=void 0;var o=s(NS());function a(d){if(typeof WeakMap!="function")return null;var h=new WeakMap,m=new WeakMap;return(a=function(b){return b?m:h})(d)}function s(d,h){if(d&&d.__esModule)return d;if(d===null||n(d)!=="object"&&typeof d!="function")return{default:d};var m=a(h);if(m&&m.has(d))return m.get(d);var g={},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in d)if(v!=="default"&&Object.prototype.hasOwnProperty.call(d,v)){var w=b?Object.getOwnPropertyDescriptor(d,v):null;w&&(w.get||w.set)?Object.defineProperty(g,v,w):g[v]=d[v]}return g.default=d,m&&m.set(d,g),g}var u=o.GA4;t.ReactGAImplementation=u;var c=o.default;t.default=c}(ec)),ec}var IS=zS();const C2=To(IS);var oc={exports:{}},Vm;function VS(){return Vm||(Vm=1,function(t,n){(function(o,a){t.exports=a()})(window,function(){return function(o){var a={};function s(u){if(a[u])return a[u].exports;var c=a[u]={i:u,l:!1,exports:{}};return o[u].call(c.exports,c,c.exports,s),c.l=!0,c.exports}return s.m=o,s.c=a,s.d=function(u,c,d){s.o(u,c)||Object.defineProperty(u,c,{enumerable:!0,get:d})},s.r=function(u){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},s.t=function(u,c){if(1&c&&(u=s(u)),8&c||4&c&&typeof u=="object"&&u&&u.__esModule)return u;var d=Object.create(null);if(s.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:u}),2&c&&typeof u!="string")for(var h in u)s.d(d,h,function(m){return u[m]}.bind(null,h));return d},s.n=function(u){var c=u&&u.__esModule?function(){return u.default}:function(){return u};return s.d(c,"a",c),c},s.o=function(u,c){return Object.prototype.hasOwnProperty.call(u,c)},s.p="",s(s.s=0)}([function(o,a,s){o.exports=s(1)},function(o,a,s){function u(v){return function(w){if(Array.isArray(w)){for(var x=0,k=new Array(w.length);x<w.length;x++)k[x]=w[x];return k}}(v)||function(w){if(Symbol.iterator in Object(w)||Object.prototype.toString.call(w)==="[object Arguments]")return Array.from(w)}(v)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}s.r(a);var c=!!window.fbq,d=!1,h=function(){var v;if(d){for(var w=arguments.length,x=new Array(w),k=0;k<w;k++)x[k]=arguments[k];(v=console).info.apply(v,u(["[react-facebook-pixel]"].concat(x)))}},m=function(){var v;if(d){for(var w=arguments.length,x=new Array(w),k=0;k<w;k++)x[k]=arguments[k];(v=console).info.apply(v,u(["[react-facebook-pixel]"].concat(x)))}},g=function(){return c||h("Pixel not initialized before using call ReactPixel.init with required params"),c},b={autoConfig:!0,debug:!1};a.default={init:function(v){var w,x,k,S,E,R,$=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},te=arguments.length>2&&arguments[2]!==void 0?arguments[2]:b;w=window,x=document,k="script",w.fbq||(S=w.fbq=function(){S.callMethod?S.callMethod.apply(S,arguments):S.queue.push(arguments)},w._fbq||(w._fbq=S),S.push=S,S.loaded=!0,S.version="2.0",S.queue=[],(E=x.createElement(k)).async=!0,E.src="https://connect.facebook.net/en_US/fbevents.js",(R=x.getElementsByTagName(k)[0]).parentNode.insertBefore(E,R)),v?(te.autoConfig===!1&&fbq("set","autoConfig",!1,v),fbq("init",v,$),c=!0,d=te.debug):h("Please insert pixel id for initializing")},pageView:function(){g()&&(fbq("track","PageView"),d&&m("called fbq('track', 'PageView');"))},track:function(v,w){g()&&(fbq("track",v,w),d&&(m("called fbq('track', '".concat(v,"');")),w&&m("with data",w)))},trackSingle:function(v,w,x){g()&&(fbq("trackSingle",v,w,x),d&&(m("called fbq('trackSingle', '".concat(v,"', '").concat(w,"');")),x&&m("with data",x)))},trackCustom:function(v,w){g()&&(fbq("trackCustom",v,w),d&&(m("called fbq('trackCustom', '".concat(v,"');")),w&&m("with data",w)))},trackSingleCustom:function(v,w,x){g()&&(fbq("trackSingle",v,w,x),d&&(m("called fbq('trackSingleCustom', '".concat(v,"', '").concat(w,"');")),x&&m("with data",x)))},grantConsent:function(){g()&&(fbq("consent","grant"),d&&m("called fbq('consent', 'grant');"))},revokeConsent:function(){g()&&(fbq("consent","revoke"),d&&m("called fbq('consent', 'revoke');"))},fbq:function(v){function w(){return v.apply(this,arguments)}return w.toString=function(){return v.toString()},w}(function(){if(g()){for(var v=arguments.length,w=new Array(v),x=0;x<v;x++)w[x]=arguments[x];fbq.apply(void 0,w),d&&(m("called fbq('".concat(w.slice(0,2).join("', '"),"')")),w[2]&&m("with data",w[2]))}})}}])})}(oc)),oc.exports}var FS=VS();const E2=To(FS);function pt(t,n){n===void 0&&(n={});var o=n.insertAt;if(t&&typeof document<"u"){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",o==="top"&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}pt(`.react-loading-indicator-normalize,
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
}`);var Fe=function(){return Fe=Object.assign||function(t){for(var n,o=1,a=arguments.length;o<a;o++)for(var s in n=arguments[o])Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t},Fe.apply(this,arguments)};function Ms(t){return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ms(t)}var BS=/^\s+/,$S=/\s+$/;function me(t,n){if(n=n||{},(t=t||"")instanceof me)return t;if(!(this instanceof me))return new me(t,n);var o=function(a){var s={r:0,g:0,b:0},u=1,c=null,d=null,h=null,m=!1,g=!1;typeof a=="string"&&(a=function(x){x=x.replace(BS,"").replace($S,"").toLowerCase();var k,S=!1;if(Dc[x])x=Dc[x],S=!0;else if(x=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(k=an.rgb.exec(x))?{r:k[1],g:k[2],b:k[3]}:(k=an.rgba.exec(x))?{r:k[1],g:k[2],b:k[3],a:k[4]}:(k=an.hsl.exec(x))?{h:k[1],s:k[2],l:k[3]}:(k=an.hsla.exec(x))?{h:k[1],s:k[2],l:k[3],a:k[4]}:(k=an.hsv.exec(x))?{h:k[1],s:k[2],v:k[3]}:(k=an.hsva.exec(x))?{h:k[1],s:k[2],v:k[3],a:k[4]}:(k=an.hex8.exec(x))?{r:Ft(k[1]),g:Ft(k[2]),b:Ft(k[3]),a:qm(k[4]),format:S?"name":"hex8"}:(k=an.hex6.exec(x))?{r:Ft(k[1]),g:Ft(k[2]),b:Ft(k[3]),format:S?"name":"hex"}:(k=an.hex4.exec(x))?{r:Ft(k[1]+""+k[1]),g:Ft(k[2]+""+k[2]),b:Ft(k[3]+""+k[3]),a:qm(k[4]+""+k[4]),format:S?"name":"hex8"}:(k=an.hex3.exec(x))?{r:Ft(k[1]+""+k[1]),g:Ft(k[2]+""+k[2]),b:Ft(k[3]+""+k[3]),format:S?"name":"hex"}:!1}(a)),Ms(a)=="object"&&(Ln(a.r)&&Ln(a.g)&&Ln(a.b)?(b=a.r,v=a.g,w=a.b,s={r:255*Xe(b,255),g:255*Xe(v,255),b:255*Xe(w,255)},m=!0,g=String(a.r).substr(-1)==="%"?"prgb":"rgb"):Ln(a.h)&&Ln(a.s)&&Ln(a.v)?(c=Ei(a.s),d=Ei(a.v),s=function(x,k,S){x=6*Xe(x,360),k=Xe(k,100),S=Xe(S,100);var E=Math.floor(x),R=x-E,$=S*(1-k),te=S*(1-R*k),B=S*(1-(1-R)*k),ne=E%6,ie=[S,te,$,$,B,S][ne],Y=[B,S,S,te,$,$][ne],Q=[$,$,B,S,S,te][ne];return{r:255*ie,g:255*Y,b:255*Q}}(a.h,c,d),m=!0,g="hsv"):Ln(a.h)&&Ln(a.s)&&Ln(a.l)&&(c=Ei(a.s),h=Ei(a.l),s=function(x,k,S){var E,R,$;function te(ie,Y,Q){return Q<0&&(Q+=1),Q>1&&(Q-=1),Q<1/6?ie+6*(Y-ie)*Q:Q<.5?Y:Q<2/3?ie+(Y-ie)*(2/3-Q)*6:ie}if(x=Xe(x,360),k=Xe(k,100),S=Xe(S,100),k===0)E=R=$=S;else{var B=S<.5?S*(1+k):S+k-S*k,ne=2*S-B;E=te(ne,B,x+1/3),R=te(ne,B,x),$=te(ne,B,x-1/3)}return{r:255*E,g:255*R,b:255*$}}(a.h,c,h),m=!0,g="hsl"),a.hasOwnProperty("a")&&(u=a.a));var b,v,w;return u=Jy(u),{ok:m,format:a.format||g,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:u}}(t);this._originalInput=t,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||o.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function Fm(t,n,o){t=Xe(t,255),n=Xe(n,255),o=Xe(o,255);var a,s,u=Math.max(t,n,o),c=Math.min(t,n,o),d=(u+c)/2;if(u==c)a=s=0;else{var h=u-c;switch(s=d>.5?h/(2-u-c):h/(u+c),u){case t:a=(n-o)/h+(n<o?6:0);break;case n:a=(o-t)/h+2;break;case o:a=(t-n)/h+4}a/=6}return{h:a,s,l:d}}function Bm(t,n,o){t=Xe(t,255),n=Xe(n,255),o=Xe(o,255);var a,s,u=Math.max(t,n,o),c=Math.min(t,n,o),d=u,h=u-c;if(s=u===0?0:h/u,u==c)a=0;else{switch(u){case t:a=(n-o)/h+(n<o?6:0);break;case n:a=(o-t)/h+2;break;case o:a=(t-n)/h+4}a/=6}return{h:a,s,v:d}}function $m(t,n,o,a){var s=[un(Math.round(t).toString(16)),un(Math.round(n).toString(16)),un(Math.round(o).toString(16))];return a&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function Um(t,n,o,a){return[un(ev(a)),un(Math.round(t).toString(16)),un(Math.round(n).toString(16)),un(Math.round(o).toString(16))].join("")}function US(t,n){n=n===0?0:n||10;var o=me(t).toHsl();return o.s-=n/100,o.s=Bs(o.s),me(o)}function WS(t,n){n=n===0?0:n||10;var o=me(t).toHsl();return o.s+=n/100,o.s=Bs(o.s),me(o)}function qS(t){return me(t).desaturate(100)}function HS(t,n){n=n===0?0:n||10;var o=me(t).toHsl();return o.l+=n/100,o.l=Bs(o.l),me(o)}function YS(t,n){n=n===0?0:n||10;var o=me(t).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-n/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-n/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-n/100*255))),me(o)}function KS(t,n){n=n===0?0:n||10;var o=me(t).toHsl();return o.l-=n/100,o.l=Bs(o.l),me(o)}function GS(t,n){var o=me(t).toHsl(),a=(o.h+n)%360;return o.h=a<0?360+a:a,me(o)}function XS(t){var n=me(t).toHsl();return n.h=(n.h+180)%360,me(n)}function Wm(t,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var o=me(t).toHsl(),a=[me(t)],s=360/n,u=1;u<n;u++)a.push(me({h:(o.h+u*s)%360,s:o.s,l:o.l}));return a}function QS(t){var n=me(t).toHsl(),o=n.h;return[me(t),me({h:(o+72)%360,s:n.s,l:n.l}),me({h:(o+216)%360,s:n.s,l:n.l})]}function ZS(t,n,o){n=n||6,o=o||30;var a=me(t).toHsl(),s=360/o,u=[me(t)];for(a.h=(a.h-(s*n>>1)+720)%360;--n;)a.h=(a.h+s)%360,u.push(me(a));return u}function JS(t,n){n=n||6;for(var o=me(t).toHsv(),a=o.h,s=o.s,u=o.v,c=[],d=1/n;n--;)c.push(me({h:a,s,v:u})),u=(u+d)%1;return c}me.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,n,o,a=this.toRgb();return t=a.r/255,n=a.g/255,o=a.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(t){return this._a=Jy(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=Bm(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=Bm(this._r,this._g,this._b),n=Math.round(360*t.h),o=Math.round(100*t.s),a=Math.round(100*t.v);return this._a==1?"hsv("+n+", "+o+"%, "+a+"%)":"hsva("+n+", "+o+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=Fm(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=Fm(this._r,this._g,this._b),n=Math.round(360*t.h),o=Math.round(100*t.s),a=Math.round(100*t.l);return this._a==1?"hsl("+n+", "+o+"%, "+a+"%)":"hsla("+n+", "+o+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return $m(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(n,o,a,s,u){var c=[un(Math.round(n).toString(16)),un(Math.round(o).toString(16)),un(Math.round(a).toString(16)),un(ev(s))];return u&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)&&c[3].charAt(0)==c[3].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0)+c[3].charAt(0):c.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Xe(this._r,255))+"%",g:Math.round(100*Xe(this._g,255))+"%",b:Math.round(100*Xe(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Xe(this._r,255))+"%, "+Math.round(100*Xe(this._g,255))+"%, "+Math.round(100*Xe(this._b,255))+"%)":"rgba("+Math.round(100*Xe(this._r,255))+"%, "+Math.round(100*Xe(this._g,255))+"%, "+Math.round(100*Xe(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(eT[$m(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var n="#"+Um(this._r,this._g,this._b,this._a),o=n,a=this._gradientType?"GradientType = 1, ":"";if(t){var s=me(t);o="#"+Um(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+n+",endColorstr="+o+")"},toString:function(t){var n=!!t;t=t||this._format;var o=!1,a=this._a<1&&this._a>=0;return n||!a||t!=="hex"&&t!=="hex6"&&t!=="hex3"&&t!=="hex4"&&t!=="hex8"&&t!=="name"?(t==="rgb"&&(o=this.toRgbString()),t==="prgb"&&(o=this.toPercentageRgbString()),t!=="hex"&&t!=="hex6"||(o=this.toHexString()),t==="hex3"&&(o=this.toHexString(!0)),t==="hex4"&&(o=this.toHex8String(!0)),t==="hex8"&&(o=this.toHex8String()),t==="name"&&(o=this.toName()),t==="hsl"&&(o=this.toHslString()),t==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):t==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return me(this.toString())},_applyModification:function(t,n){var o=t.apply(null,[this].concat([].slice.call(n)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(HS,arguments)},brighten:function(){return this._applyModification(YS,arguments)},darken:function(){return this._applyModification(KS,arguments)},desaturate:function(){return this._applyModification(US,arguments)},saturate:function(){return this._applyModification(WS,arguments)},greyscale:function(){return this._applyModification(qS,arguments)},spin:function(){return this._applyModification(GS,arguments)},_applyCombination:function(t,n){return t.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(ZS,arguments)},complement:function(){return this._applyCombination(XS,arguments)},monochromatic:function(){return this._applyCombination(JS,arguments)},splitcomplement:function(){return this._applyCombination(QS,arguments)},triad:function(){return this._applyCombination(Wm,[3])},tetrad:function(){return this._applyCombination(Wm,[4])}},me.fromRatio=function(t,n){if(Ms(t)=="object"){var o={};for(var a in t)t.hasOwnProperty(a)&&(o[a]=a==="a"?t[a]:Ei(t[a]));t=o}return me(t,n)},me.equals=function(t,n){return!(!t||!n)&&me(t).toRgbString()==me(n).toRgbString()},me.random=function(){return me.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},me.mix=function(t,n,o){o=o===0?0:o||50;var a=me(t).toRgb(),s=me(n).toRgb(),u=o/100;return me({r:(s.r-a.r)*u+a.r,g:(s.g-a.g)*u+a.g,b:(s.b-a.b)*u+a.b,a:(s.a-a.a)*u+a.a})},me.readability=function(t,n){var o=me(t),a=me(n);return(Math.max(o.getLuminance(),a.getLuminance())+.05)/(Math.min(o.getLuminance(),a.getLuminance())+.05)},me.isReadable=function(t,n,o){var a,s,u=me.readability(t,n);switch(s=!1,(a=function(c){var d,h;return d=((c=c||{level:"AA",size:"small"}).level||"AA").toUpperCase(),h=(c.size||"small").toLowerCase(),d!=="AA"&&d!=="AAA"&&(d="AA"),h!=="small"&&h!=="large"&&(h="small"),{level:d,size:h}}(o)).level+a.size){case"AAsmall":case"AAAlarge":s=u>=4.5;break;case"AAlarge":s=u>=3;break;case"AAAsmall":s=u>=7}return s},me.mostReadable=function(t,n,o){var a,s,u,c,d=null,h=0;s=(o=o||{}).includeFallbackColors,u=o.level,c=o.size;for(var m=0;m<n.length;m++)(a=me.readability(t,n[m]))>h&&(h=a,d=me(n[m]));return me.isReadable(t,d,{level:u,size:c})||!s?d:(o.includeFallbackColors=!1,me.mostReadable(t,["#fff","#000"],o))};var Dc=me.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},eT=me.hexNames=function(t){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[t[o]]=o);return n}(Dc);function Jy(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Xe(t,n){(function(a){return typeof a=="string"&&a.indexOf(".")!=-1&&parseFloat(a)===1})(t)&&(t="100%");var o=function(a){return typeof a=="string"&&a.indexOf("%")!=-1}(t);return t=Math.min(n,Math.max(0,parseFloat(t))),o&&(t=parseInt(t*n,10)/100),Math.abs(t-n)<1e-6?1:t%n/parseFloat(n)}function Bs(t){return Math.min(1,Math.max(0,t))}function Ft(t){return parseInt(t,16)}function un(t){return t.length==1?"0"+t:""+t}function Ei(t){return t<=1&&(t=100*t+"%"),t}function ev(t){return Math.round(255*parseFloat(t)).toString(16)}function qm(t){return Ft(t)/255}var lr,cs,fs,an=(cs="[\\s|\\(]+("+(lr="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+lr+")[,|\\s]+("+lr+")\\s*\\)?",fs="[\\s|\\(]+("+lr+")[,|\\s]+("+lr+")[,|\\s]+("+lr+")[,|\\s]+("+lr+")\\s*\\)?",{CSS_UNIT:new RegExp(lr),rgb:new RegExp("rgb"+cs),rgba:new RegExp("rgba"+fs),hsl:new RegExp("hsl"+cs),hsla:new RegExp("hsla"+fs),hsv:new RegExp("hsv"+cs),hsva:new RegExp("hsva"+fs),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Ln(t){return!!an.CSS_UNIT.exec(t)}var $s=function(t,n){var o=(typeof t=="string"?parseInt(t):t)||0;if(o>=-5&&o<=5){var a=o,s=parseFloat(n),u=s+a*(s/5)*-1;return(u==0||u<=Number.EPSILON)&&(u=.1),{animationPeriod:u+"s"}}return{animationPeriod:n}},Us=function(t,n){var o=t||{},a="";switch(n){case"small":a="12px";break;case"medium":a="16px";break;case"large":a="20px";break;default:a=void 0}var s={};if(o.fontSize){var u=o.fontSize;s=function(c,d){var h={};for(var m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.indexOf(m)<0&&(h[m]=c[m]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(m=Object.getOwnPropertySymbols(c);g<m.length;g++)d.indexOf(m[g])<0&&Object.prototype.propertyIsEnumerable.call(c,m[g])&&(h[m[g]]=c[m[g]])}return h}(o,["fontSize"]),a=u}return{fontSize:a,styles:s}},tT={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Ws=function(t){var n=t.className,o=t.text,a=t.textColor,s=t.staticText,u=t.style;return o?Ee.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:Fe(Fe(Fe({},s&&tT),a&&{color:a,mixBlendMode:"unset"}),u&&u)},typeof o=="string"&&o.length?o:"loading"):null},Yi="rgb(50, 205, 50)";function qs(t,n){n===void 0&&(n=0);var o=[];return function a(s,u){return u===void 0&&(u=0),o.push.apply(o,s),o.length<u&&a(o,u),o.slice(0,u)}(t,n)}pt(`.atom-rli-bounding-box {
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
}`);me(Yi).toRgb();Array.from({length:4},function(t,n){return"--atom-phase".concat(n+1,"-rgb")});pt(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(t,n){return"--commet-phase".concat(n+1,"-color")});pt(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},function(t,n){return"--OP-annulus-phase".concat(n+1,"-color")});function ic(t){return t&&t.Math===Math&&t}pt(`.OP-dotted-rli-bounding-box {
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
}`);ic(typeof window=="object"&&window)||ic(typeof self=="object"&&self)||ic(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(t,n){return"--OP-dotted-phase".concat(n+1,"-color")});pt(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},function(t,n){return"--OP-spokes-phase".concat(n+1,"-color")});pt(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},function(t,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")});pt(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},function(t,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]});pt(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(t,n){return"--four-square-phase".concat(n+1,"-color")});pt(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(t,n){return"--mosaic-phase".concat(n+1,"-color")});pt(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(t,n){return"--riple-phase".concat(n+1,"-color")});pt(`.pulsate-rli-bounding-box {
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
}`);var lo=Array.from({length:4},function(t,n){return"--TD-pulsate-phase".concat(n+1,"-color")}),nT=function(t){var n,o=Us(t?.style,t?.size),a=o.styles,s=o.fontSize,u=t?.easing,c=$s(t?.speedPlus,"1.2s").animationPeriod,d=function(h){var m={};if(h instanceof Array){for(var g=qs(h,lo.length),b=0;b<g.length&&!(b>=4);b++)m[lo[b]]=g[b];return m}try{if(typeof h!="string")throw new Error("Color String expected");for(var v=0;v<lo.length;v++)m[lo[v]]=h}catch(w){for(w instanceof Error,v=0;v<lo.length;v++)m[lo[v]]=Yi}return m}((n=t?.color)!==null&&n!==void 0?n:"");return Ee.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:Fe(Fe(Fe(Fe(Fe({},s&&{fontSize:s}),c&&{"--rli-animation-duration":c}),u&&{"--rli-animation-function":u}),d),a),role:"status","aria-live":"polite","aria-label":"Loading"},Ee.createElement("span",{className:"rli-d-i-b pulsate-indicator"},Ee.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Ee.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Ee.createElement("span",{className:"rli-d-i-b pulsate-dot"})),Ee.createElement(Ws,{staticText:!0,text:t?.text,textColor:t?.textColor}))};pt(`.brick-stack-rli-bounding-box {
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
}`);var uo=Array.from({length:4},function(t,n){return"--TD-brick-stack-phase".concat(n+1,"-color")}),rT=function(t){var n,o=Us(t?.style,t?.size),a=o.styles,s=o.fontSize,u=t?.easing,c=$s(t?.speedPlus,"1s").animationPeriod,d=function(h){var m={};if(h instanceof Array){for(var g=qs(h,uo.length),b=0;b<g.length&&!(b>=4);b++)m[uo[b]]=g[b];return m}try{if(typeof h!="string")throw new Error("Color String expected");for(var v=0;v<uo.length;v++)m[uo[v]]=h}catch(w){for(w instanceof Error,v=0;v<uo.length;v++)m[uo[v]]=Yi}return m}((n=t?.color)!==null&&n!==void 0?n:"");return Ee.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:Fe(Fe(Fe(Fe(Fe({},s&&{fontSize:s}),c&&{"--rli-animation-duration":c}),u&&{"--rli-animation-function":u}),d),a),role:"status","aria-live":"polite","aria-label":"Loading"},Ee.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},Ee.createElement("span",{className:"rli-d-i-b brick-stack"})),Ee.createElement(Ws,{staticText:!0,text:t?.text,textColor:t?.textColor}))};pt(`.bob-rli-bounding-box {
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
}`);var co=Array.from({length:4},function(t,n){return"--TD-bob-phase".concat(n+1,"-color")}),oT=function(t){var n,o=Us(t?.style,t?.size),a=o.styles,s=o.fontSize,u=t?.easing,c=$s(t?.speedPlus,"1.2s").animationPeriod,d=function(h){var m={};if(h instanceof Array){for(var g=qs(h,co.length),b=0;b<g.length&&!(b>=4);b++)m[co[b]]=g[b];return m}try{if(typeof h!="string")throw new Error("Color String expected");for(var v=0;v<co.length;v++)m[co[v]]=h}catch(w){for(w instanceof Error,v=0;v<co.length;v++)m[co[v]]=Yi}return m}((n=t?.color)!==null&&n!==void 0?n:"");return Ee.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:Fe(Fe(Fe(Fe(Fe({},s&&{fontSize:s}),c&&{"--rli-animation-duration":c}),u&&{"--rli-animation-function":u}),d),a),role:"status","aria-live":"polite","aria-label":"Loading"},Ee.createElement("span",{className:"bob-indicator"},Ee.createElement("span",{className:"bobbing"})),Ee.createElement(Ws,{staticText:!0,text:t?.text,textColor:t?.textColor}))};pt(`.bounce-rli-bounding-box {
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
}`);var fo=Array.from({length:4},function(t,n){return"--TD-bounce-phase".concat(n+1,"-color")}),iT=function(t){var n,o=Us(t?.style,t?.size),a=o.styles,s=o.fontSize,u=t?.easing,c=$s(t?.speedPlus,"0.5s").animationPeriod,d=function(h){var m={};if(h instanceof Array){for(var g=qs(h,fo.length),b=0;b<g.length&&!(b>=4);b++)m[fo[b]]=g[b];return m}try{if(typeof h!="string")throw new Error("Color String expected");for(var v=0;v<fo.length;v++)m[fo[v]]=h}catch{for(v=0;v<fo.length;v++)m[fo[v]]=Yi}return m}((n=t?.color)!==null&&n!==void 0?n:"");return Ee.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:Fe(Fe(Fe(Fe(Fe({},s&&{fontSize:s}),c&&{"--rli-animation-duration":c}),u&&{"--rli-animation-function":u}),d),a)},Ee.createElement("span",{className:"wrapper"},Ee.createElement("span",{className:"group"},Ee.createElement("span",{className:"rli-d-i-b dot"}),Ee.createElement("span",{className:"rli-d-i-b dot"}),Ee.createElement("span",{className:"rli-d-i-b dot"})),Ee.createElement("span",{className:"group"},Ee.createElement("span",{className:"rli-d-i-b shadow"}),Ee.createElement("span",{className:"rli-d-i-b shadow"}),Ee.createElement("span",{className:"rli-d-i-b shadow"}))),Ee.createElement(Ws,{staticText:!0,text:t?.text,textColor:t?.textColor,style:{marginTop:"2px"}}))},M2=function(t){var n=Object(t).variant,o=n===void 0?"pulsate":n;return o==="pulsate"?Ee.createElement(nT,Fe({},t)):o==="brick-stack"?Ee.createElement(rT,Fe({},t)):o==="bob"?Ee.createElement(oT,Fe({},t)):o==="bounce"?Ee.createElement(iT,Fe({},t)):null};pt(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(t,n){return"--shape-phase".concat(n+1,"-color")});pt(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(t,n){return"--trophySpin-phase".concat(n+1,"-color")});pt(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(t,n){return"--slab-phase".concat(n+1,"-color")});pt(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(t,n){return"--life-line-phase".concat(n+1,"-color")});/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tv=(...t)=>t.filter((n,o,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===o).join(" ").trim();/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=M.forwardRef(({color:t="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:s="",children:u,iconNode:c,...d},h)=>M.createElement("svg",{ref:h,...sT,width:n,height:n,stroke:t,strokeWidth:a?Number(o)*24/Number(n):o,className:tv("lucide",s),...d},[...c.map(([m,g])=>M.createElement(m,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=(t,n)=>{const o=M.forwardRef(({className:a,...s},u)=>M.createElement(lT,{ref:u,iconNode:n,className:tv(`lucide-${aT(t)}`,a),...s}));return o.displayName=`${t}`,o};/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],D2=Hs("ArrowDownRight",uT);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],_2=Hs("ArrowUpRight",cT);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],A2=Hs("Calendar",fT);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],R2=Hs("X",dT),nv=6048e5,hT=864e5,rv=6e4,ov=36e5,ds=43200,Hm=1440,Ym=Symbol.for("constructDateFrom");function cn(t,n){return typeof t=="function"?t(n):t&&typeof t=="object"&&Ym in t?t[Ym](n):t instanceof Date?new t.constructor(n):new Date(n)}function tt(t,n){return cn(n||t,t)}function pT(t,n,o){const a=tt(t,o?.in);return isNaN(n)?cn(t,NaN):(a.setDate(a.getDate()+n),a)}let mT={};function Ki(){return mT}function Vi(t,n){const o=Ki(),a=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0,s=tt(t,n?.in),u=s.getDay(),c=(u<a?7:0)+u-a;return s.setDate(s.getDate()-c),s.setHours(0,0,0,0),s}function Ds(t,n){return Vi(t,{...n,weekStartsOn:1})}function iv(t,n){const o=tt(t,n?.in),a=o.getFullYear(),s=cn(o,0);s.setFullYear(a+1,0,4),s.setHours(0,0,0,0);const u=Ds(s),c=cn(o,0);c.setFullYear(a,0,4),c.setHours(0,0,0,0);const d=Ds(c);return o.getTime()>=u.getTime()?a+1:o.getTime()>=d.getTime()?a:a-1}function _s(t){const n=tt(t),o=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return o.setUTCFullYear(n.getFullYear()),+t-+o}function Ys(t,...n){const o=cn.bind(null,t||n.find(a=>typeof a=="object"));return n.map(o)}function Km(t,n){const o=tt(t,n?.in);return o.setHours(0,0,0,0),o}function gT(t,n,o){const[a,s]=Ys(o?.in,t,n),u=Km(a),c=Km(s),d=+u-_s(u),h=+c-_s(c);return Math.round((d-h)/hT)}function yT(t,n){const o=iv(t,n),a=cn(t,0);return a.setFullYear(o,0,4),a.setHours(0,0,0,0),Ds(a)}function ws(t,n){const o=+tt(t)-+tt(n);return o<0?-1:o>0?1:o}function vT(t){return cn(t,Date.now())}function bT(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function wT(t){return!(!bT(t)&&typeof t!="number"||isNaN(+tt(t)))}function xT(t,n,o){const[a,s]=Ys(o?.in,t,n),u=a.getFullYear()-s.getFullYear(),c=a.getMonth()-s.getMonth();return u*12+c}function kT(t){return n=>{const a=(t?Math[t]:Math.trunc)(n);return a===0?0:a}}function PT(t,n){return+tt(t)-+tt(n)}function ST(t,n){const o=tt(t,n?.in);return o.setHours(23,59,59,999),o}function TT(t,n){const o=tt(t,n?.in),a=o.getMonth();return o.setFullYear(o.getFullYear(),a+1,0),o.setHours(23,59,59,999),o}function OT(t,n){const o=tt(t,n?.in);return+ST(o,n)==+TT(o,n)}function CT(t,n,o){const[a,s,u]=Ys(o?.in,t,t,n),c=ws(s,u),d=Math.abs(xT(s,u));if(d<1)return 0;s.getMonth()===1&&s.getDate()>27&&s.setDate(30),s.setMonth(s.getMonth()-c*d);let h=ws(s,u)===-c;OT(a)&&d===1&&ws(a,u)===1&&(h=!1);const m=c*(d-+h);return m===0?0:m}function ET(t,n,o){const a=PT(t,n)/1e3;return kT(o?.roundingMethod)(a)}function MT(t,n){const o=tt(t,n?.in);return o.setFullYear(o.getFullYear(),0,1),o.setHours(0,0,0,0),o}const DT={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},_T=(t,n,o)=>{let a;const s=DT[t];return typeof s=="string"?a=s:n===1?a=s.one:a=s.other.replace("{{count}}",n.toString()),o?.addSuffix?o.comparison&&o.comparison>0?"in "+a:a+" ago":a};function xo(t){return(n={})=>{const o=n.width?String(n.width):t.defaultWidth;return t.formats[o]||t.formats[t.defaultWidth]}}const AT={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},RT={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},LT={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},jT={date:xo({formats:AT,defaultWidth:"full"}),time:xo({formats:RT,defaultWidth:"full"}),dateTime:xo({formats:LT,defaultWidth:"full"})},NT={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},zT=(t,n,o,a)=>NT[t];function vn(t){return(n,o)=>{const a=o?.context?String(o.context):"standalone";let s;if(a==="formatting"&&t.formattingValues){const c=t.defaultFormattingWidth||t.defaultWidth,d=o?.width?String(o.width):c;s=t.formattingValues[d]||t.formattingValues[c]}else{const c=t.defaultWidth,d=o?.width?String(o.width):t.defaultWidth;s=t.values[d]||t.values[c]}const u=t.argumentCallback?t.argumentCallback(n):n;return s[u]}}const IT={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},VT={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},FT={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},BT={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},$T={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},UT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},WT=(t,n)=>{const o=Number(t),a=o%100;if(a>20||a<10)switch(a%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},qT={ordinalNumber:WT,era:vn({values:IT,defaultWidth:"wide"}),quarter:vn({values:VT,defaultWidth:"wide",argumentCallback:t=>t-1}),month:vn({values:FT,defaultWidth:"wide"}),day:vn({values:BT,defaultWidth:"wide"}),dayPeriod:vn({values:$T,defaultWidth:"wide",formattingValues:UT,defaultFormattingWidth:"wide"})};function bn(t){return(n,o={})=>{const a=o.width,s=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],u=n.match(s);if(!u)return null;const c=u[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(d)?YT(d,b=>b.test(c)):HT(d,b=>b.test(c));let m;m=t.valueCallback?t.valueCallback(h):h,m=o.valueCallback?o.valueCallback(m):m;const g=n.slice(c.length);return{value:m,rest:g}}}function HT(t,n){for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o)&&n(t[o]))return o}function YT(t,n){for(let o=0;o<t.length;o++)if(n(t[o]))return o}function av(t){return(n,o={})=>{const a=n.match(t.matchPattern);if(!a)return null;const s=a[0],u=n.match(t.parsePattern);if(!u)return null;let c=t.valueCallback?t.valueCallback(u[0]):u[0];c=o.valueCallback?o.valueCallback(c):c;const d=n.slice(s.length);return{value:c,rest:d}}}const KT=/^(\d+)(th|st|nd|rd)?/i,GT=/\d+/i,XT={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},QT={any:[/^b/i,/^(a|c)/i]},ZT={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},JT={any:[/1/i,/2/i,/3/i,/4/i]},e5={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},t5={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},n5={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},r5={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},o5={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},i5={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},a5={ordinalNumber:av({matchPattern:KT,parsePattern:GT,valueCallback:t=>parseInt(t,10)}),era:bn({matchPatterns:XT,defaultMatchWidth:"wide",parsePatterns:QT,defaultParseWidth:"any"}),quarter:bn({matchPatterns:ZT,defaultMatchWidth:"wide",parsePatterns:JT,defaultParseWidth:"any",valueCallback:t=>t+1}),month:bn({matchPatterns:e5,defaultMatchWidth:"wide",parsePatterns:t5,defaultParseWidth:"any"}),day:bn({matchPatterns:n5,defaultMatchWidth:"wide",parsePatterns:r5,defaultParseWidth:"any"}),dayPeriod:bn({matchPatterns:o5,defaultMatchWidth:"any",parsePatterns:i5,defaultParseWidth:"any"})},sv={code:"en-US",formatDistance:_T,formatLong:jT,formatRelative:zT,localize:qT,match:a5,options:{weekStartsOn:0,firstWeekContainsDate:1}};function s5(t,n){const o=tt(t,n?.in);return gT(o,MT(o))+1}function l5(t,n){const o=tt(t,n?.in),a=+Ds(o)-+yT(o);return Math.round(a/nv)+1}function lv(t,n){const o=tt(t,n?.in),a=o.getFullYear(),s=Ki(),u=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,c=cn(n?.in||t,0);c.setFullYear(a+1,0,u),c.setHours(0,0,0,0);const d=Vi(c,n),h=cn(n?.in||t,0);h.setFullYear(a,0,u),h.setHours(0,0,0,0);const m=Vi(h,n);return+o>=+d?a+1:+o>=+m?a:a-1}function u5(t,n){const o=Ki(),a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,s=lv(t,n),u=cn(n?.in||t,0);return u.setFullYear(s,0,a),u.setHours(0,0,0,0),Vi(u,n)}function c5(t,n){const o=tt(t,n?.in),a=+Vi(o,n)-+u5(o,n);return Math.round(a/nv)+1}function Ve(t,n){const o=t<0?"-":"",a=Math.abs(t).toString().padStart(n,"0");return o+a}const ur={y(t,n){const o=t.getFullYear(),a=o>0?o:1-o;return Ve(n==="yy"?a%100:a,n.length)},M(t,n){const o=t.getMonth();return n==="M"?String(o+1):Ve(o+1,2)},d(t,n){return Ve(t.getDate(),n.length)},a(t,n){const o=t.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return o.toUpperCase();case"aaa":return o;case"aaaaa":return o[0];case"aaaa":default:return o==="am"?"a.m.":"p.m."}},h(t,n){return Ve(t.getHours()%12||12,n.length)},H(t,n){return Ve(t.getHours(),n.length)},m(t,n){return Ve(t.getMinutes(),n.length)},s(t,n){return Ve(t.getSeconds(),n.length)},S(t,n){const o=n.length,a=t.getMilliseconds(),s=Math.trunc(a*Math.pow(10,o-3));return Ve(s,n.length)}},ho={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Gm={G:function(t,n,o){const a=t.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return o.era(a,{width:"abbreviated"});case"GGGGG":return o.era(a,{width:"narrow"});case"GGGG":default:return o.era(a,{width:"wide"})}},y:function(t,n,o){if(n==="yo"){const a=t.getFullYear(),s=a>0?a:1-a;return o.ordinalNumber(s,{unit:"year"})}return ur.y(t,n)},Y:function(t,n,o,a){const s=lv(t,a),u=s>0?s:1-s;if(n==="YY"){const c=u%100;return Ve(c,2)}return n==="Yo"?o.ordinalNumber(u,{unit:"year"}):Ve(u,n.length)},R:function(t,n){const o=iv(t);return Ve(o,n.length)},u:function(t,n){const o=t.getFullYear();return Ve(o,n.length)},Q:function(t,n,o){const a=Math.ceil((t.getMonth()+1)/3);switch(n){case"Q":return String(a);case"QQ":return Ve(a,2);case"Qo":return o.ordinalNumber(a,{unit:"quarter"});case"QQQ":return o.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return o.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,n,o){const a=Math.ceil((t.getMonth()+1)/3);switch(n){case"q":return String(a);case"qq":return Ve(a,2);case"qo":return o.ordinalNumber(a,{unit:"quarter"});case"qqq":return o.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return o.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,n,o){const a=t.getMonth();switch(n){case"M":case"MM":return ur.M(t,n);case"Mo":return o.ordinalNumber(a+1,{unit:"month"});case"MMM":return o.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return o.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(a,{width:"wide",context:"formatting"})}},L:function(t,n,o){const a=t.getMonth();switch(n){case"L":return String(a+1);case"LL":return Ve(a+1,2);case"Lo":return o.ordinalNumber(a+1,{unit:"month"});case"LLL":return o.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return o.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(a,{width:"wide",context:"standalone"})}},w:function(t,n,o,a){const s=c5(t,a);return n==="wo"?o.ordinalNumber(s,{unit:"week"}):Ve(s,n.length)},I:function(t,n,o){const a=l5(t);return n==="Io"?o.ordinalNumber(a,{unit:"week"}):Ve(a,n.length)},d:function(t,n,o){return n==="do"?o.ordinalNumber(t.getDate(),{unit:"date"}):ur.d(t,n)},D:function(t,n,o){const a=s5(t);return n==="Do"?o.ordinalNumber(a,{unit:"dayOfYear"}):Ve(a,n.length)},E:function(t,n,o){const a=t.getDay();switch(n){case"E":case"EE":case"EEE":return o.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return o.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(a,{width:"short",context:"formatting"});case"EEEE":default:return o.day(a,{width:"wide",context:"formatting"})}},e:function(t,n,o,a){const s=t.getDay(),u=(s-a.weekStartsOn+8)%7||7;switch(n){case"e":return String(u);case"ee":return Ve(u,2);case"eo":return o.ordinalNumber(u,{unit:"day"});case"eee":return o.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return o.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(s,{width:"short",context:"formatting"});case"eeee":default:return o.day(s,{width:"wide",context:"formatting"})}},c:function(t,n,o,a){const s=t.getDay(),u=(s-a.weekStartsOn+8)%7||7;switch(n){case"c":return String(u);case"cc":return Ve(u,n.length);case"co":return o.ordinalNumber(u,{unit:"day"});case"ccc":return o.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return o.day(s,{width:"narrow",context:"standalone"});case"cccccc":return o.day(s,{width:"short",context:"standalone"});case"cccc":default:return o.day(s,{width:"wide",context:"standalone"})}},i:function(t,n,o){const a=t.getDay(),s=a===0?7:a;switch(n){case"i":return String(s);case"ii":return Ve(s,n.length);case"io":return o.ordinalNumber(s,{unit:"day"});case"iii":return o.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return o.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return o.day(a,{width:"short",context:"formatting"});case"iiii":default:return o.day(a,{width:"wide",context:"formatting"})}},a:function(t,n,o){const s=t.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return o.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return o.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return o.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,n,o){const a=t.getHours();let s;switch(a===12?s=ho.noon:a===0?s=ho.midnight:s=a/12>=1?"pm":"am",n){case"b":case"bb":return o.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return o.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return o.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,n,o){const a=t.getHours();let s;switch(a>=17?s=ho.evening:a>=12?s=ho.afternoon:a>=4?s=ho.morning:s=ho.night,n){case"B":case"BB":case"BBB":return o.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return o.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,n,o){if(n==="ho"){let a=t.getHours()%12;return a===0&&(a=12),o.ordinalNumber(a,{unit:"hour"})}return ur.h(t,n)},H:function(t,n,o){return n==="Ho"?o.ordinalNumber(t.getHours(),{unit:"hour"}):ur.H(t,n)},K:function(t,n,o){const a=t.getHours()%12;return n==="Ko"?o.ordinalNumber(a,{unit:"hour"}):Ve(a,n.length)},k:function(t,n,o){let a=t.getHours();return a===0&&(a=24),n==="ko"?o.ordinalNumber(a,{unit:"hour"}):Ve(a,n.length)},m:function(t,n,o){return n==="mo"?o.ordinalNumber(t.getMinutes(),{unit:"minute"}):ur.m(t,n)},s:function(t,n,o){return n==="so"?o.ordinalNumber(t.getSeconds(),{unit:"second"}):ur.s(t,n)},S:function(t,n){return ur.S(t,n)},X:function(t,n,o){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(n){case"X":return Qm(a);case"XXXX":case"XX":return Ar(a);case"XXXXX":case"XXX":default:return Ar(a,":")}},x:function(t,n,o){const a=t.getTimezoneOffset();switch(n){case"x":return Qm(a);case"xxxx":case"xx":return Ar(a);case"xxxxx":case"xxx":default:return Ar(a,":")}},O:function(t,n,o){const a=t.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Xm(a,":");case"OOOO":default:return"GMT"+Ar(a,":")}},z:function(t,n,o){const a=t.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Xm(a,":");case"zzzz":default:return"GMT"+Ar(a,":")}},t:function(t,n,o){const a=Math.trunc(+t/1e3);return Ve(a,n.length)},T:function(t,n,o){return Ve(+t,n.length)}};function Xm(t,n=""){const o=t>0?"-":"+",a=Math.abs(t),s=Math.trunc(a/60),u=a%60;return u===0?o+String(s):o+String(s)+n+Ve(u,2)}function Qm(t,n){return t%60===0?(t>0?"-":"+")+Ve(Math.abs(t)/60,2):Ar(t,n)}function Ar(t,n=""){const o=t>0?"-":"+",a=Math.abs(t),s=Ve(Math.trunc(a/60),2),u=Ve(a%60,2);return o+s+n+u}const Zm=(t,n)=>{switch(t){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},uv=(t,n)=>{switch(t){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},f5=(t,n)=>{const o=t.match(/(P+)(p+)?/)||[],a=o[1],s=o[2];if(!s)return Zm(t,n);let u;switch(a){case"P":u=n.dateTime({width:"short"});break;case"PP":u=n.dateTime({width:"medium"});break;case"PPP":u=n.dateTime({width:"long"});break;case"PPPP":default:u=n.dateTime({width:"full"});break}return u.replace("{{date}}",Zm(a,n)).replace("{{time}}",uv(s,n))},d5={p:uv,P:f5},h5=/^D+$/,p5=/^Y+$/,m5=["D","DD","YY","YYYY"];function g5(t){return h5.test(t)}function y5(t){return p5.test(t)}function v5(t,n,o){const a=b5(t,n,o);if(m5.includes(t))throw new RangeError(a)}function b5(t,n,o){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${n}\`) for formatting ${a} to the input \`${o}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const w5=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,x5=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,k5=/^'([^]*?)'?$/,P5=/''/g,S5=/[a-zA-Z]/;function L2(t,n,o){const a=Ki(),s=o?.locale??a.locale??sv,u=o?.firstWeekContainsDate??o?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,c=o?.weekStartsOn??o?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,d=tt(t,o?.in);if(!wT(d))throw new RangeError("Invalid time value");let h=n.match(x5).map(g=>{const b=g[0];if(b==="p"||b==="P"){const v=d5[b];return v(g,s.formatLong)}return g}).join("").match(w5).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const b=g[0];if(b==="'")return{isToken:!1,value:T5(g)};if(Gm[b])return{isToken:!0,value:g};if(b.match(S5))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return{isToken:!1,value:g}});s.localize.preprocessor&&(h=s.localize.preprocessor(d,h));const m={firstWeekContainsDate:u,weekStartsOn:c,locale:s};return h.map(g=>{if(!g.isToken)return g.value;const b=g.value;(!o?.useAdditionalWeekYearTokens&&y5(b)||!o?.useAdditionalDayOfYearTokens&&g5(b))&&v5(b,n,String(t));const v=Gm[b[0]];return v(d,b,s.localize,m)}).join("")}function T5(t){const n=t.match(k5);return n?n[1].replace(P5,"'"):t}function O5(t,n,o){const a=Ki(),s=o?.locale??a.locale??sv,u=2520,c=ws(t,n);if(isNaN(c))throw new RangeError("Invalid time value");const d=Object.assign({},o,{addSuffix:o?.addSuffix,comparison:c}),[h,m]=Ys(o?.in,...c>0?[n,t]:[t,n]),g=ET(m,h),b=(_s(m)-_s(h))/1e3,v=Math.round((g-b)/60);let w;if(v<2)return o?.includeSeconds?g<5?s.formatDistance("lessThanXSeconds",5,d):g<10?s.formatDistance("lessThanXSeconds",10,d):g<20?s.formatDistance("lessThanXSeconds",20,d):g<40?s.formatDistance("halfAMinute",0,d):g<60?s.formatDistance("lessThanXMinutes",1,d):s.formatDistance("xMinutes",1,d):v===0?s.formatDistance("lessThanXMinutes",1,d):s.formatDistance("xMinutes",v,d);if(v<45)return s.formatDistance("xMinutes",v,d);if(v<90)return s.formatDistance("aboutXHours",1,d);if(v<Hm){const x=Math.round(v/60);return s.formatDistance("aboutXHours",x,d)}else{if(v<u)return s.formatDistance("xDays",1,d);if(v<ds){const x=Math.round(v/Hm);return s.formatDistance("xDays",x,d)}else if(v<ds*2)return w=Math.round(v/ds),s.formatDistance("aboutXMonths",w,d)}if(w=CT(m,h),w<12){const x=Math.round(v/ds);return s.formatDistance("xMonths",x,d)}else{const x=w%12,k=Math.trunc(w/12);return x<3?s.formatDistance("aboutXYears",k,d):x<9?s.formatDistance("overXYears",k,d):s.formatDistance("almostXYears",k+1,d)}}function j2(t,n){return O5(t,vT(t),n)}function N2(t,n){return+tt(t)<+tt(n)}function z2(t,n,o){return pT(t,-7,o)}function I2(t,n){const o=()=>cn(n?.in,NaN),s=D5(t);let u;if(s.date){const m=_5(s.date,2);u=A5(m.restDateString,m.year)}if(!u||isNaN(+u))return o();const c=+u;let d=0,h;if(s.time&&(d=R5(s.time),isNaN(d)))return o();if(s.timezone){if(h=L5(s.timezone),isNaN(h))return o()}else{const m=new Date(c+d),g=tt(0,n?.in);return g.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),g.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),g}return tt(c+d+h,n?.in)}const hs={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},C5=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,E5=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,M5=/^([+-])(\d{2})(?::?(\d{2}))?$/;function D5(t){const n={},o=t.split(hs.dateTimeDelimiter);let a;if(o.length>2)return n;if(/:/.test(o[0])?a=o[0]:(n.date=o[0],a=o[1],hs.timeZoneDelimiter.test(n.date)&&(n.date=t.split(hs.timeZoneDelimiter)[0],a=t.substr(n.date.length,t.length))),a){const s=hs.timezone.exec(a);s?(n.time=a.replace(s[1],""),n.timezone=s[1]):n.time=a}return n}function _5(t,n){const o=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+n)+"})|(\\d{2}|[+-]\\d{"+(2+n)+"})$)"),a=t.match(o);if(!a)return{year:NaN,restDateString:""};const s=a[1]?parseInt(a[1]):null,u=a[2]?parseInt(a[2]):null;return{year:u===null?s:u*100,restDateString:t.slice((a[1]||a[2]).length)}}function A5(t,n){if(n===null)return new Date(NaN);const o=t.match(C5);if(!o)return new Date(NaN);const a=!!o[4],s=Si(o[1]),u=Si(o[2])-1,c=Si(o[3]),d=Si(o[4]),h=Si(o[5])-1;if(a)return V5(n,d,h)?j5(n,d,h):new Date(NaN);{const m=new Date(0);return!z5(n,u,c)||!I5(n,s)?new Date(NaN):(m.setUTCFullYear(n,u,Math.max(s,c)),m)}}function Si(t){return t?parseInt(t):1}function R5(t){const n=t.match(E5);if(!n)return NaN;const o=ac(n[1]),a=ac(n[2]),s=ac(n[3]);return F5(o,a,s)?o*ov+a*rv+s*1e3:NaN}function ac(t){return t&&parseFloat(t.replace(",","."))||0}function L5(t){if(t==="Z")return 0;const n=t.match(M5);if(!n)return 0;const o=n[1]==="+"?-1:1,a=parseInt(n[2]),s=n[3]&&parseInt(n[3])||0;return B5(a,s)?o*(a*ov+s*rv):NaN}function j5(t,n,o){const a=new Date(0);a.setUTCFullYear(t,0,4);const s=a.getUTCDay()||7,u=(n-1)*7+o+1-s;return a.setUTCDate(a.getUTCDate()+u),a}const N5=[31,null,31,30,31,30,31,31,30,31,30,31];function cv(t){return t%400===0||t%4===0&&t%100!==0}function z5(t,n,o){return n>=0&&n<=11&&o>=1&&o<=(N5[n]||(cv(t)?29:28))}function I5(t,n){return n>=1&&n<=(cv(t)?366:365)}function V5(t,n,o){return n>=1&&n<=53&&o>=0&&o<=6}function F5(t,n,o){return t===24?n===0&&o===0:o>=0&&o<60&&n>=0&&n<60&&t>=0&&t<25}function B5(t,n){return n>=0&&n<=59}const $5={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXWeeks:{one:"sekitar 1 minggu",other:"sekitar {{count}} minggu"},xWeeks:{one:"1 minggu",other:"{{count}} minggu"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}},U5=(t,n,o)=>{let a;const s=$5[t];return typeof s=="string"?a=s:n===1?a=s.one:a=s.other.replace("{{count}}",n.toString()),o?.addSuffix?o.comparison&&o.comparison>0?"dalam waktu "+a:a+" yang lalu":a},W5={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"d/M/yyyy"},q5={full:"HH.mm.ss",long:"HH.mm.ss",medium:"HH.mm",short:"HH.mm"},H5={full:"{{date}} 'pukul' {{time}}",long:"{{date}} 'pukul' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Y5={date:xo({formats:W5,defaultWidth:"full"}),time:xo({formats:q5,defaultWidth:"full"}),dateTime:xo({formats:H5,defaultWidth:"full"})},K5={lastWeek:"eeee 'lalu pukul' p",yesterday:"'Kemarin pukul' p",today:"'Hari ini pukul' p",tomorrow:"'Besok pukul' p",nextWeek:"eeee 'pukul' p",other:"P"},G5=(t,n,o,a)=>K5[t],X5={narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masehi","Masehi"]},Q5={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["Kuartal ke-1","Kuartal ke-2","Kuartal ke-3","Kuartal ke-4"]},Z5={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agt","Sep","Okt","Nov","Des"],wide:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},J5={narrow:["M","S","S","R","K","J","S"],short:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],abbreviated:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],wide:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},e2={narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},t2={narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},n2=(t,n)=>"ke-"+Number(t),r2={ordinalNumber:n2,era:vn({values:X5,defaultWidth:"wide"}),quarter:vn({values:Q5,defaultWidth:"wide",argumentCallback:t=>t-1}),month:vn({values:Z5,defaultWidth:"wide"}),day:vn({values:J5,defaultWidth:"wide"}),dayPeriod:vn({values:e2,defaultWidth:"wide",formattingValues:t2,defaultFormattingWidth:"wide"})},o2=/^ke-(\d+)?/i,i2=/\d+/i,a2={narrow:/^(sm|m)/i,abbreviated:/^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,wide:/^(sebelum masehi|sebelum era umum|masehi|era umum)/i},s2={any:[/^s/i,/^(m|e)/i]},l2={narrow:/^[1234]/i,abbreviated:/^K-?\s[1234]/i,wide:/^Kuartal ke-?\s?[1234]/i},u2={any:[/1/i,/2/i,/3/i,/4/i]},c2={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,wide:/^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i},f2={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^ap/i,/^me/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},d2={narrow:/^[srkjm]/i,short:/^(min|sen|sel|rab|kam|jum|sab)/i,abbreviated:/^(min|sen|sel|rab|kam|jum|sab)/i,wide:/^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i},h2={narrow:[/^m/i,/^s/i,/^s/i,/^r/i,/^k/i,/^j/i,/^s/i],any:[/^m/i,/^sen/i,/^sel/i,/^r/i,/^k/i,/^j/i,/^sa/i]},p2={narrow:/^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,any:/^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i},m2={any:{am:/^a/i,pm:/^pm/i,midnight:/^tengah m/i,noon:/^tengah h/i,morning:/pagi/i,afternoon:/siang/i,evening:/sore/i,night:/malam/i}},g2={ordinalNumber:av({matchPattern:o2,parsePattern:i2,valueCallback:t=>parseInt(t,10)}),era:bn({matchPatterns:a2,defaultMatchWidth:"wide",parsePatterns:s2,defaultParseWidth:"any"}),quarter:bn({matchPatterns:l2,defaultMatchWidth:"wide",parsePatterns:u2,defaultParseWidth:"any",valueCallback:t=>t+1}),month:bn({matchPatterns:c2,defaultMatchWidth:"wide",parsePatterns:f2,defaultParseWidth:"any"}),day:bn({matchPatterns:d2,defaultMatchWidth:"wide",parsePatterns:h2,defaultParseWidth:"any"}),dayPeriod:bn({matchPatterns:p2,defaultMatchWidth:"any",parsePatterns:m2,defaultParseWidth:"any"})},V2={code:"id",formatDistance:U5,formatLong:Y5,formatRelative:G5,localize:r2,match:g2,options:{weekStartsOn:1,firstWeekContainsDate:1}};var sc={exports:{}},Jm;function y2(){return Jm||(Jm=1,(()=>{var t={296:(s,u,c)=>{var d=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,g=/^0o[0-7]+$/i,b=parseInt,v=typeof c.g=="object"&&c.g&&c.g.Object===Object&&c.g,w=typeof self=="object"&&self&&self.Object===Object&&self,x=v||w||Function("return this")(),k=Object.prototype.toString,S=Math.max,E=Math.min,R=function(){return x.Date.now()};function $(B){var ne=typeof B;return!!B&&(ne=="object"||ne=="function")}function te(B){if(typeof B=="number")return B;if(function(Y){return typeof Y=="symbol"||function(Q){return!!Q&&typeof Q=="object"}(Y)&&k.call(Y)=="[object Symbol]"}(B))return NaN;if($(B)){var ne=typeof B.valueOf=="function"?B.valueOf():B;B=$(ne)?ne+"":ne}if(typeof B!="string")return B===0?B:+B;B=B.replace(d,"");var ie=m.test(B);return ie||g.test(B)?b(B.slice(2),ie?2:8):h.test(B)?NaN:+B}s.exports=function(B,ne,ie){var Y,Q,ve,Me,De,Le,U=0,j=!1,V=!1,N=!0;if(typeof B!="function")throw new TypeError("Expected a function");function _(oe){var ae=Y,we=Q;return Y=Q=void 0,U=oe,Me=B.apply(we,ae)}function q(oe){var ae=oe-Le;return Le===void 0||ae>=ne||ae<0||V&&oe-U>=ve}function W(){var oe=R();if(q(oe))return O(oe);De=setTimeout(W,function(ae){var we=ne-(ae-Le);return V?E(we,ve-(ae-U)):we}(oe))}function O(oe){return De=void 0,N&&Y?_(oe):(Y=Q=void 0,Me)}function I(){var oe=R(),ae=q(oe);if(Y=arguments,Q=this,Le=oe,ae){if(De===void 0)return function(we){return U=we,De=setTimeout(W,ne),j?_(we):Me}(Le);if(V)return De=setTimeout(W,ne),_(Le)}return De===void 0&&(De=setTimeout(W,ne)),Me}return ne=te(ne)||0,$(ie)&&(j=!!ie.leading,ve=(V="maxWait"in ie)?S(te(ie.maxWait)||0,ne):ve,N="trailing"in ie?!!ie.trailing:N),I.cancel=function(){De!==void 0&&clearTimeout(De),U=0,Y=Le=Q=De=void 0},I.flush=function(){return De===void 0?Me:O(R())},I}},96:(s,u,c)=>{var d="Expected a function",h=NaN,m="[object Symbol]",g=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,w=/^0o[0-7]+$/i,x=parseInt,k=typeof c.g=="object"&&c.g&&c.g.Object===Object&&c.g,S=typeof self=="object"&&self&&self.Object===Object&&self,E=k||S||Function("return this")(),R=Object.prototype.toString,$=Math.max,te=Math.min,B=function(){return E.Date.now()};function ne(Y){var Q=typeof Y;return!!Y&&(Q=="object"||Q=="function")}function ie(Y){if(typeof Y=="number")return Y;if(function(Me){return typeof Me=="symbol"||function(De){return!!De&&typeof De=="object"}(Me)&&R.call(Me)==m}(Y))return h;if(ne(Y)){var Q=typeof Y.valueOf=="function"?Y.valueOf():Y;Y=ne(Q)?Q+"":Q}if(typeof Y!="string")return Y===0?Y:+Y;Y=Y.replace(g,"");var ve=v.test(Y);return ve||w.test(Y)?x(Y.slice(2),ve?2:8):b.test(Y)?h:+Y}s.exports=function(Y,Q,ve){var Me=!0,De=!0;if(typeof Y!="function")throw new TypeError(d);return ne(ve)&&(Me="leading"in ve?!!ve.leading:Me,De="trailing"in ve?!!ve.trailing:De),function(Le,U,j){var V,N,_,q,W,O,I=0,oe=!1,ae=!1,we=!0;if(typeof Le!="function")throw new TypeError(d);function ke(rt){var Ct=V,ct=N;return V=N=void 0,I=rt,q=Le.apply(ct,Ct)}function _e(rt){var Ct=rt-O;return O===void 0||Ct>=U||Ct<0||ae&&rt-I>=_}function Te(){var rt=B();if(_e(rt))return Ne(rt);W=setTimeout(Te,function(Ct){var ct=U-(Ct-O);return ae?te(ct,_-(Ct-I)):ct}(rt))}function Ne(rt){return W=void 0,we&&V?ke(rt):(V=N=void 0,q)}function nt(){var rt=B(),Ct=_e(rt);if(V=arguments,N=this,O=rt,Ct){if(W===void 0)return function(ct){return I=ct,W=setTimeout(Te,U),oe?ke(ct):q}(O);if(ae)return W=setTimeout(Te,U),ke(O)}return W===void 0&&(W=setTimeout(Te,U)),q}return U=ie(U)||0,ne(j)&&(oe=!!j.leading,_=(ae="maxWait"in j)?$(ie(j.maxWait)||0,U):_,we="trailing"in j?!!j.trailing:we),nt.cancel=function(){W!==void 0&&clearTimeout(W),I=0,V=O=N=W=void 0},nt.flush=function(){return W===void 0?q:Ne(B())},nt}(Y,Q,{leading:Me,maxWait:Q,trailing:De})}},703:(s,u,c)=>{var d=c(414);function h(){}function m(){}m.resetWarningCache=h,s.exports=function(){function g(w,x,k,S,E,R){if(R!==d){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}}function b(){return g}g.isRequired=g;var v={array:g,bigint:g,bool:g,func:g,number:g,object:g,string:g,symbol:g,any:g,arrayOf:b,element:g,elementType:g,instanceOf:b,node:g,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:m,resetWarningCache:h};return v.PropTypes=v,v}},697:(s,u,c)=>{s.exports=c(703)()},414:s=>{s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},n={};function o(s){var u=n[s];if(u!==void 0)return u.exports;var c=n[s]={exports:{}};return t[s](c,c.exports,o),c.exports}o.n=s=>{var u=s&&s.__esModule?()=>s.default:()=>s;return o.d(u,{a:u}),u},o.d=(s,u)=>{for(var c in u)o.o(u,c)&&!o.o(s,c)&&Object.defineProperty(s,c,{enumerable:!0,get:u[c]})},o.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),o.o=(s,u)=>Object.prototype.hasOwnProperty.call(s,u),o.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var a={};(()=>{o.r(a),o.d(a,{LazyLoadComponent:()=>Ct,LazyLoadImage:()=>Gi,trackWindowScroll:()=>q});const s=As();var u=o.n(s),c=o(697);function d(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function h(X){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},h(X)}function m(X,L){var J=Object.keys(X);if(Object.getOwnPropertySymbols){var ee=Object.getOwnPropertySymbols(X);L&&(ee=ee.filter(function(Se){return Object.getOwnPropertyDescriptor(X,Se).enumerable})),J.push.apply(J,ee)}return J}function g(X,L,J){return(L=v(L))in X?Object.defineProperty(X,L,{value:J,enumerable:!0,configurable:!0,writable:!0}):X[L]=J,X}function b(X,L){for(var J=0;J<L.length;J++){var ee=L[J];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(X,v(ee.key),ee)}}function v(X){var L=function(J,ee){if(h(J)!=="object"||J===null)return J;var Se=J[Symbol.toPrimitive];if(Se!==void 0){var Pe=Se.call(J,"string");if(h(Pe)!=="object")return Pe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(J)}(X);return h(L)==="symbol"?L:String(L)}function w(X,L){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,ee){return J.__proto__=ee,J},w(X,L)}function x(X){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},x(X)}var k=function(X){X.forEach(function(L){L.isIntersecting&&L.target.onVisible()})},S={},E=function(X){(function(F,H){if(typeof H!="function"&&H!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(H&&H.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),H&&w(F,H)})(Ae,X);var L,J,ee,Se,Pe=(ee=Ae,Se=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var F,H=x(ee);if(Se){var de=x(this).constructor;F=Reflect.construct(H,arguments,de)}else F=H.apply(this,arguments);return function(ce,le){if(le&&(h(le)==="object"||typeof le=="function"))return le;if(le!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(Oe){if(Oe===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Oe}(ce)}(this,F)});function Ae(F){var H;if(function(ce,le){if(!(ce instanceof le))throw new TypeError("Cannot call a class as a function")}(this,Ae),(H=Pe.call(this,F)).supportsObserver=!F.scrollPosition&&F.useIntersectionObserver&&d(),H.supportsObserver){var de=F.threshold;H.observer=function(ce){return S[ce]=S[ce]||new IntersectionObserver(k,{rootMargin:ce+"px"}),S[ce]}(de)}return H}return L=Ae,J=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,H=this.placeholder.getBoundingClientRect(),de=this.placeholder.style,ce=parseInt(de.getPropertyValue("margin-left"),10)||0,le=parseInt(de.getPropertyValue("margin-top"),10)||0;return{bottom:F.y+H.bottom+le,left:F.x+H.left+ce,right:F.x+H.right+ce,top:F.y+H.top+le}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var F=this.props,H=F.scrollPosition,de=F.threshold,ce=this.getPlaceholderBoundingBox(H),le=H.y+window.innerHeight,Oe=H.x,Be=H.x+window.innerWidth,$e=H.y;return $e-de<=ce.bottom&&le+de>=ce.top&&Oe-de<=ce.right&&Be+de>=ce.left}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var F=this,H=this.props,de=H.className,ce=H.height,le=H.placeholder,Oe=H.style,Be=H.width;if(le&&typeof le.type!="function")return u().cloneElement(le,{ref:function(ze){return F.placeholder=ze}});var $e=function(ze){for(var Ke=1;Ke<arguments.length;Ke++){var Ue=arguments[Ke]!=null?arguments[Ke]:{};Ke%2?m(Object(Ue),!0).forEach(function(ft){g(ze,ft,Ue[ft])}):Object.getOwnPropertyDescriptors?Object.defineProperties(ze,Object.getOwnPropertyDescriptors(Ue)):m(Object(Ue)).forEach(function(ft){Object.defineProperty(ze,ft,Object.getOwnPropertyDescriptor(Ue,ft))})}return ze}({display:"inline-block"},Oe);return Be!==void 0&&($e.width=Be),ce!==void 0&&($e.height=ce),u().createElement("span",{className:de,ref:function(ze){return F.placeholder=ze},style:$e},le)}}],J&&b(L.prototype,J),Object.defineProperty(L,"prototype",{writable:!1}),Ae}(u().Component);E.propTypes={onVisible:c.PropTypes.func.isRequired,className:c.PropTypes.string,height:c.PropTypes.oneOfType([c.PropTypes.number,c.PropTypes.string]),placeholder:c.PropTypes.element,threshold:c.PropTypes.number,useIntersectionObserver:c.PropTypes.bool,scrollPosition:c.PropTypes.shape({x:c.PropTypes.number.isRequired,y:c.PropTypes.number.isRequired}),width:c.PropTypes.oneOfType([c.PropTypes.number,c.PropTypes.string])},E.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const R=E;var $=o(296),te=o.n($),B=o(96),ne=o.n(B),ie=function(X){var L=getComputedStyle(X,null);return L.getPropertyValue("overflow")+L.getPropertyValue("overflow-y")+L.getPropertyValue("overflow-x")};const Y=function(X){if(!(X instanceof HTMLElement))return window;for(var L=X;L&&L instanceof HTMLElement;){if(/(scroll|auto)/.test(ie(L)))return L;L=L.parentNode}return window};function Q(X){return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},Q(X)}var ve=["delayMethod","delayTime"];function Me(){return Me=Object.assign?Object.assign.bind():function(X){for(var L=1;L<arguments.length;L++){var J=arguments[L];for(var ee in J)Object.prototype.hasOwnProperty.call(J,ee)&&(X[ee]=J[ee])}return X},Me.apply(this,arguments)}function De(X,L){for(var J=0;J<L.length;J++){var ee=L[J];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(X,(Se=function(Pe,Ae){if(Q(Pe)!=="object"||Pe===null)return Pe;var F=Pe[Symbol.toPrimitive];if(F!==void 0){var H=F.call(Pe,"string");if(Q(H)!=="object")return H;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Pe)}(ee.key),Q(Se)==="symbol"?Se:String(Se)),ee)}var Se}function Le(X,L){return Le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,ee){return J.__proto__=ee,J},Le(X,L)}function U(X,L){if(L&&(Q(L)==="object"||typeof L=="function"))return L;if(L!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return j(X)}function j(X){if(X===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return X}function V(X){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},V(X)}var N=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},_=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const q=function(X){var L=function(J){(function(de,ce){if(typeof ce!="function"&&ce!==null)throw new TypeError("Super expression must either be null or a function");de.prototype=Object.create(ce&&ce.prototype,{constructor:{value:de,writable:!0,configurable:!0}}),Object.defineProperty(de,"prototype",{writable:!1}),ce&&Le(de,ce)})(H,J);var ee,Se,Pe,Ae,F=(Pe=H,Ae=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var de,ce=V(Pe);if(Ae){var le=V(this).constructor;de=Reflect.construct(ce,arguments,le)}else de=ce.apply(this,arguments);return U(this,de)});function H(de){var ce;if(function(Oe,Be){if(!(Oe instanceof Be))throw new TypeError("Cannot call a class as a function")}(this,H),(ce=F.call(this,de)).useIntersectionObserver=de.useIntersectionObserver&&d(),ce.useIntersectionObserver)return U(ce);var le=ce.onChangeScroll.bind(j(ce));return de.delayMethod==="debounce"?ce.delayedScroll=te()(le,de.delayTime):de.delayMethod==="throttle"&&(ce.delayedScroll=ne()(le,de.delayTime)),ce.state={scrollPosition:{x:N(),y:_()}},ce.baseComponentRef=u().createRef(),ce}return ee=H,(Se=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||Y(this.baseComponentRef.current)!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=Y(this.baseComponentRef.current),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:N(),y:_()}})}},{key:"render",value:function(){var de=this.props,ce=(de.delayMethod,de.delayTime,function(Oe,Be){if(Oe==null)return{};var $e,ze,Ke=function(ft,Tn){if(ft==null)return{};var dn,mr,jo={},Ir=Object.keys(ft);for(mr=0;mr<Ir.length;mr++)dn=Ir[mr],Tn.indexOf(dn)>=0||(jo[dn]=ft[dn]);return jo}(Oe,Be);if(Object.getOwnPropertySymbols){var Ue=Object.getOwnPropertySymbols(Oe);for(ze=0;ze<Ue.length;ze++)$e=Ue[ze],Be.indexOf($e)>=0||Object.prototype.propertyIsEnumerable.call(Oe,$e)&&(Ke[$e]=Oe[$e])}return Ke}(de,ve)),le=this.useIntersectionObserver?null:this.state.scrollPosition;return u().createElement(X,Me({forwardRef:this.baseComponentRef,scrollPosition:le},ce))}}])&&De(ee.prototype,Se),Object.defineProperty(ee,"prototype",{writable:!1}),H}(u().Component);return L.propTypes={delayMethod:c.PropTypes.oneOf(["debounce","throttle"]),delayTime:c.PropTypes.number,useIntersectionObserver:c.PropTypes.bool},L.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},L};function W(X){return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},W(X)}function O(X,L){for(var J=0;J<L.length;J++){var ee=L[J];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(X,(Se=function(Pe,Ae){if(W(Pe)!=="object"||Pe===null)return Pe;var F=Pe[Symbol.toPrimitive];if(F!==void 0){var H=F.call(Pe,"string");if(W(H)!=="object")return H;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Pe)}(ee.key),W(Se)==="symbol"?Se:String(Se)),ee)}var Se}function I(X,L){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,ee){return J.__proto__=ee,J},I(X,L)}function oe(X){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},oe(X)}var ae=function(X){(function(F,H){if(typeof H!="function"&&H!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(H&&H.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),H&&I(F,H)})(Ae,X);var L,J,ee,Se,Pe=(ee=Ae,Se=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var F,H=oe(ee);if(Se){var de=oe(this).constructor;F=Reflect.construct(H,arguments,de)}else F=H.apply(this,arguments);return function(ce,le){if(le&&(W(le)==="object"||typeof le=="function"))return le;if(le!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(Oe){if(Oe===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Oe}(ce)}(this,F)});function Ae(F){return function(H,de){if(!(H instanceof de))throw new TypeError("Cannot call a class as a function")}(this,Ae),Pe.call(this,F)}return L=Ae,(J=[{key:"render",value:function(){return u().createElement(R,this.props)}}])&&O(L.prototype,J),Object.defineProperty(L,"prototype",{writable:!1}),Ae}(u().Component);const we=q(ae);function ke(X){return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},ke(X)}function _e(X,L){for(var J=0;J<L.length;J++){var ee=L[J];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(X,(Se=function(Pe,Ae){if(ke(Pe)!=="object"||Pe===null)return Pe;var F=Pe[Symbol.toPrimitive];if(F!==void 0){var H=F.call(Pe,"string");if(ke(H)!=="object")return H;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Pe)}(ee.key),ke(Se)==="symbol"?Se:String(Se)),ee)}var Se}function Te(X,L){return Te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,ee){return J.__proto__=ee,J},Te(X,L)}function Ne(X){if(X===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return X}function nt(X){return nt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},nt(X)}var rt=function(X){(function(F,H){if(typeof H!="function"&&H!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(H&&H.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),H&&Te(F,H)})(Ae,X);var L,J,ee,Se,Pe=(ee=Ae,Se=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var F,H=nt(ee);if(Se){var de=nt(this).constructor;F=Reflect.construct(H,arguments,de)}else F=H.apply(this,arguments);return function(ce,le){if(le&&(ke(le)==="object"||typeof le=="function"))return le;if(le!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ne(ce)}(this,F)});function Ae(F){var H;(function(Be,$e){if(!(Be instanceof $e))throw new TypeError("Cannot call a class as a function")})(this,Ae),H=Pe.call(this,F);var de=F.afterLoad,ce=F.beforeLoad,le=F.scrollPosition,Oe=F.visibleByDefault;return H.state={visible:Oe},Oe&&(ce(),de()),H.onVisible=H.onVisible.bind(Ne(H)),H.isScrollTracked=!!(le&&Number.isFinite(le.x)&&le.x>=0&&Number.isFinite(le.y)&&le.y>=0),H}return L=Ae,(J=[{key:"componentDidUpdate",value:function(F,H){H.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var F=this.props,H=F.className,de=F.delayMethod,ce=F.delayTime,le=F.height,Oe=F.placeholder,Be=F.scrollPosition,$e=F.style,ze=F.threshold,Ke=F.useIntersectionObserver,Ue=F.width;return this.isScrollTracked||Ke&&d()?u().createElement(R,{className:H,height:le,onVisible:this.onVisible,placeholder:Oe,scrollPosition:Be,style:$e,threshold:ze,useIntersectionObserver:Ke,width:Ue}):u().createElement(we,{className:H,delayMethod:de,delayTime:ce,height:le,onVisible:this.onVisible,placeholder:Oe,style:$e,threshold:ze,width:Ue})}}])&&_e(L.prototype,J),Object.defineProperty(L,"prototype",{writable:!1}),Ae}(u().Component);rt.propTypes={afterLoad:c.PropTypes.func,beforeLoad:c.PropTypes.func,useIntersectionObserver:c.PropTypes.bool,visibleByDefault:c.PropTypes.bool},rt.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Ct=rt;function ct(X){return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},ct(X)}var Do=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function _o(X,L){var J=Object.keys(X);if(Object.getOwnPropertySymbols){var ee=Object.getOwnPropertySymbols(X);L&&(ee=ee.filter(function(Se){return Object.getOwnPropertyDescriptor(X,Se).enumerable})),J.push.apply(J,ee)}return J}function Ao(X){for(var L=1;L<arguments.length;L++){var J=arguments[L]!=null?arguments[L]:{};L%2?_o(Object(J),!0).forEach(function(ee){Ro(X,ee,J[ee])}):Object.getOwnPropertyDescriptors?Object.defineProperties(X,Object.getOwnPropertyDescriptors(J)):_o(Object(J)).forEach(function(ee){Object.defineProperty(X,ee,Object.getOwnPropertyDescriptor(J,ee))})}return X}function Ro(X,L,J){return(L=Bn(L))in X?Object.defineProperty(X,L,{value:J,enumerable:!0,configurable:!0,writable:!0}):X[L]=J,X}function pr(){return pr=Object.assign?Object.assign.bind():function(X){for(var L=1;L<arguments.length;L++){var J=arguments[L];for(var ee in J)Object.prototype.hasOwnProperty.call(J,ee)&&(X[ee]=J[ee])}return X},pr.apply(this,arguments)}function Lo(X,L){for(var J=0;J<L.length;J++){var ee=L[J];ee.enumerable=ee.enumerable||!1,ee.configurable=!0,"value"in ee&&(ee.writable=!0),Object.defineProperty(X,Bn(ee.key),ee)}}function Bn(X){var L=function(J,ee){if(ct(J)!=="object"||J===null)return J;var Se=J[Symbol.toPrimitive];if(Se!==void 0){var Pe=Se.call(J,"string");if(ct(Pe)!=="object")return Pe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(J)}(X);return ct(L)==="symbol"?L:String(L)}function fn(X,L){return fn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(J,ee){return J.__proto__=ee,J},fn(X,L)}function $n(X){return $n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},$n(X)}var zr=function(X){(function(F,H){if(typeof H!="function"&&H!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(H&&H.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),H&&fn(F,H)})(Ae,X);var L,J,ee,Se,Pe=(ee=Ae,Se=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var F,H=$n(ee);if(Se){var de=$n(this).constructor;F=Reflect.construct(H,arguments,de)}else F=H.apply(this,arguments);return function(ce,le){if(le&&(ct(le)==="object"||typeof le=="function"))return le;if(le!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(Oe){if(Oe===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Oe}(ce)}(this,F)});function Ae(F){var H;return function(de,ce){if(!(de instanceof ce))throw new TypeError("Cannot call a class as a function")}(this,Ae),(H=Pe.call(this,F)).state={loaded:!1},H}return L=Ae,(J=[{key:"onImageLoad",value:function(){var F=this;return this.state.loaded?null:function(H){F.props.onLoad(H),F.props.afterLoad(),F.setState({loaded:!0})}}},{key:"getImg",value:function(){var F=this.props,H=(F.afterLoad,F.beforeLoad,F.delayMethod,F.delayTime,F.effect,F.placeholder,F.placeholderSrc,F.scrollPosition,F.threshold,F.useIntersectionObserver,F.visibleByDefault,F.wrapperClassName,F.wrapperProps,function(de,ce){if(de==null)return{};var le,Oe,Be=function(ze,Ke){if(ze==null)return{};var Ue,ft,Tn={},dn=Object.keys(ze);for(ft=0;ft<dn.length;ft++)Ue=dn[ft],Ke.indexOf(Ue)>=0||(Tn[Ue]=ze[Ue]);return Tn}(de,ce);if(Object.getOwnPropertySymbols){var $e=Object.getOwnPropertySymbols(de);for(Oe=0;Oe<$e.length;Oe++)le=$e[Oe],ce.indexOf(le)>=0||Object.prototype.propertyIsEnumerable.call(de,le)&&(Be[le]=de[le])}return Be}(F,Do));return u().createElement("img",pr({},H,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var F=this.props,H=F.beforeLoad,de=F.className,ce=F.delayMethod,le=F.delayTime,Oe=F.height,Be=F.placeholder,$e=F.scrollPosition,ze=F.style,Ke=F.threshold,Ue=F.useIntersectionObserver,ft=F.visibleByDefault,Tn=F.width;return u().createElement(Ct,{beforeLoad:H,className:de,delayMethod:ce,delayTime:le,height:Oe,placeholder:Be,scrollPosition:$e,style:ze,threshold:Ke,useIntersectionObserver:Ue,visibleByDefault:ft,width:Tn},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(F){var H=this.props,de=H.effect,ce=H.height,le=H.placeholderSrc,Oe=H.width,Be=H.wrapperClassName,$e=H.wrapperProps,ze=this.state.loaded,Ke=ze?" lazy-load-image-loaded":"",Ue=ze||!le?{}:{backgroundImage:"url(".concat(le,")"),backgroundSize:"100% 100%"};return u().createElement("span",pr({className:Be+" lazy-load-image-background "+de+Ke,style:Ao(Ao({},Ue),{},{color:"transparent",display:"inline-block",height:ce,width:Oe})},$e),F)}},{key:"render",value:function(){var F=this.props,H=F.effect,de=F.placeholderSrc,ce=F.visibleByDefault,le=F.wrapperClassName,Oe=F.wrapperProps,Be=this.getLazyLoadImage();return(H||de)&&!ce||le||Oe?this.getWrappedLazyLoadImage(Be):Be}}])&&Lo(L.prototype,J),Object.defineProperty(L,"prototype",{writable:!1}),Ae}(u().Component);zr.propTypes={onLoad:c.PropTypes.func,afterLoad:c.PropTypes.func,beforeLoad:c.PropTypes.func,delayMethod:c.PropTypes.string,delayTime:c.PropTypes.number,effect:c.PropTypes.string,placeholderSrc:c.PropTypes.string,threshold:c.PropTypes.number,useIntersectionObserver:c.PropTypes.bool,visibleByDefault:c.PropTypes.bool,wrapperClassName:c.PropTypes.string,wrapperProps:c.PropTypes.object},zr.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const Gi=zr})(),sc.exports=a})()),sc.exports}var F2=y2();export{D2 as A,k2 as B,A2 as C,M2 as E,P2 as H,mg as L,Ee as R,R2 as X,C2 as a,E2 as b,S2 as c,B1 as d,j2 as e,L2 as f,V2 as g,_2 as h,N2 as i,jn as j,F2 as k,w2 as l,O2 as m,ow as n,x2 as o,I2 as p,nb as q,M as r,z2 as s,b2 as t,jr as u};
