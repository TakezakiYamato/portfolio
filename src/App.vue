<template>
  <v-app id="app">
    <Header />
    <Main />
    <div>{{ this.skills }}</div>
    <About />
    <Skill />
    <Vision />
    <Footer />
  </v-app>
</template>


<script>
  import Header from './components/Header'
  import Main from './components/Main'
  import About from './components/About'
  import Skill from './components/Skill'
  import Vision from './components/Vision'
  import Footer from './components/Footer'
  import {mapGetters,mapActions} from 'vuex'


  export default {
    name:'App',
    components: {
      Header,
      Main,
      About,
      Skill,
      Vision,
      Footer,
    },
    data: function(){
      return {
        skills: [],
        category: 'front-end',
      }
    },
    computed: {
      ...mapGetters({
        get: 'getSkills',
      }),
    },

    created() {
      this.updateSkillCategories();
    },

    methods: {
      ...mapActions(['updateSkillCategories']),

      getSkill() {
        this.get(this.category);
      },

      async test() {
        return await this.updateSkillCategories();
      },
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

#app {
  font-family: 'Noto Sans JP', sans-serif;
  word-wrap: break-word;
}

</style>
