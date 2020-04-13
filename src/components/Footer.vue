<template>
  <div id="footerSection">
    <v-icon
      large
      color="orange darken-2"
    >
      mdi-arrow-up-bold-box-outline
    </v-icon>
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
        copyRight: '©︎Seattleconsulting'
      }
    }
  })
</script>


<style>
#footerSection {
  text-align: center;
  background: linear-gradient(#80e1f7, #06c1e6);
  width: 100#;
  height: auto;
}

#copyRight {
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-shadow: 1px 1px 3px #e8eaf6;
}

</style>
