(function(e){function t(t){for(var r,o,c=t[0],l=t[1],s=t[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-1c825515":"4066a40f","chunk-43557f75":"d50cdad4","chunk-67a7b1ec":"eef81256","chunk-722f2210":"65501782"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-1c825515":1,"chunk-43557f75":1,"chunk-67a7b1ec":1,"chunk-722f2210":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1c825515":"624253ef","chunk-43557f75":"5b55d6b0","chunk-67a7b1ec":"be63df29","chunk-722f2210":"cda1d983"}[e]+".css",a=l.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],u=s.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var f=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3a11":function(e,t,n){"use strict";var r=n("a21f"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav"),n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",[e._m(0),n("nav",{staticClass:"hide_mobile"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("home")])],1),n("li",[n("router-link",{attrs:{to:"/portfolio"}},[e._v("portfolio")])],1),n("li",[n("router-link",{attrs:{to:"/sobre"}},[e._v("sobre")])],1)])])]),e._m(1),n("nav",[n("div",{staticClass:"overlay"}),n("div",{staticClass:"sidebar"},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"material-icons md-home"}),e._v(" home")])],1),n("li",[n("router-link",{attrs:{to:"/portfolio"}},[n("i",{staticClass:"material-icons md-layers"}),e._v(" portfolio")])],1),n("li",[n("router-link",{attrs:{to:"/sobre"}},[n("i",{staticClass:"material-icons md-person_outline"}),e._v(" sobre")])],1)])])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("renato"),n("span",{staticClass:"style_1"},[e._v("7")]),e._v("oliveira")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mobile_menu show_mobile"},[n("i",{staticClass:"material-icons-outline md-menu"})])}],l=(n("a499"),n("2877")),s={},u=Object(l["a"])(s,i,c,!1,null,"1173559a",null),f=u.exports,d={components:{Nav:f}},p=d,m=(n("5c0b"),Object(l["a"])(p,o,a,!1,null,null,null)),v=m.exports,h=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("article",[e._m(0),n("p",[e._v("Olá, meu nome é Renato Oliveira, trabalho com desenvolvimento frontend para web e webdesign.")]),n("router-link",{staticClass:"btn btn_primary",attrs:{to:"/portfolio"}},[n("i",{staticClass:"material-icons-outline md-layers"}),e._v(" portfolio")])],1)])},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v("renato"),n("span",{staticClass:"style_1"},[e._v("7")]),e._v("oliveira")])}],g=(n("3a11"),{}),y=Object(l["a"])(g,b,_,!1,null,"52341e80",null),k=y.exports;r["a"].use(h["a"]);var w="renato7oliveira · ",C=[{path:"/",name:"Home",meta:{title:w+"frontend · webdesign",description:"renato7oliveira · frontend · webdesign"},component:k},{path:"/sobre",name:"sobre",meta:{title:w+"sobre"},component:function(){return n.e("chunk-43557f75").then(n.bind(null,"f820"))}},{path:"/portfolio",name:"Portfolio",meta:{title:w+"portfolio"},component:function(){return n.e("chunk-722f2210").then(n.bind(null,"6cd1"))}},{path:"/portfolio-detalhe",name:"PortfolioDetalhe",meta:{title:w+"detalhe"},component:function(){return n.e("chunk-67a7b1ec").then(n.bind(null,"fe45"))}},{path:"/*",name:"NotFound",meta:{title:w+"página não encontrada"},component:function(){return n.e("chunk-1c825515").then(n.bind(null,"9703"))}}],E=new h["a"]({linkExactActiveClass:"link_active",routes:C});E.beforeEach((function(e,t,n){document.title=e.meta.title,document.description=e.meta.description,n()}));var O=E,j=n("d5e8"),S=n.n(j),P=n("05b9"),x=n.n(P),L=n("1f54"),T=n.n(L);r["a"].config.productionTip=!1,S.a,x.a,T.a,new r["a"]({router:O,render:function(e){return e(v)}}).$mount("#app");var N=document.querySelector(".sidebar"),q=document.querySelector(".overlay");function A(){window.scrollTo({top:0,behavior:"smooth"})}document.querySelector(".mobile_menu").onclick=function(){N.classList.toggle("active"),q.classList.toggle("ds_block")},document.querySelector(".sidebar").onclick=function(){N.classList.toggle("active"),q.classList.toggle("ds_block"),A()},document.querySelector(".overlay").onclick=function(){N.classList.toggle("active"),q.classList.toggle("ds_block")}},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"7e9c":function(e,t,n){},"9c0c":function(e,t,n){},a21f:function(e,t,n){},a499:function(e,t,n){"use strict";var r=n("7e9c"),o=n.n(r);o.a}});
//# sourceMappingURL=app.fae94c48.js.map