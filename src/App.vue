<template>
  <div id="app">
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
</template>


<script>
 import Header from './components/Header'
 import Main from './components/Main'
 import About from './components/About'
 import Skill from './components/Skill'
 import Vision from './components/Vision'
 import Footer from './components/Footer'


 export default {
   components: {
     Header,
     Main,
     About,
     Skill,
     Vision,
     Footer
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
