(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-5c782118":"16a7d128","chunk-70e2bbf9":"c4d55f9e","chunk-b98d0d4a":"276424e2"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-5c782118":1,"chunk-70e2bbf9":1,"chunk-b98d0d4a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-5c782118":"6abf8e76","chunk-70e2bbf9":"b46e665d","chunk-b98d0d4a":"f83c00dc"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"35b3":function(e,t,n){"use strict";var r=n("c82a"),a=n.n(r);a.a},"538c":function(e,t,n){"use strict";var r=n("ab7c"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("div",[e._m(0),n("Nav")],1)]),n("main",[n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"show-d"},[e._v("RENATO OLIVEIRA "),n("span",[e._v("WEB")])])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("ul",[n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-house-user"}),e._v("Home")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/sobre"}},[n("i",{staticClass:"fas fa-running"}),e._v("Sobre")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/links"}},[n("i",{staticClass:"fas fa-gamepad"}),e._v("Links")])],1)])])},c=[],u={methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}};window.addEventListener("scroll",(function(){var e=document.querySelector("nav");e.classList.toggle("header-mini",window.scrollY>25)}));var s=u,l=(n("538c"),n("2877")),f=Object(l["a"])(s,i,c,!1,null,"f1275926",null),d=f.exports,p={components:{Nav:d}},h=p,m=(n("5c0b"),Object(l["a"])(h,a,o,!1,null,null,null)),v=m.exports,b=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e._m(0),n("section",{staticClass:"section-about"},[n("article",[e._m(1),n("p",[e._v(" +10 anos que trabalho na web com desenvolvimento frontend e gerenciamento de projetos digitais. Já fiz parte de equipes de TI, Comunicação & Marketing. Minha formação é Comunicação Web pela UNIP. ")]),n("h2",[e._v("Contato")]),n("p",[e._v(" Me encontre nessas redes: "),e._l(e.social,(function(e){return n("span",{key:e.id},[n("a",{attrs:{href:e.url,target:"_blank",title:e.title}},[n("i",{class:e.img,attrs:{"aria-hidden":"true"}})])])}))],2)])])])},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"section-hello"},[r("article",[r("h2",[e._v(" Olá,"),r("br"),e._v(" Sou o "),r("span",[e._v("Renato")]),r("br"),e._v(" Web Designer ")])]),r("figure",[r("img",{attrs:{src:n("c6d8"),alt:"Renato Oliveira Web",title:"Renato Oliveira Web"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(' Meu nome é Renato Oliveira, sou de São Paulo/SP, casado com a Delma, pai da Ana Luiza e da "Cyndi". Adepto ao café, água e '),n("a",{attrs:{href:"https://www.flickr.com/people/195006687@N08/",target:"_blank"}},[e._v("fotos")]),e._v(". ")])}],k={data:function(){return{social:[{title:"Linkedin",img:"fab fa-linkedin",url:"https://www.linkedin.com/in/renato7oliveira"},{title:"Github",img:"fab fa-github",url:"https://github.com/renato7oliveira"},{title:"Instagram",img:"fab fa-instagram",url:"https://www.instagram.com/renato7oliveira"}]}}},w=k,y=(n("35b3"),Object(l["a"])(w,g,_,!1,null,"8171e564",null)),E=y.exports;r["a"].use(b["a"]);var O="RENATO OLIVEIRA WEB",C=[{path:"/",meta:{title:O},component:E},{path:"/sobre",meta:{title:O+" · SOBRE"},component:function(){return n.e("chunk-5c782118").then(n.bind(null,"f820"))}},{path:"/links",meta:{title:O+" · LINKS"},component:function(){return n.e("chunk-b98d0d4a").then(n.bind(null,"b398"))}},{path:"/*",meta:{title:O+" · PÁGINA NÃO ENCONTRADA"},component:function(){return n.e("chunk-70e2bbf9").then(n.bind(null,"9703"))}}],T=new b["a"]({linkExactActiveClass:"link_active",routes:C});T.beforeEach((function(e,t,n){document.title=e.meta.title,document.description=e.meta.description,n()}));var j=T,A=n("becf"),N=n.n(A),S=n("eefc"),P=n.n(S);r["a"].config.productionTip=!1,P.a,N.a,new r["a"]({router:j,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},ab7c:function(e,t,n){},c6d8:function(e,t,n){e.exports=n.p+"img/renato-oliveira-web.758d5155.jpg"},c82a:function(e,t,n){}});
//# sourceMappingURL=app.5d2c68c5.js.map