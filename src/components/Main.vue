<template>
  <div id="mainSection">
    <div id="userName">
      Yamato.takezaki
    </div>
    <div id="companyName">
      seattle consulting
    </div>
    <img
      id="profilePicture"
      src="@/assets/profilePicture.jpg"
    >
  </div>
</template>



<script>
  export default ({
    name: "MainSection",
    data(){
      return{
        username: 'Yamato Takezaki',
        companyName: 'Seattle consulting'
      }
    }
  })
</script>


<style scoped>
#mainSection {
  text-align: center;
  background: linear-gradient(#80e1f7, #06c1e6);
  width: 100%;
  height: auto;
}

#userName {
  color: #fff;
  font-size: 18pt;
  text-shadow: 1px 1px 3px #e8eaf6;
}

#companyName {
  color: #fff;
  font-size: 18pt;
  text-shadow: 1px 1px 3px #e8eaf6;
}

#profilePicture {
  border-radius: 50%;
  width: 64px;
  height: 64px;
}

</style>
