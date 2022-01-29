const func = {
    data(){
      return {
        nav: false
      }
    },
  
    mounted(){
        this.$root.$on("nav", n=>this.nav = n)
    }
  }

  export default func;