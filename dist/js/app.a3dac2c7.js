(function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-15283e4b":"4a450bd5","chunk-6d80ae6f":"510ff9b4","chunk-8a103682":"d9975673"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-15283e4b":1,"chunk-6d80ae6f":1,"chunk-8a103682":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-15283e4b":"75ac5ba3","chunk-6d80ae6f":"943e9fe9","chunk-8a103682":"7b4990f2"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0900":function(e,t,n){"use strict";var r=n("3ad9"),a=n.n(r);a.a},"3ad9":function(e,t,n){},5091:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("aside",[n("Nav")],1),n("main",[n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1)])},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("ul",[n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-house-user"}),e._v("Home")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/skills"}},[n("i",{staticClass:"fas fa-chess-knight"}),e._v("Skills")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/links"}},[n("i",{staticClass:"fas fa-link"}),e._v("Links")])],1)])])},c=[],u={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},l=u,s=(n("0900"),n("2877")),f=Object(s["a"])(l,i,c,!1,null,"61c49f2e",null),d=f.exports,p={components:{Nav:d}},h=p,m=(n("5c0b"),Object(s["a"])(h,a,o,!1,null,null,null)),v=m.exports,b=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e._m(0),n("article",[n("div",{staticClass:"description"},[n("h2",[e._v("Sobre")]),e._m(1),n("p",[e._v("Pai da Ana Luiza e da “Cyndi”.")]),n("h3",[e._v("Redes Sociais")]),n("ul",e._l(e.social,(function(t){return n("li",{key:t.id},[n("a",{attrs:{href:t.url,target:"_blank",title:t.title}},[n("i",{class:t.img,attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(t.title))])])})),0)]),e._m(2)])])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("RENATO OLIVEIRA")]),n("h2",[e._v("FRONT-END DESIGNER")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Olá, sou o "),n("strong",[e._v("RENATO OLIVEIRA")]),e._v(", moro em São Paulo/SP, formado em Comunicação Web pela UNIP. +10 anos trabalhando com front-end e design (UI). Onipresente em áreas de Comunicação, Marketing e TI. ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",[r("img",{attrs:{src:n("c6d8"),alt:"Renato Oliveira Web",title:"Renato Oliveira Web"}})])}],_={data:function(){return{social:[{title:"Linkedin",img:"fab fa-linkedin",url:"https://www.linkedin.com/in/renatooliveiraweb"},{title:"Instagram",img:"fab fa-instagram",url:"https://www.instagram.com/renatooliveiraweb"},{title:"Github",img:"fab fa-github-alt",url:"https://github.com/renato7oliveira"}]}}},w=_,y=(n("ef80"),Object(s["a"])(w,g,k,!1,null,"bc709d1e",null)),E=y.exports;r["a"].use(b["a"]);var O="RENATO OLIVEIRA WEB",N=[{path:"/",meta:{title:O+" · HOME"},component:E},{path:"/skills",meta:{title:O+" · SKILLS"},component:function(){return n.e("chunk-15283e4b").then(n.bind(null,"ad83"))}},{path:"/links",meta:{title:O+" · LINKS"},component:function(){return n.e("chunk-8a103682").then(n.bind(null,"b398"))}},{path:"/*",meta:{title:O+" · PÁGINA NÃO ENCONTRADA"},component:function(){return n.e("chunk-6d80ae6f").then(n.bind(null,"9703"))}}],T=new b["a"]({linkExactActiveClass:"link_active",routes:N});T.beforeEach((function(e,t,n){document.title=e.meta.title,document.description=e.meta.description,n()}));var S=T,A=n("becf"),C=n.n(A);r["a"].config.productionTip=!1,C.a,new r["a"]({router:S,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},c6d8:function(e,t,n){e.exports=n.p+"img/renato-oliveira-web.e84f604d.jpg"},ef80:function(e,t,n){"use strict";var r=n("5091"),a=n.n(r);a.a}});
//# sourceMappingURL=app.a3dac2c7.js.map