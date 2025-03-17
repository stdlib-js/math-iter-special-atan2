// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterAtan2=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,e,n,i,a,c,f,l,s,p,y,v,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function T(r){var t,e,n,o;for(e=[],o=0,n=S.exec(r);n;)(t=r.slice(o,S.lastIndex-n[0].length)).length&&e.push(t),e.push(x(n)),o=S.lastIndex,n=S.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function U(r){var t,e;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[T(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return O.apply(null,t)}var I,F=Object.prototype,k=F.toString,V=F.__defineGetter__,N=F.__defineSetter__,P=F.__lookupGetter__,G=F.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(P.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=F,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,t,e.get),a&&N&&N.call(r,t,e.set),r};var L=I;function $(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;function M(r,t){return null!=r&&Z.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=B()?function(r){var t,e,n;if(null==r)return R.call(r);e=r[Y],t=M(r,Y);try{r[Y]=void 0}catch(t){return R.call(r)}return n=R.call(r),t?r[Y]=e:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString;var J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!H(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(tr)return tr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=or.document&&or.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;$(ur,"REGEXP",cr);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var t,e,n,o;if(("Object"===(e=z(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=cr.exec(n.toString()))return t[1]}return lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!fr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(lr));var pr="function"==typeof C||"object"==typeof ar||"function"==typeof ir?function(r){return sr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t};function yr(r){return"function"===pr(r)}function vr(r){return"number"==typeof r}var dr=Number,gr=dr.prototype.toString;var br=B();function hr(r){return"object"==typeof r&&(r instanceof dr||(br?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function wr(r){return vr(r)||hr(r)}$(wr,"isPrimitive",vr),$(wr,"isObject",hr);var mr="function"==typeof X&&"symbol"==typeof X("foo")&&M(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var jr,Ar=Object,_r=Object.getPrototypeOf;jr=yr(Object.getPrototypeOf)?_r:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=jr;var Or=Object.prototype;function Sr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(t=function(r){return null==r?null:(r=Ar(r),Er(r))}(r),!t||!M(r,"constructor")&&M(t,"constructor")&&yr(t.constructor)&&"[object Function]"===z(t.constructor)&&M(t,"isPrototypeOf")&&yr(t.isPrototypeOf)&&(t===Or||function(r){var t;for(t in r)if(!M(r,t))return!1;return!0}(r)))}function xr(r,t,e,n){var o,i,a,u,c,f,l,s,p,y;for(2,i=[0,0],o=[],a=[],s=0;s<2;s++)if(o.push(arguments[s]),y=void 0,y=typeof(p=arguments[s]),null===p||"object"!==y&&"function"!==y||!yr(p.next)){if(!vr(arguments[s]))throw new TypeError(U("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",s,arguments[s]));a.push(0)}else a.push(1);if(!yr(e))throw new TypeError(U("invalid argument. Third argument must be a function. Value: `%s`.",e));if(c={invalid:NaN},arguments.length>3&&(l=function(r,t){return Sr(t)?(M(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",t))}(c,n),l))throw l;if($(u={},"next",(function(){var r,t,n;if(f)return{done:!0};for(n=0;n<2;n++)if(a[n]){if((t=o[n].next()).done)return f=!0,t;"number"==typeof t.value?i[n]=t.value:r=!0}else i[n]=o[n];if(r)return{value:c.invalid,done:!1};return{value:e(i[0],i[1]),done:!1}})),$(u,"return",(function(r){if(f=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),mr){for(s=0;s<2;s++)if(a[s]&&!yr(o[s][mr])){f=!0;break}f||$(u,mr,(function(){var r,t;for(r=[],t=0;t<2;t++)a[t]?r.push(o[t][mr]()):r.push(o[t]);return r.push(e,c),xr.apply(null,r)}))}return f=!1,u}var Tr=Number.POSITIVE_INFINITY,Ur=dr.NEGATIVE_INFINITY;function Ir(r){return r===Tr||r===Ur}var Fr=2147483648,kr=2147483647,Vr="function"==typeof Uint32Array;var Nr="function"==typeof Uint32Array?Uint32Array:null;var Pr,Gr="function"==typeof Uint32Array?Uint32Array:void 0;Pr=function(){var r,t,e;if("function"!=typeof Nr)return!1;try{t=new Nr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Vr&&e instanceof Uint32Array||"[object Uint32Array]"===z(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Lr=Pr,$r="function"==typeof Float64Array;var Cr="function"==typeof Float64Array?Float64Array:null;var Hr,Wr="function"==typeof Float64Array?Float64Array:void 0;Hr=function(){var r,t,e;if("function"!=typeof Cr)return!1;try{t=new Cr([1,3.14,-3.14,NaN]),e=t,r=($r&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Br=Hr,Rr="function"==typeof Uint8Array;var Zr="function"==typeof Uint8Array?Uint8Array:null;var Mr,Xr="function"==typeof Uint8Array?Uint8Array:void 0;Mr=function(){var r,t,e;if("function"!=typeof Zr)return!1;try{t=new Zr(t=[1,3.14,-3.14,256,257]),e=t,r=(Rr&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr=Mr,zr="function"==typeof Uint16Array;var qr="function"==typeof Uint16Array?Uint16Array:null;var Dr,Jr="function"==typeof Uint16Array?Uint16Array:void 0;Dr=function(){var r,t,e;if("function"!=typeof qr)return!1;try{t=new qr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(zr&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};var Kr,Qr={uint16:Dr,uint8:Yr};(Kr=new Qr.uint16(1))[0]=4660;var rt,tt,et=52===new Qr.uint8(Kr.buffer)[0];!0===et?(rt=1,tt=0):(rt=0,tt=1);var nt={HIGH:rt,LOW:tt},ot=new Br(1),it=new Lr(ot.buffer),at=nt.HIGH,ut=nt.LOW;function ct(r,t,e,n){return ot[0]=r,t[n]=it[at],t[n+e]=it[ut],t}function ft(r){return ct(r,[0,0],1,0)}$(ft,"assign",ct);var lt,st,pt=!0===et?1:0,yt=new Br(1),vt=new Lr(yt.buffer);function dt(r){return yt[0]=r,vt[pt]}!0===et?(lt=1,st=0):(lt=0,st=1);var gt={HIGH:lt,LOW:st},bt=new Br(1),ht=new Lr(bt.buffer),wt=gt.HIGH,mt=gt.LOW;var jt=[0,0];function At(r,t){var e,n,o,i;return ft.assign(r,jt,1,0),e=jt[0],e&=kr,n=dt(t),o=e|=n&=Fr,i=jt[1],ht[wt]=o,ht[mt]=i,bt[0]}function _t(r){return r!=r}var Et=1.5707963267948966,Ot=.7853981633974483;var St=6123233995736766e-32,xt=2.414213562373095;var Tt=3.141592653589793;function Ut(r,t){var e;return _t(t)||_t(r)?NaN:Ir(t)?t===Tr?Ir(r)?At(Tt/4,r):At(0,r):Ir(r)?At(3*Tt/4,r):At(Tt,r):Ir(r)?At(Tt/2,r):0===r?t>=0&&!function(r){return!!(dt(r)>>>31)}(t)?At(0,r):At(Tt,r):0===t?At(Tt/2,r):(e=function(r){var t,e,n,o;return _t(r)||0===r?r:r===Tr?Et:r===Ur?-Et:(r<0&&(e=!0,r=-r),t=0,r>xt?(n=Et,t=1,r=-1/r):r<=.66?n=0:(n=Ot,t=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===t?o+=.5*St:1===t&&(o+=St),n+=o,e?-n:n)}(r/t),t<0?e<=0?e+Tt:e-Tt:e)}return function(r,t){return xr(r,t,Ut)}}));
//# sourceMappingURL=index.js.map
