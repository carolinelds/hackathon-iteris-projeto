<template>
  <v-app>
    <template>
      <v-app>
        <MeuMenu />
        <v-content>
          <router-view></router-view>
        </v-content>
      </v-app> </template
  ></v-app>
</template> 

 

<script>
import MeuMenu from './components/shared/MeuMenu.vue'

export default {
  name: "App",
  components: {
    MeuMenu
  }
};
</script> 

 
<style>
</style>
  
