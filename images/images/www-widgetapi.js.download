(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function v(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},ra={};try{ra.__proto__=oa;na=ra.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=ma;
function y(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.na=b.prototype}
function ta(){this.H=!1;this.j=null;this.h=void 0;this.g=1;this.u=this.o=0;this.S=this.i=null}
function ua(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
ta.prototype.M=function(a){this.h=a};
function va(a,b){a.i={mc:b,xc:!0};a.g=a.o||a.u}
ta.prototype.return=function(a){this.i={return:a};this.g=this.u};
function A(a,b,c){a.g=c;return{value:b}}
ta.prototype.B=function(a){this.g=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function xa(a){a.o=0;var b=a.i.mc;a.i=null;return b}
function ya(a){var b=a.S.splice(0)[0];(b=a.i=a.i||b)?b.xc?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function za(a){this.g=new ta;this.h=a}
function Aa(a,b){ua(a.g);var c=a.g.j;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.g.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.H=!1,e;var f=e.value}catch(g){return a.g.j=null,va(a.g,g),Ca(a)}a.g.j=null;d.call(a.g,f);return Ca(a)}
function Ca(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.H=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,va(a.g,c)}a.g.H=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.xc)throw b.mc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ua(a.g);a.g.j?b=Ba(a,a.g.j.next,b,a.g.M):(a.g.M(b),b=Ca(a));return b};
this.throw=function(b){ua(a.g);a.g.j?b=Ba(a,a.g.j["throw"],b,a.g.M):(va(a.g,b),b=Ca(a));return b};
this.return=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ea(new Da(new za(a)))}
function Fa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.H=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.eb),reject:g(this.o)}};
b.prototype.eb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.gb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ya(g):this.u(g)}};
b.prototype.ya=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.ub(h,g):this.u(g)};
b.prototype.o=function(g){this.M(2,g)};
b.prototype.u=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.fb();this.S()};
b.prototype.fb=function(){var g=this;e(function(){if(g.oa()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.oa=function(){if(this.H)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.S=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.gb=function(g){var h=this.j();g.xb(h.resolve,h.reject)};
b.prototype.ub=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,p){return"function"==typeof q?function(t){try{l(q(t))}catch(u){m(u)}}:p}
var l,m,n=new b(function(q,p){l=q;m=p});
this.xb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.xb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).xb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(t){return function(u){q[t]=u;p--;0==p&&l(q)}}
var q=[],p=0;do q.push(void 0),p++,d(k.value).xb(n(q.length-1),m),k=h.next();while(!k.done)})};
return b});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ja(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ga(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||sa});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ga(this,b,"includes").indexOf(b,c||0)}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
v("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ja(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ka(a){var b=Ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Sa(a,b,c){Sa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qa:Ra;return Sa.apply(null,arguments)}
function Ta(){return Date.now()}
function E(a,b){a=a.split(".");var c=C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Va(a,b){function c(){}
c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pe=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Va(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function Za(){}
function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var ab=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},bb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function db(a,b){b=ab(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function eb(a){return Array.prototype.concat.apply([],arguments)}
function fb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){if(void 0===qb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){C.console&&C.console.error(c.message)}qb=a}else qb=a}return qb}
;function sb(){}
function tb(a){return new sb(ub,a)}
var ub={};tb("");function vb(a){this.g=a}
vb.prototype.toString=function(){return this.g+""};
var wb={};var xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;function Fb(a){this.g=a}
Fb.prototype.toString=function(){return this.g.toString()};
var Gb={},Hb=new Fb("about:invalid#zClosurez",Gb);var Ib,Jb=D("CLOSURE_FLAGS"),Kb=Jb&&Jb[610401301];Ib=null!=Kb?Kb:!1;function Lb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Mb,Nb=C.navigator;Mb=Nb?Nb.userAgentData||null:null;function Ob(a){return Ib?Mb?Mb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Lb().indexOf(a)}
;function Pb(){return Ib?!!Mb&&0<Mb.brands.length:!1}
function Vb(){return Pb()?!1:F("Trident")||F("MSIE")}
function Wb(){return Pb()?Ob("Chromium"):(F("Chrome")||F("CriOS"))&&!(Pb()?0:F("Edge"))||F("Silk")}
;function Xb(a){this.g=a}
Xb.prototype.toString=function(){return this.g.toString()};function Yb(a){Eb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(yb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(zb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Ab,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Bb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Cb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Db,"&#0;")));return a}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a){return $b(a.match(Zb)[3]||null)}
function bc(a){var b=a.match(Zb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
var ec=/#|$/;function fc(a,b){var c=a.search(ec);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function gc(a){C.setTimeout(function(){throw a;},0)}
;function hc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function ic(a){ic[" "](a);return a}
ic[" "]=function(){};var jc=Pb()?!1:F("Opera"),kc=Vb(),lc=F("Edge"),mc=F("Gecko")&&!(-1!=Lb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),nc=-1!=Lb().toLowerCase().indexOf("webkit")&&!F("Edge");function oc(){var a=C.document;return a?a.documentMode:void 0}
var pc;a:{var qc="",rc=function(){var a=Lb();if(mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(lc)return/Edge\/([\d\.]+)/.exec(a);if(kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(nc)return/WebKit\/(\S+)/.exec(a);if(jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
rc&&(qc=rc?rc[1]:"");if(kc){var sc=oc();if(null!=sc&&sc>parseFloat(qc)){pc=String(sc);break a}}pc=qc}var tc=pc,uc;if(C.document&&kc){var vc=oc();uc=vc?vc:parseInt(tc,10)||void 0}else uc=void 0;var Ac=uc;var Bc=hc()||F("iPod"),Cc=F("iPad");!F("Android")||Wb();Wb();var Dc=F("Safari")&&!(Wb()||(Pb()?0:F("Coast"))||(Pb()?0:F("Opera"))||(Pb()?0:F("Edge"))||(Pb()?Ob("Microsoft Edge"):F("Edg/"))||(Pb()?Ob("Opera"):F("OPR"))||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(hc()||F("iPad")||F("iPod"));var Ec={},Fc=null;
function Gc(a,b){Ka(a);void 0===b&&(b=0);if(!Fc){Fc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ec[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Fc[h]&&(Fc[h]=g)}}}b=Ec[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Hc="undefined"!==typeof Uint8Array,Ic=!kc&&"function"===typeof btoa;function Jc(){return"function"===typeof BigInt}
;var Kc=0,Lc=0;function Mc(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(Nc(c,a)),b=c.next().value,a=c.next().value,c=b);Kc=c>>>0;Lc=a>>>0}
function Oc(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Jc()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+Pc(c)+Pc(a));return c}
function Pc(a){a=String(a);return"0000000".slice(a.length)+a}
function Qc(){var a=Kc,b=Lc;b&2147483648?Jc()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(Nc(a,b)),a=b.next().value,b=b.next().value,a="-"+Oc(a,b)):a=Oc(a,b);return a}
function Nc(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Rc(a){return Array.prototype.slice.call(a)}
;var Sc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({be:1,Zd:2,Yd:4,ee:8,de:16,ce:32,Pd:64,ge:128,Wd:256,Vd:512,ae:1024,Td:2048,fe:4096,Ud:8192})));var Tc=Sc?function(a,b){a[Sc]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Uc(a){var b=Vc(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Rc(a)),Wc(a,b|1))}
var Xc=Sc?function(a,b){a[Sc]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)};
function Yc(a,b,c){return c?a|b:a&~b}
var Vc=Sc?function(a){return a[Sc]|0}:function(a){return a.ga|0},Zc=Sc?function(a){return a[Sc]}:function(a){return a.ga},Wc=Sc?function(a,b){a[Sc]=b}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function $c(){var a=[];Tc(a,1);return a}
function ad(a,b){Wc(b,(a|0)&-14591)}
function bd(a,b){Wc(b,(a|34)&-14557)}
function cd(a){a=a>>14&1023;return 0===a?536870912:a}
;var dd={};function ed(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var fd,gd,hd=[];Wc(hd,55);gd=Object.freeze(hd);function id(a){if(a&2)throw Error();}
;function jd(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function kd(){var a=Error();jd(a,"incident");gc(a)}
function ld(a){a=Error(a);jd(a,"warning");return a}
;function md(a){return a.displayName||a.name||"unknown type name"}
function nd(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ja(a)+": "+a);return!!a}
var rd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function sd(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:rd.test(a)}
function td(a,b){b=!!b;if(!sd(a))throw ld("int64");if("string"===typeof a){if(sd(a),b){var c=Math.trunc(Number(a));if(Number.isSafeInteger(c))a=String(c);else if(c=a.indexOf("."),-1!==c&&(a=a.substring(0,c)),b){if(16>a.length)Mc(Number(a));else if(Jc())a=BigInt(a),Kc=Number(a&BigInt(4294967295))>>>0,Lc=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Lc=Kc=0;c=a.length;for(var d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Lc*=1E6,Kc=1E6*Kc+d,4294967296<=Kc&&(Lc+=Math.trunc(Kc/
4294967296),Lc>>>=0,Kc>>>=0);b&&(b=w(Nc(Kc,Lc)),a=b.next().value,b=b.next().value,Kc=a,Lc=b)}a=Qc()}}}else b?(sd(a),b?(a=Math.trunc(a),!b||Number.isSafeInteger(a)?a=String(a):(Mc(a),a=Qc())):a=String(a)):sd(a);return a}
function ud(a){return null==a?a:td(a)}
function vd(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function wd(a){return null==a||"string"===typeof a?a:void 0}
function xd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+md(b)+" but got "+(a&&md(a.constructor)));return a}
function yd(a,b,c){if(null!=a&&"object"===typeof a&&a.Wb===dd)return a;if(Array.isArray(a)){var d=Vc(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Wc(a,e);return new b(a)}}
;var zd;function H(a,b,c){null==a&&(a=zd);zd=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=Vc(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(ed(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(Ad(c,b,g),e=1023);d=d&-16760833|(e&1023)<<14;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(Ad(c,g,{}),d|=256,b=1023),d=d&-16760833|(b&1023)<<14)}}Wc(a,d);return a}
function Ad(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function Bd(a,b){return Cd(b)}
function Cd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&Hc&&null!=a&&a instanceof Uint8Array){if(Ic){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Gc(a);return a}}return a}
;function Dd(a,b,c){a=Rc(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Ed(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Vc(a)&1?void 0:f&&Vc(a)&2?a:Fd(a,b,c,void 0!==d,e,f);else if(ed(a)){var g={},h;for(h in a)g[h]=Ed(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Fd(a,b,c,d,e,f){var g=d||c?Vc(a):0;d=d?!!(g&32):void 0;a=Rc(a);for(var h=0;h<a.length;h++)a[h]=Ed(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Gd(a){return a.Wb===dd?a.toJSON():Cd(a)}
;function Hd(a,b,c){c=void 0===c?bd:c;if(null!=a){if(Hc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Vc(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Wc(a,(d|34)&-12293),a):Fd(a,Hd,d&4?bd:c,!0,!1,!0)}a.Wb===dd&&(c=a.s,d=Zc(c),a=d&2?a:Id(a,c,d,!0));return a}}
function Id(a,b,c,d){a=a.constructor;b=Jd(b,c,d);Vc(b);zd=b;b=new a(b);zd=void 0;return b}
function Jd(a,b,c){var d=c||b&2?bd:ad,e=!!(b&32);a=Dd(a,b,function(f){return Hd(f,e,d)});
Tc(a,32|(c?2:0));return a}
;Object.freeze({});function Kd(a,b){a=a.s;return Ld(a,Zc(a),b)}
function Ld(a,b,c,d){if(-1===c)return null;if(c>=cd(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function I(a,b,c){var d=a.s,e=Zc(d);id(e);Md(d,e,b,c);return a}
function Md(a,b,c,d,e){ed(d);var f=cd(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return e;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Wc(a,e);return e}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Nd(a,b,c,d){var e=b&2,f=Ld(a,b,c);Array.isArray(f)||(f=gd);var g=!(d&2);d=!(d&1);var h=!!(b&32),k=Vc(f);0!==k||!h||e||g?k&1||(k|=1,Wc(f,k)):(k|=33,Wc(f,k));e?(a=!1,k&2||(Tc(f,34),a=!!(4&k)),(d||a)&&Object.freeze(f)):(e=!!(2&k)||!!(2048&k),d&&e?(f=Rc(f),d=1,h&&!g&&(d|=32),Wc(f,d),Md(a,b,c,f)):g&&k&32&&!e&&Xc(f,32));return f}
function Od(a,b,c,d){a=a.s;var e=Zc(a);id(e);(c=Pd(a,e,c))&&c!==b&&null!=d&&(e=Md(a,e,c));Md(a,e,b,d)}
function Qd(a,b,c){a=a.s;return Pd(a,Zc(a),b)===c?c:-1}
function Pd(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=Ld(a,b,f)&&(0!==d&&(b=Md(a,b,d)),d=f)}return d}
function Rd(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=Zc(e),g=Ld(e,f,c,d);b=yd(g,b,f);b!==g&&null!=b&&Md(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=Zc(a);if(!(f&2)){g=e;b=g.s;var h=Zc(b);g=h&2?Id(g,b,h,!1):g;g!==e&&(e=g,Md(a,f,c,e,d))}return e}
function J(a,b,c,d){null!=d?xd(d,b):d=void 0;return I(a,c,d)}
function Sd(a,b,c,d,e){null!=e?xd(e,b):e=void 0;Od(a,c,d,e)}
function Td(a,b,c){a=Yc(a,2,!!(2&b));a=Yc(a,32,!!(32&b)&&c);return a=Yc(a,2048,!1)}
function Ud(a,b,c,d){a=a.s;var e=Zc(a);id(e);var f=!!f;var g=!!(2&e)&&!0,h=Nd(a,e,b,3);e=Zc(a);var k=Vc(h),l=!!(2&k),m=!!(4&k),n=l&&m||!!(2048&k);if(!m){m=h;var q=e,p=!!(2&k);p&&(q=Yc(q,2,!0));for(var t=!p,u=!0,z=0,G=0;z<m.length;z++){var P=yd(m[z],c,q);if(P instanceof c){if(!p){var Q=!!(Vc(P.s)&2);t&&(t=!Q);u&&(u=Q)}m[G++]=P}}G<z&&(m.length=G);k=Yc(k,4,!0);k=Yc(k,16,u);k=Yc(k,8,t);Wc(m,k);l&&!g&&(Object.freeze(h),n=!0)}g=k;n||(f||(k=Yc(k,32,!1)),k!==g&&Wc(h,k));n&&(h=Rc(h),k=Td(k,e,f),Wc(h,k),Md(a,
e,b,h));b=h;c=null!=d?xd(d,c):new c;b.push(c);Vc(c.s)&2?Xc(b,8):Xc(b,16)}
function Vd(a,b){var c=void 0===c?"":c;a=wd(Kd(a,b));return null!=a?a:c}
function Wd(a,b){b=Qd(a,Xd,b);return wd(Kd(a,b))}
function Yd(a,b,c){if(null!=c){if("number"!==typeof c)throw ld("int32");Number.isFinite(c)||kd()}I(a,b,c)}
function K(a,b,c){return I(a,b,vd(c))}
function Zd(a,b,c){null!=c&&(Number.isFinite(c)||kd());return I(a,b,c)}
;function L(a,b,c){this.s=H(a,b,c)}
L.prototype.toJSON=function(){if(fd)var a=$d(this,this.s,!1);else a=Fd(this.s,Gd,void 0,void 0,!1,!1),a=$d(this,a,!0);return a};
function ae(a){fd=!0;try{return JSON.stringify(a.toJSON(),Bd)}finally{fd=!1}}
L.prototype.clone=function(){var a=this.s;return Id(this,a,Zc(a),!1)};
L.prototype.Wb=dd;L.prototype.toString=function(){return $d(this,this.s,!1).toString()};
function $d(a,b,c){var d=a.constructor.ma,e=Zc(c?a.s:b),f=cd(e);e=!1;if(d){if(!c){b=Rc(b);var g;if(b.length&&ed(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=Zc(a.s);a=cd(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var m=g[k];null==m?g[k]=c?gd:$c():c&&m!==gd&&Uc(m)}else h||(m=void 0,g.length&&ed(m=g[g.length-1])?h=m:g.push(h={})),m=h[k],null==h[k]?h[k]=c?gd:$c():c&&m!==gd&&Uc(m)}d=b.length;if(!d)return b;var n;
if(ed(h=b[d-1])){a:{var q=h;g={};c=!1;for(var p in q)a=q[p],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[p]=a:c=!0;if(c){for(var t in g){q=g;break a}q=null}}q!=h&&(n=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var u=!0}if(!n&&!u)return b;var z;e?z=b:z=Array.prototype.slice.call(b,0,d);b=z;e&&(b.length=d);q&&b.push(q);return b}
;var be=window;tb("csi.gstatic.com");tb("googleads.g.doubleclick.net");tb("partner.googleadservices.com");tb("pubads.g.doubleclick.net");tb("securepubads.g.doubleclick.net");tb("tpc.googlesyndication.com");function ce(a,b){this.width=a;this.height=b}
r=ce.prototype;r.clone=function(){return new ce(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.Qb=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function de(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function ee(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function fe(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ge(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,he[c])c=he[c];else{c=String(c);if(!he[c]){var f=/function\s+([^\(]+)/m.exec(c);he[c]=f?f[1]:"[Anonymous]"}c=he[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ge(a,b){b||(b={});b[ie(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[ie(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ge(a,b));return c}
function ie(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var he={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var je="function"===typeof URL;function ke(){throw Error("unknown trace type");}
;var le={Sd:0,Xd:1,Qd:2,Rd:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function me(a,b){b=Error.call(this,a+" cannot be used with intent "+le[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
y(me,Error);
function ne(a,b){a.removeAttribute("srcdoc");if(b instanceof vb)throw new me("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Fb)b instanceof Fb&&b.constructor===Fb?b=b.g:(Ja(b),b="type_error:SafeUrl");else{b:if(je){try{var e=new URL(b)}catch(f){c="https:";
break b}c=e.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function oe(a){this.nd=a}
function pe(a){return new oe(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var qe=[pe("data"),pe("http"),pe("https"),pe("mailto"),pe("ftp"),new oe(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function re(a,b){b=void 0===b?qe:b;if(a instanceof Fb)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof oe&&d.nd(a))return new Fb(a,Gb)}}
function se(a){var b=void 0===b?qe:b;return re(a,b)||Hb}
;function te(a){var b=ue;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ve(){var a=[];te(function(b){a.push(b)});
return a}
var ue={Ed:"allow-forms",Fd:"allow-modals",Gd:"allow-orientation-lock",Hd:"allow-pointer-lock",Id:"allow-popups",Jd:"allow-popups-to-escape-sandbox",Kd:"allow-presentation",Ld:"allow-same-origin",Md:"allow-scripts",Nd:"allow-top-navigation",Od:"allow-top-navigation-by-user-activation"},we=$a(function(){return ve()});
function xe(){var a=ye(),b={};bb(we(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ye(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var ze=(new Date).getTime();function Ae(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Be(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var t=e[1],u=e[2],z=e[3],G=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var P=z^t&(u^z);var Q=1518500249}else P=t^u^z,Q=1859775393;else 60>p?(P=t&u|z&(t|u),Q=2400959708):(P=t^u^z,Q=3395469782);P=((n<<5|n>>>27)&4294967295)+P+G+Q+q[p]&4294967295;G=z;z=u;u=(t<<30|t>>>2)&4294967295;t=n;n=P}e[0]=e[0]+n&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],t=0,u=n.length;t<u;++t)p.push(n.charCodeAt(t));n=p}q||(q=n.length);p=0;if(0==l)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var t=24;0<=t;t-=8)n[q++]=e[p]>>t&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Wc:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function Ce(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,De(Ae(d),a,c||null)].join(" "):null}
function De(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],bb(d,function(h){e.push(h)}),Ee(e.join(" "));
var f=[],g=[];bb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];bb(d,function(h){e.push(h)});
a=Ee(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ee(a){var b=Be();b.update(a);return b.Wc().toLowerCase()}
;var Fe={};function Ge(a){this.g=a||{cookie:""}}
r=Ge.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.Qb())return!0;this.set("TESTCOOKIESENABLED","1",{Tb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.xe;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Tb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Tb:0,path:b,domain:c});return d};
r.Qb=function(){return!this.g.cookie};
r.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var He=new Ge("undefined"==typeof document?null:document);function Ie(a){return!!Fe.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Je(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Ge(document)).get(b));return a?Ce(a,c,d):null}
function Ke(a){var b=void 0===b?!1:b;var c=Ae(String(C.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Ie(e)&&(f=f||C.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new Ge(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");Ie(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
C.__SAPISID:C.__APISID,e||"undefined"===typeof document||(e=new Ge(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Ce(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Ie(b)&&((b=Je("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Je("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var Oe="undefined"!==typeof TextEncoder?new TextEncoder:null,Pe=Oe?function(a){return Oe.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Qe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Re(){this.Ha=this.Ha;this.oa=this.oa}
Re.prototype.Ha=!1;Re.prototype.dispose=function(){this.Ha||(this.Ha=!0,this.sa())};
Re.prototype.sa=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()};function Se(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Se.prototype.stopPropagation=function(){this.i=!0};
Se.prototype.preventDefault=function(){this.defaultPrevented=!0};var Te=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ue(a,b){Se.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Va(Ue,Se);var Ve={2:"touch",3:"pen",4:"mouse"};
Ue.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(mc){a:{try{ic(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ve[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&Ue.na.preventDefault.call(this)};
Ue.prototype.stopPropagation=function(){Ue.na.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Ue.prototype.preventDefault=function(){Ue.na.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var We="closure_listenable_"+(1E6*Math.random()|0);var Xe=0;function Ye(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Bb=e;this.key=++Xe;this.rb=this.wb=!1}
function Ze(a){a.rb=!0;a.listener=null;a.proxy=null;a.src=null;a.Bb=null}
;function $e(a){this.src=a;this.listeners={};this.g=0}
$e.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=af(a,b,d,e);-1<g?(b=a[g],c||(b.wb=!1)):(b=new Ye(b,this.src,f,!!d,e),b.wb=c,a.push(b));return b};
$e.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=af(e,b,c,d);return-1<b?(Ze(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function bf(a,b){var c=b.type;c in a.listeners&&db(a.listeners[c],b)&&(Ze(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function af(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.rb&&f.listener==b&&f.capture==!!c&&f.Bb==d)return e}return-1}
;var cf="closure_lm_"+(1E6*Math.random()|0),df={},ef=0;function ff(a,b,c,d,e){if(d&&d.once)gf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ff(a,b[f],c,d,e);else c=hf(c),a&&a[We]?a.La(b,c,Ma(d)?!!d.capture:!!d,e):jf(a,b,c,!1,d,e)}
function jf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=kf(a);h||(a[cf]=h=new $e(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=lf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Te||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(mf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ef++}}
function lf(){function a(c){return b.call(a.src,a.listener,c)}
var b=nf;return a}
function gf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)gf(a,b[f],c,d,e);else c=hf(c),a&&a[We]?a.g.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):jf(a,b,c,!0,d,e)}
function of(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)of(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=hf(c),a&&a[We])?a.g.remove(String(b),c,d,e):a&&(a=kf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=af(b,c,d,e)),(c=-1<a?b[a]:null)&&pf(c))}
function pf(a){if("number"!==typeof a&&a&&!a.rb){var b=a.src;if(b&&b[We])bf(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(mf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ef--;(c=kf(b))?(bf(c,a),0==c.g&&(c.src=null,b[cf]=null)):Ze(a)}}}
function mf(a){return a in df?df[a]:df[a]="on"+a}
function nf(a,b){if(a.rb)a=!0;else{b=new Ue(b,this);var c=a.listener,d=a.Bb||a.src;a.wb&&pf(a);a=c.call(d,b)}return a}
function kf(a){a=a[cf];return a instanceof $e?a:null}
var qf="__closure_events_fn_"+(1E9*Math.random()>>>0);function hf(a){if("function"===typeof a)return a;a[qf]||(a[qf]=function(b){return a.handleEvent(b)});
return a[qf]}
;function rf(){Re.call(this);this.g=new $e(this);this.M=this;this.u=null}
Va(rf,Re);rf.prototype[We]=!0;rf.prototype.addEventListener=function(a,b,c,d){ff(this,a,b,c,d)};
rf.prototype.removeEventListener=function(a,b,c,d){of(this,a,b,c,d)};
function sf(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.M;c=b.type||b;"string"===typeof b?b=new Se(b,a):b instanceof Se?b.target=b.target||a:(e=b,b=new Se(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=tf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=tf(g,c,!0,b)&&e,b.i||(e=tf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=tf(g,c,!1,b)&&e}
rf.prototype.sa=function(){rf.na.sa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ze(d[e]);delete a.listeners[c];a.g--}}this.u=null};
rf.prototype.La=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function tf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.rb&&g.capture==c){var h=g.listener,k=g.Bb||g.src;g.wb&&bf(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function uf(a){rf.call(this);var b=this;this.H=this.i=0;this.ha=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.j=function(){return B(function(e){return A(e,vf(b),0)})};
window.addEventListener("offline",this.j);window.addEventListener("online",this.j);this.H||wf(this)}
y(uf,rf);function xf(){var a=yf;uf.g||(uf.g=new uf(a));return uf.g}
uf.prototype.dispose=function(){window.removeEventListener("offline",this.j);window.removeEventListener("online",this.j);this.ha.ba(this.H);delete uf.g};
uf.prototype.ca=function(){return this.h};
function wf(a){a.H=a.ha.qa(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):A(c,vf(a),3):A(c,vf(a),3);wf(a);c.g=0})},3E4)}
function vf(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.i=a.ha.qa(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.S=[h.i];h.o=0;h.u=0;a.o=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?sf(a,"networkstatus-online"):sf(a,"networkstatus-offline"));c(g);ya(h);break;case 2:xa(h),g=!1,h.B(3)}})})}
;function zf(){this.data=[];this.g=-1}
zf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
zf.prototype.get=function(a){return!!this.data[a]};
function Af(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Bf(a){this.s=H(a)}
y(Bf,L);function Cf(a){this.s=H(a)}
y(Cf,L);function Df(a,b){return K(a,2,b)}
function Ef(a,b){return K(a,3,b)}
function Ff(a,b){return K(a,4,b)}
function Gf(a,b){return K(a,5,b)}
function Hf(a,b){return K(a,9,b)}
function If(a,b){var c=a.s,d=Zc(c);id(d);if(null==b)Md(c,d,10);else{var e=Vc(b),f=e,g=!!(2&e)||!!(2048&e),h=g||Object.isFrozen(b),k;if(k=!h)k=!1;for(var l=!0,m=!0,n=0;n<b.length;n++){var q=b[n];xd(q,Bf);g||(q=!!(Vc(q.s)&2),l&&(l=!q),m&&(m=q))}g||(e=Yc(e,5,!0),e=Yc(e,8,l),e=Yc(e,16,m),k&&(e=Yc(e,m?2:2048,!0)),e!==f&&(h&&(b=Rc(b),e=Td(e,d,!0)),Wc(b,e)),k&&Object.freeze(b));Md(c,d,10,b)}return a}
function Jf(a,b){return I(a,11,null==b?b:nd(b))}
function Kf(a,b){return K(a,1,b)}
function Lf(a,b){return I(a,7,null==b?b:nd(b))}
Cf.ma=[10,6];var Mf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Nf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Of(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Pf(){var a=window;if(!Of(a))return null;var b=Nf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Mf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Qf(a){var b;return Jf(If(Gf(Df(Kf(Ff(Lf(Hf(Ef(new Cf,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Bf;d=K(d,1,c.brand);return K(d,2,c.version)}))||[]),a.wow64||!1)}
function Rf(){var a,b;return null!=(b=null==(a=Pf())?void 0:a.then(function(c){return Qf(c)}))?b:null}
;function Sf(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
Sf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Tf(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var Uf;function Vf(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=de();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Sa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.jc;c.jc=null;e()}};
return function(e){d.next={jc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Wf(){this.h=this.g=null}
Wf.prototype.add=function(a,b){var c=Xf.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
Wf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Xf=new Sf(function(){return new Yf},function(a){return a.reset()});
function Yf(){this.next=this.scope=this.g=null}
Yf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Yf.prototype.reset=function(){this.next=this.scope=this.g=null};var Zf,$f=!1,ag=new Wf;function bg(a,b){Zf||cg();$f||(Zf(),$f=!0);ag.add(a,b)}
function cg(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Zf=function(){a.then(dg)}}else Zf=function(){var b=dg;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Pb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Uf||(Uf=Vf()),Uf(b)):C.setImmediate(b)}}
function dg(){for(var a;a=ag.remove();){try{a.g.call(a.scope)}catch(b){gc(b)}Tf(Xf,a)}$f=!1}
;function eg(a,b){this.g=a[C.Symbol.iterator]();this.h=b}
eg.prototype[Symbol.iterator]=function(){return this};
eg.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function fg(a,b){return new eg(a,b)}
;function gg(){this.blockSize=-1}
;function hg(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
Va(hg,gg);hg.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.j=this.h=0};
function ig(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
hg.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)ig(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ig(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ig(this,e);f=0;break}}this.h=f;this.j+=b}};
hg.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;ig(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function jg(){}
jg.prototype.next=function(){return kg};
var kg={done:!0,value:void 0};function lg(a){return{value:a,done:!1}}
jg.prototype.ia=function(){return this};function mg(a){if(a instanceof ng||a instanceof og||a instanceof pg)return a;if("function"==typeof a.next)return new ng(function(){return a});
if("function"==typeof a[Symbol.iterator])return new ng(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new ng(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function ng(a){this.h=a}
ng.prototype.ia=function(){return new og(this.h())};
ng.prototype[Symbol.iterator]=function(){return new pg(this.h())};
ng.prototype.g=function(){return new pg(this.h())};
function og(a){this.h=a}
y(og,jg);og.prototype.next=function(){return this.h.next()};
og.prototype[Symbol.iterator]=function(){return new pg(this.h)};
og.prototype.g=function(){return new pg(this.h)};
function pg(a){ng.call(this,function(){return a});
this.i=a}
y(pg,ng);pg.prototype.next=function(){return this.i.next()};function qg(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof qg)for(c=rg(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function rg(a){sg(a);return a.g.concat()}
r=qg.prototype;r.has=function(a){return tg(this.h,a)};
r.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ug;sg(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ug(a,b){return a===b}
r.Qb=function(){return 0==this.size};
r.clear=function(){this.h={};this.i=this.size=this.g.length=0};
r.remove=function(a){return this.delete(a)};
r.delete=function(a){return tg(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&sg(this),!0):!1};
function sg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];tg(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],tg(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
r.get=function(a,b){return tg(this.h,a)?this.h[a]:b};
r.set=function(a,b){tg(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=rg(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new qg(this)};
r.keys=function(){return mg(this.ia(!0)).g()};
r.values=function(){return mg(this.ia(!1)).g()};
r.entries=function(){var a=this;return fg(this.keys(),function(b){return[b,a.get(b)]})};
r.ia=function(a){sg(this);var b=0,c=this.i,d=this,e=new jg;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return kg;var f=d.g[b++];return lg(a?f:d.h[f])};
return e};
function tg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var vg=C.JSON.stringify;function wg(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function xg(a){this.g=0;this.H=void 0;this.j=this.h=this.i=null;this.o=this.u=!1;if(a!=Za)try{var b=this;a.call(void 0,function(c){yg(b,2,c)},function(c){yg(b,3,c)})}catch(c){yg(this,3,c)}}
function zg(){this.next=this.context=this.h=this.i=this.g=null;this.j=!1}
zg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.j=!1};
var Ag=new Sf(function(){return new zg},function(a){a.reset()});
function Bg(a,b,c){var d=Ag.get();d.i=a;d.h=b;d.context=c;return d}
xg.prototype.then=function(a,b,c){return Cg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
xg.prototype.$goog_Thenable=!0;xg.prototype.cancel=function(a){if(0==this.g){var b=new Dg(a);bg(function(){Eg(this,b)},this)}};
function Eg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.j||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Eg(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):Fg(c),Gg(c,e,3,b)))}a.i=null}else yg(a,3,b)}
function Hg(a,b){a.h||2!=a.g&&3!=a.g||Ig(a);a.j?a.j.next=b:a.h=b;a.j=b}
function Cg(a,b,c,d){var e=Bg(null,null,null);e.g=new xg(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Dg?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;Hg(a,e);return e.g}
xg.prototype.S=function(a){this.g=0;yg(this,2,a)};
xg.prototype.oa=function(a){this.g=0;yg(this,3,a)};
function yg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.S,f=a.oa;if(d instanceof xg){Hg(d,Bg(e||Za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ma(d))try{var k=d.then;if("function"===typeof k){Jg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.g=b,a.i=null,Ig(a),3!=b||c instanceof Dg||Kg(a,c))}}
function Jg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ig(a){a.u||(a.u=!0,bg(a.M,a))}
function Fg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
xg.prototype.M=function(){for(var a;a=Fg(this);)Gg(this,a,this.g,this.H);this.u=!1};
function Gg(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Lg(b,c,d);else try{b.j?b.i.call(b.context):Lg(b,c,d)}catch(e){Mg.call(null,e)}Tf(Ag,b)}
function Lg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Kg(a,b){a.o=!0;bg(function(){a.o&&Mg.call(null,b)})}
var Mg=gc;function Dg(a){Xa.call(this,a)}
Va(Dg,Xa);Dg.prototype.name="cancel";function M(a){Re.call(this);this.o=1;this.i=[];this.j=0;this.g=[];this.h={};this.u=!!a}
Va(M,Re);r=M.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.o;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.o=e+3;d.push(e);return e};
function Ng(a,b,c){var d=Og;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.tb(a)}}
r.tb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.g[a+1]=function(){}):(c&&db(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
r.bb=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Pg(this.g[g+1],this.g[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f&&!this.Ha;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.tb(c)}}return 0!=e}return!1};
function Pg(a,b,c){bg(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.tb,this),delete this.h[a])}else this.g.length=0,this.h={}};
r.sa=function(){M.na.sa.call(this);this.clear();this.i.length=0};function Qg(a){this.g=a}
Qg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,vg(b))};
Qg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qg.prototype.remove=function(a){this.g.remove(a)};function Rg(a){this.g=a}
Va(Rg,Qg);function Sg(a){this.data=a}
function Tg(a){return void 0===a||a instanceof Sg?a:new Sg(a)}
Rg.prototype.set=function(a,b){Rg.na.set.call(this,a,Tg(b))};
Rg.prototype.h=function(a){a=Rg.na.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Rg.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ug(a){this.g=a}
Va(Ug,Rg);Ug.prototype.set=function(a,b,c){if(b=Tg(b)){if(c){if(c<Ta()){Ug.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ta()}Ug.na.set.call(this,a,b)};
Ug.prototype.h=function(a){var b=Ug.na.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ta()||c&&c>Ta())Ug.prototype.remove.call(this,a);else return b}};function Vg(){}
;function Wg(){}
Va(Wg,Vg);Wg.prototype[Symbol.iterator]=function(){return mg(this.ia(!0)).g()};
Wg.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Xg(a){this.g=a}
Va(Xg,Wg);r=Xg.prototype;r.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeItem(a)};
r.ia=function(a){var b=0,c=this.g,d=new jg;d.next=function(){if(b>=c.length)return kg;var e=c.key(b++);if(a)return lg(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return lg(e)};
return d};
r.clear=function(){this.g.clear()};
r.key=function(a){return this.g.key(a)};function Yg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
Va(Yg,Xg);function Zg(a,b){this.h=a;this.g=null;var c;if(c=kc)c=!(9<=Number(Ac));if(c){$g||($g=new qg);this.g=$g.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),$g.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Va(Zg,Wg);var ah={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},$g=null;function bh(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ah[b]})}
r=Zg.prototype;r.set=function(a,b){this.g.setAttribute(bh(a),b);ch(this)};
r.get=function(a){a=this.g.getAttribute(bh(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeAttribute(bh(a));ch(this)};
r.ia=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new jg;d.next=function(){if(b>=c.length)return kg;var e=c[b++];if(a)return lg(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return lg(e)};
return d};
r.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ch(this)};
function ch(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function dh(a,b){this.h=a;this.g=b+"::"}
Va(dh,Wg);dh.prototype.set=function(a,b){this.h.set(this.g+a,b)};
dh.prototype.get=function(a){return this.h.get(this.g+a)};
dh.prototype.remove=function(a){this.h.remove(this.g+a)};
dh.prototype.ia=function(a){var b=this.h[Symbol.iterator](),c=this,d=new jg;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return lg(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},eh="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.ac=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var fh={Ra:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},gh={Ra:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nc:function(a){return[].concat.apply([],a)}};
N.xd=function(){eh?(N.Qa=Uint8Array,N.pa=Uint16Array,N.Lc=Int32Array,N.assign(N,fh)):(N.Qa=Array,N.pa=Array,N.Lc=Array,N.assign(N,gh))};
N.xd();var hh=!0;try{new Uint8Array(1)}catch(a){hh=!1}
function ih(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.Qa(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var jh={};jh=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var kh={},lh,mh=[],nh=0;256>nh;nh++){lh=nh;for(var oh=0;8>oh;oh++)lh=lh&1?3988292384^lh>>>1:lh>>>1;mh[nh]=lh}kh=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^mh[(a^b[d])&255];return a^-1};var ph={};ph={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function qh(a){for(var b=a.length;0<=--b;)a[b]=0}
var rh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],sh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],th=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],uh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],vh=Array(576);qh(vh);var wh=Array(60);qh(wh);var xh=Array(512);qh(xh);var yh=Array(256);qh(yh);var zh=Array(29);qh(zh);var Ah=Array(30);qh(Ah);function Bh(a,b,c,d,e){this.Hc=a;this.ad=b;this.Zc=c;this.Xc=d;this.rd=e;this.qc=a&&a.length}
var Ch,Dh,Eh;function Fh(a,b){this.lc=a;this.Ya=0;this.Ca=b}
function Gh(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function Hh(a,b,c){a.O>16-c?(a.V|=b<<a.O&65535,Gh(a,a.V),a.V=b>>16-a.O,a.O+=c-16):(a.V|=b<<a.O&65535,a.O+=c)}
function di(a,b,c){Hh(a,c[2*b],c[2*b+1])}
function ei(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function fi(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=ei(d[e]++,e))}
function gi(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Ia[2*b]=0;for(b=0;19>b;b++)a.R[2*b]=0;a.X[512]=1;a.xa=a.cb=0;a.da=a.matches=0}
function hi(a){8<a.O?Gh(a,a.V):0<a.O&&(a.K[a.pending++]=a.V);a.V=0;a.O=0}
function ii(a,b,c){hi(a);Gh(a,c);Gh(a,~c);N.Ra(a.K,a.window,b,c,a.pending);a.pending+=c}
function ji(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ki(a,b,c){for(var d=a.L[c],e=c<<1;e<=a.wa;){e<a.wa&&ji(b,a.L[e+1],a.L[e],a.depth)&&e++;if(ji(b,d,a.L[e],a.depth))break;a.L[c]=a.L[e];c=e;e<<=1}a.L[c]=d}
function li(a,b,c){var d=0;if(0!==a.da){do{var e=a.K[a.lb+2*d]<<8|a.K[a.lb+2*d+1];var f=a.K[a.Sb+d];d++;if(0===e)di(a,f,b);else{var g=yh[f];di(a,g+256+1,b);var h=rh[g];0!==h&&(f-=zh[g],Hh(a,f,h));e--;g=256>e?xh[e]:xh[256+(e>>>7)];di(a,g,c);h=sh[g];0!==h&&(e-=Ah[g],Hh(a,e,h))}}while(d<a.da)}di(a,256,b)}
function mi(a,b){var c=b.lc,d=b.Ca.Hc,e=b.Ca.qc,f=b.Ca.Xc,g,h=-1;a.wa=0;a.Ua=573;for(g=0;g<f;g++)0!==c[2*g]?(a.L[++a.wa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.wa;){var k=a.L[++a.wa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.xa--;e&&(a.cb-=d[2*k+1])}b.Ya=h;for(g=a.wa>>1;1<=g;g--)ki(a,c,g);k=f;do g=a.L[1],a.L[1]=a.L[a.wa--],ki(a,c,1),d=a.L[1],a.L[--a.Ua]=g,a.L[--a.Ua]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.L[1]=k++,ki(a,c,1);while(2<=a.wa);a.L[--a.Ua]=
a.L[1];g=b.lc;k=b.Ya;d=b.Ca.Hc;e=b.Ca.qc;f=b.Ca.ad;var l=b.Ca.Zc,m=b.Ca.rd,n,q=0;for(n=0;15>=n;n++)a.ra[n]=0;g[2*a.L[a.Ua]+1]=0;for(b=a.Ua+1;573>b;b++){var p=a.L[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,q++);g[2*p+1]=n;if(!(p>k)){a.ra[n]++;var t=0;p>=l&&(t=f[p-l]);var u=g[2*p];a.xa+=u*(n+t);e&&(a.cb+=u*(d[2*p+1]+t))}}if(0!==q){do{for(n=m-1;0===a.ra[n];)n--;a.ra[n]--;a.ra[n+1]+=2;a.ra[m]--;q-=2}while(0<q);for(n=m;0!==n;n--)for(p=a.ra[n];0!==p;)d=a.L[--b],d>k||(g[2*d+1]!==n&&(a.xa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}fi(c,h,a.ra)}
function ni(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.R[2*l]+=g:0!==l?(l!==e&&a.R[2*l]++,a.R[32]++):10>=g?a.R[34]++:a.R[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function oi(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do di(a,l,a.R);while(0!==--g)}else 0!==l?(l!==e&&(di(a,l,a.R),g--),di(a,16,a.R),Hh(a,g-3,2)):10>=g?(di(a,17,a.R),Hh(a,g-3,3)):(di(a,18,a.R),Hh(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function pi(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var qi=!1;function ri(a,b,c){a.K[a.lb+2*a.da]=b>>>8&255;a.K[a.lb+2*a.da+1]=b&255;a.K[a.Sb+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(yh[c]+256+1)]++,a.Ia[2*(256>b?xh[b]:xh[256+(b>>>7)])]++);return a.da===a.ob-1}
;function si(a,b){a.msg=ph[b];return b}
function ti(a){for(var b=a.length;0<=--b;)a[b]=0}
function ui(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(N.Ra(a.output,b.K,b.qb,c,a.Za),a.Za+=c,b.qb+=c,a.cc+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.qb=0))}
function R(a,b){var c=0<=a.Z?a.Z:-1,d=a.l-a.Z,e=0;if(0<a.level){2===a.C.Nb&&(a.C.Nb=pi(a));mi(a,a.Db);mi(a,a.zb);ni(a,a.X,a.Db.Ya);ni(a,a.Ia,a.zb.Ya);mi(a,a.hc);for(e=18;3<=e&&0===a.R[2*uh[e]+1];e--);a.xa+=3*(e+1)+14;var f=a.xa+3+7>>>3;var g=a.cb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Hh(a,b?1:0,3),ii(a,c,d);else if(4===a.strategy||g===f)Hh(a,2+(b?1:0),3),li(a,vh,wh);else{Hh(a,4+(b?1:0),3);c=a.Db.Ya+1;d=a.zb.Ya+1;e+=1;Hh(a,c-257,5);Hh(a,d-1,5);Hh(a,e-4,4);for(f=0;f<e;f++)Hh(a,a.R[2*uh[f]+
1],3);oi(a,a.X,c-1);oi(a,a.Ia,d-1);li(a,a.X,a.Ia)}gi(a);b&&hi(a);a.Z=a.l;ui(a.C)}
function S(a,b){a.K[a.pending++]=b}
function vi(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function wi(a,b){var c=a.yc,d=a.l,e=a.aa,f=a.zc,g=a.l>a.T-262?a.l-(a.T-262):0,h=a.window,k=a.Ea,l=a.la,m=a.l+258,n=h[d+e-1],q=h[d+e];a.aa>=a.pc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===q&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Xa=b;e=p;if(p>=f)break;n=h[d+e-1];q=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function xi(a){var b=a.T,c;do{var d=a.Jc-a.m-a.l;if(a.l>=b+(b-262)){N.Ra(a.window,a.window,b,b,0);a.Xa-=b;a.l-=b;a.Z-=b;var e=c=a.Cb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.l+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,N.Ra(c,e.input,e.Oa,g,f),1===e.state.wrap?e.A=jh(e.A,c,g,f):2===e.state.wrap&&(e.A=kh(e.A,c,g,f)),e.Oa+=g,e.Pa+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.l-a.Y,a.D=a.window[d],a.D=
(a.D<<a.va^a.window[d+1])&a.ta;a.Y&&!(a.D=(a.D<<a.va^a.window[d+3-1])&a.ta,a.la[d&a.Ea]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function yi(a,b){for(var c;;){if(262>a.m){xi(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Ea]=a.head[a.D],a.head[a.D]=a.l);0!==c&&a.l-c<=a.T-262&&(a.G=wi(a,c));if(3<=a.G)if(c=ri(a,a.l-a.Xa,a.G-3),a.m-=a.G,a.G<=a.Ub&&3<=a.m){a.G--;do a.l++,a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Ea]=a.head[a.D],a.head[a.D]=a.l;while(0!==--a.G);a.l++}else a.l+=a.G,a.G=0,a.D=a.window[a.l],a.D=(a.D<<a.va^a.window[a.l+1])&a.ta;else c=ri(a,0,a.window[a.l]),
a.m--,a.l++;if(c&&(R(a,!1),0===a.C.F))return 1}a.Y=2>a.l?a.l:2;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&(R(a,!1),0===a.C.F)?1:2}
function zi(a,b){for(var c,d;;){if(262>a.m){xi(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Ea]=a.head[a.D],a.head[a.D]=a.l);a.aa=a.G;a.Cc=a.Xa;a.G=2;0!==c&&a.aa<a.Ub&&a.l-c<=a.T-262&&(a.G=wi(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.l-a.Xa)&&(a.G=2));if(3<=a.aa&&a.G<=a.aa){d=a.l+a.m-3;c=ri(a,a.l-1-a.Cc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.l<=d&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Ea]=a.head[a.D],a.head[a.D]=a.l);while(0!==
--a.aa);a.Ma=0;a.G=2;a.l++;if(c&&(R(a,!1),0===a.C.F))return 1}else if(a.Ma){if((c=ri(a,0,a.window[a.l-1]))&&R(a,!1),a.l++,a.m--,0===a.C.F)return 1}else a.Ma=1,a.l++,a.m--}a.Ma&&(ri(a,0,a.window[a.l-1]),a.Ma=0);a.Y=2>a.l?a.l:2;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&(R(a,!1),0===a.C.F)?1:2}
function Ai(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){xi(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.G=0;if(3<=a.m&&0<a.l&&(d=a.l-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.l+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.m&&(a.G=a.m)}3<=a.G?(c=ri(a,1,a.G-3),a.m-=a.G,a.l+=a.G,a.G=0):(c=ri(a,0,a.window[a.l]),a.m--,a.l++);if(c&&(R(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&
(R(a,!1),0===a.C.F)?1:2}
function Bi(a,b){for(var c;;){if(0===a.m&&(xi(a),0===a.m)){if(0===b)return 1;break}a.G=0;c=ri(a,0,a.window[a.l]);a.m--;a.l++;if(c&&(R(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&(R(a,!1),0===a.C.F)?1:2}
function Ci(a,b,c,d,e){this.dd=a;this.qd=b;this.td=c;this.pd=d;this.bd=e}
var Di;Di=[new Ci(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){xi(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.l+=a.m;a.m=0;var d=a.Z+c;if(0===a.l||a.l>=d)if(a.m=a.l-d,a.l=d,R(a,!1),0===a.C.F)return 1;if(a.l-a.Z>=a.T-262&&(R(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return R(a,!0),0===a.C.F?3:4;a.l>a.Z&&R(a,!1);return 1}),
new Ci(4,4,8,4,yi),new Ci(4,5,16,8,yi),new Ci(4,6,32,32,yi),new Ci(4,4,16,16,zi),new Ci(8,16,32,32,zi),new Ci(8,16,128,128,zi),new Ci(8,32,128,256,zi),new Ci(32,128,258,1024,zi),new Ci(32,258,258,4096,zi)];
function Ei(){this.C=null;this.status=0;this.K=null;this.wrap=this.pending=this.qb=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Va=-1;this.Ea=this.dc=this.T=0;this.window=null;this.Jc=0;this.head=this.la=null;this.zc=this.pc=this.strategy=this.level=this.Ub=this.yc=this.aa=this.m=this.Xa=this.l=this.Ma=this.Cc=this.G=this.Z=this.va=this.ta=this.Ob=this.Cb=this.D=0;this.X=new N.pa(1146);this.Ia=new N.pa(122);this.R=new N.pa(78);ti(this.X);ti(this.Ia);ti(this.R);this.hc=this.zb=this.Db=null;this.ra=
new N.pa(16);this.L=new N.pa(573);ti(this.L);this.Ua=this.wa=0;this.depth=new N.pa(573);ti(this.depth);this.O=this.V=this.Y=this.matches=this.cb=this.xa=this.lb=this.da=this.ob=this.Sb=0}
function Fi(a,b){if(!a||!a.state||5<b||0>b)return a?si(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return si(a,0===a.F?-5:-2);c.C=a;var d=c.Va;c.Va=b;if(42===c.status)if(2===c.wrap)a.A=0,S(c,31),S(c,139),S(c,8),c.v?(S(c,(c.v.text?1:0)+(c.v.Aa?2:0)+(c.v.extra?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),S(c,c.v.time&255),S(c,c.v.time>>8&255),S(c,c.v.time>>16&255),S(c,c.v.time>>24&255),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,c.v.we&255),c.v.extra&&c.v.extra.length&&
(S(c,c.v.extra.length&255),S(c,c.v.extra.length>>8&255)),c.v.Aa&&(a.A=kh(a.A,c.K,c.pending,0)),c.fa=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,3),c.status=113);else{var e=8+(c.dc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.l&&(e|=32);c.status=113;vi(c,e+(31-e%31));0!==c.l&&(vi(c,a.A>>>16),vi(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.extra){for(e=c.pending;c.fa<(c.v.extra.length&65535)&&(c.pending!==c.ea||
(c.v.Aa&&c.pending>e&&(a.A=kh(a.A,c.K,c.pending-e,e)),ui(a),e=c.pending,c.pending!==c.ea));)S(c,c.v.extra[c.fa]&255),c.fa++;c.v.Aa&&c.pending>e&&(a.A=kh(a.A,c.K,c.pending-e,e));c.fa===c.v.extra.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.Aa&&c.pending>e&&(a.A=kh(a.A,c.K,c.pending-e,e)),ui(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;S(c,f)}while(0!==f);c.v.Aa&&c.pending>
e&&(a.A=kh(a.A,c.K,c.pending-e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.Aa&&c.pending>e&&(a.A=kh(a.A,c.K,c.pending-e,e)),ui(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;S(c,f)}while(0!==f);c.v.Aa&&c.pending>e&&(a.A=kh(a.A,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.Aa?(c.pending+2>c.ea&&ui(a),c.pending+2<=c.ea&&(S(c,a.A&
255),S(c,a.A>>8&255),a.A=0,c.status=113)):c.status=113);if(0!==c.pending){if(ui(a),0===a.F)return c.Va=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return si(a,-5);if(666===c.status&&0!==a.U)return si(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?Bi(c,b):3===c.strategy?Ai(c,b):Di[c.level].bd(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Va=-1),0;if(2===d&&(1===b?(Hh(c,2,3),di(c,256,vh),16===c.O?(Gh(c,c.V),c.V=0,c.O=0):8<=c.O&&(c.K[c.pending++]=
c.V&255,c.V>>=8,c.O-=8)):5!==b&&(Hh(c,0,3),ii(c,0,0),3===b&&(ti(c.head),0===c.m&&(c.l=0,c.Z=0,c.Y=0))),ui(a),0===a.F))return c.Va=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(S(c,a.A&255),S(c,a.A>>8&255),S(c,a.A>>16&255),S(c,a.A>>24&255),S(c,a.Pa&255),S(c,a.Pa>>8&255),S(c,a.Pa>>16&255),S(c,a.Pa>>24&255)):(vi(c,a.A>>>16),vi(c,a.A&65535));ui(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Gi={};Gi=function(){this.input=null;this.Pa=this.U=this.Oa=0;this.output=null;this.cc=this.F=this.Za=0;this.msg="";this.state=null;this.Nb=2;this.A=0};var Hi=Object.prototype.toString;
function Ii(a){if(!(this instanceof Ii))return new Ii(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,Fa:15,sd:8,strategy:0,Da:""},a||{});a.raw&&0<a.Fa?a.Fa=-a.Fa:a.ed&&0<a.Fa&&16>a.Fa&&(a.Fa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new Gi;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Fa,f=a.sd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=si(b,-2);else{8===e&&(e=9);var k=new Ei;
b.state=k;k.C=b;k.wrap=h;k.v=null;k.dc=e;k.T=1<<k.dc;k.Ea=k.T-1;k.Ob=f+7;k.Cb=1<<k.Ob;k.ta=k.Cb-1;k.va=~~((k.Ob+3-1)/3);k.window=new N.Qa(2*k.T);k.head=new N.pa(k.Cb);k.la=new N.pa(k.T);k.ob=1<<f+6;k.ea=4*k.ob;k.K=new N.Qa(k.ea);k.lb=1*k.ob;k.Sb=3*k.ob;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Pa=b.cc=0;b.Nb=2;c=b.state;c.pending=0;c.qb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Va=0;if(!qi){d=Array(16);for(f=g=0;28>f;f++)for(zh[f]=g,e=0;e<1<<rh[f];e++)yh[g++]=
f;yh[g-1]=f;for(f=g=0;16>f;f++)for(Ah[f]=g,e=0;e<1<<sh[f];e++)xh[g++]=f;for(g>>=7;30>f;f++)for(Ah[f]=g<<7,e=0;e<1<<sh[f]-7;e++)xh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)vh[2*e+1]=8,e++,d[8]++;for(;255>=e;)vh[2*e+1]=9,e++,d[9]++;for(;279>=e;)vh[2*e+1]=7,e++,d[7]++;for(;287>=e;)vh[2*e+1]=8,e++,d[8]++;fi(vh,287,d);for(e=0;30>e;e++)wh[2*e+1]=5,wh[2*e]=ei(e,5);Ch=new Bh(vh,rh,257,286,15);Dh=new Bh(wh,sh,0,30,15);Eh=new Bh([],th,0,19,7);qi=!0}c.Db=new Fh(c.X,Ch);c.zb=new Fh(c.Ia,Dh);c.hc=new Fh(c.R,
Eh);c.V=0;c.O=0;gi(c);c=0}else c=si(b,-2);0===c&&(b=b.state,b.Jc=2*b.T,ti(b.head),b.Ub=Di[b.level].qd,b.pc=Di[b.level].dd,b.zc=Di[b.level].td,b.yc=Di[b.level].pd,b.l=0,b.Z=0,b.m=0,b.Y=0,b.G=b.aa=2,b.Ma=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(ph[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.mb){var l;"string"===typeof a.mb?l=ih(a.mb):"[object ArrayBuffer]"===Hi.call(a.mb)?l=new Uint8Array(a.mb):l=a.mb;a=this.C;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.A=jh(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&(ti(l.head),l.l=0,l.Z=0,l.Y=0),c=new N.Qa(l.T),N.Ra(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Oa;e=a.input;a.U=g;a.Oa=0;a.input=f;for(xi(l);3<=l.m;){f=l.l;g=l.m-2;do l.D=(l.D<<l.va^l.window[f+3-1])&l.ta,l.la[f&l.Ea]=l.head[l.D],l.head[l.D]=f,f++;while(--g);l.l=f;l.m=2;xi(l)}l.l+=l.m;l.Z=l.l;l.Y=l.m;l.m=0;l.G=l.aa=2;l.Ma=0;a.Oa=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(ph[b]);this.me=!0}}
Ii.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=ih(a):"[object ArrayBuffer]"===Hi.call(a)?c.input=new Uint8Array(a):c.input=a;c.Oa=0;c.U=c.input.length;do{0===c.F&&(c.output=new N.Qa(d),c.Za=0,c.F=d);a=Fi(c,e);if(1!==a&&0!==a)return Ji(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Da){var f=N.ac(c.output,c.Za);b=f;f=f.length;if(65537>f&&(b.subarray&&hh||!b.subarray))b=
String.fromCharCode.apply(null,N.ac(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.ac(c.output,c.Za),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=si(c,-2):(c.state=null,a=113===d?si(c,-3):0)):a=-2,Ji(this,a),this.ended=!0,0===a;2===e&&(Ji(this,0),c.F=0);return!0};
function Ji(a,b){0===b&&(a.result="string"===a.options.Da?a.chunks.join(""):N.nc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function Ki(a){this.name=a}
;var Li=new Ki("rawColdConfigGroup");var Mi=new Ki("rawHotConfigGroup");function Ni(a){this.s=H(a)}
y(Ni,L);Ni.prototype.g=function(a){K(this,5,a)};function Oi(a){this.s=H(a)}
y(Oi,L);function Pi(a){this.s=H(a)}
y(Pi,L);Pi.ma=[2];function Qi(a){this.s=H(a)}
y(Qi,L);Qi.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=Kd(this,36);return null!=b?b:a};
Qi.prototype.setHomeGroupInfo=function(a){return J(this,Pi,81,a)};
Qi.ma=[9,66,32,86,100,101];function Ri(a){this.s=H(a)}
y(Ri,L);Ri.prototype.getKey=function(){return Vd(this,1)};
Ri.prototype.ja=function(){return Vd(this,Qd(this,Si,2))};
var Si=[2,3,4,5,6];function Ti(a){this.s=H(a)}
y(Ti,L);Ti.ma=[15,26,28];function Ui(a){this.s=H(a)}
y(Ui,L);Ui.ma=[5];function Vi(a){this.s=H(a)}
y(Vi,L);function Wi(a){this.s=H(a)}
y(Wi,L);Wi.prototype.setSafetyMode=function(a){return Zd(this,5,a)};
Wi.ma=[12];function Xi(a){this.s=H(a)}
y(Xi,L);Xi.ma=[12];var Yi={le:"WEB_DISPLAY_MODE_UNKNOWN",he:"WEB_DISPLAY_MODE_BROWSER",je:"WEB_DISPLAY_MODE_MINIMAL_UI",ke:"WEB_DISPLAY_MODE_STANDALONE",ie:"WEB_DISPLAY_MODE_FULLSCREEN"};function Zi(a){this.s=H(a)}
y(Zi,L);Zi.prototype.getKey=function(){return Vd(this,1)};
Zi.prototype.ja=function(){return Vd(this,2)};function $i(a){this.s=H(a)}
y($i,L);$i.ma=[4,5];function aj(a){this.s=H(a)}
y(aj,L);function bj(a){this.s=H(a)}
y(bj,L);var cj=[2,3,4,5];function dj(a){this.s=H(a)}
y(dj,L);function ej(a){this.s=H(a)}
y(ej,L);function fj(a){this.s=H(a)}
y(fj,L);function gj(a){this.s=H(a)}
y(gj,L);gj.ma=[10,17];function hj(a){this.s=H(a)}
y(hj,L);function ij(a){this.s=H(a)}
y(ij,L);function jj(a){this.s=H(a)}
y(jj,L);function kj(a){this.s=H(a,487)}
y(kj,L);
var lj=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486];function mj(a){this.s=H(a)}
y(mj,L);function nj(a){this.s=H(a)}
y(nj,L);nj.prototype.getPlaylistId=function(){return Wd(this,2)};
var Xd=[1,2];function oj(a){this.s=H(a)}
y(oj,L);oj.ma=[3];var pj=C.window,qj,rj,sj=(null==pj?void 0:null==(qj=pj.yt)?void 0:qj.config_)||(null==pj?void 0:null==(rj=pj.ytcfg)?void 0:rj.data_)||{};E("yt.config_",sj);function tj(){var a=arguments;1<a.length?sj[a[0]]=a[1]:1===a.length&&Object.assign(sj,a[0])}
function T(a,b){return a in sj?sj[a]:b}
function uj(){return T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function vj(){var a=sj.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var wj=[];function xj(a){wj.forEach(function(b){return b(a)})}
function yj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zj(b)}}:a}
function zj(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),tj("ERRORS",b));xj(a)}
function Aj(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),tj("ERRORS",f))}
;function U(a){a=Bj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function V(a,b){a=Bj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Bj(a){return T("EXPERIMENT_FLAGS",{})[a]}
function Cj(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});var e=w(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Dj=0;E("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++Dj});var Ej={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Fj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ej||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Fj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Fj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Fj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=C.ytEventsEventsListeners||{};E("ytEventsEventsListeners",lb);var Gj=C.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",Gj);
function Hj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Ij(a){a&&("string"==typeof a&&(a=[a]),bb(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Jj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var Jj=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Kj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Hj(a,b,c,d);if(!e){e=++Gj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Fj(h);if(!ee(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Fj(h);
h.currentTarget=a;return c.call(a,h)};
g=yj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Jj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d]}}}
;function Lj(a,b){"function"===typeof a&&(a=yj(a));return window.setTimeout(a,b)}
function Mj(a){"function"===typeof a&&(a=yj(a));return window.setInterval(a,250)}
;var Nj=/^[\w.]*$/,Oj={q:!0,search_query:!0};function Pj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Qj(f[0]||""),h=Qj(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(Pj);k.args=[{key:l,value:f[1],query:a,method:Rj==m?"unchanged":m}];Oj.hasOwnProperty(l)||Aj(k)}}return c}
var Rj=String(Pj);function Sj(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];bb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Tj(a){"?"==a.charAt(0)&&(a=a.substr(1));return Pj(a,"&")}
function Uj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Tj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=dc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Vj(a){if(!b)var b=window.location.href;var c=a.match(Zb)[1]||null,d=ac(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ac(b)==d&&(Number(b.match(Zb)[4]||null)||null)==(Number(a.match(Zb)[4]||null)||null):!0;return a}
function Qj(a){return a&&a.match(Nj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Wj(a){var b=Xj;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ze;e.flash="0";a:{try{var f=b.g.top.location.href}catch(ea){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?be:g;try{var h=g.history.length}catch(ea){h=0}e.u_his=h;var k;e.u_h=null==(k=be.screen)?void 0:k.height;var l;e.u_w=null==(l=be.screen)?void 0:l.width;var m;e.u_ah=null==(m=be.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=be.screen)?void 0:n.availWidth;var q;e.u_cd=null==(q=be.screen)?void 0:q.colorDepth}catch(ea){}h=b.g;try{var p=h.screenX;var t=h.screenY}catch(ea){}try{var u=h.outerWidth;var z=h.outerHeight}catch(ea){}try{var G=h.innerWidth;var P=h.innerHeight}catch(ea){}try{var Q=h.screenLeft;var fa=h.screenTop}catch(ea){}try{G=h.innerWidth,P=h.innerHeight}catch(ea){}try{var cb=h.screen.availWidth;var Ua=h.screen.availTop}catch(ea){}p=[Q,fa,p,t,cb,Ua,u,z,G,P];t=b.g.top;try{var Ia=(t||window).document,ha=
"CSS1Compat"==Ia.compatMode?Ia.documentElement:Ia.body;var pa=(new ce(ha.clientWidth,ha.clientHeight)).round()}catch(ea){pa=new ce(-12245933,-12245933)}Ia=pa;pa={};var qa=void 0===qa?C:qa;ha=new zf;"SVGElement"in qa&&"createElementNS"in qa.document&&ha.set(0);t=xe();t["allow-top-navigation-by-user-activation"]&&ha.set(1);t["allow-popups-to-escape-sandbox"]&&ha.set(2);qa.crypto&&qa.crypto.subtle&&ha.set(3);"TextDecoder"in qa&&"TextEncoder"in qa&&ha.set(4);qa=Af(ha);pa.bc=qa;pa.bih=Ia.height;pa.biw=
Ia.width;pa.brdim=p.join();b=b.h;b=(pa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,pa.wgl=!!be.WebGLRenderingContext,pa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Xj=new function(){var a=window.document;this.g=window;this.h=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Sj(Wj(a))});Ta();var Yj="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Zj(){if(!Yj)return null;var a=Yj();return"open"in a?a:null}
;var ak="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(ak);var bk={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},ck="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(ak)),dk=!1;
function ek(a,b){b=void 0===b?{}:b;var c=Vj(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in bk){var f=T(bk[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=T("VISITOR_DATA"));!f||!c&&ac(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===T("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&T("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==T("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");c&&T("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in
b&&delete b["X-Goog-Visitor-Id"];if(c||!ac(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ac(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ac(a)||(b["X-YouTube-Ad-Signals"]=Sj(Wj()));return b}
function fk(a){var b=window.location.search,c=ac(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Vj(a)&&(c=document.location.hostname);var d=$b(a.match(Zb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Tj(b),f={};bb(ck,function(g){e[g]&&(f[g]=e[g])});
return Uj(a,f||{},!1)}
function gk(a,b){var c=b.format||"JSON";a=hk(a,b);var d=ik(a,b),e=!1,f=jk(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||n||q)m=kk(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Lj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function hk(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Uj(a,b||{},!0);return a}
function ik(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ac(a)&&!b.withCredentials&&ac(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Tj(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):dc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!dk&&a&&"POST"!=b.method&&(dk=!0,zj(Error("AJAX request with postData should use POST")));return e}
function kk(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Aj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?lk(a):null)e={},bb(a.getElementsByTagName("*"),function(g){e[g.tagName]=mk(g)})}d&&nk(e);
return e}
function nk(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=rb();d=e?e.createHTML(d):d;a[c]=new Xb(d)}else nk(a[b])}}
function lk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function mk(a){var b="";bb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ok(a,b){b.method="POST";b.postParams||(b.postParams={});return gk(a,b)}
function jk(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&yj(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=Zj();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=fk(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ek(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var pk=[{Vb:function(a){return"Cannot read property '"+a.key+"'"},
Hb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Vb:function(a){return"Cannot call '"+a.key+"'"},
Hb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Vb:function(a){return a.key+" is not defined"},
Hb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var rk={Ba:[],za:[{kb:qk,weight:500}]};function qk(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function sk(){this.za=[];this.Ba=[]}
var tk;function uk(){if(!tk){var a=tk=new sk;a.Ba.length=0;a.za.length=0;rk.Ba&&a.Ba.push.apply(a.Ba,rk.Ba);rk.za&&a.za.push.apply(a.za,rk.za)}return tk}
;var vk=new M;function wk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=xk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=xk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=xk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function xk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function yk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=zk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=wk(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?zk(f+".ve",g,h,k):0;d+=f;d+=zk(e,a[e],b,c);if(500<d)break}}else c[b]=Ak(a),d+=c[b].length;else c[b]=Ak(a),d+=c[b].length;return d}
function zk(a,b,c,d){c+="."+a;a=Ak(b);d[c]=a;return c.length+a.length}
function Ak(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Bk(){}
;function Ck(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Dk(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;E("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var Ek={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Fk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Gk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Hk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ik(){var a=C.navigator;return a?a.connection:void 0}
;function Jk(a){var b=Fa.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Jk,Error);function Kk(){try{return Lk(),!0}catch(a){return!1}}
function Lk(){if(void 0!==T("DATASYNC_ID"))return T("DATASYNC_ID");throw new Jk("Datasync ID not set","unknown");}
;function Mk(){}
function Nk(a,b){return yf.Ga(a,0,b)}
Mk.prototype.qa=function(a,b){return this.Ga(a,1,b)};
Mk.prototype.hb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Ok=V("web_emulated_idle_callback_delay",300),Pk=1E3/60-3,Qk=[8,5,4,3,2,1,0];
function Rk(a){a=void 0===a?{}:a;Re.call(this);this.h=[];this.i={};this.fb=this.g=0;this.eb=this.o=!1;this.M=[];this.S=this.gb=!1;for(var b=w(Qk),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.j=0;this.Qc=a.timeout||1;this.H=Pk;this.u=0;this.ub=this.ud.bind(this);this.Pc=this.zd.bind(this);this.Mc=this.Rc.bind(this);this.Nc=this.fd.bind(this);this.Oc=this.vd.bind(this);this.ec=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.ya=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ub)}
y(Rk,Re);r=Rk.prototype;r.hb=function(a){var b=Ta();Sk(a);a=Ta()-b;this.o||(this.H-=a)};
r.Ga=function(a,b,c){++this.fb;if(10===b)return this.hb(a),this.fb;var d=this.fb;this.i[d]=a;this.o&&!c?this.M.push({id:d,priority:b}):(this.h[b].push(d),this.eb||this.o||(0!==this.g&&Tk(this)!==this.u&&Uk(this),this.start()));return d};
r.ba=function(a){delete this.i[a]};
function Vk(a){a.M.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};Uk(a)}
function Tk(a){if(a.h[8].length){if(a.S)return 4;if(!document.hidden&&a.ya)return 3}for(var b=5;b>=a.j;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.ya?3:2:1;return 0}
function Wk(a){var b=D("yt.logging.errors.log");b&&b(a)}
function Sk(a){try{a()}catch(b){Wk(b)}}
function Xk(a){for(var b=w(Qk),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
r.fd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.gb=!0;Yk(this,b);this.gb=!1};
r.zd=function(){Yk(this)};
r.Rc=function(){Zk(this)};
r.vd=function(a){this.S=!0;var b=Tk(this);4===b&&b!==this.u&&(Uk(this),this.start());Yk(this,void 0,a);this.S=!1};
r.ud=function(){document.hidden||Zk(this);this.g&&(Uk(this),this.start())};
function Zk(a){Uk(a);a.o=!0;for(var b=Ta(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Sk(e)}$k(a);a.o=!1;Xk(a)&&a.start();b=Ta()-b;a.H-=b}
function $k(a){for(var b=0,c=a.M.length;b<c;b++){var d=a.M[b];a.h[d.priority].push(d.id)}a.M.length=0}
function Yk(a,b,c){a.S&&4===a.u&&a.g||Uk(a);a.o=!0;b=Ta()+(b||a.H);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){Wk(l)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Sk(e);d=a.gb?0:1;d=a.j>d?a.j:d;if(!(Ta()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&Sk(c)}while(c&&Ta()<b)}a.o=!1;$k(a);a.H=Pk;Xk(a)&&a.start()}
r.start=function(){this.eb=!1;if(0===this.g)switch(this.u=Tk(this),this.u){case 1:var a=this.Nc;this.g=this.ec?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Ok);break;case 2:this.g=window.setTimeout(this.Pc,this.Qc);break;case 3:this.g=window.requestAnimationFrame(this.Oc);break;case 4:this.g=window.setTimeout(this.Mc,0)}};
function Uk(a){if(a.g){switch(a.u){case 1:var b=a.g;a.ec?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
r.sa=function(){Vk(this);Uk(this);this.ya&&document.removeEventListener("visibilitychange",this.ub);Re.prototype.sa.call(this)};var al=D("yt.scheduler.instance.timerIdMap_")||{},bl=V("kevlar_tuner_scheduler_soft_state_timer_ms",800),cl=0,dl=0;function el(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.Ha)a=new Rk(T("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function fl(){gl();var a=D("ytglobal.schedulerInstanceInstance_");a&&(Qe(a),E("ytglobal.schedulerInstanceInstance_",null))}
function gl(){Vk(el());for(var a in al)al.hasOwnProperty(a)&&delete al[Number(a)]}
function hl(a,b,c){if(!c)return c=void 0===c,-el().Ga(a,b,c);var d=window.setTimeout(function(){var e=el().Ga(a,b);al[d]=e},c);
return d}
function il(a){el().hb(a)}
function jl(a){var b=el();if(0>a)b.ba(-a);else{var c=al[a];c?(b.ba(c),delete al[a]):window.clearTimeout(a)}}
function kl(){ll()}
function ll(){window.clearTimeout(cl);el().start()}
function ml(){var a=el();Uk(a);a.eb=!0;window.clearTimeout(cl);cl=window.setTimeout(kl,bl)}
function nl(){window.clearTimeout(dl);dl=window.setTimeout(function(){ol(0)},bl)}
function ol(a){nl();var b=el();b.j=a;b.start()}
function pl(a){nl();var b=el();b.j>a&&(b.j=a,b.start())}
function ql(){window.clearTimeout(dl);var a=el();a.j=0;a.start()}
;function rl(){Mk.apply(this,arguments)}
y(rl,Mk);function sl(){rl.g||(rl.g=new rl);return rl.g}
rl.prototype.Ga=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Lj(a,c||0)};
rl.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
rl.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var yf=sl();
U("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",fl),E("yt.scheduler.instance.addJob",hl),E("yt.scheduler.instance.addImmediateJob",il),E("yt.scheduler.instance.cancelJob",jl),E("yt.scheduler.instance.cancelAllJobs",gl),E("yt.scheduler.instance.start",ll),E("yt.scheduler.instance.pause",ml),E("yt.scheduler.instance.setPriorityThreshold",ol),E("yt.scheduler.instance.enablePriorityThreshold",pl),E("yt.scheduler.instance.clearPriorityThreshold",ql),E("yt.scheduler.initialized",
!0));function tl(a){var b=new Yg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new dh(b,a):b:null)||(a=new Zg(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Ug(a):null;this.h=document.domain||window.location.hostname}
tl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(vg(b))}catch(f){return}else e=escape(b);b=this.h;He.set(""+a,e,{Tb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
tl.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=He.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
tl.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;He.remove(""+a,"/",void 0===b?"youtube.com":b)};var ul=function(){var a;return function(){a||(a=new tl("ytidb"));return a}}();
function vl(){var a;return null==(a=ul())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var wl=[],xl=!1;function yl(a){xl||(wl.push({type:"ERROR",payload:a}),10<wl.length&&wl.shift())}
function zl(a,b){xl||(wl.push({type:"EVENT",eventType:a,payload:b}),10<wl.length&&wl.shift())}
;function Al(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Bl(a){return a.substr(0,a.indexOf(":"))||a}
;var Cl=Bc||Cc;var Dl={},El=(Dl.AUTH_INVALID="No user identifier specified.",Dl.EXPLICIT_ABORT="Transaction was explicitly aborted.",Dl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Dl.MISSING_INDEX="Index not created.",Dl.MISSING_OBJECT_STORES="Object stores not created.",Dl.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Dl.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Dl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Dl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Dl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Dl.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Dl.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Dl),Fl={},Gl=(Fl.AUTH_INVALID="ERROR",Fl.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Fl.EXPLICIT_ABORT="IGNORED",Fl.IDB_NOT_SUPPORTED="ERROR",Fl.MISSING_INDEX=
"WARNING",Fl.MISSING_OBJECT_STORES="ERROR",Fl.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Fl.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Fl.QUOTA_EXCEEDED="WARNING",Fl.QUOTA_MAYBE_EXCEEDED="WARNING",Fl.UNKNOWN_ABORT="WARNING",Fl.INCOMPATIBLE_DB_VERSION="WARNING",Fl),Hl={},Il=(Hl.AUTH_INVALID=!1,Hl.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Hl.EXPLICIT_ABORT=!1,Hl.IDB_NOT_SUPPORTED=!1,Hl.MISSING_INDEX=!1,Hl.MISSING_OBJECT_STORES=!1,Hl.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Hl.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Hl.QUOTA_EXCEEDED=!1,Hl.QUOTA_MAYBE_EXCEEDED=!0,Hl.UNKNOWN_ABORT=!0,Hl.INCOMPATIBLE_DB_VERSION=!1,Hl);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?El[a]:c;d=void 0===d?Gl[a]:d;e=void 0===e?Il[a]:e;Jk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
y(X,Jk);function Jl(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},El.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Jl.prototype)}
y(Jl,X);function Kl(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Kl.prototype)}
y(Kl,Error);var Ll=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ml(a,b,c,d){b=Bl(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(Dc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Kl)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ll.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",ue:e.name})];e.level="WARNING";return e}
function Nl(a,b,c){var d=vl();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Ol(a){if(!a)throw Error();throw a;}
function Pl(a){return a}
function Ql(a){this.g=a}
function Rl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Rl.resolve=function(a){return new Rl(new Ql(function(b,c){a instanceof Rl?a.then(b,c):b(a)}))};
Rl.reject=function(a){return new Rl(new Ql(function(b,c){c(a)}))};
Rl.prototype.then=function(a,b){var c=this,d=null!=a?a:Pl,e=null!=b?b:Ol;return new Rl(new Ql(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Sl(c,c,d,f,g)}),c.h.push(function(){Tl(c,c,e,f,g)})):"FULFILLED"===c.state.status?Sl(c,c,d,f,g):"REJECTED"===c.state.status&&Tl(c,c,e,f,g)}))};
function Ul(a,b){a.then(void 0,b)}
function Sl(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Rl?Vl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Tl(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Rl?Vl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Vl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Rl?Vl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Wl(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Xl(a){return new Promise(function(b,c){Wl(a,b,c)})}
function Yl(a){return new Rl(new Ql(function(b,c){Wl(a,b,c)}))}
;function Zl(a,b){return new Rl(new Ql(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var $l=window,Y=$l.ytcsi&&$l.ytcsi.now?$l.ytcsi.now:$l.performance&&$l.performance.timing&&$l.performance.now&&$l.performance.timing.navigationStart?function(){return $l.performance.timing.navigationStart+$l.performance.now()}:function(){return(new Date).getTime()};function am(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.h=!1}
r=am.prototype;r.add=function(a,b,c){return bm(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return bm(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function cm(a,b,c){a=a.g.createObjectStore(b,c);return new dm(a)}
r.delete=function(a,b){return bm(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return bm(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function em(a,b,c){return bm(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return Yl(d.g.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function bm(a,b,c,d){var e,f,g,h,k,l,m,n,q,p,t,u;return B(function(z){switch(z.g){case 1:var G={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(Y());wa(z,5);l=a.g.transaction(b,e.mode);G=new fm(l);G=gm(G,d);return A(z,G,7);case 7:return m=z.h,n=Math.round(Y()),hm(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:q=xa(z);p=Math.round(Y());t=Ml(q,a.g.name,b.join(),a.g.version);
if((u=t instanceof X&&!t.g)||g>=f)hm(a,k,p,g,t,b.join(),e),h=t;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function hm(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&zl("QUOTA_EXCEEDED",{dbName:Bl(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),zl("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),im(a,!1,d,f,b,g.tag),yl(e)):im(a,!0,d,f,b,g.tag)}
function im(a,b,c,d,e,f){zl("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.g.name};
function dm(a){this.g=a}
r=dm.prototype;r.add=function(a,b){return Yl(this.g.add(a,b))};
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return Yl(this.g.clear()).then(function(){})};
function jm(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function km(a,b){return lm(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?km(this,a):Yl(this.g.delete(a))};
r.get=function(a){return Yl(this.g.get(a))};
r.index=function(a){try{return new mm(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Kl(a,this.g.name);throw b;}};
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
function lm(a,b,c){a=a.g.openCursor(b.query,b.direction);return nm(a).then(function(d){return Zl(d,c)})}
function fm(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function gm(a,b){var c=new Promise(function(d,e){try{Ul(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
fm.prototype.abort=function(){this.g.abort();this.h=!0;throw new X("EXPLICIT_ABORT");};
fm.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new dm(a),this.i.set(a,b));return b};
function mm(a){this.g=a}
r=mm.prototype;r.delete=function(a){return om(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
r.get=function(a){return Yl(this.g.get(a))};
r.getKey=function(a){return Yl(this.g.getKey(a))};
r.keyPath=function(){return this.g.keyPath};
r.unique=function(){return this.g.unique};
function om(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return nm(a).then(function(d){return Zl(d,c)})}
function pm(a,b){this.request=a;this.cursor=b}
function nm(a){return Yl(a).then(function(b){return b?new pm(a,b):null})}
r=pm.prototype;r.advance=function(a){this.cursor.advance(a);return nm(this.request)};
r.continue=function(a){this.cursor.continue(a);return nm(this.request)};
r.delete=function(){return Yl(this.cursor.delete()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.ja=function(){return this.cursor.value};
r.update=function(a){return Yl(this.cursor.update(a))};function qm(a,b,c){return new Promise(function(d,e){function f(){q||(q=new am(g.result,{closed:n}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Tc,k=c.Uc,l=c.yd,m=c.upgrade,n=c.closed,q;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&zl("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Bl(a)});var t=f(),u=new fm(g.transaction);m&&
m(t,function(z){return p.oldVersion<z&&p.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){zl("IDB_UNEXPECTEDLY_CLOSED",{dbName:Bl(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function rm(a,b,c){c=void 0===c?{}:c;return qm(a,b,c)}
function sm(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Tc)&&c.addEventListener("blocked",function(){e()}),A(g,Xl(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=xa(g),Ml(f,a,"",-1);})}
;function tm(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.j=0}
tm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return rm(a,b,c)};
tm.prototype.delete=function(a){a=void 0===a?{}:a;return sm(this.name,a)};
function um(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function vm(a,b){if(!b)throw Nl("openWithToken",Bl(a.name));return wm(a)}
function wm(a){function b(){var f,g,h,k,l,m,n,q,p,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",wa(u,2),A(u,a.h(a.name,a.options.version,d),4);case 4:h=u.h;for(var z=a.options,G=[],P=w(Object.keys(z.ab)),Q=P.next();!Q.done;Q=P.next()){Q=Q.value;var fa=z.ab[Q],cb=void 0===fa.wd?Number.MAX_VALUE:fa.wd;!(h.g.version>=fa.ib)||h.g.version>=cb||h.g.objectStoreNames.contains(Q)||G.push(Q)}k=G;if(0===k.length){u.B(5);break}l=Object.keys(a.options.ab);m=h.objectStoreNames();
if(a.o<V("ytidb_reopen_db_retries",0))return a.o++,h.close(),yl(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());if(!(a.j<V("ytidb_remake_db_retries",1))){u.B(6);break}a.j++;return A(u,a.delete(),7);case 7:return yl(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());case 6:throw new Jl(m,l);case 5:return u.return(h);case 2:n=xa(u);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){u.B(8);break}return A(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:q=u.h;p=q.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw q.close(),a.i=!1,um(a,p);return u.return(q);case 8:throw c(),n instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ml(n,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw um(a);if(a.g)return a.g;var d={Uc:function(f){f.close()},
closed:c,yd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var xm=new tm("YtIdbMeta",{ab:{databases:{ib:1}},upgrade:function(a,b){b(1)&&cm(a,"databases",{keyPath:"actualName"})}});
function ym(a,b){var c;return B(function(d){if(1==d.g)return A(d,vm(xm,b),2);c=d.h;return d.return(bm(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Yl(f.g.put(a,void 0)).then(function(){})})}))})}
function zm(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,vm(xm,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function Am(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,vm(xm,b),2)):3!=e.g?(d=e.h,A(e,bm(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return lm(f.objectStore("databases"),{},function(g){a(g.ja())&&c.push(g.ja());return g.continue()})}),3)):e.return(c)})}
function Bm(a){return Am(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Cm,Dm=new function(){}(new function(){});
function Em(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=vl();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Cl)f=/WebKit\/([0-9]+)/.exec(Lb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Lb()),f=!(f&&602<=parseInt(f[1],10)));if(f||lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,ym(d,Dm),4);case 4:return A(e,zm("yt-idb-test-do-not-use",Dm),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function Fm(){if(void 0!==Cm)return Cm;xl=!0;return Cm=Em().then(function(a){xl=!1;var b;if(null!=(b=ul())&&b.g){var c;b={hasSucceededOnce:(null==(c=vl())?void 0:c.hasSucceededOnce)||a};var d;null==(d=ul())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Gm(){return D("ytglobal.idbToken_")||void 0}
function Hm(){var a=Gm();return a?Promise.resolve(a):Fm().then(function(b){(b=b?Dm:void 0)&&E("ytglobal.idbToken_",b);return b})}
;new wg;function Im(a){if(!Kk())throw a=new X("AUTH_INVALID",{dbName:a}),yl(a),a;var b=Lk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Jm(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",A(m,Hm(),2);case 2:g=m.h;if(!g)throw h=Nl("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),yl(h),h;Al(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Im(a);wa(m,3);return A(m,ym(k,g),5);case 5:return A(m,rm(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=xa(m),wa(m,7),A(m,zm(k.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:xa(m);case 8:throw l;}})}
function Km(a,b,c){c=void 0===c?{}:c;return Jm(a,b,!1,c)}
function xn(a,b,c){c=void 0===c?{}:c;return Jm(a,b,!0,c)}
function yn(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,Hm(),2);if(3!=e.g){c=e.h;if(!c)return e.return();Al(a);d=Im(a);return A(e,sm(d.actualName,b),3)}return A(e,zm(d.actualName,c),0)})}
function zn(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,sm(d.actualName,b),2):A(e,zm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function An(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,Hm(),2);if(3!=d.g){b=d.h;if(!b)return d.return();Al("LogsDatabaseV2");return A(d,Bm(b),3)}c=d.h;return A(d,zn(c,a,b),0)})}
function Bn(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,Hm(),2);if(3!=d.g){c=d.h;if(!c)return d.return();Al(a);return A(d,sm(a,b),3)}return A(d,zm(a,c),0)})}
;function Cn(a,b){tm.call(this,a,b);this.options=b;Al(a)}
y(Cn,tm);function Dn(a,b){var c;return function(){c||(c=new Cn(a,b));return c}}
Cn.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Mb?xn:Km)(a,b,Object.assign({},c))};
Cn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Mb?Bn:yn)(this.name,a)};
function En(a,b){return Dn(a,b)}
;var Fn={},Gn=En("ytGcfConfig",{ab:(Fn.coldConfigStore={ib:1},Fn.hotConfigStore={ib:1},Fn),Mb:!1,upgrade:function(a,b){b(1)&&(jm(cm(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),jm(cm(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Hn(a){return vm(Gn(),a)}
function In(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},A(g,Hn(c),2);case 2:return e=g.h,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,em(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function Jn(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},A(h,Hn(d),2);case 2:return f=h.h,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,em(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function Kn(a){var b,c;return B(function(d){return 1==d.g?A(d,Hn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,bm(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return om(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
function Ln(a){var b,c;return B(function(d){return 1==d.g?A(d,Hn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,bm(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return om(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
;function Mn(){Re.call(this);this.h=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],E("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(Mn,Re);Mn.prototype.sa=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;Re.prototype.sa.call(this)};function Nn(){this.h=0;this.i=new Mn}
function On(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!U("start_client_gcf")){g.B(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.g(b);d=Gm();if(!d){g.B(3);break}if(c){g.B(4);break}return A(g,Ln(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return A(g,In(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function Pn(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!U("start_client_gcf"))return h.B(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Gm())?c?h.B(4):A(h,Kn(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return A(h,Jn(c,b,g,d),0)})}
Nn.prototype.g=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function Qn(){return"INNERTUBE_API_KEY"in sj&&"INNERTUBE_API_VERSION"in sj}
function Rn(){return{gd:T("INNERTUBE_API_KEY"),hd:T("INNERTUBE_API_VERSION"),Pb:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),sc:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),jd:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),uc:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),wc:T("INNERTUBE_CONTEXT_HL"),vc:T("INNERTUBE_CONTEXT_GL"),kd:T("INNERTUBE_HOST_OVERRIDE")||"",md:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ld:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Sn(a){var b={client:{hl:a.wc,gl:a.vc,clientName:a.sc,clientVersion:a.uc,configInfo:a.Pb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Cj();0<c.length&&(b.request={internalExperimentFlags:c});Tn(a,void 0,b);Un(void 0,b);Vn(void 0,b);Wn(a,void 0,b);Xn(void 0,b);U("start_client_gcf")&&Yn(void 0,b);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&
(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(Tj(T("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Tn(a,b,c){a=a.sc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Rd(b,Oi,96)||new Oi;var d=Ck();d=Object.keys(Yi).indexOf(d);d=-1===d?null:d;null!==d&&Zd(c,3,d);J(b,Oi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Ck())}
function Un(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=Rd(a,Ui,7)||new Ui,K(b,4,c),J(a,Ui,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Vn(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=C.navigator)?0:c.deviceMemory)){var d;c=null==(d=C.navigator)?void 0:d.deviceMemory;a?I(a,95,ud(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Wn(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Rd(b,Ni,62))?d:new Ni;K(c,6,a.appInstallData);J(b,Ni,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Xn(a,b){a:{var c=Ik();if(c){var d=Ek[c.type||"unknown"]||"CONN_UNKNOWN";c=Ek[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?Zd(a,61,Fk[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=Ik(),d=null!=d&&d.effectiveType?Hk.hasOwnProperty(d.effectiveType)?Hk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?Zd(a,94,Gk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Zn(a,b,c){c=void 0===c?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.oe||T("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().ne;else{Bk.g||(Bk.g=new Bk);a={};if(c=Ke([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in sj||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in sj&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Yn(a,b){if(!Nn.g){var c=new Nn;Nn.g=c}c=Nn.g;var d=Y()-c.h;if(0!==c.h&&d<V("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Rd(a,Ni,62))?g:new Ni;K(b,1,c);K(b,3,d);b.g(e);J(a,Ni,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var $n=D("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.tb;M.prototype.publish=M.prototype.bb;M.prototype.clear=M.prototype.clear;E("ytPubsub2Pubsub2Instance",$n);E("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function ao(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Be:a,Ae:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var bo=void 0,co=void 0;function eo(){if(!co){var a=T("WORKER_SERIALIZATION_URL");if(a){if(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue){var b=rb();a=b?b.createScriptURL(a):a;a=new vb(a,wb)}else a=null;co=a}else co=null}return co||void 0}
function fo(){var a=eo();if(!bo&&void 0!==a){var b=Worker;a instanceof vb&&a.constructor===vb?a=a.g:(Ja(a),a="type_error:TrustedResourceUrl");bo=new b(a,void 0)}return bo}
;var go=V("max_body_size_to_compress",5E5),ho=V("min_body_size_to_compress",500),io=!0,jo=0,ko=0,lo=V("compression_performance_threshold_lr",250),mo=V("slow_compressions_before_abandon_count",4),no=!1,oo=new Map,po=1,qo=!0;function ro(){if("function"===typeof Worker&&eo()&&!no){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=oo.get(c.key);d&&(so(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),oo.delete(c.key))}},b=fo();
b&&(b.addEventListener("message",a),b.onerror=function(){oo.clear()},no=!0)}}
function to(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(io)try{try{var g=(new Blob(b.split(""))).size}catch(n){Aj(n),g=null}if(null!=g&&(g>go||g<ho))d(a,c);else{if(U("gzip_gel_with_worker")&&(U("initial_gzip_use_main_thread")&&!qo||!U("initial_gzip_use_main_thread"))){no||ro();var h=fo();if(h&&!e){oo.set(po,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:po});po++;return}}var k=Pe(b);var l=l||{};l.ed=!0;var m=new Ii(l);
m.push(k,!0);if(m.err)throw m.msg||ph[m.err];so(m.result,f,a,c,d)}}catch(n){Aj(n),d(a,c)}else d(a,c)}
function so(a,b,c,d,e){qo=!1;var f=Y();b.ticks.gelc=f;ko++;U("disable_compression_due_to_performance_degredation")&&f-b.startTime>=lo&&(jo++,U("abandon_compression_after_N_slow_zips")?ko===V("compression_disable_point")&&jo>mo&&(io=!1):io=!1);U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||ao("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function uo(a){a=Object.assign({},a);delete a.Authorization;var b=Ke();if(b){var c=new hg;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Gc(c.digest(),3)}return a}
;var vo;function wo(){vo||(vo=new tl("yt.innertube"));return vo}
function xo(a,b,c,d){if(d)return null;d=wo().get("nextId",!0)||1;var e=wo().get("requests",!0)||{};e[d]={method:a,request:b,authState:uo(c),requestTime:Math.round(Y())};wo().set("nextId",d+1,86400,!0);wo().set("requests",e,86400,!0);return d}
function yo(a){var b=wo().get("requests",!0)||{};delete b[a];wo().set("requests",b,86400,!0)}
function zo(a){var b=wo().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=uo(Zn(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),Ao(a,d.method,e,{}));delete b[c]}}wo().set("requests",b,86400,!0)}}
;function Bo(a){this.vb=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Ta=function(){};
this.now=Date.now;this.nb=!1;var b;this.Ic=null!=(b=a.Ic)?b:100;var c;this.Gc=null!=(c=a.Gc)?c:1;var d;this.Ec=null!=(d=a.Ec)?d:2592E6;var e;this.Dc=null!=(e=a.Dc)?e:12E4;var f;this.Fc=null!=(f=a.Fc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.Ab=!!a.Ab;var h;this.yb=null!=(h=a.yb)?h:.1;var k;this.Ib=null!=(k=a.Ib)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ta&&(this.Ta=a.Ta);a.nb&&(this.nb=a.nb);a.vb&&(this.vb=a.vb);this.J=a.J;this.ha=a.ha;this.N=a.N;this.P=a.P;this.sendFn=a.sendFn;
this.Yb=a.Yb;this.Xb=a.Xb;Co(this)&&(!this.J||this.J("networkless_logging"))&&Do(this)}
function Do(a){Co(a)&&!a.nb&&(a.g=!0,a.Ab&&Math.random()<=a.yb&&a.N.Vc(a.I),Eo(a),a.P.ca()&&a.sb(),a.P.La(a.Yb,a.sb.bind(a)),a.P.La(a.Xb,a.ic.bind(a)))}
r=Bo.prototype;r.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Co(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.P.ca()&&Fo(c,d)}).catch(function(e){Fo(c,d);
Go(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Co(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.P.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(1==k.g)return A(k,d.N.set(e,d.I).catch(function(l){Go(d,l)}),2);
f(g,h);k.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.sendFn(a,b,e.skipRetry);
Go(d,g)})}else this.sendFn(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Co(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Sa(d.id,c.I):e=!0;c.P.Na&&c.J&&c.J("vss_network_hint")&&c.P.Na(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Sa(d.id,c.I)}).catch(function(g){Go(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.sb=function(){var a=this;if(!Co(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.qa(function(){var b;return B(function(c){if(1==c.g)return A(c,a.N.oc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?A(c,Fo(a,b),3):(a.ic(),c.return());a.h&&(a.h=0,a.sb());c.g=0})},this.Ic))};
r.ic=function(){this.ha.ba(this.h);this.h=0};
function Fo(a,b){var c;return B(function(d){switch(d.g){case 1:if(!Co(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return A(d,a.N.od(b.id,a.I),3);case 3:(c=d.h)||a.Ta(Error("The request cannot be found in the database."));case 2:if(Ho(a,b,a.Ec)){d.B(4);break}a.Ta(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return A(d,a.N.Sa(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=Io(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return A(d,a.N.Sa(b.id,a.I),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function Io(a,b){if(!Co(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.g){case 1:g=Jo(f);(h=Ko(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ib)){m.B(2);break}if(!a.P.Lb){m.B(3);break}return A(m,a.P.Lb(),3);case 3:if(a.P.ca()){m.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.B(6);
break}return A(m,a.N.Zb(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Ib)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.B(8);break}return b.sendCount<a.Gc?A(m,a.N.Zb(b.id,a.I,!0,h?!1:void 0),12):A(m,a.N.Sa(b.id,a.I),8);case 12:a.ha.qa(function(){a.P.ca()&&a.sb()},a.Fc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):A(h,a.N.Sa(b.id,a.I),2);a.P.Na&&a.J&&a.J("vss_network_hint")&&a.P.Na(!0);d(e,f);h.g=0})};
return b}
function Ho(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Eo(a){if(!Co(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.oc("QUEUED",a.I).then(function(b){b&&!Ho(a,b,a.Dc)?a.ha.qa(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.B(2):A(c,a.N.Zb(b.id,a.I),2);Eo(a);c.g=0})}):a.P.ca()&&a.sb()})}
function Go(a,b){a.Kc&&!a.P.ca()?a.Kc(b):a.handleError(b)}
function Co(a){return!!a.I||a.vb}
function Jo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Ko(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Lo;
function Mo(){if(Lo)return Lo();var a={};Lo=En("LogsDatabaseV2",{ab:(a.LogsRequestsStore={ib:2},a),Mb:!1,upgrade:function(b,c,d){c(2)&&cm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),jm(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return Lo()}
;function No(a){return vm(Mo(),a)}
function Oo(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,No(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,em(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=Y();Po(c);return g.return(f)})}
function Qo(a,b){var c,d,e,f,g,h,k;return B(function(l){if(1==l.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(l,No(b),2);if(3!=l.g)return d=l.h,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,A(l,bm(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return om(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ja()&&(k=n.ja(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=Y();Po(c);return l.return(k)})}
function Ro(a,b){var c;return B(function(d){if(1==d.g)return A(d,No(b),2);c=d.h;return d.return(bm(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Yl(f.g.put(g,void 0)).then(function(){return g})})}))})}
function So(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,No(b),2);e=f.h;return f.return(bm(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Yl(h.g.put(k,void 0)).then(function(){return k})):Rl.resolve(void 0)})}))})}
function To(a,b){var c;return B(function(d){if(1==d.g)return A(d,No(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function Uo(a){var b,c;return B(function(d){if(1==d.g)return A(d,No(a),2);b=d.h;c=Y()-2592E6;return A(d,bm(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return lm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Vo(){B(function(a){return A(a,An(),0)})}
function Po(a){U("nwl_csi_killswitch")||ao("networkless_performance",a,{sampleRate:1})}
;var Wo={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490};var Xo={},Yo=En("ServiceWorkerLogsDatabase",{ab:(Xo.SWHealthLog={ib:1},Xo),Mb:!0,upgrade:function(a,b){b(1)&&jm(cm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Zo(a){return vm(Yo(),a)}
function $o(a){var b,c;B(function(d){if(1==d.g)return A(d,Zo(a),2);b=d.h;c=Y()-2592E6;return A(d,bm(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return lm(e.objectStore("SWHealthLog"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function ap(a){var b;return B(function(c){if(1==c.g)return A(c,Zo(a),2);b=c.h;return A(c,b.clear("SWHealthLog"),0)})}
;var bp={},cp=0;function dp(a){var b=new Image,c=""+cp++;bp[c]=b;b.onload=b.onerror=function(){delete bp[c]};
b.src=a}
;function ep(){this.g=new Map;this.h=!1}
function fp(){if(!ep.g){var a=D("yt.networkRequestMonitor.instance")||new ep;E("yt.networkRequestMonitor.instance",a);ep.g=a}return ep.g}
ep.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
ep.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
ep.prototype.removeParams=function(a){return a.split("?")[0]};
ep.prototype.removeParams=ep.prototype.removeParams;ep.prototype.isEndpointCFR=ep.prototype.isEndpointCFR;ep.prototype.requestComplete=ep.prototype.requestComplete;ep.getInstance=fp;var gp;function hp(){gp||(gp=new tl("yt.offline"));return gp}
function ip(a){if(U("offline_error_handling")){var b=hp().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);hp().set("errors",b,2592E3,!0)}}
;function Z(){rf.call(this);var a=this;this.i=!1;this.h=xf();this.h.La("networkstatus-online",function(){if(a.i&&U("offline_error_handling")){var b=hp().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Jk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;zj(d)}hp().set("errors",{},2592E3,!0)}}})}
y(Z,rf);function jp(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;E("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
r=Z.prototype;r.ca=function(){return this.h.ca()};
r.Na=function(a){this.h.h=a};
r.cd=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
r.Yc=function(){this.i=!0};
r.La=function(a,b){return this.h.La(a,b)};
r.Lb=function(a){a=vf(this.h,a);a.then(function(b){U("use_cfr_monitor")&&fp().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Lb;Z.prototype.listen=Z.prototype.La;Z.prototype.enableErrorFlushing=Z.prototype.Yc;Z.prototype.getWindowStatus=Z.prototype.cd;Z.prototype.networkStatusHint=Z.prototype.Na;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=jp;function kp(a){a=void 0===a?{}:a;rf.call(this);var b=this;this.h=this.o=0;this.i=jp();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Kb?(this.Kb=a.Kb,c("networkstatus-online",function(){lp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){lp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){sf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){sf(b,"publicytnetworkstatus-offline")})))}
y(kp,rf);kp.prototype.ca=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
kp.prototype.Na=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
kp.prototype.Lb=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return U("skip_network_check_if_cfr")&&fp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Na((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function lp(a,b){a.Kb?a.h?(yf.ba(a.o),a.o=yf.qa(function(){a.j!==b&&(sf(a,b),a.j=b,a.h=Y())},a.Kb-(Y()-a.h))):(sf(a,b),a.j=b,a.h=Y()):sf(a,b)}
;var mp;function np(){var a=Bo.call;mp||(mp=new kp({se:!0,re:!0}));a.call(Bo,this,{N:{Vc:Uo,Sa:To,oc:Qo,od:Ro,Zb:So,set:Oo},P:mp,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Aj(new Jk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else zj(b)},
Ta:Aj,sendFn:op,now:Y,Kc:ip,ha:sl(),Yb:"publicytnetworkstatus-online",Xb:"publicytnetworkstatus-offline",Ab:!0,yb:.1,Ib:V("potential_esf_error_limit",10),J:U,nb:!(Kk()&&"www.youtube-nocookie.com"!==ac(document.location.toString()))});this.i=new wg;U("networkless_immediately_drop_all_requests")&&Vo();Bn("LogsDatabaseV2")}
y(np,Bo);function pp(){var a=D("yt.networklessRequestController.instance");a||(a=new np,E("yt.networklessRequestController.instance",a),U("networkless_logging")&&Hm().then(function(b){a.I=b;Do(a);a.i.resolve();a.Ab&&Math.random()<=a.yb&&a.I&&$o(a.I);U("networkless_immediately_drop_sw_health_store")&&qp(a)}));
return a}
np.prototype.writeThenSend=function(a,b){b||(b={});Kk()||(this.g=!1);Bo.prototype.writeThenSend.call(this,a,b)};
np.prototype.sendThenWrite=function(a,b,c){b||(b={});Kk()||(this.g=!1);Bo.prototype.sendThenWrite.call(this,a,b,c)};
np.prototype.sendAndWrite=function(a,b){b||(b={});Kk()||(this.g=!1);Bo.prototype.sendAndWrite.call(this,a,b)};
np.prototype.awaitInitialization=function(){return this.i.promise};
function qp(a){var b;B(function(c){if(!a.I)throw b=Nl("clearSWHealthLogsDb"),b;return c.return(ap(a.I).catch(function(d){a.handleError(d)}))})}
function op(a,b,c,d){d=void 0===d?!1:d;b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&rp(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)jk(a,void 0,"POST",f);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))jk(a,
void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new Ya({url:a});if(k.i&&k.h||k.j){var l=$b(a.match(Zb)[5]||null);var m=!(!l||!l.endsWith("/aclk")||"1"!==fc(a,"ri"));break b}}catch(q){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var n=!0;break b}}catch(q){}n=!1}c=n?!0:!1}else c=!1;c||dp(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),to(a,b.postBody,b,gk,d)):to(a,JSON.stringify(b.postParams),
b,ok,d):gk(a,b)}
function rp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){fp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){fp().requestComplete(a,!0);d(e,f)}}
;var sp=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};E("ytNetworklessLoggingInitializationOptions",sp);function tp(a){var b=this;this.config_=null;a?this.config_=a:Qn()&&(this.config_=Rn());Nk(function(){zo(b)},5E3)}
tp.prototype.isReady=function(){!this.config_&&Qn()&&(this.config_=Rn());return!!this.config_};
function Ao(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=xo(b,c,l,k)),u)){var z=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(fa,cb){yo(u);z(fa,cb)};
c.onFetchSuccess=function(fa,cb){yo(u);G(fa,cb)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?pp().writeThenSend(p,g):pp().sendAndWrite(p,g);
else if(d.compress){var P=!d.networklessOptions.writeThenSend;if(g.postBody){var Q=g.postBody;"string"!==typeof Q&&(Q=JSON.stringify(g.postBody));to(p,Q,g,gk,P)}else to(p,JSON.stringify(g.postParams),g,ok,P)}else U("web_all_payloads_via_jspb")?gk(p,g):ok(p,g)}catch(fa){if("InvalidAccessError"==fa.name)u&&(yo(u),u=0),Aj(Error("An extension is blocking network request."));else throw fa;}u&&Nk(function(){zo(a)},5E3)}
!T("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Aj(new Jk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Jk("innertube xhrclient not ready",b,c,d);zj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.kd)&&(h=f);var k=a.config_.md||!1,l=Zn(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.hd+"/"+b,n={alt:"json"},q=a.config_.ld&&f;q=q&&f.startsWith("Bearer");q||(n.key=a.config_.gd);var p=Uj(""+h+m,n||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
sp.isNwlInitialized?Fm().then(function(t){e(t)}):e(!1)}
;function up(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var vp=C.ytPubsubPubsubInstance||new M,wp=C.ytPubsubPubsubSubscribedKeys||{},xp=C.ytPubsubPubsubTopicToKeys||{},yp=C.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.tb;M.prototype.publish=M.prototype.bb;M.prototype.clear=M.prototype.clear;E("ytPubsubPubsubInstance",vp);E("ytPubsubPubsubTopicToKeys",xp);E("ytPubsubPubsubIsSynchronous",yp);E("ytPubsubPubsubSubscribedKeys",wp);var zp=Symbol("injectionDeps");function Ap(){this.key=Nn}
function Bp(){this.h=new Map;this.g=new Map}
Bp.prototype.resolve=function(a){return a instanceof Ap?Cp(this,a.key,[],!0):Cp(this,a,[])};
function Cp(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Cd)var e=d.Cd;else if(d.Bd)e=d[zp]?Dp(a,d[zp],c):[],e=d.Bd.apply(d,x(e));else if(d.Ad){e=d.Ad;var f=e[zp]?Dp(a,e[zp],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ze||a.g.set(b,e);return e}
function Dp(a,b,c){return b?b.map(function(d){return d instanceof Ap?Cp(a,d.key,c,!0):Cp(a,d,c)}):[]}
;var Ep;function Fp(){Ep||(Ep=new Bp);return Ep}
;var Gp=window;function Hp(){var a,b;return"h5vcc"in Gp&&(null==(a=Gp.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Gp.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Gp&&Gp.performance.mark&&Gp.performance.measure?2:0}
function Ip(a){switch(Hp()){case 1:Gp.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Gp.performance.mark(a+"-start");break;case 0:break;default:ke()}}
function Jp(a){switch(Hp()){case 1:Gp.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Gp.performance.mark(c);Gp.performance.measure(a,b,c);break;case 0:break;default:ke()}}
;var Kp=U("web_enable_lifecycle_monitoring")&&0!==Hp(),Lp=U("web_enable_lifecycle_monitoring");function Mp(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?sl():d;this.j=c;this.h=d;this.i=new wg;this.g=a;for(a={Ja:0};a.Ja<this.g.length;a={pb:a.pb,Ja:a.Ja},a.Ja++)a.pb=this.g[a.Ja],c=function(e){return function(){e.pb.Rb();b.g[e.Ja].Jb=!0;b.g.every(function(f){return!0===f.Jb})&&b.i.resolve()}}(a),d=this.h.Ga(c,Np(this,a.pb)),this.g[a.Ja]=Object.assign({},a.pb,{Rb:c,
jobId:d})}
function Op(a){var b=Array.from(a.g.keys()).sort(function(d,e){return Np(a,a.g[e])-Np(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Jb||(a.h.ba(c.jobId),a.h.Ga(c.Rb,10))}
Mp.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Jb||this.h.ba(b.jobId),b.Jb=!0;this.i.resolve()};
function Np(a,b){var c;return null!=(c=b.priority)?c:a.j}
;function Pp(a){this.state=a;this.i=[];this.o=void 0;this.H={};Kp&&Ip(this.state)}
Pp.prototype.install=function(a){this.i.push(a);return this};
function Qp(a){Kp&&Jp(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Da}):d.from===a.state&&"none"===d.Da});
if(b){a.h&&(Op(a.h),a.h=void 0);Lp&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";Kp&&Ip(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(Rp(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function Rp(a,b){var c=b.filter(function(e){return 10===Sp(a,e)}),d=b.filter(function(e){return 10!==Sp(a,e)});
return a.H.ye?function(){var e=Fa.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.oa.apply(a,[c].concat(x(e))),2);a.u.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Fa.apply(0,arguments);
a.ya.apply(a,[c].concat(x(e)));a.u.apply(a,[d].concat(x(e)))}}
Pp.prototype.ya=function(a){for(var b=Fa.apply(1,arguments),c=sl(),d=w(a),e=d.next(),f={};!e.done;f={Wa:f.Wa},e=d.next())f.Wa=e.value,c.hb(function(g){return function(){Tp(g.Wa.name);g.Wa.kb.apply(g.Wa,x(b));Up(g.Wa.name)}}(f))};
Pp.prototype.oa=function(a){var b=Fa.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=sl(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.Ka=e.value;f.jb=void 0;g=function(k){return function(){Tp(k.Ka.name);var l=k.Ka.kb.apply(k.Ka,x(b));"function"===typeof(null==l?void 0:l.then)?k.jb=l.then(function(){Up(k.Ka.name)}):Up(k.Ka.name)}}(f);
c.hb(g);return f.jb?A(h,f.jb,3):h.B(3)}f={Ka:f.Ka,jb:f.jb};e=d.next();return h.B(2)})};
Pp.prototype.u=function(a){var b=Fa.apply(1,arguments),c=this,d=a.map(function(e){return{Rb:function(){Tp(e.name);e.kb.apply(e,x(b));Up(e.name)},
priority:Sp(c,e)}});
d.length&&(this.h=new Mp(d))};
function Sp(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function Tp(a){Kp&&a&&Ip(a)}
function Up(a){Kp&&a&&Jp(a)}
da.Object.defineProperties(Pp.prototype,{j:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Vp(a){Pp.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Da:"application_navigating",action:this.M},{from:"application_navigating",Da:"none",action:this.S},{from:"application_navigating",Da:"application_navigating",action:function(){}},
{from:"none",Da:"none",action:function(){}}]}
var Wp;y(Vp,Pp);Vp.prototype.M=function(a,b){var c=this;this.g=Nk(function(){"application_navigating"===c.j&&Qp(c)},5E3);
a(null==b?void 0:b.event)};
Vp.prototype.S=function(a,b){this.g&&(yf.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function Xp(){Wp||(Wp=new Vp);return Wp}
;var Yp=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return Yp});function Zp(){this.store={};this.g={}}
Zp.prototype.storePayload=function(a,b){a=$p(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
Zp.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=aq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
Zp.prototype.extractMatchingEntries=function(a){a=aq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
Zp.prototype.getSequenceCount=function(a){a=aq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function aq(a,b){var c=$p(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&$p(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(bq(b.auth,g[0])){var h=b.isJspb;bq(void 0===h?"undefined":h?"true":"false",g[1])&&bq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),bq(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function bq(a,b){return void 0===a||"undefined"===a?!0:a===b}
Zp.prototype.getSequenceCount=Zp.prototype.getSequenceCount;Zp.prototype.extractMatchingEntries=Zp.prototype.extractMatchingEntries;Zp.prototype.smartExtractMatchingEntries=Zp.prototype.smartExtractMatchingEntries;Zp.prototype.storePayload=Zp.prototype.storePayload;function $p(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var cq=V("initial_gel_batch_timeout",2E3),dq=V("gel_queue_timeout_max_ms",6E4),eq=Math.pow(2,16)-1,fq=V("gel_min_batch_size",5),gq=void 0;function hq(){this.j=this.g=this.h=0;this.i=!1}
var iq=new hq,jq=new hq,kq=new hq,lq=new hq,mq,nq=!0,oq=1,pq=new Map,qq=C.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",qq);var rq=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};E("ytLoggingTransportTokensToJspbCttTargetIds_",rq);var sq={};function tq(){var a=D("yt.logging.ims");a||(a=new Zp,E("yt.logging.ims",a));return a}
function uq(a,b){if("log_event"===a.endpoint){vq(a);var c=wq(a),d=xq(a.payload)||"",e=yq(d),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=zq(e.tier);if(400===f){Aq(a,b);return}}sq[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};tq().storePayload(e,a.payload);Bq(b,c,!1,e,Cq(d))}}
function Dq(a,b,c){if("log_event"===b.endpoint){vq(void 0,b);var d=wq(b,!0),e=yq(a),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=zq(e.tier);if(400===f){Eq(a,b,c);return}}sq[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};tq().storePayload(e,b.payload.toJSON());Bq(c,d,!0,e,Cq(a))}}
function Bq(a,b,c,d,e){function f(){Fq({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(gq=new a);a=V("tvhtml5_logging_max_batch_ads_fork")||V("web_logging_max_batch")||100;var g=Y(),h=Gq(c,d.tier),k=h.j;e&&(h.i=!0);e=0;d&&(e=tq().getSequenceCount(d));1E3<=e?f():e>=a?mq||(mq=Hq(function(){f();mq=void 0},0)):10<=g-k&&(Iq(c,d.tier),h.j=g)}
function Aq(a,b){if("log_event"===a.endpoint){vq(a);var c=wq(a),d=new Map;d.set(c,[a.payload]);var e=xq(a.payload)||"";b&&(gq=new b);return new xg(function(f,g){gq&&gq.isReady()?Jq(d,gq,f,g,{bypassNetworkless:!0},!0,Cq(e)):f()})}}
function Eq(a,b,c){if("log_event"===b.endpoint){vq(void 0,b);var d=wq(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(gq=new c);return new xg(function(f){gq&&gq.isReady()?Kq(e,gq,f,{bypassNetworkless:!0},!0,Cq(a)):f()})}}
function wq(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new nj;c.videoId?Od(d,1,Xd,vd(c.videoId)):c.playlistId&&Od(d,2,Xd,vd(c.playlistId));rq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),qq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Fq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new xg(function(e,f){var g=Gq(c,d),h=g.i;g.i=!1;Lq(g.h);Lq(g.g);g.g=0;gq&&gq.isReady()?void 0===d&&U("enable_web_tiered_gel")?Mq(e,f,a,b,c,300,h):Mq(e,f,a,b,c,d,h):(Iq(c,d),e())})}
function Mq(a,b,c,d,e,f,g){var h=gq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},n={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=U("enable_web_tiered_gel")?tq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):tq().extractMatchingEntries(n),k.set(d,b),Kq(k,h,a,c,!1,g)):(k=U("enable_web_tiered_gel")?tq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):tq().extractMatchingEntries(n),l.set(d,k),Jq(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(sq));for(d=b.next();!d.done;d=b.next())l=d.value,f=U("enable_web_tiered_gel")?tq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):tq().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<f.length&&k.set(l,f),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete sq[l];Kq(k,h,a,c,!1,g)}else{k=w(Object.keys(sq));for(d=k.next();!d.done;d=k.next())m=d.value,n=U("enable_web_tiered_gel")?tq().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):tq().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<n.length&&l.set(m,n),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete sq[m];Jq(l,h,a,b,c,!1,g)}}
function Iq(a,b){function c(){Fq({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Gq(a,b),e=d===lq||d===kq?5E3:dq;U("web_gel_timeout_cap")&&!d.g&&(e=Hq(function(){c()},e),d.g=e);
Lq(d.h);e=T("LOGGING_BATCH_TIMEOUT",V("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&nq&&(e=cq);e=Hq(function(){0<V("gel_min_batch_size")?tq().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=fq&&c():c()},e);
d.h=e}
function Jq(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(Y()),k=a.size,l=Nq(g);a=w(a);var m=a.next();for(g={};!m.done;g={Eb:g.Eb,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,Gb:g.Gb,Fb:g.Fb},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=nb({context:Sn(b.config_||Rn())});if(!Ka(n)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=qq[m])&&Oq(g.batchRequest,m,n);delete qq[m];g.dangerousLogToVisitorSession=
"visitorOnlyApprovedKey"===m;Pq(g.batchRequest,h,g.dangerousLogToVisitorSession);Qq(e);g.Gb=function(q){U("start_client_gcf")&&yf.qa(function(){return B(function(p){return A(p,Rq(q),0)})});
k--;k||c()};
g.Eb=0;g.Fb=function(q){return function(){q.Eb++;if(e.bypassNetworkless&&1===q.Eb)try{Ao(b,l,q.batchRequest,Sq({writeThenSend:!0},q.dangerousLogToVisitorSession,q.Gb,q.Fb,f)),nq=!1}catch(p){zj(p),d()}k--;k||c()}}(g);
try{Ao(b,l,g.batchRequest,Sq(e,g.dangerousLogToVisitorSession,g.Gb,g.Fb,f)),nq=!1}catch(q){zj(q),d()}}}
function Kq(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(Y()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value).next().value,n=a.get(m);l=new oj;var q=b.config_||Rn(),p=new Xi,t=new Qi;K(t,1,q.wc);K(t,2,q.vc);Zd(t,16,q.jd);K(t,17,q.uc);if(q.Pb){var u=q.Pb,z=new Ni;u.coldConfigData&&K(z,1,u.coldConfigData);u.appInstallData&&K(z,6,u.appInstallData);u.coldHashData&&K(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);J(t,Ni,62,z)}if((u=C.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);I(t,65,u)}u=T("EXPERIMENTS_TOKEN","");""!==u&&K(t,54,u);u=Cj();if(0<u.length){z=new Ti;for(var G=0;G<u.length;G++){var P=new Ri;K(P,1,u[G].key);Od(P,2,Si,vd(u[G].value));Ud(z,15,Ri,P)}J(p,Ti,5,z)}Tn(q,t);Un(p);Vn(t);Wn(q,t);Xn(t);U("start_client_gcf")&&Yn(t);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(q=new Wi,K(q,3,T("DELEGATED_SESSION_ID")));!U("fill_delegate_context_in_gel_killswitch")&&
(q=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(u=Rd(p,Wi,3)||new Wi,q=K(u,18,q),J(p,Wi,3,q));q=t;u=w(Object.entries(Tj(T("DEVICE",""))));for(z=u.next();!z.done;z=u.next())G=w(z.value),z=G.next().value,G=G.next().value,"cbrand"===z?K(q,12,G):"cmodel"===z?K(q,13,G):"cbr"===z?K(q,87,G):"cbrver"===z?K(q,88,G):"cos"===z?K(q,18,G):"cosver"===z?K(q,19,G):"cplatform"===z&&Zd(q,42,Dk(G));J(p,Qi,1,t);J(l,Xi,1,p);if(t=rq[m])a:{if(Wd(t,1))p=1;else if(t.getPlaylistId())p=2;else break a;J(l,nj,4,t);
t=Rd(l,Xi,1)||new Xi;q=Rd(t,Wi,3)||new Wi;u=new Vi;K(u,2,m);Zd(u,1,p);Ud(q,12,Vi,u);J(t,Wi,3,q)}delete rq[m];m="visitorOnlyApprovedKey"===m;Tq()||I(l,2,ud(g));!m&&(p=T("EVENT_ID"))&&(t=Uq(),q=new mj,K(q,1,p),I(q,2,ud(t)),J(l,mj,5,q));Qq(d);if(U("jspb_serialize_with_worker")&&(p=fo())&&d.writeThenSend){pq.set(oq,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});p.postMessage({op:"gelBatchToSerialize",batchRequest:l.toJSON(),
clientEvents:n,key:oq});oq++;break}if(n){p=[];for(t=0;t<n.length;t++)try{p.push(new kj(n[t]))}catch(Q){zj(new Jk("Transport failed to deserialize "+String(n[t])))}n=p}else n=[];n=w(n);for(p=n.next();!p.done;p=n.next())Ud(l,3,kj,p.value);n={startTime:Y(),ticks:{},infos:{}};l=ae(l);n.ticks.geljspc=Y();U("log_jspb_serialize_latency")&&ao("gel_jspb_serialize",n,{sampleRate:.1});Vq(l,b,c,d,e,f,m,h)}}
function Vq(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=Nq(f);d=Sq(d,g,function(k){U("start_client_gcf")&&yf.qa(function(){return B(function(l){return A(l,Rq(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Ao(b,f,"",d);nq=!1}
function Qq(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function Sq(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,qe:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};Tq()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function Pq(a,b,c){Tq()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&(c=Uq(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Uq(){var a=T("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*eq/2));a++;a>eq&&(a=1);tj("BATCH_CLIENT_COUNTER",a);return a}
function Oq(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function vq(a,b){if(!D("yt.logging.transport.enableScrapingForTest")){var c=Bj("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))Yp=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",Yp),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0);else return}c=D("yt.logging.transport.scrapedPayloadsForTesting");var d=D("yt.logging.transport.payloadToScrape");b&&(b=D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=D("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function Tq(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function Hq(a,b){return U("transport_use_scheduler")?U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?Nk(function(){if("none"===Xp().j)a();else{var c={};Xp().install((c.none={kb:a},c))}},b):Nk(a,b):Lj(a,b)}
function Lq(a){U("transport_use_scheduler")?yf.ba(a):window.clearTimeout(a)}
function Rq(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var q=d?d[Mi.name]:void 0;e=q;g=null==(f=d)?void 0:f.hotHashData;q=d?d[Li.name]:void 0;h=q;l=null==(k=d)?void 0:k.coldHashData;return(m=Fp().resolve(new Ap))?g?e?A(n,On(m,g,e),2):A(n,On(m,g),2):n.B(2):n.return()}return l?h?A(n,Pn(m,l,h),0):A(n,Pn(m,l),0):n.B(0)})}
function Gq(a,b){b=void 0===b?200:b;return a?300===b?lq:jq:300===b?kq:iq}
function yq(a){if(U("enable_web_tiered_gel")){a=Wo[a||""];var b,c;if(null==Fp().resolve(new Ap))var d=void 0;else{var e=null!=(d=D("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function xq(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Wo[b])return b}
function zq(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Cq(a){return"gelDebuggingEvent"===a}
function Nq(a){return(void 0===a?0:a)&&U("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var Wq=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Wq);
function Xq(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=up();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:Yq(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete Wq[d.sequenceGroup]);(d.sendIsolatedPayload?Aq:uq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function Zq(a){Fq(void 0,void 0,void 0===a?!1:a)}
function Yq(a){Wq[a]=a in Wq?Wq[a]+1:0;return Wq[a]}
;var $q=[];function ar(a,b,c){c=void 0===c?{}:c;var d=tp;T("ytLoggingEventsDefaultDisabled",!1)&&tp===tp&&(d=null);U("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=up(),c.timestamp=Y()),$q.push({Ac:a,payload:b,options:c})):Xq(a,b,d,c)}
;var br=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",br);function cr(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;T("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:tp;c=void 0===c?{}:c;var e=Math.round(c.timestamp||Y());I(b,1,ud(e<Number.MAX_SAFE_INTEGER?e:0));e=new jj;if(c.lact)I(e,1,ud(isFinite(c.lact)?c.lact:-1));else if(c.timestamp)I(e,1,ud(-1));else{var f=up();I(e,1,ud(isFinite(f)?f:-1))}if(c.sequenceGroup&&!U("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=Yq(f),h=new ij;I(h,2,ud(g));K(h,1,f);J(e,ij,3,h);c.endOfSequence&&delete br[c.sequenceGroup]}J(b,
jj,33,e);(c.sendIsolatedPayload?Eq:Dq)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var dr=new Set,er=0,fr=0,gr=0,hr=[],ir=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function jr(a){try{dr.add(a.message)}catch(b){}er++}
function kr(){for(var a=w(ir),b=a.next();!b.done;b=a.next()){var c=Lb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function lr(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}gk(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function mr(){var a;return B(function(b){return(a=Rf())?b.return(a.then(function(c){c=ae(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Gc(d,3)})):b.return(Promise.resolve(null))})}
;var nr={};function or(a){return nr[a]||(nr[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var pr={},qr=[],Og=new M,rr={};function sr(){for(var a=w(qr),b=a.next();!b.done;b=a.next())b=b.value,b()}
function tr(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[or(b)]:a.getAttribute("data-"+b):null;return c}
function ur(a){Og.bb.apply(Og,arguments)}
;function vr(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function wr(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function xr(a,b,c){yr||(yr={},zr=new Set,Kj(window,"message",function(d){a:if(zr.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=yr[e.id];f&&d.origin===f.Sc&&(d=f.Dd,d.H=!0,d.H&&(bb(d.u,d.sendMessage,d),d.u.length=0),d.fc(e))}}));
a=String(wr(a,"host"));yr[c]={Dd:b,Sc:a};zr.add(a)}
var yr=null,zr=null;var Ar=window;
function Br(a,b,c){this.o=this.g=this.h=null;this.i=0;this.H=!1;this.u=[];this.j=null;this.S={};if(!a)throw Error("YouTube player element ID required.");this.id=Na(this);this.M=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?bc(a.src):"https://www.youtube.com"),this.h=new vr(b),c||(b=Cr(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Na(this.g)),pr[this.g.id]=this,window.postMessage){this.j=
new M;Dr(this);b=wr(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in rr)rr.hasOwnProperty(e)&&Er(this,e)}}
r=Br.prototype;r.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
r.getIframe=function(){return this.g};
r.fc=function(a){Fr(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);Gr(this,a);return this};
function Er(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.M===b[0]&&Gr(a,c)}}
r.destroy=function(){this.g&&this.g.id&&(pr[this.g.id]=null);Qe(this.j);if(this.o){var a=this.g,b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);yr&&(yr[this.id]=null);this.h=null;a=this.g;for(var c in lb)lb[c][0]==a&&Ij(c);this.o=this.g=null};
r.kc=function(){return{}};
function Hr(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.u.push(b)}
function Fr(a,b,c){a.j.Ha||(c={target:a,data:c},a.j.bb(b,c),ur(a.M+"."+b,c))}
function Cr(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+wr(a.h,"title"));(b=wr(a.h,"width"))&&c.setAttribute("width",b.toString());(b=wr(a.h,"height"))&&
c.setAttribute("height",b.toString());Ar.yt_embedsEnableIframeWithLazyLoad&&c.setAttribute("loading","lazy");var g=a.kc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&bb(["debugjs","debugcss"],function(k){var l=fc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+wr(a.h,"host")+("/embed/"+wr(a.h,"videoId"))+"?"+dc(g);Ar.yt_embedsEnableUaChProbe?mr().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=re(l.href).toString();ne(c,se(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Ar.yt_embedsEnableIframeSrcWithIntent?(ne(c,se(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
r.Bc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Dr(a){xr(a.h,a,a.id);a.i=Mj(a.Bc.bind(a));Kj(a.g,"load",function(){window.clearInterval(a.i);a.i=Mj(a.Bc.bind(a))})}
function Gr(a,b){a.S[b]||(a.S[b]=!0,Hr(a,"addEventListener",[b]))}
r.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[bc(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(wc){if(wc.name&&"SyntaxError"===wc.name){if(!(wc.message&&0<wc.message.indexOf("target origin ''"))){var e=void 0,f=wc;e=void 0===e?{}:e;e.name=T("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=T("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(U("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=er)){var m=void 0,n=void 0,q=f,p=e,t=fe(q),u=t.message||"Unknown Error",
z=t.name||"UnknownError",G=t.stack||q.h||"Not available";if(G.startsWith(z+": "+u)){var P=G.split("\n");P.shift();G=P.join("\n")}var Q=t.lineNumber||"Not available",fa=t.fileName||"Not available",cb=G,Ua=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(var Ia=0;Ia<q.args.length&&!(Ua=yk(q.args[Ia],"params."+Ia,p,Ua),500<=Ua);Ia++);else if(q.hasOwnProperty("params")&&q.params){var ha=q.params;if("object"===typeof q.params)for(n in ha){if(ha[n]){var pa="params."+n,qa=Ak(ha[n]);p[pa]=qa;Ua+=
pa.length+qa.length;if(500<Ua)break}}else p.params=Ak(ha)}if(hr.length)for(var ea=0;ea<hr.length&&!(Ua=yk(hr[ea],"params.context."+ea,p,Ua),500<=Ua);ea++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:u,name:z,lineNumber:Q,fileName:fa,stack:cb,params:p,sampleWeight:1},Lm=Number(q.columnNumber);isNaN(Lm)||(W.lineNumber=W.lineNumber+":"+Lm);if("IGNORED"===q.level)m=0;else a:{for(var Mm=uk(),Nm=w(Mm.Ba),Ih=Nm.next();!Ih.done;Ih=Nm.next()){var Om=
Ih.value;if(W.message&&W.message.match(Om.te)){m=Om.weight;break a}}for(var Pm=w(Mm.za),Jh=Pm.next();!Jh.done;Jh=Pm.next()){var Qm=Jh.value;if(Qm.kb(W)){m=Qm.weight;break a}}m=1}W.sampleWeight=m;for(var Rm=w(pk),Kh=Rm.next();!Kh.done;Kh=Rm.next()){var Lh=Kh.value;if(Lh.Hb[W.name])for(var Sm=w(Lh.Hb[W.name]),Mh=Sm.next();!Mh.done;Mh=Sm.next()){var Tm=Mh.value,Le=W.message.match(Tm.regexp);if(Le){W.params["params.error.original"]=Le[0];for(var Nh=Tm.groups,Um={},xc=0;xc<Nh.length;xc++)Um[Nh[xc]]=Le[xc+
1],W.params["params.error."+Nh[xc]]=Le[xc+1];W.message=Lh.Vb(Um);break}}}W.params||(W.params={});var Vm=uk();W.params["params.errorServiceSignature"]="msg="+Vm.Ba.length+"&cb="+Vm.za.length;W.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));tb("sample").constructor!==sb&&(W.params["params.fconst"]="true");var od=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(od);
if(0!==od.sampleWeight&&!dr.has(od.message))if(h&&U("web_enable_error_204")){var Wm=od;lr(void 0===g?"ERROR":g,Wm);jr(Wm)}else{var Oh=void 0,Ph=void 0,Xm=void 0,Ym=void 0,Qh=void 0,O=od,Qb=g;Qb=void 0===Qb?"ERROR":Qb;if("ERROR"===Qb){vk.bb("handleError",O);if(U("record_app_crashed_web")&&0===gr&&1===O.sampleWeight)if(gr++,U("errors_via_jspb")){var Nr=new hj;Qh=Zd(Nr,1,1);if(!U("report_client_error_with_app_crash_ks")){var Or=new gj,Pr=new fj,Qr=new ej,Rr=new dj;var Sr=K(Rr,1,O.message);var Tr=J(Qr,
dj,3,Sr);Ym=J(Pr,ej,5,Tr);Xm=J(Or,fj,9,Ym);J(Qh,gj,4,Xm)}var Zm=U("jspb_sparse_encoded_pivot")?new kj([{}]):new kj;Sd(Zm,hj,20,lj,Qh);cr("appCrashed",Zm)}else{var $m={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};U("report_client_error_with_app_crash_ks")||($m.systemHealth={crashData:{clientError:{logMessage:{message:O.message}}}});ar("appCrashed",$m)}fr++}else"WARNING"===Qb&&vk.bb("handleWarning",O);if(U("kevlar_gel_error_routing"))a:{var pd=Qb;if(U("errors_via_jspb")){if(kr())Ph=void 0;else{var yc=new aj;
K(yc,1,O.stack);O.fileName&&K(yc,4,O.fileName);var gb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==gb.length&&(1!==gb.length||isNaN(Number(gb[0]))?2!==gb.length||isNaN(Number(gb[0]))||isNaN(Number(gb[1]))||(Yd(yc,2,Number(gb[0])),Yd(yc,3,Number(gb[1]))):Yd(yc,2,Number(gb[0])));var Rb=new dj;K(Rb,1,O.message);K(Rb,3,O.name);Yd(Rb,6,O.sampleWeight);"ERROR"===pd?Zd(Rb,2,2):"WARNING"===pd?Zd(Rb,2,1):Zd(Rb,2,0);var Rh=new bj;I(Rh,1,nd(!0));Sd(Rh,aj,3,cj,yc);var Sb=new $i;K(Sb,3,window.location.href);
for(var an=T("FEXP_EXPERIMENTS",[]),Sh=0;Sh<an.length;Sh++){var bn=Sb.s,Th=an[Sh],cn=Zc(bn);id(cn);var dn=Nd(bn,cn,5,2),en=Vc(dn);Th=td(Th,!!(4&en)&&!!(4096&en));dn.push(Th)}var Uh=uj();if(!vj()&&Uh)for(var fn=w(Object.keys(Uh)),Tb=fn.next();!Tb.done;Tb=fn.next()){var gn=Tb.value,Vh=new Zi;K(Vh,1,gn);K(Vh,2,String(Uh[gn]));Ud(Sb,4,Zi,Vh)}var Wh=O.params;if(Wh){var hn=w(Object.keys(Wh));for(Tb=hn.next();!Tb.done;Tb=hn.next()){var jn=Tb.value,Xh=new Zi;K(Xh,1,"client."+jn);K(Xh,2,String(Wh[jn]));Ud(Sb,
4,Zi,Xh)}}var kn=T("SERVER_NAME"),ln=T("SERVER_VERSION");if(kn&&ln){var Yh=new Zi;K(Yh,1,"server.name");K(Yh,2,kn);Ud(Sb,4,Zi,Yh);var Zh=new Zi;K(Zh,1,"server.version");K(Zh,2,ln);Ud(Sb,4,Zi,Zh)}var Me=new ej;J(Me,$i,1,Sb);J(Me,bj,2,Rh);J(Me,dj,3,Rb);Ph=Me}var mn=Ph;if(!mn)break a;var nn=U("jspb_sparse_encoded_pivot")?new kj([{}]):new kj;Sd(nn,ej,163,lj,mn);cr("clientError",nn)}else{var La=void 0;La=void 0===La?{}:La;if(kr())Oh=void 0;else{var qd={stackTrace:O.stack};O.fileName&&(qd.filename=O.fileName);
var hb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==hb.length&&(1!==hb.length||isNaN(Number(hb[0]))?2!==hb.length||isNaN(Number(hb[0]))||isNaN(Number(hb[1]))||(qd.lineNumber=Number(hb[0]),qd.columnNumber=Number(hb[1])):qd.lineNumber=Number(hb[0]));var $h={level:"ERROR_LEVEL_UNKNOWN",message:O.message,errorClassName:O.name,sampleWeight:O.sampleWeight};"ERROR"===pd?$h.level="ERROR_LEVEL_ERROR":"WARNING"===pd&&($h.level="ERROR_LEVEL_WARNNING");var Ur={isObfuscated:!0,browserStackInfo:qd};
La.pageUrl=window.location.href;La.kvPairs=[];T("FEXP_EXPERIMENTS")&&(La.experimentIds=T("FEXP_EXPERIMENTS"));var ai=uj();if(!vj()&&ai)for(var on=w(Object.keys(ai)),Ub=on.next();!Ub.done;Ub=on.next()){var pn=Ub.value;La.kvPairs.push({key:pn,value:String(ai[pn])})}var bi=O.params;if(bi){var qn=w(Object.keys(bi));for(Ub=qn.next();!Ub.done;Ub=qn.next()){var rn=Ub.value;La.kvPairs.push({key:"client."+rn,value:String(bi[rn])})}}var sn=T("SERVER_NAME"),tn=T("SERVER_VERSION");sn&&tn&&(La.kvPairs.push({key:"server.name",
value:sn}),La.kvPairs.push({key:"server.version",value:tn}));Oh={errorMetadata:La,stackTrace:Ur,logMessage:$h}}var un=Oh;if(!un)break a;ar("clientError",un)}if("ERROR"===pd||U("errors_flush_gel_always_killswitch"))b:{if(U("web_fp_via_jspb")){var Ne=!0;Ne=void 0===Ne?!1:Ne;var vn=$q;$q=[];if(vn)for(var wn=w(vn),ci=wn.next();!ci.done;ci=wn.next()){var zc=ci.value;Ne?Xq(zc.Ac,zc.payload,tp,zc.options):ar(zc.Ac,zc.payload,zc.options)}Zq(!0);if(!U("web_fp_via_jspb_and_json"))break b}Zq()}}U("suppress_error_204_logging")||
lr(Qb,O);jr(O)}}}}}else throw wc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Ir(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Jr(a){return 0===a.search("get")||0===a.search("is")}
;function Kr(a,b){Br.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
y(Kr,Br);r=Kr.prototype;r.kc=function(){var a=wr(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=wr(this.h,"embedConfig")){if(Ma(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.fc=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Ma(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":Lr(this,a);break;case "initialDelivery":Ma(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},Mr(this,a.apiInterface),Lr(this,a));break;default:Fr(this,b,a)}};
function Lr(a,b){if(Ma(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+wr(a.h,"title"))))}}
function Mr(a,b){bb(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Ir(c)?this[c]=function(){this.playerInfo={};
this.ka={};Hr(this,c,arguments);return this}:Jr(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Hr(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=wr(this.h,"host")+("/embed/"+wr(this.h,"videoId")),b=Number(wr(this.h,"width")),c=Number(wr(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Yb(a);d=Yb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
r.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
r.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function Vr(a){if("iframe"!==a.tagName.toLowerCase()){var b=tr(a,"videoid");b&&(b={videoId:b,width:tr(a,"width"),height:tr(a,"height")},new Kr(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return pr[a]});
E("YT.scan",sr);E("YT.subscribe",function(a,b,c){Og.subscribe(a,b,c);rr[a]=!0;for(var d in pr)pr.hasOwnProperty(d)&&Er(pr[d],a)});
E("YT.unsubscribe",function(a,b,c){Ng(a,b,c)});
E("YT.Player",Kr);Br.prototype.destroy=Br.prototype.destroy;Br.prototype.setSize=Br.prototype.setSize;Br.prototype.getIframe=Br.prototype.getIframe;Br.prototype.addEventListener=Br.prototype.addEventListener;Kr.prototype.getVideoEmbedCode=Kr.prototype.getVideoEmbedCode;Kr.prototype.getOptions=Kr.prototype.getOptions;Kr.prototype.getOption=Kr.prototype.getOption;
qr.push(function(a){var b=a;b||(b=document);a=fb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=ab(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=fb(b);bb(eb(a,b),Vr)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||sr();var Wr=C.onYTReady;Wr&&Wr();var Xr=C.onYouTubeIframeAPIReady;Xr&&Xr();var Yr=C.onYouTubePlayerAPIReady;Yr&&Yr();}).call(this);
