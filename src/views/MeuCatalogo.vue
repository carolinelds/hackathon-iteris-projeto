<template>
    <ul> 
        <li v-for="item of catalogoLista" :key="item.id">
                <img :src="item.imagem">
        </li>
    </ul>
  
</template>

<script>
    export default {
        name: 'CatalogoLista',
        data() {
        return {
            catalogoLista: []
        }
        },
        created() {
        fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
            .then(response => response.json())
            .then(json => {
            this.catalogoLista = json;
            })
        }
    }
</script>