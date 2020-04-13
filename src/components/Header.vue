<template>
  <div id="headerSection">
    <div>
      <v-app-bar-nav-icon @click="toggle" />
    </div>
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        content here
      </div>
    </Drawer>
  </div>
</template>

<script>
  import Drawer from "vue-simple-drawer";

  export default ({
    name: "HeaderSection",
    components: {
      Drawer
    },
    data(){
      return{
        open: false
      }
    },
    methods:{
      toggle() {
        this.open = !this.open
      }
    }
 })
</script>

<style scoped>
  #headerSection {
    width: auto;
  }
</style>
