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
  // コンポーネントでいう算出プロパティの事
  getters: {
    skillName: (state) => (index) => {
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
  // state状態を更新する場所,メソッド
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
      return axios.get("https://us-central1-myfirstfirebase-b14c9.cloudfunctions.net/skills")
        .then(response => {
          const skills = response.data
          commit('setSkills', {skills})
        })
    }
  }
})
