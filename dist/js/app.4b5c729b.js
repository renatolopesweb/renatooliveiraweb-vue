(function(e){function t(t){for(var r,a,c=t[0],l=t[1],s=t[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-5c782118":"16a7d128","chunk-70e2bbf9":"c4d55f9e","chunk-b98d0d4a":"276424e2"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-5c782118":1,"chunk-70e2bbf9":1,"chunk-b98d0d4a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-5c782118":"6abf8e76","chunk-70e2bbf9":"b46e665d","chunk-b98d0d4a":"f83c00dc"}[e]+".css",i=l.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],u=s.getAttribute("data-href");if(u===r||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"34aa":function(e,t,n){"use strict";var r=n("b37a"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("div",[e._m(0),n("Nav")],1)]),n("main",[n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"show-d"},[e._v("RENATO OLIVEIRA "),n("span",[e._v("WEB")])])}],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("ul",[n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-house-user"}),e._v("Home")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/links"}},[n("i",{staticClass:"fas fa-gamepad"}),e._v("Links")])],1)])])},c=[],l={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}};window.addEventListener("scroll",(function(){var e=document.querySelector("nav");e.classList.toggle("header-mini",window.scrollY>25)}));var s=l,u=(n("34aa"),n("2877")),d=Object(u["a"])(s,o,c,!1,null,"359757ee",null),f=d.exports,v={components:{Nav:f}},p=v,h=(n("5c0b"),Object(u["a"])(p,a,i,!1,null,null,null)),m=h.exports,b=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("section",{staticClass:"section-hello"},[n("article",[e._m(0),e._l(e.social,(function(e){return n("span",{key:e.id},[n("a",{attrs:{href:e.url,target:"_blank",title:e.title}},[n("i",{class:e.img,attrs:{"aria-hidden":"true"}})])])}))],2),e._m(1)]),e._m(2)])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[e._v(" Olá,"),n("br"),e._v(" Sou o "),n("span",[e._v("Renato")]),n("br"),e._v(" Web Designer ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",[r("img",{attrs:{src:n("c6d8"),alt:"Renato Oliveira Web",title:"Renato Oliveira Web"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section-about"},[n("article",[n("p",[e._v(' Meu nome é Renato Oliveira, sou de São Paulo, casado com a Delma, pai da Ana Luiza e da "Cyndi". +10 anos que trabalho na web com desenvolvimento frontend e gerenciamento de projetos digitais. ')]),n("h2",[e._v("Habilidades")]),n("div",{staticClass:"skills"},[n("div",[n("h2",[n("i",{staticClass:"fas fa-code",attrs:{"aria-hidden":"true"}}),e._v(" Code")]),n("ul",[n("li",[e._v("javaScript")]),n("li",[e._v("typeScript")]),n("li",[e._v("HTML5")]),n("li",[e._v("Sass / CSS")])])]),n("div",[n("h2",[n("i",{staticClass:"fas fa-tools",attrs:{"aria-hidden":"true"}}),e._v(" Framework")]),n("ul",[n("li",[e._v("Angular")]),n("li",[e._v("Electron")]),n("li",[e._v("Ionic")]),n("li",[e._v("Vue")])])]),n("div",[n("h2",[n("i",{staticClass:"fas fa-eye",attrs:{"aria-hidden":"true"}}),e._v(" Visual")]),n("ul",[n("li",[e._v("XD")]),n("li",[e._v("Photoshop")]),n("li",[e._v("Premiere")])])]),n("div",[n("h2",[n("i",{staticClass:"fas fa-bullhorn",attrs:{"aria-hidden":"true"}}),e._v(" Marketing ")]),n("ul",[n("li",[e._v("Wordpress")]),n("li",[e._v("E-mail mkt")])])])])])])}],k={data:function(){return{social:[{title:"Linkedin",img:"fab fa-linkedin",url:"https://www.linkedin.com/in/renatooliveiraweb"},{title:"Instagram",img:"fab fa-instagram",url:"https://www.instagram.com/renatooliveiraweb"},{title:"Github",img:"fab fa-github-alt",url:"https://github.com/renato7oliveira"}]}}},w=k,y=(n("58db"),Object(u["a"])(w,_,g,!1,null,"04fd4285",null)),E=y.exports;r["a"].use(b["a"]);var O="RENATO OLIVEIRA WEB",C=[{path:"/",meta:{title:O},component:E},{path:"/sobre",meta:{title:O+" · SOBRE"},component:function(){return n.e("chunk-5c782118").then(n.bind(null,"f820"))}},{path:"/links",meta:{title:O+" · LINKS"},component:function(){return n.e("chunk-b98d0d4a").then(n.bind(null,"b398"))}},{path:"/*",meta:{title:O+" · PÁGINA NÃO ENCONTRADA"},component:function(){return n.e("chunk-70e2bbf9").then(n.bind(null,"9703"))}}],S=new b["a"]({linkExactActiveClass:"link_active",routes:C});S.beforeEach((function(e,t,n){document.title=e.meta.title,document.description=e.meta.description,n()}));var j=S,A=n("becf"),T=n.n(A),L=n("eefc"),N=n.n(L);r["a"].config.productionTip=!1,N.a,T.a,new r["a"]({router:j,render:function(e){return e(m)}}).$mount("#app")},"58db":function(e,t,n){"use strict";var r=n("5f6c"),a=n.n(r);a.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5f6c":function(e,t,n){},"9c0c":function(e,t,n){},b37a:function(e,t,n){},c6d8:function(e,t,n){e.exports=n.p+"img/renato-oliveira-web.758d5155.jpg"}});
//# sourceMappingURL=app.4b5c729b.js.map