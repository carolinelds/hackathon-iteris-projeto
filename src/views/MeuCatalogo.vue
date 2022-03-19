<template>
  <ul>
    <li v-for="item of catalogoLista" :key="item.id">
      <img :src="item.imagem" />
      <v-btn @click="emitClickEvent(item.id)">Clique aqui</v-btn>
    </li>
  </ul>
</template>

<script>
import { EventBus } from '../main.js'

export default {
  name: "CatalogoLista",
  data() {
    return {
      catalogoLista: [],
      idSelecionado: 0
    };
  },
  methods: {
      emitClickEvent(id){
          this.idSelecionado = id;
          console.log(this.idSelecionado);
          EventBus.$emit("selecionou", this.idSelecionado)
      }
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        this.catalogoLista = json;
      });
  },
};
</script>