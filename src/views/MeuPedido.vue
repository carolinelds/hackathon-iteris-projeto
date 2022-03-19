<template>
  <div class="meu-pedido">
    <v-card class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://t2.rg.ltmcdn.com/pt/posts/8/5/2/ovo_de_pascoa_prestigio_9258_orig.jpg"
      ></v-img>

      <v-card-title><strong>Resumo do Pedido</strong></v-card-title>

      <v-card-text>
        <div class="my-1">
          <span class="title">Sabor: </span
          ><span class="subtitle-1">{{ produto[0].sabor }}</span>
        </div>
        <v-divider></v-divider>
        <div class="my-1">
          <span class="title">Quantidade: </span>
          <span class="subtitle-1">2</span>
        </div>

        <v-divider></v-divider>
        <div class="my-1">
          <span class="title">Preço Unitario: </span>
          <span class="subtitle-1">R$ {{ produto[0].preco }} </span>
        </div>
        <v-divider></v-divider>
        <div class="my-1">
          <span class="title">Total do Pedido: </span>
          <span class="subtitle-1">R$ {{ produto[0].preco * 2 }}</span>
        </div>
        <v-divider></v-divider>
        <div class="my-1">
          <span class="title">Vendedor: </span>
          <span class="subtitle-1">{{ produto[0].local.nome }}</span>
        </div>
        <v-divider></v-divider>
        <div class="my-1">
          <span class="title">Endereço de Entrega:</span>
          <span class="subtitle-1">{{ produto[4].local.endereco }}</span>
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Previsão de Entrega</v-card-title>

      <v-card-text>
        <span class="subtitle-1"> O Seu Pedido chegará em até 5 Horas. </span>
      </v-card-text>

      <v-card-actions>
        <router-link to="/">
          <v-btn color="success" block>
            <v-icon dark left> mdi-arrow-left </v-icon> Voltar a Home
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MeuPedido",
  data() {
    return {
      produto: [],
      search: "",
    };
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        this.produto = json;
      });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  width: 100%;
}
</style>
