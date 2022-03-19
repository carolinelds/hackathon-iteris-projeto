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

    <div class="container rounded-lg pink lighten-5 px-4 pb-5">
      <p class="title text-center">Seu pedido</p>

      <div class="pink lighten-4 propriedade">
        <p>
          <span class="title-1 font-weight-bold">Nome:</span>
          <span class="subtitle"> {{ itensPedido[0].nome }}</span>
        </p>
      </div>
      <div class="propriedade">
        <p>
          <span class="title-1 font-weight-bold">Sabor:</span>
          <span class="subtitle"> {{ itensPedido[0].sabor }}</span>
        </p>
      </div>
      <div class="pink lighten-4 propriedade">
        <p>
          <span class="title-1 font-weight-bold">Quantidade:</span>
          <span class="subtitle"> {{ itensPedido[0].qtd }}</span>
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
          <span class="subtitle"> R$ 5,00</span>
        </p>
      </div>

      <div class="propriedade">
        <p>
          <span class="title-1 font-weight-bold">Preço final:</span>
          <span class="subtitle"> R$ {{ itensPedido[0].preco }}</span>
        </p>
      </div>
    </div>

    <router-link to="/pedido">
      <v-btn block class="mt-6 pink lighten-4">Concluir</v-btn>
    </router-link>
  </v-container>
</template>

<script>
let itensPedido = [
  {
    id: 1,
    nome: "nome-teste",
    sabor: "sabor-teste",
    qtd: "qtd-teste",
    preco: "preco-teste",
  },
];

let precoFinal = parseFloat(57);

export default {
  name: "MeuCarrinho",
  //props: {
  //    itensPedido: {
  //        type: Array,
  //        required: true
  //    },
  //    enderecoCliente: {
  //        type: Array,
  //        required: true
  //    },
  //    precoFinal: {
  //        type: Number,
  //        required: true
  //    },
  //},
  data() {
    return {
      itensPedido,
      //enderecoCliente,
      precoFinal,
    };
  },
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