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


  export default {
    name:'App',
    components: {
      Header,
      Main,
      About,
      Skill,
      Vision,
      Footer
    },
    data() {
    return {
      skills: []
      }
    },
    mounted () {
      this.getSkills();
    },
    methods: {
      getSkills() {
        // dataのスキルを初期化する
        this.skills = [];
        // this.skillsを一時変数のitemsに参照コピーする
        let items = this.skills;
        // axios.getを用いてデプロイ済のfunctionにアクセスする
        this.axios.get('https://us-central1-myfirstfirebase-b14c9.cloudfunctions.net/skills')
          .then((response) => {
            response.data.forEach(function(skill) {
              // 取得したデータを１件ずつ配列に設定する
              items.push(skill);
            })
          })
          .catch((e) => {
            alert(e);
          });
      console.log(items);
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

#app {
  font-family: 'Noto Sans JP', sans-serif;
  word-wrap: break-word;
}

</style>
