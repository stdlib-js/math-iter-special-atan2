// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var t,e,a;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!n(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==t)&&(a=4294967295+a+1),a<0?(e=(-a).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(t),a||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,b,"e-0$1"),r.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,d,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+j(e):j(e)+r}var E=String.fromCharCode,_=isNaN,O=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,i,u,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(t=void 0!==e.precision,!(e=T(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):E(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function B(r){var t,n,e,o;for(n=[],o=0,e=x.exec(r);e;)(t=r.slice(o,x.lastIndex-e[0].length)).length&&n.push(t),n.push(U(e)),o=x.lastIndex,e=x.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function I(r){return"string"==typeof r}function F(r){var t,n,e;if(!I(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=B(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return S.apply(null,n)}var V,k=Object.prototype,N=k.toString,P=k.__defineGetter__,L=k.__defineSetter__,C=k.__lookupGetter__,G=k.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===N.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(C.call(r,t)||G.call(r,t)?(e=r.__proto__,r.__proto__=k,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,n.get),u&&L&&L.call(r,t,n.set),r};var M=V;function R(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var $=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",J=X()?function(r){var t,n,e;if(null==r)return Z.call(r);n=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return Z.call(r)}return e=Z.call(r),t?r[D]=n:delete r[D],e}:function(r){return Z.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=X();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function nr(r){return H(r)||tr(r)}function er(){return new Function("return this;")()}R(nr,"isPrimitive",H),R(nr,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="object"==typeof globalThis?globalThis:null,ar=function(r){if(arguments.length){if(!H(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ur)return ur;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr,pr=/^\s*function\s*([^(]*)/i;R(lr,"REGEXP",pr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var yr=sr;function br(r){return null!==r&&"object"==typeof r}var vr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(br);function dr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=pr.exec(e.toString()))return t[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}R(br,"isObjectLikeArray",vr);var gr="function"==typeof $||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?dr(r).toLowerCase():t};function wr(r){return"function"===gr(r)}var hr=/./;function mr(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function jr(r){return"boolean"==typeof r}var Ar=Boolean.prototype.toString,Er=X();function _r(r){return"object"==typeof r&&(r instanceof K||(Er?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Or(r){return jr(r)||_r(r)}function Tr(){return new Function("return this;")()}mr(Or,"isPrimitive",jr),mr(Or,"isObject",_r);var Sr="object"==typeof self?self:null,xr="object"==typeof window?window:null,Ur="object"==typeof globalThis?globalThis:null,Br=function(r){if(arguments.length){if(!jr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Tr()}if(Ur)return Ur;if(Sr)return Sr;if(xr)return xr;throw new Error("unexpected error. Unable to resolve global object.")}(),Ir=Br.document&&Br.document.childNodes,Fr=Int8Array;function Vr(){return/^\s*function\s*([^(]*)/i}var kr=/^\s*function\s*([^(]*)/i;function Nr(r){return null!==r&&"object"==typeof r}mr(Vr,"REGEXP",kr);var Pr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Nr);function Lr(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=kr.exec(e.toString()))return t[1]}return Nr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}mr(Nr,"isObjectLikeArray",Pr);var Cr="function"==typeof hr||"object"==typeof Fr||"function"==typeof Ir?function(r){return Lr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Lr(r).toLowerCase():t};function Gr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===Cr(r)}(r.next)}function Mr(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Rr(r){return"number"==typeof r}var $r=Number,Hr=$r.prototype.toString,Wr=X();function Xr(r){return"object"==typeof r&&(r instanceof $r||(Wr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Zr(r){return Rr(r)||Xr(r)}Mr(Zr,"isPrimitive",Rr),Mr(Zr,"isObject",Xr);var Yr="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,zr=/./;function qr(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Dr(r){return"boolean"==typeof r}var Jr=Boolean.prototype.toString,Kr=X();function Qr(r){return"object"==typeof r&&(r instanceof K||(Kr?function(r){try{return Jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function rt(r){return Dr(r)||Qr(r)}function tt(){return new Function("return this;")()}qr(rt,"isPrimitive",Dr),qr(rt,"isObject",Qr);var nt="object"==typeof self?self:null,et="object"==typeof window?window:null,ot="object"==typeof globalThis?globalThis:null,it=function(r){if(arguments.length){if(!Dr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return tt()}if(ot)return ot;if(nt)return nt;if(et)return et;throw new Error("unexpected error. Unable to resolve global object.")}(),ut=it.document&&it.document.childNodes,at=Int8Array;function ct(){return/^\s*function\s*([^(]*)/i}var ft=/^\s*function\s*([^(]*)/i;function lt(r){return null!==r&&"object"==typeof r}qr(ct,"REGEXP",ft);var st=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(lt);function pt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=ft.exec(e.toString()))return t[1]}return lt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}qr(lt,"isObjectLikeArray",st);var yt="function"==typeof zr||"object"==typeof at||"function"==typeof ut?function(r){return pt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?pt(r).toLowerCase():t};function bt(r){return"function"===yt(r)}var vt=Object,dt=/./;function gt(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function wt(r){return"boolean"==typeof r}var ht=Boolean.prototype.toString,mt=X();function jt(r){return"object"==typeof r&&(r instanceof K||(mt?function(r){try{return ht.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function At(r){return wt(r)||jt(r)}function Et(){return new Function("return this;")()}gt(At,"isPrimitive",wt),gt(At,"isObject",jt);var _t="object"==typeof self?self:null,Ot="object"==typeof window?window:null,Tt="object"==typeof globalThis?globalThis:null,St=function(r){if(arguments.length){if(!wt(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Et()}if(Tt)return Tt;if(_t)return _t;if(Ot)return Ot;throw new Error("unexpected error. Unable to resolve global object.")}(),xt=St.document&&St.document.childNodes,Ut=Int8Array;function Bt(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;function Ft(r){return null!==r&&"object"==typeof r}gt(Bt,"REGEXP",It);var Vt=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Ft);function kt(r){var t,n,e,o;if(("Object"===(n=J(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=It.exec(e.toString()))return t[1]}return Ft(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}gt(Ft,"isObjectLikeArray",Vt);var Nt,Pt,Lt="function"==typeof dt||"object"==typeof Ut||"function"==typeof xt?function(r){return kt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?kt(r).toLowerCase():t},Ct=Object.getPrototypeOf;Pt=Object.getPrototypeOf,Nt="function"===Lt(Pt)?Ct:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Gt=Nt,Mt=Object.prototype;function Rt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=vt(r),Gt(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&bt(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&bt(t.isPrototypeOf)&&(t===Mt||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function $t(r,t){return Rt(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Ht(r,t,n,e){var o,i,u,a,c,f,l,s,p;for(a=2,i=[0,0],o=[],u=[],p=0;p<a;p++)if(o.push(arguments[p]),Gr(arguments[p]))u.push(1);else{if(!Rr(arguments[p]))throw new TypeError(F("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",p,arguments[p]));u.push(0)}if(!wr(n))throw new TypeError(F("invalid argument. Third argument must be a function. Value: `%s`.",n));if(f={invalid:NaN},arguments.length>3&&(s=$t(f,e)))throw s;if(R(c={},"next",y),R(c,"return",b),Yr){for(p=0;p<a;p++)if(u[p]&&!wr(o[p][Yr])){l=!0;break}l||R(c,Yr,v)}return l=!1,c;function y(){var r,t,e;if(l)return{done:!0};for(e=0;e<a;e++)if(u[e]){if((t=o[e].next()).done)return l=!0,t;"number"==typeof t.value?i[e]=t.value:r=!0}else i[e]=o[e];return r?{value:f.invalid,done:!1}:{value:n(i[0],i[1]),done:!1}}function b(r){return l=!0,arguments.length?{value:r,done:!0}:{done:!0}}function v(){var r,t;for(r=[],t=0;t<a;t++)u[t]?r.push(o[t][Yr]()):r.push(o[t]);return r.push(n,f),Ht.apply(null,r)}}var Wt=Number.POSITIVE_INFINITY,Xt=$r.NEGATIVE_INFINITY;function Zt(r){return r===Wt||r===Xt}var Yt,zt="function"==typeof Uint32Array,qt="function"==typeof Uint32Array?Uint32Array:null,Dt="function"==typeof Uint32Array?Uint32Array:void 0;Yt=function(){var r,t;if("function"!=typeof qt)return!1;try{r=function(r){return zt&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new qt(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Dt:function(){throw new Error("not implemented")};var Jt,Kt=Yt,Qt="function"==typeof Float64Array,rn="function"==typeof Float64Array?Float64Array:null,tn="function"==typeof Float64Array?Float64Array:void 0;Jt=function(){var r,t;if("function"!=typeof rn)return!1;try{r=function(r){return Qt&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new rn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?tn:function(){throw new Error("not implemented")};var nn,en=Jt,on="function"==typeof Uint8Array,un="function"==typeof Uint8Array?Uint8Array:null,an="function"==typeof Uint8Array?Uint8Array:void 0;nn=function(){var r,t;if("function"!=typeof un)return!1;try{r=function(r){return on&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new un(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?an:function(){throw new Error("not implemented")};var cn,fn=nn,ln="function"==typeof Uint16Array,sn="function"==typeof Uint16Array?Uint16Array:null,pn="function"==typeof Uint16Array?Uint16Array:void 0;cn=function(){var r,t;if("function"!=typeof sn)return!1;try{r=function(r){return ln&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new sn(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pn:function(){throw new Error("not implemented")};var yn,bn={uint16:cn,uint8:fn};(yn=new bn.uint16(1))[0]=4660;var vn,dn,gn=52===new bn.uint8(yn.buffer)[0];!0===gn?(vn=1,dn=0):(vn=0,dn=1);var wn={HIGH:vn,LOW:dn},hn=new en(1),mn=new Kt(hn.buffer),jn=wn.HIGH,An=wn.LOW;function En(r,t,n,e){return hn[0]=r,t[e]=mn[jn],t[e+n]=mn[An],t}function _n(r){return En(r,[0,0],1,0)}!function(r,t,n){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}(_n,"assign",En);var On,Tn,Sn=!0===gn?1:0,xn=new en(1),Un=new Kt(xn.buffer);function Bn(r){return xn[0]=r,Un[Sn]}!0===gn?(On=1,Tn=0):(On=0,Tn=1);var In={HIGH:On,LOW:Tn},Fn=new en(1),Vn=new Kt(Fn.buffer),kn=In.HIGH,Nn=In.LOW,Pn=[0,0];function Ln(r,t){var n,e,o,i;return _n.assign(r,Pn,1,0),n=Pn[0],n&=2147483647,e=Bn(t),o=n|=e&=2147483648,i=Pn[1],Vn[kn]=o,Vn[Nn]=i,Fn[0]}function Cn(r){return r!=r}var Gn=1.5707963267948966,Mn=6123233995736766e-32,Rn=3.141592653589793;function $n(r,t){var n;return Cn(t)||Cn(r)?NaN:Zt(t)?t===Wt?Zt(r)?Ln(Rn/4,r):Ln(0,r):Zt(r)?Ln(3*Rn/4,r):Ln(Rn,r):Zt(r)?Ln(Rn/2,r):0===r?t>=0&&!function(r){return!!(Bn(r)>>>31)}(t)?Ln(0,r):Ln(Rn,r):0===t?Ln(Rn/2,r):(n=function(r){var t,n,e,o;return Cn(r)||0===r?r:r===Wt?Gn:r===Xt?-Gn:(r<0&&(n=!0,r=-r),t=0,r>2.414213562373095?(e=Gn,t=1,r=-1/r):r<=.66?e=0:(e=.7853981633974483,t=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===t?o+=.5*Mn:1===t&&(o+=Mn),e+=o,n?-e:e)}(r/t),t<0?n<=0?n+Rn:n-Rn:n)}return function(r,t){return Ht(r,t,$n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterAtan2=t();
//# sourceMappingURL=browser.js.map
