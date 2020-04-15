<template>
  <div id="skillSection">
    <div>{{ skillTitle }}</div>
    <div>{{ skillExplain }}</div>
    <label for="gitHubLabel">GitHub</label>
    <a :href="url">https://github.com/TakezakiYamato</a>
    <div id="skillCategories">
      <v-tabs v-model="model">
        <v-tab href="#tab-1">
          Front End
        </v-tab>
        <v-tab href="#tab-2">
          Back End
        </v-tab>
        <v-tab href="#tab-3">
          Dev Option
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="model">
        <v-tab-item value="tab-1">
          <v-card>
            <v-card-text>
              <v-chip
                v-for="frontEnd in frontEnds"
                :key="frontEnd"
                class="ma-4"
                label
              >
                {{ frontEnd }}
              </v-chip>
            </v-card-text>
            <div class="chart">
              <FrontEnd />
            </div>
          </v-card>
        </v-tab-item>
        <v-tab-item value="tab-2">
          <v-card>
            <v-card-text>
              <v-chip
                v-for="backEnd in backEnds"
                :key="backEnd"
                class="ma-4"
                label
              >
                {{ backEnd }}
              </v-chip>
            </v-card-text>
            <div class="chart">
              <BackEnd />
            </div>
          </v-card>
        </v-tab-item>
        <v-tab-item value="tab-3">
          <v-card>
            <v-card-text>
              <v-chip
                v-for="option in options"
                :key="option"
                class="ma-4"
                label
              >
                {{ option }}
              </v-chip>
            </v-card-text>
            <div class="chart">
              <DevOp />
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import DevOp from "./DevOp";

export default ({
  name: "SkillSection",
  components: {
    FrontEnd,
    BackEnd,
    DevOp
  },
  data(){
    return {
      skillTitle: 'Skill Set',
      skillExplain: 'UX領域では、ユーザーリサーチを通してのペルソナ定義の経験があります。UI領域だと、iOSのガイドラインを一通り読み込んでいる為、HIGに沿ったUIデザインの提案ができます。',
      url: "https://github.com/TakezakiYamato",
      model: 'tab-1',
      frontEnds: [
        'HTML','CSS','Javascript','SCSS'
      ],
      backEnds: [
        'java','Ruby','RubyonRails','MySQL'
      ],
      options: [
        'Linux','Node','Git','GitHub','Firebase'
      ],
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

.chart {
  margin: auto;
  width: 300px;
  height: 300px;
}

</style>
