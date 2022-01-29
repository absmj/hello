<template>

      <div id="p position-relative">
        <div class="container main">
          <Nav v-if="nav"/>
          <nuxt />
          
        </div>
        <Sidebar  v-if="nav" />
      </div>

      
</template>
<script>
import Nav from "@/components/Nav.vue"
import Sidebar from "@/components/Sidebar.vue"
export default ({
  data(){return{nav:false}},
  components: {Nav, Sidebar},
  created(){
    this.$nuxt.$on("nav", ()=>this.nav=true); 
    if(this.$route.path !== "/") this.nav=true 
  }
})
</script>
