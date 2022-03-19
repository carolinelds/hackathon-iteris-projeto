<template>
  <v-container class="mt-5">
    <div class="imagem-pedido">
      <v-img
        src="https://imagens-revista.vivadecora.com.br/uploads/2019/03/Ovos-de-p%C3%A1scoa-gourmet-com-recheios-deliciosos.-Fonte-Escola-de-doce.jpg"
        max-height="150"
        class="rounded-lg mb-5"
      >
      </v-img>
    </div>

    <div class="rounded-lg accent2 pa-4">
      <p class="title">Seu pedido</p>

      <div class="accent">
        <p>
          <span class="title-1 font-weight-bold">Nome:</span>
          <span class="subtitle"> {{ catalogoLista[0].nome }}</span>
        </p>
      </div>
      <div class="propriedade">
        <p>
          <span class="title-1 font-weight-bold">Sabor:</span>
          <span class="subtitle"> {{ catalogoLista[0].sabor }}</span>
        </p>
      </div>
      <div class="accent propriedade">
        <p>
          <span class="title-1 font-weight-bold">Quantidade:</span>
          <span class="subtitle"> {{ 1 }}</span>
        </p>
      </div>
      <div class="propriedade">
        <p>
          <span class="title-1 font-weight-bold">Preço:</span>
          <span class="subtitle"> R$ {{ catalogoLista[0].preco }}</span>
        </p>
      </div>
    </div>

    <v-text-field
      v-model="message3"
      filled
      label="Seu endereço"
      clearable
      class="rounded-t-xl mt-6"
    ></v-text-field>

    <div class="container rounded-lg pink lighten-5 pa-1">
      <div class="propriedade">
        <p>
          <span class="title-1 font-weight-bold">Frete: </span>
          <span class="subtitle"> R$ 5.00</span>
        </p>
      </div>

      <div class="propriedade">
        <p>
          <span class="title-1 font-weight-bold">Preço final:</span>
          <span class="subtitle"> R$ {{ 5 + catalogoLista[0].preco }}</span>
        </p>
      </div>
    </div>

    <router-link to="/pedido">
      <v-btn block class="mt-6 success">Concluir</v-btn>
    </router-link>
  </v-container>
</template>

<script>
//import EventBus from "../main.js";

export default {
  name: "MeuCarrinho",
  data() {
    return {
      //idSelecionado: 0,
      catalogoLista: []
      //itemSelecionado: []
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        this.catalogoLista = json;
      })
  //  EventBus.$on("selecionou", (idSelecionado) => {
  //    console.log("selecionou event called", idSelecionado);
  //  })
  },
  //methods: {
  //  comparaId(){
  //    for (let i = 0; i < this.catalogoLista.lenght; i++){
  //      if (this.idSelecionado === this.catalogoLista[i].id){
  //        this.itemSelecionado = this.catalogoLista[i];
  //        console.log(this.itemSelecionado);
  //        return this.itemSelecionado;
  //      }
  //    }
  //  }
  //}
};
</script>

<style scoped>
v-btn {
  text-decoration: none;
}
v-img {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.411);
}

a {
  text-decoration: none;
}

.container,
.imagem-pedido {
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.411);
}

.propriedade {
  height: 40px;
  padding: 10px;
  padding-left: 10px;
  border-radius: 7px;
}
</style> 