<template>
    <div>
        <b-modal no-close-on-backdrop size="xl" id="modal-center" footerClass="d-none" headerClass="d-none" centered ref = "mdl" v-model="modal" bodyClass="overflow-hidden" scrollable>
            <b-container class="d-flex flex-column" :class ="format=='web'?'position-relative':'align-items-center'">
                <i @click="$emit('modal')" style="top:5px;z-index:15" :style="{'right':((format=='pdf'&&size!=45)?60:5)+'px'}" class="fas fa-times c-p_ ml-auto text-white position-absolute"></i>
                <div v-if="format=='web' && about.length > 0" class="d-flex flex-column align-items-center bg-white p-4">
                    <img :src="about[0]" class="logo img-fuild">
                    <p style="max-height: 450px" class="pr-1 text-left overflow-auto" v-html="about[1]"></p>
                </div>

                <div class="row text-white" v-else-if="format=='web'">
                        <div class="l-a-l d-flex justify-content-center align-items-center" v-if= "loading">
                            <i @click = "loading = false" style = "position: absolute; font-size: .5em; cursor: pointer; z-index: 999999999;" class="fas fa-times icn-close"></i>
                            <i class = "fas fa-spinner __l_api"></i>
                        </div>
                    <iframe @load="loading=false" :src="link" frameborder="0"></iframe>
                </div>


                <div d-flex align-items-center v-else-if="format=='pdf'">
                    <iframe :src="link" :width="size == 45 ? 360 : 480" height="600" allow="autoplay"></iframe>
                </div>

                <div class="d-flex align-items-center" v-else>
                    <youtube :width="size == 45 ? 360 : 720" :player-vars="{ autoplay: 1}" :video-id="link" ref="youtube"></youtube>
                </div>
                <!-- <div class="d-block m-auto">
                    <button class="btn btn-info">{{!full?'Əldə etmək üçün müraciət et':'Yüklə'}}</button>
                </div> -->
            </b-container>
        </b-modal>
    </div>
</template>

<script>
import pdf from 'vue-pdf'
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
 
Vue.use(VueYoutube)

export default({
    props:["format", "link", "full", "about"],
    components: {pdf},
    data(){
        return{
            modal: true,
            page: 2,
            pages: 0,
            loading: false,
            src: null,
            player: null,
            loading: true,
            size: null
        }
    },

    methods:{
    },

    created(){
        this.size = window.screen.width < 769 ? 45 : 30 
    },

    mounted(){
    }


})
</script>

<style scoped>
.row iframe{
    width: 100%;
    height: 600px;
    padding: 0!important;
}

.row{
    position: relative;
    min-height: 800px;
}

.row > iframe{
    position: absolute;
    height: 600px;
    top: 0;
}



</style>


