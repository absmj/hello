(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{252:function(t,n,l){var content=l(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(67).default)("65ee74f3",content,!0,{sourceMap:!1})},253:function(t,n){},254:function(t,n,l){"use strict";l(252)},255:function(t,n,l){var r=l(66)(!1);r.push([t.i,".row iframe[data-v-24be0ed2]{width:100%;height:600px;padding:0!important}.row[data-v-24be0ed2]{position:relative;min-height:800px}.row>iframe[data-v-24be0ed2]{position:absolute;height:600px;top:0}",""]),t.exports=r},256:function(t,n,l){"use strict";l.r(n);var r=l(0),e=l(268),o=l(8),d=l(266),c=l.n(d);o.default.use(c.a);var m={props:["format","link","full","about"],components:{pdf:e.a},data:function(){var t;return t={modal:!0,page:2,pages:0,loading:!1,src:null,player:null},Object(r.a)(t,"loading",!0),Object(r.a)(t,"size",null),t},methods:{},created:function(){this.size=window.screen.width<769?45:30},mounted:function(){}},f=(l(254),l(41)),component=Object(f.a)(m,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",[l("b-modal",{ref:"mdl",attrs:{"no-close-on-backdrop":"",size:"xl",id:"modal-center",footerClass:"d-none",headerClass:"d-none",centered:"",bodyClass:"overflow-hidden",scrollable:""},model:{value:t.modal,callback:function(n){t.modal=n},expression:"modal"}},[l("b-container",{staticClass:"d-flex flex-column",class:"web"==t.format?"position-relative":"align-items-center"},[l("i",{staticClass:"fas fa-times c-p_ ml-auto text-white position-absolute",staticStyle:{top:"5px","z-index":"15"},style:{right:("pdf"==t.format&&45!=t.size?60:5)+"px"},on:{click:function(n){return t.$emit("modal")}}}),t._v(" "),"web"==t.format&&t.about.length>0?l("div",{staticClass:"d-flex flex-column align-items-center bg-white p-4"},[l("img",{staticClass:"logo img-fuild",attrs:{src:t.about[0]}}),t._v(" "),l("p",{staticClass:"pr-1 text-left overflow-auto",staticStyle:{"max-height":"450px"},domProps:{innerHTML:t._s(t.about[1])}})]):"web"==t.format?l("div",{staticClass:"row text-white"},[t.loading?l("div",{staticClass:"l-a-l d-flex justify-content-center align-items-center"},[l("i",{staticClass:"fas fa-times icn-close",staticStyle:{position:"absolute","font-size":".5em",cursor:"pointer","z-index":"999999999"},on:{click:function(n){t.loading=!1}}}),t._v(" "),l("i",{staticClass:"fas fa-spinner __l_api"})]):t._e(),t._v(" "),l("iframe",{attrs:{src:t.link,frameborder:"0"},on:{load:function(n){t.loading=!1}}})]):"pdf"==t.format?l("div",{attrs:{"d-flex":"","align-items-center":""}},[l("iframe",{attrs:{src:t.link,width:45==t.size?360:480,height:"600",allow:"autoplay"}})]):l("div",{staticClass:"d-flex align-items-center"},[l("youtube",{ref:"youtube",attrs:{width:45==t.size?360:720,"player-vars":{autoplay:1},"video-id":t.link}})],1)])],1)],1)}),[],!1,null,"24be0ed2",null);n.default=component.exports},260:function(t,n){},261:function(t,n){},262:function(t,n){},263:function(t,n){},264:function(t,n){},295:function(t,n,l){"use strict";l.r(n);var r={components:{Modal:l(256).default},data:function(){return{data:"programming",modal:!1,about:[],link:[null,!1],portfolio:{programming:[{title:"kale",lang:["php","vuejs"],logo:"kale.svg",year:2021,scr:"kale.png",info:'<strong>kale</strong> - <i>kakuro</i> oyunundan ilhamlanaraq hazırlanmış bu layihənin əsas hədəfi, yadda saxlanılması çətin olan rəqəm birləşmələrinin "oyun" halına gətirərək mənimsənilməsini asanlaşdırmaqdır. "Oyunda" tələb olunan cavablar kakuro oyunun şərtlərinə uyğun olaraq rəqəm cəmləri şəklində təqdim edilməlidir, bu isə öz növbəsində humanitar elmləri öyrənən şəxslərin eyni zamanda riyazi zəkasının da inkişaf etdirilməsinə tövhə verəcək. <br>\n                          Layihə, veb-əsaslı interfeys üzərində əsasən kliyent-yönümlü sorğular əsasında çalışır. Layihədə təqdim edilən suallar requlyar ifadələrin köməyilə avtomatik olaraq seçilir və oyun halında istifadəçiyə təqdim edilir. Burada üç meyar əsas götürülür:</p>\n                          <ol>\n                            <li><i>yalnız rəqəmlər</i> - Əsasən tarix məzmununda olan məlumatlar üçün istifadə edilən bu meyar zamanı cəmi 2-dən böyük 45-dən (kakuro oyunun qəfəs şərtlərinə müvafiq olaraq) kiçik ədədlər seçilir. Əgər seçilən ədəd 45-dən böyükdürsə o zaman bu ədəd rəqəmlərə ayrılır (məs. 1984 (19|8|4)) və istifadəçiyə ayrılmış qutular şəklində təqdim edilir. Əgər ayrılmış rəqəmlər [0 - 2] intervalındadırsa, bu zaman bu rəqəmlər nəzərə alınmır.</li>\n                            <li><i>xüsusi isimlər</i> - Layihənin bu funksiyası əsas konteksdən fərqlidir. Bu meyar zamanı cümlədəki xüsusi isimlər seçilir və istifadəçiyə təqdim edilir. Düzgün cavabı təşkil edən hərflər unikallaşdırılaraq (hər hərfdən bir ədəd) 8 qutuda istifadəçiyə təqdim edilir. Əgər unikallaşdırma zamanı hərflərin sayı 8-dən kiçikdirsə, qalan qutulara unikallığı gözləməklə təsadüfi hərflər daxil edilir. Məsələn AZƏRBAYCAN -> AZƏRBYCN</li>\n                            <li><i>istənilən</i> - Layihənin bu funksiyası da əsas konteksdən fərqlənir və prinsipcə yuxarıdakı meyara bənzəyir, lakin bu meyar cümlədən istənilən söz seçilə bilər</li>\n                          </ol>',link:"http://kale.eu5.org/"},{title:"wel! - watch, enjoy, learn!",lang:["php","vuejs"],logo:"wel.svg",year:2020,scr:"wel.png",info:'<strong>wel!</strong> - <i>watch, enjoy, learn</i> şüarı ilə hazırlanan bu layihənin hədəfi əcnəbi dillərin fərqli üsulda, daha əyləncəli formada öyrənilməsidir. Filmlərin, sənədli filmlərin və ya serialların subtitrlərin müşayiəti ilə göstərilməsi istifadəçidə həmin əcnəbi dilin sintaksisini müşahidə etməsinə şərait yaradacaq. Həmçinin, subtitrdəki hər hansı bir söz istifadəçiyə nabələddirsə, həmin sözün üzərinə klikləyərinin o sözü lüğətdə axtara bilər. Bundan əlavə, istifadəçinin söz ehtiyatını yoxlamaq məqsədilə məzmunun uzunluğundan asılı olaraq (<i>maksimum 4 dəfə</i>) yoxlayıcı imtahanlar yaradılır. Bu imtahanlardakı soruşulan sözlər, imtahan başladığı müddətə qədər subtitrlərdə göstərilən sözlərdən seçilir. Hər bir imtahan ümumilikdə 50 saniyə olmaqla 5 sözdən ibarətdir. İmtahan bitdikdən sonra nəticənizlə tanış olub, səhvlərinizi analiz edə bilərsiniz.  <br>\n                  wel! - layihəsi həmçinin geniş filterləmə dəstinə malikdir. Layihədə yaradılmış <a href= "/Filterlə"><i>"Filterlə"</i></a> aləti ilə istədiyiniz filmi daha rahatlıqla tapa bilərsiniz. Layihə <i>HTML5</i> və <i>ECMAScript 6</i> spesifikasiyasını tam dəstəkləyən brauzelərdə əlçatandır. Layihə demək olar ki, kliyent yönümlü olduğu üçün layihənin məhsuldarlığı istifadəçinin cihazından (minimum 512MB əməli yaddaş) asılıdır.</p>',link:"http://wel.az/"},{title:"Fleet Management System",lang:["html5","css3"],year:2019,scr:"fms.png",info:"IKT Lab-da təşkil olunan təcrübə proqramı əsasında hazırlanan front-end tərəfi",link:"http://wel.az/projects/fms"},{title:"Smart Home",lang:["html5","css3","js"],year:2019,scr:"sm.png",info:"IKT Lab-da təşkil olunan təcrübə proqramı əsasında hazırlanan front-end tərəfi",link:"http://wel.az/projects/smarthouse"}],books:[{title:"Unity - multiplatformalı mobil oyunların hazırlanması",year:2019,scr:"book-unity.png",full:!1,info:"IKT Lab-da təşkil olunan təcrübə proqramı əsasında hazırlanan front-end tərəfi",link:"https://drive.google.com/file/d/1Bwo0tOEcK5Xtd-xrai7WD7ciDBozgvC5/preview"},{title:"JavaScript - Ətraflı izah",year:2015,scr:"book-js.png",full:!0,info:"IKT Lab-da təşkil olunan təcrübə proqramı əsasında hazırlanan front-end tərəfi",link:"https://drive.google.com/file/d/1OkwfpAM_6RNCO3UqQ3EfWVTwSNe4Cy1l/preview"},{title:"PHP - Ətraflı izah",year:2015,scr:"book-php.jpg",full:!0,info:"IKT Lab-da təşkil olunan təcrübə proqramı əsasında hazırlanan front-end tərəfi",link:"https://drive.google.com/file/d/1cQAm3kKf5cxZPezNZcjAag9AZKHcfLwH/preview"}],graphic:[{title:"Lifecycle hooks in Vue.js | with animation | 90 second",year:2021,link:"45h-EKK9hNQ",editor:["ae","ai","ps"]},{title:"Bir qalanın sirri (film, 1959) - 2021 edition",year:2021,link:"xegjX4tN2so",editor:["ae","ps"]},{title:"Beyaz geceler — Night sky in Night mode",year:2021,link:"oCkJhN4wvLE",editor:["ae","ai"]},{title:"Elza Seyidcahan kod yazarsa - Clean Code",year:2021,link:"yjyor0HFiz0",editor:["ae","ai"]},{title:"Proqramlaşdırma və Meyxana",year:2021,link:"xV7mITvqaQY",editor:["ae","ai"]},{title:"Bir proqramçının intiharı",year:2021,link:"hgv2TxszMPE",editor:["ae","ai"]},{title:"Proqramçıların mahnısı",year:2021,link:"sel_1-xXeRY",editor:["ae","ai"]},{title:"Sehirli xalat (film, 1964) - 2019 edition",year:2019,link:"rFHzHD-oWzU",editor:["pp","ps"]},{title:"Liderlə Menecerin fərqi",year:2017,link:"BdGFHBE0MMY",editor:["pp","ps"]}],other:[{title:"GTA San Andeas Azərbaycan dilində",year:2013,link:"F654w0w6vJQ",editor:["ps"]}]}}},computed:{categorizePort:function(){return this.portfolio[this.data]}},created:function(){this.screen=window.screen.width}},e=l(41),component=Object(e.a)(r,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{staticClass:"window"},[l("h3",{staticClass:"p-0 pt-1 m-0"},[t._v("Portfolio")]),t._v(" "),l("hr"),t._v(" "),l("div",[l("b-tabs",{attrs:{"content-class":"mt-1",justified:"","nav-class":"flex-nowrap"}},[l("b-tab",{attrs:{title:t.screen<769?"</>":"Proqramlaşdırma",active:""},on:{click:function(n){t.data="programming"}}}),t._v(" "),l("b-tab",{attrs:{title:t.screen<769?"2D":"2-ölçülü qrafika"},on:{click:function(n){t.data="graphic"}}}),t._v(" "),l("b-tab",{attrs:{title:"Kitab"},on:{click:function(n){t.data="books"}}}),t._v(" "),l("b-tab",{attrs:{title:"Digər"},on:{click:function(n){t.data="other"}}})],1)],1),t._v(" "),l("transition",{attrs:{name:"fade"}},[l("div",{key:"3",staticClass:"row pt-5 mh-60 justify-content-center align-items-start"},t._l(t.categorizePort,(function(i,n){return l("div",{key:n,staticClass:"col-sm-12 col-md-6 mb-2 d-flex flex-column justify-content-center align-items-center"},[l("div",{staticClass:"port-item"},[l("div",{staticClass:"shadow"},[l("div",{staticClass:"btns"},[void 0!==i.lang?t._l(i.lang,(function(t,n){return l("i",{key:n,staticClass:"fab",class:"fa-"+t})})):t._e()],2),t._v(" "),"programming"==t.data?l("div",{staticClass:"btns"},[l("i",{staticClass:"fa fa-info-circle c-p_",attrs:{"aria-hidden":"true"},on:{click:function(n){t.modal=!0,t.about=[i.logo,i.info]}}}),t._v(" "),l("i",{staticClass:"fas fa-link c-p_",on:{click:function(n){t.modal=!0,t.link=[i.link,i.full]}}})]):"books"==t.data?l("div",{staticClass:"btns"},[l("i",{staticClass:"fas fa-eye fa-2x c-p_",on:{click:function(n){t.modal=!0,t.link=[i.link]}}})]):l("div",{staticClass:"btns"},[l("i",{staticClass:"fas fa-play fa-2x c-p_",on:{click:function(n){t.modal=!0,t.link=[i.link]}}})]),t._v(" "),l("div",{staticClass:"btns"},[l("span",[t._v(t._s(i.year))])])]),t._v(" "),l("div",{staticClass:"screen",style:{"background-image":"url("+(/(graphic|other)/.test(t.data)?"https://i.ytimg.com/vi/"+i.link+"/hqdefault.jpg":"/"+i.scr)+")"}})]),t._v(" "),l("p",[t._v(t._s(i.title))])])})),0)]),t._v(" "),t.modal?l("Modal",{attrs:{about:t.about,full:t.link[1],format:"books"==t.data?"pdf":/(graphic|other)/.test(t.data)?"video":"web",link:t.link[0]},on:{modal:function(n){t.modal=!1,t.about=[]}}}):t._e()],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Modal:l(256).default})}}]);