<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      {{ aboutTitle }}
    </div>
    <div id="aboutExplain">
      {{ aboutExplain }}
    </div>
  </div>
</template>

<script>
export default({
  name: "AboutSection",
  data(){
    return {
      aboutTitle: 'About',
      aboutExplain: '熊本県天草市出身。西南学院大学経済学部では行動経済学を専攻し、よりリアルな経済学を学ぶことで、人間がどういった行動をとり、それにより経済にどんな影響を与えていくかを考えるようになる。在学中、短期の海外インターンシップや、スタートアップ企業での業務を経験し、UXデザインのキャリアを歩んでいくことを決意。UXを通して、ユーザーが物やサービスに触れた時の経験を設計していく。'
    }
  }
})


</script>

<style scoped>
  #aboutSection {
    text-align: center;
    background-color: #f5f5f5;
    width: 100%;
    height: auto;
    padding: 16px 0;
  }

  #aboutTitle {
    color: #20879f;
    font-size: 18pt;
    font-weight: bold;
    text-shadow: 1px 1px 3px #e8eaf6;
    margin: 8px;
  }

  #aboutExplain {
    color: #707070;
    font-size: 12pt;
    word-wrap: break-word;
    margin: auto;
    padding-bottom: 20px;
    width: 318px;
    line-height: 1.9;
  }

</style>
