<template>
  <div id="visionSection">
    <div id="visionTitle">
      {{ visionTitle }}
    </div>
    <div id="visionExplain">
      {{ visionExplain }}
    </div>
  </div>
</template>


<script>
  export default ({
     name: "VisionSection",
     data(){
       return{
         visionTitle: 'Vision',
         visionExplain: 'UIから開発に至るまでの知識を蓄え、UXの観点からプロダクトを向上させる為の提案ができるようにしていきます。また、UXデザインを通して、ユーザーと技術の架け橋になることを目指します。'
       }
     }
  })
</script>


<style>
#visionSection {
  background: linear-gradient(#f5f5f5, #06c1e6);
  width: 100%;
  height: auto;
  text-align: center;
}

#visionTitle {
  margin: auto;
  padding: 5px;
  width: 100px;
  height: 30px;
  color: #20879f;
  font-weight: bold;
  text-shadow: 1px 1px 3px #e8eaf6;
}

#visionExplain {
  margin: auto;
  padding: 10px;
  width: 400px;
  height: 100px;
  color: #707070;
  font-size: 12px;
  word-wrap: break-word;
}

</style>
