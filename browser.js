// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function A(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+A(n):A(n)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function x(r){var t,e,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function I(r){var t,e,n,o;for(e=[],o=0,n=T.exec(r);n;)(t=r.slice(o,T.lastIndex-n[0].length)).length&&e.push(t),e.push(U(n)),o=T.lastIndex,n=T.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function F(r){return"string"==typeof r}function k(r){var t,e,n;if(!F(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=I(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return x.apply(null,e)}var V,N=Object.prototype,P=N.toString,G=N.__defineGetter__,L=N.__defineSetter__,$=N.__lookupGetter__,C=N.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&($.call(r,t)||C.call(r,t)?(n=r.__proto__,r.__proto__=N,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&L&&L.call(r,t,e.set),r};var H=V;function W(r,t,e){H(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var B=/./;function R(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",J=M()?function(r){var t,e,n;if(null==r)return X.call(r);e=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return X.call(r)}return n=X.call(r),t?r[D]=e:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=M();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return R(r)||tr(r)}function nr(){return new Function("return this;")()}W(er,"isPrimitive",R),W(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!R(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;W(lr,"REGEXP",sr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function yr(r){return null!==r&&"object"==typeof r}function dr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=sr.exec(n.toString()))return t[1]}return yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}W(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!pr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(yr));var gr="function"==typeof B||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?dr(r).toLowerCase():t};function br(r){return"function"===gr(r)}function vr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&br(r.next)}function hr(r){return"number"==typeof r}var wr=Number,mr=wr.prototype.toString,Ar=M();function jr(r){return"object"==typeof r&&(r instanceof wr||(Ar?function(r){try{return mr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function _r(r){return hr(r)||jr(r)}W(_r,"isPrimitive",hr),W(_r,"isObject",jr);var Er,Or="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,Sr=Object,xr=Object.getPrototypeOf;Er=br(Object.getPrototypeOf)?xr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Tr=Er,Ur=Object.prototype;function Ir(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(t=function(r){return null==r?null:(r=Sr(r),Tr(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&br(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&br(t.isPrototypeOf)&&(t===Ur||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function Fr(r,t){return Ir(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function kr(r,t,e,n){var o,i,a,u,c,f,l,s,p;for(u=2,i=[0,0],o=[],a=[],p=0;p<u;p++)if(o.push(arguments[p]),vr(arguments[p]))a.push(1);else{if(!hr(arguments[p]))throw new TypeError(k("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",p,arguments[p]));a.push(0)}if(!br(e))throw new TypeError(k("invalid argument. Third argument must be a function. Value: `%s`.",e));if(f={invalid:NaN},arguments.length>3&&(s=Fr(f,n)))throw s;if(W(c={},"next",y),W(c,"return",d),Or){for(p=0;p<u;p++)if(a[p]&&!br(o[p][Or])){l=!0;break}l||W(c,Or,g)}return l=!1,c;function y(){var r,t,n;if(l)return{done:!0};for(n=0;n<u;n++)if(a[n]){if((t=o[n].next()).done)return l=!0,t;"number"==typeof t.value?i[n]=t.value:r=!0}else i[n]=o[n];return r?{value:f.invalid,done:!1}:{value:e(i[0],i[1]),done:!1}}function d(r){return l=!0,arguments.length?{value:r,done:!0}:{done:!0}}function g(){var r,t;for(r=[],t=0;t<u;t++)a[t]?r.push(o[t][Or]()):r.push(o[t]);return r.push(e,f),kr.apply(null,r)}}var Vr=Number.POSITIVE_INFINITY,Nr=wr.NEGATIVE_INFINITY;function Pr(r){return r===Vr||r===Nr}var Gr,Lr="function"==typeof Uint32Array,$r="function"==typeof Uint32Array?Uint32Array:null,Cr="function"==typeof Uint32Array?Uint32Array:void 0;Gr=function(){var r,t,e;if("function"!=typeof $r)return!1;try{t=new $r(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Lr&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Hr,Wr=Gr,Br="function"==typeof Float64Array,Rr="function"==typeof Float64Array?Float64Array:null,Zr="function"==typeof Float64Array?Float64Array:void 0;Hr=function(){var r,t,e;if("function"!=typeof Rr)return!1;try{t=new Rr([1,3.14,-3.14,NaN]),e=t,r=(Br&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var Mr,Xr=Hr,Yr="function"==typeof Uint8Array,zr="function"==typeof Uint8Array?Uint8Array:null,qr="function"==typeof Uint8Array?Uint8Array:void 0;Mr=function(){var r,t,e;if("function"!=typeof zr)return!1;try{t=new zr(t=[1,3.14,-3.14,256,257]),e=t,r=(Yr&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var Dr,Jr=Mr,Kr="function"==typeof Uint16Array,Qr="function"==typeof Uint16Array?Uint16Array:null,rt="function"==typeof Uint16Array?Uint16Array:void 0;Dr=function(){var r,t,e;if("function"!=typeof Qr)return!1;try{t=new Qr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Kr&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rt:function(){throw new Error("not implemented")};var tt,et={uint16:Dr,uint8:Jr};(tt=new et.uint16(1))[0]=4660;var nt,ot,it=52===new et.uint8(tt.buffer)[0];!0===it?(nt=1,ot=0):(nt=0,ot=1);var at={HIGH:nt,LOW:ot},ut=new Xr(1),ct=new Wr(ut.buffer),ft=at.HIGH,lt=at.LOW;function st(r,t,e,n){return ut[0]=r,t[n]=ct[ft],t[n+e]=ct[lt],t}function pt(r){return st(r,[0,0],1,0)}W(pt,"assign",st);var yt,dt,gt=!0===it?1:0,bt=new Xr(1),vt=new Wr(bt.buffer);function ht(r){return bt[0]=r,vt[gt]}!0===it?(yt=1,dt=0):(yt=0,dt=1);var wt={HIGH:yt,LOW:dt},mt=new Xr(1),At=new Wr(mt.buffer),jt=wt.HIGH,_t=wt.LOW,Et=[0,0];function Ot(r,t){var e,n,o,i;return pt.assign(r,Et,1,0),e=Et[0],e&=2147483647,n=ht(t),o=e|=n&=2147483648,i=Et[1],At[jt]=o,At[_t]=i,mt[0]}function St(r){return r!=r}var xt=1.5707963267948966,Tt=6123233995736766e-32,Ut=3.141592653589793;function It(r,t){var e;return St(t)||St(r)?NaN:Pr(t)?t===Vr?Pr(r)?Ot(Ut/4,r):Ot(0,r):Pr(r)?Ot(3*Ut/4,r):Ot(Ut,r):Pr(r)?Ot(Ut/2,r):0===r?t>=0&&!function(r){return!!(ht(r)>>>31)}(t)?Ot(0,r):Ot(Ut,r):0===t?Ot(Ut/2,r):(e=function(r){var t,e,n,o;return St(r)||0===r?r:r===Vr?xt:r===Nr?-xt:(r<0&&(e=!0,r=-r),t=0,r>2.414213562373095?(n=xt,t=1,r=-1/r):r<=.66?n=0:(n=.7853981633974483,t=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===t?o+=.5*Tt:1===t&&(o+=Tt),n+=o,e?-n:n)}(r/t),t<0?e<=0?e+Ut:e-Ut:e)}return function(r,t){return kr(r,t,It)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterAtan2=t();
//# sourceMappingURL=browser.js.map
