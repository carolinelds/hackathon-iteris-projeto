<template>
  <v-container>
    <div class="card mt-5 accent2">
      <h1 class="font-weight-bold mt-1 text-center">PáscoApp</h1>
      <img
        src="https://tudoela.com/wp-content/uploads/2017/03/Ovo-de-P%C3%A1scoa-caseiro-810x540.jpg"
        alt="ovo de chocolate"
      />

      <p>Os melhores ovos de páscoa caseiros disponíveis em um só lugar.</p>
      <p>Confira nosso catálogo:</p>

      <router-link to="/catalogo">
        <v-btn
          block
          color="primary"
          depressed
          elevation="5"
          x-large
          class="mt-2 mb-2"
          ><span>Catálogo</span></v-btn
        >
      </router-link>
    </div>

    <div class="card2 mt-5 accent2">
      <div class="carrinho">
        <router-link to="/carrinho">
          <v-btn color="primary" depressed elevation="5" large class="mt-2 mb-2"
            ><span>Carrinho</span></v-btn
          >
        </router-link>
      </div>

      <div class="Pedido">
        <router-link to="/pedido">
          <v-btn color="primary" depressed elevation="5" large class="mt-2 mb-2"
            ><span>&nbsp;&nbsp;Pedido&nbsp;&nbsp;&nbsp;</span></v-btn
          >
        </router-link>
      </div>
    </div>

    <div class="card mt-5 accent2">
      <h2 class="title text-center">Sobre</h2>

      <p>
        A PáscoAPP nasceu com o objetivo de aproximar os vendedores de ovos de
        páscoa caseiros de seus clientes, visando aproximar a comunidade.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "telaInicio",
};
</script>

<style scoped>
h1 {
  font-family: tahoma;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.212);
}

a {
  text-decoration: none;
}

.card {
  padding: 10px;

  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.card img {
  margin-top: 10px;
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.card span {
  text-decoration: none;
}

.card p {
  margin: 3px;
  font-family: tahoma;
  font-weight: 500;
  font-size: 1.5em;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.card2 {
  display: flex;
  justify-content: space-between;
  padding: 10px;

  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
</style>