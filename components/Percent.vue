<!-- Please remove this file from your project -->
    <template id="percent">
      <div class="p-back">
        <div class="p" :style="{'width': percent + '%'}"></div>
      </div>
    </template>

    <script>
    
    export default({
      props: ["percent"]
    })
    </script>
    
