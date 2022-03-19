<template>
  <v-container>
    <h1 class="font-weight-bold mt-2 text-center">PáscoAPP</h1>

    <div class="sobre">
      <img
        src="https://tudoela.com/wp-content/uploads/2017/03/Ovo-de-P%C3%A1scoa-caseiro-810x540.jpg"
        alt="ovo de chocolate"
      />

      <p>Os melhores ovos de páscoa caseiros disponíveis em um só lugar.</p>
      <p>Confira nosso catálogo:</p>

      <router-link to="/catalogo">
        <v-btn block color="red" depressed elevation="5" large class="mt-2 mb-2"
          ><span>Catálogo</span></v-btn
        >
      </router-link>
    </div>

    <div class="sobre">
      <h2 class="title text-center">Sobre</h2>

      <p>
        A PáscoAPP nasceu com o objetivo de aproximar os vendedores de ovos de
        páscoa caseiros de seus clientes, visando facilitar essa comunicação.
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

.sobre {
  margin: 5px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: rgba(128, 128, 128, 0.301);
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.411);
}

.sobre img {
  margin-top: 10px;
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.411);
}

.sobre span {
  text-decoration: none;
}

.sobre p {
  margin: 3px;
  font-family: tahoma;
  font-weight: 500;
  font-size: 1.5em;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.295);
}
</style>