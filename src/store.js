import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(Vuex) //vuexが読み込まれている

// storeをエクスポート
export default new Vuex.Store({
  state: {
    skillCategories: [],
  },

  getters: {
    getSkills: (state) => (category)=> {
      if (state.skillCategories.length > 0) {
        return state.skillCategories.find((skill) => skill.category===category);
      }
      return [];
    }
  },
  mutations: {
    setSkillCategories(state,payload) {
      state.skillCategories = payload.skillCategories;
    },
  },
  actions: {
    async updateSkillCategories({ commit }){
      const skillCategories = [];
      const res = await axios.get("https://us-central1-myfirstfirebase-b14c9.cloudfunctions.net/skills");
      res.data.forEach((category) => {
        skillCategories.push(category);
      });
      commit('setSkillCategories',{skillCategories});
    },
  },
})
