(function(t){function e(e){for(var r,n,c=e[0],l=e[1],s=e[2],u=0,f=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&f.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},n={app:0},o={app:0},i=[];function c(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-28e0d22c":"cb46876b","chunk-4f9e94f8":"00fd9564","chunk-578e23d8":"b3949ad2"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-28e0d22c":1,"chunk-4f9e94f8":1,"chunk-578e23d8":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-28e0d22c":"44ab311d","chunk-4f9e94f8":"11b79946","chunk-578e23d8":"0d0e0b2d"}[t]+".css",o=l.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],u=s.getAttribute("data-href");if(u===r||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],d.parentNode.removeChild(d),a(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(t);var f=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",f.name="ChunkLoadError",f.type=r,f.request=n,a[1](f)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4033:function(t,e,a){"use strict";var r=a("5a99"),n=a.n(r);n.a},"55da":function(t,e,a){"use strict";var r=a("e5a9"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Nav"),a("transition",{attrs:{name:"fade-view",mode:"out-in"}},[a("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("aside",{staticClass:"show-d"},[a("div",{staticClass:"nav-ico",on:{click:function(e){return t.nav()}}},[a("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})]),a("nav",[a("ul",[a("li",{on:{click:function(e){t.toTop(),t.overlay()}}},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),t._v("Home")])],1),a("li",{on:{click:function(e){t.toTop(),t.overlay()}}},[a("router-link",{attrs:{to:"/lab"}},[a("i",{staticClass:"fa fa-fighter-jet",attrs:{"aria-hidden":"true"}}),t._v("Trabalhos")])],1)])])]),a("div",{staticClass:"overlay",on:{click:function(e){return t.overlay()}}}),a("div",{staticClass:"nav-mobile show-m"},[a("div",{staticClass:"nav-link",on:{click:function(e){return t.toTop()}}},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),t._v("Home")])],1),a("div",{staticClass:"nav-link",on:{click:function(e){return t.toTop()}}},[a("router-link",{attrs:{to:"/lab"}},[a("i",{staticClass:"fa fa-fighter-jet",attrs:{"aria-hidden":"true"}}),t._v("Trabalhos")])],1),t._m(0)])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-link"},[a("a",{attrs:{href:"https://forms.gle/mdYVxaBnc1mziQ8KA",target:"_blank"}},[a("i",{staticClass:"fa fa-paper-plane",attrs:{"aria-hidden":"true"}}),t._v("Mensagem")])])}],l={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})},nav:function(){document.querySelector("aside").classList.toggle("nav-active"),document.querySelector(".overlay").classList.toggle("nav-block"),document.querySelector("body").style.overflow="hidden"},overlay:function(){document.querySelector("aside").classList.remove("nav-active"),document.querySelector(".overlay").classList.remove("nav-block"),document.querySelector("body").style.overflow="visible"}}},s=l,u=(a("4033"),a("2877")),f=Object(u["a"])(s,i,c,!1,null,"52cfd256",null),d=f.exports,p={components:{Nav:d}},m=p,v=(a("5c0b"),Object(u["a"])(m,n,o,!1,null,null,null)),h=v.exports,b=(a("a4d3"),a("e01a"),a("d3b7"),a("8c4f")),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("HomeAbout"),a("HomeSkills"),a("HomeLab")],1)},_=[],k=a("90d2"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[t._m(0),t._l(t.skills,(function(e,r){return a("div",{key:r},[a("h2",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.stack))])])}))],2)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",[a("i",{staticClass:"fa fa-code",attrs:{"aria-hidden":"true"}})])}],C={data:function(){return{skills:[{title:"Code",stack:"javaScript / HTML / CSS-Grid / Sass"},{title:"Framework",stack:"Angular / Vue.js / Bootstrap"},{title:"Visual",stack:"XD / Photoshop / Premiere"},{title:"Marketing",stack:"Wordpress / Newsletter / Landpage"}]}}},w=C,E=(a("55da"),Object(u["a"])(w,y,S,!1,null,"f8a8ddac",null)),j=E.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[t._m(0),a("ul",t._l(t.articles,(function(e,r){return a("li",{key:r},[a("a",{attrs:{href:e.url,title:e.description,target:"_blank"}},[t._v(t._s(e.title))]),a("br"),a("span",[t._v(t._s(e.stack))])])})),0),a("router-link",{staticClass:"btn btn_secondary",attrs:{to:"/lab"}},[a("button",[t._v("Ver mais")])])],1)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",[a("i",{staticClass:"fa fa-fighter-jet",attrs:{"aria-hidden":"true"}})])}],A={name:"Lab",data:function(){return{articles:[{title:"Desafio CSS - Clone Google",stack:"CSS-Grid",description:"Template genérico 100% CSS-Grid",url:"https://renato7oliveira.github.io/portfolio/Google_Clone/src/",screen:a("8f31")},{title:"Desafio CSS - Template Canyon",stack:"CSS-Grid",description:"Template genérico 100% CSS-Grid",url:"https://renato7oliveira.github.io/portfolio/Grid_CSS_Template_Canyon/",screen:a("e985")},{title:"Breaking Bad Tributo",stack:"Glide.js",description:"Página motivacional a testar o Glide.js",url:"https://renato7oliveira.github.io/portfolio/Breaking_Bad_Tributo/src/",screen:a("fbac")},{title:"Beatles Tributo",stack:"CSS3 Animation / Vue.js",description:"Página motivacional a testar animações CSS3",url:"https://renato7oliveira.github.io/portfolio/Beatles_Tributo/src/",screen:a("7d2d")},{title:"Street Fighter Tributo (old school)",stack:"Edge Animate",description:"Projeto interativo feito com Adobe Edge",url:"https://renato7oliveira.github.io/street-fighter-audio-project",screen:a("c926")}]}}},x=A,N=(a("5b7c"),Object(u["a"])(x,T,O,!1,null,"d30e76ea",null)),L=N.exports,P={components:{HomeAbout:k["a"],HomeSkills:j,HomeLab:L}},B=P,H=(a("c62e"),Object(u["a"])(B,g,_,!1,null,"055a1fea",null)),$=H.exports;r["a"].use(b["a"]);var G="RENATO7OLIVEIRA · ",R=[{path:"/",name:"Home",meta:{title:G+"FRONTEND · WEB",description:"RENATO7OLIVEIRA · FRONTEND · WEB"},component:$},{path:"/about",name:"about",meta:{title:G+"SOBRE"},component:function(){return a.e("chunk-578e23d8").then(a.bind(null,"f820"))}},{path:"/lab",name:"trabalhos",meta:{title:G+"TRABALHOS"},component:function(){return a.e("chunk-4f9e94f8").then(a.bind(null,"6cd1"))}},{path:"/*",name:"NotFound",meta:{title:G+"PÁGINA NÃO ENCONTRADA"},component:function(){return a.e("chunk-28e0d22c").then(a.bind(null,"9703"))}}],q=new b["a"]({linkExactActiveClass:"link_active",routes:R});q.beforeEach((function(t,e,a){document.title=t.meta.title,document.description=t.meta.description,a()}));var D=q,F=a("d5e8"),M=a.n(F),V=a("1f54"),I=a.n(V);r["a"].config.productionTip=!1,M.a,I.a,new r["a"]({router:D,render:function(t){return t(h)}}).$mount("#app")},"5a99":function(t,e,a){},"5b7c":function(t,e,a){"use strict";var r=a("bdeb"),n=a.n(r);n.a},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"7d2d":function(t,e,a){t.exports=a.p+"img/portfolio-beatles.8f9f144b.jpg"},"8f31":function(t,e,a){t.exports=a.p+"img/portfolio-google.9b01a213.jpg"},"90d2":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[t._m(0),t._m(1),a("p",[t._v("Sou casado com a Delma, pai da AnaLu e da “Cyndi”.")]),a("h2",[t._v("Fale comigo")]),a("ul",t._l(t.social,(function(e){return a("li",{key:e.id},[a("a",{attrs:{href:e.url,target:"_blank"}},[a("i",{class:e.img,attrs:{"aria-hidden":"true"}}),t._v(t._s(e.title))])])})),0)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",[r("img",{staticClass:"figure-class",attrs:{src:a("cf6a"),alt:"renato7oliveira",title:"renato7oliveira"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("Renato Oliveira")]),t._v(", 10+ anos que trabalho para empresas nas divisões de web, normalmente dedicado ao frontend e design. Apaixonado em ver o esboço tornar-se uma realidade digital e acessível. ")])}],o={data:function(){return{social:[{title:"linkedin.com/in/renato7oliveira",img:"fa fa-linkedin",url:"https://www.linkedin.com/in/renato7oliveira"},{title:"github.com/renato7oliveira",img:"fa fa-github",url:"https://github.com/renato7oliveira"},{title:"instagram.com/renato7oliveira",img:"fa fa-instagram",url:"https://www.instagram.com/renato7oliveira"},{title:"twitter.com/renato7oliveira",img:"fa fa-twitter",url:"https://twitter.com/renato7oliveira"},{title:"facebook.com/renato7oliveira",img:"fa fa-facebook",url:"https://facebook.com/renato7oliveira"}]}}},i=o,c=(a("a75e"),a("2877")),l=Object(c["a"])(i,r,n,!1,null,"17b18a4f",null);e["a"]=l.exports},"9c0c":function(t,e,a){},a75e:function(t,e,a){"use strict";var r=a("d845"),n=a.n(r);n.a},bdeb:function(t,e,a){},c62e:function(t,e,a){"use strict";var r=a("fd90"),n=a.n(r);n.a},c926:function(t,e,a){t.exports=a.p+"img/portfolio-street-fighter.8d5a81f8.jpg"},cf6a:function(t,e,a){t.exports=a.p+"img/renato7oliveira-about.04dfd9b3.gif"},d845:function(t,e,a){},e5a9:function(t,e,a){},e985:function(t,e,a){t.exports=a.p+"img/portfolio-template-canyon.768bf23b.jpg"},fbac:function(t,e,a){t.exports=a.p+"img/portfolio-scroll-behavior.19fb5523.jpg"},fd90:function(t,e,a){}});
//# sourceMappingURL=app.9955d0b5.js.map