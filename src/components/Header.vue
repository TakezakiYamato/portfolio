<template>
  <div id="headerSection">
    <div class="header">
      <v-app-bar-nav-icon
        @click="toggle"
      />
    </div>
    <Drawer
      class="drawer"
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        <Menu />
      </div>
    </Drawer>
  </div>
</template>

<script>
  import Drawer from "vue-simple-drawer";
  import Menu from "./Menu";

  export default ({
    name: "HeaderSection",
    components: {
      Drawer,
      Menu
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

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";

#headerSection {
  background-color: #f3f3f3;
  height: auto;
  width: 100%;
}
</style>

