<template>
    <div class="meu-menu">
      <v-app-bar color="amber darken-1" dense dark>
          <v-app-bar-nav-icon @click="drawer = true">
          </v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <v-toolbar-title>PáscoApp</v-toolbar-title>
          
      </v-app-bar>
      
      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="amber darken-1"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>

              <v-list-item-title>INÍCIO</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-egg-easter</v-icon>
              </v-list-item-icon>
              <v-list-item-title>CATÁLOGO</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cart-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-title>MEU CARRINHO</v-list-item-title>
            </v-list-item>
          </router-link>

            <router-link to="">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title>MEUS PEDIDOS</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'MeuMenu',
    data: () => ({
      drawer: false,
      group: null,
    }),
}
</script>

<style scoped>
.meu-menu a {
    text-decoration: none;
}
</style>