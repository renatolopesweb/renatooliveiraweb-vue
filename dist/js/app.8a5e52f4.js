(function(e){function t(t){for(var a,r,c=t[0],l=t[1],u=t[2],s=0,d=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-19ed7a0a":"c4018b37","chunk-1c153a97":"d7dfaabc","chunk-1c7fd4e7":"de5ca612","chunk-337c61ca":"857ca6d9","chunk-630c3a43":"fff0a7e1","chunk-9452f656":"7723d7cf"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-19ed7a0a":1,"chunk-1c153a97":1,"chunk-1c7fd4e7":1,"chunk-630c3a43":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-19ed7a0a":"4745f64d","chunk-1c153a97":"dc1bae28","chunk-1c7fd4e7":"9e1fddd8","chunk-337c61ca":"31d6cfe0","chunk-630c3a43":"785f760d","chunk-9452f656":"31d6cfe0"}[e]+".css",o=l.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===a||s===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],s=u.getAttribute("data-href");if(s===a||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var d=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b7c":function(e,t,n){},"434d":function(e,t,n){"use strict";var a=n("7d9c"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"app"}},[n("section",[n("transition",{attrs:{name:"fade-view",mode:"out-in"}},[n("router-view")],1)],1),n("aside",[n("Nav")],1)])},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("nav",[n("ul",[n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fas fa-house-user"}),e._v("Sobre")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/frontend"}},[n("i",{staticClass:"fas fa-code"}),e._v("Frontend")])],1),n("li",{on:{click:function(t){return e.toTop()}}},[n("router-link",{attrs:{to:"/design"}},[n("i",{staticClass:"fab fa-sketch"}),e._v("Design")])],1)])])])},c=[],l={methods:{toTop:function(){window.scrollTo({top:0})}}},u=l,s=(n("bcd3"),n("2877")),d=Object(s["a"])(u,i,c,!1,null,"f8365a0e",null),f=d.exports,p={components:{Nav:f}},h=p,m=(n("5c0b"),Object(s["a"])(h,r,o,!1,null,null,null)),v=m.exports,b=(n("a4d3"),n("e01a"),n("d3b7"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[e._m(0),n("article",[n("h2",[e._v(" 10+ anos trabalhando em divisões web, normalmente dedicado ao front-end e UX/UI. ")]),n("p",[e._v(" Iniciei em agências com clientes de todos os portes, também já ocupei cargos voltado para gestão de projetos web. ")]),n("p",[e._v(' Moro em São Paulo, sou casado com a Delma, pai da Ana Luiza e da "Cyndi". ')]),n("h2",[e._v("Contato")]),n("ul",e._l(e.social,(function(t){return n("li",{key:t.id},[n("a",{attrs:{href:t.url,target:"_blank",title:"Abrirá em nova aba"}},[n("i",{class:t.img,attrs:{"aria-hidden":"true"}}),e._v(e._s(t.title))])])})),0),n("h2",[e._v("Feedback para este site")]),n("div",{staticClass:"grid-default"},e._l(e.feedback,(function(t,a){return n("article",{key:a},[n("a",{attrs:{href:t.url,target:"_blank",title:t.alt}},[n("div",{staticClass:"icon"},[n("i",{class:t.img,attrs:{"aria-hidden":"true"}})]),n("div",[n("h2",[e._v(e._s(t.title))])])])])})),0)])])},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("figure",[a("img",{attrs:{src:n("cf6a"),alt:"renato7oliveira",title:"renato7oliveira"}})]),a("div",[a("h1",[e._v("RENATO7OLIVEIRA")]),a("h2",[e._v("WEBDESIGNER")])])])}],E={components:{},data:function(){return{social:[{title:"linkedin.com/in/renato7oliveira",img:"fab fa-linkedin",url:"https://www.linkedin.com/in/renato7oliveira"},{title:"github.com/renato7oliveira",img:"fab fa-github",url:"https://github.com/renato7oliveira"},{title:"instagram.com/renato7oliveira",img:"fab fa-instagram",url:"https://www.instagram.com/renato7oliveira"},{title:"facebook.com/renato7oliveira",img:"fab fa-facebook",url:"https://facebook.com/renato7oliveira"}],feedback:[{title:"Mobile Friendly Test",img:"fas fa-gamepad",url:"https://bit.ly/3nbj8x7",alt:"Este site é otimizado para mobile?"},{title:"Google Speed Test",img:"fas fa-tachometer-alt",url:"https://bit.ly/2YBTLKT",alt:"Velocidade deste site!"},{title:"Enviar Mensagem",img:"far fa-paper-plane",url:"https://bit.ly/3BRW6iY",alt:"Me envie uma mensagem!"}]}}},_=E,y=(n("434d"),Object(s["a"])(_,g,k,!1,null,"1c671e16",null)),w=y.exports;a["a"].use(b["a"]);var O="RENATO7OLIVEIRA · ",T=[{path:"/",meta:{title:O+"WEBDESIGNER",description:"RENATO7OLIVEIRA · WEBDESIGNER"},component:w},{path:"/skills",meta:{title:O+"HABILIDADES"},component:function(){return n.e("chunk-19ed7a0a").then(n.bind(null,"ad83"))}},{path:"/frontend",meta:{title:O+"FRONTEND"},component:function(){return n.e("chunk-337c61ca").then(n.bind(null,"6586"))}},{path:"/frontend-detalhe",name:"FrontendDetail",meta:{title:O+"FRONTEND · DETALHE"},component:function(){return n.e("chunk-630c3a43").then(n.bind(null,"0d98"))}},{path:"/design",meta:{title:O+"DESIGN"},component:function(){return n.e("chunk-9452f656").then(n.bind(null,"0b64"))}},{path:"/video",meta:{title:O+"VIDEO"},component:function(){return n.e("chunk-1c153a97").then(n.bind(null,"81a8"))}},{path:"/*",meta:{title:O+"PÁGINA NÃO ENCONTRADA"},component:function(){return n.e("chunk-1c7fd4e7").then(n.bind(null,"9703"))}}],N=new b["a"]({linkExactActiveClass:"link_active",routes:T});N.beforeEach((function(e,t,n){document.title=e.meta.title,document.description=e.meta.description,n()}));var A=N,j=n("becf"),I=n.n(j);a["a"].config.productionTip=!1,I.a,new a["a"]({router:A,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"7d9c":function(e,t,n){},"9c0c":function(e,t,n){},bcd3:function(e,t,n){"use strict";var a=n("1b7c"),r=n.n(a);r.a},cf6a:function(e,t,n){e.exports=n.p+"img/renato7oliveira-about.6ac0daa1.gif"}});
//# sourceMappingURL=app.8a5e52f4.js.map