(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{269:function(t,l,n){"use strict";n.r(l);n(34),n(9),n(17),n(194);var r={data:function(){return{h:!0,a:"Əsas fəaliyyətim front-end proqramlaşdırmadır. 2011-ci ildən proqramlaşdırma biliklərinə yiyələnirəm. Boş vaxtlarımda gələcək hədəflərim üçün 3-ölçülü qrafika məşğul olub, təcrübə toplamağa çalışıram. Məncə bu qədər kifayətdir, necə deyərlər ''əməlsiz sözlər kəsərsiz qılınc kimidir''. İndi isə, gəlin sizə öz kiçik portfoliomu göstərim.",i:0,cursiv:[],z:0}},methods:{typewriter:function(){var t=this,l=function(){t.i+=1,t.i>=t.a.length&&clearInterval(n)},n=setInterval(l,25)}},watch:{i:function(){this.i==this.cursiv[this.z]&&(this.a=this.a.replace(/''(.*?)''/,'<i>"$1"</i>')),this.cursiv[this.z]<=this.i&&(this.z+=1)}},mounted:function(){for(var t=/''(.*?)''/gm;t.exec(this.a);)this.cursiv.push(t.lastIndex)}},e=n(41),component=Object(e.a)(r,(function(){var t=this,l=t.$createElement,n=t._self._c||l;return n("div",[n("div",{staticClass:"first"},[n("img",{staticClass:"profile img-fuild",attrs:{src:"/profile.jpg"}}),t._v(" "),n("h3",[t._v("Salam!")]),t._v(" "),n("div",{staticClass:"hello pl-3",staticStyle:{"font-size":"var(--fn)"}},[n("p",[t._v("Mənim adım Abbasdı.")]),t._v(" "),n("p",{staticClass:"text-justify"},[n("span",{domProps:{innerHTML:t._s(0==t.i?"Gəl daha yaxından tanış olaq!":t.a.substr(0,t.i))}}),t._v(" "),n("span",{staticClass:"ml-1 blink infblink",class:t.i==t.a.length&&"infblink"})]),t._v(" "),0==t.i?n("div",{staticClass:"btn",on:{click:t.typewriter}},[n("i",{staticClass:"fa fa-angle-down"})]):t.i==t.a.length?n("nuxt-link",{attrs:{title:"Portfolio",to:"/portfolio"}},[n("div",{staticClass:"btn",on:{click:function(l){return t.$nuxt.$emit("nav")}}},[n("i",{staticClass:"fa fa-angle-up"})])]):t._e()],1)])])}),[],!1,null,null,null);l.default=component.exports}}]);