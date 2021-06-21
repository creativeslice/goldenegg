!function(e,t){"function"==typeof define&&define.amd?define([],(function(){return e.svg4everybody=t()})):"object"==typeof module&&module.exports?module.exports=t():e.svg4everybody=t()}(this,(function(){function e(e,t,o){if(o){var n=document.createDocumentFragment(),r=!t.hasAttribute("viewBox")&&o.getAttribute("viewBox");r&&t.setAttribute("viewBox",r);for(var i=o.cloneNode(!0);i.childNodes.length;)n.appendChild(i.firstChild);e.appendChild(n)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var o=t._cachedDocument;o||((o=t._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=t.responseText,t._cachedTarget={}),t._embeds.splice(0).map((function(n){var r=t._cachedTarget[n.id];r||(r=t._cachedTarget[n.id]=o.getElementById(n.id)),e(n.parent,n.svg,r)}))}},t.onreadystatechange()}function o(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}return function(n){var r,i=Object(n),c=window.top!==window.self;r="polyfill"in i?i.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&c;var s={},a=window.requestAnimationFrame||setTimeout,u=document.getElementsByTagName("use"),l=0;r&&function n(){for(var c=0;c<u.length;){var d=u[c],p=d.parentNode,w=o(p),m=d.getAttribute("xlink:href")||d.getAttribute("href");if(!m&&i.attributeName&&(m=d.getAttribute(i.attributeName)),w&&m){if(r)if(!i.validate||i.validate(m,w,d)){p.removeChild(d);var g=m.split("#"),f=g.shift(),b=g.join("#");if(f.length){var k=s[f];k||((k=s[f]=new XMLHttpRequest).open("GET",f),k.send(),k._embeds=[]),k._embeds.push({parent:p,svg:w,id:b}),t(k)}else e(p,w,document.getElementById(b))}else++c,++l}else++c}(!u.length||u.length-l>0)&&a(n,67)}()}})),
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.10
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("whatInput",[],t):"object"==typeof exports?exports.whatInput=t():e.whatInput=t()}(this,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}return o.m=e,o.c=t,o.p="",o(0)}([function(e,t){"use strict";e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var e=document.documentElement,t=null,o="initial",n=o,r=Date.now(),i="false",c=["button","input","select","textarea"],s=[],a=[16,17,18,91,93],u=[],l={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch",touchend:"touch"},d=!1,p={x:null,y:null},w={2:"touch",3:"touch",4:"mouse"},m=!1;try{var g=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("test",null,g)}catch(e){}var f=function(){var e=!!m&&{passive:!0};document.addEventListener("DOMContentLoaded",b),window.PointerEvent?(window.addEventListener("pointerdown",k),window.addEventListener("pointermove",v)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",k),window.addEventListener("MSPointerMove",v)):(window.addEventListener("mousedown",k),window.addEventListener("mousemove",v),"ontouchstart"in window&&(window.addEventListener("touchstart",k,e),window.addEventListener("touchend",k))),window.addEventListener(E(),v,e),window.addEventListener("keydown",k),window.addEventListener("keyup",k),window.addEventListener("focusin",y),window.addEventListener("focusout",B)},b=function(){if(i=!(e.getAttribute("data-whatpersist")||"false"===document.body.getAttribute("data-whatpersist")))try{window.sessionStorage.getItem("what-input")&&(o=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(n=window.sessionStorage.getItem("what-intent"))}catch(e){}h("input"),h("intent")},k=function(e){var t=e.which,r=l[e.type];"pointer"===r&&(r=x(e));var i=!u.length&&-1===a.indexOf(t),s=u.length&&-1!==u.indexOf(t),d="keyboard"===r&&t&&(i||s)||"mouse"===r||"touch"===r;if(V(r)&&(d=!1),d&&o!==r&&(T("input",o=r),h("input")),d&&n!==r){var p=document.activeElement;p&&p.nodeName&&(-1===c.indexOf(p.nodeName.toLowerCase())||"button"===p.nodeName.toLowerCase()&&!S(p,"form"))&&(T("intent",n=r),h("intent"))}},h=function(t){e.setAttribute("data-what"+t,"input"===t?o:n),C(t)},v=function(e){var t=l[e.type];"pointer"===t&&(t=x(e)),L(e),(!d&&!V(t)||d&&"wheel"===e.type||"mousewheel"===e.type||"DOMMouseScroll"===e.type)&&n!==t&&(T("intent",n=t),h("intent"))},y=function(o){o.target.nodeName?(t=o.target.nodeName.toLowerCase(),e.setAttribute("data-whatelement",t),o.target.classList&&o.target.classList.length&&e.setAttribute("data-whatclasses",o.target.classList.toString().replace(" ",","))):B()},B=function(){t=null,e.removeAttribute("data-whatelement"),e.removeAttribute("data-whatclasses")},T=function(e,t){if(i)try{window.sessionStorage.setItem("what-"+e,t)}catch(e){}},x=function(e){return"number"==typeof e.pointerType?w[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},V=function(e){var t=Date.now(),n="mouse"===e&&"touch"===o&&t-r<200;return r=t,n},E=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},C=function(e){for(var t=0,r=s.length;t<r;t++)s[t].type===e&&s[t].fn.call(void 0,"input"===e?o:n)},L=function(e){p.x!==e.screenX||p.y!==e.screenY?(d=!1,p.x=e.screenX,p.y=e.screenY):d=!0},S=function(e,t){var o=window.Element.prototype;if(o.matches||(o.matches=o.msMatchesSelector||o.webkitMatchesSelector),o.closest)return e.closest(t);do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null};return"addEventListener"in window&&Array.prototype.indexOf&&(l[E()]="mouse",f()),{ask:function(e){return"intent"===e?n:o},element:function(){return t},ignoreKeys:function(e){a=e},specificKeys:function(e){u=e},registerOnChange:function(e,t){s.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=function(e){for(var t=0,o=s.length;t<o;t++)if(s[t].fn===e)return t}(e);(t||0===t)&&s.splice(t,1)},clearStorage:function(){window.sessionStorage.clear()}}}()}])})),jQuery(document).ready((function(e){svg4everybody(),e(".articleHeader h1").each((function(){var t=e(this).html();t=t.replace(/ ([^ ]*)$/,"&nbsp;$1"),e(this).html(t)}))})),jQuery(document).ready((function(e){if(e("#menuToggle").click((function(t){e(this).toggleClass("active"),e(".menuFull").slideToggle(300)})),"ontouchstart"in window){jQuery("body").on("touchstart click",".mainNav > .menu-item-has-children > a",(function(e){if(e.preventDefault(),"click"!==e.type){var t=jQuery(this).parent();t.hasClass("focus")?window.location=this.href:(t.toggleClass("focus"),t.siblings(".focus").removeClass("focus"))}}))}else jQuery(".mainNav").find("a").on("focus blur",(function(){jQuery(this).closest(".menu-item-has-children").toggleClass("focus")}))})),jQuery(document).ready((function(e){e("#searchToggle").click((function(t){t.preventDefault(),e(this).toggleClass("active"),e(".searchForm").fadeToggle(300),e(".searchField")[0].focus()}))})),wp.domReady((()=>{wp.blocks.unregisterBlockStyle("core/button",["default","outline","squared","fill"]),wp.blocks.registerBlockStyle("core/button",[{name:"default",label:"Default",isDefault:!0},{name:"outline",label:"Outline"},{name:"arrow",label:"Arrow"}]),wp.blocks.unregisterBlockStyle("core/image",["rounded"]),wp.blocks.unregisterBlockType("core/preformatted"),wp.blocks.unregisterBlockType("core/pullquote"),wp.blocks.unregisterBlockType("core/verse"),wp.blocks.unregisterBlockType("core/more"),wp.blocks.unregisterBlockType("core/nextpage"),wp.blocks.unregisterBlockType("core/archives"),wp.blocks.unregisterBlockType("core/calendar"),wp.blocks.unregisterBlockType("core/categories"),wp.blocks.unregisterBlockType("core/latest-comments"),wp.blocks.unregisterBlockType("core/latest-posts"),wp.blocks.unregisterBlockType("core/rss"),wp.blocks.unregisterBlockType("core/search"),wp.blocks.unregisterBlockType("core/tag-cloud"),wp.blocks.unregisterBlockVariation("core/embed","amazon-kindle"),wp.blocks.unregisterBlockVariation("core/embed","animoto"),wp.blocks.unregisterBlockVariation("core/embed","cloudup"),wp.blocks.unregisterBlockVariation("core/embed","collegehumor"),wp.blocks.unregisterBlockVariation("core/embed","crowdsignal"),wp.blocks.unregisterBlockVariation("core/embed","dailymotion"),wp.blocks.unregisterBlockVariation("core/embed","flickr"),wp.blocks.unregisterBlockVariation("core/embed","funnyordie"),wp.blocks.unregisterBlockVariation("core/embed","hulu"),wp.blocks.unregisterBlockVariation("core/embed","imgur"),wp.blocks.unregisterBlockVariation("core/embed","issuu"),wp.blocks.unregisterBlockVariation("core/embed","kickstarter"),wp.blocks.unregisterBlockVariation("core/embed","meetup-com"),wp.blocks.unregisterBlockVariation("core/embed","mixcloud"),wp.blocks.unregisterBlockVariation("core/embed","photobucket"),wp.blocks.unregisterBlockVariation("core/embed","polldaddy"),wp.blocks.unregisterBlockVariation("core/embed","reddit"),wp.blocks.unregisterBlockVariation("core/embed","reverbnation"),wp.blocks.unregisterBlockVariation("core/embed","screencast"),wp.blocks.unregisterBlockVariation("core/embed","scribd"),wp.blocks.unregisterBlockVariation("core/embed","slideshare"),wp.blocks.unregisterBlockVariation("core/embed","smugmug"),wp.blocks.unregisterBlockVariation("core/embed","speaker"),wp.blocks.unregisterBlockVariation("core/embed","speaker-deck"),wp.blocks.unregisterBlockVariation("core/embed","spotify"),wp.blocks.unregisterBlockVariation("core/embed","ted"),wp.blocks.unregisterBlockVariation("core/embed","tiktok"),wp.blocks.unregisterBlockVariation("core/embed","tumblr"),wp.blocks.unregisterBlockVariation("core/embed","videopress"),wp.blocks.unregisterBlockVariation("core/embed","wordpress"),wp.blocks.unregisterBlockVariation("core/embed","wordpress-tv")})),jQuery(document).ready((function(e){function t(t){var o=e(t).hasClass("open"),n=e(t).next(".hiddenContent");e(".expandBlock .toggleContent.open").removeClass("open"),e(".hiddenContent.open").slideUp().removeClass("open"),o||(e(t).addClass("open"),n.slideDown().addClass("open"))}e(".expandBlock .toggleContent").click((function(e){e.preventDefault(),t(this)})),e(".expandBlock").each((function(){e(".gform_wrapper .validation_error",this).length&&t(e(".toggleContent",this)[0])}))}));