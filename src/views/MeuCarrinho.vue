<template>
  <v-container class="mt-5">
    <v-img
      src="https://imagens-revista.vivadecora.com.br/uploads/2019/03/Ovos-de-p%C3%A1scoa-gourmet-com-recheios-deliciosos.-Fonte-Escola-de-doce.jpg"
      max-height="200"
      class="rounded-lg mb-5"
    >
    </v-img>

    <div class="rounded-lg accent2 pa-4">
      <p class="title">Seu pedido</p>

      <div class="accent">
        <p>
          <span class="title-1 font-weight-bold">Nome:</span>
          <span class="subtitle"> {{ itensPedido[0].nome }}</span>
        </p>
      </div>
      <div>
        <p>
          <span class="title-1 font-weight-bold">Sabor:</span>
          <span class="subtitle"> {{ itensPedido[0].sabor }}</span>
        </p>
      </div>
      <div class="accent">
        <p>
          <span class="title-1 font-weight-bold">Quantidade:</span>
          <span class="subtitle"> {{ itensPedido[0].qtd }}</span>
        </p>
      </div>
      <div>
        <p>
          <span class="title-1 font-weight-bold">Preço final:</span>
          <span class="subtitle"> R$ {{ itensPedido[0].preco }}</span>
        </p>
      </div>
    </div>

    <p class="mt-3 ml-4">
      <span class="title">Seu endereço: </span
      ><span class="caption">{{ enderecoCliente }}</span>
    </p>

    <router-link to="/">
      <v-btn class="success" block>Concluir</v-btn>
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

// inserção do cliente
let enderecoCliente = "Rua Franklin Bittencourt, n. 11, ap. 305";

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
      enderecoCliente,
      precoFinal,
    };
  },
};
</script>

<style scoped>
v-btn {
  text-decoration: none;
}
</style> 