// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterAtan2=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var t,e,a;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!n(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==t)&&(a=4294967295+a+1),a<0?(e=(-a).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(t),a||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,b,"e-0$1"),r.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,g,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var E=String.fromCharCode,_=isNaN,O=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,i,u,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=T(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):E(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function B(r){var t,n,e,o;for(n=[],o=0,e=x.exec(r);e;)(t=r.slice(o,x.lastIndex-e[0].length)).length&&n.push(t),n.push(U(e)),o=x.lastIndex,e=x.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function I(r){return"string"==typeof r}function F(r){var t,n,e;if(!I(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=B(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var V,k=Object.prototype,N=k.toString,P=k.__defineGetter__,L=k.__defineSetter__,C=k.__lookupGetter__,G=k.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(C.call(r,t)||G.call(r,t)?(e=r.__proto__,r.__proto__=k,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,n.get),u&&L&&L.call(r,t,n.set),r};var M=V;function R(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var $=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var J=X()?function(r){var t,n,e;if(null==r)return Z.call(r);n=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return Z.call(r)}return e=Z.call(r),t?r[D]=n:delete r[D],e}:function(r){return Z.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=X();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return H(r)||tr(r)}function er(){return new Function("return this;")()}R(nr,"isPrimitive",H),R(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="object"==typeof global?global:null,ar="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!H(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ar)return ar;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=cr.document&&cr.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr,yr=/^\s*function\s*([^(]*)/i;R(sr,"REGEXP",yr),pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var br=pr;function vr(r){return null!==r&&"object"==typeof r}var gr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(vr);function dr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=yr.exec(e.toString()))return t[1]}return vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}R(vr,"isObjectLikeArray",gr);var wr="function"==typeof $||"object"==typeof lr||"function"==typeof fr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?dr(r).toLowerCase():t};function hr(r){return"function"===wr(r)}var mr=/./;function jr(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Ar(r){return"boolean"==typeof r}var Er=Boolean.prototype.toString;var _r=X();function Or(r){return"object"==typeof r&&(r instanceof K||(_r?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Tr(r){return Ar(r)||Or(r)}function Sr(){return new Function("return this;")()}jr(Tr,"isPrimitive",Ar),jr(Tr,"isObject",Or);var xr="object"==typeof self?self:null,Ur="object"==typeof window?window:null,Br="object"==typeof global?global:null,Ir="object"==typeof globalThis?globalThis:null;var Fr=function(r){if(arguments.length){if(!Ar(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Sr()}if(Ir)return Ir;if(xr)return xr;if(Ur)return Ur;if(Br)return Br;throw new Error("unexpected error. Unable to resolve global object.")}(),Vr=Fr.document&&Fr.document.childNodes,kr=Int8Array;function Nr(){return/^\s*function\s*([^(]*)/i}var Pr=/^\s*function\s*([^(]*)/i;function Lr(r){return null!==r&&"object"==typeof r}jr(Nr,"REGEXP",Pr);var Cr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Lr);function Gr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Pr.exec(e.toString()))return t[1]}return Lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}jr(Lr,"isObjectLikeArray",Cr);var Mr="function"==typeof mr||"object"==typeof kr||"function"==typeof Vr?function(r){return Gr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Gr(r).toLowerCase():t};function Rr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===Mr(r)}(r.next)}function $r(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Hr(r){return"number"==typeof r}var Wr=Number,Xr=Wr.prototype.toString;var Zr=X();function Yr(r){return"object"==typeof r&&(r instanceof Wr||(Zr?function(r){try{return Xr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function zr(r){return Hr(r)||Yr(r)}$r(zr,"isPrimitive",Hr),$r(zr,"isObject",Yr);var qr="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;var Dr=/./;function Jr(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Kr(r){return"boolean"==typeof r}var Qr=Boolean.prototype.toString;var rt=X();function tt(r){return"object"==typeof r&&(r instanceof K||(rt?function(r){try{return Qr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nt(r){return Kr(r)||tt(r)}function et(){return new Function("return this;")()}Jr(nt,"isPrimitive",Kr),Jr(nt,"isObject",tt);var ot="object"==typeof self?self:null,it="object"==typeof window?window:null,ut="object"==typeof global?global:null,at="object"==typeof globalThis?globalThis:null;var ct=function(r){if(arguments.length){if(!Kr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return et()}if(at)return at;if(ot)return ot;if(it)return it;if(ut)return ut;throw new Error("unexpected error. Unable to resolve global object.")}(),ft=ct.document&&ct.document.childNodes,lt=Int8Array;function st(){return/^\s*function\s*([^(]*)/i}var pt=/^\s*function\s*([^(]*)/i;function yt(r){return null!==r&&"object"==typeof r}Jr(st,"REGEXP",pt);var bt=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(yt);function vt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=pt.exec(e.toString()))return t[1]}return yt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}Jr(yt,"isObjectLikeArray",bt);var gt="function"==typeof Dr||"object"==typeof lt||"function"==typeof ft?function(r){return vt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?vt(r).toLowerCase():t};function dt(r){return"function"===gt(r)}var wt=Object,ht=/./;function mt(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function jt(r){return"boolean"==typeof r}var At=Boolean.prototype.toString;var Et=X();function _t(r){return"object"==typeof r&&(r instanceof K||(Et?function(r){try{return At.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Ot(r){return jt(r)||_t(r)}function Tt(){return new Function("return this;")()}mt(Ot,"isPrimitive",jt),mt(Ot,"isObject",_t);var St="object"==typeof self?self:null,xt="object"==typeof window?window:null,Ut="object"==typeof global?global:null,Bt="object"==typeof globalThis?globalThis:null;var It=function(r){if(arguments.length){if(!jt(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Tt()}if(Bt)return Bt;if(St)return St;if(xt)return xt;if(Ut)return Ut;throw new Error("unexpected error. Unable to resolve global object.")}(),Ft=It.document&&It.document.childNodes,Vt=Int8Array;function kt(){return/^\s*function\s*([^(]*)/i}var Nt=/^\s*function\s*([^(]*)/i;function Pt(r){return null!==r&&"object"==typeof r}mt(kt,"REGEXP",Nt);var Lt=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!br(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Pt);function Ct(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Nt.exec(e.toString()))return t[1]}return Pt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}mt(Pt,"isObjectLikeArray",Lt);var Gt="function"==typeof ht||"object"==typeof Vt||"function"==typeof Ft?function(r){return Ct(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ct(r).toLowerCase():t};var Mt,Rt,$t=Object.getPrototypeOf;Rt=Object.getPrototypeOf,Mt="function"===Gt(Rt)?$t:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ht=Mt;var Wt=Object.prototype;function Xt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!br(r)}(r)&&(t=function(r){return null==r?null:(r=wt(r),Ht(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&dt(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&dt(t.isPrototypeOf)&&(t===Wt||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function Zt(r,t){return Xt(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Yt(r,t,n,e){var o,i,u,a,c,f,l,s,p;for(a=2,i=[0,0],o=[],u=[],p=0;p<a;p++)if(o.push(arguments[p]),Rr(arguments[p]))u.push(1);else{if(!Hr(arguments[p]))throw new TypeError(F("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",p,arguments[p]));u.push(0)}if(!hr(n))throw new TypeError(F("invalid argument. Third argument must be a function. Value: `%s`.",n));if(f={invalid:NaN},arguments.length>3&&(s=Zt(f,e)))throw s;if(R(c={},"next",y),R(c,"return",b),qr){for(p=0;p<a;p++)if(u[p]&&!hr(o[p][qr])){l=!0;break}l||R(c,qr,v)}return l=!1,c;function y(){var r,t,e;if(l)return{done:!0};for(e=0;e<a;e++)if(u[e]){if((t=o[e].next()).done)return l=!0,t;"number"==typeof t.value?i[e]=t.value:r=!0}else i[e]=o[e];return r?{value:f.invalid,done:!1}:{value:n(i[0],i[1]),done:!1}}function b(r){return l=!0,arguments.length?{value:r,done:!0}:{done:!0}}function v(){var r,t;for(r=[],t=0;t<a;t++)u[t]?r.push(o[t][qr]()):r.push(o[t]);return r.push(n,f),Yt.apply(null,r)}}var zt=Number.POSITIVE_INFINITY,qt=Wr.NEGATIVE_INFINITY;function Dt(r){return r===zt||r===qt}var Jt="function"==typeof Uint32Array;var Kt="function"==typeof Uint32Array?Uint32Array:null;var Qt,rn="function"==typeof Uint32Array?Uint32Array:void 0;Qt=function(){var r,t;if("function"!=typeof Kt)return!1;try{r=function(r){return Jt&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new Kt(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rn:function(){throw new Error("not implemented")};var tn=Qt,nn="function"==typeof Float64Array;var en="function"==typeof Float64Array?Float64Array:null;var on,un="function"==typeof Float64Array?Float64Array:void 0;on=function(){var r,t;if("function"!=typeof en)return!1;try{r=function(r){return nn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new en([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?un:function(){throw new Error("not implemented")};var an=on,cn="function"==typeof Uint8Array;var fn="function"==typeof Uint8Array?Uint8Array:null;var ln,sn="function"==typeof Uint8Array?Uint8Array:void 0;ln=function(){var r,t;if("function"!=typeof fn)return!1;try{r=function(r){return cn&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new fn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?sn:function(){throw new Error("not implemented")};var pn=ln,yn="function"==typeof Uint16Array;var bn="function"==typeof Uint16Array?Uint16Array:null;var vn,gn="function"==typeof Uint16Array?Uint16Array:void 0;vn=function(){var r,t;if("function"!=typeof bn)return!1;try{r=function(r){return yn&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new bn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?gn:function(){throw new Error("not implemented")};var dn,wn={uint16:vn,uint8:pn};(dn=new wn.uint16(1))[0]=4660;var hn,mn,jn=52===new wn.uint8(dn.buffer)[0];!0===jn?(hn=1,mn=0):(hn=0,mn=1);var An={HIGH:hn,LOW:mn},En=new an(1),_n=new tn(En.buffer),On=An.HIGH,Tn=An.LOW;function Sn(r,t,n,e){return En[0]=r,t[e]=_n[On],t[e+n]=_n[Tn],t}function xn(r){return Sn(r,[0,0],1,0)}!function(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}(xn,"assign",Sn);var Un,Bn,In=!0===jn?1:0,Fn=new an(1),Vn=new tn(Fn.buffer);function kn(r){return Fn[0]=r,Vn[In]}!0===jn?(Un=1,Bn=0):(Un=0,Bn=1);var Nn={HIGH:Un,LOW:Bn},Pn=new an(1),Ln=new tn(Pn.buffer),Cn=Nn.HIGH,Gn=Nn.LOW;var Mn=[0,0];function Rn(r,t){var n,e,o,i;return xn.assign(r,Mn,1,0),n=Mn[0],n&=2147483647,e=kn(t),o=n|=e&=2147483648,i=Mn[1],Ln[Cn]=o,Ln[Gn]=i,Pn[0]}function $n(r){return r!=r}var Hn=1.5707963267948966;var Wn=6123233995736766e-32;var Xn=3.141592653589793;function Zn(r,t){var n;return $n(t)||$n(r)?NaN:Dt(t)?t===zt?Dt(r)?Rn(Xn/4,r):Rn(0,r):Dt(r)?Rn(3*Xn/4,r):Rn(Xn,r):Dt(r)?Rn(Xn/2,r):0===r?t>=0&&!function(r){return!!(kn(r)>>>31)}(t)?Rn(0,r):Rn(Xn,r):0===t?Rn(Xn/2,r):(n=function(r){var t,n,e,o;return $n(r)||0===r?r:r===zt?Hn:r===qt?-Hn:(r<0&&(n=!0,r=-r),t=0,r>2.414213562373095?(e=Hn,t=1,r=-1/r):r<=.66?e=0:(e=.7853981633974483,t=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===t?o+=.5*Wn:1===t&&(o+=Wn),e+=o,n?-e:e)}(r/t),t<0?n<=0?n+Xn:n-Xn:n)}return function(r,t){return Yt(r,t,Zn)}}));
//# sourceMappingURL=index.js.map
