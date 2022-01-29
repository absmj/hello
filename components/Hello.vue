<!-- Please remove this file from your project -->
<template>
      <div>
          <div class="first">
              <img src="/profile.jpg" class="profile img-fuild">
              <h3>Salam!</h3>
              <div style="font-size:var(--fn)" class="hello pl-3">
                <p>Mənim adım Abbasdı.</p>
                <p class="text-justify"><span v-html="(i==0?'Gəl daha yaxından tanış olaq!':a.substr(0, i))"></span>
                <span class="ml-1 blink infblink" :class="i==a.length?'infblink':false"></span></p>
                <div v-if="i == 0" class="btn" @click="typewriter"><i class="fa fa-angle-down"></i></div>
                <nuxt-link title="Portfolio" to="/portfolio" v-else-if="i == a.length">
                  <div @click="$nuxt.$emit('nav')" class="btn"><i class="fa fa-angle-up"></i></div>
                </nuxt-link>
              </div>
          </div>
      </div>        
</template>

<script>

export default ({
  data(){
    return{
      h: true,
      a: `Əsas fəaliyyətim front-end proqramlaşdırmadır. 2011-ci ildən proqramlaşdırma biliklərinə yiyələnirəm. Boş vaxtlarımda gələcək hədəflərim üçün 3-ölçülü qrafika məşğul olub, təcrübə toplamağa çalışıram. Məncə bu qədər kifayətdir, necə deyərlər ''əməlsiz sözlər kəsərsiz qılınc kimidir''. İndi isə, gəlin sizə öz kiçik portfoliomu göstərim.`,
      i: 0,
      cursiv: [],
      z: 0
    }
  },

  methods:{
    typewriter(){
      const typewriter = ()=>{
            this.i += 1;
            if(this.i >= this.a.length) clearInterval(inter);
      };
      let inter = setInterval(typewriter, 25);
    }
  },

  watch:{
    i: function(){
      if(this.i == this.cursiv[this.z]) 
        this.a = this.a.replace(/''(.*?)''/, '<i>"$1"</i>');

      if(this.cursiv[this.z] <= this.i) this.z +=1;
    }
  },

  mounted(){
    let match, patt = /''(.*?)''/gm;
    while (match = patt.exec(this.a)) {
        this.cursiv.push(patt.lastIndex);
    }
  }
})
</script>


