<template>
  <div id="headerSection">
    <nav class="header__nav">
      <Menu />
    </nav>
  </div>
</template>

<script>

  import Menu from "./Menu";

  export default ({
    name: "HeaderSection",
    components: {
      Menu
    },
 })
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";

#headerSection {
  background-color: #f3f3f3;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  z-index: 1;
  top: 0;
}

.header__nav {
  position: relative;
  left: 0%;
  height: 60px;
}

</style>

