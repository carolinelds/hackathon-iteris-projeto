<template>
  <v-card class="mx-auto mt-12" max-width="450">
    <v-system-bar></v-system-bar>

    <v-toolbar flat color="transparent">
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Procurar Sabores"
        single-line
      ></v-text-field>
    </v-toolbar>

    <v-card-text class="py-0">
      <v-chip v-for="(keyword, i) in keywords" :key="i" class="mr-2">
        {{ keyword }}
      </v-chip>
    </v-card-text>
    <v-list three-line>
      <v-list-item
        v-for="(item, i) in searching"
        :key="i"
        ripple
        @click="() => {}"
      >
        <v-img
          :src="item.imagem"
          class="mr-4"
          max-width="96"
          min-width="96"
        ></v-img>

        <v-list-item-content>
          <span
            class="text-uppercase font-weight-regular text-caption"
            v-text="item.nome"
          ></span>

          <div><strong>Sabor:</strong> {{ item.sabor }}</div>
          <div><strong>Preço: </strong>R${{ item.preco }}</div>

          <div><strong>Endereço:</strong> {{ item.local.endereco }}</div>

          <v-card-actions>
            <router-link to="/carrinho">
              <v-btn
                outlined
                rounded
                text
                color="#FFB300"
                @click="emitClickEvent(item.id)"
              >
                <v-icon class="ml-2 mr-2">mdi-cart-variant</v-icon>
                Adicionar
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "CatalogoLista",
  data() {
    return {
      catalogoLista: [],
      search: "",
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        this.catalogoLista = json;
      });
  },
  computed: {
    keywords() {
      if (!this.search) return [];

      const keywords = [];

      for (const search of this.searching) {
        keywords.push(search.keyword);
      }

      return keywords;
    },
    searching() {
      if (!this.search) return this.catalogoLista;

      const search = this.search.toLowerCase();

      return this.catalogoLista.filter((item) => {
        const text = item.sabor.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  width: 100%;
}
</style>
