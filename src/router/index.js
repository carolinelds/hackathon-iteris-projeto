import Vue from 'vue'
import VueRouter from 'vue-router'
import telaInicio from '../views/telaInicio'
import MeuCarrinho from '../views/MeuCarrinho'
import MeuPedido from '../views/MeuPedido'
import MeuCatalogo from '../views/MeuCatalogo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'telaInicio',
    component: telaInicio
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: MeuCarrinho
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: MeuPedido
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: MeuCatalogo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
