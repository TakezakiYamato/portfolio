<template>
  <div id="app">
    <Header/>
    <Main/>
    <About/>
    <Skill/>
  </div>
</template>


<script>
 import Header from './components/Header'
 import Main from './components/Main'
 import About from './components/About'
 import Skill from './components/Skill'

 export default {
   components: {
     Header,
     Main,
     About,
     Skill

   }
 }
</script>

<style>

</style>