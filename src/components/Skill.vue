<template>
  <div id="skillSection">
    <div>{{ skillTitle }}</div>
    <div>{{ skillExplain }}</div>
    <label for="gitHubLabel">GitHub</label>
    <a :href="url">https://github.com/TakezakiYamato</a>
    <a>Front-end</a>
    <div id="skillCategories">
      <v-tabs
        v-model="skillCategories"
        centered
        grow
      >
        <v-tab href="#frontEnd">
          Front End
        </v-tab>
        <v-tab href="#backEnd">
          Back End
        </v-tab>
        <v-tab href="#debOps">
          Dev Option
        </v-tab>
        <v-tabs-item v-model="skillCategories">
          <v-tab-item value="frontEnd">
            {{ HTML }}
          </v-tab-item>
          <v-tab-item value="backEnd">
            {{ SCRIPT }}
          </v-tab-item>
          <v-tab-item value="debOps">
            {{ GIT }}
          </v-tab-item>
        </v-tabs-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
export default ({
  name: "SkillSection",
  data(){
    return {
      skillTitle: 'Skill Set',
      skillExplain: 'UX領域では、ユーザーリサーチを通してのペルソナ定義の経験があります。UI領域だと、iOSのガイドラインを一通り読み込んでいる為、HIGに沿ったUIデザインの提案ができます。',
      url: "https://github.com/TakezakiYamato",
      skillCategories: 'frontEnd',
      HTML: 'HTML',
      SCRIPT: 'SCRIPT',
      GIT: 'GIT'
    }
  }
})
</script>

<style scoped>
#skillSection {
  text-align: center;
  background-color: #fff;
  width: 100%;
  height: auto;
}

#skillTitle {
  color: #20879f;
  font-size: 18px;
  text-shadow: 1px 1px 3px #e8eaf6;
}

#skillExplain {
  color: #707070;
  font-size: 12px;
  word-wrap: break-word;
  line-height: 0.25 em;
}

label[for="gitHubLabel"] {
  color: #20879f;
  font-size: 14px;
}

#gitHubLink {
  color: #20879f;
  font-size: 12px;
}

#skillCategories {
  height: 400px;
  margin: auto;
}

</style>
