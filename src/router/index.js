import Vue from 'vue'
import VueRouter from 'vue-router'
import telaInicio from '../views/telaInicio'
import MeuCarrinho from '../views/MeuCarrinho'
import MeuPedido from '../views/MeuPedido'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
