(function(){var h=void 0,k=!0,l=null,m=!1,p,aa=aa||{},q=this;function ba(a,b){var c=a.split("."),d=q;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||b===h?d=d[e]?d[e]:d[e]={}:d[e]=b}function ca(a){a=a.split(".");for(var b=q,c;c=a.shift();)if(b[c]!=l)b=b[c];else return l;return b}function da(){}
function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){var b=r(a);return"array"==b||"object"==b&&"number"==typeof a.length}function s(a){return"string"==typeof a}function t(a){return"function"==r(a)}function fa(a,b,c){return a.call.apply(a.bind,arguments)}
function ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ga;return u.apply(l,arguments)}var ha=Date.now||function(){return+new Date};
function v(a,b){function c(){}c.prototype=b.prototype;a.la=b.prototype;a.prototype=new c;a.ua=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}}Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return u.apply(l,c)}return u(this,a)};function w(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}v(w,Error);w.prototype.name="CustomError";function ia(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var ja=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ka(a){if(!la.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ma,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(na,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(oa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(pa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(qa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ra,"&#0;"));return a}var ma=/&/g,na=/</g,oa=/>/g,pa=/"/g,qa=/'/g,ra=/\x00/g,la=/[\x00&<>"']/;function sa(a,b){return a<b?-1:a>b?1:0};function ta(a,b){b.unshift(a);w.call(this,ia.apply(l,b));b.shift()}v(ta,w);ta.prototype.name="AssertionError";function ua(a,b){throw new ta("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function va(a){va[" "](a);return a}va[" "]=da;var x=Array.prototype,wa=x.indexOf?function(a,b,c){return x.indexOf.call(a,b,c)}:function(a,b,c){c=c==l?0:0>c?Math.max(0,a.length+c):c;if(s(a))return s(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},xa=x.forEach?function(a,b,c){x.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=s(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function ya(a){var b;t:{b=za;for(var c=a.length,d=s(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(h,d[e],e,a)){b=e;break t}b=-1}return 0>b?l:s(a)?a.charAt(b):a[b]};function Aa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Ba(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var Ca="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Da(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ca.length;f++)c=Ca[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var A;t:{var Ea=q.navigator;if(Ea){var Fa=Ea.userAgent;if(Fa){A=Fa;break t}}A=""};var Ga=-1!=A.indexOf("Opera")||-1!=A.indexOf("OPR"),B=-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE"),C=-1!=A.indexOf("Gecko")&&-1==A.toLowerCase().indexOf("webkit")&&!(-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE")),D=-1!=A.toLowerCase().indexOf("webkit");function Ha(){var a=q.document;return a?a.documentMode:h}
var Ia=function(){var a="",b;if(Ga&&q.opera)return a=q.opera.version,t(a)?a():a;C?b=/rv\:([^\);]+)(\)|;)/:B?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:D&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(A))?a[1]:"");return B&&(b=Ha(),b>parseFloat(a))?String(b):a}(),Ja={};
function F(a){var b;if(!(b=Ja[a])){b=0;for(var c=ja(String(Ia)).split("."),d=ja(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",n=d[f]||"",E=RegExp("(\\d*)(\\D*)","g"),K=RegExp("(\\d*)(\\D*)","g");do{var y=E.exec(g)||["","",""],z=K.exec(n)||["","",""];if(0==y[0].length&&0==z[0].length)break;b=sa(0==y[1].length?0:parseInt(y[1],10),0==z[1].length?0:parseInt(z[1],10))||sa(0==y[2].length,0==z[2].length)||sa(y[2],z[2])}while(0==b)}b=Ja[a]=0<=b}return b}
var Ka=q.document,La=Ka&&B?Ha()||("CSS1Compat"==Ka.compatMode?parseInt(Ia,10):5):h;var Ma;(Ma=!B)||(Ma=B&&9<=La);var Na=Ma,Oa=B&&!F("9");!D||F("528");C&&F("1.9b")||B&&F("8")||Ga&&F("9.5")||D&&F("528");C&&!F("8")||B&&F("9");function Pa(){this.L=this.L;this.ma=this.ma}Pa.prototype.L=m;function G(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.k=m;this.T=k}G.prototype.preventDefault=function(){this.defaultPrevented=k;this.T=m};function H(a,b){G.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=l;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=m;this.Z=this.state=l;if(a){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(C){var e;t:{try{va(d.nodeName);e=k;break t}catch(f){}e=m}e||(d=l)}}else"mouseover"==c?d=a.fromElement:
"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=D||a.offsetX!==h?a.offsetX:a.layerX;this.offsetY=D||a.offsetY!==h?a.offsetY:a.layerY;this.clientX=a.clientX!==h?a.clientX:a.pageX;this.clientY=a.clientY!==h?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;
this.Z=a;a.defaultPrevented&&this.preventDefault()}}v(H,G);H.prototype.preventDefault=function(){H.la.preventDefault.call(this);var a=this.Z;if(a.preventDefault)a.preventDefault();else if(a.returnValue=m,Oa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var I="closure_listenable_"+(1E6*Math.random()|0),Qa=0;function Ra(a,b,c,d,e){this.h=a;this.proxy=l;this.src=b;this.type=c;this.A=!!d;this.D=e;this.key=++Qa;this.removed=this.B=m}function Sa(a){a.removed=k;a.h=l;a.proxy=l;a.src=l;a.D=l};function J(a){this.src=a;this.d={};this.G=0}J.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.d[f];a||(a=this.d[f]=[],this.G++);var g=Ta(a,b,d,e);-1<g?(b=a[g],c||(b.B=m)):(b=new Ra(b,this.src,f,!!d,e),b.B=c,a.push(b));return b};J.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.d))return m;var e=this.d[a];b=Ta(e,b,c,d);return-1<b?(Sa(e[b]),x.splice.call(e,b,1),0==e.length&&(delete this.d[a],this.G--),k):m};
function Ua(a,b){var c=b.type;if(c in a.d){var d=a.d[c],e=wa(d,b),f;(f=0<=e)&&x.splice.call(d,e,1);f&&(Sa(b),0==a.d[c].length&&(delete a.d[c],a.G--))}}J.prototype.N=function(a,b,c,d){a=this.d[a.toString()];var e=-1;a&&(e=Ta(a,b,c,d));return-1<e?a[e]:l};function Ta(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.h==b&&f.A==!!c&&f.D==d)return e}return-1};var Va="closure_lm_"+(1E6*Math.random()|0),Wa={},Xa=0;function L(a,b,c,d,e){if("array"==r(b))for(var f=0;f<b.length;f++)L(a,b[f],c,d,e);else if(c=Ya(c),a&&a[I])a.listen(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=M(a);g||(a[Va]=g=new J(a));c=g.add(b,c,m,d,e);c.proxy||(d=Za(),c.proxy=d,d.src=a,d.h=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent($a(b.toString()),d),Xa++)}}
function Za(){var a=ab,b=Na?function(c){return a.call(b.src,b.h,c)}:function(c){c=a.call(b.src,b.h,c);if(!c)return c};return b}function bb(a,b,c,d,e){if("array"==r(b))for(var f=0;f<b.length;f++)bb(a,b[f],c,d,e);else c=Ya(c),a&&a[I]?a.j.remove(String(b),c,d,e):a&&(a=M(a))&&(b=a.N(b,c,!!d,e))&&cb(b)}
function cb(a){if("number"!=typeof a&&a&&!a.removed){var b=a.src;if(b&&b[I])Ua(b.j,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.A):b.detachEvent&&b.detachEvent($a(c),d);Xa--;(c=M(b))?(Ua(c,a),0==c.G&&(c.src=l,b[Va]=l)):Sa(a)}}}function $a(a){return a in Wa?Wa[a]:Wa[a]="on"+a}function db(a,b,c,d){var e=1;if(a=M(a))if(b=a.d[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.A==c&&!f.removed&&(e&=eb(f,d)!==m)}return Boolean(e)}
function eb(a,b){var c=a.h,d=a.D||a.src;a.B&&cb(a);return c.call(d,b)}
function ab(a,b){if(a.removed)return k;if(!Na){var c=b||ca("window.event"),d=new H(c,this),e=k;if(!(0>c.keyCode||c.returnValue!=h)){t:{var f=m;if(0==c.keyCode)try{c.keyCode=-1;break t}catch(g){f=k}if(f||c.returnValue==h)c.returnValue=k}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,n=c.length-1;!d.k&&0<=n;n--)d.currentTarget=c[n],e&=db(c[n],f,k,d);for(n=0;!d.k&&n<c.length;n++)d.currentTarget=c[n],e&=db(c[n],f,m,d)}return e}return eb(a,new H(b,this))}
function M(a){a=a[Va];return a instanceof J?a:l}var fb="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ya(a){if(t(a))return a;a[fb]||(a[fb]=function(b){return a.handleEvent(b)});return a[fb]};function N(){Pa.call(this);this.j=new J(this);this.ja=this;this.X=l}v(N,Pa);N.prototype[I]=k;p=N.prototype;p.addEventListener=function(a,b,c,d){L(this,a,b,c,d)};p.removeEventListener=function(a,b,c,d){bb(this,a,b,c,d)};
p.dispatchEvent=function(a){var b,c=this.X;if(c)for(b=[];c;c=c.X)b.push(c);var c=this.ja,d=a.type||a;if(s(a))a=new G(a,c);else if(a instanceof G)a.target=a.target||c;else{var e=a;a=new G(d,c);Da(a,e)}var e=k,f;if(b)for(var g=b.length-1;!a.k&&0<=g;g--)f=a.currentTarget=b[g],e=O(f,d,k,a)&&e;a.k||(f=a.currentTarget=c,e=O(f,d,k,a)&&e,a.k||(e=O(f,d,m,a)&&e));if(b)for(g=0;!a.k&&g<b.length;g++)f=a.currentTarget=b[g],e=O(f,d,m,a)&&e;return e};p.listen=function(a,b,c,d){return this.j.add(String(a),b,m,c,d)};
function O(a,b,c,d){b=a.j.d[String(b)];if(!b)return k;b=b.concat();for(var e=k,f=0;f<b.length;++f){var g=b[f];if(g&&!g.removed&&g.A==c){var n=g.h,E=g.D||g.src;g.B&&Ua(a.j,g);e=n.call(E,d)!==m&&e}}return e&&d.T!=m}p.N=function(a,b,c,d){return this.j.N(String(a),b,c,d)};var gb="StopIteration"in q?q.StopIteration:Error("StopIteration");function hb(){}hb.prototype.next=function(){throw gb;};hb.prototype.sa=function(){return this};function P(a,b){this.e={};this.b=[];this.C=this.p=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof P?(c=a.l(),d=a.F()):(c=Ba(a),d=Aa(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}p=P.prototype;p.F=function(){Q(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.e[this.b[b]]);return a};p.l=function(){Q(this);return this.b.concat()};
p.remove=function(a){return Object.prototype.hasOwnProperty.call(this.e,a)?(delete this.e[a],this.p--,this.C++,this.b.length>2*this.p&&Q(this),k):m};function Q(a){if(a.p!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.e,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.p!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
p.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.e,a)?this.e[a]:b};p.set=function(a,b){Object.prototype.hasOwnProperty.call(this.e,a)||(this.p++,this.b.push(a),this.C++);this.e[a]=b};p.forEach=function(a,b){for(var c=this.l(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};p.clone=function(){return new P(this)};
p.sa=function(a){Q(this);var b=0,c=this.b,d=this.e,e=this.C,f=this,g=new hb;g.next=function(){for(;;){if(e!=f.C)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw gb;var g=c[b++];return a?g:d[g]}};return g};function ib(a){if("function"==typeof a.F)return a.F();if(s(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Aa(a)}function jb(a,b){if("function"==typeof a.forEach)a.forEach(b,h);else if(ea(a)||s(a))xa(a,b,h);else{var c;if("function"==typeof a.l)c=a.l();else if("function"!=typeof a.F)if(ea(a)||s(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Ba(a);else c=h;for(var d=ib(a),e=d.length,f=0;f<e;f++)b.call(h,d[f],c&&c[f],a)}};function kb(a){var b;b||(b=lb(a||arguments.callee.caller,[]));return b}
function lb(a,b){var c=[];if(0<=wa(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(mb(a)+"(");for(var d=a.arguments,e=0;d&&e<d.length;e++){0<e&&c.push(", ");var f;f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=mb(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.substr(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(lb(a.caller,
b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")}function mb(a){if(R[a])return R[a];a=String(a);if(!R[a]){var b=/function ([^\(]+)/.exec(a);R[a]=b?b[1]:"[Anonymous]"}return R[a]}var R={};function S(a,b,c,d,e){this.reset(a,b,c,d,e)}S.prototype.W=l;S.prototype.V=l;var nb=0;S.prototype.reset=function(a,b,c,d,e){"number"==typeof e||nb++;d||ha();this.q=a;this.ka=b;delete this.W;delete this.V};S.prototype.Y=function(a){this.q=a};S.prototype.getMessage=function(){return this.ka};function T(a){this.ha=a;this.U=this.M=this.q=this.H=l}function U(a,b){this.name=a;this.value=b}U.prototype.toString=function(){return this.name};var ob=new U("SEVERE",1E3),pb=new U("CONFIG",700),qb=new U("FINE",500);p=T.prototype;p.getParent=function(){return this.H};p.getChildren=function(){this.M||(this.M={});return this.M};p.Y=function(a){this.q=a};function rb(a){if(a.q)return a.q;if(a.H)return rb(a.H);ua("Root logger has no level set.");return l}
p.log=function(a,b,c){if(a.value>=rb(this).value)for(t(b)&&(b=b()),a=this.na(a,b,c,T.prototype.log),b="log:"+a.getMessage(),q.console&&(q.console.timeStamp?q.console.timeStamp(b):q.console.markTimeline&&q.console.markTimeline(b)),q.msWriteProfilerMark&&q.msWriteProfilerMark(b),b=this;b;){c=b;var d=a;if(c.U)for(var e=0,f=h;f=c.U[e];e++)f(d);b=b.getParent()}};
p.na=function(a,b,c,d){var e=new S(a,String(b),this.ha);if(c){var f;f=d||arguments.callee.caller;e.W=c;var g;try{var n;var E=ca("window.location.href");if(s(c))n={message:c,name:"Unknown error",lineNumber:"Not available",fileName:E,stack:"Not available"};else{var K,y,z=m;try{K=c.lineNumber||c.ta||"Not available"}catch(Tb){K="Not available",z=k}try{y=c.fileName||c.filename||c.sourceURL||q.$googDebugFname||E}catch(Ub){y="Not available",z=k}n=!z&&c.lineNumber&&c.fileName&&c.stack&&c.message&&c.name?
c:{message:c.message||"Not available",name:c.name||"UnknownError",lineNumber:K,fileName:y,stack:c.stack||"Not available"}}g="Message: "+ka(n.message)+'\nUrl: <a href="view-source:'+n.fileName+'" target="_new">'+n.fileName+"</a>\nLine: "+n.lineNumber+"\n\nBrowser stack:\n"+ka(n.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+ka(kb(f)+"-> ")}catch(Mb){g="Exception trying to expose exception! You win, we lose. "+Mb}e.V=g}return e};var sb={},V=l;
function tb(a){V||(V=new T(""),sb[""]=V,V.Y(pb));var b;if(!(b=sb[a])){b=new T(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=tb(a.substr(0,c));c.getChildren()[d]=b;b.H=c;sb[a]=b}return b};function W(a,b){a&&a.log(qb,b,h)};function ub(a,b,c){if(t(a))c&&(a=u(a,c));else if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:q.setTimeout(a,b||0)};var vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function wb(a){if(xb){xb=m;var b=q.location;if(b){var c=b.href;if(c&&(c=(c=wb(c)[3]||l)?decodeURI(c):c)&&c!=b.hostname)throw xb=k,Error();}}return a.match(vb)}var xb=D;function yb(){}yb.prototype.$=l;function zb(a){var b;(b=a.$)||(b={},Ab(a)&&(b[0]=k,b[1]=k),b=a.$=b);return b};var Bb;function Cb(){}v(Cb,yb);function Db(a){return(a=Ab(a))?new ActiveXObject(a):new XMLHttpRequest}function Ab(a){if(!a.aa&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.aa=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.aa}Bb=new Cb;function X(a){N.call(this);this.headers=new P;this.w=a||l;this.i=m;this.s=this.a=l;this.f=this.O=this.v="";this.n=this.I=this.r=this.J=m;this.m=0;this.t=l;this.P="";this.u=this.ba=m}v(X,N);var Eb=X.prototype,Fb=tb("goog.net.XhrIo");Eb.c=Fb;var Gb=/^https?$/i,Hb=["POST","PUT"];p=X.prototype;
p.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.v+"; newUri="+a);b=b?b.toUpperCase():"GET";this.v=a;this.f="";this.O=b;this.J=m;this.i=k;this.a=this.w?Db(this.w):Db(Bb);this.s=this.w?zb(this.w):zb(Bb);this.a.onreadystatechange=u(this.Q,this);try{W(this.c,Y(this,"Opening Xhr")),this.I=k,this.a.open(b,String(a),k),this.I=m}catch(e){W(this.c,Y(this,"Error opening Xhr: "+e.message));Ib(this,e);return}a=c||"";var f=this.headers.clone();d&&jb(d,
function(a,b){f.set(b,a)});d=ya(f.l());c=q.FormData&&a instanceof q.FormData;!(0<=wa(Hb,b))||d||c||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.P&&(this.a.responseType=this.P);"withCredentials"in this.a&&(this.a.withCredentials=this.ba);try{Jb(this),0<this.m&&(this.u=Kb(this.a),W(this.c,Y(this,"Will abort after "+this.m+"ms if incomplete, xhr2 "+this.u)),this.u?(this.a.timeout=this.m,this.a.ontimeout=u(this.R,
this)):this.t=ub(this.R,this.m,this)),W(this.c,Y(this,"Sending request")),this.r=k,this.a.send(a),this.r=m}catch(g){W(this.c,Y(this,"Send error: "+g.message)),Ib(this,g)}};function Kb(a){return B&&F(9)&&"number"==typeof a.timeout&&a.ontimeout!==h}function za(a){return"content-type"==a.toLowerCase()}p.R=function(){"undefined"!=typeof aa&&this.a&&(this.f="Timed out after "+this.m+"ms, aborting",W(this.c,Y(this,this.f)),this.dispatchEvent("timeout"),this.abort(8))};
function Ib(a,b){a.i=m;a.a&&(a.n=k,a.a.abort(),a.n=m);a.f=b;Lb(a);Nb(a)}function Lb(a){a.J||(a.J=k,a.dispatchEvent("complete"),a.dispatchEvent("error"))}p.abort=function(){this.a&&this.i&&(W(this.c,Y(this,"Aborting")),this.i=m,this.n=k,this.a.abort(),this.n=m,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Nb(this))};p.Q=function(){this.L||(this.I||this.r||this.n?Ob(this):this.ia())};p.ia=function(){Ob(this)};
function Ob(a){if(a.i&&"undefined"!=typeof aa)if(a.s[1]&&4==Z(a)&&2==Pb(a))W(a.c,Y(a,"Local request error detected and ignored"));else if(a.r&&4==Z(a))ub(a.Q,0,a);else if(a.dispatchEvent("readystatechange"),4==Z(a)){W(a.c,Y(a,"Request complete"));a.i=m;try{if(Qb(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{var b;try{b=2<Z(a)?a.a.statusText:""}catch(c){W(a.c,"Can not get status: "+c.message),b=""}a.f=b+" ["+Pb(a)+"]";Lb(a)}}finally{Nb(a)}}}
function Nb(a){if(a.a){Jb(a);var b=a.a,c=a.s[0]?da:l;a.a=l;a.s=l;a.dispatchEvent("ready");try{b.onreadystatechange=c}catch(d){(a=a.c)&&a.log(ob,"Problem encountered resetting onreadystatechange: "+d.message,h)}}}function Jb(a){a.a&&a.u&&(a.a.ontimeout=l);"number"==typeof a.t&&(q.clearTimeout(a.t),a.t=l)}
function Qb(a){var b=Pb(a),c;t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=k;break t;default:c=m}if(!c){if(b=0===b)a=wb(String(a.v))[1]||l,!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!Gb.test(a?a.toLowerCase():"");c=b}return c}function Z(a){return a.a?a.a.readyState:0}function Pb(a){try{return 2<Z(a)?a.a.status:-1}catch(b){return-1}}function Y(a,b){return b+" ["+a.O+" "+a.v+" "+Pb(a)+"]"};function Rb(a){this.a=a||new X;this.g="";this.o=m;a=document.createElement("table");a.id="nav-bar";a.className="pagespeed-sub-tabs";a.innerHTML='<tr><td><a id="show_metadata_mode" href="javascript:void(0);">Show Metadata Cache</a> - </td><td><a id="cache_struct_mode" href="javascript:void(0);">Show Cache Structure</a> - </td><td><a id="physical_cache_mode" href="javascript:void(0);">Physical Caches</a> - </td><td><a id="purge_cache_mode" href="javascript:void(0);">Purge Cache</a></td></tr>';document.body.insertBefore(a,
document.getElementById("show_metadata"));a=document.createElement("pre");a.id="metadata_result";a.className="pagespeed-caches-result";document.getElementById("show_metadata").appendChild(a);a=document.createElement("div");a.id="purge_result";a.className="pagespeed-caches-result";var b=document.getElementById("purge_cache");b.insertBefore(a,b.firstChild)}
ba("pagespeed.Caches.toggleDetail",function(a){var b=document.getElementById(a+"_summary"),c=document.getElementById(a+"_detail");document.getElementById(a+"_toggle").checked?(b.style.display="none",c.style.display="block"):(b.style.display="block",c.style.display="none")});var Sb={pa:"show_metadata_mode",oa:"cache_struct_mode",qa:"physical_cache_mode",ra:"purge_cache_mode"},$={pa:"show_metadata",oa:"cache_struct",qa:"physical_cache",ra:"purge_cache"};p=Rb.prototype;
p.S=function(){var a=location.hash.substr(1);if(""==a)this.show("show_metadata");else{var b;t:{for(b in $)if($[b]==a){b=k;break t}b=m}b&&this.show(a)}};p.show=function(a){for(var b in $){var c=$[b];document.getElementById(c).className=c==a?"":"pagespeed-hidden-offscreen"}c=document.getElementById(a+"_mode");for(b in Sb){var d=document.getElementById(Sb[b]);d.className=d==c?"pagespeed-underline-link":""}location.href=location.href.split("#")[0]+"#"+a};
p.fa=function(){if(!this.a.a){var a=encodeURIComponent(document.getElementById("purge_text").value.trim());this.g="*"==a?"purge_all":"purge_text";this.a.send("?purge="+a)}};p.ea=function(){this.a.a||(this.g="purge_all",this.a.send("?purge=*"))};p.K=function(){this.a.a||(this.g="purge_table",this.a.send("?new_set="))};
p.da=function(a){this.a.a||(a.preventDefault(),a="?url="+encodeURIComponent(document.getElementById("metadata_text").value.trim())+"&user_agent="+encodeURIComponent(document.getElementById("user_agent").value.trim())+"&json=1",this.g="metadata_result",this.a.send(a))};p.ca=function(){this.o=!this.o;this.K()};
p.ga=function(){if(Qb(this.a)){var a;var b=this.a;try{a=b.a?b.a.responseText:""}catch(c){W(b.c,"Can not get responseText: "+c.message),a=""}if("metadata_result"==this.g)a=JSON.parse(a.substring(4)).value,document.getElementById(this.g).textContent=a;else if("purge_table"==this.g){if(a=a.split("\n"),b=a.shift(),document.getElementById("purge_global").textContent="Everything before this time stamp is invalid: "+b.split("@")[1],b=document.getElementById("purge_table"),b.innerHTML="",0<a.length){b.appendChild(document.createElement("hr"));
var d=document.createElement("table");this.o&&a.reverse();for(var e=0;e<a.length;++e){var f=a[e].lastIndexOf("@"),g=a[e].substring(0,f),n=a[e].substring(f+1),f=d.insertRow(-1);f.insertCell(0).textContent=n;n=document.createElement("code");n.className="pagespeed-caches-purge-url";n.textContent=g;f.insertCell(1).appendChild(n)}e=d.createTHead().insertRow(0);g=e.insertCell(0);g.className="pagespeed-caches-date-column";1==a.length?g.textContent="Invalidation Time":(a=document.createElement("input"),a.setAttribute("type",
"checkbox"),a.id="sort",a.checked=this.o?k:m,a.title="Change sort order.",g.textContent=this.o?"Invalidation Time (Descending)":"Invalidation Time (Ascending)",g.appendChild(a),L(a,"change",u(this.ca,this)));g=e.insertCell(1);g.textContent="URL";g.className="pagespeed-stats-url-column";b.appendChild(d)}}else window.setTimeout(u(this.K,this),0),b=document.getElementById("purge_result"),"Purge successful"==a&&"purge_text"==this.g?b.textContent="Added to Purge Set":-1!=a.indexOf("Purging not enabled")?
b.innerHTML=a:b.textContent=a}else a=this.a,console.log(s(a.f)?a.f:String(a.f))};
ba("pagespeed.Caches.Start",function(){L(window,"load",function(){var a=new Rb,b=document.createElement("table");b.innerHTML='URL: <input id="purge_text" type="text" name="purge" size="110"/><br><input id="purge_submit" type="button" value="Purge Individual URL"/><input id="purge_all" type="button" value="Purge Entire Cache"/>';var c=document.getElementById("purge_cache");c.insertBefore(b,c.firstChild);a.S();for(var d in $)L(document.getElementById(Sb[d]),"click",u(a.show,a,$[d]));L(window,"hashchange",
u(a.S,a));L(document.getElementById("purge_submit"),"click",u(a.fa,a));L(document.getElementById("purge_all"),"click",u(a.ea,a));L(document.getElementById("metadata_submit"),"click",u(a.da,a));L(a.a,"complete",u(a.ga,a));L(document.getElementById("metadata_clear"),"click",location.reload.bind(location));a.K()})});})();
