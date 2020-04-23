import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(Vuex) //vuexが読み込まれている

// storeをエクスポート
export default new Vuex.Store({
  // like data of component
  state: {
    skills: [],
    loaded: false
  },
  // コンポーネントでいう算出プロパティの事=データ加工
  getters: {
    //skillの名前の配列を取り出す
    skillName: (state) => (index) => {
      //関数の処理内容
      const skillNameArray = []
      if(state.skills[index]){
        state.skills[index].skill.forEach((Skill) => {
          skillNameArray.push(Skill.name)
        })
      }
      return skillNameArray
    },


    skillScore: (state)=> (index) => {
      const skillScoreArray = []
      if(state.skills[index]){
        state.skills[index].skill.forEach((Skill)=> {
          skillScoreArray.push(Skill.score)
        })
      }
      return skillScoreArray
    }

  },
  // state状態を更新する場所,メソッド.上書きしたい。
  mutations: {
    setSkills(state, payload) {
      console.log(payload);
      state.skills = payload.skills;
      state.loaded = true
    },
  },
  // mutationsをコミットする場所、非同期通信で主に処理する
  actions: {
    //引数分割束縛でcommitするための情報描きますよの準備
    getSkills: function({commit}) {
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skills';
      return axios.get(functionsUrl)
        .then(response => {
          const skills = response.data
          commit('setSkills', {skills})
        })
    }
  }
})

