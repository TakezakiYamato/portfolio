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
  background: white;
  width: 100%;
  height: auto;
  text-align: center;
  padding-bottom: 24px;
}

#visionTitle {
  margin: 8px 8px 8px 16px;
  height: 30px;
  color: #20879f;
  font-weight: bold;
  text-shadow: 1px 1px 3px #e8eaf6;
  font-size: 19px;
}

#visionExplain {
  margin: auto;
  padding-bottom: 16px;
  width: 320px;
  height: auto;
  color: #707070;
  font-size: 15px;
  word-wrap: break-word;
  line-height: 1.9;
}

</style>
