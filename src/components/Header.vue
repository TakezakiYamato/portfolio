<template>
 <v-app>
    <v-navigation-drawer app v-model="drawer">
      
      <v-list-item v-for="nav_list in nav_lists" :key="nav_list">
        <v-list-item-content>
          <v-list-item-title>{{ nav_list }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
   

    </v-navigation-drawer>
      <v-app-bar color="#F3F3F3" app>
          <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>portfolio</v-toolbar-title>
      </v-app-bar>
  </v-app>
 
</template>
<script>
 export default {
   data(){
     return{
       drawer: null,
       nav_lists:[
         'Home',
         'About me',
         'Skill Sets',
         'Vision',
         'Customize Item1',
         'Customize Item2'
       ]
     }
   }
 }

</script>


<style>


</style>