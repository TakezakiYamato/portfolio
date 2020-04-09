<template>
  <div id="mainSection">
    <div id="userName">Yamato.takezaki</div>
    <div id="companyName">seattle consulting</div>
    <img src="@/assets/profilePicture.jpg" id="profilePicture"/>
  </div>
</template>



<script>

</script>


<style scoped>
#mainSection {
  text-align: center;
  background: linear-gradient(#80E1F7, #06C1E6);
  width: 100%;
  height: auto;
}
#userName {
  color: #FFFFFF;
  font-size: 18pt;
  text-shadow: 1px 1px 3px #e8eaf6;
}
#companyName {
  color: #FFFFFF;
  font-size: 18pt;
  font-type: bold;
  text-shadow: 1px 1px 3px #e8eaf6;
}
#profilePicture {
  border-radius: 50%;
  width:64px;
  height: 64px;
}

</style>