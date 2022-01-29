
    <template id="portfolio">
      <div class="window">
          <h3 class="p-0 pt-1 m-0">Portfolio</h3>
          <hr>
        <div>
          <b-tabs content-class="mt-1" justified nav-class="flex-nowrap">
            <b-tab :title="screen<769?'</>':'Proqramlaşdırma'" active @click="data='programming'"></b-tab>
            <b-tab :title="screen<769?'2D':'2-ölçülü qrafika'" @click="data='graphic'"></b-tab>
            <b-tab title="Kitab" @click="data='books'"></b-tab>
            <b-tab title="Digər" @click="data='other'"></b-tab>
          </b-tabs>
        </div>


          <transition name="fade">
            <div class="row pt-5 mh-60 justify-content-center align-items-start" key=3>
              <div v-for="(i, k) in categorizePort" :key="k" class="col-sm-12 col-md-6 mb-2 d-flex flex-column justify-content-center align-items-center">
                <div class="port-item">        
                  <div class="shadow">

                    <div class="btns">
                      <template v-if="i.lang !== undefined">
                        <i v-for="(l, z) in i.lang" :key="z" class='fab' :class="`fa-${l}`"></i>
                      </template>
                      
                    </div>

                    <div class="btns" v-if="data == 'programming'">
                      <i @click="modal = true, about = [i.logo, i.info]" class="fa fa-info-circle c-p_" aria-hidden="true"></i>
                      <i @click="modal = true, link=[i.link, i.full]" class="fas fa-link c-p_"></i>
                    </div>

                    <div class="btns" v-else-if="data == 'books'">
                      <i @click="modal = true, link=[i.link]" class="fas fa-eye fa-2x c-p_"></i>
                    </div>

                    <div class="btns" v-else>
                      <i @click="modal = true, link=[i.link]" class="fas fa-play fa-2x c-p_"></i>
                    </div>

                    <div class="btns">
                      <span>{{i.year}}</span>
                    </div>

                  </div>
                  
                  <div class="screen" :style="{'background-image': `url(${/(graphic|other)/.test(data) ? ('https://i.ytimg.com/vi/'+i.link+'/hqdefault.jpg') : ('/'+i.scr)})`}">
                  </div>
                </div>
                <p>{{i.title}}</p>
              </div>
            </div>
          </transition>
          <Modal v-if="modal" @modal="modal=false,about=[]" :about="about" :full="link[1]" :format="data=='books'?'pdf':(/(graphic|other)/.test(data)?'video':'web')" :link="link[0]" />
      </div>  
    </template>
  
<script>
import Modal from "@/components/Modal.vue"

export default ({
components: {Modal},
data(){
        return{
              data: 'programming',
              modal: false,
              about: [],
              link: [null, false],
              portfolio:{
                programming: [{
                  title: "kale",
                  lang: ["php", "vuejs"],
                  logo: 'kale.svg',
                  year: 2021,
                  scr: "kale.png",
                  info: `<strong>kale</strong> - <i>kakuro</i> oyunundan ilhamlanaraq hazırlanmış bu layihənin əsas hədəfi, yadda saxlanılması çətin olan rəqəm birləşmələrinin "oyun" halına gətirərək mənimsənilməsini asanlaşdırmaqdır. "Oyunda" tələb olunan cavablar kakuro oyunun şərtlərinə uyğun olaraq rəqəm cəmləri şəklində təqdim edilməlidir, bu isə öz növbəsində humanitar elmləri öyrənən şəxslərin eyni zamanda riyazi zəkasının da inkişaf etdirilməsinə tövhə verəcək. <br>
                          Layihə, veb-əsaslı interfeys üzərində əsasən kliyent-yönümlü sorğular əsasında çalışır. Layihədə təqdim edilən suallar requlyar ifadələrin köməyilə avtomatik olaraq seçilir və oyun halında istifadəçiyə təqdim edilir. Burada üç meyar əsas götürülür:</p>
                          <ol>
                            <li><i>yalnız rəqəmlər</i> - Əsasən tarix məzmununda olan məlumatlar üçün istifadə edilən bu meyar zamanı cəmi 2-dən böyük 45-dən (kakuro oyunun qəfəs şərtlərinə müvafiq olaraq) kiçik ədədlər seçilir. Əgər seçilən ədəd 45-dən böyükdürsə o zaman bu ədəd rəqəmlərə ayrılır (məs. 1984 (19|8|4)) və istifadəçiyə ayrılmış qutular şəklində təqdim edilir. Əgər ayrılmış rəqəmlər [0 - 2] intervalındadırsa, bu zaman bu rəqəmlər nəzərə alınmır.</li>
                            <li><i>xüsusi isimlər</i> - Layihənin bu funksiyası əsas konteksdən fərqlidir. Bu meyar zamanı cümlədəki xüsusi isimlər seçilir və istifadəçiyə təqdim edilir. Düzgün cavabı təşkil edən hərflər unikallaşdırılaraq (hər hərfdən bir ədəd) 8 qutuda istifadəçiyə təqdim edilir. Əgər unikallaşdırma zamanı hərflərin sayı 8-dən kiçikdirsə, qalan qutulara unikallığı gözləməklə təsadüfi hərflər daxil edilir. Məsələn AZƏRBAYCAN -> AZƏRBYCN</li>
                            <li><i>istənilən</i> - Layihənin bu funksiyası da əsas konteksdən fərqlənir və prinsipcə yuxarıdakı meyara bənzəyir, lakin bu meyar cümlədən istənilən söz seçilə bilər</li>
                          </ol>`,
                  link: 'http://kale.eu5.org/'
                },

                {
                  title: "wel! - watch, enjoy, learn!",
                  lang: ["php", "vuejs"],
                  logo: 'wel.svg',
                  year: 2020,
                  scr: "wel.png",
                  info: `<strong>wel!</strong> - <i>watch, enjoy, learn</i> şüarı ilə hazırlanan bu layihənin hədəfi əcnəbi dillərin fərqli üsulda, daha əyləncəli formada öyrənilməsidir. Filmlərin, sənədli filmlərin və ya serialların subtitrlərin müşayiəti ilə göstərilməsi istifadəçidə həmin əcnəbi dilin sintaksisini müşahidə etməsinə şərait yaradacaq. Həmçinin, subtitrdəki hər hansı bir söz istifadəçiyə nabələddirsə, həmin sözün üzərinə klikləyərinin o sözü lüğətdə axtara bilər. Bundan əlavə, istifadəçinin söz ehtiyatını yoxlamaq məqsədilə məzmunun uzunluğundan asılı olaraq (<i>maksimum 4 dəfə</i>) yoxlayıcı imtahanlar yaradılır. Bu imtahanlardakı soruşulan sözlər, imtahan başladığı müddətə qədər subtitrlərdə göstərilən sözlərdən seçilir. Hər bir imtahan ümumilikdə 50 saniyə olmaqla 5 sözdən ibarətdir. İmtahan bitdikdən sonra nəticənizlə tanış olub, səhvlərinizi analiz edə bilərsiniz.  <br>
                  wel! - layihəsi həmçinin geniş filterləmə dəstinə malikdir. Layihədə yaradılmış <a href= "/Filterlə"><i>"Filterlə"</i></a> aləti ilə istədiyiniz filmi daha rahatlıqla tapa bilərsiniz. Layihə <i>HTML5</i> və <i>ECMAScript 6</i> spesifikasiyasını tam dəstəkləyən brauzelərdə əlçatandır. Layihə demək olar ki, kliyent yönümlü olduğu üçün layihənin məhsuldarlığı istifadəçinin cihazından (minimum 512MB əməli yaddaş) asılıdır.</p>`,
                  link: 'http://wel.az/'
                },

                {
                  title: "Fleet Management System",
                  lang:  ["html5", "css3"],
                  year: 2019,
                  scr: "fms.png",
                  info: "IKT Lab-da təşkil olunan təcrübə proqramı əsasında hazırlanan front-end tərəfi",
                  link: 'http://wel.az/projects/fms'
                },

                {
                  title: "Smart Home",
                  lang: ["html5", "css3", "js"],
                  year: 2019,
                  scr: "sm.png",
                  info: "IKT Lab-da təşkil olunan təcrübə proqramı əsasında hazırlanan front-end tərəfi",
                  link: 'http://wel.az/projects/smarthouse'
                }],

                books:[
                {
                  title: "Unity - multiplatformalı mobil oyunların hazırlanması",
                  year: 2019,
                  scr: "book-unity.png",
                  full: false,
                  info: "IKT Lab-da təşkil olunan təcrübə proqramı əsasında hazırlanan front-end tərəfi",
                  link: 'https://drive.google.com/file/d/1Bwo0tOEcK5Xtd-xrai7WD7ciDBozgvC5/preview'
                },

                {
                  title: "JavaScript - Ətraflı izah",
                  year: 2015,
                  scr: "book-js.png",
                  full: true,
                  info: "IKT Lab-da təşkil olunan təcrübə proqramı əsasında hazırlanan front-end tərəfi",
                  link: 'https://drive.google.com/file/d/1OkwfpAM_6RNCO3UqQ3EfWVTwSNe4Cy1l/preview'
                },

                {
                  title: "PHP - Ətraflı izah",
                  year: 2015,
                  scr: "book-php.jpg",
                  full: true,
                  info: "IKT Lab-da təşkil olunan təcrübə proqramı əsasında hazırlanan front-end tərəfi",
                  link: 'https://drive.google.com/file/d/1cQAm3kKf5cxZPezNZcjAag9AZKHcfLwH/preview'
                }],

                graphic:[
                  {
                    title: `Lifecycle hooks in Vue.js | with animation | 90 second`,
                    year: 2021,
                    link: `45h-EKK9hNQ`,
                    editor: ['ae', 'ai', 'ps']                    
                  },

                  {
                    title: `Bir qalanın sirri (film, 1959) - 2021 edition`,
                    year: 2021,
                    link: `xegjX4tN2so`,
                    editor: ['ae', 'ps']                    
                  },

                  {
                    title: `Beyaz geceler — Night sky in Night mode`,
                    year: 2021,
                    link: `oCkJhN4wvLE`,
                    editor: ['ae', 'ai']                    
                  },

                  {
                    title: `Elza Seyidcahan kod yazarsa - Clean Code`,
                    year: 2021,
                    link: `yjyor0HFiz0`,
                    editor: ['ae', 'ai']                    
                  },

                  {
                    title: `Proqramlaşdırma və Meyxana`,
                    year: 2021,
                    link: `xV7mITvqaQY`,
                    editor: ['ae', 'ai']                    
                  },

                  {
                    title: `Bir proqramçının intiharı`,
                    year: 2021,
                    link: `hgv2TxszMPE`,
                    editor: ['ae', 'ai']                    
                  },

                  {
                    title: `Proqramçıların mahnısı`,
                    year: 2021,
                    link: `sel_1-xXeRY`,
                    editor: ['ae', 'ai']                    
                  },

                  {
                    title: `Sehirli xalat (film, 1964) - 2019 edition`,
                    year: 2019,
                    link: `rFHzHD-oWzU`,
                    editor: ['pp', 'ps']                    
                  },

                  {
                    title: `Liderlə Menecerin fərqi`,
                    year: 2017,
                    link: `BdGFHBE0MMY`,
                    editor: ['pp', 'ps']                
                  }
                ],
                other:[
                  {
                    title: `GTA San Andeas Azərbaycan dilində`,
                    year: 2013,
                    link: `F654w0w6vJQ`,
                    editor: ['ps']                
                  }
                ]
              }
            }
        },

        computed:{
          categorizePort(){
            return this.portfolio[this.data]
          }
        },

        created(){
          this.screen = window.screen.width;
        }
})
</script>

