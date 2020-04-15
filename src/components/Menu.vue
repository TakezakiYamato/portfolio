<template>
  <div id="drawerSection">
    <div id="drawerMenuSection">
      <ul>
        <li>
          <a
            href="#mainSection"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#aboutSection"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#skillSection"
          >
            Skill Sets
          </a>
        </li>
        <li>
          <a
            href="#visionSection"
          >
            Vision
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default ({
    name: "DrawerSection",
  })
</script>
<style scoped>
  ul {
    list-style: none;
  }

  a {
    color: white;
    font-size: 16px;
  }
</style>


