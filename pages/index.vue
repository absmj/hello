<template>
    
        <Hello/>


</template>

<script>

export default ({
  data(){
      return{
        hello: false,
        comp: null,
        dn: false,
      }
  }
})
</script>

<style scoped>


    .fade-enter-active{
      transition: opacity .6s;
      /*transition: transform 6s;*/
      transition-timing-function: ease-in-out;
    }

    .fade-enter-leave{
      transition: opacity .6s;
      /*transition: transform 6s;*/
      transition-timing-function: ease-in-out;
    }
</style>
