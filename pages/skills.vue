
    <template id="skills">
      <div class="window">
          <h3 class="p-0 pt-1 m-0">Bacarıqlar</h3>
          <hr>
          <div class="tabs_">
            <div @click="s = !s" class="tab_" :data="s">
              Proqramlaşdırma
            </div>
            <div @click="s = !s" class="tab_" :data="!s">
              Digər
            </div>
          </div>

          <transition name="fade">
            <div v-if="s" class="row" key=3>
              <div v-for="(i, k) in skills.programming" :key="k" class="col-sm-12 col-md-6 pb-2
              ">
                <p class="p-0 m-0">{{i.title}}</p>
                <percent :percent="i.level"></percent>
              </div>
            </div>
            <div v-else class="row" key=4>
              <div v-for="(i, k) in skills.other" :key="k" class="col-sm-12 col-md-6 pb-2
              ">
                <p class="p-0 m-0">{{i.title}}</p>
                <percent :percent="i.level"></percent>
              </div>
            </div>
          </transition>
      </div>  
    </template>
  
<script>
import percent from "@/components/Percent.vue"

export default ({
components: {percent},
data(){
        return{
              s: true,
              skills:{
                programming: [{
                  title: "Vue.js",
                  level: 80
                },
                {
                  title: "Vuex",
                  level: 40
                },
                {
                  title: "Nuxt.js",
                  level: 40
                },
                {
                  title: "Bootstrap",
                  level: 100
                },
                {
                  title: "CSS3",
                  level: 95
                },
                {
                  title: "HTML5",
                  level: 100
                },
                {
                  title: "PHP (core)",
                  level: 60
                },
                {
                  title: "RegExp",
                  level: 60
                },
                {
                  title: "SQL",
                  level: 75
                }],
                other:[
                {
                  title: "After Effects",
                  i: "ae.svg",
                  level: 80
                },
                {
                  title: "Premier Pro",
                  i: "pp.svg",
                  level: 70
                },
                {
                  title: "Photoshop",
                  i: "ps.svg",
                  level: 75
                },
                {
                  title: "Illustrator",
                  i: "ai.svg",
                  level: 75
                },
                {
                  title: "Word",
                  i: "ai.svg",
                  level: 95
                },
                {
                  title: "PowerPoint",
                  i: "ai.svg",
                  level: 95
                }]
              }
            }
        }
})
</script>

