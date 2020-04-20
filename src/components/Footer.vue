<template>
  <div id="footerSection">
    <a
      href="#"
      class="footer-icon"
      @click="clickSmoothScroll()"
    >
      <v-icon
        large
        color="grey lighten1"
      >
        mdi-navigation
      </v-icon>
    </a>
    <div id="copyRight">
      {{ copyRight }}
    </div>
  </div>
</template>

<script>
  export default ({
    name: "FooterSection",
    data(){
      return{
        copyRight: '©︎Seattle Consulting'
      }
    },
    methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#headerSection'),
        400,
        null,
        null,
        'y'
      )
    }
  }
  })
</script>


<style>
#footerSection {
  text-align: center;
  background: linear-gradient(#80e1f7, #06c1e6);
  width: 100%;
  height: auto;
  padding: 32px;
  position: relative;
}

.footer-icon {
  position: absolute;
  top: -20%;
  left: 50%;
  text-decoration: none;
}

#copyRight {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  margin-top: 16px;
}

</style>
