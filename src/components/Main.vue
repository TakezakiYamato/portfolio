<template>
  <div id="mainSection">
    <div id="userName">
      {{ userName }}
    </div>
    <div id="companyName">
      {{ companyName }}
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
        userName: 'Yamato Takezaki',
        companyName: 'Seattle consulting'
      }
    }
  })
</script>


<style scoped>
#mainSection {
  text-align: center;
  background: linear-gradient(135deg, #80e1f7, #06c1e6);
  width: 100%;
  height: auto;
  padding: 24px;
}

#userName {
  color: #fff;
  font-size: 18pt;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  border-bottom: solid 1px #fff;
  margin: auto;
  width: 200px;
  padding-bottom: 4px;
  font-weight: bold;
}

#companyName {
  color: #fff;
  font-size: 18pt;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  margin: 8px 16px;
  font-weight: bold;
}

#profilePicture {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 16px;
}

</style>
