(function(t){function e(e){for(var a,o,i=e[0],c=e[1],A=e[2],f=0,u=[];f<i.length;f++)o=i[f],s[o]&&u.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(u.length)u.shift()();return r.push.apply(r,A||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var A=0;A<i.length;A++)e(i[A]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"0e95":function(t,e,n){},"359c":function(t,e){t.exports="data:image/png;base64,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"},"4e68":function(t,e,n){"use strict";var a=n("e70c"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view")],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",[n("div",{staticClass:"name",on:{click:function(e){return e.stopPropagation(),t.goTo("/")}}},[t._v("\n      Felipe Ribeiro\n    ")]),n("div",[n("ul",[n("li",[n("a",{on:{click:function(e){return e.stopPropagation(),t.goTo("/work")}}},[t._v("Work")])]),n("li",[n("a",{on:{click:function(e){return e.stopPropagation(),t.goTo("/talk")}}},[t._v("Hello")])])])])])])},i=[],c={name:"NavBar",props:{msg:String},methods:{goTo:function(t){this.$router.push(t)}}},A=c,l=(n("f87b"),n("2877")),f=Object(l["a"])(A,o,i,!1,null,"6c29fbf6",null),u=f.exports,p={name:"app",components:{NavBar:u}},h=p,P=(n("034f"),Object(l["a"])(h,s,r,!1,null,null,null)),g=P.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"container"},[n("h3",[t._v("\n      Hi, I am a web developer working with react native and vuejs\n    ")]),n("br"),n("h3",[t._v("\n      You can check out some of my "),n("a",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.goTo("/work")}}},[t._v("work")])]),n("br"),n("h3",[t._v("\n      Or we can "),n("a",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.goTo("/talk")}}},[t._v("talk")])])])])},m=[],w={name:"Home",props:{msg:String},methods:{goTo:function(t){this.$router.push(t)}}},B=w,d=(n("f3a2"),Object(l["a"])(B,v,m,!1,null,"23f27232",null)),D=d.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"main",staticClass:"hello"},[n("div",{staticClass:"container"},[n("h3",{staticClass:"title"},[t._v("Phone to Chrome")]),n("h3",[t._v("Share texts and links between your phone and your pc")]),t._m(0),t._m(1),t._m(2),n("h3",{staticClass:"title"},[t._v("Santri Sistemas")]),n("h3",[t._v("Dashboard for a legacy system using Vuejs")]),t._m(3),n("h3",{staticClass:"title"},[t._v("Santri Sistemas")]),n("h3",[t._v("React Native app with authentication and backend in Java")]),t._m(4),n("br"),n("h3",[t._v("Let's\n      "),n("a",{staticClass:"link",on:{click:function(e){return e.stopPropagation(),t.goTo("talk")}}},[t._v("talk")])])])])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("React Native app reads a QR code on "),n("a",{staticClass:"link",attrs:{href:"https://ctop.site/"}},[t._v("ctop.site")]),t._v(" or the "),n("a",{staticClass:"link",attrs:{href:"https://chrome.google.com/webstore/detail/chrome-to-phone/hobhnejpjknnhojomhmppgdalddofend"}},[t._v("extension")]),t._v("   and a chat is created")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("a",{attrs:{href:"https://github.com/ribas14/phone-to-chrome",target:"blank"}},[a("img",{staticStyle:{width:"50px",float:"right"},attrs:{src:n("359c"),alt:"Snow"}})])]),a("div",{staticClass:"column"},[a("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.felri.phonetochrome",target:"blank"}},[a("img",{staticStyle:{width:"50px"},attrs:{src:n("f510"),alt:"Snow"}})])]),a("div",{staticClass:"column"},[a("a",{attrs:{href:"https://ctop.site/",target:"blank"}},[a("img",{staticStyle:{width:"50px",float:"left"},attrs:{src:n("6929"),alt:"Snow"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video"},[n("div",{staticStyle:{width:"100%",height:"0px",position:"relative","padding-bottom":"200.000%"}},[n("iframe",{staticStyle:{width:"100%",height:"100%",position:"absolute",left:"0px",top:"0px",overflow:"hidden"},attrs:{src:"https://streamable.com/s/dsr8r/hqekjx",frameborder:"0",width:"100%",height:"100%",allowfullscreen:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video"},[n("div",{staticStyle:{width:"100%",height:"0px",position:"relative","padding-bottom":"51.095%"}},[n("iframe",{staticStyle:{width:"100%",height:"100%",position:"absolute",left:"0px",top:"0px",overflow:"hidden"},attrs:{src:"https://streamable.com/s/gkre8/lwekca",frameborder:"0",width:"100%",height:"100%",allowfullscreen:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video"},[n("div",{staticStyle:{width:"100%",height:"0px",position:"relative","padding-bottom":"177.345%"}},[n("iframe",{staticStyle:{width:"100%",height:"100%",position:"absolute",left:"0px",top:"0px",overflow:"hidden"},attrs:{src:"https://streamable.com/s/ukymp/kjoard",frameborder:"0",width:"100%",height:"100%",allowfullscreen:""}})])])}],k={name:"Work",data:function(){return{heigth:480}},watch:{},mounted:function(){this.heigth=window.innerHeight},props:{msg:String},methods:{goTo:function(t){this.$router.push(t)}}},j=k,x=(n("f608"),Object(l["a"])(j,b,C,!1,null,"b6e2b74e",null)),y=x.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"container"},[n("h3",[t._v("\n      You can find me on "),n("a",{staticClass:"link",attrs:{href:"https://www.linkedin.com/in/frcm/",target:"blank"}},[t._v("Linkedin")]),t._v(" or check out my "),n("a",{staticClass:"link",attrs:{href:"https://github.com/ribas14",target:"blank"}},[t._v("Github")])]),n("br"),n("h3",{staticStyle:{"text-align":"center"}},[t._v("\n      Want to talk? Send me an email at  "),n("a",{staticClass:"link email",attrs:{hre:"mailto:felipercmelo@gmail.com"}},[t._v("felipercmelo@gmail.com")])]),n("br")])])}],H={name:"Talk",props:{msg:String},methods:{goTo:function(t){this.$router.push(t)}}},I=H,Q=(n("4e68"),Object(l["a"])(I,_,O,!1,null,"2a6fb168",null)),E=Q.exports,M=n("8c4f");a["a"].use(M["a"]),a["a"].config.productionTip=!1;var S=new M["a"]({mode:"history",routes:[{path:"/",component:D},{path:"/talk",component:E},{path:"/work",component:y}]});new a["a"]({router:S,render:function(t){return t(g)}}).$mount("#app")},"64a9":function(t,e,n){},6929:function(t,e,n){t.exports=n.p+"img/site.20787027.webp"},9352:function(t,e,n){},aea0:function(t,e,n){},e70c:function(t,e,n){},f3a2:function(t,e,n){"use strict";var a=n("9352"),s=n.n(a);s.a},f510:function(t,e,n){t.exports=n.p+"img/google_play.38d62731.png"},f608:function(t,e,n){"use strict";var a=n("0e95"),s=n.n(a);s.a},f87b:function(t,e,n){"use strict";var a=n("aea0"),s=n.n(a);s.a}});
//# sourceMappingURL=app.bb29f62c.js.map