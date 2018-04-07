var Zepto=function(){function t(t){return null==t?String(t):J[U.call(t)]||"object"}function n(n){return"function"==t(n)}function e(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(n){return"object"==t(n)}function o(t){return r(t)&&!e(t)&&Object.getPrototypeOf(t)==Object.prototype}function s(t){return"number"==typeof t.length}function a(t){return $.call(t,function(t){return null!=t})}function u(t){return t.length>0?S.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(t){return t in j?j[t]:j[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function l(t,n){return"number"!=typeof n||F[c(t)]?n:n+"px"}function h(t){var n,e;return k[t]||(n=Z.createElement(t),Z.body.appendChild(n),e=getComputedStyle(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),"none"==e&&(e="block"),k[t]=e),k[t]}function p(t){return"children"in t?L.call(t.children):S.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function d(t,n){var e,i=t?t.length:0;for(e=0;e<i;e++)this[e]=t[e];this.length=i,this.selector=n||""}function m(t,n,e){for(C in n)e&&(o(n[C])||Q(n[C]))?(o(n[C])&&!o(t[C])&&(t[C]={}),Q(n[C])&&!Q(t[C])&&(t[C]=[]),m(t[C],n[C],e)):n[C]!==x&&(t[C]=n[C])}function g(t,n){return null==n?S(t):S(t).filter(n)}function v(t,e,i,r){return n(e)?e.call(t,i,r):e}function y(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function b(t,n){var e=t.className||"",i=e&&e.baseVal!==x;return n===x?i?e.baseVal:e:void(i?e.baseVal=n:t.className=n)}function w(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?S.parseJSON(t):t):t}catch(n){return t}}function E(t,n){n(t);for(var e=0,i=t.childNodes.length;e<i;e++)E(t.childNodes[e],n)}var x,C,S,N,T,P,A=[],O=A.concat,$=A.filter,L=A.slice,Z=window.document,k={},j={},F={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},z=/^\s*<(\w+|!)[^>]*>/,q=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,M=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_=/^(?:body|html)$/i,B=/([A-Z])/g,D=["val","css","html","text","data","width","height","offset"],I=["after","prepend","before","append"],R=Z.createElement("table"),V=Z.createElement("tr"),H={tr:Z.createElement("tbody"),tbody:R,thead:R,tfoot:R,td:V,th:V,"*":Z.createElement("div")},X=/complete|loaded|interactive/,Y=/^[\w-]*$/,J={},U=J.toString,W={},G=Z.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return W.matches=function(t,n){if(!n||!t||1!==t.nodeType)return!1;var e=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(e)return e.call(t,n);var i,r=t.parentNode,o=!r;return o&&(r=G).appendChild(t),i=~W.qsa(r,n).indexOf(t),o&&G.removeChild(t),i},T=function(t){return t.replace(/-+(.)?/g,function(t,n){return n?n.toUpperCase():""})},P=function(t){return $.call(t,function(n,e){return t.indexOf(n)==e})},W.fragment=function(t,n,e){var i,r,s;return q.test(t)&&(i=S(Z.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(M,"<$1></$2>")),n===x&&(n=z.test(t)&&RegExp.$1),n in H||(n="*"),s=H[n],s.innerHTML=""+t,i=S.each(L.call(s.childNodes),function(){s.removeChild(this)})),o(e)&&(r=S(i),S.each(e,function(t,n){D.indexOf(t)>-1?r[t](n):r.attr(t,n)})),i},W.Z=function(t,n){return new d(t,n)},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,e){var i;if(!t)return W.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&z.test(t))i=W.fragment(t,RegExp.$1,e),t=null;else{if(e!==x)return S(e).find(t);i=W.qsa(Z,t)}else{if(n(t))return S(Z).ready(t);if(W.isZ(t))return t;if(Q(t))i=a(t);else if(r(t))i=[t],t=null;else if(z.test(t))i=W.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==x)return S(e).find(t);i=W.qsa(Z,t)}}return W.Z(i,t)},S=function(t,n){return W.init(t,n)},S.extend=function(t){var n,e=L.call(arguments,1);return"boolean"==typeof t&&(n=t,t=e.shift()),e.forEach(function(e){m(t,e,n)}),t},W.qsa=function(t,n){var e,i="#"==n[0],r=!i&&"."==n[0],o=i||r?n.slice(1):n,s=Y.test(o);return t.getElementById&&s&&i?(e=t.getElementById(o))?[e]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:L.call(s&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(n):t.querySelectorAll(n))},S.contains=Z.documentElement.contains?function(t,n){return t!==n&&t.contains(n)}:function(t,n){for(;n&&(n=n.parentNode);)if(n===t)return!0;return!1},S.type=t,S.isFunction=n,S.isWindow=e,S.isArray=Q,S.isPlainObject=o,S.isEmptyObject=function(t){var n;for(n in t)return!1;return!0},S.inArray=function(t,n,e){return A.indexOf.call(n,t,e)},S.camelCase=T,S.trim=function(t){return null==t?"":String.prototype.trim.call(t)},S.uuid=0,S.support={},S.expr={},S.noop=function(){},S.map=function(t,n){var e,i,r,o=[];if(s(t))for(i=0;i<t.length;i++)e=n(t[i],i),null!=e&&o.push(e);else for(r in t)e=n(t[r],r),null!=e&&o.push(e);return u(o)},S.each=function(t,n){var e,i;if(s(t)){for(e=0;e<t.length;e++)if(n.call(t[e],e,t[e])===!1)return t}else for(i in t)if(n.call(t[i],i,t[i])===!1)return t;return t},S.grep=function(t,n){return $.call(t,n)},window.JSON&&(S.parseJSON=JSON.parse),S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,n){J["[object "+n+"]"]=n.toLowerCase()}),S.fn={constructor:W.Z,length:0,forEach:A.forEach,reduce:A.reduce,push:A.push,sort:A.sort,splice:A.splice,indexOf:A.indexOf,concat:function(){var t,n,e=[];for(t=0;t<arguments.length;t++)n=arguments[t],e[t]=W.isZ(n)?n.toArray():n;return O.apply(W.isZ(this)?this.toArray():this,e)},map:function(t){return S(S.map(this,function(n,e){return t.call(n,e,n)}))},slice:function(){return S(L.apply(this,arguments))},ready:function(t){return X.test(Z.readyState)&&Z.body?t(S):Z.addEventListener("DOMContentLoaded",function(){t(S)},!1),this},get:function(t){return t===x?L.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return A.every.call(this,function(n,e){return t.call(n,e,n)!==!1}),this},filter:function(t){return n(t)?this.not(this.not(t)):S($.call(this,function(n){return W.matches(n,t)}))},add:function(t,n){return S(P(this.concat(S(t,n))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var e=[];if(n(t)&&t.call!==x)this.each(function(n){t.call(this,n)||e.push(this)});else{var i="string"==typeof t?this.filter(t):s(t)&&n(t.item)?L.call(t):S(t);this.forEach(function(t){i.indexOf(t)<0&&e.push(t)})}return S(e)},has:function(t){return this.filter(function(){return r(t)?S.contains(this,t):S(this).find(t).size()})},eq:function(t){return t===-1?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:S(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:S(t)},find:function(t){var n,e=this;return n=t?"object"==typeof t?S(t).filter(function(){var t=this;return A.some.call(e,function(n){return S.contains(n,t)})}):1==this.length?S(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)}):S()},closest:function(t,n){var e=this[0],r=!1;for("object"==typeof t&&(r=S(t));e&&!(r?r.indexOf(e)>=0:W.matches(e,t));)e=e!==n&&!i(e)&&e.parentNode;return S(e)},parents:function(t){for(var n=[],e=this;e.length>0;)e=S.map(e,function(t){if((t=t.parentNode)&&!i(t)&&n.indexOf(t)<0)return n.push(t),t});return g(n,t)},parent:function(t){return g(P(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||L.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,n){return $.call(p(n.parentNode),function(t){return t!==n})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return S.map(this,function(n){return n[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t);if(this[0]&&!e)var i=S(t).get(0),r=i.parentNode||this.length>1;return this.each(function(n){S(this).wrapAll(e?t.call(this,n):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){S(this[0]).before(t=S(t));for(var n;(n=t.children()).length;)t=n.first();S(t).append(this)}return this},wrapInner:function(t){var e=n(t);return this.each(function(n){var i=S(this),r=i.contents(),o=e?t.call(this,n):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){S(this).replaceWith(S(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=S(this);(t===x?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return S(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return S(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(n){var e=this.innerHTML;S(this).empty().append(v(this,t,n,e))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(n){var e=v(this,t,n,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,n){var e;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(r(t))for(C in t)y(this,C,t[C]);else y(this,t,v(this,n,e,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(e=this[0].getAttribute(t))&&t in this[0]?this[0][t]:e:x},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){y(this,t)},this)})},prop:function(t,n){return t=K[t]||t,1 in arguments?this.each(function(e){this[t]=v(this,n,e,this[t])}):this[0]&&this[0][t]},data:function(t,n){var e="data-"+t.replace(B,"-$1").toLowerCase(),i=1 in arguments?this.attr(e,n):this.attr(e);return null!==i?w(i):x},val:function(t){return 0 in arguments?this.each(function(n){this.value=v(this,t,n,this.value)}):this[0]&&(this[0].multiple?S(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(n){var e=S(this),i=v(this,t,n,e.offset()),r=e.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==e.css("position")&&(o.position="relative"),e.css(o)});if(!this.length)return null;if(!S.contains(Z.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(n,e){if(arguments.length<2){var i,r=this[0];if(!r)return;if(i=getComputedStyle(r,""),"string"==typeof n)return r.style[T(n)]||i.getPropertyValue(n);if(Q(n)){var o={};return S.each(n,function(t,n){o[n]=r.style[T(n)]||i.getPropertyValue(n)}),o}}var s="";if("string"==t(n))e||0===e?s=c(n)+":"+l(n,e):this.each(function(){this.style.removeProperty(c(n))});else for(C in n)n[C]||0===n[C]?s+=c(C)+":"+l(C,n[C])+";":this.each(function(){this.style.removeProperty(c(C))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(S(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&A.some.call(this,function(t){return this.test(b(t))},f(t))},addClass:function(t){return t?this.each(function(n){if("className"in this){N=[];var e=b(this),i=v(this,t,n,e);i.split(/\s+/g).forEach(function(t){S(this).hasClass(t)||N.push(t)},this),N.length&&b(this,e+(e?" ":"")+N.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===x)return b(this,"");N=b(this),v(this,t,n,N).split(/\s+/g).forEach(function(t){N=N.replace(f(t)," ")}),b(this,N.trim())}})},toggleClass:function(t,n){return t?this.each(function(e){var i=S(this),r=v(this,t,e,b(this));r.split(/\s+/g).forEach(function(t){(n===x?!i.hasClass(t):n)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===x?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===x?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],n=this.offsetParent(),e=this.offset(),i=_.test(n[0].nodeName)?{top:0,left:0}:n.offset();return e.top-=parseFloat(S(t).css("margin-top"))||0,e.left-=parseFloat(S(t).css("margin-left"))||0,i.top+=parseFloat(S(n[0]).css("border-top-width"))||0,i.left+=parseFloat(S(n[0]).css("border-left-width"))||0,{top:e.top-i.top,left:e.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||Z.body;t&&!_.test(t.nodeName)&&"static"==S(t).css("position");)t=t.offsetParent;return t})}},S.fn.detach=S.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});S.fn[t]=function(r){var o,s=this[0];return r===x?e(s)?s["inner"+n]:i(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(n){s=S(this),s.css(t,v(this,r,n,s[t]()))})}}),I.forEach(function(n,e){var i=e%2;S.fn[n]=function(){var n,r,o=S.map(arguments,function(e){return n=t(e),"object"==n||"array"==n||null==e?e:W.fragment(e)}),s=this.length>1;return o.length<1?this:this.each(function(t,n){r=i?n:n.parentNode,n=0==e?n.nextSibling:1==e?n.firstChild:2==e?n:null;var a=S.contains(Z.documentElement,r);o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!r)return S(t).remove();r.insertBefore(t,n),a&&E(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},S.fn[i?n+"To":"insert"+(e?"Before":"After")]=function(t){return S(t)[n](this),this}}),W.Z.prototype=d.prototype=S.fn,W.uniq=P,W.deserializeValue=w,S.zepto=W,S}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t,n){function e(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function i(t){return r?r+t:t.toLowerCase()}var r,o,s,a,u,c,f,l,h,p,d="",m={Webkit:"webkit",Moz:"",O:"o"},g=document.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(m,function(t,e){if(g.style[t+"TransitionProperty"]!==n)return d="-"+t.toLowerCase()+"-",r=e,!1}),o=d+"transform",y[s=d+"transition-property"]=y[a=d+"transition-duration"]=y[c=d+"transition-delay"]=y[u=d+"transition-timing-function"]=y[f=d+"animation-name"]=y[l=d+"animation-duration"]=y[p=d+"animation-delay"]=y[h=d+"animation-timing-function"]="",t.fx={off:r===n&&g.style.transitionProperty===n,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(e,i,r,o,s){return t.isFunction(i)&&(o=i,r=n,i=n),t.isFunction(r)&&(o=r,r=n),t.isPlainObject(i)&&(r=i.easing,o=i.complete,s=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),s&&(s=parseFloat(s)/1e3),this.anim(e,i,r,o,s)},t.fn.anim=function(i,r,d,m,g){var b,w,E,x={},C="",S=this,N=t.fx.transitionEnd,T=!1;if(r===n&&(r=t.fx.speeds._default/1e3),g===n&&(g=0),t.fx.off&&(r=0),"string"==typeof i)x[f]=i,x[l]=r+"s",x[p]=g+"s",x[h]=d||"linear",N=t.fx.animationEnd;else{w=[];for(b in i)v.test(b)?C+=b+"("+i[b]+") ":(x[b]=i[b],w.push(e(b)));C&&(x[o]=C,w.push(o)),r>0&&"object"==typeof i&&(x[s]=w.join(", "),x[a]=r+"s",x[c]=g+"s",x[u]=d||"linear")}return E=function(n){if("undefined"!=typeof n){if(n.target!==n.currentTarget)return;t(n.target).unbind(N,E)}else t(this).unbind(N,E);T=!0,t(this).css(y),m&&m.call(this)},r>0&&(this.bind(N,E),setTimeout(function(){T||E.call(S)},1e3*(r+g)+25)),this.size()&&this.get(0).clientLeft,this.css(x),r<=0&&setTimeout(function(){S.each(function(){E.call(this)})},0),this},g=null}(Zepto),function(t){function n(t){return t._zid||(t._zid=h++)}function e(t,e,o,s){if(e=i(e),e.ns)var a=r(e.ns);return(g[n(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||a.test(t.ns))&&(!o||n(t.fn)===n(o))&&(!s||t.sel==s)})}function i(t){var n=(""+t).split(".");return{e:n[0],ns:n.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,n){return t.del&&!y&&t.e in b||!!n}function s(t){return w[t]||y&&b[t]||t}function a(e,r,a,u,f,h,p){var d=n(e),m=g[d]||(g[d]=[]);r.split(/\s/).forEach(function(n){if("ready"==n)return t(document).ready(a);var r=i(n);r.fn=a,r.sel=f,r.e in w&&(a=function(n){var e=n.relatedTarget;if(!e||e!==this&&!t.contains(this,e))return r.fn.apply(this,arguments)}),r.del=h;var d=h||a;r.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var n=d.apply(e,t._args==l?[t]:[t].concat(t._args));return n===!1&&(t.preventDefault(),t.stopPropagation()),n}},r.i=m.length,m.push(r),"addEventListener"in e&&e.addEventListener(s(r.e),r.proxy,o(r,p))})}function u(t,i,r,a,u){var c=n(t);(i||"").split(/\s/).forEach(function(n){e(t,n,r,a).forEach(function(n){delete g[c][n.i],"removeEventListener"in t&&t.removeEventListener(s(n.e),n.proxy,o(n,u))})})}function c(n,e){return!e&&n.isDefaultPrevented||(e||(e=n),t.each(S,function(t,i){var r=e[t];n[t]=function(){return this[i]=E,r&&r.apply(e,arguments)},n[i]=x}),(e.defaultPrevented!==l?e.defaultPrevented:"returnValue"in e?e.returnValue===!1:e.getPreventDefault&&e.getPreventDefault())&&(n.isDefaultPrevented=E)),n}function f(t){var n,e={originalEvent:t};for(n in t)C.test(n)||t[n]===l||(e[n]=t[n]);return c(e,t)}var l,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:a,remove:u},t.proxy=function(e,i){var r=2 in arguments&&p.call(arguments,2);if(d(e)){var o=function(){return e.apply(i,r?r.concat(p.call(arguments)):arguments)};return o._zid=n(e),o}if(m(i))return r?(r.unshift(e[i],e),t.proxy.apply(null,r)):t.proxy(e[i],e);throw new TypeError("expected function")},t.fn.bind=function(t,n,e){return this.on(t,n,e)},t.fn.unbind=function(t,n){return this.off(t,n)},t.fn.one=function(t,n,e,i){return this.on(t,n,e,i,1)};var E=function(){return!0},x=function(){return!1},C=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,n,e){return this.on(n,t,e)},t.fn.undelegate=function(t,n,e){return this.off(n,t,e)},t.fn.live=function(n,e){return t(document.body).delegate(this.selector,n,e),this},t.fn.die=function(n,e){return t(document.body).undelegate(this.selector,n,e),this},t.fn.on=function(n,e,i,r,o){var s,c,h=this;return n&&!m(n)?(t.each(n,function(t,n){h.on(t,e,i,n,o)}),h):(m(e)||d(r)||r===!1||(r=i,i=e,e=l),r!==l&&i!==!1||(r=i,i=l),r===!1&&(r=x),h.each(function(l,h){o&&(s=function(t){return u(h,t.type,r),r.apply(this,arguments)}),e&&(c=function(n){var i,o=t(n.target).closest(e,h).get(0);if(o&&o!==h)return i=t.extend(f(n),{currentTarget:o,liveFired:h}),(s||r).apply(o,[i].concat(p.call(arguments,1)))}),a(h,n,r,i,e,c||s)}))},t.fn.off=function(n,e,i){var r=this;return n&&!m(n)?(t.each(n,function(t,n){r.off(t,e,n)}),r):(m(e)||d(i)||i===!1||(i=e,e=l),i===!1&&(i=x),r.each(function(){u(this,n,i,e)}))},t.fn.trigger=function(n,e){return n=m(n)||t.isPlainObject(n)?t.Event(n):c(n),n._args=e,this.each(function(){n.type in b&&"function"==typeof this[n.type]?this[n.type]():"dispatchEvent"in this?this.dispatchEvent(n):t(this).triggerHandler(n,e)})},t.fn.triggerHandler=function(n,i){var r,o;return this.each(function(s,a){r=f(m(n)?t.Event(n):n),r._args=i,r.target=a,t.each(e(a,n.type||n),function(t,n){if(o=n.proxy(r),r.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){t.fn[n]=function(t){return 0 in arguments?this.bind(n,t):this.trigger(n)}}),t.Event=function(t,n){m(t)||(n=t,t=n.type);var e=document.createEvent(v[t]||"Events"),i=!0;if(n)for(var r in n)"bubbles"==r?i=!!n[r]:e[r]=n[r];return e.initEvent(t,i,!0),c(e)}}(Zepto)+function(t,n){window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var e=function(){var t=document.body.scrollTop,n=document.body.scrollLeft;window.scrollTo(n,t-100),t>0&&requestAnimationFrame(e)},i={init:function(){this.bind(),this.initSidebar()},bind:function(){var t=this;$(n).on("click","#nav-btn",function(){t.toggleBodyClass()}).on("click","#back-top",function(){requestAnimationFrame(e)})},sidebarState:function(){var t=!1,n=localStorage.getItem("sidebarState");return void 0!=n&&(t=!("true"==n)),function(){return t=!t}}(),initSidebar:function(){var t=localStorage.getItem("sidebarState");t&&this.toggleBodyClass(t)},toggleBodyClass:function(t){var n=$("body"),e=this.sidebarState();return void 0!=t?void("true"==t?n.addClass("sideShow"):n.removeClass("sideShow")):(e?n.addClass("sideShow"):n.removeClass("sideShow"),void localStorage.setItem("sidebarState",e))}};i.init()}(window,document);