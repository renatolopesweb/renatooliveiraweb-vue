(function(t){function e(e){for(var r,a,c=e[0],l=e[1],u=e[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function c(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-0d7940b4":"4c37ec15","chunk-1b1bf17c":"65e41556","chunk-2d210c47":"6d240c5c"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-0d7940b4":1,"chunk-1b1bf17c":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0d7940b4":"36fd6660","chunk-1b1bf17c":"0c76961f","chunk-2d210c47":"31d6cfe0"}[t]+".css",i=l.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],s=u.getAttribute("data-href");if(s===r||s===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],d.parentNode.removeChild(d),n(o)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(t);var f=new Error;u=function(e){s.onerror=s.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2eda":function(t,e,n){"use strict";var r=n("a8c6"),a=n.n(r);a.a},4330:function(t,e,n){t.exports=n.p+"img/renato-oliveira-web-parati.f42fb990.jpg"},"538c":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"social"},[t._l(t.social,(function(e){return n("li",{key:e.id},[n("a",{attrs:{href:e.url,target:"_blank",title:e.title}},[n("i",{class:e.img,attrs:{"aria-hidden":"true"}}),t._v(t._s(e.title)+" ")])])})),t._m(0)],2)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("details",[n("summary",[n("i",{staticClass:"far fa-envelope",attrs:{"aria-hidden":"true"}}),t._v("E-mail ")]),n("p",[t._v("renato.ldeoliveira@gmail.com")])])])}],i={data:function(){return{social:[{title:"Linkedin",img:"fab fa-linkedin",url:"https://www.linkedin.com/in/renatooliveiraweb"},{title:"Github",img:"fab fa-github-alt",url:"https://github.com/renato7oliveira"},{title:"Instagram",img:"fab fa-instagram",url:"https://www.instagram.com/renatooliveiraweb"}]}}},o=i,c=n("2877"),l=Object(c["a"])(o,r,a,!1,null,null,null);e["a"]=l.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",[n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1),n("Nav")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[n("li",{on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-house-user"}),t._v(" Home")])],1),n("li",{on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/links"}},[n("i",{staticClass:"fas fa-link"}),t._v("Links")])],1),n("li",{on:{click:function(e){return t.toTop()}}},[n("router-link",{attrs:{to:"/contato"}},[n("i",{staticClass:"fas fa-share-alt"}),t._v("Contato")])],1)])])},c=[],l={methods:{toTop:function(){window.scrollTo({top:0})}}},u=l,s=(n("2eda"),n("2877")),f=Object(s["a"])(u,o,c,!1,null,"597a1666",null),d=f.exports,p={components:{Nav:d}},m=p,h=(n("5c0b"),Object(s["a"])(m,a,i,!1,null,null,null)),v=h.exports,b=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("header",[n("h1",[t._v("RENATO OLIVEIRA")]),n("h2",[n("svg",{staticClass:"animate-title",attrs:{height:"75",stroke:"#000","stroke-width":"2",width:"100%"}},[n("text",{attrs:{x:"50%","dominant-baseline":"middle","text-anchor":"middle",y:"25px"}},[t._v("front-end · web-design")])])])]),n("div",{staticClass:"about"},[t._m(0),n("article",[t._m(1),n("h2",[t._v("Contato")]),n("Social")],1)])])},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",[r("img",{attrs:{src:n("4330"),alt:"Renato Oliveira Web",title:"Renato Oliveira Web"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" Olá, meu nome é "),n("strong",[t._v("RENATO OLIVEIRA")]),t._v(", profissional de front-end e web-design. Obstinado desde 2009 em materializar ideias com meu conhecimento e experiência. Onipresente em Comunicação, Marketing e TI. Mais detalhes em meu "),n("a",{attrs:{href:"https://drive.google.com/file/d/1Xc1jfuPX1rzA3627AHtKe_HWVZaeaYr8/view?usp=sharing",target:"_blank"}},[t._v("currículo (PDF)")]),t._v(". ")])}],k=n("538c"),w={components:{Social:k["a"]}},O=w,y=(n("817f"),Object(s["a"])(O,g,_,!1,null,"f7d35fda",null)),E=y.exports;r["a"].use(b["a"]);var T="RENATO OLIVEIRA · ",C=[{path:"/",meta:{title:T+"FRONT-END · WEB-DESIGN"},component:E},{path:"/links",meta:{title:T+"LINKS"},component:function(){return n.e("chunk-1b1bf17c").then(n.bind(null,"b398"))}},{path:"/contato",meta:{title:T+"CONTATO"},component:function(){return n.e("chunk-2d210c47").then(n.bind(null,"b8fa"))}},{path:"/*",meta:{title:T+"NADA ENCONTRADO..."},component:function(){return n.e("chunk-0d7940b4").then(n.bind(null,"9703"))}}],A=new b["a"]({linkExactActiveClass:"link_active",routes:C});A.beforeEach((function(t,e,n){document.title=t.meta.title,document.description=t.meta.description,n()}));var x=A,N=n("becf"),j=n.n(N);r["a"].config.productionTip=!1,j.a,new r["a"]({router:x,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},7992:function(t,e,n){},"817f":function(t,e,n){"use strict";var r=n("7992"),a=n.n(r);a.a},"9c0c":function(t,e,n){},a8c6:function(t,e,n){}});
//# sourceMappingURL=app.261883aa.js.map